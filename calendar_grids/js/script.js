'use strict';

/**
 * Global API with call queue. Safe to call before DOM is ready.
 */
(function (global) {
  const queue = [];
  const api = {
    _ready: false,
    _impl: null,

    onReady(cb) { this._ready ? cb() : document.addEventListener('calendar-ready', cb, { once: true }); },

    setMonthDataset(...args) { return this._ready ? this._impl.setMonthDataset(...args) : queue.push(['setMonthDataset', args]); },
    setMonthValues (...args) { return this._ready ? this._impl.setMonthValues (...args) : queue.push(['setMonthValues',  args]); },
    getView()                { return this._ready ? this._impl.getView() : { year: NaN, month0: NaN }; },
    setView       (...args)  { return this._ready ? this._impl.setView(...args) : queue.push(['setView', args]); },
    refresh()                { return this._ready ? this._impl.refresh() : queue.push(['refresh', []]); },
    goToToday()              { return this._ready ? this._impl.goToToday() : queue.push(['goToToday', []]); }
  };
  global.CalendarMetrics = api;

  function flush() {
    while (queue.length) {
      const [name, args] = queue.shift();
      if (typeof api[name] === 'function') api[name](...args);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // ====== UI ======
    const titleEl = document.querySelector('.date-title');
    const prevBtn = document.querySelector('.btn-previous-month');
    const nextBtn = document.querySelector('.btn-next-month');
    const todayBtn = document.querySelector('.btn-today');
    const legendEl = document.querySelector('.calendar-legend');

    // 42 day cells (skip 7 weekday headers)
    const dayCells = Array.from(document.querySelectorAll('.calendar-space .day-cell-wrap'))
      .slice(7)
      .map(wrap => wrap.querySelector('.day-cell-content'));

    // Tooltip element (one for the whole widget)
    const tooltip = createTooltip();

    // ====== Dictionaries ======
    const EN_MONTHS = [
      'January','February','March','April','May','June',
      'July','August','September','October','November','December'
    ];
    const DEFAULT_COLORS = ['#3b82f6','#f59e0b','#10b981','#8b5cf6','#ef4444'];

    // ====== Real 'today' ======
    const realToday = new Date();
    const realY = realToday.getFullYear();
    const realM0 = realToday.getMonth();
    const realD  = realToday.getDate();

    // ====== View state ======
    let viewYear  = realY;
    let viewMonth = realM0; // 0..11

    // ====== Monthly datasets store ======
    // key: "YYYY-MM" -> { layers:number, labels:string[], colors:string[], data: Map<day -> number[]> }
    const monthStore = new Map();

    // ====== Internal impl ======
    const impl = {
      setMonthDataset(year, month0, payload) {
        monthStore.set(ymKey(year, month0), normalizeDataset(payload));
        if (year === viewYear && month0 === viewMonth) renderAll();
      },
      setMonthValues(year, month0, dataObj) {
        const key = ymKey(year, month0);
        const prev = monthStore.get(key) || createDefaultDataset();
        const norm = normalizeDataObject(dataObj, prev.layers);
        monthStore.set(key, { ...prev, data: norm });
        if (year === viewYear && month0 === viewMonth) renderAll();
      },
      getView() { return { year: viewYear, month0: viewMonth }; },
      setView(year, month0) { viewYear = year; viewMonth = clamp(month0, 0, 11); renderAll(); },
      refresh() { renderAll(); },
      goToToday() { viewYear = realY; viewMonth = realM0; renderAll(); }
    };

    global.CalendarMetrics._impl = impl;
    global.CalendarMetrics._ready = true;

    // Nav
    prevBtn?.addEventListener('click', () => { if (viewMonth === 0) { viewMonth = 11; viewYear -= 1; } else { viewMonth -= 1; } renderAll(); });
    nextBtn?.addEventListener('click', () => { if (viewMonth === 11) { viewMonth = 0; viewYear += 1; } else { viewMonth += 1; } renderAll(); });
    todayBtn?.addEventListener('click', () => impl.goToToday());

    // Initial render
    renderAll();

    // notify and flush queued calls
    document.dispatchEvent(new Event('calendar-ready'));
    flush();

    // ====== Render ======
    function renderAll() {
      titleEl.textContent = `${EN_MONTHS[viewMonth]} ${viewYear}`;
      ensureMonthExists(viewYear, viewMonth);
      renderLegend();
      renderGrid();
    }

    function renderLegend() {
      const ds = getDataset(viewYear, viewMonth);
      if (!legendEl) return;
      legendEl.innerHTML = '';
      for (let i = 0; i < ds.layers; i++) {
        const item  = document.createElement('div');
        item.className = 'legend-item';
        const dot   = document.createElement('span');
        dot.className = 'legend-dot';
        dot.style.background = ds.colors[i] || DEFAULT_COLORS[i] || '#999';
        const label = document.createElement('span');
        label.textContent = ds.labels[i] || `Metric ${i+1}`;
        item.append(dot, label);
        legendEl.appendChild(item);
      }
    }

    function renderGrid() {
      const ds = getDataset(viewYear, viewMonth);

      const firstOfMonth = new Date(viewYear, viewMonth, 1);
      const daysInMonth  = new Date(viewYear, viewMonth + 1, 0).getDate();
      const offset = (firstOfMonth.getDay() + 6) % 7; // Monday=0
      const highlightToday = (viewYear === realY && viewMonth === realM0);

      for (let i = 0; i < 42; i++) {
        const cell = dayCells[i];
        const dayNum = i - offset + 1;

        // clean state
        cell.classList.remove('is-outside-month', 'is-today');
        cell.innerHTML = '';
        // remove old metric payload
        delete cell._metrics;
        delete cell._labels;
        delete cell._colors;
        delete cell._dateStr;

        if (dayNum >= 1 && dayNum <= daysInMonth) {
          // day number
          const dayEl = document.createElement('div');
          dayEl.className = 'day-num';
          dayEl.textContent = String(dayNum);
          cell.appendChild(dayEl);

          // today badge
          if (highlightToday && dayNum === realD) cell.classList.add('is-today');

          // diagram if data exists
          const values = ds.data.get(dayNum) || null;
          if (values) {
            cell.appendChild(buildRadialChart(values, ds.colors, ds.layers));
            // store payload for tooltip
            cell._metrics = normalizeValues(values, ds.layers);
            cell._labels  = ds.labels;
            cell._colors  = ds.colors;
          } else {
            const box = document.createElement('div');
            box.className = 'day-chart';
            cell.appendChild(box);
          }

          // accessible label in English: YYYY-MM-DD
          const yyyy = String(viewYear);
          const mm   = String(viewMonth + 1).padStart(2, '0');
          const dd   = String(dayNum).padStart(2, '0');
          const dateStr = `${yyyy}-${mm}-${dd}`;
          cell.setAttribute('aria-label', dateStr);
          cell._dateStr = dateStr;

          // attach hover handlers once per render
          cell.onmouseenter = (ev) => {
            if (!cell._metrics) return;
            showTooltip(ev, cell);
          };
          cell.onmousemove  = (ev) => {
            if (!cell._metrics) return;
            moveTooltip(ev);
          };
          cell.onmouseleave = () => hideTooltip();
        } else {
          cell.classList.add('is-outside-month');
          cell.removeAttribute('aria-label');
          cell.onmouseenter = cell.onmousemove = cell.onmouseleave = null;
        }
      }
    }

    // ====== Tooltip ======
    function createTooltip() {
      const t = document.createElement('div');
      t.className = 'cal-tooltip';
      document.body.appendChild(t);
      return t;
    }

    function showTooltip(evt, cell) {
      const vals = cell._metrics;
      const labels = cell._labels || [];
      const colors = cell._colors || DEFAULT_COLORS;
      const ok = vals.every(v => (v|0) === 100);

      tooltip.innerHTML = '';

      const title = document.createElement('div');
      title.className = 'cal-tooltip__title';
      title.textContent = `${cell._dateStr} · ${ok ? 'All metrics are 100%' : 'Progress by metrics'}`;
      tooltip.appendChild(title);

      for (let i = 0; i < vals.length; i++) {
        const row = document.createElement('div');
        row.className = 'cal-tooltip__row';

        const dot = document.createElement('span');
        dot.className = 'cal-tooltip__dot';
        dot.style.background = colors[i] || DEFAULT_COLORS[i] || '#999';

        const lab = document.createElement('span');
        lab.className = 'cal-tooltip__label';
        lab.textContent = labels[i] || `Metric ${i+1}`;

        const val = document.createElement('span');
        val.className = 'cal-tooltip__val';
        val.textContent = `${vals[i]}%`;

        row.append(dot, lab, val);
        tooltip.appendChild(row);
      }

      tooltip.classList.add('show');
      moveTooltip(evt);
    }

    function moveTooltip(evt) {
      const margin = 16; // отступ от курсора
      const x = evt.clientX;
      const y = evt.clientY;
      // Позиционируем примерно над курсором (fixed)
      tooltip.style.left = `${x}px`;
      tooltip.style.top  = `${y - margin}px`;
    }

    function hideTooltip() {
      tooltip.classList.remove('show');
    }

    // ====== SVG chart ======
    function buildRadialChart(values, colors, layers) {
      const arr = normalizeValues(values, layers);
      const svgNS = 'http://www.w3.org/2000/svg';

      const wrap = document.createElement('div');
      wrap.className = 'day-chart';

      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('viewBox', '0 0 100 100');

      const maxRadius = 42, stroke = 4, gap = 4;

      for (let i = 0; i < layers; i++) {
        const radius = maxRadius - i * (stroke + gap);
        const circumference = 2 * Math.PI * radius;

        const track = document.createElementNS(svgNS, 'circle');
        track.setAttribute('cx', '50'); track.setAttribute('cy', '50'); track.setAttribute('r', String(radius));
        track.setAttribute('class', 'day-chart__track'); track.setAttribute('stroke-width', String(stroke));
        svg.appendChild(track);

        const ring = document.createElementNS(svgNS, 'circle');
        ring.setAttribute('cx', '50'); ring.setAttribute('cy', '50'); ring.setAttribute('r', String(radius));
        ring.setAttribute('class', 'day-chart__ring');
        ring.setAttribute('stroke', colors[i] || DEFAULT_COLORS[i] || '#999');
        ring.setAttribute('stroke-width', String(stroke));
        ring.setAttribute('transform', 'rotate(-90 50 50)');

        const pct  = clamp(arr[i] ?? 0, 0, 100) / 100;
        const dash = circumference * pct;
        ring.setAttribute('stroke-dasharray', `${dash} ${circumference - dash}`);
        ring.setAttribute('stroke-dashoffset', '0');
        svg.appendChild(ring);
      }

      wrap.appendChild(svg);

      const ok = arr.every(v => clamp(v, 0, 100) === 100);
      const status = document.createElement('div');
      status.className = `day-chart__status ${ok ? 'day-chart__status--good' : 'day-chart__status--bad'}`;
      status.textContent = ok ? '✓' : '✕';
      wrap.appendChild(status);

      return wrap;
    }

    // ====== Dataset helpers & utils ======
    function ymKey(y, m0) { return `${y}-${String(m0 + 1).padStart(2, '0')}`; }

    function ensureMonthExists(y, m0) {
      const key = ymKey(y, m0);
      if (!monthStore.has(key)) {
        monthStore.set(key, createDefaultDataset());
      }
    }
    function getDataset(y, m0) {
      ensureMonthExists(y, m0);
      return monthStore.get(ymKey(y, m0));
    }
    function createDefaultDataset() {
      return {
        layers: 3,
        labels: ['Metric 1','Metric 2','Metric 3'],
        colors: DEFAULT_COLORS.slice(0, 3),
        data: new Map()
      };
    }

    function normalizeDataset(payload) {
      const base = createDefaultDataset();
      const layers = clamp(Math.round(payload?.layers ?? base.layers), 1, 5);
      const labels = Array.from({ length: layers }, (_, i) => payload?.labels?.[i] || base.labels[i] || `Metric ${i+1}`);
      const colors = Array.from({ length: layers }, (_, i) => payload?.colors?.[i] || DEFAULT_COLORS[i] || '#999');
      const data   = normalizeDataObject(payload?.data || {}, layers);
      return { layers, labels, colors, data };
    }

    function normalizeDataObject(obj, layers) {
      const map = new Map();
      for (const k in obj) {
        const day = Number(k);
        if (!Number.isFinite(day)) continue;
        map.set(day, normalizeValues(obj[k], layers));
      }
      return map;
    }

    function normalizeValues(values, layers) {
      return Array.from({ length: layers }, (_, i) => {
        const raw = Array.isArray(values) ? values[i] : null;
        if (raw == null) return 0;
        const n = Math.round(Number(raw));
        return clamp(n, 0, 100);
      });
    }
    function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }
  });
})(window);

// October 2025 (month0 = 9)
CalendarMetrics.setMonthDataset(2025, 9, {
  layers: 2,
  labels: ['CDB', 'PDB'],
  colors: ['#22c55e', '#3b82f6'],
  data: {
    "1":  [100,  90],
    "2":  [100, 100],
    "10": [ 70,  40],
    "15": [100, 100]
  }
});

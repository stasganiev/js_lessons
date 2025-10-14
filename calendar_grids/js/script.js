'use strict';

/**
 * Global API - IE11 compatible version
 */
(function (global) {
  var queue = [];
  var api = {
    _ready: false,
    _impl: null,

    onReady: function(cb) {
      if (this._ready) {
        cb();
      } else {
        document.addEventListener('calendar-ready', cb, false);
      }
    },

    setMonthDataset: function(year, month0, payload) {
      if (this._ready) {
        return this._impl.setMonthDataset(year, month0, payload);
      } else {
        queue.push(['setMonthDataset', [year, month0, payload]]);
      }
    },

    setMonthValues: function(year, month0, dataObj) {
      if (this._ready) {
        return this._impl.setMonthValues(year, month0, dataObj);
      } else {
        queue.push(['setMonthValues', [year, month0, dataObj]]);
      }
    },

    getView: function() {
      if (this._ready) {
        return this._impl.getView();
      } else {
        return { year: NaN, month0: NaN };
      }
    },

    setView: function(year, month0) {
      if (this._ready) {
        return this._impl.setView(year, month0);
      } else {
        queue.push(['setView', [year, month0]]);
      }
    },

    refresh: function() {
      if (this._ready) {
        return this._impl.refresh();
      } else {
        queue.push(['refresh', []]);
      }
    },

    goToToday: function() {
      if (this._ready) {
        return this._impl.goToToday();
      } else {
        queue.push(['goToToday', []]);
      }
    }
  };

  global.CalendarMetrics = api;

  function flush() {
    while (queue.length > 0) {
      var item = queue.shift();
      var name = item[0];
      var args = item[1];
      if (typeof api[name] === 'function') {
        api[name].apply(api, args);
      }
    }
  }

  function attachEvent(el, evName, handler) {
    if (el.addEventListener) {
      el.addEventListener(evName, handler, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + evName, handler);
    }
  }

  function ready(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(fn, 1);
    } else {
      attachEvent(document, 'DOMContentLoaded', fn);
    }
  }

  ready(function() {
    // UI elements
    var titleEl = document.querySelector('.date-title');
    var prevBtn = document.querySelector('.btn-previous-month');
    var nextBtn = document.querySelector('.btn-next-month');
    var todayBtn = document.querySelector('.btn-today');
    var legendEl = document.querySelector('.calendar-legend');

    var allCells = document.querySelectorAll('.calendar-space .day-cell-wrap');
    var dayCells = [];
    for (var i = 7; i < allCells.length; i++) {
      var cell = allCells[i].querySelector('.day-cell-content');
      if (cell) dayCells.push(cell);
    }

    var tooltip = createTooltip();

    // Constants
    var EN_MONTHS = [
      'January','February','March','April','May','June',
      'July','August','September','October','November','December'
    ];
    var DEFAULT_COLORS = ['#3b82f6','#f59e0b','#10b981','#8b5cf6','#ef4444','#0a7913'];
    var MAX_LAYERS = DEFAULT_COLORS.length;

    // Today
    var realToday = new Date();
    var realY = realToday.getFullYear();
    var realM0 = realToday.getMonth();
    var realD = realToday.getDate();

    // View state
    var viewYear = realY;
    var viewMonth = realM0;

    // Data storage - simple object instead of Map
    var monthStore = {};

    function ymKey(y, m0) {
      return y + '-' + padZero(m0 + 1, 2);
    }

    function padZero(num, len) {
      var s = String(num);
      while (s.length < len) s = '0' + s;
      return s;
    }

    function clamp(n, min, max) {
      return Math.min(max, Math.max(min, n));
    }

    function createDefaultDataset() {
      return {
        layers: 3,
        labels: ['Metric 1','Metric 2','Metric 3'],
        colors: [DEFAULT_COLORS[0], DEFAULT_COLORS[1], DEFAULT_COLORS[2]],
        data: {}
      };
    }

    function normalizeValues(values, layers) {
      var result = [];
      for (var i = 0; i < layers; i++) {
        var raw = null;
        if (values && typeof values === 'object') {
          if (values.length !== undefined) {
            raw = values[i];
          }
        }
        if (raw == null) {
          result.push(0);
        } else {
          var n = Math.round(Number(raw));
          result.push(clamp(n, 0, 100));
        }
      }
      return result;
    }

    function normalizeDataObject(obj, layers) {
      var result = {};
      for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
          var day = Number(k);
          if (isFinite(day)) {
            result[day] = normalizeValues(obj[k], layers);
          }
        }
      }
      return result;
    }

    function normalizeDataset(payload) {
      var base = createDefaultDataset();
      var layers = clamp(Math.round(payload && payload.layers || base.layers), 1, MAX_LAYERS);
      
      var labels = [];
      for (var i = 0; i < layers; i++) {
        labels.push(
          (payload && payload.labels && payload.labels[i]) || 
          base.labels[i] || 
          ('Metric ' + (i+1))
        );
      }
      
      var colors = [];
      for (var j = 0; j < layers; j++) {
        colors.push(
          (payload && payload.colors && payload.colors[j]) || 
          DEFAULT_COLORS[j] || 
          '#999'
        );
      }
      
      var data = normalizeDataObject((payload && payload.data) || {}, layers);
      
      return { layers: layers, labels: labels, colors: colors, data: data };
    }

    function ensureMonthExists(y, m0) {
      var key = ymKey(y, m0);
      if (!monthStore[key]) {
        monthStore[key] = createDefaultDataset();
      }
    }

    function getDataset(y, m0) {
      ensureMonthExists(y, m0);
      return monthStore[ymKey(y, m0)];
    }

    // Implementation
    var impl = {
      setMonthDataset: function(year, month0, payload) {
        monthStore[ymKey(year, month0)] = normalizeDataset(payload);
        if (year === viewYear && month0 === viewMonth) renderAll();
      },

      setMonthValues: function(year, month0, dataObj) {
        var key = ymKey(year, month0);
        var prev = monthStore[key] || createDefaultDataset();
        var norm = normalizeDataObject(dataObj, prev.layers);
        monthStore[key] = {
          layers: prev.layers,
          labels: prev.labels,
          colors: prev.colors,
          data: norm
        };
        if (year === viewYear && month0 === viewMonth) renderAll();
      },

      getView: function() {
        return { year: viewYear, month0: viewMonth };
      },

      setView: function(year, month0) {
        viewYear = year;
        viewMonth = clamp(month0, 0, 11);
        renderAll();
      },

      refresh: function() {
        renderAll();
      },

      goToToday: function() {
        viewYear = realY;
        viewMonth = realM0;
        renderAll();
      }
    };

    global.CalendarMetrics._impl = impl;
    global.CalendarMetrics._ready = true;

    // Navigation
    if (prevBtn) {
      attachEvent(prevBtn, 'click', function() {
        if (viewMonth === 0) {
          viewMonth = 11;
          viewYear -= 1;
        } else {
          viewMonth -= 1;
        }
        renderAll();
      });
    }

    if (nextBtn) {
      attachEvent(nextBtn, 'click', function() {
        if (viewMonth === 11) {
          viewMonth = 0;
          viewYear += 1;
        } else {
          viewMonth += 1;
        }
        renderAll();
      });
    }

    if (todayBtn) {
      attachEvent(todayBtn, 'click', function() {
        impl.goToToday();
      });
    }

    renderAll();

    // Notify ready
    var readyEvent;
    if (document.createEvent) {
      readyEvent = document.createEvent('Event');
      readyEvent.initEvent('calendar-ready', false, false);
      document.dispatchEvent(readyEvent);
    } else if (document.createEventObject) {
      readyEvent = document.createEventObject();
      document.fireEvent('oncalendar-ready', readyEvent);
    }

    flush();

    // Render functions
    function renderAll() {
      if (titleEl) {
        titleEl.textContent = EN_MONTHS[viewMonth] + ' ' + viewYear;
      }
      ensureMonthExists(viewYear, viewMonth);
      renderLegend();
      renderGrid();
    }

    function renderLegend() {
      var ds = getDataset(viewYear, viewMonth);
      if (!legendEl) return;
      
      legendEl.innerHTML = '';
      for (var i = 0; i < ds.layers; i++) {
        var item = document.createElement('div');
        item.className = 'legend-item';
        
        var dot = document.createElement('span');
        dot.className = 'legend-dot';
        dot.style.background = ds.colors[i] || DEFAULT_COLORS[i] || '#999';
        
        var label = document.createElement('span');
        label.textContent = ds.labels[i] || ('Metric ' + (i+1));
        
        item.appendChild(dot);
        item.appendChild(label);
        legendEl.appendChild(item);
      }
    }

    function renderGrid() {
      var ds = getDataset(viewYear, viewMonth);
      var firstOfMonth = new Date(viewYear, viewMonth, 1);
      var daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
      var offset = (firstOfMonth.getDay() + 6) % 7;
      var highlightToday = (viewYear === realY && viewMonth === realM0);

      for (var i = 0; i < dayCells.length && i < 42; i++) {
        var cell = dayCells[i];
        var dayNum = i - offset + 1;

        cell.className = cell.className.replace(/\s*is-outside-month/g, '');
        cell.className = cell.className.replace(/\s*is-today/g, '');
        cell.innerHTML = '';
        
        delete cell._metrics;
        delete cell._labels;
        delete cell._colors;
        delete cell._dateStr;
        cell.onmouseenter = null;
        cell.onmousemove = null;
        cell.onmouseleave = null;

        if (dayNum >= 1 && dayNum <= daysInMonth) {
          var dayEl = document.createElement('div');
          dayEl.className = 'day-num';
          dayEl.textContent = String(dayNum);
          cell.appendChild(dayEl);

          if (highlightToday && dayNum === realD) {
            cell.className += ' is-today';
          }

          var values = ds.data[dayNum] || null;
          if (values) {
            cell.appendChild(buildRadialChart(values, ds.colors, ds.layers));
            cell._metrics = normalizeValues(values, ds.layers);
            cell._labels = ds.labels;
            cell._colors = ds.colors;
          } else {
            var box = document.createElement('div');
            box.className = 'day-chart';
            cell.appendChild(box);
          }

          var yyyy = String(viewYear);
          var mm = padZero(viewMonth + 1, 2);
          var dd = padZero(dayNum, 2);
          var dateStr = yyyy + '-' + mm + '-' + dd;
          cell.setAttribute('aria-label', dateStr);
          cell._dateStr = dateStr;

          cell.onmouseenter = makeEnterHandler(cell);
          cell.onmousemove = makeMoveHandler(cell);
          cell.onmouseleave = hideTooltip;
        } else {
          cell.className += ' is-outside-month';
          cell.removeAttribute('aria-label');
        }
      }
    }

    function makeEnterHandler(cell) {
      return function(ev) {
        if (!cell._metrics) return;
        showTooltip(ev, cell);
      };
    }

    function makeMoveHandler(cell) {
      return function(ev) {
        if (!cell._metrics) return;
        moveTooltip(ev);
      };
    }

    // Tooltip
    function createTooltip() {
      var t = document.createElement('div');
      t.className = 'cal-tooltip';
      document.body.appendChild(t);
      return t;
    }

    function showTooltip(evt, cell) {
      var vals = cell._metrics;
      var labels = cell._labels || [];
      var colors = cell._colors || DEFAULT_COLORS;
      var ok = true;
      for (var i = 0; i < vals.length; i++) {
        if ((vals[i] | 0) !== 100) {
          ok = false;
          break;
        }
      }

      tooltip.innerHTML = '';

      var title = document.createElement('div');
      title.className = 'cal-tooltip__title';
      title.textContent = cell._dateStr + ' · ' + (ok ? 'All metrics are 100%' : 'Progress by metrics');
      tooltip.appendChild(title);

      for (var j = 0; j < vals.length; j++) {
        var row = document.createElement('div');
        row.className = 'cal-tooltip__row';

        var dot = document.createElement('span');
        dot.className = 'cal-tooltip__dot';
        dot.style.background = colors[j] || DEFAULT_COLORS[j] || '#999';

        var lab = document.createElement('span');
        lab.className = 'cal-tooltip__label';
        lab.textContent = labels[j] || ('Metric ' + (j+1));

        var val = document.createElement('span');
        val.className = 'cal-tooltip__val';
        val.textContent = vals[j] + '%';

        row.appendChild(dot);
        row.appendChild(lab);
        row.appendChild(val);
        tooltip.appendChild(row);
      }

      tooltip.className = 'cal-tooltip show';
      moveTooltip(evt);
    }

    function moveTooltip(evt) {
      var margin = 16;
      var x = evt.clientX;
      var y = evt.clientY;
      tooltip.style.left = x + 'px';
      tooltip.style.top = (y - margin) + 'px';
    }

    function hideTooltip() {
      tooltip.className = tooltip.className.replace(/\s*show/g, '');
    }

    // SVG chart
    function buildRadialChart(values, colors, layers) {
      var arr = normalizeValues(values, layers);
      var svgNS = 'http://www.w3.org/2000/svg';

      var wrap = document.createElement('div');
      wrap.className = 'day-chart';

      var svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('viewBox', '0 0 100 100');

      var maxRadius = 40 + MAX_LAYERS;
      var stroke = 3;
      var gap = 4;

      for (var i = 0; i < layers; i++) {
        var radius = maxRadius - i * (stroke + gap);
        var circumference = 2 * Math.PI * radius;

        var track = document.createElementNS(svgNS, 'circle');
        track.setAttribute('cx', '50');
        track.setAttribute('cy', '50');
        track.setAttribute('r', String(radius));
        track.setAttribute('class', 'day-chart__track');
        track.setAttribute('stroke-width', String(stroke));
        svg.appendChild(track);

        var ring = document.createElementNS(svgNS, 'circle');
        ring.setAttribute('cx', '50');
        ring.setAttribute('cy', '50');
        ring.setAttribute('r', String(radius));
        ring.setAttribute('class', 'day-chart__ring');
        ring.setAttribute('stroke', colors[i] || DEFAULT_COLORS[i] || '#999');
        ring.setAttribute('stroke-width', String(stroke));
        ring.setAttribute('transform', 'rotate(-90 50 50)');

        var pct = clamp(arr[i] || 0, 0, 100) / 100;
        var dash = circumference * pct;
        ring.setAttribute('stroke-dasharray', dash + ' ' + (circumference - dash));
        ring.setAttribute('stroke-dashoffset', '0');
        svg.appendChild(ring);
      }

      wrap.appendChild(svg);

      var ok = true;
      for (var j = 0; j < arr.length; j++) {
        if (clamp(arr[j], 0, 100) !== 100) {
          ok = false;
          break;
        }
      }

      var status = document.createElement('div');
      status.className = 'day-chart__status ' + (ok ? 'day-chart__status--good' : 'day-chart__status--bad');
      status.textContent = ok ? '✓' : '✕';
      wrap.appendChild(status);

      return wrap;
    }
  });
})(window);

// Example data for October 2025
// CalendarMetrics.setMonthDataset(2025, 9, {
//   layers: 6,
//   labels: ['CDB', 'PDB', 'ADD', 'BBB', 'GGG', 'DDF'],
//   data: {
//     "1":  [100,  90, 77, 100,  90, 100],
//     "2":  [100, 100, 100, 100, 100, 100],
//     "10": [70,  40, 25, 70,  40, 100],
//     "15": [100, 100, 95, 100, 100, 100],
//     "16": [100, 100, 99, 100, 100, 100]
//   }
// });

CalendarMetrics.setMonthDataset(2025, 9, {
  layers: 3,
  labels: ['CDB', 'PDB', 'ADD'],
  data: {
    "1":  [100,  90, 77],
    "2":  [100, 100, 100],
    "10": [70,  40, 25],
    "15": [100, 100, 35],
    "16": [100, 100, 99]
  }
});

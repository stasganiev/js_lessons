'use strict';

const changeBtn = document.querySelector('#btn');
const resetBtn = document.querySelector('#resetBtn');
const title = document.querySelector('#title');
const text = document.querySelector('#text');
const list = document.querySelector('#list');

const maxItems = 10;
let currentSize = 14;

function updateSize(size) {
  text.style.fontSize = size.toString() + 'px';
}

function reset() {
  list.innerHTML = '';
  currentSize = 14;
  updateSize(currentSize);
  title.textContent = 'Заголовок';
}

function addListItem() {

  const itemsCount = document.querySelectorAll('.list-item').length;
  if (itemsCount >= maxItems) return;

  const li = document.createElement('li');
  li.classList.add('list-item');
  li.textContent = `${(itemsCount + 1)}.`;
  list.appendChild(li);

}

changeBtn.addEventListener('click', function(evt) {

  evt.preventDefault();

  title.textContent = 'Готов к React!';

  currentSize += 2;
  updateSize(currentSize);

  addListItem();

});

resetBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  reset();
})

reset();

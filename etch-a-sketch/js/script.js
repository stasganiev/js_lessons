'use strict';

let containerItem = document.querySelector('.container');
let itemTemplate = document.createElement('div');
itemTemplate.classList.add('item');

let ind;
let currentItem;

for (ind = 0; ind < 256; ind++) {
    currentItem = itemTemplate.cloneNode(true);
    containerItem.appendChild(currentItem);

    currentItem.addEventListener('mouseenter', (evt) => {
        evt.preventDefault();
        evt.target.style.backgroundColor = '#777';
    })
}

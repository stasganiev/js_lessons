'use strict';

// Variables

let containerItem = document.querySelector('.container');
let itemTemplate = document.createElement('div');
itemTemplate.classList.add('item');

const btnSize = document.querySelector('.btn_size');

let ind;
let currentItem;

// Handlers & Functions

const updateCanvas = (size) => {

    const totalCells = size * size;
    const canvasSize = 800;
    containerItem.innerHTML = '';

    for (ind = 0; ind < totalCells; ind++) {
        currentItem = itemTemplate.cloneNode(true);
        currentItem.style.width = (canvasSize / size) + 'px';
        currentItem.style.height = (canvasSize / size) + 'px';
        containerItem.appendChild(currentItem);
        currentItem.addEventListener('mouseenter', onOverview);
    }

}

const onOverview = (evt) => {
    evt.preventDefault();
    evt.target.style.backgroundColor = '#777';
}

const btnResizeOnClick = () => {
    let cellCount = +prompt('Your count (7 to 100)', 16);
    while (cellCount < 7 || cellCount > 100) {
        cellCount = +prompt('Your count (7 to 100)', cellCount);
    }
    updateCanvas(cellCount);
}

// Main code

btnSize.addEventListener('click', btnResizeOnClick);

updateCanvas(16);

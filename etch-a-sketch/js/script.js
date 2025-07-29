'use strict';

// Variables

let containerItem = document.querySelector('.container');
let itemTemplate = document.createElement('div');
itemTemplate.classList.add('item');

const btnSize = document.querySelector('.btn_size');

let ind;
let currentItem;

// Handlers & Functions

const createCellItem = (canvasSize, size) => {
    const item = itemTemplate.cloneNode(true);
    item.style.width = (canvasSize / size) + 'px';
    item.style.height = (canvasSize / size) + 'px';
    item.setAttribute('data-step', '0');
    return item;
}

const updateCanvas = (size) => {

    const totalCells = size * size;
    const canvasSize = 800;
    containerItem.innerHTML = '';

    for (ind = 0; ind < totalCells; ind++) {
        currentItem = createCellItem(canvasSize, size);
        containerItem.appendChild(currentItem);
        currentItem.addEventListener('mouseenter', onOverview);
    }

}

const onOverview = (evt) => {
    evt.preventDefault();
    const overedItem = evt.target;
    overedItem.style.backgroundColor = '#142';
    let step = +overedItem.dataset.step;
    if (step >= 10) return;
    overedItem.dataset.step = ++step;
    overedItem.style.opacity = (0.1 * step);
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

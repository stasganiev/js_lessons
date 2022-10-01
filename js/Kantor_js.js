'use strict';

let btnCheckJSName = document.querySelector('.btn_nameJs');
let innputCheckJSName = document.querySelector('.input_nameJs-input');

btnCheckJSName.addEventListener('click', function(evt) {
  evt.preventDefault();

  let interText = innputCheckJSName.value;
  if (interText === 'ECMAScript') {
    console.log('Верно!');
  } else {
    console.log('Не знаете? ECMAScript');
  }
});

let btnCheckNumber = document.querySelector('.btn_nameNum');
let innputCheckNumber = document.querySelector('.input_nameNum-input');

btnCheckNumber.addEventListener('click', function(evt) {
  evt.preventDefault();
  let interText = innputCheckNumber.value;
  let valueAsNumber = Number(interText);
  if (isNaN(valueAsNumber)) {
    console.log('Похоже, вы ввели не число');
  } else if (valueAsNumber === 0) {
    console.log('Нулевое значение');
  } else if (valueAsNumber < 0) {
    console.log('Отрицательное значение');
  } else {
    console.log('Число как число');
  }
});

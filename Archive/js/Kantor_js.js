'use strict';

// Условия

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

// Другие уроки

const innputNum1 = document.querySelector('.input_num1-input');
const innputNum2 = document.querySelector('.input_num2-input');
const btnOddNums = document.querySelector('.btn_odd-nums');
const btnOddSimple = document.querySelector('.btn_odd-simple');
const btnOddPow = document.querySelector('.btn_odd-pow');

////////////////////////////////
// Решения упражнений
////////////////////////////////

const checkOddNums = function(num1, num2) {

  for(let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

}

const calcSimpleNumbers = function(num1, num2) {

  nextNum:
  for(let i = num1; i <= num2; i++) {
    if (i == 1) {
      continue;
    }
    for(let j = 2; j < i; j++) {
      if (i % j == 0) continue nextNum;
    }
    console.log(i);
  }

}

const calcPow = function(num1, num2) {

  let res = num1;
  for(let i = 1; i < num2; i++) {
    res *= num1;
  }

  console.log(res);

  return res;

}

////////////////////////////////
// Конец: Решения упражнений
////////////////////////////////

btnOddNums.addEventListener('click', function(evt) {
  evt.preventDefault();
  checkOddNums(+innputNum1.value, +innputNum2.value);
});

btnOddSimple.addEventListener('click', function(evt) {
  evt.preventDefault();
  calcSimpleNumbers(+innputNum1.value, +innputNum2.value);
});

btnOddPow.addEventListener('click', function(evt) {
  evt.preventDefault();
  calcPow(+innputNum1.value, +innputNum2.value);
});

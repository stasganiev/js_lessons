'use strict';

const innputNum1 = document.querySelector('.input_num1-input');
const innputNum2 = document.querySelector('.input_num2-input');
const innputNum3 = document.querySelector('.input_num3-input');
const innputNum4 = document.querySelector('.input_num4-input');
const innputNum5 = document.querySelector('.input_num5-input');
const innputNum6 = document.querySelector('.input_num6-input');
const btnSum = document.querySelector('.btn_sum');
const innputResult = document.querySelector('.input_result-input');

btnSum.addEventListener('click', function(evt) {
  evt.preventDefault();
  runSum(+innputNum1.value, +innputNum2.value, +innputNum3.value, +innputNum4.value, +innputNum5.value, +innputNum6.value);
});

const outputResult = function(content) {

    innputResult.value = content;

}

const runSum = function(num1, num2, num3, num4, num5, num6) {

    outputResult(num1 + num2 + num3 + num4 + num5 + num6);

}

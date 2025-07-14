const innputNum1 = document.querySelector('.input_num1-input');
const innputNum2 = document.querySelector('.input_num2-input');

const btnSum = document.querySelector('.btn_sum');

const innputResult = document.querySelector('.input_result-input');

btnSum.addEventListener('click', function(evt) {
  evt.preventDefault();
  runSum(+innputNum1.value, +innputNum2.value);
});

const outputResult = function(content) {

    innputResult.value = content;

}

const runSum = function(num1, num2) {

    outputResult(num1 + num2);

}

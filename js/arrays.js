'use strict';

const innputStr01 = document.querySelector('.input_str01-input');
const btnCamelize = document.querySelector('.btn_camelize');
const btnFilterRng = document.querySelector('.btn_filterRng');

function camelize(str) {
    
  let terms = str.split('-');
  let resArray = terms.map((item, index) => {
    if (index === 0) return item.toLowerCase();
    else return item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase();
  });

  return resArray.join('');

}

function filterRange(arr, a, b) {

    return arr.filter(item => +item >= a && +item <= b);

}

function filterRangeInPlace(arr, a, b) {

    let index = arr.findIndex(item => (+item < a || +item > b));
    while (index !== -1) {
        arr.splice(index, 1);
        index = arr.findIndex(item => (+item < a || +item > b));
    }

}

btnCamelize.addEventListener('click', function(evt) {

  evt.preventDefault();
  outputResult(camelize(innputStr01.value));

});

btnFilterRng.addEventListener('click', function(evt) {

  evt.preventDefault();
  let res = filterRange(innputStr01.value.split('-'), +innputNum1.value, +innputNum2.value);
  outputResult(res);

});

'use strict';

const innputStr01 = document.querySelector('.input_str01-input');
const btnCamelize = document.querySelector('.btn_camelize');

btnCamelize.addEventListener('click', function(evt) {

  evt.preventDefault();

  let src = innputStr01.value;

  let terms = src.split('-');
  let resArray = terms.map((item, index) => {
    if (index === 0) return item.toLowerCase();
    else return item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase();
  });
  let result = resArray.join('');

  outputResult(result);

});

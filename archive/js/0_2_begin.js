"use strict";

while (true) {
    let a = prompt('Введите первое число или Q для выхода');
    if (a === 'Q') break;
    
    let c = prompt('Введите операцию (+, -, * или /)');
    let b = prompt('Введите второе число');
    let res;

    try {

        if (c === '+') {
            res = sum(a, b);
        } else if (c === '-') {
            res = sub(a, b);
        } else if (c === '*') {
            res = mult(a, b);
        } else if (c === '/') {
            res = div(a, b);
        } else {
            res = NaN;
            throw new Error(`Неизвестная операция ${c}`);
        }

        if (Number.isNaN(res)) throw new Error(`Неверно введенные данные: ${a}, ${b}`);

        alert(res);

    } catch(e) {
        alert(e);
    }
}

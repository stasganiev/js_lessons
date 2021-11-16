function checkNumber(n) {
    let num = Number(n);
    if (Number.isNaN(num)) {
        console.log(`Введено некорректное значение ${n}`);
        return false;
    }
    return true;
}

function sum(x, y) {
    let ch1 = checkNumber(x);
    let ch2 = checkNumber(y);

    if (!ch1 || !ch2) return NaN;
    
    return +x + +y;
}

function sub(x, y) {
    let ch1 = checkNumber(x);
    let ch2 = checkNumber(y);

    if (!ch1 || !ch2) return NaN;
    
    return +x - +y;
}

function mult(x, y) {
    let ch1 = checkNumber(x);
    let ch2 = checkNumber(y);

    if (!ch1 || !ch2) return NaN;
    
    return +x * +y;
}

function div(x, y) {
    let ch1 = checkNumber(x);
    let ch2 = checkNumber(y);

    if (!ch1 || !ch2 || +y === 0) return NaN;
    
    return +x / +y;
}

function Rect(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.sqr = function() {
        return this.height * this.width;
    }
}
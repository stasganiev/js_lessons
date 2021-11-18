"use strict";

// lesson 0.3.2

/*
let point = {};
point = {
    x: 10,
    y: 20
};

console.log(point);
console.log(point.x);
console.log(point.y);

point.x = 15;
point.z = 40;

for (let field in point) {
    console.log(`Поле ${field} равно ${point[field]}`);
}

let obj = {
    'two words': true,
    p: {
        x: 20,
        y: 30
    }
}

console.log(obj['two words']);
console.log(obj.p.x);
*/

// домашка

/*
function printObject(obj) {
    for (let key in obj) {
        console.log(`Поле ${key} равно ${obj[key]}`);
    }
}

let rect = {
    x: 10,
    y: 10,
    height: 15,
    width: 30
};

printObject(rect);

rect.x = 12;
rect.y = 48;
rect.height = 17;
rect.width = 92;

printObject(rect);
*/

//lesson 0.3.3

/*
let r1 = new Rect(0, 0, 15, 39);
console.log(r1.sqr());
let r2 = new Rect(0, 0, 10, 50);
console.log(r2.sqr());
*/

//lesson 0.3.4

/*
let z1 = Symbol();
let z2 = Symbol();
r1[z1] = 20;
r1[z2] = 30;

console.log(`Новые переменные имеют значения ${r1[z1]} и ${r1[z2]}`);
*/

// lesson 0.3.5

/*
let p = new Point(10, 20);
console.log(p);
console.log(Number(p));
*/

// домашка

/*
let r1 = new Rect(0, 0, 15, 39);
console.log(String(r1));
console.log(Number(r1));
*/

// lessons 0.3.6-7

/*
class Point {
    z = 5;
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    getDistance() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    distance() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    get x() {
        return this._x * 10;
    }
    get y() {
        return this._y * 10;
    }
    set x(coor) {
        if (coor < 0) this._x = 0;
        else this._x = coor;
    }
    set y(coor) {
        if (coor < 0) this._y = 0;
        else this._y = coor;
    }
}

let p = new Point(10, 20);
console.log(p.distance());
console.log(p.x);
console.log(p.y);
p.x = -100;
p.y = -50;
console.log(p.x);
console.log(p.y);
*/

// домашка

class Rect {
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this._height = height;
        this._width = width;
    }
    get square() {
        return this.height * this.width;
    }
    get height() {
        return this._height;
    }
    get width() {
        return this._width;
    }
    set height(h) {
        if (h < 0) throw new Error('Ошибка! Высота не может быть отрицательной')
        else this._height = h;
    }
    set width(w) {
        if (w < 0) throw new Error('Ошибка! Ширина не может быть отрицательной');
        else this._width = w;
    }
}

let r1 = new Rect(0, 0, 15, 39);
console.log(r1);
r1.x = 10;
r1.y = 20;
console.log(r1.square);
r1.width = 20;
r1.height = 10;
console.log(`w = ${r1.width}, h = ${r1.height}`);

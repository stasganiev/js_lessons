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

/*
class Rect {
    static counter = 0;
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this._height = height;
        this._width = width;
        Rect.counter++;
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
    static getCounter() {
        return Rect.counter;
    }
}
*/

/*
let r1 = new Rect(0, 0, 15, 39);
console.log(r1);
r1.x = 10;
r1.y = 20;
console.log(r1.square);
r1.width = 20;
r1.height = 10;
console.log(`w = ${r1.width}, h = ${r1.height}`);
*/

// lesson 0.3.8

/*
class Point {
    static counter = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        Point.counter++;
    }

    static getCounter() {
        return Point.counter;
    }

    static getDistance(p1, p2) {
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }
}

console.log(Point.counter);
let p1 = new Point(5, 10);
let p2 = new Point(10, 20);
let p3 = new Point(15, 30);
console.log(Point.counter);

console.log(Point.getDistance(p1, p2));
console.log(Point.getDistance(p3, p2));
console.log(Point.getDistance(p1, p3));
*/

// домашка

/*
console.log(Rect.counter);
let r1 = new Rect(0, 0, 15, 39);
let r2 = new Rect(5, 15, 25, 13);
let r3 = new Rect(10, 20, 10, 30);
console.log(Rect.counter);
*/

// lesson 0.3.9

/*
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getDistance() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    draw() {}
}

class Point extends Shape {
    draw() {
        console.log('Drawing point');
    }
}

class Circle extends Shape {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }

    draw() {
        console.log('Drawing circle');
    }
}

let s = new Shape(5, 7);
let p = new Point(15, 20);
let c = new Circle(10, 5, 30);

console.log(s);
console.log(p);
console.log(c);

console.log(s.getDistance());
console.log(p.getDistance());
console.log(c.getDistance());

s.draw();
p.draw();
c.draw();
*/

// домашка

/*
class Auto {
    constructor(x, y, year) {
        this.x = x;
        this.y = y;
        this.year = year;
    }
    muveTo() {
        console.log(`Moving Auto`);
    }
}

class Tractor extends Auto {
    constructor(x, y, year, countOfBucket) {
        super(x, y, year);
        this.countOfBucket = countOfBucket;
    }
    muveTo(x, y) {
        this.x = x;
        this.y = y;
        console.log(`Moving Tractor to ${this.x}, ${this.y}`);
    }
}

let a = new Auto(10, 20, 2010);
let t = new Tractor(25, 35, 2008, 1);

console.log(a);
console.log(t);
a.muveTo();
t.muveTo(45, 70);
console.log(a);
console.log(t);
*/

// lesson 0.3.10, 11

/*
class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }
    setX(coor) {
        if (this.checkCoor(coor)) this._x = coor;
    }
    setY(coor) {
        if (this.checkCoor(coor)) this._y = coor;
    }
    checkCoor(coor) {
        if (coor < 0) throw new Error('Отрицательные координаты не поддерживаются!');
        return true;
    }
}

let p = new Point(10, 20);
console.log(p.getX());
console.log(p.getY());

let descriptor = Object.getOwnPropertyDescriptors(p, '_x');
console.log(descriptor);

Object.defineProperty(p, '_x', {
    writable: false,
    enumerable: false,
    configurable: false
});

for (let f in p) console.log(f);

p._x = 25; // ошибка
delete p._x; // ошибка
*/

// lesson 0.3.12

let log = {
    toLog(str) {
        console.log(str);
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.toLog('Создан новый объект Point');
    }
}

class User {
    constructor() {
        this.toLog('Добавлен новый пользователь');
    }
}

Object.assign(Point.prototype, log);
Object.assign(User.prototype, log);

let p = new Point(5, 20);
let u = new User();

p.toLog('Какая-то информация');

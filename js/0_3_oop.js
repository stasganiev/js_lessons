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

let r1 = new Rect(0, 0, 15, 39);
console.log(r1.sqr());
let r2 = new Rect(0, 0, 10, 50);
console.log(r2.sqr());

//lesson 0.3.4

let z1 = Symbol();
let z2 = Symbol();
r1[z1] = 20;
r1[z2] = 30;

console.log(`Новые переменные имеют значения ${r1[z1]} и ${r1[z2]}`);

// lesson 0.3.5

let p = new Point(10, 20);
alert(p);
alert(Number(p));

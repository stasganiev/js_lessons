"use strict";

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

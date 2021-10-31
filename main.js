"use strict";

// lesson 0.2.1

//alert("Я программирую на JavaScript\nИ это моя первая программа");

// lesson 0.2.2

//console.log("Я программирую на JavaScript\nИ это моя первая программа");

// lesson 0.2.3

/*
var old; // устарело
let a;
a = 5;
console.log("a");
console.log(a);
a = "Hello";
console.log(a);
let name = "Alex";
console.log(name);
let age = 18.7, single = true;
let str_1 = `${name}, вам ${age} лет`;
console.log(str_1);
console.log(name + ", вам " + age + " лет");

let inf = 1 / 0;
console.log(inf);

let nan = "abc" * 5;
console.log(nan);

let und;
console.log(und);

let n = null;
console.log(n);

console.log(typeof(single));
*/

// домашка

/*
let age = 40;
let name = "Стас";
let single = false;

console.log(typeof(age));
console.log(typeof(name));
console.log(typeof(single));

console.log(`Меня зовут ${name}, мне ${age} лет, моё семейное положение ${single}`);
*/

// lesson 0.2.4

/*
const PI = 3.1415926;
console.log(PI);
let r = 5;
let area = PI * r * r;
console.log(`Площать окружности с радиусом ${r} равна ${area}`);
*/

// домашка

/*
const G = 9.8;
let m = 80;
let h = G * m;

console.log(h);
*/

// lesson 0.2.5
/*
let str = "12.5";
console.log(typeof(str));
let number = Number(str);
console.log(typeof(number) + " " + number);
console.log("abc");
console.log(typeof(true) + " " + typeof(false));

console.log("1" + "2");
console.log(Number("1") + Number("2"));
console.log(3 + " number");
console.log(3 + 2 * 4);

console.log(String(true) + " " + typeof(String(true)));
console.log(String(15.7) + " " + typeof(String(15.7)));

console.log(Boolean(15))

let a = "15";
let b = "17";
console.log(+a + +b);
*/

// домашка
/*
let a = "12.5";
let b = "-5.7";
console.log(a + b);

a = Number(a);
b = Number(b);
console.log(a + b);
*/

//lesson 0.2.6

/*
let a = 15.7;
let b = 25;
console.log("a = " + a);
console.log("b = " + b);

a = -a;
console.log("-a = " + a);

a = 10;
b = 4;

console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);

a++;
b--;
console.log(`${a} + ${b} = ${a + b}`);

a = a + 10;
a += 10;
*/

// домашка

/*
let r = (8 + 15) / ((14 - 9) * (7.8 - 15 * 14));
console.log(r);

let a = 8 + 15;
let b = (14 - 9);
let c = 7.8 - 15 * 14;

r = a / (b * c);
console.log(r);

let s1 = "12";
let s2 = "40";
console.log(s1 + s2);
console.log(Number(s1) + Number(s2));
*/

// less0n 0.2.7

/*
let a = 5;
let b = 8;
let bool_1 = a < b;
console.log("5 >= 7 = " + (5 >= 7));
console.log("5 == 5 = " + (5 == 5));
console.log("5 != 5 = " + (5 != 5));

console.log(0 == "");
console.log(0 === "");
console.log(5 === "5");
console.log(5 == "5");

console.log("АБВ" > "ББВ");
*/

let bool_1 = (100 * 200 > 200 * 100);
console.log(bool_1);

let bool_2 = (400 > 300);
console.log(bool_2);

console.log(0 == false);
console.log(0 === false);

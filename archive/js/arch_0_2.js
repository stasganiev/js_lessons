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

// домашка

/*
let bool_1 = (100 * 200 > 200 * 100);
console.log(bool_1);

let bool_2 = (400 > 300);
console.log(bool_2);

console.log(0 == false);
console.log(0 === false);
*/

// lesson 0.2.8

/*
let a = true;
let b = false;

console.log("a = " + a);
console.log("b = " + b);
console.log("!a = " + (!a));
console.log("a || b = " + (a || b));

// побитовые операции
console.log("a ^ b = " + (a ^ b)); // побитовое исключающее ИЛИ
console.log("3 ^ 4 = " + (3 ^ 4)); // 7
console.log("3 & 4 = " + (3 & 4));
console.log("3 | 4 = " + (3 | 4));
*/

// домашка

/*
let res = (5 < 6 || (true && (5 >= 5 && (false || true) && (true && true))));
console.log(res);
*/

// lesson 0.2.9

/*
let a = 5;
if (a > 5) {
    console.log("Переменная а больше 5");
}
else {
    console.log("Переменная а НЕ больше 5");
}

if (a > 5) {
    console.log("Переменная а больше 5");
}
else if (a == 5) {
    console.log("Переменная а равна 5");
}
else {
    console.log("Переменная а меньше 5");
}

let b = 0;
let result = (b != a)? a / b : 0;
console.log("result = " + result);
*/

// домашка

/*
let isMan = true;
let myAge = 40;

if (isMan) {
    console.log("Я мужчина");
} else {
    console.log("Я женщина");
}

if (myAge < 18) {
    console.log("У меня юный возраст");
} else if (myAge < 30) {
    console.log("Я молодой");
} else if (myAge < 50) {
    console.log("Я взрослый");
} else if (myAge < 80) {
    console.log("Я зрелый");
} else {
    console.log("Я старый");
}

let str = (myAge < 18)? "У меня юный возраст" : (myAge < 30)? "Я молодой" : (myAge < 50)? "Я взрослый" : (myAge < 80)? "Я зрелый" : "Я старый";
console.log(str);
*/

// lesson 0.2.10

/*
let a = prompt("Введите первое число", "000");
let b = prompt("Введите второе число");
console.log(typeof(a));

a = Number(a);
b = Number(b);
if (Number.isNaN(a)) {
    console.log("Некорректное первое число");
} else if (Number.isNaN(b)) {
    console.log("Некорректное второе число");
} else {
    console.log("Сумма этих чисел равна " + (a + b));
    if (confirm("Хотите узнать их произведение?")) {
        console.log("Произведение этих чисел " + (a * b));
    }
}
*/

// домашка

/*
if (confirm("Хотите вопрос?")) {
    let myAge = +prompt("Сколько вам лет?", 40);

    if (Number.isNaN(myAge)) {
        alert("Некорректные данные!");
    } else {
        let str = (myAge < 18)? "У меня юный возраст" : (myAge < 30)? "Я молодой" : (myAge < 50)? "Я взрослый" : (myAge < 80)? "Я зрелый" : "Я старый";
        alert(str);
    }
}
*/

// lesson 0.2.11

/*
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("Цикл завершен");

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

for (let i = 0; i < 10; i += 2) {
    if (i == 4) continue;
    if (i == 8) break;
    console.log(i);
}

let summ = 0;
let n = 10;
i = 1;
for (; i <= n; i++) {
    summ += i;
}
*/

// домашка

/*
for (let i = 0; i < 20; i++) {
    console.log("Здравствуйте!");
}

let i = 0;
while (i < 20) {
    console.log("Здравствуйте!");
    i++;
}

i = 0;
do {
    console.log("Здравствуйте!");
    i++;
} while (i < 20)

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} - ${j}`);
    }
}

for (i = 1; i <= 5; i++) {
    for (i = 1; i <= 5; i++) {
        console.log(i);
    }
}
*/

// lesson 0.2.12

/*
let a = +prompt("Введите целое число от 1 до 5");

switch (a) {
    case 1: {
        alert("Один");
        break;
    }
    case 2: {
        alert("Два");
        break;
    }
    case 3: {
        alert("Три");
        break;
    }
    case 4: {
        alert("Четыре");
        break;
    }
    case 5: {
        alert("Пять");
        break;
    }
    default: {
        alert("Нет представления этого числа в виде строки");
    }
}
*/

// lesson 0.2.13

/*
function hello() {
    console.log("Hello");
}

function toLog(msg) {
    console.log(msg);
}

function sum(x, y, r = false) {
    let result = x + y;
    if (r) return result;
    toLog(result);
}

hello();
toLog("Что-то");
sum(10,5);
let s = sum(15, 20, true);
*/

// домашка

/*
function numToStr(num) {
    let n = +num;
    switch (n) {
        case 1: {
            return "Один";
        }
        case 2: {
            return "Два";
        }
        case 3: {
            return "Три";
        }
        case 4: {
            return "Четыре";
        }
        case 5: {
            return "Пять";
        }
        default: {
            return "Нет представления этого числа в виде строки";
        }
    }
}

function isCorrect(n) {
    let n1 = +n;
    if (Number.isNaN(n1) || n1 < 1 || n1 > 5) return false;
    return true;
}

while (true) {
    let n = prompt("Введите число от 1 до 5");
    if (n === "-1") {
        break;
    }
    if (!isCorrect(n)) {
        alert("Некорректный ввод");
        continue;
    }
    let s = numToStr(n);
    alert(`Вы ввели ${s}`);
}
*/

// lesson 0.2.14

/*
function hello() {
    console.log("Hello!");
}

let h = function() {
    console.log("Фукнциональное выражение");
}

function success(name) {
    alert(`Спасибо, ${name}`);
}

function error() {
    alert(`Некорректный ввод`);
}

function errorName() {
    alert(`Некорректное имя`);
}

function checkName(name, success, error) {
    if (name.length >= 2) success(name);
    else error();
}

console.log(hello);
let f = hello;
f();
h();

let name = prompt("Введите имя");
checkName(name, success, error);
checkName(name, success, errorName);

let func;
let x = +prompt("Введите число");
if (x < 0) {
    func = function() {
        alert("Вы ввели отрицательное число");
    }
} else if (x == 0) {
    func = function() {
        alert("Вы ввели 0");
    }
} else {
    func = function() {
        alert("Вы ввели положительное число");
    }
}

func();
*/

// домашка

/*
let error = function(msg) {
    console.log(msg);
}

let myfunc = function(n1, n2, f) {
    let num1 = Number(n1);
    let num2 = Number(n2);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        f("Были переданы некорректные параметры");
        return false;
    }
    return n1 + n2;
}

console.log(myfunc("ddd", 7 , error));
*/

// leccon 0.2.15

/*
let sum = (x, y, z) => (x + y + z);
let hello = () => console.log("Hello!");

let div = (x, y) => {
    if (y === 0) return false;
    return x / y;
}
*/

// домашка

/*
let error = (msg) => console.log(msg);

let myfunc = function(n1, n2, f) {
    let num1 = Number(n1);
    let num2 = Number(n2);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        f("Были переданы некорректные параметры");
        return false;
    }
    return n1 + n2;
}

console.log(myfunc("ddd", 7 , error));
*/

//lesson 0.2.16

/*
function div(x, y) {
    try {
        if (y === 0) throw new Error("Деление на 0");
        result = x / y;
        return result;
    }
    catch(e) {
        console.log("Ошибка: " + e.name);
        console.log(e);
    }
    finally {
        console.log("В любом случае finally выполняется")ж
    }
}

div(10, 5);
*/

// домашка

/*
let error = (msg) => console.log(msg);

let myfunc = function(n1, n2, f) {
    let num1 = Number(n1);
    let num2 = Number(n2);

    try {
        if (Number.isNaN(num1) || Number.isNaN(num2)) throw new Error("Некорректные данные");
    }
    catch(e) {
        f("Были переданы некорректные параметры");
    }
    finally {
        console.log("Завершаем выполнение функции");
    }

    return n1 + n2;
}

console.log(myfunc("ddd", 7 , error));
*/

// lesson 0.2.18

// домашка
 /*
let counter = 0;
let lcounter = 0;

function plus(lcounter) {
    counter++;
    lcounter++;
}

plus();
plus();
plus();

console.log(counter);
console.log(lcounter);
*/

// lesson 0.2.19

// домашка

let arr = [23, 45, 84, 11, 7, 43, 72, 98, 27, 17];

console.log(`Минимум: ${minElemOfArray(arr)}`);
console.log(`Максимум: ${maxElemOfArray(arr)}`);
console.log(`Сумма: ${sumOfArray(arr)}`);

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
*/

for (i = 1; i <= 5; i++) {
    for (i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// Day 1
// 
// Task 1

let age = +prompt('Your age:');

if (age < 18 ) {
  console.log('Извините, доступ запрещен');
} else {
  let name = prompt('Your name:');
  console.log(`Привет, ${name}!`);
}

// Task 2

let res2 = 0;
for (let i = 1; i <= 100; i++) res2 += i;
console.log(res2);

// Day 2
//
// Task 1

function getGreet(name) {
  return `Hello, ${name}`;
}

// Task 2 + 3

let arrMovies = ['Devil wares Prado', 'Like Mike', 'Always say Yes', 'Star Wars', 'Harry Potter'];

function outputArray(arr) {

  for (let i = 0; i < arr.length; i++) {
    console.log(`${(i+1)}. ${arr[i]}`);
  }

  for (let item of arr) {
    console.log(item);
  }
}

outputArray(arrMovies);
arrMovies.push('Terminator');
outputArray(arrMovies);

// Day 3
//
// Task 1

const numbers = [10, 20, 30, 40, 50, 60];

// 1) Верни новый массив, где каждое число умножено на 2
let arr = numbers.map((item) => item * 2);

// 2) Верни новый массив только с числами > 25
arr = numbers.filter((item) => item > 25);

// 3) Найди сумму всех чисел (одно число)
let sum = numbers.reduce((prev, item) => prev += item, 0);

// Task 2

function capitalizeWords(arr) {
  return arr.map((item) => item[0] + item.slice(1));
}

// Task 3

const items = [
  { title: 'Book', price: 12, inStock: true },
  { title: 'Pen', price: 3, inStock: false },
  { title: 'Headphones', price: 40, inStock: true },
];

let res3 = items.reduce((prev, item) => prev += item.inStock ? item.price : 0, 0);

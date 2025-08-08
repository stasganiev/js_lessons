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

let res = 0;
for (let i = 1; i <= 100; i++) res += i;
console.log(res);

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

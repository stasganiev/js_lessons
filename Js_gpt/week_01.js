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

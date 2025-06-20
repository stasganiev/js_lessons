// Lesson 001

// 1
const name = 'Stas';
let age;

function greet(name, age) {
    return `Привет, меня зовут ${name} и мне ${age} лет`;
}

// 2
const numbers = [10, 20, 30, 40, 50, 60];

let arr1 = numbers.map(item => item * 2);
let arr2 = numbers.filter(item => item > 25);
let arr3 = numbers.reduce((sum, current) => sum + current, 0);

// 3

function squareArray(arr) {
    return arr.map(item => item * item);
}

function capitalizeStrings(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1))
}

// Lesson 2

// Examples

// 1

const myPromise = new Promise((resolve, reject) => {
    // Асинхронная операция (например, setTimeout)
    setTimeout(() => {
        let success = true; // Попробуй поменять на false и посмотри, что произойдет
        if (success) {
            resolve("Операция выполнена успешно!");
        } else {
            reject("Ошибка выполнения!");
        }
    }, 2000);
});

// myPromise
//     .then(result => console.log(result))  // "Операция выполнена успешно!"
//     .catch(error => console.log(error))   // если reject
//     .finally(() => console.log("Завершено!"));

// 2

async function myAsyncFunction() {
    console.log("Ждем...");
    let result = await myPromise; // Ждет выполнения промиса
    console.log(result); // Выведет "Операция выполнена успешно!"
}

//myAsyncFunction();

// Answers

// 1

function delayedMessage(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve(message);
            } else {
                reject("Ошибка выполнения!");
            }
            }, delay);
    });
}

// delayedMessage("Привет, мир!", 2000)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Завершено!"));

// 2

function getRandomNumber() {
    return new Promise();
}

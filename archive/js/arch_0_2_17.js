"use strict";

// lesson 0.2.17
/*
function printArrayy(arr) {
    console.log("Длина массива: " + arr.length);
    for (let i = 0; i < arr.length; i++) {

    }
    for (let key in arr) {
        console.log(arr[key]);
    }
    for (let elem of arr) {
        console.log(elem);
    }
}

//let arr = new Array();
let arr = [];
arr = ["Строка", 10, true, false, "Alex"];
console.log(arr[0]);

arr[4] = "John";
arr[5] = 40;

arr = [[1, 2, 3], [4, 5]];
console.log(arr[0][2]);

for (let row in arr) {
    console.log(arr[row]);
    for (let col in arr[row]) {
        console.log(arr[row][col]);
    }
}*/

// домашка

function indexOfMinItem(arr) {
    let res = 0;
    let min = arr[0];
    for (let key in arr) {
        if (arr[key] < min) {
            min = arr[key];
            res = key;
        }
    }
    return res;
}

function maxItemOfArray2(arr) {
    let res = arr[0][0];

    for (let subarr of arr) {
        for (let elem of subarr) {
            if (elem > res) res = elem;
        }
    }

    return res;
}

let arr = [23, 45, 84, 11, 7, 43, 72, 98, 27, 17];

let i = indexOfMinItem(arr);
console.log(`В массиве ${arr} минимальное значение находится по индексу ${i}`);

let arr2 = [];
arr2[0] = [2, 34, 54, 91];
arr2[1] = [71, 66, 56, 7];
arr2[2] = [49, 19, 83, 27];
arr2[3] = [33, 48, 11, 73];

let max = maxItemOfArray2(arr2);
console.log(`В массиве ${arr2} максимальное значение ${max}`);

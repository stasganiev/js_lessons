'use stricts'

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);

rows[2] = 10;
console.log(rows);

rows[rows.length-1] = 10;

//Step 26
let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

//Step 27
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
console.log(rows);
let popped = rows.pop();
console.log(popped);

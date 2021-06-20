let fruits1: string[] = ["Apple", "Orange", "Banana"];
let fruits2: Array<string> = ["Apple", "Orange", "Banana"];
let arr = [1, 3, "Apple", "Orange", "Banana", true, false];

let fruits3: Array<string>;
fruits3 = ["Apple", "Orange", "Banana"];

let ids: Array<number>;
ids = [23, 34, 100, 124, 44];

let values1: (string | number)[] = ["Apple", 2, "Orange", 3, 4, "Banana"];
// or
let values2: Array<string | number> = ["Apple", 2, "Orange", 3, 4, "Banana"];

let fruits4: string[] = ["Apple", "Orange", "Banana"];
fruits[0]; // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined

var fruits: Array<string> = ["Apple", "Orange", "Banana"];
fruits.sort();
console.log(fruits); //output: [ 'Apple', 'Banana', 'Orange' ]

console.log(fruits.pop()); //output: Orange

fruits.push("Papaya");
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya']

fruits = fruits.concat(["Fig", "Mango"]);
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango']

console.log(fruits.indexOf("Papaya")); //output: 2

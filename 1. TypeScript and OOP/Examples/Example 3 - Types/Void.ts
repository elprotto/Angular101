function sayHi(): void {
  console.log("Hi!");
}

let speech: void = sayHi();
console.log(speech); //Output: undefined

let nothing: void = undefined;
let num: void = 1; // Error

// Tipically function definition
let doLog1 = function (message) {
  console.log(message);
};

// Arrow funtion
let doLog2 = (message) => console.log(message);

let doLog3 = (message) => console.log(message);

let doLog4 = (message) => {
  console.log(message);
  console.log(message);
};

let doLog5 = () => console.log("Console message");

let sum = (x: number, y: number) => x + y;

// Implementation
doLog1(sum(1, 2));
doLog5();

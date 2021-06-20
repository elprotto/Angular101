var empId: number = 1;
var empName: string = "Steve";

// Tuple type variable
var employee1: [number, string] = [1, "Steve"];

var employee2: [number, string] = [1, "Steve"];
var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable

var employee3: [number, string][];
employee3 = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];

var employee4: [number, string] = [1, "Steve"];
employee4[0]; // returns 1
employee4[1]; // returns "Steve"

var employee5: [number, string] = [1, "Steve"];
employee5.push(2, "Bill");
console.log(employee5); //Output: [1, 'Steve', 2, 'Bill']

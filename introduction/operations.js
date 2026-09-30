let firstFavNumber = 7;
let secondFavNumber = 4;

//Addition of the two favourite numbers
let sum = firstFavNumber + secondFavNumber;
let quotient = firstFavNumber / secondFavNumber;
let subtraction = firstFavNumber - secondFavNumber;
let product = firstFavNumber * secondFavNumber;
let mod = firstFavNumber % secondFavNumber;
let power = firstFavNumber ** secondFavNumber;

console.table([
  { operation: "Addition", result: sum },
  { operation: "Subtraction", result: subtraction },
  { operation: "Multiplication", result: product },
  { operation: "Division", result: quotient },
  { operation: "Modulus", result: mod },
  { operation: "exponential", result: power },
]);

const users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
  { id: 3, name: "Charlie", role: "Moderator" },
];

console.table(users);
console.log(typeof sum);

const myObject = {
  name: "John",
  age: 30,
  "obnoxious property": function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

const variable = "obnoxious property";
console.log(myObject.name); // Output: John
console.log(myObject.age); // Output: 30
console.log(myObject[variable]()); // Output: Hello, my name is John and I am 30 years old.

// creating new object
const car = {
  name: "Toyota",
  model: "Camry",
  year: 2020,
  price: 400000,
  startEngine: function () {
    return `The ${this.name} ${this.model} engine has started.`;
  },

  stopEngine: function () {
    return `The ${this.name} ${this.model} engine has stopped.`;
  },

  applyDiscount: function (percentageDiscount) {
    multiplier = 1 - percentageDiscount / 100;
    this.price *= multiplier;
  },
};

function getCarInfo(car) {
  console.log("---This is the car information----");
  console.log(`Car Name: ${car.name}`);
  console.log(`Car Model: ${car.model}`);
  console.log(car.startEngine());
  car.applyDiscount(10);
  console.log(`The price after the discount is : ${car.price}`);
}

console.log(car.startEngine()); // Output: The Toyota Camry engine has started.
console.log(car.stopEngine()); // Output: The Toyota Camry engine has stopped.
getCarInfo(car); // Output: Car information with name, model, and engine start message

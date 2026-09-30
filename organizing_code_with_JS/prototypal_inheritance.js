//adding a Person Object Constructor to the Player example, and making Player inherit from Person!
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello , I'm ${this.name}`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  console.log(`My marker is "${this.marker}"`);
};

function Coach(name, result) {
  this.name = name;
  this.result = result;
}

Coach.prototype.sayResult = function () {
  console.log(`I am the ${this.result} coach`);
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

//now to make coach inherit from Person
Object.setPrototypeOf(Coach.prototype, Person.prototype);
console.log(Object.getPrototypeOf(Player.prototype));

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
const coach1 = new Coach("Mailu", "winner");

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!
coach1.sayName();

player1.getMarker(); // My marker is "X"
player2.getMarker(); // My marker is "O"
coach1.sayResult();

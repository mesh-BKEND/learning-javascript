function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log("My name is " + this.name);
  };
}

Player.prototype.sayMarker = function () {
  return `my marker is ${this.marker}`;
};

const player1 = new Player("Alice", "X");
const player2 = new Player("Bob", "O");

console.log(Object.getPrototypeOf(player1));
console.log(Object.getPrototypeOf(player2));
console.log(Player.prototype);
console.log(Object.prototype);

console.log(Object.getPrototypeOf(player1) === Player.prototype);
console.log(Object.getPrototypeOf(player2) === Player.prototype);
console.log(player1.sayMarker()); //x
console.log(player2.sayMarker()); //o

console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype); //true
console.log(player1.valueOf()); //Player { name: 'Alice', marker: 'X', sayName: [Function (anonymous)] }
console.log(player2.valueOf());

console.log(Object.prototype.hasOwnProperty("valueOf"));
console.log(Object.getPrototypeOf(Player.prototype));

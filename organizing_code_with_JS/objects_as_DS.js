//they are mainly used to store data that are related to each other. They are also used to represent real-world entities.

const playerOne = {
  name: "John",
  marker: "X",
};

const playerTwo = {
  name: "Jane",
  marker: "O",
};

console.log(playerOne.name); // Output: John
console.log(playerTwo.marker); // Output: O

function gameOver(player) {
  console.log(`Game over! ${player.name} wins!`);
}

gameOver(playerOne);
gameOver(playerTwo);

//wanna try rock paper scisors game
const rps = {
  playerScore: 0,
  computerScore: 0,
  playround(choice) {
    //function for the playing round
    // code to play the round, update score if needed, then return the result
    choices = ["rock", "paper", "scissors"];
    index = Math.floor(Math.random() * 3);
    let computerChoice = choices[index];

    if (
      (choice == "rock" && computerChoice == "scissors") ||
      (choice == "scissors" && computerChoice == "paper") ||
      (choice == "paper" && computerChoice == "rock")
    ) {
      this.playerScore += 1;
    } else if (choice == computerChoice) {
      console.log("the players tied the game");
    } else {
      this.computerScore += 1;
    }
  },
  getWinner() {
    //return the player with the most winns
    if (this.computerScore > this.playerScore) {
      console.log(`The opponent won the game by ${this.computerScore} scores`);
    } else if (this.computerScore < this.playerScore) {
      console.log(`you won the game by ${this.playerScore} scores`);
    } else {
      console.log("you tied the game with your opponent");
    }
  },

  reset() {
    //need to reset the players scores to 0
    this.computerScore = 0;
    this.playerScore = 0;
  },
};

rps.playround("rock");
console.log(rps.playerScore, rps.computerScore);
rps.getWinner();
rps.playround("paper");
console.log(rps.playerScore, rps.computerScore);
rps.getWinner();
rps.playround("paper");
console.log(rps.playerScore, rps.computerScore);
rps.getWinner();
rps.playround("scissors");
console.log(rps.playerScore, rps.computerScore);
rps.getWinner();

rps.reset();
console.log(rps.playerScore, rps.computerScore);

let firstCard = 30;
let secondCard = 11;

let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;

let message = "";
const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card??? 😃";
  } else if (sum === 21) {
    message = "wohoo!!, You've got BlackJack!😂";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!😭";
    isAlive = false;
  }

  //cash out
  messageEl.textContent = message;
  sumEl.textContent = "Sum : " + sum;
  cardsEl.textContent = "Cards : " + firstCard + " " + secondCard;
}

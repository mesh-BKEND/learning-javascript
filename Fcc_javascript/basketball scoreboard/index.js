//Initializing the scores for each team
let scores = {
  home: 0,
  guest: 0,
};

let counters = {
  home: document.querySelector("#home-counter"),
  guest: document.querySelector("#guest-counter"),
};

//function to update the score on the scoreboard

function addpoints(team, points) {
  scores[team] += points;

  counters[team].textContent = scores[team];
}

//function to reset a new game
function newGame() {
  (scores[home], (scores[guest] = 0));

  counters.guest.textContent = scores[guest];
  counters.home.textContent = scores[home];

  // counters[guest].textContent = 0;
  // counters[home].textContent = 0;
}

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

  console.log(team);
  console.log(counters[team]);
}

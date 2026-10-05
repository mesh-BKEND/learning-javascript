//Initializing the scores for each team
let homeScore = 0;
let guestScore = 0;

//getting the counters
const homeCounter = document.querySelector("#home-counter");
const guestCounter = document.querySelector("#guest-counter");

function displayhomeCount() {
  homeCounter.textContent = homeScore;
}

function displayGuestCount() {
  guestCounter.textContent = guestScore;
}
//function to get the parent id of a parent to decide which score should be increamented
function addOnes(event) {
  if (event.target.parentElement.id == "home") {
    homeScore += 1;
    displayhomeCount();
  } else {
    guestScore += 1;
    displayGuestCount();
  }
}

function addTwos(event) {
  if (event.target.parentElement.id == "home") {
    homeScore += 2;
    displayhomeCount();
  } else {
    guestScore += 2;
    displayGuestCount();
  }
}

function addThrees(event) {
  if (event.target.parentElement.id == "home") {
    homeScore += 3;
    displayhomeCount();
  } else {
    guestScore += 3;
    displayGuestCount();
  }
}

count = 0;

const counter = document.getElementById("counter");
const saveEl = document.getElementById("save-el");

function increament() {
  count += 1;

  counter.innerText = count;
}

function save() {
  const countStr = count + " - ";
  console.log(countStr);
  saveEl.textContent += countStr;
  count = 0;
  counter.textContent = count;
}

//

//cre

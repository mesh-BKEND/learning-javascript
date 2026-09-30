count = 0;

const counter = document.getElementById("counter");
function increament() {
  count = count + 1;
  console.log(count);

  counter.innerText = count;
}

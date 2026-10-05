//creating a varible first name and the last name and then concatenate the two names using the fullName variable
let firstName = "Meshack";
let lastName = "Magara";

let fullName = firstName + " " + lastName;
console.log(fullName);

//create two functions that add3points and another that remove1point and have them remove /add points from myPoints variable
let myPoints = 3;

function add3points() {
  myPoints += 3;

  return myPoints;
}

function remove1point() {
  myPoints -= 1;

  return myPoints;
}

console.log(myPoints);
add3points();
add3points();
add3points();
remove1point();

console.log(add3points());

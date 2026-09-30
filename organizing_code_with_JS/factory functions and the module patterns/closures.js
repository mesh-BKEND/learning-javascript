//creating a function that returns another function
function makeAddingFunction(firstNumber) {
  return function (secondNumber) {
    return firstNumber + secondNumber;
  };
}

//calling now the function
let add5 = makeAddingFunction(5);
console.log(add5(10));

let add8 = makeAddingFunction(8);
console.log(add8(10));

function user(name) {
  const discordName = "@" + name;

  let reputation = 900;

  const getReputation = () => reputation;
  const addReputation = () => reputation++;

  return {
    name,
    discordName,
    getReputation,
    addReputation,
  };
}

const user1 = user("John");
console.log(user1);
console.log(user1.name);
console.log(user1.discordName);

user1.addReputation();
user1.addReputation();
console.log(user1.getReputation());

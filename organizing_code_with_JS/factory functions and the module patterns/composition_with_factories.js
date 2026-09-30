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

//creating another function that inherits from the user function
function createPlayer(name, level) {
  const player = user(name);

  const getLevel = () => level;
  const levelUp = () => level++;

  return {
    ...player,
    getLevel,
    levelUp,
  };
}

const player1 = createPlayer("Alice", 5);

console.log(player1);
console.log(player1.name);
console.log(player1.discordName);
console.log(player1.getReputation());
console.log(player1.getLevel());

player1.addReputation();
player1.levelUp();

console.log(player1.getReputation());
console.log(player1.getLevel());

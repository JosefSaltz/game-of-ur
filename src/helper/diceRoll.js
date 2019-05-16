// Generate a random number for a given die
function rollDie() {
  const sides = 5;
  return Math.floor(Math.random() * sides) + 1;
}

// Return an array of die values
function diceRoll() {
  return new Array(3).map( 
    () => { 
      return rollDie(); 
    } 
  );
}

//Sum total moves from die hand

export default diceRoll;
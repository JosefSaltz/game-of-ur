// Generate a random number for a given die
function rollDie() {
  const vertices = 4;
  return Math.floor(Math.random() * vertices) + 1;
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
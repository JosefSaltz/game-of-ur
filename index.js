var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
c.fillRect(50, 10, 40, 10);
c.fillRect(70, 10, 40, 10);
c.fillRect(90, 10, 40, 10);

var board = {
   turn: 0,
   square: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  
  player1: {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
    p7: 0
  },
  
  player2: {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
    p7: 0
  },

  placePiece: function(diceRoll) {
    if (this.turn === 0) {
      
    }
  }
};

var player = function() {
  this.score = 0;
  this.pieces = 7;
}

function rollDice() {
  var die = Math.floor(Math.random() * 4 + 1);
  console.log(die);
  if (die ===  3) {
    return 1;
  } else {
    return 0;
  } 
}

function throwDice() {
  var dice = [];
  var result;
  for (var i = 0; i < 4; i++) {
    dice[i] = rollDice();
  }
  result = dice.reduce(function(prev, curr){return prev += curr});
  return result;
}

var player1 = new player();
var player2 = new player();

console.log("Welcome to the Game of Ur!");
console.log("\t x x x");
console.log("\t x x x");
console.log("\t   x  ");
console.log("\t   x  ");
console.log("\t x x x");
console.log("\t x x x");
console.log("\t x x x");

console.log("Test Throw!");

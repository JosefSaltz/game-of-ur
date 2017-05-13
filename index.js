var piece = {
  id:null,
  position: 0,
  scored: false
}

var player = function() {
  this.score = 0;
  this.offBoard = 7;
  this.pieces = [];
  this.genPieces = function() {
    for (var x = 0; x < 7; x++) {
      this.pieces[x] = new piece;
      this.peices[x]["id"] = x;
    }
  }
}

var board = {
  //the first four tiles are starting player lane and the last two tiles are ending lane
  playerLane1: [0, 0, 0, 0, 0, 0],  //places 4 [3] and 6 [5] give additional throw
  playerLane2: [0, 0, 0 ,0 ,0 ,0],  //places 4 [3] and 6 [5] give additional throw
  sharedLane: [0, 0, 0, 0, 0, 0, 0, 0], //place 4 [3] gives additional throw and immunity
};

function rollDice() {
  var die = Math.floor(Math.random() * 4 + 1); //generates a number between 1 - 4
  if (die ===  3 | die === 2) {
    return 1;
  } else {
    return 0;
  } 
}

function throwDice() {
  var dice = [0, 0, 0, 0]; //array to store the four dice
  
  var rolled = dice.map( function(val) { 
    return val += rollDice();
  });

  var rollTotal = rolled.reduce( function(prev, curr) { 
    return prev += curr
  });
  console.log("You rolled a" + rolled.forEach(function(d) {
    return " " + d;
  }))
  return rollTotal;
}

function gameStart() {
  var player1 = new player();
  var player2 = new player();
  var winner = null;
  var turn = 0;
  while(!winner) {
    var turnThrow = 0;
    
    if (!turn) {
      console.log("Player 1 please roll the dice!");
      turnThrow = throwDice();
      
      if (turnThrow) {
        if(player1.pieces === 7) {
          player1["pieces"][0]["position"] += turnThrow; //first piece is moved on board
          player.offBoard -= 1; //subtracted from offBoard count
          board["playerLane1"][turnThrow - 1] = player1["pieces"][0][id]; //board is assigned piece id in that position
        }

        
      }
    } else {
      console.log("Player 2 please roll the dice");
      turnThrow = throwDice();

      if(turnThrow) {
        //prompt player to place a piece on the board or move an already placed piece
      }
    }

    if( player1.score === 7 | player2.score === 7 ) { //win condition
      winner = true;
      player1.score === 7 ? console.log("Player 1 wins!") : console.log("Player 2 wins!");
    }
  }
}

console.log("Welcome to the Game of Ur!");
console.log("\t x x x");
console.log("\t x x x");
console.log("\t x x x");
console.log("\t   x  ");
console.log("\t   x  ");
console.log("\t x x x");
console.log("\t x x x");



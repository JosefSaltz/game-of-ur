var piece = {
  id:null,
  position: -1,
  scored: false,
  interactObj: null
}

var player = function() {
  this.score = 0;
  this.offBoard = 7;
  this.pieces = [];
  this.genPieces = function() {
    for (var x = 0; x < 7; x++) {
      this.pieces[x] = new piece;
      this.pieces[x]["id"] = x;
      this.pieces[x]["interactObj"] = document.createElement('div');
    }
  }
}

var board = {
  //the first four tiles are starting player lane and the last two tiles are ending lane
  playerLane1: [0, 0, 0, 0, 0, 0],  //places 4 [3] and 6 [5] give additional throw
  playerLane2: [0, 0, 0 ,0 ,0, 0],  //places 4 [3] and 6 [5] give additional throw
  sharedLane: [0, 0, 0, 0, 0, 0, 0, 0] //place 4 [3] gives additional throw and immunity
};

function rollDice() {
  var die = Math.floor(Math.random() * 4 + 1); //generates a number between 1 - 4
  if (die ===  3 || die === 2) {
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
  var currentPiece;
  var pieceMove;
  while(!winner) {
    var turnThrow = 0;
    if (!turn) {
      console.log("Player 1 please roll the dice!");
      turnThrow = throwDice();
      //If the player's dice roll is not 0, check to see if they have any pieces on the board.
      //If they don't, get the first item in their pieces Array and make it the selected piece.
      //Add the current dice roll value to the piece's position member and assign it appropriately.
      //Move the piece obj to the appropriate position within the board object's indexes.
      if (turnThrow) {
        if(player1.pieces.length === 7) {
          currentPiece = player1.pieces.shift();
          pieceMove = currentPiece.position += turnThrow;
          if(pieceMove <= 4 || pieceMove >= 13) {
            if(turnThrow >= 13) {
              board["playerLane1"][pieceMove - 8] = currentPiece;
            } else {
              board["playerLane1"][pieceMove] = currentPiece;
            }
          }
        } 
      }
      turn = 1;
    } else {
      console.log("Player 2 please roll the dice");
      turnThrow = throwDice();

      if(turnThrow) {
        if(player1.pieces.length === 7) {
          currentPiece = player1.pieces.shift();
          pieceMove = currentPiece.position += turnThrow;
          if(pieceMove <= 4 || pieceMove >= 13) {
            if(turnThrow >= 13) {
              board["playerLane2"][pieceMove - 8] = currentPiece;
            } else {
              board["playerLane2"][pieceMove] = currentPiece;
            }
          }
        }
      }
      turn = 0;
    }

    if( player1.score === 7 || player2.score === 7 ) { //win condition
      winner = true;
      player1.score === 7 ? console.log("Player 1 wins!") : console.log("Player 2 wins!");
    }
  }
}

console.log("Welcome to the Game of Ur!");
console.log("\t % x %");
console.log("\t x x x");
console.log("\t x x x");
console.log("\t x % x");
console.log("\t   x  ");
console.log("\t   x  ");
console.log("\t % x %");
console.log("\t x x x");
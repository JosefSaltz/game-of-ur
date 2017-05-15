import interact from "interact.js";

var piece = function() {
  this.id = null;
  this.position = -1;
  this.scored = false;
  this.interactObj = null;
  this.owner = null;
}

var player = function(owner) {
  this.name = owner;
  this.score = 0;
  this.offBoard = 7;
  this.pieces = [];
  this.genPieces = function() {
    for (var x = 0; x < 7; x++) {
      this.pieces[x] = new piece;
      this.pieces[x]["id"] = x;
      this.pieces[x]["owner"] = this.name;
    }
  }
}

var board = {
  //the first four tiles are starting player lane and the last two tiles are ending lane
  grid: [[], [], [], [], 0, 0, 0, 0, 0, 0, 0, 0, [], []],
   //place 4 [3] gives additional throw and immunity
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
  console.log("You rolled a " + rollTotal);
  return rollTotal;
}

//Takes in a player's piece array and turn roll to check if they

function movePiece(piece, turnRoll) {
  var pieceTarget
  piece.position += turnRoll;
  pieceTarget = piece.position;
  if (pieceTarget <= 3 || pieceTarget >= 13) {
    return board.grid[pieceTarget].push(piece);
  } else {
    return board.grid[pieceTarget - 4] = piece;
  }
}

function  moveSelection(playerInventory, diceVal) {
  if(playerInventory.pieces.length === 7) {
    console.log("Automatically placing piece on board.");
    playerInventory.offBoard -= 1;
    return movePiece(playerInventory.pieces.shift(), diceVal);
  } else {
    var getInput = prompt("Would you like to place a piece or move piece in play?");
    if (getInput === "place") {
      playerInventory.offBoard -= 1;
      return movePiece(playerInventory.pieces.shift(), diceVal);
    } else if(getInput === "move") {
      getInput = prompt("Please enter piece id to be moved");
    }

  }
}

var player1 = new player("player1Name");
var player2 = new player("player2Name");

player1.genPieces();

interact('.piece').draggable();
function gameStart() {
  var winner = null;
  var turn = 0;
  var currentPiece;
  
  while(!winner) {
    var turnThrow = 0;
    if (!turn) {
      console.log("Player 1 please roll the dice!");
      turnThrow = throwDice();
      if (turnThrow > 0) {
        moveSelection(player1.pieces, turnThrow);
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
console.log (moveSelection(player1, throwDice()));
console.log(board);
interact('.piece').draggable();
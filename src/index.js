import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Piece from './components/piece.js';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
ReactDOM.render(<App />, document.getElementById('root'));

function generatePieces(player) {
  //Responsible for creating an array of Piece components
  let pieces = [];
  for(let i = 0; i < 4; i++) {
    pieces[i] = <Piece key={i} position={null} owner={player} />;
  }
  return pieces;
}

function gameLoop() {
  let game_not_over = true;

  let player1 = {
    playerId: 1,
    pieces: [],
    score: null
  };
  
  let player2 = {
    playerId: 2,
    pieces: [],
    score: null
  };

  //Generate pieces for each player
  player1.pieces = generatePieces(player1.playerId);
  player2.pieces = generatePieces(player2.playerId);


  turnSequencer(initial_player) {
    if(game_not_over) {
      launchAction(initial_player);
      
      //If last player was player 1
      if(initial_player === player1.playerId) {
        //Switch to player 2's turn
        turnSequencer(player2.playerId);

      //If last player was player 2
      } else if(initial_player === player2.playerId) {
        //Switch to player 1's turn
        turnSequencer(player1.playerId)
      
        //Throw an error if last player id does not match player 1 or 2
      } else {
        console.log('Error: Turn sequencer received invalid player id');
      }
    }
  }
  
  launchAction(playerId) {
    //Waits for player to select piece
    //Checks that a destination has been selected
    //Upon End Move Submission update piece position state
    //Update player score
  }  
}

gameLoop();


import React, { Component } from 'react';
import Board from './components/board';
import Piece from './components/piece';
class App extends Component {
  constructor() {
    super();
    this.state = {
      game_not_over: true,
      player1: {
        playerId: 1,
        pieces: [],
        score: null
      },
      player2: {
        playerId: 2,
        pieces: [],
        score: null
      }
    }
  }

  generatePieces(player) {
    //Responsible for creating an array of Piece components
    let pieces = [];
    for(let i = 0; i < 4; i++) {
      pieces[i] = <Piece key={i} position={null} owner={player} />;
    }
    return pieces;
  }
  
  
  turnSequencer(initial_player, game_not_over) {
    if(game_not_over) {
      let player1 = this.state.player1.playerId;
      let player2 = this.state.player2.playerId;
      this.launchAction(initial_player);
      
      //If last player was player 1
      if(initial_player === player1) {
        //Switch to player 2's turn
        this.turnSequencer(player2);
  
      //If last player was player 2
      } else if(initial_player === player2) {
        //Switch to player 1's turn
        this.turnSequencer(player1);
      
        //Throw an error if last player id does not match player 1 or 2
      } else {
        console.log('Error: Turn sequencer received invalid player id');
        return null;
      }
    }
  }

  launchAction(playerId) {    
    //Rolls dice
    //Waits for player to select piece
    //Checks that a destination has been selected
    //Upon End Move Submission update piece position state
    //Update player score
  }
  
  gameLoop() {
    console.log('Game Loop Starting');
    console.log('Generating Player piece inventories');
    
  
  }
  
  render() {
    return (
      <Board />
    );
  }

}

export default App;


import React, { Component } from 'react';
import Board from './components/board';
import Piece from './components/piece';
import toggleTurn from './helper/toggleTurn.js'
import diceRoll from './helper/diceRoll.js'
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

  initPieces(player) {
    //Responsible for creating an array of Piece components
    let pieces = [];
    for(let i = 0; i < 4; i++) {
      pieces[i] = <Piece key={i} position={null} owner={player} />;
    }
    return pieces;
  }
  
  launchTurn(playerId) {    
    //Rolls dice
    //Waits for player to select piece
    //Checks that a destination has been selected
    //Upon End Move Submission update piece position state
    this.curr_turn = toggleTurn(playerId);
  }
  
  startGame() {
    let player1 = this.state.player1;
    let player2 = this.state.player2;

    while(this.state.game_not_over) {
      this.launchTurn(curr_turn).bind(this)
    }
  }
  
  render() {
    return (
      <div>  
        <Board />
      </div>
    );
  }

}




export default App;


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
    //Update player score
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


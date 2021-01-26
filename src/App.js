import React, { Component } from 'react';
import Board from './components/board';
import Piece from './components/piece';
import toggleTurn from './helper/toggleTurn.js';
import diceRoll from './helper/diceRoll.js';
import TurnModal from './components/turn_modal';
class App extends Component {
  constructor() {
    super();
    this.state = {
      game_not_over: true,
      curr_turn: null,
      player1: {
        playerId: 1,
        pieces: [],
        score: null
      },
      player2: {
        playerId: 2,
        pieces: [],
        score: null
      },
      displayState: null,
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

  componentDidMount() {
    this.startGame();
  }

  startGame() {
    let player1 = this.state.player1;
    let player2 = this.state.player2;
    //Send both players the turn modal to roll dice and return their values
    this.setState({ displayState: 'chooseTurn' }, () => {
      console.log(`displayState update: ${this.state.displayState}`);
    });

    //while(this.state.game_not_over) {
    //  this.launchTurn(this.state.curr_turn);
    //}
  }

  

  getComponent() {
    let component;
    switch(this.displayState) {
      case 'turnModal':
        component = <TurnModal />;
        break;
      default:
        component = <Board />;
        break;
    }
    return component;
  }
  
  render() {
    return (
      <div>  
        { this.getComponent() }
      </div>
    );
  }

}




export default App;


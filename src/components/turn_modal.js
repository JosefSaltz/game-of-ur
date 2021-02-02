import React, { Component } from 'react';
import '../styles/turnModal.css'
import Dice from './dice';

class TurnModal extends Component {
  render() {
    return(
      <div className="modal">
        <Dice />
        <div id="btn-container">
          <button hidden onClick={Dice.roll}>Roll Dice!</button>
        </div>
      </div>
    );
  }
}

export default TurnModal;
import React, { Component } from 'react';
import '../styles/turnModal.css'
import Dice from './dice';

class TurnModal extends Component {
  render() {
    return(
      <div className="modal">
        <Dice />
        <button>Roll Dice!</button>
      </div>
    );
  }
}

export default TurnModal;
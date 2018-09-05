import React, { Component } from 'react';
import Piece from './piece';
import '../styles/piececounter.css'

class Piece_Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      piece_count: 8,
      owner: this.props.owner;
    }
  }
  render() {
    return (
      <div className="Piececounter>
        <Piece />
        x
        {this.state.piece_count}
      </div>
      
    )
  }
}

export default Piece_Counter
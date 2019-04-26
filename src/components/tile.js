import React, { Component } from 'react';
import Piece from './piece';
import '../styles/tile.css'

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupied: false,
      current_piece: null
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        {/*
          Mandala graphic
          Can render player pieces
        */}
      </div>
    );
  }
}

export default Tile;
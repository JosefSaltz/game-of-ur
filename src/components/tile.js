import React, { Component } from 'react';
import Piece from './piece';
import '../styles/tile.css'

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupied: true,
      current_piece: null
    }
  }

  render() {
    return (
      <div class="tile">
        {/*
          Mandala graphic
          Can render player pieces
        */}
      </div>
    );
  }
}

export default Tile;
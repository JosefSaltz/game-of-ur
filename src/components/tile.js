import React, { Component } from 'react';
import Piece from './piece';
import '../styles/tile.css'

class Tile extends Component {
  constructor(props) {
    super(props);

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
import React, { Component } from 'react';
import Tile from './tile';
import '../styles/board.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top_row: {
        tile_pattern: [1,1,1,1,0,0,1,1],
        tile_occupied: [0,0,0,0,0,0] //Two tiles missing due to shorter lane
      },
      
      middle_row: {
        tile_pattern: [1,1,1,1,1,1,1,1],
        tile_occupied: [0,0,0,0,0,0,0,0]
      },
      
      bottom_row: {
        tile_pattern: [1,1,1,1,0,0,1,1],
        tile_occupied: [0,0,0,0,0,0] //Two tiles missing due to shorter lane
      }
    }
  }
  
  tile_encode(value) {
    if(value) {
      return <Tile className="tile visible" />;
    } else {
      return <Tile className="tile invisible" />;
    }
  }

  render() {
    /* How the fuck do you iterate multiple elements into jsx? */
    return (
      <div className="grid-wrapper">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    );
  }
}

export default Board;
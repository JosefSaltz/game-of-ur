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
    let top_row = this.state.top_row.tile_pattern;
    let middle_row = this.state.middle_row.tile_pattern;
    let bottom_row = this.state.bottom_row.tile_pattern; 
    return (
      <div class="grid-wrapper">
        {
          top_row.forEach(this.tile_encode(top_row));
          top_row.forEach(this.tile_encode(middle_row));
          top_row.forEach(this.tile_encode(bottom_row));
        }
      </div>
    );
  }
}

export default Board;
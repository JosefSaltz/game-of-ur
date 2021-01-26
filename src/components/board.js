import React, { Component } from 'react';
import Tile from './tile';
import Piece from './piece'
import '../styles/board.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top_row: {
        tile_pattern: [[1, "a4"],[1, "a3"],[1, "a2"],[1, "a1"],[0, "n1"],[0,"n2"],[1, "a6"],[1, "a5"]],
        tile_occupied: [0,0,0,0,0,0] //Two tiles missing due to shorter lane
      },
      
      middle_row: {
        tile_pattern: [[1, "b1"],[1, "b2"],[1, "b3"],[1, "b4"],[1, "b5"],[1,"b6"],[1, "b7"],[1, "b8"]],
        tile_occupied: [0,0,0,0,0,0,0,0]
      },
      
      bottom_row: {
        tile_pattern: [[1, "c4"],[1, "c3"],[1, "c2"],[1, "c1"],[0, "n4"],[0,"n5"],[1, "c6"],[1, "c5"]],
        tile_occupied: [0,0,0,0,0,0] //Two tiles missing due to shorter lane
      }
    }
  }
  
  tile_encode(present, uid = null) {
    if(present) {
      return <Tile className="tile visible" key={uid} />;
    } else {
      return <Tile className="tile invisible" />;
    }
  }

  render() {
    /* How the fuck do you iterate multiple elements into jsx? */
    return (
      <div>
        <Piece />
        <div className="grid-wrapper">
          { 
            Array.from(
              this.state.top_row.tile_pattern, (el) => { return this.tile_encode(el[0], el[1]) } 
            )
          }
          {
            Array.from(
              this.state.middle_row.tile_pattern, (el) => { return this.tile_encode(el[0], el[1]) } 
            )
          }
          {
            Array.from(
              this.state.bottom_row.tile_pattern, (el) => { return this.tile_encode(el[0], el[1]) } 
            ) 
          }
        </div>
        
      </div>
    );
  }
}

export default Board;
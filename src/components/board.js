import React, { Component } from 'react';
import Tile from './tile';
import '../styles/tile-layout.css'

class Board extends Component {

  render() {
    //Render board tiles dynamically 
    return (
      <div>
        { 
          let i = 0;
          while(i < 24) {
            let element;
            if(i < 4) {
              let element = <Tile className="player1-entry tile" id={i} />
            } else if(i < 8) {
              let element = <Tile className="player2-entry tile" id={i} />
            } else if(i < 16) {
              let element = <Tile className="main-lane tile" id={i} />
            } else if(i < 20) {
              let element = <Tile className="player1-exit tile" id={i} />
            } else if(i < 24) {
              let element = <Tile className="player2-exit tile" id={i} />
            }
            return element;
            i++;
          }
        }
      </div>
    );
  }
}

export default Board;
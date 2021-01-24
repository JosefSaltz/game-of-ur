import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'
import hri from 'human-readable-ids';
import '../styles/piece.css';

//Renders a player piece in one of two colors
class Piece extends Component {
  constructor(props) {
    super(props);
    let name = hri.random;
    
    this.state = {
      name,
      owner: this.props.owner,
      position: this.props.position,
      selected: false
    }
  }

  snapPosition() {
    //Quantizes pieces position to nearest tile 
  }
  render() {
    return (
      <Draggable grid={[25,25]} onMouseUp={this.snapPosition} bounds="parent">
        <div className={`piece ${this.props.owner}`}>
          <input type="radio" />
        </div>
      </Draggable>
    );
  }
}

export default Piece;
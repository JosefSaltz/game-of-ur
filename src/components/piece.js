import React, { Component } from 'react';
import hri from 'human-readable-ids';
class Piece extends Component {
  constructor(props) {
    super(props);
    let name = hri.random();
    
    this.state = {
      name,
      owner: this.props.owner,
      position: this.props.position,
      selected: false
    }
  }

  handleBorderToggle(event) {
    console.log("Highlights piece's border!");
    this.setState({ selected: !(this.state.selected) });
  }

  render() {
    return (
      <div className={`piece ${this.props.owner}`}>
        <input type="radio" onChange={this.handleBorderToggle()} />
      </div>
    );
  }
}

export default Piece;
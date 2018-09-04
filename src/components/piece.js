import React, { Component } from 'react';

class Piece extends Component {
  super(props);
  constructor() {
    this.state = {
        name: this.props.key,
        owner: this.props.owner,
        position: this.props.position
    }
  }

  render() {
    return (
      <div class="piece">
        {/* renders a circle with player's color shape */}
      </div>
    );
  }
}

export default Piece;
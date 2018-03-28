import React, { Component } from 'react';

class Piece extends Component {
  constructor(props) {
    super(props);
    // Individual pieces should receive id and owner from their props
    this.state = {
      id: this.props.key,
      owner: this.props.owner,  
    }
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Piece;
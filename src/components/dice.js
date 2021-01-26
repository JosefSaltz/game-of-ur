import React, { Component } from 'react';
import diceRoll from '../helper/diceRoll.js';


class Dice extends Component {
//Die code based off of ryancperry's code on https://codesandbox.io/s/xjk3xqnprw?file=/index.html
  render() {
    return(
      <div className="dice">
        <ol id="die1">
          <li className="die-side" data-side="1">

          </li>
        </ol>
        <ol id="die2">

        </ol>
      </div>
    )
  }
}

export default Dice;
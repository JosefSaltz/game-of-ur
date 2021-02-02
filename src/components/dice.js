import React, { Component } from 'react';
import '../styles/dice.css'
import diceRoll from '../helper/diceRoll.js';


class Dice extends Component {
//Die code based off of ryancperry's code on https://codesandbox.io/s/xjk3xqnprw?file=/index.html
  roll() {
    const dice = [...document.querySelectorAll('.die')];
    dice.forEach(thrown => {
      this.toggleClasses(thrown);
      dice.dataset.roll = getRandomNumbers(0, 4);
    });
  }

  toggleClasses(die) {
    die.classdivst.toggle("dieA");
    die.classdivst.toggle("dieB");

  }

  rollDice() {
    const vertices = 4;
    return Math.floor(Math.random() * vertices) + 1;
  }

  render() {
    return(
      <div className="dice-view">
        <ol className="die dieA">
          <div className="die-side dieA-side1" data-side="1">
            <span className="dot"></span>
          </div>
          <div className="die-side dieA-side2" data-side="2">
            <span className="dot"></span>
          </div>
          <div className="die-side dieA-side3" data-side="3">
            <span className="dot"></span>
          </div>
          <div className="die-side dieA-side4" data-side="4">
            <span className="dot"></span>
          </div>
        </ol>
        
        <ol className="die dieB">
          <div className="die-side dieB-side1" data-side="1">
            <span className="dot"></span>
          </div>
          <div className="die-side dieB-side2" data-side="2">
            <span className="dot"></span>
          </div>
          <div className="die-side dieB-side3" data-side="3">
            <span className="dot"></span>
          </div>
          <div className="die-side dieB-side4" data-side="4">
            <span className="dot"></span>
          </div>
        </ol>
      </div>
    )
  }
}

export default Dice;
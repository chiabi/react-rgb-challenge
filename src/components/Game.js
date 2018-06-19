import React, { Component } from 'react';

import GameBodyContainer from '../containers/GameBodyContainer';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <header className="game__header">
          THE GREAT
          <span>RGB</span>
          GUESSING CHALLENGE
        </header>
        <GameBodyContainer/>
      </div>
    )
  }
}


export default Game;
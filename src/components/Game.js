import React, { Component } from 'react';

import GameBody from '../components/GameBody';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <header className="game__header">
          THE GREAT
          <span>RGB</span>
          GUESSING CHALLENGE
        </header>
        <GameBody/>
      </div>
    )
  }
}


export default Game;
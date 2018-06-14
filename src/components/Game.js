import React, { Component } from 'react';

class Game extends Component {

  render() {
    const {score} = this.props;
    return (
      <div class="game">
        <header className="game__header">
          THE GREAT
          <span>RGB</span>
          GUESSING CHALLENGE
        </header>
        <GameBody score={score}/>
      </div>
    )
  }
}


export default Game;
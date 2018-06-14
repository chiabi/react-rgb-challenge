import React, { Component } from 'react';

import GameScore from '../components/GameScore'

class GameModalBad extends Component {
  render() {
    const {score} = this.props
    return (
      <React.Fragment>
        <h2 class="game-modal__message">TOO BAD :(</h2>
        <GameScore score={score}/>
        <div className="game-modal__button">
          <button>PLAY AGAIN</button>
        </div>
      </React.Fragment>
    )
  }
}

export default GameModalBad;
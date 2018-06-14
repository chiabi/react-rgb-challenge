import React, { Component } from 'react';

import GameModalGood from '../components/GameModalGood'
import GameModalBad from '../components/GameModalBad'

class GameModal extends Component {
  render() {
    const {score, correct} = this.props
    return (
      <div className="game-modal">
        {correct === 'good' ? (
          <GameModalGood/>
        ) : (
          <GameModalBad score={score}/>
        )}
      </div>
    )
  }
}

export default GameModal;
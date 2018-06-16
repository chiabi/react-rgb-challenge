import React, { Component } from 'react';

import GameModalGood from '../components/GameModalGood'
import GameModalBad from '../components/GameModalBad'

class GameModal extends Component {
  render() {
    const {correct} = this.props
    return (
      <div className="game-modal">
        {correct === 'good' ? (
          <GameModalGood />
        ) : (
          <GameModalBad />
        )}
      </div>
    )
  }
}

export default GameModal;
import React, { Component } from 'react';

import GameScore from '../components/GameScore';
import GameColorCode from '../components/GameColorCode';

class GameBody extends Component {
  render() {
    const {score} = this.props
    return (
      <div className="game__body">
        <GameScore score={score}/>
        <GameColorCode/>
      </div>
    )
  }
}

export default GameBody;
import React, { Component } from 'react';

import GameScore from '../compoents/GameScore';
import GameColorCode from '../compoents/GameColorCode';

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

export default GameModalGoods;
import React, { Component } from 'react';

import GameScore from '../components/GameScore';
import GameColorCode from '../components/GameColorCode';

class GameBody extends Component {
  render() {
    return (
      <div className="game__body">
        <GameScore/>
        <GameColorCode/> 
      </div>
    )
  }
}

export default GameBody;
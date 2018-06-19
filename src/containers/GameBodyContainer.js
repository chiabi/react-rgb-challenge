import React, { Component } from 'react';

import { GameConsumer } from '../contexts/GameContext';
import GameScoreContainer from '../containers/GameScoreContainer';
import GameColorCode from '../components/GameColorCode';

class GameBody extends Component {
  render() {
    return (
      <GameConsumer>
        {({
          colorCodes,
          updateColorCodes
        }) => (
          <div className="game__body">
            <GameScoreContainer/>
            <GameColorCode 
              colorCodes={colorCodes}
              onUpdateColorCodes={updateColorCodes}
            /> 
          </div>
        )}
      </GameConsumer>
    )
  }
}

export default GameBody;
import React, { Component } from 'react';

import GameScore from '../components/GameScore';
import GameColorCode from '../components/GameColorCode';
import { ColorCodeConsumer } from '../contexts/ColorCodeContext';

class GameBody extends Component {
  render() {
    return (
      <div className="game__body">
        <GameScore/>
        <ColorCodeConsumer>
          {(value) => (
            <GameColorCode 
              colorCodes={value.colorCodes}
              onUpdateColorCodes={value.updateColorCodes}
            /> 
          )}
        </ColorCodeConsumer>
      </div>
    )
  }
}

export default GameBody;
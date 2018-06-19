import React, { Component } from 'react';

import { GameConsumer } from '../contexts/GameContext';
import ColorCodeList from '../components/ColorCodeList';

class ColorCodeListContainer extends Component {
  
  render() {
    return (
      <GameConsumer>
        {({
          colorCodes,
          select,
          updateResult,
          increaseScore,
          selectColorCode
        }) => (
          <ColorCodeList 
            randomIndex={this.props.randomIndex}
            select={select}
            colorCodes={colorCodes} 
            onUpdateResult={updateResult}
            onIncreaseScore={increaseScore}
            onSelectColorCode={selectColorCode}
          />
        )}
      </GameConsumer>
    );
  }
}

export default ColorCodeListContainer;
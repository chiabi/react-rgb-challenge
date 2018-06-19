import React, { Component } from 'react';

import { GameConsumer } from '../contexts/GameContext';
import GameScore from '../components/GameScore';

class GameScoreContainer extends Component {
  render() {
    return (
      <GameConsumer>
        {({score}) => (
          <GameScore score={score} />
        )}
      </GameConsumer>
    )
  }
}

export default GameScoreContainer;
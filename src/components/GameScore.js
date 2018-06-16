import React, { Component } from 'react';
import { ScoreConsumer } from '../contexts/ScoreContext.js';

class GameScore extends Component {
  render() {
    return (
      <ScoreConsumer>
        {(score) => (
          <p>SCORE: {score}</p>
        )}
      </ScoreConsumer>
    )
  }
}

export default GameScore;
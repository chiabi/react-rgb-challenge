import React, { Component } from 'react';
import { ScoreConsumer } from '../contexts/ScoreContext';

class GameScore extends Component {
  render() {
    return (
      <ScoreConsumer>
        {(score) => (
          <p className="score">SCORE: {score.score}</p>
        )}
      </ScoreConsumer>
    )
  }
}

export default GameScore;
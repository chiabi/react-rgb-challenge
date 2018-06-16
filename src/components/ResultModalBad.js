import React, { Component } from 'react';

import GameScore from '../components/GameScore';
import { ScoreConsumer } from '../contexts/ScoreContext';

class ResultModalBad extends Component {
  handleGameRestart = (scoreFunc) => {
    this.props.onUpdateColorCodes()
    this.props.onRestart()
    scoreFunc()
  }
  render() {
    return (
      <React.Fragment>
        <h2 className="game-modal__message">TOO BAD :(</h2>
        <GameScore/>
        <div className="game-modal__button">
          <ScoreConsumer>
            {(score) => (
              <button onClick={e => this.handleGameRestart(score.reset)}>PLAY AGAIN</button>
            )}
          </ScoreConsumer>
        </div>
      </React.Fragment>
    )
  }
}

export default ResultModalBad;
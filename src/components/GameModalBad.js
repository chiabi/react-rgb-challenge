import React, { Component } from 'react';

import GameScore from '../components/GameScore';
import { ScoreConsumer } from '../contexts/ScoreContext.js';

class GameModalBad extends Component {
  render() {
    return (
      <ScoreConsumer>
        {(score) => (
        <React.Fragment>
          <h2 class="game-modal__message">TOO BAD :(</h2>
              <GameScore score={score}/>
          <div className="game-modal__button">
            <button>PLAY AGAIN</button>
          </div>
        </React.Fragment>
        )}
      </ScoreConsumer>
    )
  }
}

export default GameModalBad;
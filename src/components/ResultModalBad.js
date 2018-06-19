import React, { Component } from 'react';

import GameScoreContainer from '../containers/GameScoreContainer';

class ResultModalBad extends Component {

  handleGameRestart = () => {
    this.props.onUpdateColorCodes()
    this.props.onRestart()
    this.props.onReset()
  }
  
  render() {
    return (
      <React.Fragment>
        <h2 className="game-modal__message">TOO BAD :(</h2>
        <GameScoreContainer/>
        <div className="game-modal__button">
          <button onClick={this.handleGameRestart}>PLAY AGAIN</button>
        </div>
      </React.Fragment>
    )
  }
}

export default ResultModalBad;
import React, { Component } from 'react';

class GameModalGoods extends Component {
  render() {
    const {score} = this.props
    return (
      <React.Fragment>
        <h2 class="game-modal__message">TOO BAD :(</h2>
        <p>SCORE: {score}</p>
        <div className="game-modal__button">
          <button>PLAY AGAIN</button>
        </div>
      </React.Fragment>
    )
  }
}

export default GameModalGoods;
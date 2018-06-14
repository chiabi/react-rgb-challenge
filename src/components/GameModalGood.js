import React, { Component } from 'react';

class GameModalGood extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="game-modal__message">THATS RIGHT!</h2>
        <div className="game-modal__button">
          <button>NEXT COLOR</button>
        </div>
      </React.Fragment>
    )
  }
}

export default GameModalGood;
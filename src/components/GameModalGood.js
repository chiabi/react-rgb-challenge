import React, { Component } from 'react';

class GameModalGoods extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 class="game-modal__message">THATS RIGHT!</h2>
        <div className="game-modal__button">
          <button>NEXT COLOR</button>
        </div>
      </React.Fragment>
    )
  }
}

export default GameModalGoods;
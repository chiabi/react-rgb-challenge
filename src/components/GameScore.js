import React, { Component } from 'react';

class GameScore extends Component {
  render() {
    const {score} = this.props;
    return (
      <p>SCORE: {score}</p>
    )
  }
}

export default GameScore;
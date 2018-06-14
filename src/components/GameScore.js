import React, { Component } from 'react';

class GameScore extends Components {
  render() {
    const {score} = this.props;
    return (
      <p>SCORE: {score}</p>
    )
  }
}

export default GameScore;
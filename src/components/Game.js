import React, { Component } from 'react';

class Game extends Component {
  state = {
    colorCode: 'rgb(76, 85, 113)'
  }
  
  render() {
    const {score} = this.props
    const colorCodeStyle = [
      {
        backgroundColor: 'rgb(76, 85, 113)',
      },
      {
        backgroundColor: 'rgb(113, 85, 113)',
      },
      {
        backgroundColor: 'rgb(32, 113, 113)',
      }
    ]
    return (
      <div class="game">
        <header className="game__header">
          THE GREAT
          <span>RGB</span>
          GUESSING CHALLENGE
        </header>
        <div className="game__body">
          <p class="game__score">SCORE: {score}</p>
          <div class="game__color">
            <h2>rgb(76, 85, 113)</h2>
            <ul>
              <li style={colorCodeStyle[0]}></li>
              <li style={colorCodeStyle[1]}></li>
              <li style={colorCodeStyle[2]}></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default Game;
import React, { Component } from 'react';

class App extends Component {
  render() {
    const rgbStyle = [
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
      <div className="App">
        <div class="game">
          <header className="game__header">
            THE GREAT
            <span>RGB</span>
            GUESSING CHALLENGE
          </header>
          <div className="game__body">
            <p class="game__score">SCORE: 0</p>
            <div class="game__color">
              <h2>rgb(76, 85, 113)</h2>
              <ul>
                <li style={rgbStyle[0]}></li>
                <li style={rgbStyle[1]}></li>
                <li style={rgbStyle[2]}></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="game-modal">
          {/* Good */}
          <h2 class="game-modal__message">TOO BAD :(</h2>
          <p>SCORE: 1</p>
          <div className="game-modal__button">
            <button>PLAY AGAIN</button>
          </div>
          {/* Bad */}
          <h2 class="game-modal__message">THATS RIGHT!</h2>
          <div className="game-modal__button">
            <button>NEXT COLOR</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

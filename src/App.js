import React, { Component } from 'react';

import Game from './components/Game';
import GameModal from './components/GameModal';

class App extends Component {
  state = {
    score: 0,
    correct: 'good'
  }
  render() {
    const {score, correct} = this.state;
    return (
      <div className="App">
        <Game score={score}/>
        {correct ? (
          <GameModal score={score} correct={correct}/>
        ) : ''}
      </div>
    );
  }
}

export default App;

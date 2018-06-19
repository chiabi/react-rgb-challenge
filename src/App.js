import React, { Component } from 'react';

import Game from './components/Game';
import ResultModalContainer from './containers/ResultModalContainer'

import { GameProvider, GameConsumer } from './contexts/GameContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameProvider>
          <Game />
          <GameConsumer>
            {({result}) => (result ? (
              <ResultModalContainer />
              ) : null
            )}
          </GameConsumer>
        </GameProvider>
      </div>
    );
  }
}

export default App;

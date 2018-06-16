import React, { Component } from 'react';

import Game from './components/Game';
import GameModal from './components/GameModal';

import { ScoreProvider } from './contexts/ScoreContext.js';
import { ResultProvider, ResultConsumer } from './contexts/ResultContext.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScoreProvider>
          <ResultProvider>
            <Game/>
            <ResultConsumer>
              {(result) => (
                result.result ? (
                  <GameModal result={result.result}/>
                ) : ''
              )}
            </ResultConsumer>
          </ResultProvider>
        </ScoreProvider>
      </div>
    );
  }
}

export default App;

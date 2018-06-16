import React, { Component } from 'react';

import Game from './components/Game';
import ResultModal from './components/ResultModal';

import { ResultProvider, ResultConsumer } from './contexts/ResultContext';
import { ScoreProvider } from './contexts/ScoreContext';
import { ColorCodeProvider } from './contexts/ColorCodeContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResultProvider>
          <ScoreProvider>
            <ColorCodeProvider>
              <Game/>
              <ResultConsumer>
                {(result) => (
                  result.result ? (
                    <ResultModal result={result.result} onRestart={result.restart}/>
                  ) : ''
                )}
              </ResultConsumer>
            </ColorCodeProvider>
          </ScoreProvider>
        </ResultProvider>
      </div>
    );
  }
}

export default App;

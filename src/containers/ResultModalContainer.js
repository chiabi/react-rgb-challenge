import React, { Component } from 'react';

import { GameConsumer } from '../contexts/GameContext'
import ResultModalGood from '../components/ResultModalGood'
import ResultModalBad from '../components/ResultModalBad'

export default class ResultModalContainer extends Component {
  render () {
    return (
    <GameConsumer>
      {({
        result, 
        updateColorCodes, 
        updateResult,
        resetScore
      }) => (
        <div className="game-modal">
          {result === 'good' ? (
            <ResultModalGood onUpdateColorCodes={updateColorCodes} onRestart={() => updateResult('')} onReset={resetScore} />
          ) : result === 'bad' ? (
            <ResultModalBad onUpdateColorCodes={updateColorCodes} onRestart={() => updateResult('')} onReset={resetScore} />
          ): null}
        </div>
      )}
    </GameConsumer>
    )
  }
}


import React, { Component } from 'react';

import ResultModalGood from '../components/ResultModalGood'
import ResultModalBad from '../components/ResultModalBad'
import { ColorCodeConsumer } from '../contexts/ColorCodeContext';

class ResultModal extends Component {
  render() {
    const {result, onRestart} = this.props
    return (
      <ColorCodeConsumer>
        {(value) => (
          <div className="game-modal">
            {result === 'good' ? (
              <ResultModalGood onUpdateColorCodes={value.updateColorCodes} onRestart={onRestart}/>
            ) : (
              <ResultModalBad onUpdateColorCodes={value.updateColorCodes} onRestart={onRestart}/>
            )}
          </div>
        )}
      </ColorCodeConsumer>
    )
  }
}

export default ResultModal;
import React, { Component } from 'react';

import ColorCodeItem from '../components/ColorCodeItem';
import { ScoreConsumer } from '../contexts/ScoreContext.js';
import { ResultConsumer } from '../contexts/ResultContext.js';

class ColorCodeList extends Component {
  render() {
    const {colorCodes, randomIndex} = this.props;
    return (
      <ScoreConsumer>
        {(score) => (
          <ResultConsumer>
            {(result) => (
              <ul className="color-list">
                {colorCodes.map((color, index) => (
                  index === randomIndex ? (
                    <ColorCodeItem key={index} colorCode={color} onShowResult={result.showResultGood}/>
                  ) : (
                    <ColorCodeItem key={index} colorCode={color} onShowResult={result.showResultBad}/>
                  ) 
                ))}
              </ul>
            )}
          </ResultConsumer>
        )}
      </ScoreConsumer>
    );
  }
}

export default ColorCodeList;
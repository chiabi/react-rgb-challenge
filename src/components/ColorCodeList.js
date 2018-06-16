import React, { Component } from 'react';

import ColorCodeItem from '../components/ColorCodeItem';
import { ScoreConsumer } from '../contexts/ScoreContext';
import { ResultConsumer } from '../contexts/ResultContext';

class ColorCodeList extends Component {
  handleResulstGoods = (resultFunc, scoreFunc) => {
    resultFunc();
    scoreFunc();
  }
  render() {
    const {colorCodes, randomIndex} = this.props;
    return (
      <ScoreConsumer>
        {(score) => (
          <ResultConsumer>
            {(result) => (
              <ul className="color-list">
                {colorCodes.map((color, index) => (
                  <ColorCodeItem 
                    key={index} 
                    colorCode={color} 
                    onShowResult={
                      index === randomIndex ? 
                      (e => this.handleResulstGoods(
                        result.showResultGood,
                        score.upScore
                      )) : 
                      result.showResultBad
                    }
                  /> 
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
import React, { Component } from 'react';

import ColorCodeItem from '../components/ColorCodeItem';
import { ScoreConsumer } from '../contexts/ScoreContext.js';

class ColorCodeList extends Component {
  handleResultGood = () => {

  }
  handleResultBad = () => {
    
  }
  render() {
    const {colorCodes, randomIndex} = this.props;
    return (
      <ScoreConsumer>
        {(score) => (
          <ul className="color-list">
            {colorCodes.map((color, index) => (
              index === randomIndex ? (
                <ColorCodeItem key={index} colorCode={color}/>
              ) : (
                <ColorCodeItem key={index} colorCode={color}/>
              ) 
            ))}
          </ul>
        )}
      </ScoreConsumer>
    );
  }
}

export default ColorCodeList;
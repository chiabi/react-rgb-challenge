import React, { Component } from 'react';

import ColorCodeItem from '../components/ColorCodeItem';

class ColorCodeList extends Component {

  handleResultGood = () => {
    this.props.onUpdateResult('good')
    this.props.onIncreaseScore()
  }
  handleResultBad = () => {
    this.props.onUpdateResult('bad')
  }
  
  render() {
    const {
      colorCodes,
      randomIndex,
      select,
      onSelectColorCode
    } = this.props;
    
    return (
      <ul className="color-list">
        {colorCodes.map((color, index) => (
          <ColorCodeItem 
            key={index} 
            colorCode={color} 
            select={select}
            onShowResult={index === randomIndex ? this.handleResultGood : this.handleResultBad}
            onSelectColorCode={onSelectColorCode}
          /> 
        ))}
      </ul>
    );
  }
}

export default ColorCodeList;
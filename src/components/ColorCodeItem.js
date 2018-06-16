import React, { Component } from 'react';

import { ColorCodeConsumer } from '../contexts/ColorCodeContext';

class ColorCodeItem extends Component {
  handleResult = (colorFunc, code) => {
    this.props.onShowResult()
    colorFunc(code)
  }

  render() {
    const {colorCode} = this.props;
    const colorStyle = {
      backgroundColor: colorCode
    };
    return (
      <ColorCodeConsumer>
        {(value) => (
          <li 
            style={colorStyle} 
            className={`color-list__item ${value.select === colorCode ? 'color-list__item--selected': ''}`} 
            onClick={e => this.handleResult(value.selectColorCode, colorCode)}></li>
        )}
      </ColorCodeConsumer>
    )
  }
}

export default ColorCodeItem;
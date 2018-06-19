import React, { Component } from 'react';

class ColorCodeItem extends Component {
  
  handleResult = (colorFunc, code) => {
    this.props.onShowResult()
    colorFunc(code)
  }

  render() {
    const {
      colorCode, 
      select,
      onSelectColorCode
    } = this.props;

    const colorStyle = {
      backgroundColor: colorCode
    };

    return (
      <li 
        style={colorStyle} 
        className={`color-list__item ${select === colorCode ? 'color-list__item--selected': ''}`} 
        onClick={e => this.handleResult(onSelectColorCode, colorCode)}></li>
    )
  }
}

export default ColorCodeItem;
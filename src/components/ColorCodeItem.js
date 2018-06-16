import React, { Component } from 'react';

class ColorCodeItem extends Component {
  render() {
    const {colorCode} = this.props;
    const colorStyle = {
      backgroundColor: colorCode
    };
    // color-list__item--selected
    return (
      <li style={colorStyle} className='color-list__item'></li>
    )
  }
}

export default ColorCodeItem;
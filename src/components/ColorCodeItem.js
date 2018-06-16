import React, { Component } from 'react';

class ColorCodeItem extends Component {
  render() {
    const {colorCode} = this.props;
    const colorStyle = {
      backgroundColor: colorCode
    };
    return (
      <li style={colorStyle} className='color-list__item color-list__item--selected'></li>
    )
  }
}

export default ColorCodeItem;
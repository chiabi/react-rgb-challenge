import React, { Component } from 'react';

class ColorCodeItem extends Component {
  render() {
    const {colorCode} = this.props;
    const colorStyle = {
      backgroundColor: colorCode
    };
    return (
      <li style={colorStyle}></li>
    )
  }
}

export default ColorCodeItem;
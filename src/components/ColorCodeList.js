import React, { Component } from 'react';

import ColorCodeItem from '../components/ColorCodeItem';

class ColorCodeList extends Component {
  render() {
    const {colorCodes, randomIndex} = this.props;
    return (
      <ul className="color-list">
        {colorCodes.map((color, index) => (
          index === randomIndex ? (
            <ColorCodeItem key={index} colorCode={color}/>
          ) : (
            <ColorCodeItem key={index} colorCode={color}/>
          ) 
        ))}
      </ul>
    );
  }
}

export default ColorCodeList;
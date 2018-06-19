import React, { Component } from 'react';

import ColorCodeListContainer from '../containers/ColorCodeListContainer';

class GameColorCode extends Component {
  
  componentDidMount() {
    this.props.onUpdateColorCodes();
  }
  
  render() {
    const {colorCodes} = this.props;
    const randomIndex = Math.floor(Math.random() * 3);
    return (
      <div className="game__color">
        <h2>{colorCodes[randomIndex]}</h2>
        <ColorCodeListContainer randomIndex={randomIndex}/>
      </div>
    )
  }
}

export default GameColorCode;
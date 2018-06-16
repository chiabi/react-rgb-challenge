import React, { Component } from 'react';

import ColorCodeList from '../components/ColorCodeList';

class GameColorCode extends Component {
  state = {
    colorCodes: []
  }

  updateColorCodes = () => {
    const colorCodes = getColorCodes();
    this.setState({
      colorCodes,
    })
  }
  
  componentWillMount() {
    this.updateColorCodes();
  }
  
  render() {
    const {colorCodes} = this.state;
    const randomIndex = Math.floor(Math.random() * 3);
    return (
      <div className="game__color">
        <h2>{colorCodes[randomIndex]}</h2>
        <ColorCodeList colorCodes={colorCodes} randomIndex={randomIndex}/>
      </div>
    )
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 256)
}
function randomColorCode() {
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}
function getColorCodes() {
  const colorCodes = [
    randomColorCode(),
    randomColorCode(),
    randomColorCode()
  ]
  return colorCodes;
}

export default GameColorCode;
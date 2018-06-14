import React, { Component } from 'react';

const randomNumber = () => Math.floor(Math.random() * 256);
const randomColorCode = () => {
  return `rgb(${randomNumber},${randomNumber},${randomNumber})`;
}
class GameColorCode extends Component {
  state = {
    colorCode: ''
  }

  getColorCode = () => {
    const colorCodes = [
      randomColorCode(),
      randomColorCode(),
      randomColorCode()
    ]
    return colorCodes;
  }

  updateColorCode = () => {
    const colorCodes = getColorCode();
    this.setState({
      colorCode: colorCodes[Math.floor(Math.random() * 3)]
    })
  }

  componentWillMount() {
    updateColorCode();
  }

  render() {
    return (
      <div class="game__color">
        <h2>{colorCode}</h2>
        <ul>
          <li style={colorCodeStyle[0]}></li>
          <li style={colorCodeStyle[1]}></li>
          <li style={colorCodeStyle[2]}></li>
        </ul>
      </div>
    )
  }
}

export default GameColorCode;
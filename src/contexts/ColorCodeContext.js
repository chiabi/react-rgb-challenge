import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext()

class ColorCodeProvider extends Component {
  state = {
    colorCodes: [],
    select: ''
  }

  updateColorCodes = () => {
    const colorCodes = getColorCodes();
    this.setState({
      colorCodes,
      select: ''
    })
  }

  selectColorCode = colorCode => {
    this.setState({
      select: colorCode
    })
  }
  
  render() {
    const value={
      colorCodes: this.state.colorCodes,
      select: this.state.select,
      updateColorCodes: this.updateColorCodes,
      selectColorCode: this.selectColorCode
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
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

export { ColorCodeProvider, Consumer as ColorCodeConsumer };
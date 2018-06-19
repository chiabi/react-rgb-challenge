import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();
class GameProvider extends Component {
  state = {
    colorCodes: [],
    select: '',
    result: '',  
    score: 0,
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

  updateResult = result => {
    this.setState({
      result
    })
  }

  increaseScore = () => {
    this.setState({
      score :this.state.score + 1
    })
  }

  resetScore = () => {
    this.setState({
      score: 0
    })
  }

  render() {
    const value = {
      colorCodes: this.state.colorCodes,
      score: this.state.score,
      select: this.state.select,
      result: this.state.result,
      updateColorCodes: this.updateColorCodes,
      selectColorCode: this.selectColorCode,
      updateResult: this.updateResult,
      increaseScore: this.increaseScore,
      resetScore: this.resetScore,
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
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

export { GameProvider, Consumer as GameConsumer };
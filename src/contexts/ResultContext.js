import React, { Component, createContext } from 'react';

const {Provider, Consumer} = createContext();

class ResultProvider extends Component {
  state = {
    result: ''
  }
  showResultGood = () => {
    this.setState({
      result: 'good'
    })
  }
  showResultBad = () => {
    this.setState({
      result: 'bad'
    })
  }
  restart = () => {
    this.setState({
      result: ''
    })
  }
  render() {
    const value = {
      result: this.state.result, 
      showResultGood: this.showResultGood,
      showResultBad: this.showResultBad,
      restart: this.restart
    };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ResultProvider, Consumer as ResultConsumer};

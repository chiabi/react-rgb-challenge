import React, { Component, createContext } from 'react';

const {Provider, Consumer} = createContext();

class ScoreProvider extends Component {
  state = {
    score: 0,
  }
  upScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }
  reset = () => {
    this.setState({
      score: 0
    })
  }
  render() {
    const value = {
      score: this.state.score,
      upScore: this.upScore,
      reset: this.reset
    };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ScoreProvider, Consumer as ScoreConsumer};

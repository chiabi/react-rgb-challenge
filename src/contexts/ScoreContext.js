import React, { Component, createContext } from 'react';

const {Provider, Consumer} = createContext();

class ScoreProvider extends Component {
  state = {
    score: 0,
  }
  render() {
    const {score} = this.state;
    return (
      <Provider value={score}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ScoreProvider, Consumer as ScoreConsumer};

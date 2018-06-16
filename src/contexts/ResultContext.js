import React, { Component, createContext } from 'react';

const {Provider, Consumer} = createContext();

class ResultProvider extends Component {
  state = {
    correct: ''
  }
  render() {
    const {correct} = this.state;
    return (
      <Provider value={correct}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ResultProvider, Consumer as ResultConsumer};

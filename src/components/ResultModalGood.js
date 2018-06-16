import React, { Component } from 'react';

class ResultModalGood extends Component {
  handleGameNext = () => {
    this.props.onUpdateColorCodes()
    this.props.onRestart()
  }
  render() {
    return (
      <React.Fragment>
        <h2 className="game-modal__message">THATS RIGHT!</h2>
        <div className="game-modal__button">
          <button onClick={this.handleGameNext}>NEXT COLOR</button>
        </div>
      </React.Fragment>
    )
  }
}

export default ResultModalGood;
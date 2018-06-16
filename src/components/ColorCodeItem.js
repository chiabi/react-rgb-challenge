import React, { Component } from 'react';

class ColorCodeItem extends Component {
  state = {
    select: false
  }
  handleResult = () => {
    this.setState({
      select: true
    })
    this.props.onShowResult()
  }
  render() {
    const {select} = this.state;
    const {colorCode} = this.props;
    const colorStyle = {
      backgroundColor: colorCode
    };
    // color-list__item--selected
    return (
      <li 
        style={colorStyle} 
        className={`color-list__item ${select ? 'color-list__item--selected': ''}`} 
        onClick={this.handleResult}></li>
    )
  }
}

export default ColorCodeItem;
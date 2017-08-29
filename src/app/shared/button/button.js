import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './button.css';

class Button extends Component {
  render() {
    return (
      <button styleName="button" onClick={this.props.onClick}>{ this.props.children }</button>
    )
  }
}

export default CSSModules(Button, styles);

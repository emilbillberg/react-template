import React, { Component } from 'react';
import Button from '../shared/button/button.js';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home!</h1>
        <div>Count: {this.props.counter}</div>
        <Button onClick={this.props.onIncrement}>Increment</Button>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.context);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('Home componentDidMount');
  }

  handleClick() {
    const action = { type: 'TEST', payload: null };
    this.props.store.dispatch(action);
  }
  
  render() {
    return (
      <div>
        <h1 className="Home-header">
          Home
        </h1>
        <div>Count: {this.props.store.getState().count}</div>
        <button onClick={this.handleClick}>Test</button>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    console.log('Home componentDidMount');
  }
  
  render() {
    return (
      <h1>
        Not Found
      </h1>
    );
  }
}

export default NotFound;

import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('About constructor');
  }

  componentWillMount() {
    console.log('About componentWillMount');
  }
  
  render() {
    console.log('About render');
    return (
      <h1>
        About
      </h1>
    );
  }

  componentDidMount() {
    console.log('About componentDidMount');
  }

  componentWillUnmount() {
    console.log('About componentWillUnmount');
  }
}

export default About;

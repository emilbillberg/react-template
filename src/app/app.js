import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './home/home.js';
import About from './about/about.js';
import NotFound from './not-found/not-found.js';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
        <Switch>
          <Route exact path='/' render={(props) => (<Home {...props} store={this.props.store} />)}/>
          <Route path='/about' component={About}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
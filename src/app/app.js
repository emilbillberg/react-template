import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './core/header/header.js';
import HomeContainer from './home/index.js';
import AboutContainer from './about/index.js';
import NotFound from './not-found/not-found.js';
import './app.css';

class App extends Component {  
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/' exact component={HomeContainer} />
          <Route path='/about' exact component={AboutContainer} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import Header from './core/header/header.js';
import HomeContainer from './home/home-container.js';
import TeamsContainer from './teams/teams-container';
import FavoritesContainer from './favorites/favorites-container.js';
import TicketsContainer from './tickets/tickets-container.js';
import NotFoundContainer from './not-found/not-found-container.js';
import Styles from './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/' exact component={ HomeContainer } />
          <Route path='/teams' component={ TeamsContainer } />
          <Route path='/favorites' exact component={ FavoritesContainer } />
          <Route path='/tickets' component={ TicketsContainer } />
          <Route component={ NotFoundContainer } />
        </Switch>
      </div>
    );
  }
}

export default CSSModules(App, Styles);
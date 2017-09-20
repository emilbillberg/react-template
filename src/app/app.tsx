import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as CSSModules from 'react-css-modules';
import Header from './core/header/header';
import HomeContainer from './home/home-container';
import TeamsContainer from './teams/teams-container';
import FavoritesContainer from './favorites/favorites-container';
import TicketsContainer from './tickets/tickets-container';
import NotFoundContainer from './not-found/not-found-container';
import * as Styles from './app.css';

class App extends React.Component {
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
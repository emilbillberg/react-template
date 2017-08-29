import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListContainer from './list/list-container.js';
import DetailContainer from './detail/detail-container.js';
import NotFoundContainer from '../not-found/not-found-container.js';

class Tickets extends Component {
  render() {
    const { match } = this.props

    return (
      <Switch>
        <Route path={ `${match.path}` } exact component={ ListContainer }/>
        <Route path={ `${match.path}/detail` } exact component={ DetailContainer } />
        <Route component={ NotFoundContainer } />
      </Switch>
    );
  }
}

export default Tickets;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './header.css';

class Header extends Component {
  render() {
    return (
      <header styleName="header">
        <Link to='/'>Home</Link>
        <Link to='/favorites/'>Favorites</Link>
        <Link to='/teams/'>Teams</Link>
        <Link to='/tickets/'>Tickets</Link>
      </header>
    );
  }
}

export default CSSModules(Header, styles);
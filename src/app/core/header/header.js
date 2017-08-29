import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {  
  render() {
    return (
      <header className="header-container">
        <Link to='/'>Home</Link>
        <Link to='/favorites/'>Favorites</Link>
        <Link to='/teams/'>Teams</Link>
        <Link to='/tickets/'>Tickets</Link>
      </header>
    );
  }
}

export default Header;
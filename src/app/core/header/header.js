import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {  
  render() {
    return (
      <header className="header-container">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </header>
    );
  }
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/benefits">Your Benefits</Link></li>
          <li><Link to="/team-benefits">Team Benefits</Link></li>
          <li><Link to="/all-benefits">All Benefits</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Import the CSS file

const Header = () => (
  <header className="header">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard"> User Dashboard</Link>
    </nav>
  </header>
);

export default Header;

// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you want to style the header

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <h1>Parking Lot Operation Report System</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/parking-lot">Parking Lot</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

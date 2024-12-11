// Navbar.js
import React from 'react';
import './Sectwo.css'; // Make sure to create a CSS file for styling

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">Ticket Simulator</div>
      <div className="navbar-links">
        <a href="/dashboard" className="nav-link">Dashboard</a>
        <a href="/configuration" className="nav-link">Configuration</a>
      </div>
    </div>
  );
}

export default Navbar;

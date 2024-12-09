import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

  return (
    <nav className="navbar">
      <div className="logo">TicketHub</div>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</div> {/* Toggle Button */}
      <div className={`menu ${isOpen ? "open" : ""}`}> {/* Conditional class for toggling menu */}
        <a href="/events">Events</a>
        <a href="/theater">Theater</a>
        <a href="/sports">Sports</a>
        <a href="/other">Other</a>
        <a href="/deals">Deals</a>
        <button className="register-btn">Register</button>
        <button className="signin-btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;

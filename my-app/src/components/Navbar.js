import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="navbar">
      <div className="logo">TicketHub</div>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</div> 
      <div className={`menu ${isOpen ? "open" : ""}`}> 
        <a href="/events">Events</a>
        <a href="/theater">Theater</a>
        
        <button className="register-btn">Register</button>
        <button className="signin-btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;

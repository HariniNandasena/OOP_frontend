import React from 'react';
import './Secone.css'; // Import the CSS for styling

function Secone() {
  return (
    <div className="search-container">
      <h1>Let's Book Your Ticket</h1>
      <p>Discover your favorite entertainment right here</p>
      <div className="search-bar">
        <input type="text" placeholder="Search by Artist, Event or Venue" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Secone;

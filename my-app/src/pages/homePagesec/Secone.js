import React from 'react';
import './Secone.css';

function Secone() {
  return (
    <div className="config-container">
      <h1>Event Configuration</h1>
      <form className="config-form">
        <label>
          Event Name:
          <input type="text" placeholder="Event Name" />
        </label>
        <label>
          Total Tickets:
          <input type="number" placeholder="Total Tickets" />
        </label>
        <label>
          Ticket Release Rate:
          <input type="number" placeholder="Ticket Release Rate" />
        </label>
        <label>
          Customer Retrieval Rate:
          <input type="number" placeholder="Customer Retrieval Rate" />
        </label>
        <label>
          Max Ticket Capacity:
          <input type="number" placeholder="Max Ticket Capacity" />
        </label>
        <label>
          Ticket Price:
          <input type="number" placeholder="Ticket Price" />
        </label>
        <div className='btnsubmit'>

        <button type="submit">Update Configuration</button>
        </div>
       
      </form>
    </div>
  );
}

export default Secone;

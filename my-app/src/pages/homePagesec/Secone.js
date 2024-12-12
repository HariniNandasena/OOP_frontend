import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Secone.css';

function Secone() {
  const [formData, setFormData] = useState({
    totalTickets: '',
    ticketReleaseRate: '',
    customerRetrievalRate: '',
    maxTicketCapacity: '',
    numVendors: '',
    numCustomers: '',
    ticketsToSell: ''
  });

  const [logs, setLogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activityLog, setActivityLog] = useState([]);
  const [socket, setSocket] = useState(null); // WebSocket

  useEffect(() => {
    const fetchConfiguration = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/configuration");
        if (response.ok) {
          const data = await response.json();
          setFormData(data); // Set the fetched configuration data
        } else {
          console.error("Failed to fetch configuration");
        }
      } catch (error) {
        console.error("Error fetching configuration:", error);
      }
    };

    fetchConfiguration();
  }, []);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/configuration/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(true);
        console.log("Configuration updated successfully.");
      } else {
        console.error("Failed to update configuration.");
      }
    } catch (error) {
      console.error("Error updating configuration:", error);
    }
  };

  const handleStart = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/simulation/start", { method: "POST" });
      if (response.ok) {
        console.log("Simulation started successfully");
        connectWebSocket();
      } else {
        console.error("Failed to start simulation");
      }
    } catch (error) {
      console.error("Error starting simulation:", error);
    }
    // Add functionality for start action
  };

  const handleStop = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/simulation/stop", { method: "POST" });
      if (response.ok) {
        console.log("Simulation stopped successfully");
      } if(socket) socket.close();
        
    } catch (error) {
      console.error("Error stopping simulation:", error);
    }
    // Add functionality for stop action
  };

  // Establish WebSocket connection
  const connectWebSocket = () => {
    const ws = new WebSocket('ws://localhost:8080/ws/logs');
    setSocket(ws);

    ws.onmessage = (event) => {
      console.log("Log received:", event.data);
      setActivityLog((prevLogs) => [...prevLogs, { id: prevLogs.length + 1, action: event.data }]);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };
  };

  return (
    <div className='class'>
      <h1 className='topic'>Ticket Simulator</h1>
      <div className="config-container">
        <h1>Event Configuration</h1>
        <form className="config-form" onSubmit={handleSubmit}>

          <label>
            Total Tickets:
            <input
              type="number"
              name="totalTickets"
              value={formData.totalTickets}
              onChange={handleChange}
            />
          </label>
          <label>
            Ticket Release Rate:
            <input
              type="number"
              name="ticketReleaseRate"
              value={formData.ticketReleaseRate}
              onChange={handleChange}
            />
          </label>
          <label>
            Customer Retrieval Rate:
            <input
              type="number"
              name="customerRetrievalRate"
              value={formData.customerRetrievalRate}
              onChange={handleChange}
            />
          </label>
          <label>
            Max Ticket Capacity:
            <input
              type="number"
              name="maxTicketCapacity"
              value={formData.maxTicketCapacity}
              onChange={handleChange}
            />
          </label>
          <label>
            Number of Vendors:
            <input
              type="number"
              name="numVendors"
              value={formData.numVendors}
              onChange={handleChange}
            />
          </label>
          <label>
            Number of Customers:
            <input
              type="number"
              name="numCustomers"
              value={formData.numCustomers}
              onChange={handleChange}
            />
          </label>
          <label>
            Number of tickets one veondor intends to sell:
            <input
              type="number"
              name="ticketsToSell"
              value={formData.ticketsToSell}
              onChange={handleChange}
            />
          </label>
          <div className="btnsubmit">
            <button type="submit" className="btn btn-primary">Update Configuration</button>
          </div>
        </form>

        {/* Bootstrap Modal */}
        {showModal && (
          <div className="modal show fade" style={{ display: 'block' }} tabIndex="-1">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Configuration Dashboard</h5>
                  <button type="button" className="close" onClick={() => setShowModal(false)}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
  
                  <p>Total Tickets: {formData.totalTickets}</p>
                  <p>Ticket Release Rate: {formData.ticketReleaseRate}</p>
                  <p>Customer Retrieval Rate: {formData.customerRetrievalRate}</p>
                  <p>Max Ticket Capacity: {formData.maxTicketCapacity}</p>
                  <p>Number of Vendors: {formData.numVendors}</p>
                  <p>Number of Customers: {formData.numCustomers}</p>
                  <p>Number of tickets one vender intends to sell: {formData.ticketsToSell}</p>


                  <div className="control-buttons">
                    <button onClick={handleStart} className="btn btn-success" >Start</button>
                    <button onClick={handleStop} className="btn btn-danger">Stop</button>
                  </div>

                  <div className="activity-log">
                    <h5 style={{ marginTop: '50px' }}>Activity Log</h5>

                    <table className="table">
                      <thead>
                        <tr>
                          <th>Activity</th>

                        </tr>
                      </thead>
                      <tbody>
                      {activityLog.map((log) => (
                      <li key={log.id} className="list-group-item">{log.action}</li>
                    ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Secone;

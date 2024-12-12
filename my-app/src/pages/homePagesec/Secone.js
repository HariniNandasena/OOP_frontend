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
  const [showModal, setShowModal] = useState(false);
  const [activityLog, setActivityLog] = useState([]);
  const [socket, setSocket] = useState(null); // WebSocket

  useEffect(() => {
    // WebSocket connection for logs
    const ws = new WebSocket("ws://localhost:8080/ws/logs");

    ws.onmessage = (event) => {
      setActivityLog((prevLogs) => [...prevLogs, { action: event.data }]);
    };

    ws.onclose = () => console.log("WebSocket disconnected");

    setSocket(ws);

    return () => {
      if (ws) ws.close();
    };
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
      // Send updated configuration to backend
      const response = await axios.post("http://localhost:8080/api/confoguration/update", formData);
      console.log(response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error updating configuration:", error);
    }
    setShowModal(true);
  };

  const handleStart = async () => {
    console.log("Start action triggered");
    try {
      const response = await axios.post("http://localhost:8080/api/simulation/start");
      console.log(response.data);
    } catch (error) {
      console.error("Error starting simulation:", error);
    }
    // Add functionality for start action
  };

  const handleStop = async () => {
    console.log("Stop action triggered");
    try {
      const response = await axios.post("http://localhost:8080/api/simulation/stop");
      console.log(response.data);
    } catch (error) {
      console.error("Error stopping simulation:", error);
    }
    // Add functionality for stop action
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
                        {activityLog.map(log => (
                          <tr key={log.id}>

                            <td>{log.action}</td>

                          </tr>
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

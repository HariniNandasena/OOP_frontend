import React, { useState } from 'react';
import './Secone.css';

function Secone() {
  const [formData, setFormData] = useState({
    //eventName: '',
    totalTickets: '',
    ticketReleaseRate: '',
    customerRetrievalRate: '',
    maxTicketCapacity: '',
    numVendors: '',
    numCustomers: ''
    //ticketPrice: ''
  });
  const [showModal, setShowModal] = useState(false);

  // Sample activity log data
  const activityLog = [
    { id: 1, action: 'Ticket Price Updated' }
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleStart = () => {
    console.log("Start action triggered");
    // Add functionality for start action
  };

  const handleStop = () => {
    console.log("Stop action triggered");
    // Add functionality for stop action
  };

  return (
    <div className='class'>
      <h1 className='topic'>Ticket Simulator</h1>
      <div className="config-container">
        <h1>Event Configuration</h1>
        <form className="config-form" onSubmit={handleSubmit}>
          {/* <label>
        Event Name:
        <input
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
        />
      </label> */}
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
                  {/* <p>Event Name: {formData.eventName}</p> */}
                  <p>Total Tickets: {formData.totalTickets}</p>
                  <p>Ticket Release Rate: {formData.ticketReleaseRate}</p>
                  <p>Customer Retrieval Rate: {formData.customerRetrievalRate}</p>
                  <p>Max Ticket Capacity: {formData.maxTicketCapacity}</p>
                  <p>Number of Vendors: {formData.numVendors}</p>
                  <p>Number of Customers: {formData.numCustomers}</p>

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

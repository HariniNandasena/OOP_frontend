import React, { useState } from 'react';
import './Sectwo.css';
import image1 from "../../images/imagecard.jpg";
import image2 from "../../images/imagecard.jpg";
import image3 from "../../images/imagecard.jpg";
import image4 from "../../images/imagecard.jpg";
import image5 from "../../images/imagecard.jpg";

// Array of event data
const events = [
  { img: image1, title: "SOSL Christmas Concert 2024", date: "Dec 13, 2024", time: "07:00 PM IST", location: "Bishops College Auditorium", price: "2000" },
  { img: image2, title: "Ayaskanthaya", date: "Dec 13, 2024", time: "07:00 PM IST", location: "Nelum Pokuna Indoor Theater", price: "2000" },
  { img: image3, title: "Ada Hamuwemuda Api VOL 5.0", date: "Dec 13, 2024", time: "08:00 PM IST", location: "Waters Edge", price: "6000" },
  { img: image4, title: "Bambarakanda Waterfall Abseil", date: "Dec 14, 2024", time: "08:00 AM IST", location: "Bambarakanda Waterfall", price: "22500" },
  { img: image5, title: "New Year's Eve Gala", date: "Dec 31, 2024", time: "09:00 PM IST", location: "Colombo Hilton", price: "15000" }
];

function Modal({ event, closeModal, ticketCount, setTicketCount }) {
  const handleTicketChange = (increment) => {
    setTicketCount(prev => Math.max(0, prev + increment)); // Prevent negative ticket counts
  };

  const totalPrice = ticketCount * parseInt(event.price);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{event.title} - Ticket Purchase</h2>
        <p>Select the number of tickets:</p>
        <div className="ticket-selector">
          <button onClick={() => handleTicketChange(-1)}>-</button>
          <span>{ticketCount}</span>
          <button onClick={() => handleTicketChange(1)}>+</button>
        </div>
        <p>Total Price: {totalPrice} LKR</p>
        <button onClick={closeModal}>Close</button>
        <button onClick={() => alert(`Purchased ${ticketCount} tickets for ${totalPrice} LKR`)}>Confirm Tickets</button>
      </div>
    </div>
  );
}

function Sectwo() {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [ticketCount, setTicketCount] = useState(0);

  const openModal = (event) => {
    setSelectedEvent(event);
    setTicketCount(0); // Reset ticket count every time modal opens
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events-section">
      <h2>What's happening this month</h2>
      <div className="events-navigation">
        <button>This Month</button>
        <button>Next Month</button>
      </div>
      <div className="events-carousel">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.img} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.date} • {event.time} • {event.location}</p>
            <p>{event.price} LKR upwards</p>
            <button onClick={() => openModal(event)}>Buy Tickets</button>
          </div>
        ))}
      </div>
      {showModal && <Modal event={selectedEvent} closeModal={closeModal} ticketCount={ticketCount} setTicketCount={setTicketCount} />}
    </div>
  );
}

export default Sectwo;

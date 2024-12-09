import React from 'react';
import './Sectwo.css'; // Ensure your CSS styles are linked properly
import image1 from "../../images/imagecard.jpg";
import image2 from "../../images/imagecard.jpg";
import image3 from "../../images/imagecard.jpg";
import image4 from "../../images/imagecard.jpg";
import image5 from "../../images/imagecard.jpg";

// Array of event data
const events = [
  { img: image1, title: "SOSL Christmas Concert 2024", date: "Dec 13, 2024", time: "07:00 PM IST", location: "Bishops College Auditorium", price: "2,000 LKR upwards" },
  { img: image2, title: "Ayaskanthaya", date: "Dec 13, 2024", time: "07:00 PM IST", location: "Nelum Pokuna Indoor Theater", price: "2,000 LKR upwards" },
  { img: image3, title: "Ada Hamuwemuda Api VOL 5.0", date: "Dec 13, 2024", time: "08:00 PM IST", location: "Waters Edge", price: "6,000 LKR upwards" },
  { img: image4, title: "Bambarakanda Waterfall Abseil", date: "Dec 14, 2024", time: "08:00 AM IST", location: "Bambarakanda Waterfall", price: "22,500 LKR upwards" },
  { img: image5, title: "New Year's Eve Gala", date: "Dec 31, 2024", time: "09:00 PM IST", location: "Colombo Hilton", price: "15,000 LKR upwards" }
];

function Sectwo() {
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
            <p>{event.price}</p>
            <button>Buy Tickets</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sectwo;

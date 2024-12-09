import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="address">
            <h3>TicketsHub</h3>
            <p>As Sri Lanka’s leading online destination for event ticketing, TicketHub Lanka offers a reliable and user-friendly platform for securing passes to the hottest shows, sports events, and cultural gatherings across the island.</p>
          </div>
          <div className="phone">
            <h3>PHONE</h3>
            <p>+94 776 718 674</p>
          </div>
          <div className="email">
            <h3>EMAIL</h3>
            <a href="mailto:tickethub@gmail.com">tickethub@gmail.com</a>
          </div>
          <div className="social">
            <h3>SOCIAL</h3>
            <div>
              <a href="#" target="_blank"><i className="icon flaticon-facebook"></i></a>
              <a href="https://youtu.be/_vbc7RUfBQU" target="_blank"><i className="icon flaticon-youtube"></i></a>
              <a href="#" target="_blank"><i className="icon flaticon-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="bottom-content">
          <div className="links">
            <a href="#">PRIVACY</a>
            <a href="#">TERMS OF USE</a>
            <a href="#">POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

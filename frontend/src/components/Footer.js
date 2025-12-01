import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌍 Wanderlust Tours</h3>
            <p>Your trusted partner for unforgettable travel experiences around the world.</p>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/booking">Book Now</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 info@wanderlusttours.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Travel Street, Adventure City</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Wanderlust Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            🌍 Wanderlust Tours
          </Link>
          
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/destinations" onClick={toggleMenu}>Destinations</Link></li>
            <li><Link to="/booking" onClick={toggleMenu}>Book Now</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

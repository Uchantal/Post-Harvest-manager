import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">Your Logo</span>
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/services" className="navbar-link">Services</Link></li>
          <li><Link to="/about" className="navbar-link">About</Link></li>
          <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button onClick={toggleDropdown} className="navbar-signin-button">
          Sign In
        </button>
        {isDropdownOpen && (
          <div ref={dropdownRef} className="navbar-dropdown">
            <Link to="/login" className="dropdown-link">Login</Link>
            <Link to="/register" className="dropdown-link">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

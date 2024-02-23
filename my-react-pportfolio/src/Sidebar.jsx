import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faEnvelope, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

import sidebarImage from './assets/about.png'; // Import your sidebar image

const Sidebar = ({ isOpen, toggle }) => {

  const handleLinkClick = () => {
    if (isOpen) {
      toggle(); // Close the sidebar if it's open
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="closebtn" onClick={toggle}>
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <div className="sidebar-image-container">
        <img src={sidebarImage} alt="Sidebar" className="sidebar-image" />
      </div>

      <Link to="/" onClick={handleLinkClick}>
        <FontAwesomeIcon icon={faHome} />
        Home
      </Link>
      <Link to="/about" onClick={handleLinkClick}>
        <FontAwesomeIcon icon={faUser} />
        About
      </Link>
      <Link to="/portfolio" onClick={handleLinkClick}>
        <FontAwesomeIcon icon={faBriefcase} />
        Portfolio
      </Link>
      <Link to="/experience" onClick={handleLinkClick}>
        <FontAwesomeIcon icon={faEnvelope} />
        Experience
      </Link>
      <Link to="/contact" onClick={handleLinkClick}>
        <FontAwesomeIcon icon={faEnvelope} />
        Contact
      </Link>
  
    </div>
  );
}

export default Sidebar;

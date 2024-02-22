import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faEnvelope, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

import sidebarImage from './assets/about.png'; // Import your sidebar image

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="closebtn" onClick={toggle}>
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <div className="sidebar-image-container">
        <img src={sidebarImage} alt="Sidebar" className="sidebar-image" />
      </div>

      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
        Home
      </Link>
      <Link to="/about">
        <FontAwesomeIcon icon={faUser} />
        About
      </Link>
      <Link to="/portfolio">
        <FontAwesomeIcon icon={faBriefcase} />
        Portfolio
      </Link>
      <Link to="/experience">
        <FontAwesomeIcon icon={faEnvelope} />
        Experience
      </Link>
      <Link to="/contact">
        <FontAwesomeIcon icon={faEnvelope} />
        Contact
      </Link>
  
    </div>
  );
}

export default Sidebar;



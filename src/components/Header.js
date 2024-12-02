import React from 'react';
import { FaHome, FaInfoCircle, FaBriefcase, FaPhoneAlt } from 'react-icons/fa'; // Importing icons

import logo from '../assets/navbrandlogo.png'; // Adjust the path to match your logo file
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-white light px-2 py-0" id="narbar">
      <a className="navbar-brand p-0" href="/">
        <img src={logo} alt="Code Harmony Logo" style={{ height: '70px' }} />
      </a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-center ">
          <li className="nav-item">
            <a className="nav-link text-black px-3" href="/home"><FaHome className="me-2" /> Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black px-3" href="#about"><FaInfoCircle className="me-2" /> About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black px-3" href="/home"><FaBriefcase className="me-2" /> Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black px-3" href="/contact"><FaPhoneAlt className="me-2" />  Contact</a>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Header;

import React from 'react';
import logo from '../assets/code-harmony-logo-header.png'; // Adjust the path to match your logo file

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black p-0">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Code Harmony Logo" style={{ height: '70px' }} />
      </a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item">
            <a className="nav-link" href="/home"> Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about"> About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services"> Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact"> Contact</a>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Header;

import React from 'react';
import { FaHome, FaInfoCircle, FaBriefcase, FaPhoneAlt } from 'react-icons/fa'; // Importing icons
import { useUser } from '../UserContext'; // Import UserContext to manage user state
import logo from '../assets/navbrandlogo.png'; // Adjust the path to match your logo file
import './Header.css';

const Header = () => {
  const { user, logout } = useUser(); // Access user state and logout function

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 px-4 shadow-sm" id="navbar">
      {/* Brand Logo */}
      <a className="navbar-brand p-0" href="/">
        <img src={logo} alt="Code Harmony Logo" style={{ height: '70px' }} />
      </a>

      {/* Toggle Button for Small Screens */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item">
            <a className="nav-link text-dark px-3" href="/home">
              <FaHome className="me-2" /> Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark px-3" href="/about">
              <FaInfoCircle className="me-2" /> About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark px-3" href="/home">
              <FaBriefcase className="me-2" /> Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark px-3" href="/contact">
              <FaPhoneAlt className="me-2" /> Contact
            </a>
          </li>

          {/* Conditionally Render Login/Logout */}
          {user ? (
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle text-dark px-3"
                
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={user.profilePicture} alt=''  className="profile-img" />
                Welcome, {user.name}
              </div>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li>
                  <a className="dropdown-item" href="/" onClick={logout}>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          ) : (
            <li className="nav-item">
              <a className="nav-link text-dark px-3" href="/dsasheet">
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

import React from 'react';
import { FaHome, FaInfoCircle, FaBriefcase, FaPhoneAlt, FaUserCircle } from 'react-icons/fa'; // Importing icons
import { useUser } from '../UserContext'; // Import UserContext to manage user state
import logo from '../assets/navbrandlogo.png'; // Adjust the path to match your logo file
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const { user, logout } = useUser();

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const isActive = (path) => window.location.pathname === path ? "active-tab" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-0 px-4" id="navbar">
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
            <a className={`nav-link px-3 ${isActive('/')}  text-dark` } href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link px-3 ${isActive('/dsasheet')} text-dark`} href="/dsasheet">
              DSA Sheet
            </a>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-dark text-white ms-2 mentor-btn"
              onClick={() => window.location.href = "/mentorship"}
            >
              Find My Mentor →
            </button>
          </li>
          {/* Conditional Rendering for Login/Logout */}
          {user ? (
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle text-dark px-3"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={user.profilePicture} alt="" className="profile-img" />
                {user.name}
              </div>
              <ul className="dropdown-menu dropdown-menu-end mb-2" aria-labelledby="userDropdown">
                <li className="logout-button">
                  <a className="dropdown-item" href="/" onClick={logout}>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          ) : (
            <li className="nav-item nav-login">
              <button
                className="nav-link text-dark px-3 login-btn"
                onClick={handleLogin}
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

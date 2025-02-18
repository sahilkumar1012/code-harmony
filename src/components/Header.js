import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useUser } from '../UserContext';
import { useNavigate, useLocation } from 'react-router-dom';

import logolight from '../assets/header/logo-dark.png';
import logodark from '../assets/header/logo-light.png';

import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const { user, logout } = useUser();

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const isActive = (path) => (location.pathname === path ? "active-tab" : "");

  return (
    <div className="container">
      <nav className={`navbar navbar-expand-lg py-0 ${theme === 'dark' ? 'navbar-dark bg-black' : 'navbar-light bg-white'}`} id="navbar">
        
        {/* Brand Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/" style={{ height:'70px', width: '160px', overflow: 'hidden' }}>
          <img 
            src={theme === 'dark' ? logodark : logolight} 
            alt="Code Harmony Logo" 
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} 
          />
        </a>

        {/* Toggle Button for Small Screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className={`nav-link px-3 ${isActive('/')} ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link px-3 ${isActive('/dsasheet')} ${theme === 'dark' ? 'text-light' : 'text-dark'}`} href="/dsasheet">
                DSA Sheet
              </a>
            </li>

            {/* Theme Toggle Button */}
            <li className="nav-item">
              <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </li>

            <li className="nav-item">
              <button className="btn btn-dark text-white mentor-btn" onClick={() => window.location.href = "/mentorship"}>
                Find My Mentor →
              </button>
            </li>

            {/* Conditional Rendering for Login/Logout */}
            {user ? (
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle text-dark" id="userDropdown" data-bs-toggle="dropdown">
                  <img src={user.profilePicture} alt="" className="profile-img" /> {user.name}
                </div>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="/" onClick={logout}>Logout</a>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item nav-login">
                <button className="nav-link text-dark px-3 login-btn" onClick={handleLogin}>
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

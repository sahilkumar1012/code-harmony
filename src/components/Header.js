import React from 'react';
import logo from '../assets/code-harmony-logo-header.png'; // Adjust the path to match your file location

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img src={logo} alt="Code Harmony Logo" style={logoStyle} />
      </div>
      <nav style={navStyle}>
        <a href="#home" style={linkStyle}>
          Home
        </a>
        <a href="#about" style={linkStyle}>
          About
        </a>
        <a href="#services" style={linkStyle}>
          Services
        </a>
        <a href="#contact" style={linkStyle}>
          Contact
        </a>
      </nav>
    </header>
  );
};

// Styles for Header
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#000000',
  padding: '0.1rem 2rem',
  color: '#00000',
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  height: '70px', // Adjust as needed
};

const navStyle = {
  display: 'flex',
  gap: '1.5rem',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'color 0.3s',
};

linkStyle[':hover'] = {
  color: '#61dafb',
};

export default Header;

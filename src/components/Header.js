import React from 'react';
import logo from '../assets/code-harmony-logo-header.png'; // Adjust the path to match your file location

const Header = () => {
  return (
    <header style={headerStyle}>
      <a href="/" style={logoContainerStyle}>
        <img src={logo} alt="Code Harmony Logo" style={logoStyle} />
      </a>
      <nav style={navStyle}>
        <a href="/" style={linkStyle}>
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

// Base Styles for Header
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#000000',
  padding: '0rem 1rem',
  color: '#fff',
  flexWrap: 'wrap',
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer', // Ensures the cursor indicates a clickable area
};

const logoStyle = {
  height: '70px', // Increased size of the logo
};

const navStyle = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
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

// Responsive Design with Media Query
const mediaQuery = `@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: flex-start;
  }
  nav {
    width: 100%;
    justify-content: center;
  }
  a {
    font-size: 0.9rem;
    padding: 0.5rem 0;
  }
}`;

// Inject the styles dynamically
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(mediaQuery, styleSheet.cssRules.length);

export default Header;

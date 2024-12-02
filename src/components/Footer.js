import React from 'react';
import { FaTwitter, FaLinkedin, FaYoutube, FaDiscord } from 'react-icons/fa'; // Import Discord icon

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={iconContainerStyle}>
        {/* <p style={followTextStyle}>Follow Us:</p> */}

        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/company/codeharmonylab/" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: '#0077B5' }}>
          <FaLinkedin />
        </a>

        {/* Twitter Icon */}
        <a href="https://x.com/codeharmonyHQ" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: '#1DA1F2' }}>
          <FaTwitter />
        </a>

        {/* YouTube Icon */}
        <a href="https://youtube.com/@codeharmonylab" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: '#FF0000' }}>
          <FaYoutube />
        </a>

        {/* Discord Icon */}
        <a href="https://discord.gg/p3vtnzFbn5" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: '#7289DA' }}>
          <FaDiscord />
        </a>
      </div>
      <p style={footerTextStyle}>© 2024 Code Harmony. All rights reserved.</p>
    </footer>
  );
};

// Styles for Footer
const footerStyle = {
  backgroundColor: 'white',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem 0',
};

const iconContainerStyle = {
  display: 'flex',
  flexDirection: 'row', // Horizontal layout
  alignItems: 'center',
  justifyContent: 'center', // Centers icons horizontally
  gap: '1rem', // Adjusts spacing between items
  marginBottom: '0.5rem',
};

const iconStyle = {
  fontSize: '2rem',
  textDecoration: 'none',
  transition: 'color 0.3s', // Smooth transition for hover effect
};

const followTextStyle = {
  fontSize: '1rem',
  // marginRight: '0.5rem', // Adds spacing between text and icons
};

const footerTextStyle = {
  fontSize: '0.8rem',
  color: 'black',
};

export default Footer;

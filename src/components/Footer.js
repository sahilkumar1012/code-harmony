import React from 'react';
import { FaTwitter, FaLinkedin, FaYoutube, FaDiscord, FaInstagram } from 'react-icons/fa'; // Import Instagram icon
import "./Footer.css";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const handleContactUs = () => {
    window.location.href = "mailto:codeharmonyofficial@gmail.com";
  };

  return (
    <footer style={footerStyle}>
      <div style={iconContainerStyle}>
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/company/codeharmonydev/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          style={{ ...iconStyle, color: '#0077B5' }}
        >
          <FaLinkedin />
        </a>

        {/* Twitter Icon */}
        <a
          href="https://x.com/codeharmonyHQ"
          target="_blank"
          rel="noopener noreferrer"
          className="icon xicon"
          style={{ ...iconStyle }}
        >
          <FaXTwitter />
        </a>

        {/* YouTube Icon */}
        <a
          href="https://youtube.com/@CodeHarmonydev"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          style={{ ...iconStyle, color: '#FF0000' }}
        >
          <FaYoutube />
        </a>

        {/* Discord Icon */}
        <a
          href="https://discord.gg/p3vtnzFbn5"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          style={{ ...iconStyle, color: '#7289DA' }}
        >
          <FaDiscord />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://instagram.com/codeharmony.dev"
          target="_blank"
          className="icon"
          rel="noopener noreferrer"
          style={{ ...iconStyle, ...instagramStyle }}
        >
          <FaInstagram />
        </a>
      </div>

      {/* Contact Us Button */}
      <div style={contactContainerStyle}>
        <span data-toggle="tooltip" data-placement="top" title="tooltip">
        <button onClick={handleContactUs} className="cta-button contact-us-btn-footer">
          Contact Us
        </button>
        </span>
      </div>

      <p style={footerTextStyle}>© 2025 Code Harmony. All rights reserved.</p>
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
  fontSize: '2rem', // Adjusted size
  width: '2.5rem', // Uniform size for icons
  height: '2.5rem',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease-in-out', // Smooth hover effect
};

const instagramStyle = {
  color: '#E4405F',
  borderRadius: '35%', // Rounded corners instead of a full circle
};

const contactContainerStyle = {
  marginTop: '1rem',
};

const contactButtonStyle = {
  textDecoration: 'none',
  color: 'white',
  backgroundColor: '#007bff',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  fontWeight: 'bold',
};

const footerTextStyle = {
  fontSize: '0.8rem',
  color: 'black',
};

export default Footer;

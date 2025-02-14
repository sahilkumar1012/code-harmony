import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaYoutube, FaDiscord, FaInstagram } from 'react-icons/fa'; // Import Instagram icon
import "./Footer.css";
import { FaXTwitter } from 'react-icons/fa6';


// Custom Tooltip Component
const CustomTooltip = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    setShowTooltip(false); // Hide tooltip on click
  };

  return (
    <div className="custom-tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={handleClick} // Ensure tooltip closes on click
    >
      {children}
      {showTooltip && (
        <div className="custom-tooltip">
          {text}
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};


const Footer = () => {

  // const [showTooltip, setShowTooltip] = useState(false);

  const handleContactUs = () => {
    document.activeElement.blur();// Remove focus to reset hover/active state
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

        {/* Modified Contact Us Button with Custom Tooltip */}
      <div style={contactContainerStyle}>
        <CustomTooltip text="Email Us">
          <button 
            onClick={handleContactUs} 
            className="cta-button contact-us-btn-footer"
          >
            Contact Us
          </button>
        </CustomTooltip>
      </div>
      <br></br>
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


const footerTextStyle = {
  fontSize: '0.8rem',
  color: 'black',
};

export default Footer;

import React from 'react';
import { FaTwitter, FaLinkedin, FaYoutube, FaDiscord, FaInstagram} from 'react-icons/fa'; // Import Instagram icon
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={iconContainerStyle}>
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/company/codeharmonylab/" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: '#0077B5' }}>
          <FaLinkedin />
        </a>

        {/* Twitter Icon */}
        <a href="https://x.com/codeharmonyHQ" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: '#1DA1F2' }}>
          <FaTwitter />
        </a>

        {/* YouTube Icon */}
        <a href="https://youtube.com/@CodeHarmonydev" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: '#FF0000' }}>
          <FaYoutube />
        </a>

        {/* Discord Icon */}
        <a href="https://discord.gg/p3vtnzFbn5" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: '#7289DA' }}>
          <FaDiscord />
        </a>

        {/* Instagram Icon */}
        <a href="https://instagram.com/codeharmony.dev" target="_blank" class ="" rel="noopener noreferrer" style={{ ...iconStyle, ...instagramStyle }}>
          <FaInstagram />
          {/* <RiInstagramFill /> */}
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
  fontSize: '2rem', // Adjusted size
  width: '2.5rem', // Uniform size for icons
  height: '2.5rem',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s', // Add hover effect
};

const instagramStyle = {
  // background: 'linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)', // Instagram gradient
  color: '#E4405F',
  // padding: '0.5rem', // Ensures consistent inner spacing
  borderRadius: '35%', // Rounded corners instead of a full circle
  // border:'3px solid/',
};

const footerTextStyle = {
  fontSize: '0.8rem',
  color: 'black',
};

export default Footer;

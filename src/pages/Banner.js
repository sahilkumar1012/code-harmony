import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home'); // Redirect to Home page
  };

  const handleDSAButtonClick = () => {
    navigate('/sheet'); // Redirect to DSA Essentials sheet page
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">
          <span className="highlight-red">Code </span>
          <span className="highlight-black">Harmony</span>
        </h1>
        <p className="banner-subtitle">Expert mentorship. Simplified learning.</p>

<button onClick={handleGetStarted} className="cta-button get-started-btn">
  Get Started
</button>
<button onClick={handleDSAButtonClick} className="cta-button dsa-btn">
  DSA Essentials Sheet
</button>


      </div>
    </div>
  );
};

export default Banner;

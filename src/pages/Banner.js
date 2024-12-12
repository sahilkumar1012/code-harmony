import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import Home from './Home';

const Banner = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home'); // Redirect to Home page
  };

  const handleDSAButtonClick = () => {
    navigate('/dsasheet'); // Redirect to DSA Essentials sheet page
  };

  return (
    <div>
    <div className="banner">
      <div className="banner-content">
        {/* <h1 className="banner-title">
          <span className="highlight-red">Code </span>
          <span className="highlight-black">Harmony</span>
        </h1> */}
        <h1 className="banner-title">
          Land Your Dream Job And Excel In Software Development
        </h1>

        <button onClick={handleGetStarted} className="cta-button get-started-btn">
          Start Your Journey
        </button>
        <button onClick={handleDSAButtonClick} className="cta-button dsa-btn">
          DSA Essentials Sheet
        </button>


      </div>
    </div>
    </div>
  );
};

export default Banner;

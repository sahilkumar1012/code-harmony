import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home'); // Redirect to Home page
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">
          <span className="highlight-red">Code </span>
          <span className="highlight-black">Harmony</span>
        </h1>
        <p className="banner-subtitle">Expert mentorship. Simplified learning.</p>
        <button onClick={handleGetStarted} className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;

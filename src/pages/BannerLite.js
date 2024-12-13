import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BannerLite.css';

const BannerLite = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/mentorship'); // Redirect to Home page
  };

  const handleDSAButtonClick = () => {
    navigate('/dsasheet'); // Redirect to DSA Essentials sheet page
  };

  return (
    <div>
    <div className="bannerLite" >
      <div className="bannerlite-content">
        <h1 className="bannerlite-title">
          <span className="highlight-red">Code </span>
          <span className="highlight-black">Harmony</span>
        </h1>
        <p className="bannerlite-subtitle">

        Get expert mentorship to land your dream job and excel in software development

        </p>

        <button onClick={handleGetStarted} className="cta-button our-mentors-btn">
          Our Mentors
        </button>
        
        <button onClick={handleDSAButtonClick} className="cta-button dsa-btn-home">
          DSA Essentials Sheet
        </button>



      </div>
    </div>
    </div>
  );
};

export default BannerLite;

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
          Land Your Dream Job And Excel In Software Development        
        </h1>


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

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BannerLite.css';
import { PiX } from 'react-icons/pi';
import bannerimg from '../assets/banner/bannerimg.jpeg';

const BannerLite = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/mentorship'); // Redirect to Home page
  };

  const handleDSAButtonClick = () => {
    navigate('/dsasheet'); // Redirect to DSA Essentials sheet page
  };

  return (
    <div className="banner d-flex flex-wrap-reverse justify-content-around gap-2">
      
      <div className="col-6 banner-left">
        <h1>Land Your Dream Job And Excel In Software Development</h1>
        
        <button onClick={handleGetStarted} className="banner-button our-mentors-btn">
          Our Mentors
        </button>
        
        <button onClick={handleDSAButtonClick} className="banner-button dsa-btn-home">
          DSA Essentials Sheet
        </button>
      </div>

      <div className="col-4 banner-right d-flex justify-content-center align-items-center">
        <img 
          src={bannerimg}
          alt="banner-image"
          className="custom-img"
        />
      </div>
    </div>

  );
};

export default BannerLite;

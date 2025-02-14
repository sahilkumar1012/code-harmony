import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BannerLite.css';
import { PiX } from 'react-icons/pi';

const BannerLite = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/mentorship'); // Redirect to Home page
  };

  const handleDSAButtonClick = () => {
    navigate('/dsasheet'); // Redirect to DSA Essentials sheet page
  };

  return (
    <div className="d-flex flex-wrap-reverse justify-content-center gap-2">
      
      <div className="col-6 banner-left">
        <h1>Land Your Dream Job And Excel In Software Development</h1>
        <button type="button" className="btn btn-primary btn-lg mt-3">Get Started</button>
      </div>

      <div className="col-4 banner-right d-flex justify-content-center align-items-center">
        <img 
          src="https://media.licdn.com/dms/image/v2/D5603AQHYc1QmtyYb5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724942821286?e=1744848000&v=beta&t=5OhEHW2pLEDF9-NbmPcAze-3cU0oJzlvGPSbYx7-hjg" 
          alt="banner-image"
          className="custom-img"
        />
      </div>

    </div>

  );
};

export default BannerLite;

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
    <div class="banner">
      <div className="d-flex flex-wrap-reverse justify-content-between gap-2 container p-0">
      
        {/* banner heading and buttons  */}
        <div className="col-lg-6 col-md-8 col-8 banner-left mx-auto">
          <h1 className='font-weight-bold banner-heading'>Land Your Dream Job And Excel In Software Development</h1>
          <br></br>
          
          {/* banner buttons */}
          <div className="d-flex flex-wrap gap-2 justify-content-md-start justify-content-center mx-auto">
            <button onClick={handleGetStarted} className="banner-button our-mentors-btn">
                Our Mentors
            </button>
              
            <button onClick={handleDSAButtonClick} className="banner-button dsa-btn-home ml-md-3">
              DSA Essentials Sheet
            </button>
          </div>

        </div>

        {/* image portion */}
        <div className="col-lg-4 col-md-12 banner-right d-flex justify-content-right"></div> 
      </div>
    </div>

  );
};

export default BannerLite;

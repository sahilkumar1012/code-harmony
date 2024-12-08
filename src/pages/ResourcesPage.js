// ResourcesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResourcesPage.css';
import Videos from './Videos';

const ResourcesPage = () => {
  const navigate = useNavigate();

  const handleDSAButtonClick = () => {
    navigate('/sheet'); // Redirect to DSA Essentials sheet page
  };

  const handleVideosPageClick = () => {
    navigate('/videos'); // Redirect to Videos page
  };

  return (
    <div className="resources-page">
      <h1>Resources</h1>
      <p>Explore our learning resources for DSA and coding problems.</p>

      {/* Button to DSA Essentials Page */}
      <button onClick={handleDSAButtonClick} className="cta-button dsa-btn">
        DSA Essentials Sheet
      </button>

      {/* Button to Videos Page */}
      <button onClick={handleVideosPageClick} className="cta-button videos-btn">
        Watch Videos
      </button>

      <Videos />
    </div>
  );
};

export default ResourcesPage;

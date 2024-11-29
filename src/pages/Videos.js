// src/Videos.js

import React from 'react';
import './Videos.css';  // Import the CSS file

const Videos = () => {
  // Array of YouTube video IDs
  const videoIds = [
    "l8DxsxO9q7g",
    "PdWeMeyH9RA",
    "mBj97JeR9U0"
  ];

  return (
    <section style={videoSectionStyle}>
      <h2 style={videoSectionTitleStyle}>My Educational Videos</h2>
      <p style={videoDescriptionStyle}>Here are some educational videos that I have created on various topics:</p>
      
      <div className="videos-container" style={videosContainerStyle}>
        {videoIds.map((videoId, index) => (
          <div key={index} className="video-item" style={videoItemStyle}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

// Updated Styles for Videos Section
const videoSectionStyle = {
  padding: '4rem 0',
  backgroundColor: '#f7f7f7',
  textAlign: 'center',
  color: '#fff',
};

const videoSectionTitleStyle = {
  fontSize: '2.8rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#333',
};

const videoDescriptionStyle = {
  fontSize: '1.2rem',
  maxWidth: '800px',
  margin: '0 auto 3rem',
  color: '#555',
  lineHeight: '1.6',
};

const videosContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
  gap: '2rem',          // Ensures space between grid items
  padding: '0 2rem',    // Adds padding inside the container
  marginTop: '2rem',    // Adds space above the container
  gridAutoRows: 'minmax(250px, auto)',  // Ensures grid items don't collapse
};

const videoItemStyle = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const videoItemHoverStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
};

export default Videos;

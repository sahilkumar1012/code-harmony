import React, { useEffect, useState } from 'react';
import './Videos.css';

const Videos = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const videos = [
    { id: "l8DxsxO9q7g", title: "Start your LeetCode Journey!" },
    { id: "PdWeMeyH9RA", title: "Tech Podcast!" },
    { id: "mBj97JeR9U0", title: "Dynamic Programming Playlist!" },
  ];

  useEffect(() => {
    // Re-initialize the YouTube API script
    if (window.gapi && window.gapi.ytsubscribe) {
      window.gapi.ytsubscribe.go();
    }
  }, []);

  return (
    <section style={videoSectionStyle}>
      <h2 style={videoSectionTitleStyle}>Educational Resources</h2>
      <p style={videoDescriptionStyle}>
        Here are some educational videos we have created on various topics:
      </p>

      {/* Button to YouTube Channel */}
      <a
        href="https://www.youtube.com/@CodeHarmonydev"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...buttonStyle,
          backgroundColor: hovered ? '#FF0000' : '#E60000', // Hover effect on color
          transform: hovered ? 'scale(1.05)' : 'scale(1)', // Scale effect on hover
        }}
        className="visitYoutubeButton"
        onMouseEnter={handleMouseEnter} // Handle hover
        onMouseLeave={handleMouseLeave} // Handle hover
      >
        Visit Our YouTube Channel !
      </a>

      {/* Videos Grid */}
      <div className="videos-container" style={videosContainerStyle}>
        {videos.map((video, index) => (
          <div key={index} className="video-item" style={videoItemStyle}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={iframeStyle}
            ></iframe>
            <p style={{ marginTop: '0.5rem', color: '#333', fontSize: '1rem' }}>
              {video.title}
            </p>
          </div>
        ))}
      </div>

      {/* Subscribe Button */}
      <div id="subscribe-button" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <div
          className="g-ytsubscribe"
          data-channelid="UChEgF087xnjDtuA1spgFQRg"
          data-layout="default"
          data-count="default"
        ></div>
      </div>
    </section>
  );
};

// Styles (unchanged from the previous code)
const videoSectionStyle = {
  padding: '2rem 1rem',
  background: 'linear-gradient(135deg, #FAFAFA, #FFFFFF)', // Softer background gradient
  textAlign: 'center',
  color: '#333',
};

const videoSectionTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#333', // Soft red
};

const videoDescriptionStyle = {
  fontSize: '1rem',
  maxWidth: '90%',
  margin: '0 auto 2rem',
  color: '#555',
  lineHeight: '1.5',
};

const buttonStyle = {
  margin: '1rem auto',
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',
  transition: 'background-color 0.3s ease, transform 0.2s ease', // Adding transition for background-color and scaling
};

const videosContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem',
  padding: '1rem',
};

const videoItemStyle = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

const videoItemHoverStyle = {
  transform: 'scale(1.02)',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
};

const iframeStyle = {
  width: '100%',
  aspectRatio: '16/9',
  border: 'none',
};

export default Videos;

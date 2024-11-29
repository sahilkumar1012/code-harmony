import React from 'react';

const Videos = () => {
  // Array of YouTube video IDs
  const videoIds = [
    "l8DxsxO9q7g",
    "PdWeMeyH9RA",
    "mBj97JeR9U0"
  ];

  return (
    <section style={videoSectionStyle}>
      <h2 style={videoSectionTitleStyle}>Educational Resources</h2>
      <p style={videoDescriptionStyle}>Here are some educational videos that we have created on various topics:</p>
      
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
              style={iframeStyle}
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

// Updated Styles for Videos Section
const videoSectionStyle = {
  padding: '2rem 1rem',
  backgroundColor: '#D3D3D3',
  textAlign: 'center',
  color: '#fff',
};

const videoSectionTitleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#333',
};

const videoDescriptionStyle = {
  fontSize: '1rem',
  maxWidth: '90%',
  margin: '0 auto 2rem',
  color: '#555',
  lineHeight: '1.5',
};

// const videosContainerStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Adjusts for small screens
//   gap: '1.5rem', // Space between grid items
//   padding: '0 1rem',
// };

const videosContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Adjust for smaller screens
  gap: '1.5rem',
  padding: '0 1rem',
};


const videoItemStyle = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
};

const iframeStyle = {
  width: '100%',
  height: '200px', // Adjusted for mobile
  border: 'none',
};

export default Videos;

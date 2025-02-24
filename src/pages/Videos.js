import React, { useEffect, useState } from 'react';
import './Videos.css';
import { useNavigate } from 'react-router-dom';

const Videos = ({theme}) => {
  const navigate = useNavigate();

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
    <div className={`videos-container ${theme === 'dark' ? 'videos-dark' : 'videos-light'}`}>
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
          }}
          className={`visitYoutubeButton ${theme} ? ${theme} : ''`}
        >
          Visit Our YouTube Channel
        </a>

        {/* Videos Grid */}
        <div className="videos-container d-flex flex-wrap justify-content-center gap-4 pt-2" >
          {videos.map((video, index) => (
            <div key={index} className="video-item" style={ theme==='dark' ? videoItemStyleDark : videoItemStyle}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={iframeStyle}
              ></iframe>
              <p style={{ marginTop: '0.5rem', fontSize: '1rem' }}>
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
    </div>
  );
};

// Styles (unchanged from the previous code)
const videoSectionStyle = {
  padding: '2rem 1rem',
  textAlign: 'center',
};

const videoSectionTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const videoDescriptionStyle = {
  fontSize: '1rem',
  maxWidth: '90%',
  margin: '0 auto 2rem',
  lineHeight: '1.5',
};

const buttonStyle = {
  margin: '1rem auto',
  padding: '0.8rem 2rem',
  fontSize: '1rem',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',
  fontWeight:'bold',
};

const videoItemStyle = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};
const videoItemStyleDark = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',
  backgroundColor: '#111',
  color:'white',
  boxShadow: '2px 6px 10px rgba(229, 226, 226, 0.253)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
}


const iframeStyle = {
  width: '100%',
  aspectRatio: '16/9',
  border: 'none',
};

export default Videos;

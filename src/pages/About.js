// src/About.js

import React from 'react';
import "./About.css"

const About = () => {
  return (
    <div className="about">
        <section className="introSectionStyle">
            <h1 style={titleStyle}>Welcome to Code Harmony</h1>
            <h2 style={descriptionStyle}>
            Learn, Grow, and Succeed with the best coding resources and expert mentorship.
            </h2>
        </section>
    </div>
  );
};

export default About;

// style
// Styles for Home 

  const titleStyle = {
    fontSize: '3rem',
    marginBottom: '0.5rem',
  };
  
  const descriptionStyle = {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
  };
  
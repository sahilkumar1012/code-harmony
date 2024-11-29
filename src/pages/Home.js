import React from 'react';
import Videos from './Videos';
import About from './About';
import Services from './Services';


const Home = () => {
  return (
    <div style={homeStyle}>
      
      <About />

      <Services />
      {/* <section style={introSectionStyle}>
        <h1 style={titleStyle}>Welcome to Code Harmony</h1>
        <h2 style={descriptionStyle}>
          Learn, Grow, and Succeed with the best coding resources and expert mentorship.
        </h2>
      </section> */}

      {/* <section style={featuredSectionStyle}>
        <h2 style={featuredTitleStyle}>Featured Services</h2>
        <div style={servicesContainerStyle}>
          <div style={serviceCardStyle}>
            <h3>DSA Preparation</h3>
            <p>Prepare for interviews with our curated DSA content.</p>
          </div>
          <div style={serviceCardStyle}>
            <h3>Mock Interviews</h3>
            <p>Get ready for your dream job with mock interviews.</p>
          </div>
          <div style={serviceCardStyle}>
            <h3>Mentorship</h3>
            <p>Personalized guidance to help you advance your career.</p>
          </div>
        </div>
      </section> */}

      <Videos />

    </div>
  );
};

// Styles for Home 
const homeStyle = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f5f5f5',
  color: '#333',
  minHeight: '100vh',
  // padding: '2rem',
};

const introSectionStyle = {
  backgroundColor: '#3b82f6',
  color: '#fff',
  textAlign: 'center',
  padding: '3rem 1rem',
  // marginBottom: '2rem',
};

const titleStyle = {
  fontSize: '3rem',
  marginBottom: '0.5rem',
};

const descriptionStyle = {
  fontSize: '1.2rem',
  maxWidth: '800px',
  margin: '0 auto',
};

const featuredSectionStyle = {
  padding: '2rem 0',
  backgroundColor: '#fff',
};

const featuredTitleStyle = {
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '1.5rem',
};

const servicesContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
};

const serviceCardStyle = {
  backgroundColor: '#61dafb',
  padding: '1.5rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  width: '200px',
  textAlign: 'center',
};

export default Home;

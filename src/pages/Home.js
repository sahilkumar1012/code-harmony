import React from 'react';
import Videos from './Videos';
import Services from './Services';

const Home = () => {
  return (
    <div style={homeStyle}>
      
      <Services />

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
  maxWidth: '1200px', // Maximum width for content
  margin: '0 auto',
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

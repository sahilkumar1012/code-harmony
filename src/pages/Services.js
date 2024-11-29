import React from 'react';

const Services = () => {
  return (
    <div style={servicesContainerStyle}>
      
      <h2 style={titleStyle}>Featured Services</h2>
      
      <div style={cardsContainerStyle}>
        
        {/* Card 1 */}
        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>DSA Preparation</h3>
          <p style={cardTextStyle}>Prepare for interviews with our curated DSA content.</p>
        </div>



        {/* Card 2 */}
        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>Mock Interviews</h3>
          <p style={cardTextStyle}>Get ready for your dream job with mock interviews.</p>
        </div>
        
        {/* Card 3 */}
        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>Mentorship</h3>
          <p style={cardTextStyle}>Personalized guidance to help you advance your career.</p>
        </div>
      </div>
    </div>
  );
};

// CSS styles for the Featured Services section
const servicesContainerStyle = {
  textAlign: 'center',
  padding: '2rem',
  // backgroundColor: '#ffffff',
  
  // backgroundColor: '#D3D3D3',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
};

const cardsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
  flexWrap: 'wrap',
};

const cardStyle = {
  backgroundColor: '#7ecbff', // Light blue background
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '1.5rem',
  width: '300px',
  textAlign: 'center',
};

const cardTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '0.75rem',
};

const cardTextStyle = {
  fontSize: '1rem',
  color: '#333',
};

const linkStyle= {

}
export default Services;

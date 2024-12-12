import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Featured Services</h2>

      <div className="services-cards-container">
        <a href="https://topmate.io/hisahil/1316955" className="service-card">
          <h3>🧩</h3>
          <h3>DSA Preparation</h3>
          <p>Prepare for interviews with our curated DSA content.</p>
        </a>

        <a href="https://topmate.io/hisahil/1280127" className="service-card">
          <h3>🎤</h3>
          <h3>Mock Interviews</h3>
          <p>Get ready for your dream job with mock interviews.</p>
        </a>

        <a href="/mentorship" className="service-card">
          <h3>👨‍🏫</h3>
          <h3>Mentorship</h3>
          <p>Personalized guidance to help you advance your career.</p>
        </a>
      </div>
    </div>
  );
};

export default Services;

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Import external styles

const NotFound = (theme) => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      
      <p className={`not-found-message  ${theme} ? ${theme} : ''`}>
        Oops! The page you're looking for doesn't exist.
      </p>
      
      <Link to="/" 
        className={`back-home-link ${theme} ? ${theme} : ''`}>
          Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

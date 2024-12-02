import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the new API
root.render(
  <React.StrictMode>
    <Router> {/* Wrap the App in Router */}
      <App />
    </Router>
  </React.StrictMode>
);

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer'; // Import the Footer component
import Header from './components/Header'; // Import the Header component
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header /> {/* Add Header here */}
        
        <div style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </div>
        
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;

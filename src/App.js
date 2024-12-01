import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer'; // Import the Footer component
import Header from './components/Header'; // Import the Header component
import Home from './pages/Home';
import Banner from './pages/Banner';

function App() {
  return (
    <Router>
      {/* Full-page layout */}
      <div style={appStyle}>
        <Header /> {/* Header */}

        <Routes>
          {/* <Route path="/" element={} */}
        </Routes>

        {/* Content Area */}
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/home" element={<Home />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </main>

        <Footer /> {/* Footer */}
      </div>
    </Router>
  );
}

// Styles
const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

// const mainStyle = {
//   flex: '1', // Fills the available vertical space
//   maxWidth: '1200px', // Maximum width for content
//   margin: '0 auto', // Centers the content
//   width: '100%', // Ensures content spans the full width on smaller screens
//   // padding: '1rem', // Adds padding for smaller devices
// };

const mainStyle = {
  flex: '1', // Fills the available vertical space
  maxWidth: '1600px', // Maximum width for content
  margin: '0 auto', // Centers the content
  width: '100%', // Ensures content spans the full width on smaller screens
  // padding: '1rem', // Adds padding for smaller devices, optional
  boxSizing: 'border-box', // Prevents overflow by including padding in the width
};

export default App;

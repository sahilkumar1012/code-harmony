import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Banner from './pages/Banner';
import MentorshipPage from './pages/MentorshipPage';
import NotFound from './components/NotFound';
import ContactPage from './pages/ContactPage';

import './App.css';

function AppContent() {
  const location = useLocation(); // Get the current route
  const mainClassName = location.pathname === '/' ? 'main-content-full' : 'main-content';

  return (
    <div className="app-container">
      <Header />

      {/* Main Content Area */}
      <main className={mainClassName}>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;

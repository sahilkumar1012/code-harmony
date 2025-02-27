// App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useUser } from './UserContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import MentorshipPage from './pages/MentorshipPage';
import NotFound from './components/NotFound';
import ContactPage from './pages/ContactPage';
import GoogleLogin from './components/auth/GoogleLogin';
import About from './pages/About';
import DSASheet from './pages/services/DSASheet';
import OnboardMentorForm from './mentorship/OnboardMentorForm';
import MentorOnboardingRequests from './mentorship/MentorOnboardingRequests';
import './App.css';
import DSA from './pages/DSA';

function AppContent() {
  const location = useLocation();
  const mainClassName = 'main-content';
  const { user, login } = useUser();

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.toggle('theme-dark', theme === 'dark');
    document.body.classList.toggle('theme-light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`app-container ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className={mainClassName}>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/index.html" element={<Home theme={theme} />} />
          
          <Route path="/mentorship" element={<MentorshipPage theme={theme}/>} />
          <Route path="/mentorship/onboard" element={<OnboardMentorForm theme={theme}/>} />
          <Route path="/mentorship/onboard/requests" element={
            user ? <MentorOnboardingRequests user={user} /> : <GoogleLogin onLogin={login} theme={theme}/>
          } />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/dsasheet" element={<DSASheet theme={theme} />} />
          <Route path="/login" element={
            user ? <Home /> : <GoogleLogin onLogin={login} theme={theme}/>
          } />

          <Route path="/dsa" element={<DSA theme={theme}/>} />
          <Route path="*" element={<NotFound theme={theme} />} />
        </Routes>
      </main>

      <Footer theme={theme} />
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;

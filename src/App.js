import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useUser } from './UserContext';
import Header from './components/Header';
import Home from './pages/Home';
import MentorshipPage from './pages/MentorshipPage';
import OnboardMentorForm from './mentorship/OnboardMentorForm';
import DSASheet from './pages/services/DSASheet';
import NotFound from './components/NotFound';
import ContactPage from './pages/ContactPage';
import GoogleLogin from './components/auth/GoogleLogin';
import About from './pages/About';
import MentorOnboardingRequests from './mentorship/MentorOnboardingRequests';
import DSA from './pages/DSA';
import './styles.css';

export default function App() {
  const { user, login } = useUser();
  const [theme, setTheme] = useState(() => localStorage.getItem('ch-theme') || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('ch-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <>
      <div className="ch-blob" style={{ width: 400, height: 400, background: 'rgba(232,81,61,0.2)', top: -100, left: -100 }} />
      <div className="ch-blob" style={{ width: 350, height: 350, background: 'rgba(100,160,255,0.2)', top: '40%', right: -80, animationDelay: '7s' }} />
      <div className="ch-blob" style={{ width: 300, height: 300, background: 'rgba(170,120,255,0.15)', bottom: -50, left: '30%', animationDelay: '14s' }} />

      <Header theme={theme} toggleTheme={toggleTheme} />

      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/mentorship/onboard" element={<OnboardMentorForm />} />
          <Route path="/mentorship/onboard/requests" element={
            user ? <MentorOnboardingRequests user={user} /> : <GoogleLogin onLogin={login} />
          } />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/dsasheet" element={<DSASheet />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/login" element={
            user ? <Home /> : <GoogleLogin onLogin={login} />
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

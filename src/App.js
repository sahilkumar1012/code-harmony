import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useUser } from './UserContext';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Banner from './pages/Banner';
import MentorshipPage from './pages/MentorshipPage';
import NotFound from './components/NotFound';
import ContactPage from './pages/ContactPage';
import GoogleLogin from './components/auth/GoogleLogin';
import About from './pages/About';
import DSASheet from './pages/services/DSASheet';
import AddDataPage from './pages/admin/AddDataPage';
import './App.css';
import OnboardMentorForm from './mentorship/OnboardMentorForm';
// import 'animate.css';

function AppContent() {
  const location = useLocation();
  const mainClassName = 'main-content';
    // location.pathname === '/' || location.pathname === '/index.html' 
    //   ? 'main-content-full' : 'main-content';
  const { user, login } = useUser();


  return (
    <div className="app-container">
      <Header />

      <main className={mainClassName}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/mentorship/onboard" element={<OnboardMentorForm />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/dsasheet" element={<DSASheet />} />

          <Route
            path="/login"
            element={
              user ? <Home /> : <GoogleLogin onLogin={login} />
            }
          />

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

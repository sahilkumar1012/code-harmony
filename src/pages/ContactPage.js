import React, { useEffect, useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when the component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="contact-page bg-light text-dark py-5">
      <div className="container">
        {/* Card Component */}
        <div
          className="card mx-auto"
          style={{
            ...contactPageContainerStyle,
            animation: isVisible ? 'fadeInUp 1s ease-out forwards' : 'none',
          }}
        >
          <div className="card-body">
            <h1 className="card-title text-center mb-4 font-weight-bold">Contact Us</h1>
            {/* Email Contact Section */}
            <div className="text-center mb-5">
              <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Prefer to email us directly? Reach out at:
              </p>
              <h3 className='link-hover'>
                <a
                  href="mailto:codeharmonyofficial@gmail.com"
                  className="text-decoration-none text-primary link-hover"
                >
                  codeharmonyofficial@gmail.com
                </a>
              </h3>
            </div>
            {/* Additional Contact Details */}
            <div className="text-center">
              <h5 className="mb-3 font-weight-bold">Follow Us</h5>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <a
                  href="https://youtube.com/@codeharmonydev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary ms-2 me-2 link-hover"
                >
                  YouTube
                </a>
                <span>|</span>
                <a
                  href="https://x.com/codeharmonyHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary ms-2 me-2 link-hover"
                >
                  X
                </a>
                <span>|</span>
                <a
                  href="https://www.linkedin.com/company/99000515/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary ms-2 me-2 link-hover"
                >
                  LinkedIn
                </a>
                <span>|</span>
                <a
                  href="https://www.instagram.com/codeharmony.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary ms-2 me-2 link-hover"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS Keyframes for fade-in and slide-up animation
const keyframes = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

// Dynamically inject keyframes into the page
const _kfStyle = document.createElement('style');
_kfStyle.textContent = keyframes;
document.head.appendChild(_kfStyle);

// Contact Page Container Style
const contactPageContainerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  border: '0',
  opacity: 0,
};

export default ContactPage;

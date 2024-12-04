import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page bg-light text-dark py-5">
      <div className="container">
        {/* Email Contact Section */}
        <div className="text-center mb-5">
          <h1 className="mb-3 font-weight-bold">Contact Us</h1>
          <p className="mb-4">
            Prefer to email us directly? Reach out at:
          </p>
          <h3>
            <a href="mailto:codeharmonyofficial@gmail.com" className="text-decoration-none text-primary link-hover">
              codeharmonyofficial@gmail.com
            </a>
          </h3>
        </div>

        {/* Additional Contact Details */}
        <div className="row text-center mt-5 justify-content-center"> {/* Center the row */}
          <div className="col-md-8 d-flex flex-column align-items-center"> {/* Adjust column to flex */}
            <h5 className="mb-3 font-weight-bold">Follow Us</h5> {/* Ensure heading is above links */}
            <p>
              <a
                href="https://youtube.com/@codeharmonydev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary ms-2 me-2 mb-2 link-hover"
              >
                YouTube
              </a>
              <span>|</span>       
              <a
                href="https://x.com/codeharmonyHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary ms-2 me-2 mb-2 link-hover"
              >
                X
              </a>
              <span>|</span>
              <a
                href="https://www.linkedin.com/company/99000515/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary ms-2 me-2 mb-2 link-hover"
              >
                LinkedIn
              </a>
              <span>|</span>
              <a
                href="https://www.instagram.com/codeharmony.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary ms-2 me-2 mb-2 link-hover"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

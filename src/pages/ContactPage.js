import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page bg-light text-dark py-5">
      <div className="container">
        {/* Email Contact Section */}
        <div className="text-center mb-5">
          <h1 className="mb-3">Contact Us</h1>
          <p className="mb-4">
            Prefer to email us directly? Reach out at:
          </p>
          <h3>
            <a href="mailto:codeharmonyofficial@gmail.com" className="text-decoration-none text-primary">
              codeharmonyofficial@gmail.com
            </a>
          </h3>
        </div>


        {/* Additional Contact Details */}
        <div className="row text-center mt-5">
          <div className="col-md-4 phoneNumber">
            <h5>Phone</h5>
            <p>
              <a href="tel:+1234567890" className="text-decoration-none text-primary">
                +1 234 567 890
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p>
              <a href="https://youtube.com/@codeharmonydev" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary ms-2 me-2">
                YoutTube
              </a>    
              <span>|</span>       
              <a href="https://x.com/codeharmonyHQ" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary me-2 ms-2">
                X
              </a>
              <span>|</span>
              <a href="https://www.linkedin.com/company/99000515/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary ms-2 me-2">
                LinkedIn
              </a>
              <span>|</span>
              <a href="https://www.instagram.com/codeharmony.dev/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary ms-2 me-2">
                Instagram
              </a>

            </p>
          </div>
          <div className="col-md-4 companyAddress">
            <h5>Address</h5>
            <p>
              Code Harmony, <br />
              123 Harmony Street, <br />
              Tech City, 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const contactForm = {
  display: 'none', // Modify this to 'block' or conditional logic to show form
};

export default ContactPage;

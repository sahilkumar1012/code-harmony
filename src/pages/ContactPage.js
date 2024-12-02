import React from 'react';
// import { motion } from 'framer-motion';
import './ContactPage.css';

const ContactPage = () => {
  // Animation Variants
  // const pageVariants = {
  //   hidden: { opacity: 0, y: -30 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  // };

  return (
    // <motion.div
    //   className="contact-page bg-light text-dark py-5"
    //   initial="hidden"
    //   animate="visible"
    //   variants={pageVariants}
    // >
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

        {/* Contact Form */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="text-center mb-4">Send Us a Message</h2>
            <form className="p-4 rounded shadow-sm bg-white">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" disabled={true} className="btn btn-primary px-4 btn-disabled">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Contact Details */}
        <div className="row text-center mt-5">
          <div className="col-md-4">
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
              <a href="https://x.com/codeharmonyHQ" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary me-2">
                X
              </a>
              <span>|</span>
              <a href="https://www.linkedin.com/company/99000515/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary ms-2">
                LinkedIn
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Address</h5>
            <p>
              Code Harmony, <br />
              123 Harmony Street, <br />
              Tech City, 12345
            </p>
          </div>
        </div>
      </div>
    // </motion.div>
  );
};

export default ContactPage;

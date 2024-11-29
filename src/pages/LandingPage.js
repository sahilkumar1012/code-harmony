import React from 'react';
import './LandingPage.css'; // We'll create this CSS file next

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">Code Harmony</div>
        <h1 className="tagline">Master Data Structures & Algorithms with Confidence</h1>
        <a href="/mentorship" className="cta-btn">Start Your Journey</a>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Code Harmony</h2>
        <p>
          Welcome to Code Harmony, where I teach Data Structures & Algorithms in an easy-to-understand, structured manner.
          Let's make coding fun and efficient together!
        </p>
      </section>

      {/* Mentorship Plans Section */}
      <section className="mentorship">
        <h2>Mentorship Plans</h2>
        <div className="plan">
          <h3>1-on-1 Mentorship</h3>
          <p>Personalized guidance for DSA prep and interview success.</p>
        </div>
        <div className="plan">
          <h3>Group Mentorship</h3>
          <p>Collaborate with others and get expert advice from me.</p>
        </div>
        <a href="/mentorship" className="cta-btn">Explore Plans</a>
      </section>

      {/* Video Section */}
      <section className="videos">
        <h2>Watch Latest Tutorials</h2>
              <iframe width="600" height="238" src="https://www.youtube.com/embed/PdWeMeyH9RA" title="How My Friend Coded Consistently for 500 Days on LeetCode? 🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>Have questions? Feel free to contact me!</p>
        <a href="/contact" className="cta-btn">Contact Me</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Follow me on <a href="https://www.youtube.com/@codeharmonylab">YouTube</a> | <a href="https://www.linkedin.com/in/your-profile">LinkedIn</a></p>
      </footer>
    </div>
  );
};

export default LandingPage;

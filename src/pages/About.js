import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when the component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section style={aboutSectionStyle}>
      <div
        style={{
          ...aboutContainerStyle,
          animation: isVisible ? 'fadeInUp 1s ease-out forwards' : 'none',
        }}
      >
        <h1 style={aboutTitleStyle}>About CodeHarmony</h1>
        <p style={aboutTextStyle}>
          Welcome to <strong>CodeHarmony</strong>, your ultimate destination for mastering <strong>Data Structures and Algorithms (DSA)</strong> and staying updated with the latest <strong>tech insights</strong>!
        </p>
        <p style={aboutTextStyle}>
          Our mission is to simplify complex coding problems, empower developers with the right tools, and help you crack the toughest coding interviews. With years of experience working at top tech companies like <strong>Google</strong>, <strong>Amazon</strong>, <strong>Microsoft</strong>, and <strong>Adobe</strong>, we bring real-world expertise to every video.
        </p>
        <p style={aboutTextStyle}>
          Join our vibrant community of coders as we embark on daily problem-solving challenges, explore advanced DSA concepts, and discuss emerging tech trends. Let’s turn your coding aspirations into achievements.
        </p>

        {/* CTA Buttons */}
        <div style={buttonContainerStyle}>
          <a
            href="https://www.youtube.com/@CodeHarmonydev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...ctaButtonStyle, backgroundColor: '#E60000' }}
          >
            Explore YouTube Channel
          </a>
          <a
            href="https://discord.gg/p3vtnzFbn5"
            style={{ ...ctaButtonStyle, backgroundColor: '#007BFF' }}
          >
            Join Our Discord Community
          </a>
        </div>
      </div>
    </section>
  );
};

// CSS Keyframes (to be added in your global CSS file)
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
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

// Styles
const aboutSectionStyle = {
  padding: '3rem 1rem',
  background: 'linear-gradient(135deg, #FAFAFA, #FFFFFF)',
  textAlign: 'center',
  color: '#333',
};

const aboutContainerStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  opacity: 0, // Start as invisible
};

const aboutTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#333',
};

const aboutTextStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.8',
  marginBottom: '1rem',
  color: '#555',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '2rem',
};

const ctaButtonStyle = {
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
};

export default About;

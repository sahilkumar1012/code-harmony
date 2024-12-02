import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
import Services from './Services'; // Adjust path if needed
import Videos from './Videos'; // Adjust path if needed
import './Home.css'; // Ensure you have a CSS file for custom styling

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Trigger any animations on load
  }, []);

  const pageVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className={`home-container ${isLoaded ? 'fade-in' : ''}`}>
        <Services />
        <Videos />
      </div>
  );
};

export default Home;

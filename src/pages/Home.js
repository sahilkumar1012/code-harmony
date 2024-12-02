// import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Services from './Services'; // Adjust path if needed
import Videos from './Videos'; // Adjust path if needed
import './Home.css'; // Ensure you have a CSS file for custom styling

const Home = () => {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   setIsLoaded(true); // Trigger any animations on load
  // }, []);

  const pageVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="contact-page bg-light text-dark py-5"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <div className={`home-container `}>
        <Services />
        <Videos />
      </div>
    </motion.div>
  );
};

export default Home;

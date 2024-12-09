import React, { useEffect, useState } from 'react';
import Services from './Services'; // Adjust path if needed
import Videos from './Videos'; // Adjust path if needed
import Banner from './Banner';

import './Home.css'; // Ensure you have a CSS file for custom styling
import BannerLite from './BannerLite';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Trigger any animations on load
  }, []);

  return (
    <div className={`home-container ${isLoaded ? 'fade-in' : ''}`}>
      <BannerLite />
      <Services />
      <Videos />
    </div>
  );
};

export default Home;

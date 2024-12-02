import React, { useEffect, useState } from 'react';
import Videos from './Videos';
import Services from './Services';
import './Home.css';  // Make sure to import the CSS file that contains the animation

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // This will trigger the animation when the page is loaded
    setIsLoaded(true);
  }, []);

  return (
    <div className={`home-container ${isLoaded ? 'fade-in' : ''}`}>
      <Services />
      <Videos />
    </div>
  );
};

export default Home;

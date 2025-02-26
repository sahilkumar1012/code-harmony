import React, { useEffect, useState } from 'react';
import Services from './Services'; // Adjust path if needed
import Videos from './Videos'; // Adjust path if needed

import './Home.css'; // Ensure you have a CSS file for custom styling
import BannerLite from './BannerLite';
import ReviewsPanel from './ReviewsPanel';
import FAQSection from './FAQSection'; // Import the FAQ component

const Home = ({theme}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Trigger any animations on load
  }, []);

  return (
    <div className={`home-container ${isLoaded ? 'fade-in' : ''}`}>
      <BannerLite theme={theme} />
      <Services theme={theme}/>
      <Videos theme={theme} />
      <ReviewsPanel theme={theme} />
      <FAQSection theme={theme} />
    </div>
  );
};

export default Home;

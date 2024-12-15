// ReviewsPanel.js
import React, { useRef } from "react";
import "./ReviewsPanel.css";
import reviews from "../data/reviews.json"; // Import the JSON file

const ReviewsPanel = () => {
  const scrollRef = useRef(null);

  // Scroll to the left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  // Scroll to the right
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="reviews-panel-container">
      <h2 className="reviews-title">What People Say About Us</h2>
      <div className="reviews-wrapper">
        <button className="arrow left" onClick={scrollLeft}>
          &#8592;
        </button>
        <div className="reviews-panel" ref={scrollRef}>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img src={review.image} alt={`Photo of ${review.mentee}`} className="review-image" />
              <h5 className="mentee-name">{review.mentee}</h5>
              <p className="review-text">"{review.review}"</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ReviewsPanel;

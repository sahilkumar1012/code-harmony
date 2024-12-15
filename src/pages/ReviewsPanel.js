// ReviewsPanel.js
import React from "react";
import "./ReviewsPanel.css"; // Custom CSS for styling
import reviews from "../data/reviews.json"; // Import the JSON file

const ReviewsPanel = () => {
  return (
    <div className="reviews-panel-container">
      <h2 className="reviews-title">What People Say About Us</h2>
      <div className="reviews-panel">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.image} alt={review.mentee} className="review-image" />
            <h5 className="mentee-name">{review.mentee}</h5>
            <p className="review-text">"{review.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPanel;

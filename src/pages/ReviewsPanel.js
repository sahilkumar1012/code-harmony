import React, { useRef, useState, useEffect } from "react";
import "./ReviewsPanel.css";
import reviews from "../data/reviews.json";

const ReviewsPanel = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to enable/disable buttons
  const checkScrollPosition = () => {
    const panel = scrollRef.current;
    if (!panel) return;

    const { scrollLeft, scrollWidth, clientWidth } = panel;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const panel = scrollRef.current;

    if (panel) {
      checkScrollPosition(); // Initial check
      panel.addEventListener("scroll", checkScrollPosition);
    }

    return () => {
      if (panel) {
        panel.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  // Scroll to the left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  // Scroll to the right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container reviews-panel-container">
      <h2 className="reviews-title">What People Say About Us</h2>
      <div className="reviews-wrapper">
        <button
          className={`arrow left ${!canScrollLeft ? "disabled" : ""}`}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          &#8592;
        </button>
        <div className="reviews-panel" ref={scrollRef}>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img
                src={review.image}
                alt={`Photo of ${review.mentee}`}
                className="review-image"
              />
              <h5 className="mentee-name">{review.mentee}</h5>
              <p className="review-text">"{review.review}"</p>
            </div>
          ))}
        </div>
        <button
          className={`arrow right ${!canScrollRight ? "disabled" : ""}`}
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ReviewsPanel;

import React from 'react';
import './MentorCards.css'; // Make sure you have the corresponding CSS for styles

const mentorData = [
  { name: 'John Doe', company: 'XYZ Corp', image: 'mentor-image.jpg', link: 'https://topmate.io' },
  { name: 'Jane Smith', company: 'ABC Inc.', image: 'mentor-image.jpg', link: 'https://topmate.io' },
  // Add more mentors here
];

const MentorCards = () => {
  return (
    <div className="mentor-cards-container">
      {mentorData.map((mentor, index) => (
        <div 
          key={index}
          className="mentor-card"
          style={{ animationDelay: `${index * 0.2}s` }} // Sequential animation delay
        >
          <img src={mentor.image} alt={mentor.name} />
          <h3>{mentor.name}</h3>
          <p>{mentor.company}</p>
          <a href={mentor.link} target="_blank" className="mentor-card-cta-button">
            Book a Session
          </a>
        </div>
      ))}
    </div>
  );
};

export default MentorCards;

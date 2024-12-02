import React from 'react';
import { mentors } from '../mentorship/MentorData';  // Import the mentor data
import MentorCards from '../mentorship/MentorCards';  // Import the MentorCard component

const MentorshipPage = () => {
  return (
    <div className="mentoship-page">
      <h1>Our Mentors</h1>
      {/* <div className="mentor-cards-container">
        {mentors.map(mentor => (
          <MentorCards key={mentor.id} mentor={mentor} />
        ))}
      </div> */}
    </div>
  );
};

export default MentorshipPage;

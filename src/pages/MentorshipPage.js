import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import linkedinlogo from "../../src/assets/linkedinlogo.png";
import topmatelogo from "../../src/assets/topmatelogo.png";

const mentors = [
  {
    name: "Sahil Kumar",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/D5603AQHYc1QmtyYb5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724942821286?e=1739404800&v=beta&t=fwwr1tt1whzDtocEteReoreg-n1SZOBeQ3LFDlI-MFs",
    company: "Google",
    linkedIn: "https://www.linkedin.com/in/sahil1012/",
    topmate: "https://topmate.io/hisahil",
    expertise: ["DSA", "Backend", "Frontend"],
  },
  {
    name: "Piyush Giri",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/D5603AQGSdzeqD9ULXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714304534219?e=1739404800&v=beta&t=hzzXinUg7axiNp3x_1AiyZ--6b_9q95uEPUSwSCkIVc",
    company: "Microsoft",
    linkedIn: "https://www.linkedin.com/in/piyushgi/",
    topmate: "https://topmate.io/piyush_giri",
    expertise: ["Backend", "DSA"],
  },
  {
    name: "Mohit Kumar Verma",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/C5603AQG8CLM2BRV-Lw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1618136615281?e=1739404800&v=beta&t=Uk_B7myRV37I3C5cosTc0Ovls06mx9o1yEsycYweywU",
    company: "Amazon",
    linkedIn: "https://www.linkedin.com/in/mohit-k-verma/",
    topmate: "https://topmate.io/mohitkumarverma/",
    expertise: ["System Design", "Leadership"],
  }


];

const MentorCard = ({ mentor }) => {
  return (
    <div
      className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center"
      style={{ minWidth: "250px" }}
    >
      <div className="card shadow-sm w-100" style={{ borderRadius: "10px" }}>
        <img
          src={mentor.profilePicture}
          className="card-img-top"
          alt={`${mentor.name}'s profile`}
          style={{ borderRadius: "10px 10px 0 0" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{mentor.name}</h5>
          <p className="card-text text-muted">{mentor.company}</p>
          <p className="card-text text-muted">
            Expertise: {mentor.expertise.join(", ")}
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {mentor.linkedIn ? (
              <a
                href={mentor.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary d-flex align-items-center"
                style={{
                  gap: "0.5rem",
                  flex: "1",
                  minWidth: "120px",
                  maxWidth: "48%",
                }}
              >
                <img
                  src={linkedinlogo}
                  alt="LinkedIn icon"
                  style={{ width: "20px", height: "20px" }}
                />
                LinkedIn
              </a>
            ) : (
              <button className="btn btn-secondary" disabled>
                LinkedIn Unavailable
              </button>
            )}
            {mentor.topmate ? (
              <a
                href={mentor.topmate}
                target="_blank"
                rel="noopener noreferrer"
                className="btn d-flex align-items-center"
                style={{
                  backgroundColor: "#D9534F",
                  color: "white",
                  gap: "0.5rem",
                  flex: "1",
                  minWidth: "120px",
                  maxWidth: "48%",
                }}
              >
                <img
                  src={topmatelogo}
                  alt="Topmate icon"
                  style={{ width: "20px", height: "20px" }}
                />
                Guidance
              </a>
            ) : (
              <button className="btn btn-secondary" disabled>
                Mentorship Unavailable
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MentorshipPage = () => {
  const [filter, setFilter] = useState("");

  const filteredMentors = mentors.filter((mentor) =>
    filter ? mentor.expertise.includes(filter) : true
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mentorship</h1>
      <p className="text-center mb-4">
        Connect with experienced mentors from top tech companies to accelerate
        your career.
      </p>
      <div className="d-flex justify-content-center mb-4">
        <select
          className="form-select w-50"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Expertise</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="DSA">DSA</option>
          <option value="AI">AI</option>
          <option value="System Design">System Design</option>
        </select>
      </div>
      <div className="row">
        {filteredMentors.map((mentor, index) => (
          <MentorCard mentor={mentor} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MentorshipPage;

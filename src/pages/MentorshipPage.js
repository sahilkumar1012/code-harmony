import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import linkedinlogo from "../../src/assets/linkedinlogo.png";
import topmatelogo from "../../src/assets/topmatelogo.png";
import googleLogo from "../../src/assets/google.png"; // Company logos
import microsoftLogo from "../../src/assets/microsoft.png";
import amazonLogo from "../../src/assets/amazon.png";
import adobeLogo from "../../src/assets/adobe.png";

const mentors = [
  {
    name: "Sahil Kumar",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/D5603AQHYc1QmtyYb5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724942821286?e=1739404800&v=beta&t=fwwr1tt1whzDtocEteReoreg-n1SZOBeQ3LFDlI-MFs",
    companies: [
      { name: "Google", logo: googleLogo },
      { name: "Amazon", logo: amazonLogo },
      { name: "Adobe", logo: adobeLogo },
    ],
    linkedIn: "https://www.linkedin.com/in/sahil1012/",
    topmate: "https://topmate.io/hisahil",
    expertise: ["DSA", "Backend", "Frontend"],
  },
  {
    name: "Piyush Giri",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/D5603AQGSdzeqD9ULXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714304534219?e=1739404800&v=beta&t=hzzXinUg7axiNp3x_1AiyZ--6b_9q95uEPUSwSCkIVc",
    companies: [
      { name: "Microsoft", logo: microsoftLogo },
      { name: "Adobe", logo: adobeLogo },
    ],
    linkedIn: "https://www.linkedin.com/in/piyushgi/",
    topmate: "https://topmate.io/piyush_giri",
    expertise: ["Backend", "DSA"],
  },
  {
    name: "Mohit Kumar Verma",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/C5603AQG8CLM2BRV-Lw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1618136615281?e=1739404800&v=beta&t=Uk_B7myRV37I3C5cosTc0Ovls06mx9o1yEsycYweywU",
    companies: [
      { name: "Amazon", logo: amazonLogo },
    ],
    linkedIn: "https://www.linkedin.com/in/mohit-k-verma/",
    topmate: "https://topmate.io/mohitkumarverma/",
    expertise: ["System Design", "Leadership"],
  },
  {
    name: "Chirag Garg",
    profilePicture: "https://media.licdn.com/dms/image/v2/C5603AQE3fd21hMn_9A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662290355466?e=1742428800&v=beta&t=GR0AYeAr5Zl18TGu_0m3NRVmG2YyChQ9E1HjEv1JIgY",
    companies: [
      { name: "Google", logo: googleLogo },
    ],
    linkedIn: "https://www.linkedin.com/in/gargchirag96/",
    topmate: "https://topmate.io/chirag_garg10",
    expertise: ["Backend", "DSA"],
  },
  {
    name: "Manikya Sabharwal",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQHmef_CIjJuzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707551933862?e=1744243200&v=beta&t=NA4W2GM2OaysMP5PEOAZ9zBboANhlNiVhMNI6gCeTAU",
    companies: [
      { name: "Microsoft", logo: microsoftLogo },
      { name: "Amazon", logo: amazonLogo },
    ],
    linkedIn: "https://www.linkedin.com/in/manikya-sabharwal/",
    topmate: "https://topmate.io/manikya",
    expertise: ["DSA"],
  },
];

const MentorCard = ({ mentor }) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center"
      style={{
        animation: isVisible ? "fadeInUp 0.8s ease-in-out forwards" : "none",
      }}
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
          
          <div className="mb-2 d-flex justify-content-center gap-2 flex-wrap">
            {mentor.companies.map((company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={`${company.name} logo`}
                style={{ width: "100px", height: "50px", objectFit: "contain" }}
              />
            ))}
          </div>

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
                  backgroundColor: "#0A66C2",
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

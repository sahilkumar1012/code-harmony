import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import linkedinlogo from "../../src/assets/linkedinlogo.png";
import topmatelogo from "../../src/assets/topmatelogo.png";

const mentors = [
  {
    name: "Sahil Kumar",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/D5603AQHYc1QmtyYb5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724942821286?e=1739404800&v=beta&t=fwwr1tt1whzDtocEteReoreg-n1SZOBeQ3LFDlI-MFs",
    company: "Google",
    linkedIn: "https://linkedin.com/in/sahil-kumar",
    topmate: "https://topmate.io/hisahil",
  },
  {
    name: "Piyush Giri",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/D5603AQGSdzeqD9ULXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714304534219?e=1739404800&v=beta&t=hzzXinUg7axiNp3x_1AiyZ--6b_9q95uEPUSwSCkIVc",
    company: "Microsoft",
    linkedIn: "https://linkedin.com/in/ananya-sharma",
    topmate: "https://topmate.io/hisahil",
  },
  {
    name: "Rahul Verma",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/D5603AQGSdzeqD9ULXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714304534219?e=1739404800&v=beta&t=hzzXinUg7axiNp3x_1AiyZ--6b_9q95uEPUSwSCkIVc",
    company: "Microsoft",
    linkedIn: "https://linkedin.com/in/rahul-verma",
    topmate: "https://topmate.io/rahul-verma",
  },
  {
    name: "Priya Singh",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/D5603AQGSdzeqD9ULXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714304534219?e=1739404800&v=beta&t=hzzXinUg7axiNp3x_1AiyZ--6b_9q95uEPUSwSCkIVc",
    company: "Meta",
    linkedIn: "https://linkedin.com/in/priya-singh",
    topmate: "https://topmate.io/priya-singh",
  },
  {
    name: "Arjun Patel",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/D5603AQGSdzeqD9ULXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714304534219?e=1739404800&v=beta&t=hzzXinUg7axiNp3x_1AiyZ--6b_9q95uEPUSwSCkIVc",
    company: "Adobe",
    linkedIn: "https://linkedin.com/in/arjun-patel",
    topmate: "https://topmate.io/arjun-patel",
  },
];

const MentorshipPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mentorship</h1>
      <div className="row d-flex justify-content-left">
        {mentors.map((mentor, index) => (
          <div
            className="col-12 col-sm-6 col-lg-3 mb-4 d-flex"
            key={index}
            style={{ minWidth: "250px" }}
          >
            <div
              className="card shadow-sm w-100"
              style={{ borderRadius: "10px" }}
            >
              <img
                src={mentor.profilePicture}
                className="card-img-top"
                alt={`${mentor.name}'s profile`}
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{mentor.name}</h5>
                <p className="card-text text-muted">{mentor.company}</p>
                <div className="d-flex flex-column flex-sm-row justify-content-center">
                 
                  <a
                    href={mentor.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary me-2 mb-2 mb-sm-0 btn-block"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <img
                      src={linkedinlogo} // Replace with LinkedIn icon URL
                      alt="LinkedIn icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                    LinkedIn
                  </a>
                  
                  <a
                    href={mentor.topmate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-block"
                    style={{
                      backgroundColor: "#D9534F",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <img
                      src={topmatelogo} // Replace with Topmate icon URL
                      alt="Topmate icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                    Get Mentorship
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorshipPage;

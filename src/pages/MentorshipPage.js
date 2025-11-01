import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { default as adobeLogo, default as adobeLogoDark } from "../../src/assets/adobe-dark.png";
import amazonLogoDark from "../../src/assets/amazon-dark.png";
import amazonLogo from "../../src/assets/amazon.png";
import geLogo from "../../src/assets/ge.jpeg";
import goldmanLogo from "../../src/assets/goldman.png";
import googleLogoDark from "../../src/assets/google-dark.png"; // Dark theme logo
import googleLogo from "../../src/assets/google.png"; // Company logos
import jpmcLogo from "../../src/assets/jpmc.jpeg";
import linkedinlogo from "../../src/assets/linkedinlogo.png";
import microsoftLogoDark from "../../src/assets/microsoft-dark.png";
import microsoftLogo from "../../src/assets/microsoft.png";
import paypalLogo from "../../src/assets/paypal.png";
import sdLogo from "../../src/assets/sd.png";
import topmatelogo from "../../src/assets/topmatelogo.png";
import walmartLogo from "../../src/assets/Walmart Logo.png";




import asmaPic from "../../src/assets/mentors/asma.jpg";
import chiragPic from "../../src/assets/mentors/chirag.jpeg";
import manikyaPic from "../../src/assets/mentors/manikya.jpeg";
import mkvPic from "../../src/assets/mentors/mkv.jpeg";
import piyushGiriPic from "../../src/assets/mentors/piyushgiri.jpeg";
import sahilPic from "../../src/assets/mentors/sahil.jpeg";
import siddarthPic from "../../src/assets/mentors/siddarth.png";
import asmaPic from "../../src/assets/mentors/Asma.jpeg";
import shyamPic from "../../src/assets/mentors/Shyam.jpeg";


import "./MentorshipPage.css";

const mentors = [
  {
    name: "Sahil Kumar",
    profilePicture: sahilPic,
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
    profilePicture: piyushGiriPic,
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
    profilePicture: mkvPic,
    companies: [
      { name: "Amazon", logo: amazonLogo },
    ],
    linkedIn: "https://www.linkedin.com/in/mohit-k-verma/",
    topmate: "https://topmate.io/mohitkumarverma/",
    expertise: ["System Design", "Leadership"],
  },
  {
    name: "Chirag Garg",
    profilePicture: chiragPic,
    companies: [
      { name: "Google", logo: googleLogo },
    ],
    linkedIn: "https://www.linkedin.com/in/gargchirag96/",
    topmate: "https://topmate.io/chirag_garg10",
    expertise: ["Backend", "DSA"],
  },
  {
    name: "Manikya Sabharwal",
    profilePicture: manikyaPic,
    companies: [
      { name: "Microsoft", logo: microsoftLogo },
      { name: "Amazon", logo: amazonLogo },
    ],
    linkedIn: "https://www.linkedin.com/in/manikya-sabharwal/",
    topmate: "https://topmate.io/manikya",
    expertise: ["DSA"],
  },
  {
    name: "Siddarth Pai",
    profilePicture: siddarthPic,
    companies: [
      { name: "Walmart", logo: walmartLogo },
      { name: "jpmc", logo: jpmcLogo },
      { name: "ge", logo: geLogo },
    ],
    linkedIn: "https://www.linkedin.com/in/siddarthpaim/",
    topmate: "https://topmate.io/Siddarthpaim",

    expertise: ["Product Management"],
  },
  {
    name: "Asma Shaikh",
    profilePicture: asmaPic,
    companies: [
      { name: "Goldman Sachs", logo: goldmanLogo },
      { name: "Standard chartered", logo: sdLogo },
      { name: "Paypal", logo: paypalLogo },
    ],
    linkedIn: "https://www.linkedin.com/in/asma-s-411137b1/",
    expertise: ["Backend", "DSA"],
  },
  {
    name: "Shyam Vaghela",
    profilePicture: shyamPic,
    companies: [
      { name: "Linkdin", logo: linkedinlogo },
      { name: "Amazon", logo: amazonLogo },
      { name: "Goldman Sachs", logo: goldmanLogo },
      
    ],
    linkedIn: "https://www.linkedin.com/in/shyam-vaghela/",
    topmate: "https://topmate.io/shyam_vaghela/",
    expertise: ["Backend", "DSA"],
  },
];

const MentorCard = ({ mentor, theme}) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Function to get logo based on the theme
  const getCompanyLogo = (company) => {
    const logoMap = {
      Google: theme === "dark" ? googleLogoDark : googleLogo,
      Microsoft: theme === "dark" ? microsoftLogoDark : microsoftLogo,
      Amazon: theme === "dark" ? amazonLogoDark : amazonLogo,
      Adobe: theme === "dark" ? adobeLogoDark : adobeLogo,
    };
    return logoMap[company.name] || company.logo;
  };

  return (
    <div
      className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center"
      style={{
        animation: isVisible ? "fadeInUp 0.8s ease-in-out forwards" : "none",
      }}
    >
      <div className={`card shadow-lg ${theme === 'dark' ? 'bg-dark text-light' : 'bg-white'} rounded-3`}>
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
                src={getCompanyLogo(company)}
                alt={`${company.name} logo`}
                style={{ width: "100px", height: "50px", objectFit: "contain" }}
              />
            ))}
          </div>
          <p className={`card-text ${theme ==='dark' ? 'text-light' : ''}`}>
            Expertise: {mentor.expertise.join(", ")}
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {mentor.linkedIn ? (
              <a
                href={mentor.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary d-flex align-items-center mentor-card-button"
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
                className="btn d-flex align-items-center mentor-card-button"
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

const MentorshipPage = ({theme}) => {
  const [filter, setFilter] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredMentors = mentors.filter((mentor) =>
    filter ? mentor.expertise.includes(filter) : true
  );

  return (
    <div className={`container mt-5 position-relative ${theme === 'dark' ? 'dark bg-black' : ''} `}>
      {/* Header Section */}
      <div className={`mb-4 text-center ${theme ==='dark' ? 'text-light' : ''}`}>
        <div className={`mentorship-header text-center mb-3 ${isLoaded ? 'header-loaded' : ''}`}>
          <div className="header-icon-container mb-3">
            <FaGraduationCap className="header-icon" style={{ color: '#d9481c', fontSize: '2rem' }} />
          </div>
          <h1 className="mentorship-title" style={{
            background: 'linear-gradient(45deg, #d9481c, #ff6b35)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Expert Mentorship Program
          </h1>
          <p className="mentorship-subtitle" style={{
            color: theme === 'dark' ? '#ffffff' : '#6c757d',
            fontSize: '1.1rem',
            marginBottom: '1.5rem'
          }}>
            Connect with industry leaders from top tech companies and accelerate your career journey
          </p>
          <div className="header-stats d-flex justify-content-center gap-4 mt-3">
            <div className="stat-item">
              <div className="stat-number" style={{
                color: theme === 'dark' ? '#ffffff' : '#d9481c',
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                {mentors.length}+
              </div>
              <div className="stat-label" style={{
                color: theme === 'dark' ? '#ffffff' : '#6c757d',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Expert Mentors
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{
                color: theme === 'dark' ? '#ffffff' : '#d9481c',
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                50+
              </div>
              <div className="stat-label" style={{
                color: theme === 'dark' ? '#ffffff' : '#6c757d',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Companies
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{
                color: theme === 'dark' ? '#ffffff' : '#d9481c',
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                500+
              </div>
              <div className="stat-label" style={{
                color: theme === 'dark' ? '#ffffff' : '#6c757d',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Success Stories
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Filter Dropdown */}
      <div className="align-items-center mb-4 col-12">
        <div className="col-md-6 col-lg-4 col-xl-4 col-8 m-auto">
          <select
            className={`form-select ${theme === 'dark' ? 'bg-dark text-light' : ''}`}
            style={{borderColor:'#555'}}
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
      </div>

      {/* Mentor Cards */}
      <div className="row">
        {filteredMentors.map((mentor, index) => (
          <MentorCard mentor={mentor} key={index} theme={theme} /> // Pass theme to MentorCard
        ))}
      </div>
      
      {/* Join as a Mentor Section */}
      <div
        className="join-mentor-section d-flex flex-wrap align-items-center justify-content-between p-4 mb-5 overflow-hidden"
        style={{
          backgroundColor: "#191919", // Lighter transparency
          borderRadius: "10px",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left-aligned text */}
        <div className="text-section">
          <h2 className="mb-2">Become a Mentor</h2>
          <p className="mb-0">
            Share your expertise and guide aspiring developers by joining our mentorship program.
          </p>
        </div>

        {/* Right-aligned button */}
        <a
          href="/mentorship/onboard"
          className="btn btn-danger join-mentor-btn px-4 py-2 d-flex align-items-center justify-content-center"
          style={{
            fontWeight: "bold",
            borderRadius: "8px",
            backgroundColor: "#d9481c",
            flexShrink: 0, // Ensures the button doesn't shrink on smaller screens
          }}
        >
          Join as a Mentor
        </a>
      </div>

      {/* Inline CSS for advanced responsiveness & hover effects */}
      <style> 
        {`
          .join-mentor-section {
           position: relative;
    overflow: hidden;
    transition: background-color 0.4s ease;
  }

  .join-mentor-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: skewX(-25deg);
    transition: all 0.5s ease;
  }

  .join-mentor-section:hover::before {
    left: 100%;
  }
          
          .text-section {
            max-width: 70%;
          }

          .join-mentor-btn {
            position: relative;
            overflow: hidden;
            transition: background-color 0.4s ease;
          }
          .join-mentor-btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            transform: skewX(-25deg);
            transition: all 0.5s ease;
          }
          .join-mentor-btn:hover {
            background-color: #c82333;
          }
          .join-mentor-btn:hover::before {
            left: 100%;
          }

          @media (max-width: 768px) {
            .join-mentor-section {
              padding: 16px;
              text-align: center;
              flex-direction: column;
              text-align: center;
            }
            .text-section {
              max-width: 100%;
              margin-bottom: 10px;
            }
            .join-mentor-btn {
              margin-top: 10px;
              width: 100%;
              max-width: 250px;
            }
          }

          @media (max-width: 480px) {
            .join-mentor-btn {
              font-size: 14px;
              padding: 8px 14px;
            }
          }
        `}
      </style>
    </div>
  );
};


export default MentorshipPage;

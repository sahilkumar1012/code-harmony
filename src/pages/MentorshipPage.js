import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { FaCode, FaCogs, FaGraduationCap, FaLinkedin, FaRocket, FaUsers, FaUserTie } from "react-icons/fa";
import { default as adobeLogo, default as adobeLogoDark } from "../../src/assets/adobe-dark.png";
import amazonLogoDark from "../../src/assets/amazon-dark.png";
import amazonLogo from "../../src/assets/amazon.png";
import { default as geLogo, default as geLogoDark } from "../../src/assets/ge.jpeg";
import goldmanLogo from "../../src/assets/goldman.png";
import googleLogoDark from "../../src/assets/google-dark.png"; // Dark theme logo
import googleLogo from "../../src/assets/google.png"; // Company logos
import { default as jpmcLogo, default as jpmcLogoDark } from "../../src/assets/jpmc.jpeg";
import microsoftLogoDark from "../../src/assets/microsoft-dark.png";
import microsoftLogo from "../../src/assets/microsoft.png";
import paypalLogo from "../../src/assets/paypal.png";
import sdLogo from "../../src/assets/sd.png";
import walmartLogo from "../../src/assets/Walmart Logo.png";




import asmaPic from "../../src/assets/mentors/asma.jpg";
import chiragPic from "../../src/assets/mentors/chirag.jpeg";
import manikyaPic from "../../src/assets/mentors/manikya.jpeg";
import mkvPic from "../../src/assets/mentors/mkv.jpeg";
import piyushGiriPic from "../../src/assets/mentors/piyushgiri.jpeg";
import sahilPic from "../../src/assets/mentors/sahil.jpeg";
import siddarthPic from "../../src/assets/mentors/siddarth.png";


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
      { name: "Google", logo: googleLogo },
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
];

const MentorCard = ({ mentor, theme, index}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + index * 150); // Staggered animation
    return () => clearTimeout(timer);
  }, [index]);

  // Function to get logo based on the theme
  const getCompanyLogo = (company) => {
    const logoMap = {
      Google: theme === "dark" ? googleLogoDark : googleLogo,
      Microsoft: theme === "dark" ? microsoftLogoDark : microsoftLogo,
      Amazon: theme === "dark" ? amazonLogoDark : amazonLogo,
      Adobe: theme === "dark" ? adobeLogoDark : adobeLogo,
      jpmc: theme === "dark" ? jpmcLogoDark : jpmcLogo,
      ge: theme === "dark" ? geLogoDark : geLogo,
    };
    return logoMap[company.name] || company.logo;
  };

  // Get expertise icon
  const getExpertiseIcon = (expertise) => {
    const iconMap = {
      "Frontend": <FaCode className="me-1" />,
      "Backend": <FaCogs className="me-1" />,
      "DSA": <FaGraduationCap className="me-1" />,
      "System Design": <FaRocket className="me-1" />,
      "Leadership": <FaUsers className="me-1" />,
      "Product Management": <FaUserTie className="me-1" />
    };
    return iconMap[expertise] || <FaCode className="me-1" />;
  };

  return (
    <div
      className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div
        className={`mentor-card position-relative overflow-hidden ${theme === 'dark' ? 'mentor-card-dark' : 'mentor-card-light'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Gradient overlay */}
        <div className={`mentor-card-overlay ${isHovered ? 'mentor-card-overlay-active' : ''}`}></div>

        {/* Profile image with enhanced styling */}
        <div className="mentor-image-container position-relative">
          <img
            src={mentor.profilePicture}
            className="mentor-profile-image"
            alt={`${mentor.name}'s profile`}
          />
          <div className="mentor-image-border"></div>
        </div>

        <div className="card-body text-center position-relative">
          <h5 className={`mentor-name ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
            {mentor.name}
          </h5>

          {/* Company logos with enhanced styling */}
          <div className="company-logos-container mb-3">
            {mentor.companies.map((company, idx) => (
              <div key={idx} className="company-logo-wrapper">
                <img
                  src={getCompanyLogo(company)}
                  alt={`${company.name} logo`}
                  className="company-logo"
                  title={company.name}
                />
              </div>
            ))}
          </div>

          {/* Expertise tags with icons */}
          <div className="expertise-container mb-3">
            <div className="expertise-tags">
              {mentor.expertise.map((skill, idx) => (
                <span key={idx} className={`expertise-tag ${theme === 'dark' ? 'expertise-tag-dark' : 'expertise-tag-light'}`}>
                  {getExpertiseIcon(skill)}
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons with enhanced styling */}
          <div className="mentor-actions d-flex gap-2 justify-content-center">
            {mentor.linkedIn && (
              <a
                href={mentor.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mentor-btn mentor-btn-linkedin"
              >
                <FaLinkedin className="me-2" />
                LinkedIn
              </a>
            )}
            {mentor.topmate && (
              <a
                href={mentor.topmate}
                target="_blank"
                rel="noopener noreferrer"
                className="mentor-btn mentor-btn-topmate"
              >
                <FaUserTie className="me-2" />
                Guidance
              </a>
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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredMentors = mentors.filter((mentor) =>
    filter ? mentor.expertise.includes(filter) : true
  );

  const expertiseOptions = [
    { value: "", label: "All Expertise", icon: <FaUsers /> },
    { value: "Frontend", label: "Frontend", icon: <FaCode /> },
    { value: "Backend", label: "Backend", icon: <FaCogs /> },
    { value: "DSA", label: "DSA", icon: <FaGraduationCap /> },
    { value: "System Design", label: "System Design", icon: <FaRocket /> },
    { value: "Leadership", label: "Leadership", icon: <FaUsers /> },
    { value: "Product Management", label: "Product Management", icon: <FaUserTie /> }
  ];

  return (
    <div className={`mentorship-page ${theme === 'dark' ? 'mentorship-page-dark' : 'mentorship-page-light'}`}>
      <div className="container mt-5 position-relative">
        {/* Enhanced Header Section */}
        <div className={`mentorship-header text-center mb-3 ${isLoaded ? 'header-loaded' : ''}`}>
          <div className="header-icon-container mb-3">
            <FaGraduationCap className="header-icon" />
          </div>
          <h1 className={`mentorship-title ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
            Expert Mentorship Program
          </h1>
          <p className={`mentorship-subtitle ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
            Connect with industry leaders from top tech companies and accelerate your career journey
          </p>
          <div className="header-stats d-flex justify-content-center gap-4 mt-3">
            <div className="stat-item">
              <div className={`stat-number ${theme === 'dark' ? 'text-light' : 'text-primary'}`}>
                {mentors.length}+
              </div>
              <div className={`stat-label ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                Expert Mentors
              </div>
            </div>
            <div className="stat-item">
              <div className={`stat-number ${theme === 'dark' ? 'text-light' : 'text-primary'}`}>
                50+
              </div>
              <div className={`stat-label ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                Companies
              </div>
            </div>
            <div className="stat-item">
              <div className={`stat-number ${theme === 'dark' ? 'text-light' : 'text-primary'}`}>
                1000+
              </div>
              <div className={`stat-label ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                Success Stories
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Filter Section */}
        <div className="filter-section mb-4">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="filter-container">
                <label className={`filter-label ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                  <FaCogs className="me-2" />
                  Filter by Expertise
                </label>
                <select
                  className={`form-select filter-select ${theme === 'dark' ? 'filter-select-dark' : 'filter-select-light'}`}
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {expertiseOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Mentor Cards with enhanced grid */}
        <div className="mentors-grid">
          <div className="row g-4">
            {filteredMentors.map((mentor, index) => (
              <MentorCard mentor={mentor} key={index} theme={theme} index={index} />
            ))}
          </div>
        </div>

        {/* Enhanced Join as a Mentor Section */}
        <div className={`join-mentor-section ${theme === 'dark' ? 'join-mentor-section-dark' : 'join-mentor-section-light'}`}>
          <div className="join-mentor-content">
            <div className="join-mentor-text">
              <h2 className="join-mentor-title">
                <FaRocket className="me-3" />
                Become a Mentor
              </h2>
              <p className="join-mentor-description">
                Share your expertise and guide aspiring developers by joining our mentorship program.
                Make a lasting impact on the next generation of tech professionals.
              </p>
            </div>
            <div className="join-mentor-action">
              <a
                href="/mentorship/onboard"
                className="join-mentor-btn"
              >
                <FaUserTie className="me-2" />
                Join as a Mentor
                <FaRocket className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MentorshipPage;

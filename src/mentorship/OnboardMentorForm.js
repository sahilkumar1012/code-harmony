import { useState } from "react";
import { FaBriefcase, FaEnvelope, FaGraduationCap, FaHeart, FaLinkedin, FaPaperPlane, FaPhone, FaRocket, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { arrayUnion, doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { app } from '../firebaseConfig';

import './OnboardMentorForm.css';

const OnboardMentorForm = ({theme}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    linkedIn: "",
    topmate: "",
    experience: "", // Added experience field
    expertise: "",  // Added expertise field
    motivation: "", // Added motivation field
  });
  const [errors, setErrors] = useState({});
  const db = getFirestore(app);

  const validateField = (name, value) => {
    if (!value && name !== "mobile") {
      return "This field is required";
    }
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Invalid email format";
    }
    if ((name === "linkedIn" || name === "topmate") && !/^https?:\/\//.test(value)) {
      return "Must be a valid URL starting with http:// or https://";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validateField(name, value) }));
  };


  const addMentorOnboardingRequest = async (formData) => {
    const mentorOnboardingDoc = doc(db, "requests", "mentorOnboarding");

    try {
      const docSnap = await getDoc(mentorOnboardingDoc);

      const mentorData = {
        ...formData,
        status: "new",
        createdAt: new Date(),
      };

      if (!docSnap.exists()) {
        await setDoc(mentorOnboardingDoc, {
          mentorOnboarding: [mentorData],
        });
        console.log("Document created and request added.");
      } else {
        await updateDoc(mentorOnboardingDoc, {
          mentorOnboarding: arrayUnion(mentorData),
        });
        console.log("Mentor onboarding request added successfully!");
      }
    } catch (error) {
      console.error("Error adding mentor onboarding request:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const isConfirmed = window.confirm("Are you ready to submit the mentor onboarding request?");
    if (!isConfirmed) return;

    // TODO save data in the database 
    addMentorOnboardingRequest(formData);

    // TODO send an email to codeharmony mentor onboarding team. ( codeharmonyofficial@gmail.com )
    // mentorOnboardingRequestEmail(formData);

    console.log("Form Data Submitted:", formData);
    alert("Mentor onboarding request sent.");

    setFormData({ name: "", email: "", mobile: "", linkedIn: "", topmate: "" });
    setErrors({});
  };

  // Get field icon
  const getFieldIcon = (fieldName) => {
    const iconMap = {
      name: <FaUser className="field-icon" />,
      email: <FaEnvelope className="field-icon" />,
      mobile: <FaPhone className="field-icon" />,
      linkedIn: <FaLinkedin className="field-icon" />,
      topmate: <FaGraduationCap className="field-icon" />,
      experience: <FaBriefcase className="field-icon" />,
      expertise: <FaRocket className="field-icon" />,
      motivation: <FaHeart className="field-icon" />
    };
    return iconMap[fieldName] || <FaUser className="field-icon" />;
  };

  return (
    <div className={`mentor-form-page ${theme === 'dark' ? 'mentor-form-page-dark' : 'mentor-form-page-light'}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            {/* Enhanced Header */}
            <div className="mentor-form-header text-center mb-5">
              <div className="header-icon-container mb-3">
                <FaGraduationCap className="header-icon" />
              </div>
              <h1 className={`mentor-form-title ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                Become a Mentor at Code Harmony
              </h1>
              <p className={`mentor-form-subtitle ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                Fill out this form to submit a request to become a mentor at Code Harmony and guide future developers.
                Share your expertise and help aspiring programmers grow!
              </p>
            </div>

            {/* Enhanced Form */}
            <form onSubmit={handleSubmit} className={`mentor-form ${theme === 'dark' ? 'mentor-form-dark' : 'mentor-form-light'}`}>
              {Object.entries(formData).map(([key, value]) => (
                <div className="form-group" key={key}>
                  <label className={`form-label ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    {getFieldIcon(key)}
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    {key === "mobile" ? " (Optional)" : ""}
                  </label>
                  <div className="input-container">
                    {key === "experience" || key === "expertise" || key === "motivation" ? (
                      <textarea
                        name={key}
                        className={`form-control ${theme === 'dark' ? 'form-control-dark' : 'form-control-light'} ${errors[key] ? "error" : ""}`}
                        value={value}
                        onChange={handleChange}
                        rows="3"
                        placeholder={
                          key === "experience" ? "e.g., 5+ years in Software Development, experience leading teams" :
                          key === "expertise" ? "e.g., DSA, Backend Development, React, Node.js, Agile methodologies" :
                          key === "motivation" ? "e.g., Passionate about sharing knowledge, helping others grow, and contributing to the community" : ""
                        }
                      />
                    ) : (
                      <input
                        type={key === "email" ? "email" : key === "linkedIn" || key === "topmate" ? "url" : "text"}
                        name={key}
                        className={`form-control ${theme === 'dark' ? 'form-control-dark' : 'form-control-light'} ${errors[key] ? "error" : ""}`}
                        value={value}
                        onChange={handleChange}
                      />
                    )}
                    {errors[key] && <div className="error-message">{errors[key]}</div>}
                  </div>
                </div>
              ))}

              {/* Enhanced Action Buttons */}
              <div className="form-actions">
                <button
                  type="button"
                  className="mentor-form-cancel-btn"
                  onClick={() => navigate("/mentorship")}
                >
                  <FaRocket className="me-2" />
                  Cancel
                </button>
                <button type="submit" className="mentor-form-submit-btn">
                  <FaPaperPlane className="me-2" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardMentorForm;
import { useState } from "react";
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
  const [loading, setLoading] = useState(false);
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

  return (
    <div className={`container mentor-form-container ${theme === "dark" ? "dark-mode" : ""}`}>
  <div className="row justify-content-center">
    <div className="col-12 col-md-10 col-lg-8 p-4">
      <h2
        className="text-center mb-4"
        style={theme === "dark" ? {
          color: '#ffffff !important',
          background: 'none !important',
          backgroundImage: 'none !important',
          WebkitBackgroundClip: 'initial !important',
          WebkitTextFillColor: '#ffffff !important',
          backgroundClip: 'initial !important'
        } : {}}
      >
        Become a Mentor at Code Harmony
      </h2>
      <p
        className="text-center mb-4"
        style={theme === "dark" ? {
          color: '#ffffff !important',
          background: 'none !important',
          backgroundImage: 'none !important',
          WebkitBackgroundClip: 'initial !important',
          WebkitTextFillColor: '#ffffff !important',
          backgroundClip: 'initial !important'
        } : {}}
      >
        Fill out this form to submit a request to become a mentor at Code Harmony and guide future developers. Share your expertise and help aspiring programmers grow!
      </p>
      <form onSubmit={handleSubmit} className={`shadow p-4 rounded ${theme === "dark" ? "dark-form" : "bg-light"}`}>

            {Object.entries(formData).map(([key, value]) => (
              <div className="mb-3" key={key}>
                <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)} {key=="mobile" ? " (Optional)" : ""}</label>
                {key === "experience" || key === "expertise" || key === "motivation" ? (
                  <textarea
                    name={key}
                    className={`form-control ${errors[key] ? "border border-danger" : ""}`}
                    value={value}
                    onChange={handleChange}
                    rows="2" 
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
                    className={`form-control ${errors[key] ? "border border-danger" : ""}`}
                    value={value}
                    onChange={handleChange}
                  />
                )}
                {errors[key] && <small className="text-danger">{errors[key]}</small>}
              </div>
            ))}
            <br></br>

            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary mentor-form-cancel-btn" onClick={() => navigate("/mentorship")}>
                Cancel
              </button>
              <button type="submit" className="btn mentor-form-submit-btn">
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default OnboardMentorForm;
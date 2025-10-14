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
    <div className="container-fluid" style={{
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      minHeight: '100vh',
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="text-center mb-4">
            <div className="mb-3">
              <span style={{ fontSize: '2.5rem', color: '#d9481c' }}>🎓</span>
            </div>
            <h2 className="mb-3" style={{ color: '#d9481c', fontWeight: '600', fontSize: '1.8rem' }}>
              Become a Mentor at Code Harmony
            </h2>
            <p className="mb-4" style={{
              color: theme === 'dark' ? '#ecf0f1' : '#666666',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
              Fill out this form to submit a request to become a mentor at Code Harmony and guide future developers. Share your expertise and help aspiring programmers grow!
            </p>
          </div>
          <div style={{
            backgroundColor: theme === 'dark' ? '#000000' : '#f8f9fa',
            borderRadius: '12px',
            padding: '2rem',
            border: theme === 'dark' ? '1px solid #333333' : '1px solid #e9ecef',
            boxShadow: theme === 'dark' ? 'none' : '0 0 20px rgba(0, 0, 0, 0.1)'
          }}>
            <form onSubmit={handleSubmit}>
            {Object.entries(formData).map(([key, value]) => (
              <div className="mb-4" key={key}>
                <label className={`form-label ${theme === 'dark' ? 'text-white-dark' : 'text-dark-light'}`} style={{
                  fontWeight: '500',
                  marginBottom: '0.5rem'
                }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)} {key=="mobile" ? " (Optional)" : ""}
                </label>
                {key === "experience" || key === "expertise" || key === "motivation" ? (
                  <textarea
                    name={key}
                    className={`form-control ${theme === 'dark' ? 'form-control-dark' : 'form-control-light'} ${errors[key] ? "border-danger" : ""}`}
                    style={{
                      borderRadius: '6px',
                      padding: '12px',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
                    }}
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
                    className={`form-control ${theme === 'dark' ? 'form-control-dark' : 'form-control-light'} ${errors[key] ? "border-danger" : ""}`}
                    style={{
                      borderRadius: '6px',
                      padding: '12px',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
                    }}
                    value={value}
                    onChange={handleChange}
                  />
                )}
                {errors[key] && <small className="text-danger" style={{ fontSize: '0.85rem' }}>{errors[key]}</small>}
              </div>
            ))}
            <div className="d-flex justify-content-between gap-3 mt-4">
              <button
                type="button"
                className="btn mentor-form-cancel-btn"
                onClick={() => navigate("/mentorship")}
                style={{
                  backgroundColor: theme === 'dark' ? '#6c757d' : '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '12px 24px',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease'
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn mentor-form-submit-btn"
                style={{
                  backgroundColor: '#d9481c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '12px 24px',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease'
                }}
              >
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
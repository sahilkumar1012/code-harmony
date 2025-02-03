import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardMentorForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    linkedIn: "",
    topmate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value && !value.startsWith("http://") && !value.startsWith("https://")) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: `https://${value}`,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isConfirmed = window.confirm("Are you ready to submit the mentor onboarding request?");
    if (!isConfirmed) return;

    console.log("Form Data Submitted:", formData);
    alert("Mentor onboarding request sent.");

    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      mobile: "",
      linkedIn: "",
      topmate: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h2 className="text-center mb-4">Become a Mentor</h2>

          <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile (Optional)</label>
              <input
                type="text"
                name="mobile"
                className="form-control"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">LinkedIn Profile</label>
              <input
                type="url"
                name="linkedIn"
                className="form-control"
                value={formData.linkedIn}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Topmate URL</label>
              <input
                type="url"
                name="topmate"
                className="form-control"
                value={formData.topmate}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </div >
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={() => navigate("/mentorship")}>
                Cancel
              </button>
              <button type="submit" className="btn" style={{ backgroundColor: "#d9481c", color: "white" }}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default OnboardMentorForm;

import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    description: "",
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to your backend here
    console.log(formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      service: "",
      description: "",
      termsAgreed: false,
    });
  };

  return (
    <div className="container mt-5 w3-padding-32">
      <div className="card p-4 w-50" >
        <form onSubmit={handleSubmit}
        className="w3-padding-64 w3-padding-large">
          {step === 1 && (
            <div>
              <h2>Step 1: Basic Information</h2>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control m-1"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control m-1"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control m-1"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                  <button 
                    className="btn btn-primary m-1" 
                    type="button" 
                    onClick={handleNext}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2>Step 2: Choose a Service</h2>
              <select
                name="service"
                className="form-control m-1"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="web design">Web Design</option>
                <option value="graphics">Graphics</option>
                <option value="seo">SEO</option>
                <option value="digital marketing">Digital Marketing</option>
                <option value="other">Other</option>
              </select>
              <div className="d-flex justify-content-between mt-3">
                <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                  Back
                </button>
                <button type="button" className="btn btn-primary" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2>Step 3: Additional Information</h2>
              <textarea
                name="description"
                className="form-control m-1"
                placeholder="Tell us about your project..."
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              <div className="form-check m-1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">
                  I agree to the terms and conditions
                </label>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                  Back
                </button>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;

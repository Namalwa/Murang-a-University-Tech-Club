import React, { useState } from 'react';
import './Registration.css'; 

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: '',
    year: '',
    track: ''
  });

  const tracks = [
    "Cyber Security",
    "UI/UX",
    "Web Development",
    "Mobile Development",
    "Cloud Engineering",
    "Power Platform"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Additional logic can be added here (e.g., sending data to a server)
  };

  return (
    <div className="registration-container">
      <h2 className="registration-header">Registration Form</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course of Study:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            placeholder="Enter your course of study"
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year of Study:</label>
          <input
            type="number" // Changed to number for better validation
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            placeholder="Enter your year of study"
            min="1" // Ensure user enters a positive number
          />
        </div>
        <div className="form-group">
          <label htmlFor="track">Select Track:</label>
          <select
            id="track"
            name="track"
            value={formData.track}
            onChange={handleChange}
            required
          >
            <option value="">Select Track</option>
            {tracks.map((track, index) => (
              <option key={index} value={track}>
                {track}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default Registration;

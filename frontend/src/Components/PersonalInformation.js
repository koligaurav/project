import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalInformation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    education: '',
    occupation: '',
    employmentType: '',
    profession: '',
    monthlyIncome: '',
    workplaceAddress: '',
    employerTravelOption: '',
    workFromHomeDays: '',
    workFromHomeDaysBeforeCOVID: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOccupationChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      occupation: value,
      employmentType: '', // Clear additional fields when changing occupation
      profession: '',
      monthlyIncome: '',
      workplaceAddress: '',
      employerTravelOption: '',
      workFromHomeDays: '',
      workFromHomeDaysBeforeCOVID: ''
    });
  };

  return (
    <div className="personal-info-container">
      <h2>Personal Information</h2>
      <form className="personal-info-form">
        <div className="form-group">
          <label>1. Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="input-field" 
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>2. Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="input-field">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>3. Age</label>
            <input 
              type="number" 
              name="age" 
              value={formData.age} 
              onChange={handleChange} 
              className="input-field" 
              min="1"
            />
          </div>

          <div className="form-group">
            <label>4. Education</label>
            <select name="education" value={formData.education} onChange={handleChange} className="input-field">
              <option value="">Select</option>
              <option value="highschool">High School</option>
              <option value="bachelor">Bachelor's</option>
              <option value="master">Master's</option>
              <option value="phd">Ph.D.</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>5. Occupation</label>
          <select name="occupation" value={formData.occupation} onChange={handleOccupationChange} className="input-field">
            <option value="">Select</option>
            <option value="unemployed">Unemployed</option>
            <option value="jobseeker">Jobseeker</option>
            <option value="homemaker">Homemaker</option>
            <option value="student">Student</option>
            <option value="employed">Employed</option>
            <option value="dailywage">Daily Wage</option>
            <option value="retired">Retired</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Conditionally render extra questions when "Employed" is selected */}
        {formData.occupation === 'employed' && (
          <>
            <div className="form-group">
              <label>6. Type of Employment</label>
              <select name="employmentType" value={formData.employmentType} onChange={handleChange} className="input-field">
                <option value="">Select</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
                <option value="self-employed">Self-Employed</option>
              </select>
            </div>

            <div className="form-group">
              <label>7. Profession</label>
              <input 
                type="text" 
                name="profession" 
                value={formData.profession} 
                onChange={handleChange} 
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>8. Monthly Income</label>
              <input 
                type="number" 
                name="monthlyIncome" 
                value={formData.monthlyIncome} 
                onChange={handleChange} 
                className="input-field" 
                min="0"
              />
            </div>

            <div className="form-group">
              <label>9. Workplace Address</label>
              <input 
                type="text" 
                name="workplaceAddress" 
                value={formData.workplaceAddress} 
                onChange={handleChange} 
                className="input-field"
              />
            </div>

            {/* New questions 10, 11, 12 */}
            <div className="form-group">
              <label>10. Do you have an employer-provided travel option?</label>
              <select name="employerTravelOption" value={formData.employerTravelOption} onChange={handleChange} className="input-field">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="form-group">
              <label>11. How many days do you work from home without going to the office?</label>
              <input 
                type="number" 
                name="workFromHomeDays" 
                value={formData.workFromHomeDays} 
                onChange={handleChange} 
                className="input-field" 
                min="0"
              />
            </div>

            <div className="form-group">
              <label>12. Before COVID-2019, how many days did you work from home without going to the office?</label>
              <input 
                type="number" 
                name="workFromHomeDaysBeforeCOVID" 
                value={formData.workFromHomeDaysBeforeCOVID} 
                onChange={handleChange} 
                className="input-field" 
                min="0"
              />
            </div>
          </>
        )}

        {/* Form Buttons */}
        <div className="form-buttons">
          <button type="button" onClick={() => navigate(-1)}>Previous</button>
          <button type="button" onClick={() => navigate('/next-page')}>Continue</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;

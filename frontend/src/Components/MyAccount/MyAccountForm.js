import React, { useState } from 'react';

function MyAccountForm({ userDetails, setUserDetails, toggleEdit }) {
  const [name, setName] = useState(userDetails.name);
  const [email, setEmail] = useState(userDetails.email);

  const handleSubmit = () => {
    setUserDetails({ name, email });
    toggleEdit();
  };

  return (
    <div className="account-form">
      <div className="form-field">
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      
      <div className="form-field">
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      
      <button className="save-btn" onClick={handleSubmit}>Save</button>
      <button className="cancel-btn" onClick={toggleEdit}>Cancel</button>
    </div>
  );
}

export default MyAccountForm;

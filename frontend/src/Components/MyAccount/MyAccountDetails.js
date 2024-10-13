import React from 'react';

function MyAccountDetails({ userDetails, toggleEdit }) {
  return (
    <div className="account-details">
      <div className="detail">
        <label>Name:</label>
        <div>{userDetails.name}</div>
      </div>

      <div className="detail">
        <label>Email:</label>
        <div>{userDetails.email}</div>
      </div>

      <button className="edit-btn" onClick={toggleEdit}>Edit</button>
    </div>
  );
}

export default MyAccountDetails;

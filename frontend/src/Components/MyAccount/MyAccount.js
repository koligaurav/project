import React, { useState } from 'react';
import MyAccountDetails from './MyAccountDetails';
import MyAccountForm from './MyAccountForm';
import './MyAccount.css';

function MyAccount({ userDetails, setUserDetails }) {
  const [isEditing, setIsEditing] = useState(false);

  // Toggle between edit and view mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="my-account-container">
      <h2>My Account</h2>
      
      {/* Display the user details or form for editing */}
      {isEditing ? (
        <MyAccountForm 
          userDetails={userDetails} 
          setUserDetails={setUserDetails} 
          toggleEdit={toggleEdit} 
        />
      ) : (
        <MyAccountDetails 
          userDetails={userDetails} 
          toggleEdit={toggleEdit} 
        />
      )}
    </div>
  );
}

export default MyAccount;

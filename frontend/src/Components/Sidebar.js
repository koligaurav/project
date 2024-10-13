import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Household Travel Survey</h2>
      <ul>
        <li><Link to="/account">My Account</Link></li>
        <li><Link to="/household">Household Information</Link></li>
        <li><Link to="/personal">Personal Information</Link></li>
        <li><Link to="/activity">Out-of-Home Activity</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;

// src/Components/Home.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleStartSurvey = () => {
    navigate('/household-form'); // Change this to your route for the Household Form
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Household Survey</h1>
      <p>
        Thank you for participating in our survey. Your input is invaluable in helping us gather important information about household dynamics and resources.
      </p>
      <button onClick={handleStartSurvey} className="start-survey-button">
        Start the Survey
      </button>
    </div>
  );
};

export default Home;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import HouseholdForm from './Components/HouseholdForm';
import Header from './Components/Header';
import './App.css';  // Link the CSS file here
import MyAccount from './Components/MyAccount/MyAccount'; // Import MyAccount component
import LoginSignup from './Components/LoginSignup/LoginSignup'; // Import your new component
import Home from './Components/Home';
import PersonalInformation from './Components/PersonalInformation';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login-signup" element={<LoginSignup />} />
              <Route path="/account" element={<div>My Account Page</div>} />
              <Route path="/household" element={<HouseholdForm />} />
              <Route path="/personal" element={<PersonalInformation/>} />
              <Route path="/activity" element={<div>Out-of-Home Activity</div>} />

              <Route 
                path="/account" 
                element={ 
                  <MyAccount  />}/>
         
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

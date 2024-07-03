import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to Need Some Wine</h1>
        <p className="landing-description">Express your creativity through our painting services</p>
        <Link to="/home" className="btn-primary">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;

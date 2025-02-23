// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // We’ll add the styles here

function Home() {
  return (
    <div className="home-container">
      <div className="content-container">
        <h1>Welcome to The Evolution of Programming Languages</h1>
        <p>Explore how programming languages have evolved over time.</p>

        <div className="button-container">
          <Link to="/timeline">
            <button className="nav-button">Go to Timeline</button>
          </Link>
          <Link to="/testbench">
            <button className="nav-button">Go to Test Bench</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

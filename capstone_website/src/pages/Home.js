// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import landingImage from '../assets/chc_ascii.png';  // Your updated image import

function Home() {
  return (
    <div className="home-container">
      <div className="content-container">
        <h1>Evolution of Programming Languages</h1>
        <img src={landingImage} alt="Programming Languages Evolution" className="landing-image" />
        <p>
          This repository explores key programming languages from 1957 to the present, highlighting their impact and evolution.
        </p>
        
        <section className="languages-section">
          <h2>Languages Covered</h2>
          <ul className="languages-list">
            <li><strong>Machine Code & Assembly</strong> – Low-level hardware interaction</li>
            <li><strong>Fortran</strong> – Scientific computing</li>
            <li><strong>COBOL</strong> – Business applications</li>
            <li><strong>C</strong> – System programming and efficiency</li>
            <li><strong>Java</strong> – Platform independence and OOP</li>
            <li><strong>Python</strong> – Simplicity and versatility</li>
            <li><strong>JavaScript</strong> – Web interactivity</li>
            <li><strong>Go</strong> – Modern concurrency</li>
            <li><strong>Scratch</strong> – Introductory visual programming</li>
          </ul>
        </section>

        <section className="button-section">
          <Link to="/timeline" className="button">Explore the Timeline</Link>
          <Link to="/testbench" className="button">Go to the Test Bench</Link>
        </section>
      </div>
    </div>
  );
}

export default Home;

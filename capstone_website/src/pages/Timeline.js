// src/pages/Timeline.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Timeline.css';

function Timeline() {
  return (
    <div className="timeline-container">
      <h1>Programming Languages Evolution</h1>
      <div className="timeline">
        <div className="timeline-item">
          <span></span>
          <h3 className="text-above">Pre-1957: Machine Code & Assembly</h3>
          <p className="text-below">Low-level hardware interaction</p>
        </div>

        <div className="timeline-item">
          <span></span>
          <h3 className="text-above">1957: Fortran</h3>
          <p className="text-below">Scientific computing</p>
        </div>

        <div className="timeline-item">
          <span></span>
          <h3 className="text-above">1959: COBOL</h3>
          <p className="text-below">Business applications</p>
        </div>

        <div className="timeline-item">
          <span></span>
          <h3 className="text-above">1972: C</h3>
          <p className="text-below">System programming and efficiency</p>
        </div>

        <div className="timeline-item">
          <span></span>
          <h3 className="text-above">1995: Java</h3>
          <p className="text-below">Platform independence and OOP</p>
        </div>

        <div className="timeline-item">
          <span></span>
          <h3 className="text-above">1991: Python</h3>
          <p className="text-below">Simplicity and versatility</p>
        </div>

        <div className="timeline-item">
          <span></span>
          <h3 className="text-above">1995: JavaScript</h3>
          <p className="text-below">Web interactivity</p>
        </div>

        <div className="timeline-item">
          <span></span>
          <h3 className="text-above">2007: Scratch</h3>
          <p className="text-below">Introductory visual programming</p>
        </div>

        <div className="timeline-item">
          <span></span>
          <h3 className="text-above">2009: Go</h3>
          <p className="text-below">Modern concurrency</p>
        </div>
      </div>

      {/* Back to Home button */}
      <Link to="/" className="back-home-btn">Back to Home</Link>
    </div>
  );
}

export default Timeline;

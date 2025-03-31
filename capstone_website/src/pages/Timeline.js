// src/pages/Timeline.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Timeline.css';

const languages = [
  {
    id: "machine-code",
    year: "Pre-1957",
    name: "Machine Code & Assembly",
    description: "The foundation of all programming - direct hardware interaction",
    image: "punch_cards.jpg"
  },
  {
    id: "fortran",
    year: "1957",
    name: "Fortran",
    description: "Pioneering scientific computing and high-performance applications"
  },
  // Add other languages following the same pattern
];

function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-content">
        <h1>Programming Languages Evolution</h1>
        
        <div className="timeline">
          <div className="timeline-items">
            {languages.map((lang) => (
              <div key={lang.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <Link to={`/timeline/${lang.id}`} className="timeline-card-link">
                  <div className="timeline-card">
                    <div className="timeline-year">{lang.year}</div>
                    <h3>{lang.name}</h3>
                    <p>{lang.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/" className="back-home-btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
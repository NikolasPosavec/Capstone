import React from 'react';
import { Link } from 'react-router-dom';
import './Timeline.css';

const languages = [
  {
    id: "machine-code",
    year: "Pre-1957",
    name: "Machine Code & Assembly",
    description: "The foundation of all programming - direct hardware interaction"
  },
  {
    id: "fortran",
    year: "1957",
    name: "Fortran",
    description: "Pioneering scientific computing"
  },
  {
    id: "cobol",
    year: "1959",
    name: "COBOL",
    description: "Business-oriented language for enterprises"
  },
  {
    id: "c",
    year: "1972",
    name: "C",
    description: "System programming and efficiency"
  },
  {
    id: "python",
    year: "1991",
    name: "Python",
    description: "Simplicity and versatility"
  },
  {
    id: "java",
    year: "1995",
    name: "Java",
    description: "Platform independence and OOP"
  },
  {
    id: "javascript",
    year: "1995",
    name: "JavaScript",
    description: "Web interactivity"
  },
  {
    id: "scratch",
    year: "2007",
    name: "Scratch",
    description: "Introductory visual programming"
  },
  {
    id: "go",
    year: "2009",
    name: "Go",
    description: "Modern concurrency"
  }
];

function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-content">
        <h1>Programming Languages Evolution</h1>
        
        <div className="timeline">
          <div className="timeline-items">
            {languages.map((lang, index) => (
              <div 
                key={lang.id} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-dot"></div>
                <Link to={`/timeline/${lang.id}`} className="timeline-card">
                  <div className="timeline-year">{lang.year}</div>
                  <h3>{lang.name}</h3>
                  <p>{lang.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-footer">
          <Link to="/" className="back-home-btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
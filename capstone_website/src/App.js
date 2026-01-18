// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import TimelineEntry from './pages/TimelineEntry';
import WorksCited from './pages/WorksCited';
import PresentationMode from './pages/PresentationMode'; // Add this import
import './App.css';
import octocatLogo from './assets/octocat.png';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const basename = process.env.PUBLIC_URL || '/';

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <Router basename={basename}>
      <a 
        href="https://github.com/NikolasPosavec" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="github-button"
      >
        <img src={octocatLogo} alt="GitHub" className="github-logo" />
        <span>GitHub</span>
      </a>
      
      <div className={`theme-toggle ${darkMode ? 'dark' : 'light'}`} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/timeline/:id" element={<TimelineEntry />} />
        <Route path="/workscited" element={<WorksCited />} />
        <Route path="/presentation" element={<PresentationMode />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;

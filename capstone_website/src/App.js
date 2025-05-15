import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import TimelineEntry from './pages/TimelineEntry';
import WorksCited from './pages/WorksCited';
import './App.css';
import octocatLogo from './assets/octocat.png';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <Router>
      <div className="fixed-buttons">
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
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/timeline/:id" element={<TimelineEntry />} />
        <Route path="/workscited" element={<WorksCited />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import the pages
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import TestBench from './pages/TestBench';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/testbench" element={<TestBench />} />
      </Routes>
    </Router>
  );
}

export default App;

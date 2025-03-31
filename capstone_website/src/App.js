// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import TimelineEntry from './pages/TimelineEntry';
import TestBench from './pages/TestBench';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/timeline/:id" element={<TimelineEntry />} />
        <Route path="/testbench" element={<TestBench />} />
      </Routes>
    </Router>
  );
}

export default App;
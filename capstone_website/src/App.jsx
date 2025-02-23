import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Timeline } from './pages/Timeline';
import { TestBench } from './pages/TestBench';
import './App.css';
import './styles.css';

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
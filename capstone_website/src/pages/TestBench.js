// src/pages/TestBench.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TestBench.css';

function TestBench() {
  const [languageOne, setLanguageOne] = useState('JavaScript');
  const [languageTwo, setLanguageTwo] = useState('Python');
  const [codeOne, setCodeOne] = useState('');
  const [codeTwo, setCodeTwo] = useState('');
  const [resultOne, setResultOne] = useState('');
  const [resultTwo, setResultTwo] = useState('');

  const handleLanguageOneChange = (e) => {
    setLanguageOne(e.target.value);
  };

  const handleLanguageTwoChange = (e) => {
    setLanguageTwo(e.target.value);
  };

  const handleCodeOneChange = (e) => {
    setCodeOne(e.target.value);
  };

  const handleCodeTwoChange = (e) => {
    setCodeTwo(e.target.value);
  };

  const executeCode = () => {
    // Simulating the execution of the code for comparison
    setResultOne(`Executed ${languageOne} code: \n${codeOne}`);
    setResultTwo(`Executed ${languageTwo} code: \n${codeTwo}`);
  };

  return (
    <div className="testbench-container">
      <h1>Programming Language Test Bench</h1>
      
      {/* Language 1 and Code 1 */}
      <div className="testbench-controls">
        <label htmlFor="language-one">Choose First Language:</label>
        <select id="language-one" value={languageOne} onChange={handleLanguageOneChange}>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          {/* Add more languages if needed */}
        </select>
      </div>

      <div className="testbench-code">
        <label htmlFor="code-one">Enter Code for {languageOne}:   </label>
        <textarea
          id="code-one"
          rows="10"
          cols="50"
          value={codeOne}
          onChange={handleCodeOneChange}
        ></textarea>
      </div>

      {/* Language 2 and Code 2 */}
      <div className="testbench-controls">
        <label htmlFor="language-two">Choose Second Language:</label>
        <select id="language-two" value={languageTwo} onChange={handleLanguageTwoChange}>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          {/* Add more languages if needed */}
        </select>
      </div>

      <div className="testbench-code">
        <label htmlFor="code-two">Enter Code for {languageTwo}:   </label>
        <textarea
          id="code-two"
          rows="10"
          cols="50"
          value={codeTwo}
          onChange={handleCodeTwoChange}
        ></textarea>
      </div>

      <button className="execute-btn" onClick={executeCode}>Compare Code</button>

      {/* Display Results */}
      <div className="testbench-results">
        <div className="result">
          <h3>{languageOne} Result:</h3>
          <pre>{resultOne}</pre>
        </div>
        <div className="result">
          <h3>{languageTwo} Result:</h3>
          <pre>{resultTwo}</pre>
        </div>
      </div>

      {/* Back to Home button */}
      <Link to="/" className="back-home-btn">Back to Home</Link>
    </div>
  );
}

export default TestBench;

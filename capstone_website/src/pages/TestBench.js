// src/pages/TestBench.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TestBench.css';
import { FaBalanceScale, FaClock, FaMemory, FaChartLine, FaMicrochip } from 'react-icons/fa';

function TestBench() {
  const languages = [
    {
      name: "Machine Code & Assembly",
      description: "The foundation of all programming - direct hardware interaction",
      example: "mov eax, 1\nmov ebx, 2\nadd eax, ebx"
    },
    {
      name: "Fortran",
      description: "Pioneering scientific computing and high-performance applications",
      example: "program hello\n  print *, 'Hello, World!'\nend program hello"
    },
    {
      name: "COBOL",
      description: "Business-oriented language that powered early enterprise systems",
      example: "IDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO.\nPROCEDURE DIVISION.\n    DISPLAY 'Hello, World!'.\nSTOP RUN."
    },
    {
      name: "C",
      description: "The building block of modern system programming and operating systems",
      example: "#include <stdio.h>\n\nint main() {\n  printf(\"Hello, World!\");\n  return 0;\n}"
    },
    {
      name: "Java",
      description: "\"Write once, run anywhere\" revolutionized cross-platform development",
      example: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, World!\");\n  }\n}"
    },
    {
      name: "Python",
      description: "Readability and versatility made it today's most popular language",
      example: "print(\"Hello, World!\")"
    },
    {
      name: "JavaScript",
      description: "The language that brought interactivity to the web",
      example: "console.log(\"Hello, World!\");"
    },
    {
      name: "Go",
      description: "Modern language designed for efficient concurrency and scalability",
      example: "package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Hello, World!\")\n}"
    },
    {
      name: "Scratch",
      description: "Visual programming that introduces coding to new generations",
      example: "when green flag clicked\nsay [Hello, World!] for (2) seconds"
    }
  ];

  const [languageOne, setLanguageOne] = useState(languages[5]); // Python
  const [languageTwo, setLanguageTwo] = useState(languages[6]); // JavaScript
  const [codeOne, setCodeOne] = useState('');
  const [codeTwo, setCodeTwo] = useState('');
  const [resultOne, setResultOne] = useState('');
  const [resultTwo, setResultTwo] = useState('');
  const [comparison, setComparison] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    setCodeOne(languageOne.example);
    setCodeTwo(languageTwo.example);
  }, [languageOne, languageTwo]);

  const handleLanguageOneChange = (e) => {
    const selected = languages.find(lang => lang.name === e.target.value);
    setLanguageOne(selected);
    setResultOne('');
    setComparison(null);
  };

  const handleLanguageTwoChange = (e) => {
    const selected = languages.find(lang => lang.name === e.target.value);
    setLanguageTwo(selected);
    setResultTwo('');
    setComparison(null);
  };

  const handleCodeOneChange = (e) => {
    setCodeOne(e.target.value);
  };

  const handleCodeTwoChange = (e) => {
    setCodeTwo(e.target.value);
  };

  const analyzeCodeComplexity = (code) => {
    // Very simplistic complexity analysis
    const lines = code.split('\n').filter(line => line.trim().length > 0);
    const loops = code.match(/for|while|do/g)?.length || 0;
    const conditionals = code.match(/if|else|case/g)?.length || 0;
    
    if (loops > 2 || conditionals > 3) return 'O(n²)';
    if (loops > 0 || conditionals > 1) return 'O(n)';
    return 'O(1)';
  };

  const simulateExecution = (language, code) => {
    // Simulate different performance characteristics based on language
    const baseTime = Math.random() * 100 + 50; // 50-150ms base
    const baseMemory = Math.random() * 10 + 5; // 5-15MB base
    
    let timeFactor = 1;
    let memoryFactor = 1;
    let timeComplexity = analyzeCodeComplexity(code);
    let memoryComplexity = analyzeCodeComplexity(code);

    switch(language.name) {
      case 'Machine Code & Assembly':
        timeFactor = 0.2;
        memoryFactor = 0.5;
        break;
      case 'Fortran':
        timeFactor = 0.8;
        memoryFactor = 0.9;
        break;
      case 'COBOL':
        timeFactor = 1.5;
        memoryFactor = 1.2;
        break;
      case 'C':
        timeFactor = 0.7;
        memoryFactor = 0.7;
        break;
      case 'Java':
        timeFactor = 1.2;
        memoryFactor = 1.5;
        break;
      case 'Python':
        timeFactor = 1.8;
        memoryFactor = 1.7;
        break;
      case 'JavaScript':
        timeFactor = 1.5;
        memoryFactor = 1.3;
        break;
      case 'Go':
        timeFactor = 0.9;
        memoryFactor = 0.8;
        break;
      case 'Scratch':
        timeFactor = 2.5;
        memoryFactor = 2.0;
        break;
      default:
        timeFactor = 1;
        memoryFactor = 1;
    }

    const executionTime = (baseTime * timeFactor).toFixed(2);
    const memoryUsage = (baseMemory * memoryFactor).toFixed(2);

    return {
      executionTime,
      memoryUsage,
      timeComplexity,
      memoryComplexity,
      output: `Executed ${language.name} code:\n\n${code || 'No code provided'}\n\nOutput:\nHello, World!`
    };
  };

  const executeCode = () => {
    setIsExecuting(true);
    
    // Simulate execution delay
    setTimeout(() => {
      const result1 = simulateExecution(languageOne, codeOne);
      const result2 = simulateExecution(languageTwo, codeTwo);
      
      setResultOne(result1.output);
      setResultTwo(result2.output);
      
      setComparison({
        timeDifference: ((result1.executionTime - result2.executionTime) / result2.executionTime * 100).toFixed(2),
        memoryDifference: ((result1.memoryUsage - result2.memoryUsage) / result2.memoryUsage * 100).toFixed(2),
        metrics: {
          lang1: {
            executionTime: result1.executionTime,
            memoryUsage: result1.memoryUsage,
            timeComplexity: result1.timeComplexity,
            memoryComplexity: result1.memoryComplexity
          },
          lang2: {
            executionTime: result2.executionTime,
            memoryUsage: result2.memoryUsage,
            timeComplexity: result2.timeComplexity,
            memoryComplexity: result2.memoryComplexity
          }
        }
      });
      
      setIsExecuting(false);
    }, 1000);
  };

  const getEfficiencyBadge = (difference) => {
    const diff = parseFloat(difference);
    if (diff < -10) return { class: 'badge-success', text: 'Faster' };
    if (diff > 10) return { class: 'badge-danger', text: 'Slower' };
    return { class: 'badge-warning', text: 'Similar' };
  };

  return (
    <div className="testbench-container">
      <div className="testbench-content">
        <h1>Programming Language Test Bench</h1>
        
        <div className="testbench-grid">
          {/* First Language Column */}
          <div className="testbench-column">
            <div className="column-header">
              <h2>{languageOne.name} Code</h2>
              <div className="language-selector">
                <span className="language-selector-label">Select Language:</span>
                <select 
                  value={languageOne.name}
                  onChange={handleLanguageOneChange}
                >
                  {languages.map(lang => (
                    <option key={`lang1-${lang.name}`} value={lang.name}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="code-editor">
              <label htmlFor="code-one" className="code-label">
                {languageOne.description}
              </label>
              <textarea
                id="code-one"
                value={codeOne}
                onChange={handleCodeOneChange}
                placeholder={languageOne.example}
              />
            </div>
          </div>

          {/* Second Language Column */}
          <div className="testbench-column">
            <div className="column-header">
              <h2>{languageTwo.name} Code</h2>
              <div className="language-selector">
                <span className="language-selector-label">Select Language:</span>
                <select 
                  value={languageTwo.name}
                  onChange={handleLanguageTwoChange}
                >
                  {languages.map(lang => (
                    <option key={`lang2-${lang.name}`} value={lang.name}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="code-editor">
              <label htmlFor="code-two" className="code-label">
                {languageTwo.description}
              </label>
              <textarea
                id="code-two"
                value={codeTwo}
                onChange={handleCodeTwoChange}
                placeholder={languageTwo.example}
              />
            </div>
          </div>
        </div>

        <div className="execute-btn-container">
          <button 
            className="execute-btn" 
            onClick={executeCode}
            disabled={isExecuting}
          >
            {isExecuting ? 'Executing...' : 'Compare Code Execution'}
          </button>
        </div>

        {/* Comparison Metrics */}
        {comparison && (
          <div className="comparison-container">
            <div className="comparison-header">
              <FaBalanceScale /> Performance Comparison
            </div>
            
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-title">
                  <FaClock /> Execution Time
                </div>
                <div className="metric-value">
                  {languageOne.name}: {comparison.metrics.lang1.executionTime}ms
                  <span className={`efficiency-badge ${getEfficiencyBadge(comparison.timeDifference).class}`}>
                    {getEfficiencyBadge(comparison.timeDifference).text}
                  </span>
                </div>
                <div className="metric-value">
                  {languageTwo.name}: {comparison.metrics.lang2.executionTime}ms
                </div>
                <div className="metric-description">
                  Time Complexity: <span className="big-o-notation">
                    {comparison.metrics.lang1.timeComplexity} vs {comparison.metrics.lang2.timeComplexity}
                  </span>
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-title">
                  <FaMemory /> Memory Usage
                </div>
                <div className="metric-value">
                  {languageOne.name}: {comparison.metrics.lang1.memoryUsage}MB
                  <span className={`efficiency-badge ${getEfficiencyBadge(comparison.memoryDifference).class}`}>
                    {getEfficiencyBadge(comparison.memoryDifference).text}
                  </span>
                </div>
                <div className="metric-value">
                  {languageTwo.name}: {comparison.metrics.lang2.memoryUsage}MB
                </div>
                <div className="metric-description">
                  Memory Complexity: <span className="big-o-notation">
                    {comparison.metrics.lang1.memoryComplexity} vs {comparison.metrics.lang2.memoryComplexity}
                  </span>
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-title">
                  <FaChartLine /> Relative Performance
                </div>
                <div className="metric-value">
                  {Math.abs(comparison.timeDifference)}% {parseFloat(comparison.timeDifference) > 0 ? 'slower' : 'faster'}
                </div>
                <div className="metric-description">
                  {languageOne.name} is {Math.abs(comparison.timeDifference)}% {parseFloat(comparison.timeDifference) > 0 ? 'slower' : 'faster'} than {languageTwo.name} in execution time
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-title">
                  <FaMicrochip /> Memory Efficiency
                </div>
                <div className="metric-value">
                  {Math.abs(comparison.memoryDifference)}% {parseFloat(comparison.memoryDifference) > 0 ? 'more' : 'less'} memory
                </div>
                <div className="metric-description">
                  {languageOne.name} uses {Math.abs(comparison.memoryDifference)}% {parseFloat(comparison.memoryDifference) > 0 ? 'more' : 'less'} memory than {languageTwo.name}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Section */}
        {(resultOne || resultTwo) && (
          <div className="results-container">
            <div className="result-panel">
              <div className="result-header">
                <div className="result-title">{languageOne.name} Results</div>
              </div>
              <pre className="result-content">{resultOne}</pre>
            </div>
            <div className="result-panel">
              <div className="result-header">
                <div className="result-title">{languageTwo.name} Results</div>
              </div>
              <pre className="result-content">{resultTwo}</pre>
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <Link to="/" className="back-home-btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TestBench;
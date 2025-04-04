import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TestBench.css';
import { FaBalanceScale, FaClock, FaMemory } from 'react-icons/fa';
import { Highlight, themes } from 'prism-react-renderer';
import axios from 'axios';

// Code Compiler API Configuration
const CODE_COMPILER_API = {
  url: 'https://code-compiler.p.rapidapi.com/v2',
  key: '9c06a68623msh0d9e2121cbc0214p170d53jsn277073b7a1cc',
  host: 'code-compiler.p.rapidapi.com'
};

// Language mappings for Code Compiler API
const languageMappings = {
  'Python': '5',
  'JavaScript': '17',
  'Java': '4',
  'C': '6',
  'C++': '7'
};

function TestBench() {
  const languages = [
    {
      name: "Python",
      description: "High-level scripting",
      example: `def factorial(n):
    return 1 if n <= 1 else n * factorial(n-1)

print(factorial(20))`
    },
    {
      name: "JavaScript",
      description: "Web scripting language",
      example: `function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(20));`
    },
    {
      name: "Java",
      description: "Platform-independent OOP",
      example: `public class Main {
    public static long factorial(int n) {
        return n <= 1 ? 1 : n * factorial(n - 1);
    }
    
    public static void main(String[] args) {
        System.out.println(factorial(20));
    }
}`
    },
    {
      name: "C",
      description: "System programming language",
      example: `#include <stdio.h>

long factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

int main() {
    printf("%ld\\n", factorial(20));
    return 0;
}`
    },
    {
      name: "C++",
      description: "Object-oriented systems programming",
      example: `#include <iostream>

long factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

int main() {
    std::cout << factorial(20) << "\\n";
    return 0;
}`
    }
  ];

  const [languageOne, setLanguageOne] = useState(languages[1]); // JavaScript
  const [languageTwo, setLanguageTwo] = useState(languages[0]); // Python
  const [codeOne, setCodeOne] = useState('');
  const [codeTwo, setCodeTwo] = useState('');
  const [resultOne, setResultOne] = useState({ output: '', metrics: null });
  const [resultTwo, setResultTwo] = useState({ output: '', metrics: null });
  const [comparison, setComparison] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    setCodeOne(languageOne.example);
    setCodeTwo(languageTwo.example);
  }, [languageOne, languageTwo]);

  const handleLanguageOneChange = (e) => {
    const selected = languages.find(lang => lang.name === e.target.value);
    setLanguageOne(selected);
    setResultOne({ output: '', metrics: null });
    setComparison(null);
  };

  const handleLanguageTwoChange = (e) => {
    const selected = languages.find(lang => lang.name === e.target.value);
    setLanguageTwo(selected);
    setResultTwo({ output: '', metrics: null });
    setComparison(null);
  };

  const executeWithCodeCompiler = async (language, code) => {
    const langCode = languageMappings[language];
    if (!langCode) return { error: 'Language not supported' };

    const startTime = performance.now();
    
    const options = {
      method: 'POST',
      url: CODE_COMPILER_API.url,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': CODE_COMPILER_API.key,
        'X-RapidAPI-Host': CODE_COMPILER_API.host
      },
      data: new URLSearchParams({
        LanguageChoice: langCode,
        Program: code
      })
    };

    try {
      const response = await axios.request(options);
      const endTime = performance.now();
      
      // Estimate memory usage based on language (rough approximation)
      const memoryEstimate = {
        'Python': 4000,    // KB
        'JavaScript': 8000,
        'Java': 12000,
        'C': 2000,
        'C++': 2500
      }[language] || 0;
      
      return {
        output: response.data.Result || response.data.Errors || 'No output',
        time: endTime - startTime,
        memory: memoryEstimate,
        status: response.data.Errors ? 'Error' : 'Success'
      };
    } catch (error) {
      return {
        output: error.message,
        time: 0,
        memory: 0,
        status: 'Error'
      };
    }
  };

  const compareExecution = async () => {
    setIsExecuting(true);
    setComparison(null);

    // Execute both codes in parallel
    const [res1, res2] = await Promise.all([
      executeWithCodeCompiler(languageOne.name, codeOne),
      executeWithCodeCompiler(languageTwo.name, codeTwo)
    ]);

    setResultOne({
      output: res1.output,
      metrics: {
        time: res1.time,
        memory: res1.memory,
        status: res1.status
      }
    });

    setResultTwo({
      output: res2.output,
      metrics: {
        time: res2.time,
        memory: res2.memory,
        status: res2.status
      }
    });

    if (res1.time && res2.time) {
      setComparison({
        timeDifference: ((res1.time - res2.time) / res2.time * 100).toFixed(2),
        memoryDifference: ((res1.memory - res2.memory) / res2.memory * 100).toFixed(2)
      });
    }

    setIsExecuting(false);
  };

  const getEfficiencyBadge = (difference) => {
    if (difference === 'N/A') return { class: 'badge-warning', text: 'N/A' };
    const diff = parseFloat(difference);
    if (diff < -15) return { class: 'badge-success', text: 'Much Faster' };
    if (diff < -5) return { class: 'badge-success', text: 'Faster' };
    if (diff > 15) return { class: 'badge-danger', text: 'Much Slower' };
    if (diff > 5) return { class: 'badge-danger', text: 'Slower' };
    return { class: 'badge-warning', text: 'Similar' };
  };

  const getMemoryDescription = (difference) => {
    if (difference === 'N/A') return { class: 'badge-warning', text: 'N/A' };
    const diff = parseFloat(difference);
    if (diff < -15) return { class: 'badge-success', text: 'Much Less Memory' };
    if (diff < -5) return { class: 'badge-success', text: 'Less Memory' };
    if (diff > 15) return { class: 'badge-danger', text: 'Much More Memory' };
    if (diff > 5) return { class: 'badge-danger', text: 'More Memory' };
    return { class: 'badge-warning', text: 'Similar Memory' };
  };

  return (
    <div className="testbench-container">
      <div className="testbench-content">
        <h1>Programming Language Test Bench</h1>
        
        <div className="testbench-grid">
          <div className="testbench-column">
            <div className="column-header">
              <h2>{languageOne.name} Code</h2>
              <div className="language-selector">
                <span className="language-selector-label">Select Language:</span>
                <select value={languageOne.name} onChange={handleLanguageOneChange}>
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
                onChange={(e) => setCodeOne(e.target.value)}
                placeholder={languageOne.example}
              />
            </div>
          </div>

          <div className="testbench-column">
            <div className="column-header">
              <h2>{languageTwo.name} Code</h2>
              <div className="language-selector">
                <span className="language-selector-label">Select Language:</span>
                <select value={languageTwo.name} onChange={handleLanguageTwoChange}>
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
                onChange={(e) => setCodeTwo(e.target.value)}
                placeholder={languageTwo.example}
              />
            </div>
          </div>
        </div>

        <div className="execute-btn-container">
          <button 
            className="execute-btn" 
            onClick={compareExecution}
            disabled={isExecuting}
          >
            {isExecuting ? (
              <>
                <span className="spinner"></span> Executing...
              </>
            ) : (
              'Compare Code Execution'
            )}
          </button>
        </div>

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
                  {languageOne.name}: {resultOne.metrics?.time ? `${resultOne.metrics.time.toFixed(2)}ms` : 'N/A'}
                  <span className={`efficiency-badge ${getEfficiencyBadge(comparison.timeDifference).class}`}>
                    {getEfficiencyBadge(comparison.timeDifference).text}
                  </span>
                </div>
                <div className="metric-value">
                  {languageTwo.name}: {resultTwo.metrics?.time ? `${resultTwo.metrics.time.toFixed(2)}ms` : 'N/A'}
                </div>
                <div className="metric-description">
                  Lower values indicate better performance
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-title">
                  <FaMemory /> Memory Usage
                </div>
                <div className="metric-value">
                  {languageOne.name}: {resultOne.metrics?.memory !== null ? `${resultOne.metrics.memory}KB` : 'N/A'}
                  <span className={`efficiency-badge ${getMemoryDescription(comparison.memoryDifference).class}`}>
                    {getMemoryDescription(comparison.memoryDifference).text}
                  </span>
                </div>
                <div className="metric-value">
                  {languageTwo.name}: {resultTwo.metrics?.memory !== null ? `${resultTwo.metrics.memory}KB` : 'N/A'}
                </div>
                <div className="metric-description">
                  Lower values indicate better memory efficiency
                </div>
              </div>
            </div>
          </div>
        )}

        {(resultOne.output || resultTwo.output) && (
          <div className="results-container">
            <div className="result-panel">
              <div className="result-header">
                <div className="result-title">{languageOne.name} Results</div>
                {resultOne.metrics?.time && (
                  <div className="result-time">{resultOne.metrics.time.toFixed(2)} ms</div>
                )}
              </div>
              <Highlight
                theme={themes.nightOwl}
                code={resultOne.output}
                language={languageOne.name.toLowerCase()}
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} result-content`} style={style}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>

            <div className="result-panel">
              <div className="result-header">
                <div className="result-title">{languageTwo.name} Results</div>
                {resultTwo.metrics?.time && (
                  <div className="result-time">{resultTwo.metrics.time.toFixed(2)} ms</div>
                )}
              </div>
              <Highlight
                theme={themes.nightOwl}
                code={resultTwo.output}
                language={languageTwo.name.toLowerCase()}
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} result-content`} style={style}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
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
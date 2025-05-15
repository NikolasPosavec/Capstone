import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PresentationMode.css';

function PresentationMode() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: '100%',
    height: '569px'
  });

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      setDimensions({
        width: '100vw',
        height: '100vh'
      });
    } else {
      setDimensions({
        width: '100%',
        height: '569px'
      });
    }
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <div className={`presentation-container ${isFullscreen ? 'fullscreen' : ''}`}>
      {!isFullscreen && <h1>Live Presentation Mode</h1>}
      
      <div className="slides-container">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vT2iFh6aWMM6Ln_XE00L8dA8lUBNWuxGqy2-j3fD3zgaCfh0Jksuft5GtF3mCEk5xh6XdhKlfPToPMd/pubembed?start=true&loop=false&delayms=60000"
          width={dimensions.width}
          height={dimensions.height}
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          title="Google Slides Presentation"
        ></iframe>
      </div>

      <div className="bottom-controls">
        <Link to="/" className="back-home-btn">
          ← Back to Home
        </Link>
      </div>

      <button 
        onClick={toggleFullscreen} 
        className={`fullscreen-toggle ${isFullscreen ? 'exit' : ''}`}
      >
        {isFullscreen ? (
          <>
            <span className="icon">✕</span> Exit Fullscreen
          </>
        ) : (
          <>
            <span className="icon">⛶</span> Fullscreen
          </>
        )}
      </button>
    </div>
  );
}

export default PresentationMode;
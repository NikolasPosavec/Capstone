// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import landingImage from '../assets/chc_ascii.png';  

function Home() {
  const languages = [
    {
      name: "Machine Code & Assembly",
      description: "The foundation of programming, the lowest level of machine interaction"
    },
    {
      name: "Fortran",
      description: "The first abstraction from machine code & assembly that can be truly considered a high-level language. The language was designed mainly for scientific use cases"
    },
    {
      name: "COBOL",
      description: "A high-level language that was easy to learn and business-oriented, revolutionized data processing for enterprises"
    },
    {
      name: "C",
      description: "A language that is abstracted greatly from machine code but is still very close to the machine level. C introduced structured programming and direct memory manipulation"
    },
    {
      name: "Java",
      description: "A high-level language that created the JVM and revolutionized object-oriented programming (OOP). These innovations allowed for platform independence and paved the way for OOP languages"
    },
    {
      name: "Python",
      description: "A very high-level language that drastically simplified development. Python is versatile and extremely readable"
    },
    {
      name: "JavaScript",
      description: "A language that made the web more interactive and dynamic. JavaScript is the foundation of modern web development and has allowed for a large ecosystem of frameworks to be created with JavaScript as the foundation"
    },
    {
      name: "Scratch",
      description: "A block-based language that is one of the farthest abstracted languages ever made. Scratch is very beginner friendly and meant to teach computational thinking"
    }
  ];

  return (
    <div className="home-container">
      <div className="content-container">
        <h1>Evolution of Programming Languages</h1>
        <img 
          src={landingImage} 
          alt="Programming Languages Evolution" 
          className="landing-image" 
        />
        <p>
          Explore the fascinating journey of programming languages from their lowest-level 
          foundations to modern high-level abstractions that power today's digital world.
        </p>
        
        <section className="languages-section">
          <h2>Featured Languages</h2>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-card">
                <strong>{lang.name}</strong>
                <p>{lang.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="button-section">
          <Link to="/timeline" className="button">Explore the Timeline</Link>
          <Link to="/testbench" className="button">Try the Test Bench</Link>
        </section>
      </div>
    </div>
  );
}

export default Home;
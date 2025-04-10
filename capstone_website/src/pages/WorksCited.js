import React from 'react';
import { Link } from 'react-router-dom';
import './WorksCited.css';
import citation1Pic from '../assets/citation1_pic.png';
import citation7Pic from '../assets/citation7_pic.png';

function WorksCited() {
  return (
    <div className="works-cited-container">
      <h1>Works Cited</h1>
      
      <div className="citation-entry">
        <p className="citation-text">
          "Benchmarks for Programming Languages and Compilers, Which Programming Language or Compiler Is Faster." 
          <em>Benchmarks for Programming Languages and Compilers, Which Programming Language or Compiler Is Faster</em>, 
          programming-language-benchmarks.vercel.app/. Accessed 27 Aug. 2024.
        </p>
        <p className="citation-description">
          This website will be very useful for automating tests to have a basic understanding of the strengths and weaknesses of each language. 
          The website has a feature where you can put two languages side by side and compare their results on various tests. 
          For example, the table below shows me that C is much faster than Python when it comes to printing alphanumeric outputs to the user. 
          This will save me a lot of time in the early stages.
        </p>
        <div className="citation-image">
          <img src={citation1Pic} alt="Programming language benchmarks comparison" />
        </div>
      </div>

      <div className="citation-entry">
        <p className="citation-text">
          "DevDocs." <em>API Documentation</em>, devdocs.io/. Accessed 27 Aug. 2024.
        </p>
        <p className="citation-description">
          This is a library of many APIs that I will need to write concise and accurate code during my research. 
          These documents will also be very helpful when troubleshooting and learning about the quirks/challenges each language has. 
          This extra support will be especially useful for the older languages that I am not familiar with. 
          For example, the website has the documentation for Fortran which is a language from the 1960s so I will be relying on the API to help me out.
        </p>
      </div>

      <div className="citation-entry">
        <p className="citation-text">
          Malan, David J. "CS50X 2024." <em>CS50x 2024</em>, Harvard, cs50.harvard.edu/x/2024/. Accessed 1 Apr. 2024.
        </p>
        <p className="citation-description">
          This is an online course from Harvard that contains twelve units. Each unit contains a lecture on the topic, notes, and an assignment. 
          I have been taking this class over the summer and it goes over multiple topics that are relevant to my capstone. 
          I can use the lectures and notes to learn necessary skills/languages. I can also model the code I write for my capstone research based off the assignments in the course.
        </p>
      </div>

      <div className="citation-entry">
        <p className="citation-text">
          Nofre, David, et al. "When Technology Became Language: The Origins of the Linguistic Conception of Computer Programming, 1950–1960." 
          <em>Technology and Culture</em>, vol. 55, no. 1, 2014, pp. 40–75. JSTOR, http://www.jstor.org/stable/24468397. Accessed 27 Aug. 2024.
        </p>
        <p className="citation-description">
          This source will be very useful for understanding the early development of programming languages and the conceptual elements that are crucial for analyzing all modern languages. 
          For example, it explores how languages evolved from being completely technical to a more neat and linguistic based process. 
          Understanding how these early languages were developed will allow me to see how modern programming is influenced by the early languages.
        </p>
      </div>

      <div className="citation-entry">
        <p className="citation-text">
          Prechelt, Lutz. "An Empirical Comparison of Seven Programming Languages." <em>Cs.Tufts.Edu</em>, 
          Oct. 2000, www.cs.tufts.edu/~nr/cs257/archive/lutz-prechelt/comparison.pdf.
        </p>
        <p className="citation-description">
          This study aligns with my capstone and has a lot of overlap with the experiments that it runs. 
          I will be judging languages based on efficiency/performance, readability, and ecosystem around the language. 
          These three factors are like the ones Lutz had, "including program length, programming effort, runtime efficiency, memory consumption, and reliability" (Lutz). 
          I can cross examine my results with Lutz's to see if my results make sense.
        </p>
      </div>

      <div className="citation-entry">
        <p className="citation-text">
          Sebesta, Robert W. <em>Concepts of Programming Languages - 10th Edition</em>. Pearson Addison Wesley, 2012.
        </p>
        <p className="citation-description">
          My whole capstone is based off judging/assessing programming languages with different criteria. 
          This book matches perfectly with my capstone as the book's "principal goals are to introduce the main constructs of contemporary programming languages and to provide the reader with the tools necessary for the critical evaluation of existing and future programming languages" (Sebesta).
        </p>
      </div>

      <div className="citation-entry">
        <p className="citation-text">
          Watt, David Anthony, and William Findlay. <em>Programming Language Design Concepts</em>. Wiley, 2006.
        </p>
        <p className="citation-description">
          This source will be very useful for researching which languages are the most notable in the grand scheme of things. 
          The chapter titled "Historical Development" contains the graph below that gives me a good idea of which languages to study. 
          It also provides me with a "family tree" of sorts for programming languages.
        </p>
        <div className="citation-image">
          <img src={citation7Pic} alt="Programming languages family tree" />
        </div>
      </div>

      <div className="citation-entry">
        <p className="citation-text">
          "Where Developers Learn, Share, & Build Careers." <em>Stack Overflow</em>, stackoverflow.com/. Accessed 27 Aug. 2024.
        </p>
        <p className="citation-description">
          This website will provide me with a ton of opinions from developers and real-world implications of the things I will be testing. 
          If I have questions during my process I can search to see if anyone on stack overflow has had a similar issue. 
          An example of something I could use is the thread linked below about efficiency testing in Python which is something that I will have to do in my capstone.
        </p>
      </div>

      <div className="citation-entry">
        <p className="citation-text">
          Flanagan, David. <em>JavaScript: The Definitive Guide</em>. 6th ed., O'Reilly Media, 2011. Accessed 28 Dec. 2024.
        </p>
        <p className="citation-description">
          This book will help me to understand JavaScript's evolution, features, and its best use cases. 
          The book provided me with very comprehensive explanations of JavaScript's most integral and core functionalities and how they are useful in web development. 
          It helped me when writing about the language and gave concrete examples for abstract ideas.
        </p>
      </div>

      <div className="citation-entry">
        <p className="citation-text">
          Monk, Simon. <em>Programming Arduino: Getting Started with Sketches</em>. McGraw-Hill Education, 2011. Accessed 28 Dec. 2024.
        </p>
        <p className="citation-description">
          This book helped me with understanding how C can be applied in the case of embedded systems. 
          Less specifically, the book provided great insight into how low-level languages are able to interact so closely with a computer's hardware while maintaining a considerable level of abstraction. 
          This book helped with providing practical examples of C and how it is used in the real world.
        </p>
      </div>

      <div className="back-home">
        <Link to="/" className="back-home-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default WorksCited;
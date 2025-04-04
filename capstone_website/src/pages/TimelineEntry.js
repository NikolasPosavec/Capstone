import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Timeline.css';
import punchCardsImage from '../assets/punch_cards.jpg';
import codeComparisonImage from '../assets/code_comparison.png';

const timelineEntries = {
  "machine-code": {
    title: "Machine Code & Assembly",
    year: "Pre-1957",
    content: (
      <>
        <p>The origin of all programming languages is machine code. Machine code consists of 0s and 1s in sequence that have meaning to the computer. The computer can interpret and read this code as it is written. Early computers were able to load data, sort data, and do math by utilizing instructions provided by the machine code.</p>
        
        <p>Although machine code is very efficient and easily readable for computers, writing programs in binary is extremely difficult. The process of writing machine is tedious and a task that is heavily error prone because every part of the program was coded using methods that required meticulous planning. An example of one of these methods is using punch cards.</p>

        <div className="image-container">
          <img src={punchCardsImage} alt="Punch cards used in early programming" className="centered-image" />
          <p className="image-caption">Punch cards used for early programming</p>
        </div>

        <p>This process was arduous as the user had to go letter by letter and make holes in the correct places to create programs. Implementation was a whole separate issue as even the simplest operations required an in-depth understanding of specific computer hardware components. So, clearly, a change needed to be made.</p>
        
        <p>Assembly language emerged as the solution to the headaches caused by the dreaded machine code. Assembly language marks an important point on the timeline of programming languages as it was the first attempt to abstract machine code. Rather than requiring the user to create programs using raw binary sequencing, assembly language allowed programmers to use mnemonic codes. Key words such as MOV, ADD, and SUB were now used to represent operations. These commands are so much more intuitive and easier to understand than raw binary. However, they still had a one-to-one relationship with machine instructions. Assembly's mechanisms allowed for a more user-friendly experience through its organization and simplicity.</p>
        
        <div className="image-container">
          <img src={codeComparisonImage} alt="Code comparison between C, Assembly, and Machine Code" className="centered-image" />
          <p className="image-caption">Comparison of C, Assembly, and Machine Code implementations</p>
        </div>

        <p>The code segments shown above all do the same thing when executed. I wrote the code in the language C to begin with (more on C later down the line) and was able to use the Linux terminal to turn it into assembly code and machine code. Clearly, machine code (the 0s and 1s) is the least intuitive, but the most efficient. The assembly code (the one with all the %...s) is slightly more readable and still quite efficient as it is the earliest abstraction of machine code. However, C is by far the most readable, but the least efficient of the three because it has been abstracted so far away from the machine level.</p>
      </>
    )
  },
  "fortran": {
    title: "Fortran",
    year: "1957",
    content: (
      <>
        <p>Fortran (Formula Translation) was the first high-level programming language, developed by IBM in the 1950s. It was designed specifically for scientific and engineering calculations.</p>
        
        <div className="image-container">
          <img src={punchCardsImage} alt="Fortran punch cards" className="centered-image" />
          <p className="image-caption">Early Fortran programs on punch cards</p>
        </div>

        <p>Fortran introduced many concepts that became standard in later programming languages, including variables, loops, and subroutines. Its optimized compiler made it significantly faster than hand-written assembly for numerical computations.</p>
      </>
    )
  }
};

function TimelineEntry() {
  const { id } = useParams();
  const entry = timelineEntries[id];

  if (!entry) {
    return (
      <div className="entry-container">
        <div className="entry-content">
          <h1>Entry not found</h1>
          <Link to="/timeline" className="back-btn">
            ← Back to Timeline
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="entry-container">
      <div className="entry-content">
        <h1>{entry.title} <span className="entry-year">{entry.year}</span></h1>
        
        <div className="entry-body">
          {entry.content}
        </div>

        <div className="entry-footer">
          <Link to="/timeline" className="back-btn">
            ← Back to Timeline
          </Link>
          <Link to="/" className="back-home-btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TimelineEntry;
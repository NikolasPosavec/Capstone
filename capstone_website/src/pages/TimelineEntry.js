// src/pages/TimelineEntry.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Timeline.css';

const timelineEntries = {
  "machine-code": {
    title: "Machine Code & Assembly",
    year: "Pre-1957",
    content: (
      <>
        <p>The origin of all programming languages is machine code. Machine code consists of 0s and 1s in sequence that have meaning to the computer. The computer can interpret and read this code as it is written. Early computers were able to load data, sort data, and do math by utilizing instructions provided by the machine code.</p>
        
        <p>Although machine code is very efficient and easily readable for computers, writing programs in binary is extremely difficult. The process of writing machine is tedious and a task that is heavily error prone because every part of the program was coded using methods that required meticulous planning. An example of one of these methods is using punch cards.</p>
        
        <p>This process was arduous as the user had to go letter by letter and make holes in the correct places to create programs. Implementation was a whole separate issue as even the simplest operations required an in-depth understanding of specific computer hardware components. So, clearly, a change needed to be made.</p>
        
        <p>Assembly language emerged as the solution to the headaches caused by the dreaded machine code. Assembly language marks an important point on the timeline of programming languages as it was the first attempt to abstract machine code. Rather than requiring the user to create programs using raw binary sequencing, assembly language allowed programmers to use mnemonic codes. Key words such as MOV, ADD, and SUB were now used to represent operations. These commands are so much more intuitive and easier to understand than raw binary. However, they still had a one-to-one relationship with machine instructions. Assembly's mechanisms allowed for a more user-friendly experience through its organization and simplicity.</p>
        
        <p>So how does this fit into the timeline? Well, machine code and assembly language are meant to represent the origins of computer programming and abstraction. This is the point in history when efficiency/performance were maximized because the code was at the machine level. However, the maximized efficiency came at the cost of ease of use. The theme of balancing efficiency vs abstraction is not going anywhere and is one of the biggest factors in how a language is used. Although assembly was able to achieve slight abstraction, writing the code still took an insanely vast amount of knowledge concerning the computer's hardware. The assembly language set the foundation for the development of high-level programming.</p>
        
        <div className="code-comparison">
          <h4>Code Comparison:</h4>
          <p><strong>C Code:</strong> int x = 10 + 20;</p>
          <p><strong>Assembly:</strong> mov eax, 10<br />add eax, 20<br />mov [x], eax</p>
          <p><strong>Machine Code:</strong> 10111000 00001010 00000000 00000000<br />00000101 00010100 00000000 00000000<br />10110011 00000000</p>
        </div>
      </>
    ),
    image: "punch_cards.jpg"
  },
  // Add other entries here following the same structure
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
          
          {entry.image && (
            <div className="entry-image">
              <img 
                src={require(`../assets/${entry.image}`)} 
                alt={entry.title} 
              />
              <p className="image-caption">Punch cards used for early programming</p>
            </div>
          )}
        </div>

        <Link to="/timeline" className="back-btn">
          ← Back to Timeline
        </Link>
      </div>
    </div>
  );
}

export default TimelineEntry;
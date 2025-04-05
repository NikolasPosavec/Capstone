import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './TimelineEntry.css';
import punchCardsImage from '../assets/punch_cards.jpg';
import codeComparisonImage from '../assets/code_comparison.png';
import fortranImage from '../assets/fortran.png';
import cobolImage from '../assets/cobol.png';
import cImage from '../assets/c.png';
import pythonImage from '../assets/python.png';

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
        <p>Fortran is the founding father of high-level programming languages and was created in 1957. Short for “Formula Translation”, Fortran was developed by IBM to make a language that would be user-friendly and allow for people in STEM fields to handle complex math. Fortran successfully abstracted machine level code into very readable, English-like syntax.  </p>
        
        <p>At the time, Fortran was revolutionary because it created a language that would allow its users to write code for solving math problems that resembled the techniques being used. When the Fortran program was finished being written, it actually looked like a math formula. Beyond mathematical applications, Fortran introduced the absolute fundamentals of modern programming with logic structures like loops, conditionals, and functions. These are all now integral parts of modern programming to this day and shows the seismic impact caused by the creation of Fortran. </p>
        
        <p>With abstraction comes a loss in performance. However, Fortran came with a compiler that was able to translate abstracted commands back into machine code in a very efficient manner. The efficiency of Fortran’s compiler silenced many of the critiques about the lost efficiency from using high level languages.  </p>
        
        <p>Fortran’s impact is felt to this day through its influence on languages like COBOL, C, and Python. However, Fortran itself is still used in some fields, most notably weather modeling and large-scale computations. Fortran’s legacy is marked by how it demonstrated the power of abstraction. </p>
        
        <p>The code below is a factorial program I wrote that captures some of the key features of Fortran.</p>

        <div className="image-container">
          <img src={fortranImage} alt="Fortran factorial program" className="centered-image" />
          <p className="image-caption">Fortran factorial program</p>
        </div>

        <p>As far as the program structure goes, Fortran organizes code into “blocks”. In the example above the code is in the PROGRAM block. The variables are defined within the block on lines 2-4 to be used throughout the rest of the program.  </p>

        <p> The flow of logic goes as follows: IF handles invalid inputs, the DO loop calculates the factorial by iterating over the range selected by the user from 1 to n. </p>
        
        <p>The interactive element is handled with the PRINT, READ, and WRITE statements. These commands are straightforward and allow the user to interact with the program as shown by my video below: </p>   
        <div className="video-container centered-video">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/VXhJCMOF88s" 
            title="Fortran demonstration" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>

        <p>First, I use the following command to compile the program: </p>
        <p>cobc –x –o payroll payroll.cob </p>
        <p>Then, I use the following command to execute the program: </p>
        <p>./payroll </p>
        <p>The program starts by using DISPLAY to ask for the employee’s name, hourly rate, and hours worked. ACCEPT reads these inputs and stores them in variables. The COMPUTE statement calculates the gross pay, and another DISPLAY command shows the results. </p>

      </>
    )
  },
  "cobol": {
    title: "COBOL",
    year: "1959",
    content: (
      <>
        <p>With the advent of Fortran came a whole new wave of industries that were interested in computer programming. Fortran was highly tailored towards STEM fields, and it was far less useful in a business context. So, COBOL was created to fill this gap. COBOL stands for “Common Business-Oriented Language” and was developed in 1959 to solve the needs of people in the business world. Applications of COBOL spanned from financial applications to administrative systems widely used by companies around the world. COBOL was designed to have readable and simple syntax so that people without an in-depth knowledge of computing could effectively use the language. COBOL strayed away from math language along with data and control structures to ensure simplicity.  </p>
        
        <p>COBOL’s core principles of simplicity made it appeal to a much wider audience than its contemporaries. People in the business field were effectively able to manage their businesses using COBOL with little to no computer science training or education. Additionally, COBOL set the foundation for fundamental programming concepts such as structured programming and modular design. Structured programming created a more manageable environment for debugging and allowed for programs to be easily updated. The logic was very straightforward which contributed to the ease of debugging as the user can simply go down the program in a straight line to find the bug. The modular design of COBOL made dividing complex programs into smaller parts very simple. These concepts both can be massively credited with making modern debugging as good as it is. </p>

        <p>Along with COBOL’s key theoretical contributions to programming languages, COBOL is still used in many business systems to this day. With that said, this is only the case for companies that established the systems in the 20th century. The fact that these systems still work sufficiently shows the reliability of COBOL even over 50 years after its creation. </p>

        <p>Despite newer languages overtaking the role of COBOL in modern programming, COBOL’s contributions to structured programming and clarity are still felt to this day. </p> 

        <div className="image-container">
          <img src={cobolImage} alt="COBOL Payroll Program" className="centered-image" />
          <p className="image-caption">COBOL Payroll Program</p>
        </div>

        <p>I wrote a payroll program (as shown above) using COBOL that does a good job of demonstrating COBOL’s modular structure. Lines 1-2 are the identification division which basically just means that these two lines specify the name of the program. This is necessary for organization and keeping track of programs if you are managing several at a time. </p>

        <p>Lines 4-9 are the data division which defines all the data that the program will process. This division is responsible for declaring necessary variables and managing data handling. Within the data division the working-storage section is responsible for storing temporary variables that are used for intermediate calculations. </p>

        <p>Finally, lines 11-24 are the procedure division. The procedure division contains the logic of the program. All of the operations performed are being executed within the procedure division. DISPLAY and ACCEPT are the commands that allow for user interaction. COMPUTE works to perform calculations with given data. </p> 

        <div className="video-container centered-video">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/9BpHH74jCUk" 
            title="Fortran demonstration" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>

        <p>First, I use the following command to compile the program: </p>

        <p>cobc –x –o payroll payroll.cob </p>

        <p>Then, I use the following command to execute the program: </p>

        <p>./payroll </p>

        <p>The program starts by using DISPLAY to ask for the employee’s name, hourly rate, and hours worked. ACCEPT reads these inputs and stores them in variables. The COMPUTE statement calculates the gross pay, and another DISPLAY command shows the results. </p>
      </>
    )
  },
  "c":{
    title: "C",
    year: "1972",
    content: (
      <>
        <p>C was developed to create the Unix operating system in 1972 at Bell Labs. C is one of the most dynamic and innovative languages ever created. It grants users with low level access to the computer’s hardware. Although, this low-level access raises concerns about how transferable C would be from one machine’s hardware to another, it is highly portable. C would go on to cement itself as the main tool used for modern development. </p>
      
        <p>COBOL was a very specialized language that focused mainly on business applications. On the other hand, C had much wider use cases at the system level. C allows the user to edit components of the operating system and hardware. C’s design was all about maximizing efficiency and complete control of the machine rather than the simplicity emphasized by COBOL. C’s architecture is optimized for developers to directly interact with memory and processor components. These innovations made by C mark a shift in how programming languages would be developed down the line. C was able to combine ease of use with low level machine precision.  </p>

        <p>C’s design has a good balance between low level access and high-level coding constructs that can be easily applied to large scale projects. The combination makes it possible for developers to make code that is highly efficient for operating systems, embedded systems, and much more. C is the founding father of modern languages such as: C++, Java, and Python. The main principles inherited by C are structured programming and the efficient method of handling arrays/pointers implemented by C. These languages inherited many of C’s concepts, but C itself is still widely used for applications that need to interact with the system’s hardware.  </p>  

        <div className="image-container">
          <img src={cImage} alt="C Calculator Program" className="centered-image" />
          <p className="image-caption">C Calculator Program</p>
        </div>  

        <p>The program I wrote in C (shown above) takes numbers entered by the user and calculates the sum of the entered numbers. This program is a good example of C’s efficiency whilst handling arrays and control structures like for loops.  </p>
      
        <p>Lines 5-9 initialize the variables that will be used throughout the entire program and prompt the user to input numbers they want to add together. Printf prompts the user and scanf stores the user input in the previously initialized amountOfNums variable.  </p>

        <p>Lines 11-21 create an array to store the numbers entered by the user. The for loop asks the user for a new input for every iteration of the loop and then stores it into the array. This process shows how C is able to efficiently handle dynamic data sets. </p>

        <p>Lines 23-29 uses a second for loop to calculate the sum of the numbers in the array. The program accumulates each number in the array with a sum variable. The printf command prints the result, formatted to two decimal places. </p> 
        <div className="video-container centered-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bwaFt2zQPOA"
          title="C Programming Demonstration"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>

        <p>First, I use the following command to compile the program: </p>

        <p>gcc arraySum.c -o arraySum </p>

        <p>Then, I use the following command to execute the program: </p>

        <p>./arraySum </p>

        <p>The program prompts the user to enter how many numbers they want to add together, which is done by the first printf statement. The scanf function then stores the input in the amountOfNums variable. The user is then asked what each of their numbers are which is done by the first for loop. After all numbers are entered, the user is given the sum, which is generated by the second for loop and displayed by the last printf. </p>
      </>
    )
  },
  "python": {
    title: "Python",
    year: "1991",
    content: (
      <>
      <p>Python is a language with one goal: making the lives of programmers easier. Languages of Python’s time were clunky and generally difficult to learn or use efficiently. Python aimed to be readable, simple, and flexible. The language was developed by Guido van Rossum in 1991. Rossum wanted to improve upon C but took a different path than contemporary languages like Java. C was notorious for requiring tedious manual memory management and was very difficult to learn so Python responded by introducing a high-level and dynamic syntax that was centered around writing code that looked clean and was efficient. With all these features, Python was an extremely accessible language for programmers of all skill levels. </p>

      <p>Python’s impact on software development is different from Java because it is widely used as a scripting language. This use case comes from the fact that Python is an interpreted language whereas most popular languages that came before it are compiled languages. The difference is basically that compiled languages get converted entirely into machine code before running, but interpreted languages convert line-by-line. Python’s line-by-line execution allowed for quick development and testing because it required no intermediary compiling step, allowing it to rise to the top of the scripting world. However, languages like C and Java are significantly more efficient during runtime because they are closer to the machine level (lower-level languages). </p> 

      <p>Python’s scripting power has made it the primary resource for most large-scale development in several fields including web development, artificial intelligence, machine learning, and data science. Python has an extremely extensive standard library and a massive ecosystem of third-party packages. These packages have been specifically tailored to make Python easier to write across various disciplines. </p>

      <p>Python also improved C’s memory leaks with an automatic memory management system and garbage collection system by simplifying resource handling. These optimizations reduced memory leaks even more significantly than Java had done. Python is extremely easy to integrate with other languages due to its versatility which is ideal for teams working across multiple languages and platforms. Python was revolutionary and completely resculpted the software development space by combining ease of use with capabilities featured in lower-level languages. Although it may not be the best language in terms of execution speed, its advantages in development time and maintainability are more than enough to justify the drop in performance. Python is the cornerstone of modern programming and has made programming less of a discipline-specific skill and more of a life skill that is useful for everybody. </p>

      <div className="image-container">
          <img src={pythonImage} alt="Python Temperature Converter" className="centered-image" />
          <p className="image-caption">Python Temperature Converter</p>
        </div>  

      <p>This Python program is a simple temperature converter that prompts the user to provide a value for temperature and the units they are using. The program will then convert the user’s input temperature to the opposite unit using known conversion formulas. </p>    
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
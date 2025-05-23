import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './TimelineEntry.css';
import punchCardsImage from '../assets/punch_cards.jpg';
import codeComparisonImage from '../assets/code_comparison.png';
import fortranImage from '../assets/fortran.png';
import cobolImage from '../assets/cobol.png';
import cImage from '../assets/c.png';
import pythonImage from '../assets/python.png';
import javaImage from '../assets/java.png';
import javascriptImage from '../assets/javascript.png';
import scratchImage from '../assets/scratch.png';

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
      
      <p>Lines 1-6 create two functions: Celsius to Fahrenheit and Fahrenheit to Celsius. Both functions work by intaking a number and then returning a converted temperature. </p>

      <p>Lines 7-8 prompt the user to enter a numerical value for temperature and then ask the user to specify which units they are using. The input() function takes user input and .strip().upper() makes sure that the provided String is formatted correctly so the comparison can be executed.</p> 
      
      <p>Lines 10-15 have an if-elif chain that is used to determine which of the two previously defined functions should be called based upon the user’s inputs. The final answer is then printed out in a formatted string. Also, if the user inputs a unit that is invalid, a error message is printed accordingly. </p>
      
      <div className="video-container centered-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/omxIyrz3GxY"
          title="Python Programming Demonstration"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>

      <p>To run this program, I simply clicked the run button on my IDE, Visual Studio Code. This does the same sort of thing as previous times: </p>
      
      <p>python tempConverter.py </p>

      <p>The program asks the user to input temperature and units, processes the inputs, performs the calculations, and then prints the answer. This simple Python program displays the language’s ease of use and readability. </p>
      </>
    )
  },
  "java": {
    title: "Java",
    year: "1995",
    content: (
      <>
      <p>Java was a revolutionary programming language at its release date because of its main objective: platform independence. The language was developed by a company called Sun Microsystems in 1995 and was meant to be a direct response to C’s flaws. C required users to recompile code every time that they switched from one system to another. Java solved this problem by developing the write once, run anywhere principle. They accomplished this through the Java Virtual Machine (JVM), and this allowed Java source code to be compiled into bytecode that was executable on any device that could run with a JVM. This unique feature made Java the industry standard for cross-platform development environments. </p>
      
      <p>Java has had a massive impact on the world of software development at all levels. Along with the JVM, the language introduced the world to object-oriented programming (OOP) and was equipped with an extensive library system that contained resources to build anything from the smallest desktop application to the most large-scale enterprise systems. Another way that Java improved upon C was through automatic memory management. This garbage collection system implemented by Java made memory leaks that were common in C virtually nonexistent. </p>

      <p>Java completely redefined software development through innovations in cross-platform compatibility, its object-oriented principles, and effective memory management. With this, Java became the gold standard for all levels and types of development including Android development, enterprise applications, and various backend systems. Although Java is not one of the most modern languages, it has proved to be a main stay in the software engineering world as it continues to release regular updates under its new ownership, Oracle. Java was able to capitalize on the weaknesses of other languages whilst maintaining low-level language efficiency. Java is in my opinion the perfect balance of power and ease of use.  </p> 

      <div className="image-container">
          <img src={javaImage} alt="Java Interest Calculator" className="centered-image" />
          <p className="image-caption">Java Interest Calculator</p>
        </div>  
      
      <p>The Java program I wrote is a simple interest calculator that prompts the user for three values—principal amount, annual interest rate, and years—and then computes the interest rate using a formula. This program is good for demonstrating Java’s structure and how it is an object-oriented language. </p>

      <p>Line 1 simply imports the Scanner class from the Java Utilities library. This is one of the many free libraries that you get with Java and is the key to making programs interactive. </p> 

      <p>Line 5 defines the “main” method which is the entry point for every Java program to be executable. </p>

      <p>Lines 9-16 prompt the user to input using System.out.print to display text and then stores responses using the Scanner class. These three inputs are then assigned to three separate variables: principal, rate, and time. </p>

      <p>Lines 18-19 compute the interest rate, store it in a variable called interest, and then prints out the number assigned to the interest variable. Line 21 just closes Scanner to free resources. </p>
      
      <div className="video-container centered-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KTLGqWeWFGs"
          title="Java Programming Demonstration"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>

      <p>To run this program, I simply clicked the run button on my IDE, Visual Studio Code. This does the same sort of thing as previous times: </p>
      
      <p>javac interestCalc.java </p>

      <p>java interestCalc </p>

      <p>The program prompts the user to enter three values: the principal amount, the annual interest rate (in percentage), and the time in years. It uses the Scanner class to read these inputs. Once the inputs are collected, the program calculates the simple interest using the formula (principal * rate * time) / 100. Finally, it displays the calculated interest to the user and closes the Scanner to release resources. This program is a simple implementation of a basic interest calculator. </p>
      
      </>
    )
  },
  "javascript": {
    title: "JavaScript",
    year: "1995",
    content: (
      <>
      <p>JavaScript’s release in 1995 was revolutionary for web development. The language’s focus was to enable dynamic and interactive web pages. Brendan Eich was the developer of the language who worked at Netscape and created the language because he wanted a scripting language that was lightweight and worked well with Java. Websites in the 1990s and earlier were very “boring” and static. Users were often left to fumble around with confusing menus that were unresponsive and frustrating. JavaScript was so integral to solving this problem because it allowed for client-side interaction without the need to report every communication to the server. This essentially meant that developers were no longer bottlenecked by technical issues and ultimately led to the rise of dynamic web apps. </p>
      
      <p>In web development there are two “worlds”, front-end development and back-end development. Front-end development is basically everything that a user will see (ex. buttons, links, titles, etc.) and back-end development is the code that makes those things functional (ex. script for a game that will make those button presses developed in the frontend have meaning). Initially, JavaScript was almost exclusively for front-end scripting. However, as the language existed for a longer period of time, more resources like Node.js were created allowing JavaScript to be useful for back-end development as well. JavaScript also had the advantage of being an interpreted language which made the whole development process much easier. The language has the tools to be a very accessible and prototype-oriented language that allowed for flexibility in web development that was previously unseen. As mentioned earlier, JavaScript is aging well as the ecosystem around it continues to grow at a rapid rate with modern frameworks and libraries like React, Angular, and Vue continuing to innovate and change how web apps are built.</p>

      <p>JavaScript is the backbone of modern web development and redefined how software development operates. Now, JavaScript is utilized in some form on almost every web page powering the smallest web apps to the most large-scale operations. Although JavaScript has been so revolutionary, some developers still criticize it heavily. JavaScript is often targeted for its loosely typed syntax and the inconsistencies that arise across different browsers. Developers have tried to combat these issues through a mechanism called ECMAScript. ECMAScript has helped to make the language more modern and standardized. Overall, JavaScript did a phenomenal job of capitalizing on the internet boom in the 1990s and has done extremely well to remain so relevant in a web development scene that is constantly evolving. </p>
      
      <div className="image-container">
          <img src={javascriptImage} alt="JavaScript Website Snippet" className="centered-image" />
          <p className="image-caption">JavaScript Website Snippet</p>
        </div>
      
      <p>This is one of the many JavaScript (js) programs I have written in order to create a website to go along with my capstone presentation at the symposium. This Home.js file is simply the landing page of my website. I used a python program to generate a picture of the Calvert Hall cardinal in ASCII characters and colored using ANSI color escape codes. The website is also built using the react framework. The imports of react assets and my ASCII cardinal are lines 2-5. Getting into the actual js code, I first make the titles on the website then the short description of my capstone, this all happens from lines 9-15. Next, on lines 17-30, I am making a list of all the programming languages that my project is about and a short description of what their importance is. I then make the buttons to navigate to the other pages of the website on lines 32-35 allowing the user to navigate the site smoothly. Lastly, line 41 makes sure that the home page can be used anywhere else in the scope of my app.</p>

        <div className="video-container centered-video">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/t9o_6aTuYVs" 
            title="Javascript demonstration" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </>
    )
  },
  "scratch": {
    title: "Scratch",
    year: "2007",
    content: (
      <>
      <p>Scratch is a very different programming language than all my other entries, well visually at least. Scratch is unique because it is a visual programming language. This is one of the highest levels of abstraction and the reason being that MIT wanted to create a language that was intuitive and easy for beginners to understand. Scratch throws syntax and typing much of anything out the window and instead takes the approach of a drag and drop block system. Each color group of blocks is meant to represent different types of functions, and they can be connected by dragging them onto each other. This makes it so that beginners aren’t overwhelmed by confusing syntax and can focus on building core thinking skills for programming. The language is also set up to be fun by nature with its sprite-based environment which allows users to easily make simple games or stories with very little effort. Scratch’s ecosystem is all about collaboration and learning from others, so users can view other projects or even give suggestions in the comments of a Scratch “program”.</p>

      <p>Although Scratch is highly impractical for any serious programmers, that is not its purpose. This language is a beautiful demonstration of how abstraction can make programming so much more accessible and fun for beginners. Scratch lays a great foundation for people to transition later on into more complex languages so that they won’t be confused about the hard part, logic. Scratch is the perfect example for showing that coding is about so much more than typing on a keyboard, it is a whole new way of thinking.</p>

      <p>For my scratch program I made a simple quiz game about some basic computer science topics. The bulk of the code is below:</p> 
      <div className="image-container">
          <img src={scratchImage} alt="Scratch Quiz Game" className="centered-image" />
          <p className="image-caption">Scratch Quiz Game</p>
        </div>     
      <p>Immediately, it is clear that Scratch is much more visually appealing and intuitive than other more complex languages. While some of these entry code examples took me hours, this took me at most 45 minutes to create because of how simple and easy it is to work with. There is a lot of plain English words and no confusing syntax or untraceable runtime errors.</p>
      
      <div className="video-container centered-video">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/b2pbqI0ENXY" 
            title="Scratch demonstration" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </>
    )
  }
}

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
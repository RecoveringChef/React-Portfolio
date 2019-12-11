import React from 'react';
import Footer from '../src/components/footer';
import Header from '../src/components/header'
import './App.css';

function App() {
  return (
    <div className="App">


      <Header />

      <body>
        <h2>About Me</h2>
        <div className="base">
          <p>
            Goal-oriented full-stack web developer with an extensive and applicable background in the culinary arts and hospitality management.
            Life-long lover of tech having recently acquired a certificate in full-stack web development from the University of Central Florida with skills in MERN stack, mySQL, and CSS/Bootstrap.
          </p>
          <br />

          <p>
            Motivated by the magic of constructing something new and watching it take form through creativity, knowledge, skill, and attention to detail.
          Enjoys leveraging technological background to provide innovative perspectives on how end-users interact with websites and software platforms.
          A diligent problem solver and team collaborator with a passion for learning looking to join a forward-thinking organization to provide unique web-based solutions.

        </p>
        </div>
      </body>


      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ResearchPapers from './components/ResearchPapers';
import Certificates from './components/Certificates';
import TechnicalWork from './components/TechnicalWork';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Projects />
      <ResearchPapers />
      <Certificates />
      <TechnicalWork />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;

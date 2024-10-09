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
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      


      <Routes>
        <Route path='/' element={
          <>
          <AboutMe />
      <Projects />
      {/* <ResearchPapers /> */}
      {/* <Certificates /> */}
      {/* <TechnicalWork /> */}
      {/* <Skills /> */}
      {/* <Education /> */}
      
      <Contact /></>
        }></Route>
      <Route path="/research"
          element={<ResearchPapers />}>
        </Route>
        <Route path="/certificates"
          element={<Certificates />}>
        </Route>

        <Route path="/technical"
          element={<TechnicalWork />}>
        </Route>

        <Route path="/skills"
          element={<Skills />}>
        </Route>

        <Route path="/education"
          element={<Education />}>
        </  Route>

        
        </Routes>
    </div>
  );
}

export default App;

import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-8 text-white font-semibold">
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#research">Research Papers</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#technical">Technical Work</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

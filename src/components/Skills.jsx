import React from 'react';

function Skills() {
  return (
    <section id="skills" className="p-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>Machine Learning</li>
          <li>TailwindCSS</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;

import React from 'react';
import { FaReact, FaPython, FaFlask, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTensorflow, SiCplusplus, SiSocketdotio } from 'react-icons/si';
import { DiJavascript1, DiCss3 } from 'react-icons/di';
import { GiBookshelf, GiGears } from 'react-icons/gi';
import { IoMdAnalytics } from 'react-icons/io';
import "./Skills.css"

function Skills() {
  return (
    <section id="skills" className="p-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center mr-auto changefont2">SKILLS</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 changefont">
          {/* Research-Oriented Skills */}
          <li className="flex items-center space-x-2 ">
            <GiBookshelf className="text-green-500 text-3xl " />
            <span>Research Methodology</span>
          </li>
          <li className="flex items-center space-x-2">
            <GiGears className="text-red-500 text-3xl" />
            <span>Geotechnical Engineering</span>
          </li>
          <li className="flex items-center space-x-2">
            <GiGears className="text-red-500 text-3xl" />
            <span>Geo-Environmental Engineering</span>
          </li>
          <li className="flex items-center space-x-2">
            <IoMdAnalytics className="text-yellow-500 text-3xl" />
            <span>Data Analysis</span>
          </li>
          <li className="flex items-center space-x-2">
            <GiBookshelf className="text-green-500 text-3xl" />
            <span>Academic Research</span>
          </li>
          <li className="flex items-center space-x-2">
            <GiBookshelf className="text-green-500 text-3xl" />
            <span>Technical Writing</span>
          </li>

          {/* Technical Skills */}
          <li className="flex items-center space-x-2">
            <FaPython className="text-yellow-500 text-3xl" />
            <span>Python</span>
          </li>
          <li className="flex items-center space-x-2">
            <SiCplusplus className="text-blue-500 text-3xl" />
            <span>C++</span>
          </li>
          <li className="flex items-center space-x-2">
            <SiTensorflow className="text-orange-500 text-3xl" />
            <span>TensorFlow</span>
          </li>
      
        </ul>
      </div>
    </section>
  );
}

export default Skills;

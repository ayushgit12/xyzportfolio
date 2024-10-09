import React from 'react';
import { FaUniversity, FaSchool } from 'react-icons/fa';
import { BsArrowDown } from 'react-icons/bs';

function Education() {
  return (
    <section id="education" className="p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Education</h2>
        
        <div className="flex flex-col items-center">
          {/* PhD */}
          <div className="text-center mb-4">
            <FaUniversity className="text-4xl text-blue-500 mx-auto mb-2" />
            <strong>Ph.D. (Pursuing)</strong> <br />
            IIT Dhanbad <br />
            Geotechnical & Geo-Environmental
          </div>
          <BsArrowDown className="text-3xl mb-4" />

          {/* M.Tech */}
          <div className="text-center mb-4">
            <FaUniversity className="text-4xl text-blue-500 mx-auto mb-2" />
            <strong>M.Tech</strong> <br />
            NIT Jalandhar <br />
            CGPA: 8.0 (2022)
          </div>
          <BsArrowDown className="text-3xl mb-4" />

          {/* B.Tech */}
          <div className="text-center mb-4">
            <FaUniversity className="text-4xl text-blue-500 mx-auto mb-2" />
            <strong>B.Tech</strong> <br />
            RGPV Bhopal <br />
            CGPA: 7.28 (2016)
          </div>
          <BsArrowDown className="text-3xl mb-4" />

          {/* Higher Secondary */}
          <div className="text-center mb-4">
            <FaSchool className="text-4xl text-blue-500 mx-auto mb-2" />
            <strong>Higher Secondary</strong> <br />
            Ryan International School
          </div>
          <BsArrowDown className="text-3xl mb-4" />

          {/* High School */}
          <div className="text-center mb-4">
            <FaSchool className="text-4xl text-blue-500 mx-auto mb-2" />
            <strong>High School</strong> <br />
            Ryan International School
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

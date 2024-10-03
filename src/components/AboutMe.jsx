import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto flex items-center">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="w-40 h-40 rounded-full mr-8"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">Rajul Dwivedi</h1>
          <p className="text-gray-600"> I'm Rajul Dwivedi, currently employed at CSIR-Central Institute of Mining and Fuel Research, Nagpur Research Centre, while pursuing my Ph.D. at the Indian Institute of Technology, Dhanbad. Specialising in Geotechnical and Geosynthetic research, I'm deeply committed to advancing knowledge in these fields.

Skilled in project management, Python, and AI, I bring a diverse set of capabilities to collaborative research endeavours. I thrive on exploring opportunities to contribute to meaningful projects and engage in impactful collaborations..</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

import React from 'react';
import './Research.css'; // Import the font CSS

const projects = [
  {
    title: 'M.Tech - Evaluation of Geotextile Tubes to Dewater Sand of Coastal Areas',
    abstract: `The study focuses on geotextile tube technology, which has become a more efficient solution for constructing coastal protective structures like embankments, jetties, and breakwaters. Geotextiles, woven into permeable fabrics, are used to enhance stability and reduce erosion. The research investigates the effect of different geotextile stitching methods on the drainage performance of geotubes using a hanging bag test. Two bag types were tested: one with horizontally aligned strings and another with vertically aligned strings. The study evaluates soil-geotextile compatibility in terms of permeability, flow rate, and gradient ratio. By modifying properties such as thickness, apparent opening size, and mass per unit area, the effects on dewatering mechanisms were observed. The tests used natural soil sediments and compared the final solids concentration in dewatering slurries. An improved pressure application mechanism was introduced, leading to the development of an empirical model to predict the dewatering performance of large-scale geotextile tubes.`,
    supervisor: 'Dr. Mahesh Patel',
  },
  {
    title: 'B.Tech - Laboratory Shear Strength Studies of Soil Admixed with Plastic Waste',
    abstract: `The growing concern over plastic waste accumulation and its environmental impact has prompted innovative approaches for waste management and sustainability. One such approach is the incorporation of plastic waste into soil to enhance geotechnical properties, especially shear strength, which is critical for infrastructure stability. This study investigates the shear strength behavior of soil mixed with different proportions of plastic waste under controlled laboratory conditions. A series of direct shear tests were conducted on soil samples with varying plastic content to assess the effects on cohesion, angle of internal friction, and overall shear strength. The results reveal that the addition of plastic waste significantly alters the mechanical behavior of the soil, showing potential for enhancing soil strength in specific proportions.`,
    supervisor: 'Dr. Mahesh Patel',
  },
];

const ResearchPapers = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 p-6">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col md:flex-row max-w-4xl w-full mb-6 border rounded-lg shadow-lg bg-white">
          <div className="p-6 w-full">
            <h2 className="text-3xl font-semibold text-gray-800">{project.title}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{project.abstract}</p>
            <p className="mt-4 text-gray-500 italic">Supervisor: {project.supervisor}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResearchPapers;

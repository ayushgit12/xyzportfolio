import React from 'react';

function Education() {
  return (
    <section id="education" className="p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul className="list-disc list-inside">
          <li className="mb-4">
            <strong>Ph.D. (Pursuing)</strong> – IIT Dhanbad <br />
            Specialization: Geotechnical and Geo-Environmental Engineering
          </li>
          <li className="mb-4">
            <strong>M.Tech in Geotechnical and Geo-Environmental Engineering</strong> – NIT Jalandhar (2022) <br />
            CGPA: 8.0
          </li>
          <li className="mb-4">
            <strong>B.Tech in Civil Engineering</strong> – RGPV Bhopal (2016) <br />
            CGPA: 7.28
          </li>
          <li className="mb-4">
            <strong>Higher Secondary (12th)</strong> – Ryan International School, Jabalpur <br />
          </li>
          <li>
            <strong>High School (10th)</strong> – Ryan International School, Jabalpur <br />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;

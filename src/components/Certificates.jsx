import React from 'react';
import { FaCertificate, FaDownload } from 'react-icons/fa'; // Import icons from React Icons

function Certificates() {
  const certificateData = [
    {
      name: 'Geotechnical Engineering Webinar',
      provider: 'Akaar',
      url: 'https://drive.google.com/file/d/10TRYxj6DZzOJkzHqhopeXYmdTVTlM_BU/view?usp=drive_link',
    },
    {
      name: 'Analysis and Design of Structures',
      provider: 'NIT Jalandhar',
      url: 'https://drive.google.com/file/d/11siklTsMI2NX6Z-knEJIkBQyIJywLeNt/view?usp=drive_link',
    },
    {
      name: 'Enviro WebTalk',
      provider: 'Lovely Professional University',
      url: 'https://drive.google.com/file/d/11y7_L9wMuRHq-rtCUtuEeLfo4jCecaQn/view?usp=drive_link',
    },
    {
      name: 'TEQIP III Sponsored One Week Online Short Term Course',
      provider: 'NIT Jalandhar',
      url: 'https://drive.google.com/file/d/1-IphjD0sXHyaQ5rydrS0aH6TqK0fH1nB/view?usp=drive_link',
    },
    {
      name: 'WebStruct 2021',
      provider: 'Lovely Professional University',
      url: 'https://drive.google.com/file/d/1-I_wMBQYD1QIiH3PtDqvlDWjuue5dlXo/view?usp=drive_link',
    },
    {
      name: 'National Webinar on Sustainable Ash Disposal',
      provider: 'IGS Jabalpur Chapter',
      url: 'https://drive.google.com/file/d/1-LUzvAkHYj6VG1pob0i9KJR_-J3PmDM5/view?usp=drive_link',
    },
    
    {
      name: 'Webinar on "Design & Analysis of Geogrid Reinforced Soil Wall"',
      provider: 'NIT Jalandhar',
      url: 'https://drive.google.com/file/d/10kgYnu12lIhcc9D4zpo0BmYI0_OvCee5/view?usp=drive_link',
    },
    {
      name: 'Sustainable Concrete Construction- Issues & Challenges',
      provider: 'NIT Jalandhar',
      url: 'https://drive.google.com/file/d/11nVpL4eSeoa3kIaMd2BGD2VOWLdxJzyk/view?usp=drive_link',
    },
    {
      name: 'GeoLive 2021',
      provider: 'Lovely Professional University',
      url: 'https://drive.google.com/file/d/11uwoGE-BwHAYLGKo_BfkcgeM8k-DXrOV/view?usp=drive_link',
    },
    {
      name: 'International Conference on Thermo-Fluids and System Design(ICTFSD 2022)',
      provider: 'BIT Mesra',
      url: 'https://drive.google.com/file/d/1-WyZJLhKEyFZNUdPSKfArwLFW1Vt3QBp/view?usp=drive_link',
    },
    {
      name: 'Webinar on "Design & Analysis of Geogrid Reinforced Soil Wall"',
      provider: 'NIT Jalandhar',
      url: 'https://drive.google.com/file/d/1-WGiQ7FoQPLSqdGXVmtYkDF3N-YJaDxR/view?usp=drive_link',
    },
    {
      name: 'SUSTAINABLE DEVELOPMENTS AND PRACTICES IN GEOTECHNICAL & GEOENVIRONMENTAL ENGINEERINC',
      provider: 'Rajagiri School of Engineering and Technology',
      url: 'https://drive.google.com/file/d/122_wes-iGRBN0pgAZVJqnOYRuD5gt8Q6/view?usp=drive_link',
    },
    {
      name: 'Introduction to Various Civil Engineering Softwares (Part 01)',
      provider: 'Lovely Professional University',
      url: 'https://drive.google.com/file/d/11kyXq3zql_xh6GQwzOigvo5T549kLDBQ/view?usp=drive_link',
    },
   
  ];

  return (
    <section id="certificates" className="p-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Certificates</h2>
        <ul className="list-disc list-inside space-y-4">
          {certificateData.map((certificate, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaCertificate className="text-blue-500" /> {/* Certificate Icon */}
                <span>{certificate.name} - {certificate.provider}</span>
              </div>
              <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition space-x-2"
              >
                <FaDownload /> {/* Download Icon */}
                <span>Download</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certificates;

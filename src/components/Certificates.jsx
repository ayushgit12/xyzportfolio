import React from 'react';

const certificates = [
  {
    name: 'Geotechnical Engineering Webinar',
    provider: 'Akaar',
    url: 'https://drive.google.com/file/d/10TRYxj6DZzOJkzHqhopeXYmdTVTlM_BU/view?usp=drive_link',
    type: 'pdf',
  },
  {
    name: 'Analysis and Design of Structures',
    provider: 'NIT Jalandhar',
    url: 'https://drive.google.com/file/d/11siklTsMI2NX6Z-knEJIkBQyIJywLeNt/view?usp=drive_link',
    type: 'pdf',
  },
  {
    name: 'Enviro WebTalk',
    provider: 'Lovely Professional University',
    url: 'https://drive.google.com/file/d/11y7_L9wMuRHq-rtCUtuEeLfo4jCecaQn/view?usp=drive_link',
    type: 'pdf',
  },
  {
    name: 'TEQIP III Sponsored One Week Online Short Term Course',
    provider: 'NIT Jalandhar',
    url: 'https://drive.google.com/file/d/1-IphjD0sXHyaQ5rydrS0aH6TqK0fH1nB/view?usp=drive_link',
    type: 'pdf',
  },
  {
    name: 'WebStruct 2021',
    provider: 'Lovely Professional University',
    url: 'https://drive.google.com/file/d/1-I_wMBQYD1QIiH3PtDqvlDWjuue5dlXo/view?usp=drive_link',
    type: 'pdf',
  },
  {
    name: 'National Webinar on Sustainable Ash Disposal',
    provider: 'IGS Jabalpur Chapter',
    url: 'https://drive.google.com/file/d/1-LUzvAkHYj6VG1pob0i9KJR_-J3PmDM5/view?usp=drive_link',
    type: 'pdf',
  },
  {
    name: 'Webinar on "Design & Analysis of Geogrid Reinforced Soil Wall"',
    provider: 'NIT Jalandhar',
    url: 'https://drive.google.com/file/d/10kgYnu12lIhcc9D4zpo0BmYI0_OvCee5/view?usp=drive_link',
    type: 'pdf',
  },
  {
    name: 'Sustainable Concrete Construction- Issues & Challenges',
    provider: 'NIT Jalandhar',
    url: 'https://drive.google.com/file/d/11nVpL4eSeoa3kIaMd2BGD2VOWLdxJzyk/view?usp=drive_link',
    type: 'pdf',
  },
  {
    name: 'GeoLive 2021',
    provider: 'Lovely Professional University',
    url: 'https://drive.google.com/file/d/11uwoGE-BwHAYLGKo_BfkcgeM8k-DXrOV/view?usp=drive_link',
    type: 'pdf',
  },
  {
    name: 'International Conference on Thermo-Fluids and System Design(ICTFSD 2022)',
    provider: 'BIT Mesra',
    url: 'https://drive.google.com/file/d/1-WyZJLhKEyFZNUdPSKfArwLFW1Vt3QBp/view?usp=drive_link',
    type: 'pdf',
  },
  {
    name: 'SUSTAINABLE DEVELOPMENTS AND PRACTICES IN GEOTECHNICAL & GEOENVIRONMENTAL ENGINEERING',
    provider: 'Rajagiri School of Engineering and Technology',
    url: 'https://drive.google.com/file/d/122_wes-iGRBN0pgAZVJqnOYRuD5gt8Q6/view?usp=drive_link',
    type: 'pdf',
  },
  {
    name: 'Introduction to Various Civil Engineering Softwares (Part 01)',
    provider: 'Lovely Professional University',
    url: 'https://drive.google.com/file/d/11kyXq3zql_xh6GQwzOigvo5T549kLDBQ/view?usp=drive_link',
    type: 'pdf',
  },
];

const Certificates = () => {
  return (
    <div className="bg-white py-10 px-14 min-h-screen">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Certificates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((certificate, index) => (
          <div key={index} className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
            {/* Display PDF in iframe */}
            <iframe
              src={`https://drive.google.com/file/d/${certificate.url.split('/d/')[1].split('/')[0]}/preview`}
              title={certificate.name}
              className="w-full h-64"
            ></iframe>
            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-gray-800">{certificate.name}</h2>
              <p className="text-gray-600">{certificate.provider}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;

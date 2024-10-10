import React from 'react';

const TechnicalWork = () => {
  const events = [
    {
      title: 'National Webinar on Bridge Construction in India: Practice and Challenges',
      date: 'July 2023',
      location: 'IGS Jabalpur Chapter',
      details: `Organized a National Webinar on "Bridge Construction in India: Practice and Challenges" in July 2023, 
                in collaboration with the IGS Jabalpur Chapter and IGS Students' Chapter to honor Late Dr. Dinesh K. Khare. 
                Coordinated with speakers, including Dr. Abhishek Sharma from NIT Jalandhar, managed event logistics, 
                promotions, and facilitated smooth execution of the webinar attended by [number] participants. 
                Additionally, handled participant engagement and distributed e-certificates.`,
    },
    {
      title: 'National Online Webinar on Integrated Urban Water Management Practices in India',
      date: 'September 2022',
      location: 'St. Aloysius Institute of Technology',
      details: `Organized a National Online Webinar on "Integrated Urban Water Management Practices in India" at St. Aloysius Institute of Technology in September 2022, 
                in collaboration with the Department of Civil Engineering. Coordinated with keynote speaker Dr. Nitish Kumar Sharma from Chandigarh University and the event team. 
                Managed promotions, registrations, and ensured seamless online execution with over [number] attendees, providing e-certificates to participants.`,
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen  px-24~">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Event Highlights</h1>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{event.title}</h2>
            <p className="text-gray-500 mb-2">
              <span className="font-medium">Date:</span> {event.date}
            </p>
            <p className="text-gray-500 mb-2">
              <span className="font-medium">Location:</span> {event.location}
            </p>
            <p className="text-gray-700">{event.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// export default EventDetails;


export default TechnicalWork;

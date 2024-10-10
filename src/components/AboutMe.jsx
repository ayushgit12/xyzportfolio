import React from "react";
import dp from "../assets/dp.jpeg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="about" className="p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto md:flex items-center">
        <img src={dp} alt="Profile" className="w-40 mr-8 text-center h-fit " />

        <div>
          <h1 className="text-2xl font-normal mb-2 changefont">
            RAJUL DWIVEDI{" "}
          </h1>
          <p className="text-gray-600  changefont2">
            {" "}
            I am Rajul Dwivedi, currently employed at the CSIR-Central Institute
            of Mining and Fuel Research, Nagpur Research Centre, while pursuing
            a Ph.D. in Geotechnical and Mining Engineering at the Indian
            Institute of Technology, Dhanbad. I hold an M.Tech in Geotechnical
            and Geoenvironmental Engineering from Dr. B.R. Ambedkar National
            Institute of Technology, Jalandhar, and a B.Tech in Civil
            Engineering from the University of RGPV. My expertise spans
            geotechnical research, project management, Python programming, and
            artificial intelligence, enabling me to contribute to cutting-edge,
            multidisciplinary projects. I am keen on engaging in impactful
            collaborations that advance both research and practical applications
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import a from '../assets/projects/a.png';
import b from '../assets/projects/b.png';
import c from '../assets/projects/c.png';
import d from '../assets/projects/d.png';
import e from '../assets/projects/e.png';

function Projects() {


  const items = [
    <img src={a} className='mx-auto h-96' alt="Project 1" />,
    <img src={b} className='mx-auto h-96' alt="Project 2" />,
    <img src={c} className='mx-auto h-96' alt="Project 3" />,
    <img src={d} className='mx-auto h-96' alt="Project 4" />,
    <img src={e} className='mx-auto h-96' alt="Project 3" />,
  ]

  return (
    <section id="projects" className="p-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        
        <AliceCarousel autoPlayInterval={1000} infinite autoPlay mouseTracking items={items} />

      </div>
    </section>
  );
}

export default Projects;

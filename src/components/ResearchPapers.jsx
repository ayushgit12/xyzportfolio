import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import a from '../assets/researchPaper/a.jpeg';
import b from '../assets/researchPaper/b.jpeg';
import c from '../assets/researchPaper/c.jpeg';
import d from '../assets/researchPaper/d.jpeg';

function ResearchPapers() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img src={a} className='mx-auto h-[500px]' alt="Research Paper 1" onDragStart={handleDragStart} />,
    <img src={b} className='mx-auto h-[500px]' alt="Research Paper 2" onDragStart={handleDragStart} />,
    <img src={c} className='mx-auto h-[500px]' alt="Research Paper 3" onDragStart={handleDragStart} />,
    <img src={d} className='mx-auto h-[500px]' alt="Research Paper 4" onDragStart={handleDragStart} />,
  ];

  return (
    <section id="research" className="p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Research Papers</h2>
        <AliceCarousel
          mouseTracking
          items={items}
          
          controlsStrategy="responsive"
          autoPlay
          autoPlayInterval={1000}
          infinite
          disableButtonsControls={false} // Show buttons to manually scroll
        />
      </div>
    </section>
  );
}

export default ResearchPapers;

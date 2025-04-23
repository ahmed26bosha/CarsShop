import React from 'react'
import '../App.css'
import img1 from '../images/Background+Border.png';
import img2 from '../images/Background+Border (1).png';
import img3 from '../images/Background+Border (2).png';
import img4 from '../images/Background+Border (3).png';
import img5 from '../images/Background+Border (4).png';
import img6 from '../images/Background+Border (5).png';
import { useEffect, useRef, useState } from 'react';

function useInView(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
}

const Explore = () => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className={`explore-section ${isVisible ? 'visible' : ''}`}>
      <div className='explore fade-in delay-1'> 
        <h1>Explore Our Premium Brands</h1>
        <a href="#brands">Show All Brands</a>
      </div>
      <div className='images'>
        <img src={img1} alt='' className='fade-in delay-2' />
        <img src={img2} alt='' className='fade-in delay-3' />
        <img src={img3} alt='' className='fade-in delay-4' />
        <img src={img4} alt='' className='fade-in delay-5' />
        <img src={img5} alt='' className='fade-in delay-6' />
        <img src={img6} alt='' className='fade-in delay-7' />
      </div>
    </div>
  )
}

export default Explore;

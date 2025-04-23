import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const vehicles = [
  {
    img: require('../images/Link.png'),
    title: 'Ford Transit – 2021',
    desc: '4.0 D5 PowerPulse Momentum 5dr AWD',
    miles: '2500 Miles',
    fuel: 'Diesel',
    transmission: 'Manual',
    price: '$22,000',
  },
  {
    img: require('../images/Link (1).png'),
    title: 'New GLC – 2023',
    desc: '4.0 D5 PowerPulse Momentum 5dr AWD',
    miles: '50 Miles',
    fuel: 'Petrol',
    transmission: 'Automatic',
    price: '$95,000',
  },
  {
    img: require('../images/Link (2).png'),
    title: 'Audi A6 3.5 – New',
    desc: '3.5 D5 PowerPulse Momentum 5dr AWD',
    miles: '100 Miles',
    fuel: 'Petrol',
    transmission: 'Automatic',
    price: '$58,000',
  },
  {
    img: require('../images/Link (3).png'),
    title: 'Corolla Altis – 2023',
    desc: '3.5 D5 PowerPulse Momentum 5dr AWD',
    miles: '15000 Miles',
    fuel: 'Petrol',
    transmission: 'CVT',
    price: '$45,000',
  },
  {
    img: require('../images/Link (4).png'),
    title: 'Ford Explorer 2023',
    desc: '3.5 D5 PowerPulse Momentum 5dr AWD',
    miles: '10 Miles',
    fuel: 'Diesel',
    transmission: 'Automatic',
    price: '$35,000',
  },
];

const Vehicless = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`vehicles-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="vehicles-header">
        <h1>Explore All Vehicles</h1>
        <a href="#view">View All</a>
      </div>
      <div className="vehicles-tabs">
        <a href="#in-stock">In Stock</a>
        <a href="#new-cars">New Cars</a>
        <a href="#used-cars">Used Cars</a>
      </div>
      <div className="vehicles-grid">
        {vehicles.map((v, index) => (
          <div className="vehicle-card" key={index}>
            <img src={v.img} alt={v.title} />
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
            <div className="vehicle-details">
              <span>{v.miles}</span>
              <span>{v.fuel}</span>
              <span>{v.transmission}</span>
            </div>
            <div className="vehicle-footer">
              <strong>{v.price}</strong>
              <a href="#details">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicless;

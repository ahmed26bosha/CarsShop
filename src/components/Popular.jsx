import React, { useState, useEffect } from 'react';
import img1 from '../images/Linke.png'
import img2 from '../images/Linke(1).png';
import img3 from '../images/car12-640x550.jpg.png';
const Popular = () => {
  const cars = [
    {
      id: 1,
      model: 'Audi AS – 2023',
      description: '22 CD PowerPulse Nomination Set ANO...',
      specs: ['SCO Miles', 'Pistol', 'Automatic'],
      price: '$45,000',
      image: img1
    },
    {
      id: 2,
      model: 'Audi AI – 2022',
      description: '32 CD PowerPulse Nomination Set ANO...',
      specs: ['ICO Miles', 'Diesel', 'CVT'],
      price: '$120,000',
      image: img2
    },
    {
      id: 4,
      model: 'Ford Mustang – 2023',
      description: 'GT Premium Fastback',
      specs: ['12,000 Miles', 'Gasoline', 'Automatic'],
      price: '$52,000',
      image: img3
    },
    {
      id: 5,
      model: 'Audi AS – 2023',
      description: '22 CD PowerPulse Nomination Set ANO...',
      specs: ['SCO Miles', 'Pistol', 'Automatic'],
      price: '$45,000',
      image: img1
    },
    {
      id: 6,
      model: 'Audi AI – 2022',
      description: '32 CD PowerPulse Nomination Set ANO...',
      specs: ['ICO Miles', 'Diesel', 'CVT'],
      price: '$120,000',
      image: img2
    },
    {
      id: 7,
      model: 'Ford Mustang – 2023',
      description: 'GT Premium Fastback',
      specs: ['12,000 Miles', 'Gasoline', 'Automatic'],
      price: '$52,000',
      image: img3
    },
    {
      id: 8,
      model: 'Audi AS – 2023',
      description: '22 CD PowerPulse Nomination Set ANO...',
      specs: ['SCO Miles', 'Pistol', 'Automatic'],
      price: '$45,000',
      image: img1
    },
    {
      id: 9,
      model: 'Audi AI – 2022',
      description: '32 CD PowerPulse Nomination Set ANO...',
      specs: ['ICO Miles', 'Diesel', 'CVT'],
      price: '$120,000',
      image: img2
    },
    {
      id: 10,
      model: 'Ford Mustang – 2023',
      description: 'GT Premium Fastback',
      specs: ['12,000 Miles', 'Gasoline', 'Automatic'],
      price: '$52,000',
      image: img3
    },    {
      id: 11,
      model: 'Audi AS – 2023',
      description: '22 CD PowerPulse Nomination Set ANO...',
      specs: ['SCO Miles', 'Pistol', 'Automatic'],
      price: '$45,000',
      image: img1
    },
    {
      id: 12,
      model: 'Audi AI – 2022',
      description: '32 CD PowerPulse Nomination Set ANO...',
      specs: ['ICO Miles', 'Diesel', 'CVT'],
      price: '$120,000',
      image: img2
    },
    {
      id: 13,
      model: 'Ford Mustang – 2023',
      description: 'GT Premium Fastback',
      specs: ['12,000 Miles', 'Gasoline', 'Automatic'],
      price: '$52,000',
      image: img3
    },    {
      id: 14,
      model: 'Audi AS – 2023',
      description: '22 CD PowerPulse Nomination Set ANO...',
      specs: ['SCO Miles', 'Pistol', 'Automatic'],
      price: '$45,000',
      image: img1
    },
    {
      id: 15,
      model: 'Audi AI – 2022',
      description: '32 CD PowerPulse Nomination Set ANO...',
      specs: ['ICO Miles', 'Diesel', 'CVT'],
      price: '$120,000',
      image: img2
    },
    {
      id: 16,
      model: 'Ford Mustang – 2023',
      description: 'GT Premium Fastback',
      specs: ['12,000 Miles', 'Gasoline', 'Automatic'],
      price: '$52,000',
      image: img3
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const cardWidth = 320; // بالـ px تقريبا

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsToShow(1);
      } else if (width < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < cars.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="popular-makes">
      <div className="popular-header">
        <section className="header-top">
          <h1>Popular Makes</h1>
          <a href="g" className="view-all">View All</a>
        </section>
        <hr />
        <section className="brand-links">
          <a href="a">Audi</a>
          <a href="f">Ford</a>
          <a href="m">Mercedes Benz</a>
        </section>
      </div>
      {/* header & brands sections as before */}
      
      <section className="cars-section">
        <button className="carousel-button left" onClick={prevSlide}>‹</button>

        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + 20)}px)`,
            }}
          >
            {cars.map((car) => (
              <div key={car.id} className="car-card">
                <div className="car-image-container">
                  <img src={car.image} alt={car.model} className="car-image" />
                </div>
                <div className="car-details">
                  <h2>{car.model}</h2>
                  <p className="car-description">{car.description}</p>
                  <ul className="car-specs">
                    {car.specs.map((spec, idx) => (
                      <li key={idx}>{spec}</li>
                    ))}
                  </ul>
                  <div className="price-section">
                    <h3>{car.price}</h3>
                    <a href="ث" className="viber-link">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-button right" onClick={nextSlide}>›</button>
      </section>
    </div>
  );
};

export default Popular;

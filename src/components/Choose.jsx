import React, { useEffect, useRef, useState } from 'react';
import img7 from "../images/f1.svg fill.png";
import img8 from "../images/f2.svg fill.png";
import img9 from "../images/f3.svg fill.png";
import img10 from "../images/f4.svg fill.png";

const Choose = () => {
  const chooseRef = useRef(null);
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
      { threshold: 0.3 }
    );

    if (chooseRef.current) {
      observer.observe(chooseRef.current);
    }

    return () => {
      if (chooseRef.current) {
        observer.unobserve(chooseRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`choose-container ${isVisible ? 'visible' : ''}`}
      ref={chooseRef}
    >
      <div>
        <h1>Why Choose Us?</h1>
      </div>
      <div className='choose'>
        <section>
          <img src={img7} alt="" />
          <h3>Special Financing Offers</h3>
          <p>Our stress-free finance department that can
            find financial solutions to save you money.
          </p>
        </section>
        <section>
          <img src={img8} alt="" />
          <h3>Trusted Car Dealership</h3>
          <p>Our stress-free finance department that can
            find financial solutions to save you money.
          </p>
        </section>
        <section>
          <img src={img9} alt="" />
          <h3>Transparent Pricing</h3>
          <p>Our stress-free finance department that can
            find financial solutions to save you money.
          </p>
        </section>
        <section>
          <img src={img10} alt="" />
          <h3>Expert Car Service</h3>
          <p>Our stress-free finance department that can
            find financial solutions to save you money.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Choose;

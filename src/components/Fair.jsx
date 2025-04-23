import React, { useEffect, useRef, useState } from 'react';
import fairImg from '../images/Background1.png';

const Fair = () => {
  const fairRef = useRef(null);
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

    if (fairRef.current) {
      observer.observe(fairRef.current);
    }

    return () => {
      if (fairRef.current) {
        observer.unobserve(fairRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fair ${isVisible ? 'visible' : ''}`}
      ref={fairRef}
    >
      <div className="image">
        <img src={fairImg} alt="Car" />
        <button className="play-button">▶</button>
      </div>
      <div className="text">
        <section>
          <h1>
            Get A Fair Price For Your Car<br />
            Sell To Us Today
          </h1>
          <p className="desc">
            We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of.
          </p>
          <ul>
            <li>✅ We are the UK’s largest provider, with more patrols in more places</li>
            <li>✅ You get 24/7 roadside assistance</li>
            <li>✅ We fix 4 out of 5 cars at the roadside</li>
          </ul>
          <button className="get-started">Get Started ↗</button>
        </section>
      </div>
    </div>
  );
};

export default Fair;

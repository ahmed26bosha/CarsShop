import React, { useState, useEffect, useRef } from 'react';

const Sale = () => {
  const [counters, setCounters] = useState([
    { value: 0, target: 836, text: "CARS FOR SALE", suffix: "M" },
    { value: 0, target: 738, text: "DEALER REVIEWS", suffix: "M" },
    { value: 0, target: 100, text: "VISITORS PER DAY", suffix: "M" },
    { value: 0, target: 238, text: "VERIFIED DEALERS", suffix: "M" }
  ]);

  const componentRef = useRef(null);
  const animationFrameId = useRef(null);

  const startCountAnimation = () => {
    // إلغاء أي عملية عد جارية
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    const duration = 2000; // مدة الحركة بالميلي ثانية
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setCounters(prevCounters => 
        prevCounters.map(counter => ({
          ...counter,
          value: Math.floor(progress * counter.target)
        }))
      );

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        // التأكد من الوصول للقيمة المطلوبة بالضبط
        setCounters(prevCounters => 
          prevCounters.map(counter => ({
            ...counter,
            value: counter.target
          }))
        );
      }
    };

    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // إعادة تعيين العدادات إلى الصفر وإعادة التشغيل
            setCounters(prevCounters => 
              prevCounters.map(counter => ({
                ...counter,
                value: 0
              }))
            );
            startCountAnimation();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} className="sale-container">
      {counters.map((counter, index) => (
        <div key={index} className="counter-item">
          <div className="counter-value">
            {counter.value}{counter.suffix}
          </div>
          <div className="counter-text">{counter.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Sale;
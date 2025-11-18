import React, { useState, useEffect } from 'react';
import Styles from "./ServiceSlides.module.css";

const ServiceSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Digital Certificate Services",
      description: "Get your birth, marriage, and death certificates online with our streamlined digital services.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Property Registration",
      description: "Register your properties seamlessly through our online portal with secure verification.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Business Licensing",
      description: "Apply for business licenses and permits with our efficient online application system.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Public Grievance Redressal",
      description: "Submit and track your grievances with our transparent public service system.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={Styles.serviceSlidesComponent}>
      <div className={Styles.slidesContainer}>
        <div className={Styles.slideWrapper}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${Styles.slide} ${index === currentSlide ? Styles.active : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={Styles.slideContent}>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <div className={Styles.slideButtons}>
                  <button 
                    className={Styles.btnPrimary}
                    onClick={() => window.location.href = '/Error'}
                  >
                    Learn More
                  </button>
                  <button 
                    className={Styles.btnSecondary}
                    onClick={() => window.location.href = '/Error'}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={Styles.slideIndicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${Styles.indicator} ${index === currentSlide ? Styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSlides;
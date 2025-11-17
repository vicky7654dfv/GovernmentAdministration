import { useState, useEffect } from 'react';
import styles from './Schemes.module.css';
import Img1 from "../../assets/Schemes/1.webp"
import Img2 from "../../assets/Schemes/2.webp"
import Img3 from "../../assets/Schemes/3.webp"
import Img4 from "../../assets/Schemes/4.webp"

const Schemes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const schemesData = [
    {
      id: 1,
      title: "Digital India Initiative",
      description: "Transforming India into a digitally empowered society",
      image: Img1
    },
    {
      id: 2,
      title: "Healthcare for All",
      description: "Ensuring quality healthcare services reach every citizen",
      image: Img2
    },
    {
      id: 3,
      title: "Education Empowerment",
      description: "Building the future through quality education programs",
      image: Img3
    },
    {
      id: 4,
      title: "Infrastructure Development",
      description: "Building modern infrastructure for a progressive nation",
      image: Img4
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === schemesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [schemesData.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div data-aos="fade" className={styles.schemesContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>National Programs & Public Welfare Initiatives</h2>
        <p className={styles.subtitle}>
          Transforming lives through innovative government programs and services
        </p>
      </div>
      
      <div className={styles.carousel}>
        <div className={styles.carouselTrack}>
          {schemesData.map((scheme, index) => (
            <div
              key={scheme.id}
              className={`${styles.slide} ${
                index === currentIndex ? styles.active : ''
              }`}
            >
              <div className={styles.imageContainer}>
                <img
                  src={scheme.image}
                  alt={scheme.title}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.schemeTitle}>{scheme.title}</h3>
                <p className={styles.schemeDescription}>{scheme.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.indicators}>
          {schemesData.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schemes;
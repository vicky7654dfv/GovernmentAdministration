import { useState, useEffect } from 'react';
import styles from './HorizontalScheme.module.css';
import Img1 from "../../assets/HorizontalScheme/1.webp"
import Img2 from "../../assets/HorizontalScheme/2.webp"
import Img3 from "../../assets/HorizontalScheme/3.webp"
import Img4 from "../../assets/HorizontalScheme/4.webp"
import Img5 from "../../assets/HorizontalScheme/5.webp"
import Img6 from "../../assets/HorizontalScheme/6.webp"
import Img7 from "../../assets/HorizontalScheme/7.webp"
import Img8 from "../../assets/HorizontalScheme/8.webp"
import { useNavigate } from 'react-router-dom';

const HorizontalScheme = () => {
  const [isPaused, setIsPaused] = useState(false);

  const schemesData = [
    {
      id: 1,
      title: "Digital India",
      image: Img1
    },
    {
      id: 2,
      title: "Healthcare",
      image: Img2
    },
    {
      id: 3,
      title: "Education",
      image: Img3
    },
    {
      id: 4,
      title: "Infrastructure",
      image: Img4
    },
    {
      id: 5,
      title: "Agriculture",
      image: Img5
    },
    {
      id: 6,
      title: "Renewable Energy",
      image: Img6
    },
    {
      id: 7,
      title: "Rural Development",
      image: Img7
    },
    {
      id: 8,
      title: "Women Empowerment",
      image: Img8
    }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedSchemes = [...schemesData, ...schemesData];

  const navigate= useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Government Initiatives Gallery</h2>
        <p className={styles.subtitle}>
          Explore our ongoing projects and development schemes across the nation
        </p>
      </div>

      <div 
        className={styles.scrollContainer}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={`${styles.scrollTrack} ${isPaused ? styles.paused : ''}`}
        >
          {duplicatedSchemes.map((scheme, index) => (
            <div key={`${scheme.id}-${index}`} className={styles.schemeCard}>
              <div className={styles.imageWrapper}>
                <img 
                  src={scheme.image} 
                  alt={scheme.title}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.content}>
                    <h3 className={styles.schemeTitle}>{scheme.title}</h3>
                    <div className={styles.viewButton} onClick={()=>{navigate("/Error")}}>View Details</div>
                  </div>
                </div>
                <div className={styles.glowEffect}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScheme;
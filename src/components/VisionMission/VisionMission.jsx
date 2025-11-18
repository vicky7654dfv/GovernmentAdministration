import { useRef, useEffect, useState } from 'react';
import styles from './VisionMission.module.css';

const VisionMission = () => {
  const [animated, setAnimated] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={componentRef} className={styles.container} data-aos="fade">
      <div className={styles.header}>
        <h2 className={styles.title}>Our Vision & Mission</h2>
        <p className={styles.subtitle}>
          Building a progressive nation through dedicated governance and citizen empowerment
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.visionSection}>
          <div className={`${styles.visionCard} ${animated ? styles.animated : ''}`}>
            <div className={styles.cardIcon}>
              <i className="fa-solid fa-eye"></i>
            </div>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardDescription}>
              To create a digitally empowered, economically vibrant, and socially inclusive 
              nation where every citizen has equal opportunities for growth and development. 
              We envision a corruption-free governance system that serves as a global benchmark 
              for transparency and efficiency.
            </p>
            <div className={styles.visionGoals}>
              <div className={styles.goal}>
                <i className="fa-solid fa-check"></i>
                <span>Digital India by 2025</span>
              </div>
              <div className={styles.goal}>
                <i className="fa-solid fa-check"></i>
                <span>Universal Healthcare Access</span>
              </div>
              <div className={styles.goal}>
                <i className="fa-solid fa-check"></i>
                <span>Quality Education for All</span>
              </div>
              <div className={styles.goal}>
                <i className="fa-solid fa-check"></i>
                <span>Sustainable Development</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.missionSection}>
          <div className={`${styles.missionCard} ${animated ? styles.animated : ''}`}>
            <div className={styles.cardIcon}>
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardDescription}>
              To transform governance through technology, ensure last-mile delivery of services, 
              and create an ecosystem that fosters innovation, entrepreneurship, and sustainable 
              development while upholding the highest standards of integrity and accountability.
            </p>
            
            <div className={styles.missionProgress}>
              <h4 className={styles.progressTitle}>Key Initiatives Progress</h4>
              
              <div className={styles.progressItem}>
                <div className={styles.progressHeader}>
                  <span>Digital Infrastructure</span>
                  <span>85%</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={`${styles.progressFill} ${animated ? styles.animated : ''}`}
                    style={{ width: animated ? '85%' : '0%' }}
                  ></div>
                </div>
              </div>

              <div className={styles.progressItem}>
                <div className={styles.progressHeader}>
                  <span>Rural Development</span>
                  <span>72%</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={`${styles.progressFill} ${animated ? styles.animated : ''}`}
                    style={{ width: animated ? '72%' : '0%' }}
                  ></div>
                </div>
              </div>

              <div className={styles.progressItem}>
                <div className={styles.progressHeader}>
                  <span>Healthcare Access</span>
                  <span>68%</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={`${styles.progressFill} ${animated ? styles.animated : ''}`}
                    style={{ width: animated ? '68%' : '0%' }}
                  ></div>
                </div>
              </div>

              <div className={styles.progressItem}>
                <div className={styles.progressHeader}>
                  <span>Education Reform</span>
                  <span>78%</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={`${styles.progressFill} ${animated ? styles.animated : ''}`}
                    style={{ width: animated ? '78%' : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.valuesSection}>
        <h3 className={styles.valuesTitle}>Our Core Values</h3>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <h4>Integrity</h4>
            <p>Upholding the highest ethical standards in all our actions</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <i className="fa-solid fa-eye"></i>
            </div>
            <h4>Transparency</h4>
            <p>Open and accountable governance for public trust</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <i className="fa-solid fa-people-arrows"></i>
            </div>
            <h4>Inclusivity</h4>
            <p>Ensuring equal opportunities for all citizens</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <i className="fa-solid fa-rocket"></i>
            </div>
            <h4>Innovation</h4>
            <p>Embracing technology for better governance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
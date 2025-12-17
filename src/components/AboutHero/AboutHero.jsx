import { useState, useEffect, useRef } from 'react';
import styles from './AboutHero.module.css';

const AboutHero = () => {
  const [counters, setCounters] = useState({
    citizens: 0,
    schemes: 0,
    departments: 0
  });
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const targetValues = { citizens: 1400000000, schemes: 250, departments: 78 };
          const duration = 3000;
          const steps = 60;
          const stepValues = {};
          
          Object.keys(targetValues).forEach(key => {
            stepValues[key] = targetValues[key] / steps;
          });

          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;
            setCounters(prev => ({
              citizens: Math.min(Math.round(prev.citizens + stepValues.citizens), targetValues.citizens),
              schemes: Math.min(Math.round(prev.schemes + stepValues.schemes), targetValues.schemes),
              departments: Math.min(Math.round(prev.departments + stepValues.departments), targetValues.departments)
            }));

            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, duration / steps);
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
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <div className={styles.mainImage}>
              <div className={styles.imagePlaceholder}>
                <i className="fa-solid fa-landmark"></i>
              </div>
            </div>
            <div className={styles.floatingElement1}></div>
            <div className={styles.floatingElement2}></div>
            <div className={styles.floatingElement3}></div>
          </div>
        </div>

        <div className={styles.textSection}>
          <h1 className={styles.title}>
            Serving the Nation with 
            <span className={styles.highlight}> Excellence</span> and 
            <span className={styles.highlight}> Integrity</span>
          </h1>
          
          <p className={styles.description}>
            For over seven decades, our government has been committed to transparent governance, 
            citizen welfare, and national development. We strive to create an ecosystem where 
            every citizen can thrive and contribute to the nation's progress through innovative 
            policies and inclusive growth strategies.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <i className="fa-solid fa-users"></i>
              </div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>
                  {counters.citizens.toLocaleString()}+
                </div>
                <div className={styles.statLabel}>Citizens Served</div>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <i className="fa-solid fa-file-contract"></i>
              </div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>
                  {counters.schemes}+
                </div>
                <div className={styles.statLabel}>Active Schemes</div>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <i className="fa-solid fa-building"></i>
              </div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>
                  {counters.departments}+
                </div>
                <div className={styles.statLabel}>Departments</div>
              </div>
            </div>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIconBox}>
                <i className="fa-solid fa-check-double"></i>
              </div>
              <span>Transparent Governance</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIconBox}>
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <span>Citizen-Centric Services</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIconBox}>
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <span>Digital Transformation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
import { useState, useEffect } from 'react';
import styles from "./Loader.module.css";
import logo from "../../assets/Favicon/government.webp";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading completion after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.loaderWrap} ${!isVisible ? styles.fadeOut : ''}`}>
      <div className={styles.loaderContainer}>
        <img 
          src={logo} 
          alt="Government of Tamil Nadu" 
          className={styles.logo}
        />
        <div className={styles.loaderBar}>
          <div className={styles.loaderProgress}></div>
        </div>
        <p className={styles.loadingText}>Loading Government Services...</p>
      </div>
    </div>
  );
}
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add any initialization logic here if needed
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container} data-aos="fade">
      <div className={styles.errorContent}>
        {/* Animated Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.floatingCircle1}></div>
          <div className={styles.floatingCircle2}></div>
          <div className={styles.floatingCircle3}></div>
          <div className={styles.gridLines}></div>
        </div>

        {/* Main Error Content */}
        <div className={styles.mainContent}>
          <div className={styles.errorNumber}>
            <span className={styles.number4}>4</span>
            <div className={styles.zeroContainer}>
              <div className={styles.orbit}>
                <div className={styles.satellite}></div>
              </div>
              <span className={styles.number0}>0</span>
            </div>
            <span className={styles.number4}>4</span>
          </div>

          <h1 className={styles.title}>Page Not Found</h1>
          
          <p className={styles.description}>
            The page you are looking for seems to have drifted into the digital void. 
            It might have been moved, deleted, or perhaps never existed in the first place. 
            While our team works to bring order to the digital cosmos, you can return to 
            familiar territory and continue exploring our government services and initiatives.
          </p>

          <p className={styles.suggestion}>
            Don't worry, even in the vast expanse of cyberspace, there's always a way back home. 
            Let us guide you to safer digital grounds where you can find all the information 
            you need about our government schemes and services.
          </p>

          <div className={styles.buttonGroup}>
            <button 
              className={styles.primaryButton}
              onClick={handleGoHome}
            >
              <i className="fa-solid fa-house"></i>
              Return to Homepage
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={handleGoBack}
            >
              <i className="fa-solid fa-arrow-left"></i>
              Go Back
            </button>
          </div>

          <div className={styles.helpSection}>
            <h3 className={styles.helpTitle}>Need Immediate Assistance?</h3>
            <div className={styles.helpLinks}>
              <a href="#/Contact" className={styles.helpLink}>
                <i className="fa-solid fa-headset"></i>
                Contact Support
              </a>
              <a href="#/Services" className={styles.helpLink}>
                <i className="fa-solid fa-list"></i>
                Browse Services
              </a>
              <a href="#/FAQ" className={styles.helpLink}>
                <i className="fa-solid fa-circle-question"></i>
                Visit FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Status Information */}
        <div className={styles.statusInfo}>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Error Code:</span>
            <span className={styles.statusValue}>404</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Status:</span>
            <span className={styles.statusValue}>Not Found</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Timestamp:</span>
            <span className={styles.statusValue}>
              {new Date().toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
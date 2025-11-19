import React from "react";
import styles from "./HeroSection.module.css";
import bgVid2 from "../../assets/Banner2/bgVid2.mp4";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.heroSection}>
      <video
        src={bgVid2}
        autoPlay
        muted
        loop
        className={styles.backgroundVideo}
      />
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1>Building a Better Tomorrow</h1>
          <p>
            Join us in our mission to create sustainable development and
            progress for all citizens of Tamil Nadu through innovative
            governance and public welfare initiatives.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => {
              navigate("/Error");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

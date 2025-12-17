import React from 'react';
import styles from './BankingSection.module.css';
import bankVid from '../../assets/Banking/bankVid.mp4';

const BankingSection = () => {
  const handleLearnMore = () => {
    window.location.href = "#/Error";
  };

  const handleApplyLoan = () => {
    window.location.href = "#/Error";
  };

  return (
    <section className={styles.bankingSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2>Financial Inclusion & Empowerment</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>Banking for All</h3>
                <p>Accessible banking services for every citizen, including rural and underprivileged communities.</p>
              </div>
              <div className={styles.feature}>
                <h3>Financial Literacy</h3>
                <p>Comprehensive programs to enhance financial knowledge and money management skills.</p>
              </div>
              <div className={styles.feature}>
                <h3>Bank Funds for Poor</h3>
                <p>Special financial assistance programs designed to support economically weaker sections.</p>
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <button 
                className={`${styles.button} ${styles.learnMore}`}
                onClick={handleLearnMore}
              >
                Learn More
              </button>
              <button 
                className={`${styles.button} ${styles.applyLoan}`}
                onClick={handleApplyLoan}
              >
                Apply for Government Loan
              </button>
            </div>
          </div>
          <div className={styles.videoContainer}>
            <video src={bankVid}
              autoPlay 
              muted 
              loop 
              className={styles.bankingVideo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingSection;
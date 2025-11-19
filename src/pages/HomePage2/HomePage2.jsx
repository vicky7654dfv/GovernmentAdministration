import React from 'react';
import styles from './HomePage2.module.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeroSection from '../../components/HeroSection/HeroSection';
import BankingSection from '../../components/BankingSection/BankingSection';
import LeadershipSection from '../../components/LeadershipSection/LeadershipSection';
import PollsSection from '../../components/PollsSection/PollsSection';

const HomePage2 = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <HeroSection />
      <BankingSection />
      <LeadershipSection />
      <PollsSection />
      <Footer />
    </div>
  );
};

export default HomePage2;
import React from 'react';
import Styles from "./Services.module.css";
import ServiceSlides from '../../components/ServiceSlides/ServiceSlides';
import AadharUpdate from '../../components/AadharUpdate/AadharUpdate';
import CensusData from '../../components/CensusData/CensusData';
import PlansJobs from '../../components/PlansJobs/PlansJobs';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Services = () => {
  return (
    <>
      <Header />
      <div className={Styles.servicesPage}>
        <div className={Styles.servicesHeader}>
          <h1>Government Services Portal</h1>
          <p>Access all government services through our integrated digital platform</p>
        </div>

        <ServiceSlides />
        <AadharUpdate />
        <CensusData />
        <PlansJobs />
      </div>
      <Footer />
    </>
  );
};

export default Services;
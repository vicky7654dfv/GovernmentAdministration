import React, { useState, useEffect, useRef } from 'react';
import Styles from "./PlansJobs.module.css";

const PlansJobs = () => {
  const [counters, setCounters] = useState({
    plans: 0,
    jobs: 0,
    services: 0,
    citizens: 0
  });
  const counterRef = useRef(null);

  const jobOpportunities = [
    { title: "Administrative Officer", department: "Public Administration", vacancies: 24 },
    { title: "Data Analyst", department: "Statistics Department", vacancies: 18 },
    { title: "Public Relations Officer", department: "Information & Broadcasting", vacancies: 12 },
    { title: "Technical Assistant", department: "Digital Services", vacancies: 32 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const targetValues = {
            plans: 1567,
            jobs: 234,
            services: 89,
            citizens: 2456789
          };
          
          Object.keys(targetValues).forEach(key => {
            let start = 0;
            const end = targetValues[key];
            const duration = 2000;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounters(prev => ({
                ...prev,
                [key]: Math.floor(start)
              }));
            }, 16);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  return (
    <div className={Styles.plansJobsComponent} ref={counterRef}>
      <div className={Styles.plansSection}>
        <h2>Government Plans & Achievements</h2>
        <div className={Styles.statsGrid}>
          <div className={Styles.statCard}>
            <div className={Styles.statNumber}>{formatNumber(counters.plans)}</div>
            <div className={Styles.statLabel}>Plans Completed</div>
          </div>
          <div className={Styles.statCard}>
            <div className={Styles.statNumber}>{formatNumber(counters.jobs)}</div>
            <div className={Styles.statLabel}>Job Opportunities</div>
          </div>
          <div className={Styles.statCard}>
            <div className={Styles.statNumber}>{formatNumber(counters.services)}</div>
            <div className={Styles.statLabel}>Services Available</div>
          </div>
          <div className={Styles.statCard}>
            <div className={Styles.statNumber}>{formatNumber(counters.citizens)}</div>
            <div className={Styles.statLabel}>Citizens Served</div>
          </div>
        </div>
      </div>

      <div className={Styles.jobsSection}>
        <h3>Current Job Opportunities</h3>
        <div className={Styles.jobsList}>
          {jobOpportunities.map((job, index) => (
            <div key={index} className={Styles.jobCard}>
              <div className={Styles.jobInfo}>
                <h4>{job.title}</h4>
                <p>{job.department}</p>
                <span className={Styles.vacancies}>{job.vacancies} vacancies</span>
              </div>
              <button 
                className={Styles.btnPrimary}
                onClick={() => window.location.href = '/Error'}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansJobs;
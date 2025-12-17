import React from 'react';
import Styles from "./CensusData.module.css";
// Importing Images
import populationImg from "../../assets/Census/1.webp";
import urbanImg from "../../assets/Census/2.webp";
import ruralImg from "../../assets/Census/3.webp";
import literacyImg from "../../assets/Census/4.webp";
import householdImg from "../../assets/Census/5.webp";

const CensusData = () => {
  const censusData = [
    { 
      category: "Total Population", 
      value: "1.4 Billion", 
      change: "+12.5%",
      image: populationImg
    },
    { 
      category: "Urban Population", 
      value: "483 Million", 
      change: "+18.3%",
      image: urbanImg
    },
    { 
      category: "Rural Population", 
      value: "909 Million", 
      change: "+8.7%",
      image: ruralImg
    },
    { 
      category: "Literacy Rate", 
      value: "77.7%", 
      change: "+4.5%",
      image: literacyImg
    },
    { 
      category: "Avg. Household", 
      value: "4.4", 
      change: "-0.3",
      image: householdImg
    }
  ];

  return (
    <div className={Styles.censusDataComponent}>
      <div className={Styles.headerWrapper}>
        <h2>National Census 2023</h2>
        <div className={Styles.trackLine}></div>
      </div>
      
      <div className={Styles.censusGrid}>
        {/* Visual Track Line */}
        <div className={Styles.coasterTrack}></div>

        {censusData.map((item, index) => (
          <div key={index} className={Styles.censusCard}>
            <div className={Styles.cardHeader}>
              <div className={Styles.imageContainer}>
                <img src={item.image} alt={item.category} className={Styles.censusImage} />
              </div>
              <h3>{item.category}</h3>
            </div>
            
            <div className={Styles.metricContainer}>
                <div className={Styles.censusValue}>{item.value}</div>
                <div className={`${Styles.censusChange} ${item.change.startsWith('+') ? Styles.positive : Styles.negative}`}>
                {item.change.startsWith('+') ? '▲' : '▼'} {item.change}
                </div>
            </div>
            <div className={Styles.cardShine}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CensusData;
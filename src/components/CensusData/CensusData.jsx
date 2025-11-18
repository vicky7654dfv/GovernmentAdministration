import React from 'react';
import Styles from "./CensusData.module.css";

const CensusData = () => {
  const censusData = [
    { category: "Total Population", value: "1.4 Billion", change: "+12.5%" },
    { category: "Urban Population", value: "483 Million", change: "+18.3%" },
    { category: "Rural Population", value: "909 Million", change: "+8.7%" },
    { category: "Literacy Rate", value: "77.7%", change: "+4.5%" },
    { category: "Average Household Size", value: "4.4", change: "-0.3" }
  ];

  return (
    <div className={Styles.censusDataComponent}>
      <h2>National Census Data 2023</h2>
      <div className={Styles.censusGrid}>
        {censusData.map((item, index) => (
          <div key={index} className={Styles.censusCard}>
            <h3>{item.category}</h3>
            <div className={Styles.censusValue}>{item.value}</div>
            <div className={`${Styles.censusChange} ${item.change.startsWith('+') ? Styles.positive : Styles.negative}`}>
              {item.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CensusData;
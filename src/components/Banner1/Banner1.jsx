import React from 'react';
import Style from "./Banner1.module.css";
import { Link } from 'react-router-dom';
import bgVid from "../../assets/Banner1/bgVid.mp4"

export default function Banner1() {
  return (
    <div data-aos="fade" className={Style.bannerContainer}>
      <video src={bgVid}
        autoPlay
        muted
        loop
        playsInline
        className={Style.backgroundVideo}
      />
      <div className={Style.content}>
        <h1 className={Style.title}>Government Administration</h1>
        <p className={Style.paragraph}>
          Serving the public with integrity, transparency, and excellence. 
          Committed to building a better future through efficient governance 
          and citizen-focused services.
        </p>
        <Link to="/Services" className={Style.ctaButton}>Explore Services</Link>
      </div>
    </div>
  );
}
import React from "react";
import Style from "./Footer.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useCategory } from "../CategoryContext/CategoryContext";

export default function Footer() {
  const { setActiveCategory } = useCategory();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    sessionStorage.setItem("scrollToTop", "true");
    setActiveCategory(category);
    navigate("/");
  };

  const handleQuickLinkClick = (e, path) => {
    e.preventDefault();
    
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      navigate(path);
      
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  const handleErrorLink = (e) => {
    e.preventDefault();
    navigate("/Error");
  };

  return (
    <>
      <div className={Style.footerWrap}>
        <div className={Style.box}>
          <div className={Style.logoContainer}>
            <div className={Style.governmentLogo}>
              <i className="fa-solid fa-landmark"></i>
            </div>
            <h3 className={Style.govTitle}>Government Portal</h3>
          </div>
          <p>
            Dedicated to serving citizens with transparency, efficiency, and 
            innovation. Our mission is to make government services accessible 
            to everyone through digital transformation.
          </p>
          <button 
            className={Style.aboutBtn}
            onClick={(e) => handleQuickLinkClick(e, "/About")}
          >
            About Our Mission <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className={Style.box}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a
                href="#/About"
                onClick={(e) => handleQuickLinkClick(e, "/About")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#/Services"
                onClick={(e) => handleQuickLinkClick(e, "/Services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#/FAQ"
                onClick={(e) => handleQuickLinkClick(e, "/FAQ")}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#/Contact"
                onClick={(e) => handleQuickLinkClick(e, "/Contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className={Style.box}>
          <h4>Scheme Categories</h4>
          <ul>
            <li>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("Digital");
                }}
                className={Style.categoryLink}
              >
                Digital Initiatives
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("Sanitation");
                }}
                className={Style.categoryLink}
              >
                Sanitation Programs
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("Housing");
                }}
                className={Style.categoryLink}
              >
                Housing Schemes
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("Education");
                }}
                className={Style.categoryLink}
              >
                Education Programs
              </a>
            </li>
          </ul>
        </div>

        <div className={Style.box}>
          <h4>Headquarters</h4>
          <ul className={Style.contactInfo}>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              Government Secretariat, New Delhi
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              +91 11 2338 6854
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              info@govportal.gov.in
            </li>
            <li>
              <i className="fa-solid fa-calendar-days"></i>
              Mon - Fri: 09:30 AM - 06:30 PM
            </li>
          </ul>
        </div>

        <div className={Style.box}>
          <h4>Connect With Us</h4>
          <p>
            Stay updated with the latest government initiatives, schemes, 
            and public announcements through our official social media channels.
          </p>
          <div className={Style.media}>
            <a
              href="#/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="#/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="#/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={Style.bottomFooter}>
        <hr />
        <p>
          © 2025 Government Portal. All rights reserved. Committed to serving 
          citizens with integrity and transparency.
        </p>
      </div>
    </>
  );
}
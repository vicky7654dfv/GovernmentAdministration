import React from "react";
import Style from "./Contact.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your message. We'll get back to you soon!");
    navigate("/Error");
  };

  const handleMapClick = () => {
    window.open(
      "https://maps.google.com/?q=Government+Secretariat+New+Delhi",
      "_blank"
    );
  };

  const handleSocialMediaClick = () => {
    navigate("/Error");
  };

  return (
    <div data-aos="fade" className={Style.contactContainer}>
      <Header />
      <div className={Style.contactContent}>
        {/* Header Section */}
        <div className={Style.contactHeader}>
          <h1 className={Style.contactTitle}>Contact Us</h1>
          <p className={Style.contactSubtitle}>
            Get in touch with government representatives and departments. We're
            here to assist you with your queries and concerns.
          </p>
        </div>

        {/* Main Content */}
        <div className={Style.contactMain}>
          {/* Contact Information */}
          <div className={Style.contactInfo}>
            <h2>Get In Touch</h2>
            <p>
              Have questions about government services, schemes, or need
              assistance? Reach out to us through any of the following channels:
            </p>

            <div className={Style.infoCards}>
              <div className={Style.infoCard}>
                <div className={Style.cardIcon}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className={Style.cardContent}>
                  <h3>Headquarters</h3>
                  <p>
                    Government Secretariat
                    <br />
                    New Delhi, India - 110001
                  </p>
                </div>
              </div>

              <div className={Style.infoCard}>
                <div className={Style.cardIcon}>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className={Style.cardContent}>
                  <h3>Phone Numbers</h3>
                  <p>
                    General: +91 11 2338 6854
                    <br />
                    Helpline: 1800 180 1551
                  </p>
                </div>
              </div>

              <div className={Style.infoCard}>
                <div className={Style.cardIcon}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className={Style.cardContent}>
                  <h3>Email Address</h3>
                  <p>
                    info@govportal.gov.in
                    <br />
                    support@govportal.gov.in
                  </p>
                </div>
              </div>

              <div className={Style.infoCard}>
                <div className={Style.cardIcon}>
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className={Style.cardContent}>
                  <h3>Working Hours</h3>
                  <p>
                    Monday - Friday: 9:30 AM - 6:30 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Important Contacts */}
            <div className={Style.importantContacts}>
              <h3>Important Contacts</h3>
              <div className={Style.contactList}>
                <div className={Style.contactItem}>
                  <i className="fa-solid fa-flag"></i>
                  <div>
                    <strong>Prime Minister's Office</strong>
                    <span>+91 11 2301 6868</span>
                  </div>
                </div>
                <div className={Style.contactItem}>
                  <i className="fa-solid fa-indian-rupee-sign"></i>
                  <div>
                    <strong>Finance Ministry</strong>
                    <span>+91 11 2309 2840</span>
                  </div>
                </div>
                <div className={Style.contactItem}>
                  <i className="fa-solid fa-graduation-cap"></i>
                  <div>
                    <strong>Education Ministry</strong>
                    <span>+91 11 2378 2478</span>
                  </div>
                </div>
                <div className={Style.contactItem}>
                  <i className="fa-solid fa-heart-pulse"></i>
                  <div>
                    <strong>Health Ministry</strong>
                    <span>+91 11 2306 1847</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className={Style.socialMediaSection}>
              <h3>Connect With Us</h3>
              <p>Follow us on social media for latest updates</p>
              <div className={Style.socialMediaLinks}>
                <button
                  className={Style.socialButton}
                  onClick={handleSocialMediaClick}
                >
                  <i className="fa-brands fa-x-twitter"></i>
                  Twitter
                </button>
                <button
                  className={Style.socialButton}
                  onClick={handleSocialMediaClick}
                >
                  <i className="fa-brands fa-facebook-f"></i>
                  Facebook
                </button>
                <button
                  className={Style.socialButton}
                  onClick={handleSocialMediaClick}
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                  LinkedIn
                </button>
                <button
                  className={Style.socialButton}
                  onClick={handleSocialMediaClick}
                >
                  <i className="fa-brands fa-youtube"></i>
                  YouTube
                </button>
                <button
                  className={Style.socialButton}
                  onClick={handleSocialMediaClick}
                >
                  <i className="fa-brands fa-instagram"></i>
                  Instagram
                </button>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className={Style.emergencyContact}>
              <h3>Emergency Contact</h3>
              <p>
                For urgent matters outside working hours, call our 24/7
                emergency helpline:
              </p>
              <div className={Style.emergencyNumber}>
                <i className="fa-solid fa-triangle-exclamation"></i>
                <span>+91 11 2338 6999</span>
              </div>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className={Style.contactInteractive}>
            {/* Contact Form */}
            <div className={Style.contactFormContainer}>
              <h2>Send us a Message</h2>
              <form className={Style.contactForm} onSubmit={handleSubmit}>
                <div className={Style.formRow}>
                  <div className={Style.formGroup}>
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className={Style.formGroup}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className={Style.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className={Style.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className={Style.formGroup}>
                  <label htmlFor="department">Select Department *</label>
                  <select id="department" name="department" required>
                    <option value="">Choose a department</option>
                    <option value="general">General Inquiry</option>
                    <option value="schemes">Government Schemes</option>
                    <option value="digital">Digital Services</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="housing">Housing</option>
                    <option value="sanitation">Sanitation</option>
                    <option value="pm-office">Prime Minister's Office</option>
                    <option value="finance">Finance Ministry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={Style.formGroup}>
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Enter message subject"
                  />
                </div>

                <div className={Style.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                <div className={Style.formGroup}>
                  <label className={Style.checkboxLabel}>
                    <input type="checkbox" required />
                    <span>I agree to the terms and conditions</span>
                  </label>
                </div>

                <button type="submit" className={Style.submitButton}>
                  Send Message <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className={Style.mapContainer}>
              <h2>Find Us</h2>
              <div className={Style.mapWrapper} onClick={handleMapClick}>
                <div className={Style.mapOverlay}>
                  <div className={Style.mapPlaceholder}>
                    <i className="fa-solid fa-map-location-dot"></i>
                    <p>Government Secretariat Location</p>
                    <span>Click to open in Google Maps</span>
                    <div className={Style.mapButton}>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      Open Map
                    </div>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.489236923256!2d77.2091883150832!3d28.614592582414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sSecretariat%20Building%2C%20New%20Delhi%2C%20Delhi%20110002!5e0!3m2!1sen!2sin!4v1647426781234!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Government Secretariat Location"
                  className={Style.mapIframe}
                ></iframe>
              </div>
              <div className={Style.mapInfo}>
                <h4>How to Reach Us</h4>
                <ul>
                  <li>
                    <i className="fa-solid fa-train-subway"></i> Nearest Metro:
                    Central Secretariat
                  </li>
                  <li>
                    <i className="fa-solid fa-bus"></i> Bus Routes: 522, 423,
                    719
                  </li>
                  <li>
                    <i className="fa-solid fa-car"></i> Parking available at
                    Gate No. 35
                  </li>
                  <li>
                    <i className="fa-solid fa-wheelchair"></i> Wheelchair
                    accessible
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

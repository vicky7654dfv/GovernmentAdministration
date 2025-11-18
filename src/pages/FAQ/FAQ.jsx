import React, { useState } from "react";
import Style from "./FAQ.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const navigate = useNavigate();

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  const faqData = [
    {
      id: 1,
      topic: "Citizen Services",
      description: "Information about public services and citizen-centric initiatives.",
      subtopics: [
        {
          id: "1-1",
          question: "How do I apply for government certificates and documents?",
          answer: [
            "Access the 'Document Services' section in your citizen portal",
            "Fill the required application form with accurate details",
            "Upload necessary supporting documents",
            "Pay applicable fees online and track application status"
          ]
        },
        {
          id: "1-2",
          question: "What services are available through the citizen portal?",
          answer: [
            "Birth, death, and marriage certificate applications",
            "Property tax payments and utility bill payments",
            "License applications and renewals",
            "Grievance redressal and public service requests"
          ]
        },
        {
          id: "1-3",
          question: "How can I track my service application status?",
          answer: [
            "Use the unique application ID provided during submission",
            "Check status in 'My Applications' section of your account",
            "Receive SMS and email notifications at each processing stage",
            "Contact the concerned department for delayed applications"
          ]
        }
      ]
    },
    {
      id: 2,
      topic: "Schemes & Benefits",
      description: "Information about government schemes and citizen benefits.",
      subtopics: [
        {
          id: "2-1",
          question: "How do I check my eligibility for government schemes?",
          answer: [
            "Use the 'Scheme Eligibility Checker' tool on the portal",
            "Provide required demographic and economic information",
            "System automatically matches with scheme criteria",
            "Get personalized scheme recommendations"
          ]
        },
        {
          id: "2-2",
          question: "What documents are required for scheme applications?",
          answer: [
            "Identity proof (Aadhaar, Voter ID, or PAN card)",
            "Address proof (utility bills or property documents)",
            "Income certificate for income-based schemes",
            "Category certificate if applicable (SC/ST/OBC)"
          ]
        },
        {
          id: "2-3",
          question: "How are scheme benefits transferred to beneficiaries?",
          answer: [
            "Direct Benefit Transfer (DBT) to registered bank accounts",
            "Aadhaar-linked payment system for secure transfers",
            "Regular status updates through SMS and portal notifications",
            "Grievance mechanism for payment-related issues"
          ]
        }
      ]
    },
    {
      id: 3,
      topic: "Digital Governance",
      description: "Digital services and e-governance initiatives.",
      subtopics: [
        {
          id: "3-1",
          question: "What is DigiLocker and how to use it?",
          answer: [
            "Digital document wallet for storing important certificates",
            "Link your Aadhaar number to create DigiLocker account",
            "Access documents anytime, anywhere securely",
            "Share digitally signed documents with government agencies"
          ]
        },
        {
          id: "3-2",
          question: "How secure is my data on government portals?",
          answer: [
            "End-to-end encryption for all data transmissions",
            "Regular security audits and vulnerability assessments",
            "ISO 27001 certified data centers",
            "Strict data protection policies in compliance with IT Act"
          ]
        },
        {
          id: "3-3",
          question: "What digital payment methods are accepted?",
          answer: [
            "UPI payments through various banking apps",
            "Net banking from all major banks",
            "Credit and debit cards (Rupay, Visa, Mastercard)",
            "Digital wallets and payment gateways"
          ]
        }
      ]
    },
    {
      id: 4,
      topic: "Grievance Redressal",
      description: "Process for filing and tracking complaints.",
      subtopics: [
        {
          id: "4-1",
          question: "How do I file a grievance or complaint?",
          answer: [
            "Login to your citizen account on the portal",
            "Navigate to 'Grievance Redressal' section",
            "Select appropriate department and grievance category",
            "Provide detailed description and supporting documents"
          ]
        },
        {
          id: "4-2",
          question: "What is the typical resolution timeline?",
          answer: [
            "Acknowledgement within 24 hours of submission",
            "Preliminary response within 3 working days",
            "Resolution commitment within 15-30 days",
            "Escalation mechanism for delayed responses"
          ]
        },
        {
          id: "4-3",
          question: "How can I escalate unresolved grievances?",
          answer: [
            "Use the escalation feature in your grievance dashboard",
            "Contact the appellate authority of the concerned department",
            "Reach out to the Centralized Public Grievance Redressal System",
            "Approach the Lokpal/Lokayukta for serious issues"
          ]
        }
      ]
    },
    {
      id: 5,
      topic: "Account Management",
      description: "Managing your government portal account.",
      subtopics: [
        {
          id: "5-1",
          question: "How do I create a government portal account?",
          answer: [
            "Visit the official government services portal",
            "Click on 'Register' and provide basic details",
            "Verify your mobile number and email address",
            "Complete KYC using Aadhaar or other identity documents"
          ]
        },
        {
          id: "5-2",
          question: "What should I do if I forget my password?",
          answer: [
            "Click 'Forgot Password' on the login page",
            "Enter your registered mobile number or email",
            "Receive OTP for verification",
            "Set new password following security guidelines"
          ]
        },
        {
          id: "5-3",
          question: "How do I update my profile information?",
          answer: [
            "Login to your account and go to 'My Profile'",
            "Edit personal details and contact information",
            "Upload updated documents if required",
            "Save changes and verify through OTP"
          ]
        }
      ]
    },
    {
      id: 6,
      topic: "Legal & Compliance",
      description: "Legal requirements and compliance information.",
      subtopics: [
        {
          id: "6-1",
          question: "What are my rights under the Right to Information Act?",
          answer: [
            "Right to request information from public authorities",
            "Time-bound response within 30 days",
            "Minimal application fees for information requests",
            "Appeal process for denied information"
          ]
        },
        {
          id: "6-2",
          question: "How to access public documents and records?",
          answer: [
            "Submit RTI application through online portal",
            "Visit concerned department's public information office",
            "Access digitized records through national archives",
            "Use public document search on government portals"
          ]
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className={Style.faqWrap}>
        <div className={Style.faqHeader}>
          <h1>Frequently Asked Questions</h1>
          <p className={Style.faqIntro}>
            Welcome to the Government Services FAQ portal. Find comprehensive answers to common questions 
            about citizen services, digital governance, schemes, and public administration. 
            Our commitment is to provide transparent and accessible information to all citizens.
          </p>
        </div>

        <div className={Style.faqContent}>
          {faqData.map((section, index) => (
            <section key={section.id} className={Style.topicSection}>
              <div className={Style.topicHeader}>
                <div className={Style.topicIcon}>
                  <div className={Style.iconWrapper}>
                    <span className={Style.iconText}>GOV</span>
                  </div>
                </div>
                <div className={Style.topicTitle}>
                  <h2>{section.topic}</h2>
                  <p className={Style.topicDescription}>{section.description}</p>
                </div>
              </div>
              
              <div className={Style.questionsGrid}>
                {section.subtopics.map((subtopic) => (
                  <article key={subtopic.id} className={Style.questionCard}>
                    <header 
                      className={`${Style.questionHeader} ${
                        openQuestion === subtopic.id ? Style.active : ''
                      }`}
                      onClick={() => toggleQuestion(subtopic.id)}
                    >
                      <div className={Style.questionMain}>
                        <div className={Style.questionMarker}>
                          <div className={Style.markerDot}></div>
                        </div>
                        <h3 className={Style.questionText}>{subtopic.question}</h3>
                      </div>
                      <div className={Style.toggleContainer}>
                        <span className={Style.toggleIcon}>
                          <div className={`${Style.chevron} ${
                            openQuestion === subtopic.id ? Style.chevronUp : Style.chevronDown
                          }`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </span>
                      </div>
                    </header>
                    
                    <div 
                      className={`${Style.answerContent} ${
                        openQuestion === subtopic.id ? Style.answerOpen : Style.answerClosed
                      }`}
                    >
                      <div className={Style.answerBody}>
                        <div className={Style.answerList}>
                          {subtopic.answer.map((point, pointIndex) => (
                            <div key={pointIndex} className={Style.answerItem}>
                              <div className={Style.itemNumber}>{pointIndex + 1}</div>
                              <div className={Style.itemText}>{point}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className={Style.faqFooter}>
          <div className={Style.supportCta}>
            <div className={Style.ctaIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19.92C22 20.52 21.53 21 20.93 21H19.93C16.44 21 14.2 19.78 12 17.5C9.8 19.78 7.56 21 4.07 21H3.07C2.47 21 2 20.52 2 19.92V16.92C2 16.32 2.47 15.84 3.07 15.84H4.07C6.36 15.84 7.8 15.16 9 14C10.2 15.16 11.64 15.84 13.93 15.84H14.93C15.53 15.84 16 16.32 16 16.92V19.92C16 20.52 15.53 21 14.93 21H13.93" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Need Further Assistance?</h3>
            <p>Our citizen support team is dedicated to helping you with any government service queries.</p>
            <div className={Style.contactButtons}>
              <button className={Style.primaryButton} onClick={() => navigate('/Contact')}>
                Contact Support
              </button>
              <button className={Style.secondaryButton} onClick={() => navigate('/Error')}>
                File Grievance
              </button>
            </div>
          </div>
        </footer>
      </div>
      <Footer />
    </>
  );
}
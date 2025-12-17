import { useState } from "react";
import styles from "./Documents.module.css";

// Import your PDF files from assets
import GovernmentAdministration1 from "../../assets/Documents/GovernmentAdministration.pdf";
import GovernmentAdministration2 from "../../assets/Documents/GovernmentAdministration.pdf";
import GovernmentAdministration3 from "../../assets/Documents/GovernmentAdministration.pdf";
import GovernmentAdministration4 from "../../assets/Documents/GovernmentAdministration.pdf";
import GovernmentAdministration5 from "../../assets/Documents/GovernmentAdministration.pdf";
import GovernmentAdministration6 from "../../assets/Documents/GovernmentAdministration.pdf";
import GovernmentAdministration7 from "../../assets/Documents/GovernmentAdministration.pdf";
import GovernmentAdministration8 from "../../assets/Documents/GovernmentAdministration.pdf";
import GovernmentAdministration9 from "../../assets/Documents/GovernmentAdministration.pdf";
import GovernmentAdministration10 from "../../assets/Documents/GovernmentAdministration.pdf";
import GovernmentAdministration11 from "../../assets/Documents/GovernmentAdministration.pdf";
import GovernmentAdministration12 from "../../assets/Documents/GovernmentAdministration.pdf";

const Documents = () => {
  const [downloading, setDownloading] = useState(null);

  const documentsData = [
    {
      id: 1,
      title: "Annual Government Report 2023",
      description:
        "Comprehensive overview of government activities and achievements for the fiscal year 2023",
      type: "PDF",
      category: "Reports",
      file: GovernmentAdministration1,
      lastUpdated: "15 Dec 2023",
      pages: "48 pages"
    },
    {
      id: 2,
      title: "Digital India Initiative Guidelines",
      description:
        "Official guidelines and framework for Digital India program implementation",
      type: "PDF",
      category: "Guidelines",
      file: GovernmentAdministration2,
      lastUpdated: "22 Nov 2023",
      pages: "32 pages"
    },
    {
      id: 3,
      title: "Healthcare Scheme Handbook",
      description:
        "Complete handbook for healthcare schemes and beneficiary registration process",
      type: "PDF",
      category: "Handbooks",
      file: GovernmentAdministration3,
      lastUpdated: "10 Jan 2024",
      pages: "56 pages"
    },
    {
      id: 4,
      title: "Education Policy Framework",
      description:
        "National education policy framework and implementation strategy",
      type: "PDF",
      category: "Policies",
      file: GovernmentAdministration4,
      lastUpdated: "05 Dec 2023",
      pages: "42 pages"
    },
    {
      id: 5,
      title: "Infrastructure Development Plan",
      description:
        "Five-year infrastructure development plan and progress report",
      type: "PDF",
      category: "Plans",
      file: GovernmentAdministration5,
      lastUpdated: "18 Nov 2023",
      pages: "64 pages"
    },
    {
      id: 6,
      title: "Agricultural Subsidy Scheme",
      description:
        "Details of agricultural subsidy schemes and application procedure",
      type: "PDF",
      category: "Schemes",
      file: GovernmentAdministration6,
      lastUpdated: "30 Oct 2023",
      pages: "28 pages"
    },
    {
      id: 7,
      title: "Environmental Conservation Policy",
      description:
        "Government policies and initiatives for environmental conservation",
      type: "PDF",
      category: "Policies",
      file: GovernmentAdministration7,
      lastUpdated: "12 Jan 2024",
      pages: "36 pages"
    },
    {
      id: 8,
      title: "Women Empowerment Programs",
      description: "Complete guide to women empowerment programs and benefits",
      type: "PDF",
      category: "Programs",
      file: GovernmentAdministration8,
      lastUpdated: "08 Dec 2023",
      pages: "40 pages"
    },
    {
      id: 9,
      title: "Budget Allocation Document",
      description:
        "Detailed budget allocation across various government departments",
      type: "PDF",
      category: "Financial",
      file: GovernmentAdministration9,
      lastUpdated: "25 Jan 2024",
      pages: "72 pages"
    },
    {
      id: 10,
      title: "Citizen Service Charter",
      description:
        "Service standards and commitments to citizens across departments",
      type: "PDF",
      category: "Charters",
      file: GovernmentAdministration10,
      lastUpdated: "14 Nov 2023",
      pages: "24 pages"
    },
    {
      id: 11,
      title: "National Cyber Security Protocol",
      description:
        "Security standards, protocols, and preventive measures issued for safeguarding citizen data",
      type: "PDF",
      category: "Security",
      file: GovernmentAdministration11,
      lastUpdated: "20 Jan 2024",
      pages: "52 pages"
    },
    {
      id: 12,
      title: "Public Welfare Program Insights",
      description:
        "Detailed breakdown of public welfare schemes, impact reports, and beneficiary statistics",
      type: "PDF",
      category: "Welfare",
      file: GovernmentAdministration12,
      lastUpdated: "03 Feb 2024",
      pages: "60 pages"
    }
  ];

  const handleDownload = async (doc) => {
    setDownloading(doc.id);

    try {
      // Create a temporary link element for download
      const link = document.createElement("a");
      link.href = doc.file;
      link.download = `${doc.title.replace(/\s+/g, "_")}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again.");
    } finally {
      setDownloading(null);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Reports: "#3B82F6",
      Guidelines: "#10B981",
      Handbooks: "#8B5CF6",
      Policies: "#F59E0B",
      Plans: "#EF4444",
      Schemes: "#06B6D4",
      Programs: "#EC4899",
      Financial: "#84CC16",
      Charters: "#6366F1",
      Security: "#DC2626",
      Welfare: "#7C3AED"
    };
    return colors[category] || "#6B7280";
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Reports: "📊",
      Guidelines: "📋",
      Handbooks: "📚",
      Policies: "⚖️",
      Plans: "🗓️",
      Schemes: "💡",
      Programs: "🎯",
      Financial: "💰",
      Charters: "📜",
      Security: "🔒",
      Welfare: "🤝"
    };
    return icons[category] || "📄";
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Government Documents & Reports</h2>
        <p className={styles.subtitle}>
          Access important government documents, reports, and policy frameworks. 
          All documents are available for immediate download.
        </p>
      </div>

      <div className={styles.documentsGrid}>
        {documentsData.map((doc) => (
          <div key={doc.id} className={styles.documentCard}>
            <div className={styles.cardHeader}>
              <div
                className={styles.categoryBadge}
                style={{ backgroundColor: getCategoryColor(doc.category) }}
              >
                <span className={styles.categoryIcon}>
                  {getCategoryIcon(doc.category)}
                </span>
                {doc.category}
              </div>
              <div className={styles.fileType}>{doc.type}</div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.documentTitle}>{doc.title}</h3>
              <p className={styles.documentDescription}>
                {doc.description}
              </p>

              <div className={styles.documentMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📅</span>
                  <span className={styles.metaText}>{doc.lastUpdated}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📄</span>
                  <span className={styles.metaText}>{doc.pages}</span>
                </div>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <button
                className={`${styles.downloadButton} ${
                  downloading === doc.id ? styles.downloading : ""
                }`}
                onClick={() => handleDownload(doc)}
                disabled={downloading === doc.id}
              >
                {downloading === doc.id ? (
                  <>
                    <div className={styles.spinner}></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <span className={styles.downloadIcon}>📥</span>
                    Download Document
                  </>
                )}
              </button>
            </div>

            <div className={styles.cardGlow}></div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          Looking for other documents?{" "}
          <a href="#/Contact" className={styles.contactLink}>
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
};

export default Documents;
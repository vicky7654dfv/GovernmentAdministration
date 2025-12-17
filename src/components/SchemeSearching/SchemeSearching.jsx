import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SchemeSearching.module.css";
import { useCategory } from "../CategoryContext/CategoryContext";

// Importing Assets (REPLACE WITH ACTUAL PATHS)
import digitalImg from "../../assets/SchemeSearching/1.webp";
import healthImg from "../../assets/SchemeSearching/2.webp";
import kisanImg from "../../assets/SchemeSearching/3.webp";
import swachhImg from "../../assets/SchemeSearching/4.webp";
import makeInImg from "../../assets/SchemeSearching/5.webp";
import smartCityImg from "../../assets/SchemeSearching/6.webp";
import startupImg from "../../assets/SchemeSearching/7.webp";
import housingImg from "../../assets/SchemeSearching/8.webp";
import skillImg from "../../assets/SchemeSearching/9.webp";
import ujjwalaImg from "../../assets/SchemeSearching/10.webp";
import nregaImg from "../../assets/SchemeSearching/11.webp";
import greenImg from "../../assets/SchemeSearching/12.webp";

const SearchScheme = () => {
  const navigate = useNavigate();
  const { activeCategory, setActiveCategory } = useCategory();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const schemesData = [
    {
      id: 1,
      title: "Digital India Initiative",
      description: "Transforming India into a digitally empowered society and knowledge economy",
      type: "Digital",
      image: digitalImg,
      color: "#3B82F6",
    },
    {
      id: 2,
      title: "Ayushman Bharat Yojana",
      description: "National health protection scheme providing health coverage to poor families",
      type: "Healthcare",
      image: healthImg,
      color: "#10B981",
    },
    {
      id: 3,
      title: "PM Kisan Samman Nidhi",
      description: "Income support scheme for farmers across the country",
      type: "Agriculture",
      image: kisanImg,
      color: "#84CC16",
    },
    {
      id: 4,
      title: "Swachh Bharat Mission",
      description: "National campaign to eliminate open defecation and improve solid waste management",
      type: "Sanitation",
      image: swachhImg,
      color: "#06B6D4",
    },
    {
      id: 5,
      title: "Make in India",
      description: "Initiative to encourage companies to manufacture their products in India",
      type: "Manufacturing",
      image: makeInImg,
      color: "#EF4444",
    },
    {
      id: 6,
      title: "Smart Cities Mission",
      description: "Urban renewal and retrofitting program to develop smart cities across the country",
      type: "Urban Development",
      image: smartCityImg,
      color: "#8B5CF6",
    },
    {
      id: 7,
      title: "Startup India",
      description: "Initiative to build a strong ecosystem for nurturing innovation and startups",
      type: "Entrepreneurship",
      image: startupImg,
      color: "#EC4899",
    },
    {
      id: 8,
      title: "Pradhan Mantri Awas Yojana",
      description: "Housing for All by 2022 mission for urban and rural areas",
      type: "Housing",
      image: housingImg,
      color: "#F59E0B",
    },
    {
      id: 9,
      title: "Skill India Mission",
      description: "National skill development mission to train over 400 million people",
      type: "Education",
      image: skillImg,
      color: "#6366F1",
    },
    {
      id: 10,
      title: "Ujjwala Yojana",
      description: "Scheme to provide LPG connections to women from below poverty line families",
      type: "Social Welfare",
      image: ujjwalaImg,
      color: "#DC2626",
    },
    {
      id: 11,
      title: "National Rural Employment",
      description: "Guarantees 100 days of wage employment to rural households",
      type: "Employment",
      image: nregaImg,
      color: "#7C3AED",
    },
    {
      id: 12,
      title: "Green India Mission",
      description: "Climate change adaptation scheme for protecting and restoring forests",
      type: "Environment",
      image: greenImg,
      color: "#059669",
    },
  ];

  const schemeTypes = [
    "All",
    ...new Set(schemesData.map((scheme) => scheme.type)),
  ];

  // Sync activeCategory with selectedType
  useEffect(() => {
    if (activeCategory) {
      setSelectedType(activeCategory);
      const fromFooter = sessionStorage.getItem("fromFooterCategory");
      if (!fromFooter) {
        setTimeout(() => {
          const firstCard = document.querySelector(
            `[data-category="${activeCategory}"]`
          );
          if (firstCard) {
            firstCard.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 500);
      }
      sessionStorage.removeItem("fromFooterCategory");
    }
  }, [activeCategory]);

  const filteredAndSortedSchemes = useMemo(() => {
    let filtered = schemesData.filter((scheme) => {
      const matchesSearch =
        scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        selectedType === "All" || scheme.type === selectedType;
      return matchesSearch && matchesType;
    });

    if (sortOrder === "name") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "type") {
      filtered.sort((a, b) => a.type.localeCompare(b.type));
    }

    return filtered;
  }, [searchTerm, selectedType, sortOrder]);

  const handleDetailsClick = () => {
    navigate("/Error");
  };

  const handleCategoryChange = (category) => {
    setSelectedType(category);
    setActiveCategory(category);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    if (term) {
      setSelectedType("All");
      setActiveCategory(null);
    }
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedType("All");
    setActiveCategory(null);
    setSortOrder("default");
  };

  return (
    <div data-aos="fade" className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Government Schemes & Initiatives</h1>
        <p className={styles.subtitle}>
          Explore various government schemes designed for citizen welfare and
          national development
        </p>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              id="inputSearch"
              type="text"
              placeholder="Search schemes..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className={styles.searchInput}
            />
            {searchTerm && (
              <button
                className={styles.clearSearch}
                onClick={() => handleSearchChange("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className={styles.filterContainer}>
          <div className={styles.filterGroup}>
            <label htmlFor="nameSelect" className={styles.filterLabel}>
              Filter:
            </label>
            <select
              id="nameSelect"
              value={selectedType}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className={styles.filterSelect}
            >
              {schemeTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label htmlFor="nameSelectSort" className={styles.filterLabel}>
              Sort:
            </label>
            <select
              id="nameSelectSort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="default">Default</option>
              <option value="name">Name (A-Z)</option>
              <option value="type">Type</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.resultsInfo}>
        <p className={styles.resultsCount}>
          Showing {filteredAndSortedSchemes.length} of {schemesData.length}{" "}
          schemes
          {selectedType !== "All" && ` in ${selectedType}`}
        </p>
        {(searchTerm || selectedType !== "All") && (
          <button className={styles.clearFilters} onClick={clearAllFilters}>
            Clear All
          </button>
        )}
      </div>

      <div className={styles.schemesGrid} data-aos="fade">
        {filteredAndSortedSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className={styles.schemeCard}
            data-category={scheme.type}
            // Pass the custom color as a CSS variable for the hover effect
            style={{ "--hover-color": scheme.color }}
          >
            
            <div className={styles.imageWrapper}>
              <img 
                src={scheme.image} 
                alt={scheme.title} 
                className={styles.schemeImage}
              />
            </div>

            <div className={styles.cardContent}>
              <div 
                className={styles.typeBadge}
                style={{ 
                  borderColor: scheme.color, 
                  color: scheme.color,
                  backgroundColor: `${scheme.color}15` // 15 = hex alpha for ~10%
                }}
              >
                {scheme.type}
              </div>
              <h3 className={styles.schemeTitle}>{scheme.title}</h3>
              <p className={styles.schemeDescription}>{scheme.description}</p>
            </div>

            <div className={styles.cardFooter}>
              <button
                className={styles.detailsButton}
                onClick={handleDetailsClick}
                style={{ 
                  backgroundColor: scheme.color,
                  boxShadow: `0 0 15px ${scheme.color}40`
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedSchemes.length === 0 && (
        <div className={styles.noResults}>
          <div className={styles.noResultsIcon}>🔍</div>
          <h3 className={styles.noResultsTitle}>No schemes found</h3>
          <p className={styles.noResultsText}>
            {searchTerm
              ? `No schemes found for "${searchTerm}". Try adjusting your search terms.`
              : `No schemes available in ${selectedType} category.`}
          </p>
          <button className={styles.resetButton} onClick={clearAllFilters}>
            Show All Schemes
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchScheme;
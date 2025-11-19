import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SchemeSearching.module.css";
import { useCategory } from "../CategoryContext/CategoryContext";

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
      description:
        "Transforming India into a digitally empowered society and knowledge economy",
      type: "Digital",
      icon: "💻",
      color: "#3B82F6",
    },
    {
      id: 2,
      title: "Ayushman Bharat Yojana",
      description:
        "National health protection scheme providing health coverage to poor families",
      type: "Healthcare",
      icon: "🏥",
      color: "#10B981",
    },
    {
      id: 3,
      title: "PM Kisan Samman Nidhi",
      description: "Income support scheme for farmers across the country",
      type: "Agriculture",
      icon: "👨‍🌾",
      color: "#84CC16",
    },
    {
      id: 4,
      title: "Swachh Bharat Mission",
      description:
        "National campaign to eliminate open defecation and improve solid waste management",
      type: "Sanitation",
      icon: "🧹",
      color: "#06B6D4",
    },
    {
      id: 5,
      title: "Make in India",
      description:
        "Initiative to encourage companies to manufacture their products in India",
      type: "Manufacturing",
      icon: "🏭",
      color: "#EF4444",
    },
    {
      id: 6,
      title: "Smart Cities Mission",
      description:
        "Urban renewal and retrofitting program to develop smart cities across the country",
      type: "Urban Development",
      icon: "🏙️",
      color: "#8B5CF6",
    },
    {
      id: 7,
      title: "Startup India",
      description:
        "Initiative to build a strong ecosystem for nurturing innovation and startups",
      type: "Entrepreneurship",
      icon: "🚀",
      color: "#EC4899",
    },
    {
      id: 8,
      title: "Pradhan Mantri Awas Yojana",
      description: "Housing for All by 2022 mission for urban and rural areas",
      type: "Housing",
      icon: "🏠",
      color: "#F59E0B",
    },
    {
      id: 9,
      title: "Skill India Mission",
      description:
        "National skill development mission to train over 400 million people",
      type: "Education",
      icon: "🎓",
      color: "#6366F1",
    },
    {
      id: 10,
      title: "Ujjwala Yojana",
      description:
        "Scheme to provide LPG connections to women from below poverty line families",
      type: "Social Welfare",
      icon: "🔥",
      color: "#DC2626",
    },
    {
      id: 11,
      title: "National Rural Employment",
      description: "Guarantees 100 days of wage employment to rural households",
      type: "Employment",
      icon: "💼",
      color: "#7C3AED",
    },
    {
      id: 12,
      title: "Green India Mission",
      description:
        "Climate change adaptation scheme for protecting and restoring forests",
      type: "Environment",
      icon: "🌳",
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

    // Sort schemes
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

  const getLighterColor = (color) => {
    // Convert hex to RGB and lighten it
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Lighten by 90%
    const lightR = Math.min(255, r + (255 - r) * 0.9);
    const lightG = Math.min(255, g + (255 - g) * 0.9);
    const lightB = Math.min(255, b + (255 - b) * 0.9);

    return `rgb(${Math.round(lightR)}, ${Math.round(lightG)}, ${Math.round(
      lightB
    )})`;
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
              placeholder="Search schemes by name or description..."
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
              Filter by Type:
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
              Sort by:
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
            Clear All Filters
          </button>
        )}
      </div>

      <div className={styles.schemesGrid} data-aos="fade">
        {filteredAndSortedSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className={styles.schemeCard}
            data-category={scheme.type}
            style={{
              borderLeftColor: scheme.color,
              backgroundColor: getLighterColor(scheme.color),
            }}
          >
            <div className={styles.cardHeader}>
              <div
                className={styles.iconContainer}
                style={{ backgroundColor: scheme.color }}
              >
                <span className={styles.schemeIcon}>{scheme.icon}</span>
              </div>
              <div
                className={styles.typeBadge}
                style={{ backgroundColor: scheme.color }}
              >
                {scheme.type}
              </div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.schemeTitle}>{scheme.title}</h3>
              <p className={styles.schemeDescription}>{scheme.description}</p>
            </div>

            <div className={styles.cardFooter}>
              <button
                className={styles.detailsButton}
                style={{
                  backgroundColor: scheme.color,
                  borderColor: scheme.color,
                }}
                onClick={handleDetailsClick}
              >
                View Details
              </button>
            </div>

            <div
              className={styles.cardGlow}
              style={{ backgroundColor: scheme.color }}
            ></div>
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

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './DashBoard.module.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const DashBoard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [budgetData, setBudgetData] = useState(0);
  const [gdpGrowth, setGdpGrowth] = useState(0);
  const navigate = useNavigate();

  // Simulate loading animations
  useEffect(() => {
    const timer1 = setTimeout(() => setBudgetData(4200000000), 500);
    const timer2 = setTimeout(() => setGdpGrowth(3.8), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'state', label: 'State Performance', icon: '🏛️' },
    { id: 'union', label: 'Union Performance', icon: '🇮🇳' },
    { id: 'funds', label: 'Funds Allocation', icon: '💰' },
    { id: 'schemes', label: 'Public Schemes', icon: '👥' },
    { id: 'infrastructure', label: 'Infrastructure', icon: '🏗️' },
    { id: 'reactions', label: 'Public Reactions', icon: '💬' },
    { id: 'analytics', label: 'Analytics', icon: '📈' }
  ];

  const statsData = [
    { 
      label: 'National Budget', 
      value: `$${(budgetData / 1000000000).toFixed(1)}B`, 
      change: '+5.2%', 
      icon: '💰', 
      color: '#1e3a8a',
      description: 'FY 2024 Allocation'
    },
    { 
      label: 'GDP Growth', 
      value: `${gdpGrowth}%`, 
      change: '+0.4%', 
      icon: '📈', 
      color: '#059669',
      description: 'Current Quarter'
    },
    { 
      label: 'Employment Rate', 
      value: '94.2%', 
      change: '+1.2%', 
      icon: '👥', 
      color: '#dc2626',
      description: 'National Average'
    },
    { 
      label: 'Public Satisfaction', 
      value: '87%', 
      change: '+3.5%', 
      icon: '⭐', 
      color: '#d97706',
      description: 'Service Rating'
    }
  ];

  // Economic Growth Data (Line Chart)
  const economicGrowth = [
    { quarter: "Q1", gdp: 3.2, inflation: 4.1, employment: 92.5 },
    { quarter: "Q2", gdp: 3.5, inflation: 3.8, employment: 93.1 },
    { quarter: "Q3", gdp: 3.8, inflation: 3.5, employment: 93.8 },
    { quarter: "Q4", gdp: 4.1, inflation: 3.2, employment: 94.2 },
    { quarter: "Q1", gdp: 3.9, inflation: 3.4, employment: 94.5 },
    { quarter: "Q2", gdp: 4.2, inflation: 3.1, employment: 94.8 },
  ];

  // Fund Allocation Data (Donut Chart)
  const fundAllocation = [
    { category: 'Healthcare', percentage: 28, color: '#3b82f6' },
    { category: 'Education', percentage: 22, color: '#10b981' },
    { category: 'Infrastructure', percentage: 18, color: '#f59e0b' },
    { category: 'Defense', percentage: 15, color: '#ef4444' },
    { category: 'Social Welfare', percentage: 12, color: '#8b5cf6' },
    { category: 'Others', percentage: 5, color: '#6b7280' }
  ];

  // State Performance Data
  const statePerformance = [
    { 
      name: 'Maharashtra', 
      gdpGrowth: '7.2%', 
      development: 'High', 
      budget: '$280B',
      trend: 'up'
    },
    { 
      name: 'Tamil Nadu', 
      gdpGrowth: '6.8%', 
      development: 'High', 
      budget: '$190B',
      trend: 'up'
    },
    { 
      name: 'Karnataka', 
      gdpGrowth: '8.1%', 
      development: 'Very High', 
      budget: '$165B',
      trend: 'up'
    },
    { 
      name: 'Uttar Pradesh', 
      gdpGrowth: '5.9%', 
      development: 'Medium', 
      budget: '$240B',
      trend: 'up'
    }
  ];

  // Recent Government Schemes
  const recentSchemes = [
    { 
      name: 'Digital India Initiative', 
      department: 'IT Ministry', 
      budget: '$12B', 
      progress: 78,
      image: 'https://plus.unsplash.com/premium_photo-1712328581716-49b75fdc1faf?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMGluZGlhfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
      trend: 'up'
    },
    { 
      name: 'Healthcare for All', 
      department: 'Health Ministry', 
      budget: '$28B', 
      progress: 65,
      image: 'https://images.unsplash.com/photo-1601841197690-6f0838bdb005?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000',
      trend: 'up'
    },
    { 
      name: 'Smart Cities Mission', 
      department: 'Urban Development', 
      budget: '$15B', 
      progress: 82,
      image: 'https://images.unsplash.com/photo-1573132223210-d65883b944aa?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWElMjBjaXR5fGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
      trend: 'up'
    }
  ];

  // Infrastructure Projects
  const infrastructureProjects = [
    { name: 'Highway Development', completion: 85, budget: '$45B', impact: 'High', trend: 'up' },
    { name: 'Railway Modernization', completion: 72, budget: '$38B', impact: 'Very High', trend: 'up' },
    { name: 'Renewable Energy', completion: 68, budget: '$22B', impact: 'High', trend: 'up' },
    { name: 'Digital Infrastructure', completion: 91, budget: '$18B', impact: 'Very High', trend: 'up' }
  ];

  // Public Reaction Data
  const publicReactions = [
    { scheme: 'Healthcare Initiative', satisfaction: 82, complaints: 18, trend: 'up' },
    { scheme: 'Education Reform', satisfaction: 76, complaints: 24, trend: 'up' },
    { scheme: 'Infrastructure Projects', satisfaction: 88, complaints: 12, trend: 'up' },
    { scheme: 'Tax Reforms', satisfaction: 65, complaints: 35, trend: 'down' }
  ];

  // Union Government Performance
  const unionPerformance = [
    { metric: 'Economic Growth', value: '7.2%', target: '7.5%', progress: 96, trend: 'up' },
    { metric: 'Fiscal Deficit', value: '5.8%', target: '5.5%', progress: 95, trend: 'up' },
    { metric: 'Foreign Investment', value: '$85B', target: '$90B', progress: 94, trend: 'up' },
    { metric: 'Export Growth', value: '12.8%', target: '15%', progress: 85, trend: 'up' }
  ];

  // Analytics Data
  const analyticsData = [
    { metric: 'Policy Implementation', value: '78%', change: '+8%' },
    { metric: 'Public Service Delivery', value: '85%', change: '+12%' },
    { metric: 'Digital Governance', value: '72%', change: '+15%' },
    { metric: 'Infrastructure Quality', value: '68%', change: '+5%' }
  ];

  // Pyramid Chart Data - Population Distribution
  const populationPyramid = [
    { ageGroup: '0-14', male: 18, female: 17 },
    { ageGroup: '15-24', male: 16, female: 15 },
    { ageGroup: '25-54', male: 28, female: 26 },
    { ageGroup: '55-64', male: 8, female: 9 },
    { ageGroup: '65+', male: 5, female: 6 }
  ];

  // Radar Chart Data - Development Indicators
  const developmentIndicators = [
    { indicator: 'Healthcare', value: 85 },
    { indicator: 'Education', value: 78 },
    { indicator: 'Infrastructure', value: 72 },
    { indicator: 'Economy', value: 82 },
    { indicator: 'Technology', value: 88 },
    { indicator: 'Environment', value: 65 }
  ];

  const maxGdp = Math.max(...economicGrowth.map(m => m.gdp));
  const maxPopulation = Math.max(...populationPyramid.flatMap(p => [p.male, p.female]));

  const renderPerformanceGrid = (items) => (
    <div className={Style.performanceGrid}>
      {items.map((item, index) => (
        <div key={index} className={Style.performanceCard}>
          <div className={Style.performanceHeader}>
            <h4>{item.name || item.scheme || item.metric}</h4>
            <span className={`${Style.trendIndicator} ${item.trend === 'up' ? Style.trendUp : Style.trendDown}`}>
              {item.trend === 'up' ? '↗' : '↘'}
            </span>
          </div>
          <div className={Style.performanceStats}>
            {item.gdpGrowth && <span>GDP: {item.gdpGrowth}</span>}
            {item.development && <span>Development: {item.development}</span>}
            {item.budget && <span>Budget: {item.budget}</span>}
            {item.satisfaction && <span>Satisfaction: {item.satisfaction}%</span>}
            {item.complaints && <span>Complaints: {item.complaints}%</span>}
            {item.value && <span>Current: {item.value}</span>}
            {item.target && <span>Target: {item.target}</span>}
          </div>
          {item.progress && (
            <div className={Style.progressContainer}>
              <div className={Style.progressBar}>
                <div 
                  className={Style.progressFill}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <span className={Style.progressText}>{item.progress}%</span>
            </div>
          )}
          <button className={Style.performanceBtn} onClick={() => navigate('/Error')}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );

  const renderSchemeGrid = (schemes) => (
    <div className={Style.schemeGrid}>
      {schemes.map((scheme, index) => (
        <div key={index} className={Style.schemeCard}>
          <img src={scheme.image} alt={scheme.name} />
          <div className={Style.schemeContent}>
            <h4>{scheme.name}</h4>
            <span className={Style.schemeDepartment}>{scheme.department}</span>
            <div className={Style.schemeStats}>
              <span>Budget: {scheme.budget}</span>
              <span>Progress: {scheme.progress}%</span>
            </div>
            <button className={Style.schemeBtn} onClick={() => navigate('/Error')}>
              Monitor
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAnalyticsGrid = (data) => (
    <div className={Style.analyticsGrid}>
      {data.map((item, index) => (
        <div key={index} className={Style.analyticsCard}>
          <h4>{item.metric}</h4>
          <div className={Style.analyticsValue}>
            <span>{item.value}</span>
            <span className={Style.analyticsChange}>{item.change}</span>
          </div>
          <button className={Style.analyticsBtn} onClick={() => navigate('/Error')}>
            Details
          </button>
        </div>
      ))}
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.welcomeBanner}>
              <div className={Style.welcomeText}>
                <h2>Government Administration Dashboard 🇮🇳</h2>
                <p>Comprehensive overview of national performance, public services, and development initiatives</p>
              </div>
              <div className={Style.quickActions}>
                <button className={Style.actionBtn} onClick={() => navigate('/Error')}>
                  <span>📊</span> Generate Report
                </button>
                <button className={Style.actionBtn} onClick={() => navigate('/Error')}>
                  <span>⚙️</span> System Settings
                </button>
              </div>
            </div>

            <div className={Style.statsGrid}>
              {statsData.map((stat, index) => (
                <div key={index} className={Style.statCard}>
                  <div className={Style.statHeader}>
                    <div 
                      className={Style.statIcon}
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      {stat.icon}
                    </div>
                    <span className={Style.statChange} style={{ color: stat.color }}>
                      {stat.change}
                    </span>
                  </div>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                  <span className={Style.statDescription}>{stat.description}</span>
                </div>
              ))}
            </div>

            <div className={Style.chartsSection}>
              {/* Economic Growth Line Chart */}
              <div className={Style.chartCard}>
                <div className={Style.chartHeader}>
                  <h3>Economic Growth Trend</h3>
                  <button className={Style.chartBtn} onClick={() => navigate('/Error')}>View Details</button>
                </div>
                <div className={Style.lineChart}>
                  {economicGrowth.map((quarter, index) => (
                    <div key={index} className={Style.linePoint}>
                      <div className={Style.lineValue} style={{ height: `${(quarter.gdp / maxGdp) * 100}%` }}>
                        <span className={Style.lineTooltip}>GDP: {quarter.gdp}%</span>
                      </div>
                      <span className={Style.lineLabel}>{quarter.quarter}</span>
                    </div>
                  ))}
                </div>
                <div className={Style.chartLegend}>
                  <span className={Style.legendItem}>
                    <span className={Style.legendColor} style={{backgroundColor: '#1e3a8a'}}></span>
                    GDP Growth
                  </span>
                </div>
              </div>

              {/* Fund Allocation Donut Chart */}
              <div className={Style.chartCard}>
                <div className={Style.chartHeader}>
                  <h3>Budget Allocation</h3>
                  <button className={Style.chartBtn} onClick={() => navigate('/Error')}>Explore</button>
                </div>
                <div className={Style.donutChart}>
                  {fundAllocation.map((fund, index) => (
                    <div 
                      key={index}
                      className={Style.donutSegment}
                      style={{ 
                        '--percentage': fund.percentage,
                        '--color': fund.color,
                        '--offset': fundAllocation.slice(0, index).reduce((a, b) => a + b.percentage, 0)
                      }}
                    ></div>
                  ))}
                  <div className={Style.donutCenter}>
                    <span>Total</span>
                    <strong>$4.2T</strong>
                  </div>
                </div>
                <div className={Style.legend}>
                  {fundAllocation.map((fund, index) => (
                    <div key={index} className={Style.legendItem}>
                      <span 
                        className={Style.legendColor}
                        style={{ backgroundColor: fund.color }}
                      ></span>
                      <span>{fund.category} ({fund.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Charts Section */}
            <div className={Style.additionalCharts}>
              {/* Pyramid Chart */}
              <div className={Style.chartCard}>
                <div className={Style.chartHeader}>
                  <h3>Population Pyramid</h3>
                  <span className={Style.chartSubtitle}>Age & Gender Distribution</span>
                </div>
                <div className={Style.pyramidChart}>
                  {populationPyramid.map((ageGroup, index) => (
                    <div key={index} className={Style.pyramidRow}>
                      <div className={Style.pyramidBar} style={{ width: `${(ageGroup.male / maxPopulation) * 45}%` }}>
                        <span>{ageGroup.male}%</span>
                      </div>
                      <span className={Style.pyramidLabel}>{ageGroup.ageGroup}</span>
                      <div className={Style.pyramidBar} style={{ width: `${(ageGroup.female / maxPopulation) * 45}%` }}>
                        <span>{ageGroup.female}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={Style.pyramidLegend}>
                  <span className={Style.legendItem}>
                    <span className={Style.legendColor} style={{backgroundColor: '#3b82f6'}}></span>
                    Male
                  </span>
                  <span className={Style.legendItem}>
                    <span className={Style.legendColor} style={{backgroundColor: '#ec4899'}}></span>
                    Female
                  </span>
                </div>
              </div>

              {/* Radar Chart */}
              <div className={Style.chartCard}>
                <div className={Style.chartHeader}>
                  <h3>Development Indicators</h3>
                  <span className={Style.chartSubtitle}>National Progress</span>
                </div>
                <div className={Style.radarChart}>
                  <svg viewBox="0 0 100 100" className={Style.radarSvg}>
                    {/* Radar Grid */}
                    {[20, 40, 60, 80].map((radius, index) => (
                      <circle key={index} cx="50" cy="50" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                    ))}
                    {/* Radar Data */}
                    <polygon 
                      points={developmentIndicators.map((indicator, i) => {
                        const angle = (i * 60 - 90) * (Math.PI / 180);
                        const radius = 40 + (indicator.value / 100) * 40;
                        const x = 50 + radius * Math.cos(angle);
                        const y = 50 + radius * Math.sin(angle);
                        return `${x},${y}`;
                      }).join(' ')}
                      fill="rgba(59, 130, 246, 0.3)"
                      stroke="#3b82f6"
                      strokeWidth="1"
                    />
                    {/* Indicators */}
                    {developmentIndicators.map((indicator, i) => {
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      const x = 50 + 85 * Math.cos(angle);
                      const y = 50 + 85 * Math.sin(angle);
                      return (
                        <text key={i} x={x} y={y} textAnchor="middle" fontSize="4.9" fill="#374151">
                          {indicator.indicator}
                        </text>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Progress Bars Chart */}
              <div className={Style.chartCard}>
                <div className={Style.chartHeader}>
                  <h3>Infrastructure Progress</h3>
                  <span className={Style.chartSubtitle}>Major Projects</span>
                </div>
                <div className={Style.progressChart}>
                  {infrastructureProjects.map((project, index) => (
                    <div key={index} className={Style.progressItem}>
                      <div className={Style.progressInfo}>
                        <span className={Style.projectName}>{project.name}</span>
                        <span className={Style.projectBudget}>{project.budget}</span>
                      </div>
                      <div className={Style.progressBar}>
                        <div 
                          className={Style.progressFill}
                          style={{ width: `${project.completion}%` }}
                        ></div>
                      </div>
                      <div className={Style.progressMeta}>
                        <span className={Style.completion}>{project.completion}%</span>
                        <span className={Style.impact}>Impact: {project.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={Style.additionalGrid}>
              <div className={Style.gridCard}>
                <h3>Top Performing States</h3>
                <div className={Style.performanceList}>
                  {statePerformance.map((state, index) => (
                    <div key={index} className={Style.performanceItem}>
                      <div className={Style.performanceInfo}>
                        <span className={Style.stateName}>{state.name}</span>
                        <span className={Style.stateStats}>
                          GDP: {state.gdpGrowth} | Dev: {state.development}
                        </span>
                      </div>
                      <span className={Style.stateBudget}>{state.budget}</span>
                    </div>
                  ))}
                </div>
                <button className={Style.viewAllBtn} onClick={() => navigate('/Error')}>
                  View All States
                </button>
              </div>

              <div className={Style.gridCard}>
                <h3>Recent Government Schemes</h3>
                <div className={Style.schemeList}>
                  {recentSchemes.map((scheme, index) => (
                    <div key={index} className={Style.schemeItem}>
                      <img src={scheme.image} alt={scheme.name} />
                      <div className={Style.schemeInfo}>
                        <span className={Style.schemeName}>{scheme.name}</span>
                        <span className={Style.schemeDepartment}>{scheme.department}</span>
                      </div>
                      <div className={Style.schemeMeta}>
                        <span className={Style.schemeBudget}>{scheme.budget}</span>
                        <span className={Style.schemeProgress}>{scheme.progress}% done</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className={Style.viewAllBtn} onClick={() => navigate('/Error')}>
                  Manage Schemes
                </button>
              </div>
            </div>
          </div>
        );

      case 'state':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>State Government Performance 🏛️</h2>
              <p>Monitor and analyze state-level governance and development metrics</p>
            </div>
            <div className={Style.sectionStats}>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>28</span>
                <span className={Style.statMiniLabel}>States Covered</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>$1.8T</span>
                <span className={Style.statMiniLabel}>Total State Budget</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>+6.8%</span>
                <span className={Style.statMiniLabel}>Avg. Growth</span>
              </div>
            </div>
            {renderPerformanceGrid(statePerformance)}
            <div className={Style.sectionActions}>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                State Comparison
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                Detailed Reports
              </button>
            </div>
          </div>
        );

      case 'union':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Union Government Performance 🇮🇳</h2>
              <p>Central government metrics and national development indicators</p>
            </div>
            <div className={Style.sectionStats}>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>$4.2T</span>
                <span className={Style.statMiniLabel}>National Budget</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>7.2%</span>
                <span className={Style.statMiniLabel}>GDP Growth</span>
              </div>
              <div className={Style.statMini}>
                <span className={Style.statMiniValue}>94.2%</span>
                <span className={Style.statMiniLabel}>Employment</span>
              </div>
            </div>
            {renderPerformanceGrid(unionPerformance)}
            <div className={Style.sectionActions}>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                Economic Analysis
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                Policy Review
              </button>
            </div>
          </div>
        );

      case 'funds':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Funds Allocation 💰</h2>
              <p>Budget distribution and financial management across sectors</p>
            </div>
            <div className={Style.fundsOverview}>
              <div className={Style.fundChart}>
                <div className={Style.donutChartLarge}>
                  {fundAllocation.map((fund, index) => (
                    <div 
                      key={index}
                      className={Style.donutSegment}
                      style={{ 
                        '--percentage': fund.percentage,
                        '--color': fund.color,
                        '--offset': fundAllocation.slice(0, index).reduce((a, b) => a + b.percentage, 0)
                      }}
                    ></div>
                  ))}
                  <div className={Style.donutCenter}>
                    <span>Total Budget</span>
                    <strong>$4.2T</strong>
                  </div>
                </div>
              </div>
              <div className={Style.fundDetails}>
                <h3>Budget Breakdown</h3>
                {fundAllocation.map((fund, index) => (
                  <div key={index} className={Style.fundItem}>
                    <span className={Style.fundCategory}>{fund.category}</span>
                    <span className={Style.fundAmount}>${(4200000000000 * fund.percentage / 100 / 1000000000).toFixed(1)}B</span>
                    <span className={Style.fundPercentage}>{fund.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'schemes':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Public Schemes & Initiatives 👥</h2>
              <p>Government programs and their implementation progress</p>
            </div>
            {renderSchemeGrid(recentSchemes)}
            <div className={Style.sectionActions}>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                Launch New Scheme
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                Scheme Analytics
              </button>
            </div>
          </div>
        );

      case 'infrastructure':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Infrastructure Development 🏗️</h2>
              <p>Major projects and construction progress nationwide</p>
            </div>
            {renderPerformanceGrid(infrastructureProjects)}
            <div className={Style.sectionActions}>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                Add New Project
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                Infrastructure Map
              </button>
            </div>
          </div>
        );

      case 'reactions':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Public Reactions & Feedback 💬</h2>
              <p>Citizen satisfaction and feedback on government schemes</p>
            </div>
            {renderPerformanceGrid(publicReactions)}
            <div className={Style.sentimentAnalysis}>
              <div className={Style.sentimentCard}>
                <h3>Overall Sentiment</h3>
                <div className={Style.sentimentMeter}>
                  <div className={Style.meterFill} style={{width: '78%'}}></div>
                </div>
                <span className={Style.sentimentScore}>78% Positive</span>
              </div>
              <div className={Style.sentimentCard}>
                <h3>Response Rate</h3>
                <div className={Style.sentimentMeter}>
                  <div className={Style.meterFill} style={{width: '85%'}}></div>
                </div>
                <span className={Style.sentimentScore}>85% Addressed</span>
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>Advanced Analytics 📈</h2>
              <p>Comprehensive performance metrics and predictive insights</p>
            </div>
            <div className={Style.analyticsOverview}>
              <div className={Style.analyticsChart}>
                <h3>Performance Overview</h3>
                <div className={Style.metricBars}>
                  {[78, 85, 72, 68, 82, 76].map((value, index) => (
                    <div key={index} className={Style.metricBar} style={{ height: `${value}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
            {renderAnalyticsGrid(analyticsData)}
            <div className={Style.sectionActions}>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                Download Report
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                Predictive Analysis
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className={Style.sectionContent}>
            <div className={Style.sectionHeader}>
              <h2>{menuItems.find(item => item.id === activeSection)?.label}</h2>
              <p>Manage your {activeSection} data and analytics</p>
            </div>
            <div className={Style.placeholderContent}>
              <div className={Style.placeholderCard}>
                <h3>{menuItems.find(item => item.id === activeSection)?.label} Management</h3>
                <p>Comprehensive tools for government administration and monitoring</p>
                <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                  Explore {menuItems.find(item => item.id === activeSection)?.label}
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Header />
      <div className={Style.dashboard}>
        <aside className={Style.sidebar}>
          <div className={Style.sidebarHeader}>
            <div className={Style.logo}>
              <span className={Style.logoIcon}>🏛️</span>
              <h2>GovAdmin</h2>
            </div>
          </div>
          
          <nav className={Style.sidebarNav}>
            <ul>
              {menuItems.map((item) => (
                <li 
                  key={item.id}
                  className={`${Style.navItem} ${activeSection === item.id ? Style.active : ''}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <span className={Style.navIcon}>{item.icon}</span>
                  <span className={Style.navLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
          </nav>

          <div className={Style.sidebarFooter}>
            <div className={Style.adminPanel}>
              <div className={Style.adminHeader}>
                <h3>Administration Panel</h3>
                <span className={Style.adminBadge}>Government Official</span>
              </div>
              <div className={Style.adminStats}>
                <div className={Style.adminStat}>
                  <span>Active Schemes</span>
                  <strong>47</strong>
                </div>
                <div className={Style.adminStat}>
                  <span>Departments</span>
                  <strong>28</strong>
                </div>
              </div>
              <button className={Style.adminBtn} onClick={() => navigate('/Error')}>
                System Settings
              </button>
            </div>
          </div>
        </aside>

        <main className={Style.mainContent}>
          <header className={Style.header}>
            <div className={Style.headerLeft}>
              <h1>Government Administration Dashboard</h1>
              <p>Real-time monitoring of national development and public services</p>
            </div>
            <div className={Style.headerActions}>
              <button className={Style.notificationBtn} onClick={() => navigate('/Error')}>
                <span>🔔</span>
                <span className={Style.notificationBadge}>3</span>
              </button>
              <button className={Style.primaryBtn} onClick={() => navigate('/Error')}>
                <span>📊</span> Generate Report
              </button>
              <button className={Style.secondaryBtn} onClick={() => navigate('/Error')}>
                <span>⚙️</span> Settings
              </button>
            </div>
          </header>

          {renderSection()}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default DashBoard;
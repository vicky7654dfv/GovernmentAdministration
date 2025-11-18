import styles from './Leadership.module.css';
import presidentImage from '../../assets/Leadership/1.webp';
import primeMinisterImage from '../../assets/Leadership/2.webp';
import chiefJusticeImage from '../../assets/Leadership/3.webp';
import { useNavigate } from 'react-router-dom';

const Leadership = () => {
  const leaders = [
    {
      id: 1,
      name: "President of India",
      title: "Head of State",
      role: "Constitutional Head",
      description: "The First Citizen of India and the Supreme Commander of the Indian Armed Forces, upholding the Constitution and ensuring the smooth functioning of democracy.",
      achievements: [
        "Guardian of the Constitution",
        "Supreme Commander of Armed Forces",
        "Appoints Prime Minister and Council of Ministers"
      ],
      color: "#3B82F6",
      image: presidentImage
    },
    {
      id: 2,
      name: "Prime Minister",
      title: "Head of Government",
      role: "Chief Executive",
      description: "Leads the Council of Ministers and is responsible for the governance of the country, implementing policies and ensuring national development.",
      achievements: [
        "Digital India Initiative",
        "Economic Reforms",
        "International Diplomacy"
      ],
      color: "#10B981",
      image: primeMinisterImage
    },
    {
      id: 3,
      name: "Chief Justice",
      title: "Honorable Chief Justice",
      role: "Head of Judiciary",
      description: "Presides over the Supreme Court and ensures the independence of judiciary, protecting the fundamental rights of citizens.",
      achievements: [
        "Judicial Reforms",
        "Constitutional Protection",
        "Legal System Modernization"
      ],
      color: "#8B5CF6",
      image: chiefJusticeImage
    }
  ];
const navigate=useNavigate();
  return (
    <div className={styles.container} data-aos="fade">
      <div className={styles.header}>
        <h2 className={styles.title}>National Leadership</h2>
        <p className={styles.subtitle}>
          Meet the distinguished leaders guiding our nation towards progress and prosperity
        </p>
      </div>

      <div className={styles.leadersGrid}>
        {leaders.map((leader, index) => (
          <div key={leader.id} className={styles.leaderCard}>
            <div className={styles.cardHeader}>
              <div 
                className={styles.leaderImage}
                style={{ 
                  backgroundImage: `url(${leader.image})`,
                  backgroundColor: leader.color 
                }}
              >
                <div className={styles.imageGlow} style={{ backgroundColor: leader.color }}></div>
              </div>
              <div className={styles.leaderBadge} style={{ backgroundColor: leader.color }}>
                {leader.role}
              </div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.leaderName}>{leader.name}</h3>
              <p className={styles.leaderTitle}>{leader.title}</p>
              <p className={styles.leaderDescription}>{leader.description}</p>
              
              <div className={styles.achievements}>
                <h4 className={styles.achievementsTitle}>Key Responsibilities</h4>
                <ul className={styles.achievementsList}>
                  {leader.achievements.map((achievement, idx) => (
                    <li key={idx} className={styles.achievementItem}>
                      <i className="fa-solid fa-star" style={{ color: leader.color }}></i>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <button 
                className={styles.profileButton}
                style={{ backgroundColor: leader.color }}
              onClick={()=>{navigate("/Error")}}>
                View Full Profile
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div className={styles.cardGlow} style={{ backgroundColor: leader.color }}></div>
          </div>
        ))}
      </div>

      <div className={styles.leadershipInfo}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <i className="fa-solid fa-shield-alt"></i>
          </div>
          <div className={styles.infoContent}>
            <h3>Constitutional Framework</h3>
            <p>Our leadership operates within the democratic framework established by the Constitution of India, ensuring checks and balances across all branches of government.</p>
          </div>
        </div>
        
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <i className="fa-solid fa-handshake"></i>
          </div>
          <div className={styles.infoContent}>
            <h3>Collaborative Governance</h3>
            <p>The executive, legislature, and judiciary work in harmony to uphold democratic values and ensure the welfare of all citizens.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
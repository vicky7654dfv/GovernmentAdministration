import React from 'react';
import styles from './LeadershipSection.module.css';

const LeadershipSection = () => {
  const leaders = [
    {
      title: "Tamil Nadu Chief Minister",
      description: "Leading the state with visionary policies and development initiatives for comprehensive growth and public welfare.",
      buttonText: "View Profile",
      image: "https://images.unsplash.com/photo-1742119897876-67e9935ac375?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxlYWRlcnxlbnwwfDJ8MHx8fDI%3D"
    },
    {
      title: "Tamil Nadu Governor",
      description: "Constitutional head ensuring governance follows democratic principles and serves the people's interests effectively.",
      buttonText: "View Profile",
      image: "https://easy-peasy.ai/cdn-cgi/image/quality%3D95%2Cformat%3Dauto%2Cwidth%3D800/https%3A//media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/20e27147-6f52-435d-a604-4b5703cf2b62.png"
    },
    {
      title: "Tamil Nadu High Court Chief Justice",
      description: "Upholding justice and constitutional values while ensuring accessible and timely judicial services for all citizens.",
      buttonText: "View Profile",
      image: "https://media.istockphoto.com/id/1326910879/photo/shot-of-a-business-women-using-laptop-working-at-home-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=oVyFhYmEJLrnZuz6K2A5pyszHoWFRf2agzd6JCzRcX4="
    }
  ];

  const handleButtonClick = () => {
    window.location.href = "/Error";
  };

  return (
    <section className={styles.leadershipSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>State Leadership</h2>
        <div className={styles.leadersGrid}>
          {leaders.map((leader, index) => (
            <div key={index} className={styles.leaderCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={leader.image} 
                  alt={leader.title}
                  className={styles.leaderImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h3>{leader.title}</h3>
                <p>{leader.description}</p>
                <button 
                  className={styles.profileButton}
                  onClick={handleButtonClick}
                >
                  {leader.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
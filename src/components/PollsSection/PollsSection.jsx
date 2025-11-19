import React, { useState, useEffect } from 'react';
import styles from './PollsSection.module.css';

const PollsSection = () => {
  // Initial polls data with pre-filled percentages
  const initialPolls = [
    {
      id: 1,
      question: "How satisfied are you with the current public transportation system?",
      options: [
        { id: 1, text: "Very Satisfied", votes: 850 },
        { id: 2, text: "Neutral", votes: 450 },
        { id: 3, text: "Unsatisfied", votes: 300 }
      ],
      totalVotes: 1600,
      voted: false
    },
    {
      id: 2,
      question: "What should be the government's top priority for next year?",
      options: [
        { id: 1, text: "Healthcare", votes: 1200 },
        { id: 2, text: "Education", votes: 900 },
        { id: 3, text: "Infrastructure", votes: 700 }
      ],
      totalVotes: 2800,
      voted: false
    },
    {
      id: 3,
      question: "How effective are the current welfare schemes for poor families?",
      options: [
        { id: 1, text: "Very Effective", votes: 600 },
        { id: 2, text: "Somewhat Effective", votes: 950 },
        { id: 3, text: "Not Effective", votes: 250 }
      ],
      totalVotes: 1800,
      voted: false
    },
    {
      id: 4,
      question: "Rate the digital governance services in Tamil Nadu",
      options: [
        { id: 1, text: "Excellent", votes: 1100 },
        { id: 2, text: "Good", votes: 800 },
        { id: 3, text: "Needs Improvement", votes: 400 }
      ],
      totalVotes: 2300,
      voted: false
    }
  ];

  const [polls, setPolls] = useState(initialPolls);
  const [selectedOptions, setSelectedOptions] = useState({});

  // Load polls data from localStorage on component mount
  useEffect(() => {
    const savedPolls = localStorage.getItem('citizenPolls');
    if (savedPolls) {
      setPolls(JSON.parse(savedPolls));
    }
  }, []);

  // Save polls data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('citizenPolls', JSON.stringify(polls));
  }, [polls]);

  const formatVotes = (votes) => {
    if (votes >= 1000) {
      return (votes / 1000).toFixed(1) + 'K';
    }
    return votes.toString();
  };

  const getPercentage = (votes, totalVotes) => {
    if (totalVotes === 0) return 0;
    return Math.round((votes / totalVotes) * 100);
  };

  const handleVote = (pollId, optionId) => {
    if (polls.find(poll => poll.id === pollId)?.voted) return;

    setSelectedOptions(prev => ({ ...prev, [pollId]: optionId }));

    const updatedPolls = polls.map(poll => {
      if (poll.id === pollId) {
        const updatedOptions = poll.options.map(option =>
          option.id === optionId
            ? { ...option, votes: option.votes + 1 }
            : option
        );

        return {
          ...poll,
          options: updatedOptions,
          totalVotes: poll.totalVotes + 1,
          voted: true
        };
      }
      return poll;
    });

    setPolls(updatedPolls);
  };

  const resetPoll = (pollId) => {
    const originalPoll = initialPolls.find(poll => poll.id === pollId);
    if (originalPoll) {
      const updatedPolls = polls.map(poll =>
        poll.id === pollId ? { ...originalPoll, voted: false } : poll
      );
      setPolls(updatedPolls);
      setSelectedOptions(prev => {
        const newSelected = { ...prev };
        delete newSelected[pollId];
        return newSelected;
      });
    }
  };

  const getWinningOption = (options) => {
    return options.reduce((winning, current) => 
      current.votes > winning.votes ? current : winning
    );
  };

  return (
    <section className={styles.pollsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Citizen Polls</h2>
        <p className={styles.sectionSubtitle}>Share your opinion on important government initiatives</p>
        
        <div className={styles.pollsGrid}>
          {polls.map((poll) => {
            const winningOption = getWinningOption(poll.options);
            
            return (
              <div key={poll.id} className={styles.pollCard}>
                <div className={styles.pollHeader}>
                  <h3 className={styles.pollQuestion}>{poll.question}</h3>
                  <div className={styles.totalVotes}>
                    <span className={styles.votesCount}>{formatVotes(poll.totalVotes)}</span>
                    <span className={styles.votesLabel}>votes</span>
                  </div>
                </div>

                <div className={styles.pollOptions}>
                  {poll.options.map((option) => {
                    const percentage = getPercentage(option.votes, poll.totalVotes);
                    const isSelected = selectedOptions[poll.id] === option.id;
                    const isWinning = option.id === winningOption.id;
                    
                    return (
                      <div
                        key={option.id}
                        className={`${styles.option} ${isSelected ? styles.selected : ''} ${poll.voted ? styles.voted : ''}`}
                        onClick={() => !poll.voted && handleVote(poll.id, option.id)}
                      >
                        <div className={styles.optionContent}>
                          <div className={styles.optionText}>
                            <span className={styles.optionLabel}>{option.text}</span>
                            {poll.voted && (
                              <div className={styles.percentageContainer}>
                                <span className={styles.percentage}>{percentage}%</span>
                                {isWinning && <span className={styles.winningBadge}>🏆</span>}
                              </div>
                            )}
                          </div>
                          
                          {poll.voted && (
                            <div className={styles.progressContainer}>
                              <div 
                                className={`${styles.progressBar} ${isSelected ? styles.selectedBar : ''}`}
                                style={{ width: `${percentage}%` }}
                              >
                                <div className={styles.progressFill}></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className={styles.pollFooter}>
                  {!poll.voted ? (
                    <p className={styles.voteInstruction}>Click to cast your vote</p>
                  ) : (
                    <div className={styles.pollActions}>
                      <span className={styles.thankYou}>Thank you for voting! 🎉</span>
                      <button 
                        className={styles.resetButton}
                        onClick={() => resetPoll(poll.id)}
                      >
                        Vote Again
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PollsSection;
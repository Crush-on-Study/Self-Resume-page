import React from 'react';
import '../../styles/components/ContributionBadge.css';

const ContributionBadge = ({ contribution, label = "본인 기여" }) => {
  return (
    <div className="contribution-badge">
      <span className="contribution-text">{label}</span>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${contribution}%` }}
        ></div>
      </div>
      <span className="contribution-text">{contribution}%</span>
    </div>
  );
};

export default ContributionBadge;

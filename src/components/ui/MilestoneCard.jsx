import React from 'react';

const formatDate = (iso) => {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${y}.${m}.${d}`;
};

const MilestoneCard = ({ milestone, className = '', onMouseUp, onTouchEnd }) => {
  const { id, icon, title, subtitle, isMilestone, isCurrent, type, start, end, date } = milestone;

  const classes = [
    'milestone',
    isMilestone ? 'major' : 'minor',
    isCurrent ? 'current' : '',
    type || ''
  ].filter(Boolean).join(' ');

  const displayDate = date
    ? formatDate(date)
    : `${formatDate(start)} ~ ${end ? formatDate(end) : 'NOW'}`;

  return (
    <div 
      key={id}
      className={`${classes} ${className}`.trim()}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
    >
      <div className="milestone-icon">{icon}</div>
      <div className="milestone-info">
        <div className="milestone-date">{displayDate}</div>
        <div className="milestone-title">{title}</div>
        <div className="milestone-subtitle">{subtitle}</div>
      </div>
      {isCurrent && <div className="current-indicator">NOW</div>}
    </div>
  );
};

export default MilestoneCard; 
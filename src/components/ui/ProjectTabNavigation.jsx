import React from 'react';

const ProjectTabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: 'overview', label: '개요' },
    { key: 'architecture', label: '아키텍처' },
    { key: 'process', label: '프로세스' },
    { key: 'screenshots', label: '스크린샷' },
    { key: 'lessons', label: '배운 점' }
  ];

  return (
    <div className="tab-navigation">
      {tabs.map((tab) => (
        <button 
          key={tab.key}
          className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectTabNavigation; 
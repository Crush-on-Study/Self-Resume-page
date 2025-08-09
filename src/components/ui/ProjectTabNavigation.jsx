import React from 'react';
import Button from '../common/button';

const ProjectTabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: 'overview', label: '개요' },
    { key: 'architecture', label: '기술스택' },
    { key: 'process', label: '프로세스' },
    { key: 'screenshots', label: '스크린샷' },
    { key: 'lessons', label: '배운 점' }
  ];

  return (
    <div className="tab-navigation">
      {tabs.map((tab) => (
        <Button 
          key={tab.key}
          className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.key)}
          color="#5DE0F0"
          speed="3s"
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default ProjectTabNavigation; 
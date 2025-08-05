import React, { useState } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import Button from '../components/common/button';
import GradientText from '../components/common/GradientText';
import ShinyText from '../components/external/shinyText';
import '../styles/home.css';
import '../styles/skills.css';

const SkillsPage = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTipBox, setShowTipBox] = useState(false);

  // 기술스택 데이터
  const techStack = {
    personal: [
      { id: 'react', name: 'React', icon: '⚛️', projects: ['[Personal]포트폴리오 웹사이트', '[Personal]Black Market', '[Personal]Lunch Insects'], shared: true },
      { id: 'tailwind', name: 'Tailwind', icon: '🎨', projects: ['[Personal]Lunch Insects','[Personal]Black Market'] },
      { id: 'python', name: 'Python', icon: '🐍', projects: ['[Personal]코인 자동매매 프로그램'] },
      { id: 'react-native', name: 'React Native', icon: '🐍', projects: ['[Personal]CS Study Helper']},
      { id: 'git', name: 'Git', icon: '📚', projects: ['[Personal]버전 관리', '[Personal]협업 프로젝트'], shared: true },
      { id: 'figma', name: 'Figma', icon: '🎨', projects: ['[Personal]화면정의서', '[Personal]아이콘 디자인'], shared: true },
      { id: 'firebase', name: 'Firebase', icon: '🟢', projects: ['[Personal]개인프로젝트 배포'] },
    ],
    company: [
      { id: 'Vue', name: 'Vue.js', icon: '🟢', projects: ['[Company]운항 모니터링 프로그램'] },
      { id: 'js-company', name: 'JS/HTML/CSS', icon: '🌐', projects: ['[Company]화면 개발'], shared: true },
      { id: 'git-company', name: 'Git', icon: '📚', projects: ['[Company]팀 협업'], shared: true },
      { id: 'python', name: 'Python', icon: '🐍', projects: ['[Company]스케줄 데이터 크롤링', '[Company]데이터 분석'] },
      { id: 'figma-company', name: 'Figma', icon: '🎨', projects: ['[Company]화면정의서', '[Company] 아이콘 디자인'], shared: true }
    ]
  };

  const handleNodeClick = (node, event) => {
    setSelectedNode(node);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleCloseTooltip = () => {
    setSelectedNode(null);
  };

  const toggleTipBox = () => {
    setShowTipBox(!showTipBox);
  };

  return (
    <div className="skills-page">
      {/* Background Orb */}
      <div className="orb-background">
        <Orb />
      </div>
      
      {/* Header */}
      <Header activeIndex={1} />

      {/* Main Content */}
      <main className="skills-content">
        <div className="skills-header">
          <GradientText 
            className="skills-title"
            colors={["#4CAF50", "#5DE0F0", "#FFD700", "#FF6B6B"]}
            animationSpeed={6}
          >
            Skills
          </GradientText>
          <ShinyText 
            text="개인 프로젝트와 회사 프로젝트에서 사용한 기술들"
            disabled={false}
            speed={3}
            className="skills-subtitle"
          />
          <Button 
            onClick={toggleTipBox}
            className="tip-box-button"
            color="#4CAF50,#5DE0F0,#FFD700,#FF6B6B"
            speed="3s"
            thickness={2}
          >
            {showTipBox ? 'Hide Tip Box!' : 'Show Tip Box!'}
          </Button>
        </div>

        {/* Network Chart */}
        <div className="network-container">

          {/* Personal Tech Nodes */}
          {techStack.personal.map((tech, index) => (
            <div
              key={tech.id}
              className={`tech-node personal-tech-node tech-node-${index + 1}`}
              onClick={(e) => handleNodeClick(tech, e)}
            >
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
              
              {/* Always visible tooltip when showTipBox is true */}
              {showTipBox && (
                <div className="node-tooltip">
                  <div className="tooltip-header">
                    <span className="tooltip-icon">{tech.icon}</span>
                    <span className="tooltip-title">{tech.name}</span>
                  </div>
                  <div className="tooltip-content">
                    <h4>Projects:</h4>
                    <ul>
                      {tech.projects.map((project, idx) => (
                        <li key={idx}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Company Tech Nodes */}
          {techStack.company.map((tech, index) => (
            <div
              key={tech.id}
              className={`tech-node company-tech-node tech-node-company-${index + 1}`}
              onClick={(e) => handleNodeClick(tech, e)}
            >
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
              
              {/* Always visible tooltip when showTipBox is true */}
              {showTipBox && (
                <div className="node-tooltip">
                  <div className="tooltip-header">
                    <span className="tooltip-icon">{tech.icon}</span>
                    <span className="tooltip-title">{tech.name}</span>
                  </div>
                  <div className="tooltip-content">
                    <h4>Projects:</h4>
                    <ul>
                      {tech.projects.map((project, idx) => (
                        <li key={idx}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}


        </div>



        {/* Tooltip */}
        {selectedNode && (
          <div 
            className="tooltip"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y
            }}
            onClick={handleCloseTooltip}
          >
            <div className="tooltip-header">
              <span className="tooltip-icon">{selectedNode.icon}</span>
              <span className="tooltip-title">{selectedNode.name}</span>
              <button className="tooltip-close" onClick={handleCloseTooltip}>×</button>
            </div>
            <div className="tooltip-content">
              <h4>사용한 프로젝트:</h4>
              <ul>
                {selectedNode.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SkillsPage; 
import React, { useState } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import Button from '../components/common/button';
import GradientText from '../components/common/GradientText';
import ShinyText from '../components/external/shinyText';
import '../styles/pages/home.css';
import '../styles/pages/skills.css';

const SkillsPage = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTipBox, setShowTipBox] = useState(false);

  // 기술스택 데이터 - 기술별로 통합
  const techStack = [
    { 
      id: 'react', 
      name: 'React', 
      icon: '⚛️', 
      personal: ['포트폴리오 웹사이트', 'Black Market', 'Lunch Insects'],
      company: []
    },
    { 
      id: 'vue', 
      name: 'Vue.js', 
      icon: '🟢', 
      personal: [],
      company: ['운항 모니터링 프로그램']
    },
    { 
      id: 'tailwind', 
      name: 'Tailwind', 
      icon: '🎨', 
      personal: ['Lunch Insects', 'Black Market'],
      company: []
    },
    { 
      id: 'python', 
      name: 'Python', 
      icon: '🐍', 
      personal: ['코인 자동매매 프로그램'],
      company: ['스케줄 데이터 크롤링', '데이터 분석']
    },
    { 
      id: 'react-native', 
      name: 'React Native', 
      icon: '📱', 
      personal: ['CS Study Helper'],
      company: []
    },
    { 
      id: 'git', 
      name: 'Git', 
      icon: '📚', 
      personal: ['버전 관리', '협업 프로젝트'],
      company: ['팀 협업']
    },
    { 
      id: 'figma', 
      name: 'Figma', 
      icon: '🎨', 
      personal: ['화면정의서', '아이콘 디자인'],
      company: ['화면정의서', '아이콘 디자인']
    },
    { 
      id: 'firebase', 
      name: 'Firebase', 
      icon: '🟢', 
      personal: ['개인프로젝트 배포'],
      company: []
    },
    { 
      id: 'js-html-css', 
      name: 'JS/HTML/CSS', 
      icon: '🌐', 
      personal: [],
      company: ['화면 개발']
    }
  ];

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
            &lt;skills /&gt;
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

          {/* Tech Nodes */}
          {techStack.map((tech, index) => (
            <div
              key={tech.id}
              className={`tech-node tech-node-${index + 1}`}
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
                    {tech.personal.length > 0 && (
                      <div>
                        <h4>Personal Projects:</h4>
                        <ul>
                          {tech.personal.map((project, idx) => (
                            <li key={idx}>{project}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {tech.company.length > 0 && (
                      <div>
                        <h4>Company Projects:</h4>
                        <ul>
                          {tech.company.map((project, idx) => (
                            <li key={idx}>{project}</li>
                          ))}
                        </ul>
                      </div>
                    )}
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
              {selectedNode.personal.length > 0 && (
                <div>
                  <h4>Personal Projects:</h4>
                  <ul>
                    {selectedNode.personal.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedNode.company.length > 0 && (
                <div>
                  <h4>Company Projects:</h4>
                  <ul>
                    {selectedNode.company.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SkillsPage; 
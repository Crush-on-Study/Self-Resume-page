import React, { useState } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import '../styles/home.css';
import '../styles/skills.css';

const SkillsPage = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // 기술스택 데이터
  const techStack = {
    personal: [
      { id: 'react', name: 'React', icon: '⚛️', projects: ['포트폴리오 웹사이트', '개인 블로그', '투두리스트 앱'], shared: true },
      { id: 'vue', name: 'Vue.js', icon: '🟢', projects: ['관리자 대시보드', '쇼핑몰 프론트엔드'] },
      { id: 'js', name: 'JS/HTML/CSS', icon: '🌐', projects: ['랜딩페이지', '반응형 웹사이트', '애니메이션 효과'], shared: true },
      { id: 'tailwind', name: 'Tailwind', icon: '🎨', projects: ['UI 컴포넌트 라이브러리', '관리자 패널'] },
      { id: 'python', name: 'Python', icon: '🐍', projects: ['데이터 분석 스크립트', '웹 크롤링 도구'] },
      { id: 'git', name: 'Git', icon: '📚', projects: ['버전 관리', '협업 프로젝트'], shared: true },
      { id: 'figma', name: 'Figma', icon: '🎨', projects: ['UI/UX 디자인', '프로토타이핑'], shared: true }
    ],
    company: [
      { id: 'nodejs', name: 'Node.js', icon: '🟢', projects: ['백엔드 API 개발', '서버 구축'] },
      { id: 'react-company', name: 'React', icon: '⚛️', projects: ['기업 웹사이트', '관리 시스템'], shared: true },
      { id: 'js-company', name: 'JS/HTML/CSS', icon: '🌐', projects: ['기업 랜딩페이지', '반응형 웹'], shared: true },
      { id: 'git-company', name: 'Git', icon: '📚', projects: ['팀 협업', 'CI/CD 파이프라인'], shared: true },
      { id: 'figma-company', name: 'Figma', icon: '🎨', projects: ['기업 UI/UX 디자인', '프로토타이핑'], shared: true }
    ]
  };

  const handleNodeClick = (node, event) => {
    setSelectedNode(node);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleCloseTooltip = () => {
    setSelectedNode(null);
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
          <h1 className="skills-title">기술 스택</h1>
          <p className="skills-subtitle">개인 프로젝트와 회사 프로젝트에서 사용한 기술들</p>
        </div>

        {/* Network Chart */}
        <div className="network-container">
          {/* Personal Node */}
          <div className="main-node personal-node">
            <div className="node-content">
              <div className="node-icon">👤</div>
              <div className="node-label">Personal</div>
            </div>
          </div>

          {/* Company Node */}
          <div className="main-node company-node">
            <div className="node-content">
              <div className="node-icon">🏢</div>
              <div className="node-label">Company</div>
            </div>
          </div>

          {/* Personal Tech Nodes */}
          {techStack.personal.map((tech, index) => (
            <div
              key={tech.id}
              className={`tech-node personal-tech-node tech-node-${index + 1}`}
              onClick={(e) => handleNodeClick(tech, e)}
            >
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
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
            </div>
          ))}

          {/* Connection Lines */}
          <svg className="connections" width="100%" height="100%">
            {/* Personal connections */}
            {techStack.personal.map((tech, index) => (
              <line
                key={`personal-${tech.id}`}
                className="connection-line personal-line"
                x1="20%"
                y1="50%"
                x2={`${20 + (index + 1) * 8}%`}
                y2={`${30 + (index % 3) * 20}%`}
              />
            ))}
            
            {/* Company connections */}
            {techStack.company.map((tech, index) => (
              <line
                key={`company-${tech.id}`}
                className="connection-line company-line"
                x1="80%"
                y1="50%"
                x2={`${80 - (index + 1) * 8}%`}
                y2={`${30 + (index % 3) * 20}%`}
              />
            ))}

            {/* Shared connections - 중복되는 기술들을 양쪽 노드에 연결 */}
            {techStack.personal.filter(tech => tech.shared).map((tech, index) => {
              const companyTech = techStack.company.find(cTech => 
                cTech.name === tech.name && cTech.shared
              );
              if (companyTech) {
                return (
                  <line
                    key={`shared-${tech.id}`}
                    className="connection-line shared-line"
                    x1={`${20 + (index + 1) * 8}%`}
                    y1={`${30 + (index % 3) * 20}%`}
                    x2={`${80 - (techStack.company.indexOf(companyTech) + 1) * 8}%`}
                    y2={`${30 + (techStack.company.indexOf(companyTech) % 3) * 20}%`}
                  />
                );
              }
              return null;
            })}
          </svg>
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
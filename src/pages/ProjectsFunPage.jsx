import React from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import GradientText from '../components/common/GradientText';
import ShinyText from '../components/external/shinyText';
import '../styles/home.css';
import '../styles/projects.css';

const ProjectsFunPage = () => {
  return (
    <div className="projects-page">
      {/* Background Orb */}
      <div className="orb-background">
        <Orb />
      </div>
      
      {/* Header */}
      <Header activeIndex={3} />

      {/* Main Content */}
      <main className="projects-content">
        <div className="projects-header">
          <GradientText 
            className="projects-title"
            colors={["#4CAF50", "#5DE0F0", "#FFD700", "#FF6B6B"]}
            animationSpeed={6}
          >
            Projects for Fun
          </GradientText>
          <ShinyText 
            text="개인적으로 재미있게 만든 프로젝트들"
            disabled={false}
            speed={3}
            className="projects-subtitle"
          />
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">프로젝트 이미지</div>
            </div>
            <div className="project-info">
              <h3 className="project-title">포트폴리오 웹사이트</h3>
              <p className="project-description">
                지금 여러분이 보고 있는 이 사이트!
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Framer Motion</span>
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">Firebase</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">프로젝트 이미지</div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Black Market</h3>
              <p className="project-description">
                React로 만든 회사 식권 포인트 p2p 마켓 사이트
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Zustand</span>
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">Node.js</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">프로젝트 이미지</div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Lunch Insects</h3>
              <p className="project-description">
                직장인들은 1초라도 더 쉬는 시간이 필요하다! 서울 중구 기준 식사장소 이동 및 식사 예상 소요 시간 예측 앱
              </p>
              <div className="project-tech">
                <span className="tech-tag">Vue3</span>
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsFunPage; 
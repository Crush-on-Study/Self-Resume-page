import React from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import GradientText from '../components/common/GradientText';
import ShinyText from '../components/external/shinyText';
import '../styles/home.css';
import '../styles/projects.css';

const ProjectsCompanyPage = () => {
  return (
    <div className="projects-page">
      {/* Background Orb */}
      <div className="orb-background">
        <Orb />
      </div>
      
      {/* Header */}
      <Header activeIndex={4} />

      {/* Main Content */}
      <main className="projects-content">
        <div className="projects-header">
          <GradientText 
            className="projects-title"
            colors={["#4CAF50", "#5DE0F0", "#FFD700", "#FF6B6B"]}
            animationSpeed={6}
          >
            Projects in Company
          </GradientText>
          <ShinyText 
            text="회사에서 진행한 프로젝트들"
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
              <h3 className="project-title">업무 자동화를 위한 크롤링 및 모니터링 화면</h3>
              <p className="project-description">
                정기 컨테이너선사 스케줄 일정 크롤링 + 모니터링 개발
              </p>
              <div className="project-tech">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Oracle</span>
                <span className="tech-tag">Figma</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">프로젝트 이미지</div>
            </div>
            <div className="project-info">
              <h3 className="project-title">운임지수 예측 프로그램</h3>
              <p className="project-description">
                스케줄 , SCFI 선물지수 , 항만 적체 일수 , GRI 공표 자료 기반 운임 방향 예상
              </p>
              <div className="project-tech">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Oracle</span>
                <span className="tech-tag">Figma</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">프로젝트 이미지</div>
            </div>
            <div className="project-info">
              <h3 className="project-title">중소 제조업 대상 LCA 대시보드</h3>
              <p className="project-description">
                중소 제조업 대상 환경 부하 및 환경 영향 평가 프로그램 개발
              </p>
              <div className="project-tech">
                <span className="tech-tag">Vue3</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsCompanyPage; 
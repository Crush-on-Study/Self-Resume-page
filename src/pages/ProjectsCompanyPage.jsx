import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import GradientText from '../components/common/GradientText';
import ShinyText from '../components/external/shinyText';
import '../styles/home.css';
import '../styles/projects.css';

const ProjectsCompanyPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: "업무 자동화를 위한 크롤링 및 모니터링 화면",
      description: "정기 컨테이너선사 스케줄 일정 크롤링 + 모니터링 개발",
      tech: ["Vue2", "Python", "Azure", "Figma", "Oracle"],
      detailDescription: "[2시간 ➡️ 27분] 수기로 스케줄 업데이트하던 작업을 선사 홈페이지를 찍고 자동으로 크롤링하고, 실시간으로 모니터링할 수 있는 대시보드를 개발했습니다.",
      role: "1인 풀스택",
      duration: "2025.06.25 - 2025.08.22",
      challenges: ["CAPTCHA 차단봇 우회", "이미지 파일 형태 처리 방법", "유지보수 최소화를 위한 최적화 고민"],
      solutions: ["사랑해요 오픈소스", "Azure OCR엔진 사용", "크롤링 작업부터 기간계 DB 적재까지의 구조화 리팩토링"],
      githubUrl: "https://github.com/Crush-on-Study/RPA_Crawling"
    },
    {
      id: 2,
      title: "운임지수 예측 프로그램",
      description: "스케줄 , SCFI 선물지수 , 항만 적체 일수 , GRI 공표 자료 기반 운임 방향 예상",
      tech: ["JavaScript (Valina)", "Python", "Oracle", "Figma"],
      detailDescription: "해운 시장의 운임 변동을 예측하기 위해 다양한 데이터 소스를 분석하는 프로그램을 개발했습니다. 스케줄, SCFI 선물지수, 항만 적체 일수, GRI 공표 자료를 종합적으로 분석하여 운임 방향을 예측합니다.",
      role: "기획 & PM 및 크롤링",
      duration: "2025.07.25 - 2025.11",
      challenges: ["복잡한 데이터 소스 통합", "정확한 예측 모델 구축", "실시간 데이터 처리"],
      solutions: ["ETL 파이프라인 구축", "머신러닝 모델 적용", "분산 처리 시스템 구현"],
      githubUrl: "https://github.com/Crush-on-Study/profit_dashboard"
    },
    {
      id: 3,
      title: "중소 제조업 대상 LCA 대시보드",
      description: "중소 제조업 대상 환경 부하 및 환경 영향 평가 프로그램 개발",
      tech: ["Vue3", "Python", "Figma"],
      detailDescription: "중소 제조업체들이 제품의 환경 영향을 쉽게 평가할 수 있도록 LCA(Life Cycle Assessment) 대시보드를 개발했습니다. 복잡한 환경 평가 과정을 직관적인 인터페이스로 제공하여 중소기업도 쉽게 활용할 수 있도록 했습니다.",
      role: "프론트엔드 개발 및 데이터 분석 보조",
      duration: "2023.07.01 - 2024.08.31",
      challenges: ["복잡한 환경 데이터 시각화", "사용자 친화적 인터페이스 설계", "다양한 제품 유형 지원"],
      solutions: ["인터랙티브 차트 및 그래프 구현", "단계별 가이드 시스템", "템플릿 기반 데이터 입력"],
      githubUrl: "https://github.com/Crush-on-Study"
    }
  ];

  // 이미지 캐러셀 (2초마다 변경)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsDetailView(true);
  };

  const handleBackClick = () => {
    setIsDetailView(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  const getCarouselImage = (index) => {
    const images = [
      "🚢", "📊", "🌱", // 첫 번째 프로젝트 이미지들
      "📈", "💹", "📉", // 두 번째 프로젝트 이미지들  
      "🏭", "♻️", "🌍"  // 세 번째 프로젝트 이미지들
    ];
    return images[index];
  };

  return (
    <div className="projects-page">
      {/* Background Orb */}
      <div className="orb-background">
        <Orb />
      </div>
      
      {/* Header */}
      <Header activeIndex={4} />

      {/* Main Content */}
      <main className={`projects-content ${isDetailView ? 'detail-view' : ''}`}>
        {!isDetailView ? (
          <>
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
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-card"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="project-image">
                    <div className="project-carousel">
                      <div className="carousel-image">
                        {getCarouselImage(index * 3 + currentImageIndex)}
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">
                      {project.description}
                    </p>
                    <div className="project-tech">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="project-detail">
            <button className="back-button" onClick={handleBackClick}>
              ← Back to Projects
            </button>
            
            <div className="detail-content">
              <div className="detail-header">
                <h1 className="detail-title">{selectedProject.title}</h1>
                <div className="detail-meta">
                  <span className="detail-role">{selectedProject.role}</span>
                  <span className="detail-duration">{selectedProject.duration}</span>
                </div>
              </div>
              
              <div className="detail-description">
                <h3>프로젝트 개요</h3>
                <p>{selectedProject.detailDescription}</p>
              </div>
              
              <div className="detail-challenges">
                <h3>주요 도전 과제</h3>
                <ul>
                  {selectedProject.challenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>
              
              <div className="detail-solutions">
                <h3>해결 방안</h3>
                <ul>
                  {selectedProject.solutions.map((solution, idx) => (
                    <li key={idx}>{solution}</li>
                  ))}
                </ul>
              </div>
              
              <div className="detail-tech">
                <h3>사용 기술</h3>
                <div className="tech-tags">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {selectedProject.githubUrl && (
                <div className="detail-github">
                  <h3>GitHub 저장소</h3>
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <span className="github-icon">📁</span>
                    <span>GitHub에서 보기</span>
                    <span className="external-icon">↗</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectsCompanyPage; 
import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import GradientText from '../components/common/GradientText';
import ShinyText from '../components/external/shinyText';
import '../styles/home.css';
import '../styles/projects.css';

const ProjectsFunPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: "포트폴리오 웹사이트",
      description: "지금 여러분이 보고 있는 이 사이트!",
      tech: ["React", "Framer Motion", "Figma", "Firebase"],
      detailDescription: "개발자로서의 경험과 프로젝트를 보여주기 위해 만든 포트폴리오 웹사이트입니다. React와 다양한 애니메이션 라이브러리를 활용하여 인터랙티브한 사용자 경험을 제공합니다.",
      role: "풀스택 개발 및 디자인",
      duration: "2024.01 - 2024.12",
      challenges: ["매력적인 애니메이션 구현", "반응형 디자인 최적화", "성능 최적화"],
      solutions: ["Framer Motion을 활용한 부드러운 애니메이션", "CSS Grid와 Flexbox 활용", "React.memo와 useMemo 최적화"],
      githubUrl: "https://github.com/Crush-on-Study/Self-Resume-page"
    },
    {
      id: 2,
      title: "Black Market",
      description: "React로 만든 회사 식권 포인트 p2p 마켓 사이트",
      tech: ["React", "Zustand", "Figma", "Firebase", "Node.js"],
      detailDescription: "회사 식권 포인트를 거래할 수 있는 P2P 마켓플레이스를 개발했습니다. 사용자들이 안전하게 포인트를 거래할 수 있도록 실시간 채팅과 거래 시스템을 구현했습니다.",
      role: "프론트엔드 개발 및 백엔드 API 개발",
      duration: "2023.06 - 2023.12",
      challenges: ["실시간 채팅 기능 구현", "안전한 거래 시스템 설계", "사용자 인증 및 보안"],
      solutions: ["Socket.io를 활용한 실시간 통신", "에스크로 시스템 구현", "JWT 토큰 기반 인증"],
      githubUrl: "https://github.com/Crush-on-Study"
    },
    {
      id: 3,
      title: "Lunch Insects",
      description: "직장인들은 1초라도 더 쉬는 시간이 필요하다! 서울 중구 기준 식사장소 이동 및 식사 예상 소요 시간 예측 앱",
      tech: ["Vue3", "Figma", "Firebase"],
      detailDescription: "바쁜 직장인들을 위해 점심시간을 효율적으로 활용할 수 있도록 도와주는 앱입니다. 현재 위치에서 가까운 식당까지의 이동 시간과 식사 소요 시간을 예측하여 최적의 점심 계획을 제안합니다.",
      role: "프론트엔드 개발 및 UX 디자인",
      duration: "2023.03 - 2023.08",
      challenges: ["정확한 시간 예측 알고리즘", "사용자 위치 기반 추천", "직관적인 UI/UX"],
      solutions: ["머신러닝 기반 시간 예측 모델", "Google Maps API 활용", "사용자 테스트 기반 UI 개선"],
      githubUrl: "https://github.com/Crush-on-Study/Lunch-Insects"
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
      "🎨", "💻", "🚀", // 첫 번째 프로젝트 이미지들
      "🛒", "💬", "💰", // 두 번째 프로젝트 이미지들  
      "🍽️", "⏰", "📍"  // 세 번째 프로젝트 이미지들
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
      <Header activeIndex={3} />

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

export default ProjectsFunPage; 
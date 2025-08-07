import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import GradientText from '../components/common/GradientText';
import ShinyText from '../components/external/shinyText';
import Button from '../components/common/button';
import '../styles/home.css';
import '../styles/projects.css';

const ProjectsFunPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  // 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: "포트폴리오 웹사이트",
      description: "지금 여러분이 보고 있는 이 사이트!",
      tech: ["React", "Framer Motion", "Figma", "Firebase"],
      role: "풀스택 개발 및 디자인",
      duration: "2024.01 - 2024.12",
      overview: {
        problem: "개발자로서의 경험과 프로젝트를 효과적으로 보여줄 방법이 필요했습니다.",
        solution: "인터랙티브한 애니메이션과 현대적인 디자인을 적용한 포트폴리오 웹사이트를 개발했습니다.",
        impact: "시각적으로 매력적이고 사용자 경험이 뛰어난 포트폴리오를 완성했습니다."
      },
      architecture: {
        frontend: "React + Vite + CSS3 + Framer Motion",
        backend: "Firebase Hosting + Firebase Analytics",
        design: "Figma + Adobe Creative Suite",
        deployment: "Firebase Hosting + GitHub Actions"
      },
      features: [
        "인터랙티브 애니메이션 시스템",
        "반응형 디자인",
        "다크 테마",
        "SEO 최적화",
        "성능 최적화"
      ],
      process: [
        {step: 1, title: "기획 및 디자인", description: "Figma를 활용한 UI/UX 디자인 및 사용자 플로우 설계"},
        {step: 2, title: "프론트엔드 개발", description: "React와 Framer Motion을 활용한 인터랙티브 컴포넌트 개발"},
        {step: 3, title: "애니메이션 구현", description: "부드러운 전환 효과와 마이크로 인터랙션 구현"},
        {step: 4, title: "최적화", description: "성능 최적화 및 SEO 개선"},
        {step: 5, title: "배포", description: "Firebase Hosting을 통한 배포 및 도메인 설정"}
      ],
      screenshots: [
        {title: "메인 페이지", description: "인터랙티브한 홈 화면", imageUrl: "/screenshots/portfolio-website/main.png"},
        {title: "프로젝트 섹션", description: "프로젝트 상세 페이지", imageUrl: "/screenshots/portfolio-website/projects.png"},
        {title: "스킬 섹션", description: "기술 스택 시각화", imageUrl: "/screenshots/portfolio-website/skills.png"}
      ],
      lessons: [
        "Framer Motion을 활용한 고급 애니메이션 구현 방법",
        "React 성능 최적화 기법 (React.memo, useMemo, useCallback)",
        "반응형 디자인과 접근성 고려사항",
        "Firebase Hosting과 CI/CD 파이프라인 구축"
      ],
      githubUrl: "https://github.com/Crush-on-Study/Self-Resume-page"
    },
    {
      id: 2,
      title: "Black Market",
      description: "React로 만든 회사 식권 포인트 p2p 마켓 사이트",
      tech: ["React", "Zustand", "Figma", "Firebase", "Node.js"],
      role: "프론트엔드 개발 및 백엔드 API 개발",
      duration: "2023.06 - 2023.12",
      overview: {
        problem: "회사 식권 포인트를 안전하게 거래할 수 있는 플랫폼이 필요했습니다.",
        solution: "P2P 마켓플레이스에 실시간 채팅과 안전한 거래 시스템을 구현했습니다.",
        impact: "사용자들이 안전하게 포인트를 거래할 수 있는 플랫폼을 제공했습니다."
      },
      architecture: {
        frontend: "React + Zustand + Socket.io Client",
        backend: "Node.js + Express + Socket.io",
        database: "Firebase Firestore",
        authentication: "Firebase Auth + JWT",
        deployment: "Firebase Hosting + Heroku"
      },
      features: [
        "실시간 채팅 시스템",
        "안전한 거래 시스템 (에스크로)",
        "사용자 인증 및 프로필 관리",
        "거래 내역 관리",
        "평점 및 리뷰 시스템"
      ],
      process: [
        {step: 1, title: "요구사항 분석", description: "사용자 인터뷰 및 시장 조사를 통한 기능 정의"},
        {step: 2, title: "UI/UX 디자인", description: "Figma를 활용한 사용자 친화적 인터페이스 설계"},
        {step: 3, title: "프론트엔드 개발", description: "React와 Zustand를 활용한 상태 관리 및 UI 구현"},
        {step: 4, title: "백엔드 개발", description: "Node.js와 Socket.io를 활용한 실시간 통신 구현"},
        {step: 5, title: "보안 구현", description: "JWT 인증과 에스크로 시스템 구현"},
        {step: 6, title: "테스트 및 배포", description: "종합 테스트 후 Firebase와 Heroku에 배포"}
      ],
      screenshots: [
        {title: "메인 마켓", description: "거래 목록 화면", imageUrl: "/screenshots/black-market/main.png"},
        {title: "채팅 화면", description: "실시간 채팅 인터페이스", imageUrl: "/screenshots/black-market/chat.png"},
        {title: "거래 진행", description: "거래 프로세스 화면", imageUrl: "/screenshots/black-market/trade.png"}
      ],
      lessons: [
        "Socket.io를 활용한 실시간 통신 구현 방법",
        "Zustand를 활용한 효율적인 상태 관리",
        "P2P 거래 시스템의 보안 고려사항",
        "사용자 경험을 고려한 UI/UX 설계"
      ],
      githubUrl: "https://github.com/Crush-on-Study"
    },
    {
      id: 3,
      title: "Lunch Insects",
      description: "직장인들은 1초라도 더 쉬는 시간이 필요하다! 서울 중구 기준 식사장소 이동 및 식사 예상 소요 시간 예측 앱",
      tech: ["Vue3", "Figma", "Firebase"],
      role: "프론트엔드 개발 및 UX 디자인",
      duration: "2023.03 - 2023.08",
      overview: {
        problem: "바쁜 직장인들이 점심시간을 효율적으로 활용할 수 있는 솔루션이 필요했습니다.",
        solution: "위치 기반 식당 추천과 시간 예측 기능을 제공하는 앱을 개발했습니다.",
        impact: "사용자들이 점심시간을 더 효율적으로 활용할 수 있도록 도움을 제공했습니다."
      },
      architecture: {
        frontend: "Vue3 + Composition API + Vue Router",
        backend: "Firebase Functions + Firestore",
        maps: "Google Maps API + Places API",
        ml: "TensorFlow.js (시간 예측 모델)",
        deployment: "Firebase Hosting"
      },
      features: [
        "위치 기반 식당 추천",
        "이동 시간 및 식사 시간 예측",
        "실시간 교통 정보 연동",
        "개인화된 추천 시스템",
        "식당 리뷰 및 평점"
      ],
      process: [
        {step: 1, title: "사용자 리서치", description: "직장인 대상 인터뷰 및 페인포인트 분석"},
        {step: 2, title: "UX 디자인", description: "사용자 여정 맵과 와이어프레임 설계"},
        {step: 3, title: "프론트엔드 개발", description: "Vue3와 Composition API를 활용한 SPA 개발"},
        {step: 4, title: "지도 API 연동", description: "Google Maps API를 활용한 위치 기반 서비스 구현"},
        {step: 5, title: "ML 모델 개발", description: "TensorFlow.js를 활용한 시간 예측 모델 구현"},
        {step: 6, title: "테스트 및 출시", description: "베타 테스트 후 정식 출시"}
      ],
      screenshots: [
        {title: "메인 화면", description: "위치 기반 식당 추천", imageUrl: "/screenshots/lunch-insects/main.png"},
        {title: "시간 예측", description: "이동 및 식사 시간 예측", imageUrl: "/screenshots/lunch-insects/prediction.png"},
        {title: "상세 정보", description: "식당 상세 정보 화면", imageUrl: "/screenshots/lunch-insects/detail.png"}
      ],
      lessons: [
        "Vue3 Composition API를 활용한 모던 개발 방법",
        "Google Maps API와 Places API 활용법",
        "머신러닝 모델을 프론트엔드에 통합하는 방법",
        "사용자 중심의 UX 디자인 프로세스"
      ],
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
    setActiveTab('overview');
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

  const renderTabContent = () => {
    if (!selectedProject) return null;

    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <div className="overview-grid">
              <div className="overview-card">
                <h4>문제 상황</h4>
                <p>{selectedProject.overview.problem}</p>
              </div>
              <div className="overview-card">
                <h4>해결 방안</h4>
                <p>{selectedProject.overview.solution}</p>
              </div>
              <div className="overview-card">
                <h4>성과</h4>
                <p>{selectedProject.overview.impact}</p>
              </div>
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="tab-content">
            <div className="architecture-grid">
              <div className="arch-card">
                <h4>Frontend</h4>
                <p>{selectedProject.architecture.frontend}</p>
              </div>
              <div className="arch-card">
                <h4>Backend</h4>
                <p>{selectedProject.architecture.backend}</p>
              </div>
              {selectedProject.architecture.database && (
                <div className="arch-card">
                  <h4>Database</h4>
                  <p>{selectedProject.architecture.database}</p>
                </div>
              )}
              {selectedProject.architecture.maps && (
                <div className="arch-card">
                  <h4>Maps & APIs</h4>
                  <p>{selectedProject.architecture.maps}</p>
                </div>
              )}
              {selectedProject.architecture.ml && (
                <div className="arch-card">
                  <h4>Machine Learning</h4>
                  <p>{selectedProject.architecture.ml}</p>
                </div>
              )}
              <div className="arch-card">
                <h4>Deployment</h4>
                <p>{selectedProject.architecture.deployment}</p>
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="tab-content">
            <div className="features-grid">
              {selectedProject.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="tab-content">
            <div className="process-timeline">
              {selectedProject.process.map((step, idx) => (
                <div key={idx} className="process-step">
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'screenshots':
        return (
          <div className="tab-content">
            <div className="screenshots-grid">
              {selectedProject.screenshots.map((screenshot, idx) => (
                <div key={idx} className="screenshot-card">
                  <div className="screenshot-placeholder">
                    📱
                    <p>스크린샷 준비 중</p>
                  </div>
                  <h4>{screenshot.title}</h4>
                  <p>{screenshot.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'lessons':
        return (
          <div className="tab-content">
            <div className="lessons-grid">
              {selectedProject.lessons.map((lesson, idx) => (
                <div key={idx} className="lesson-item">
                  <span className="lesson-icon">💡</span>
                  <p>{lesson}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
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
            <Button 
              onClick={handleBackClick}
              className="back-button"
              color="#00ff88,#FFD700,#5DE0F0,#FF6B6B"
              speed="4s"
              thickness={2}
            >
              ← Back to Projects
            </Button>
            
            <div className="detail-content">
              <div className="detail-header">
                <h1 className="detail-title">{selectedProject.title}</h1>
                <div className="detail-meta">
                  <span className="detail-role">{selectedProject.role}</span>
                  <span className="detail-duration">{selectedProject.duration}</span>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="tab-navigation">
                <button 
                  className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  개요
                </button>
                <button 
                  className={`tab-button ${activeTab === 'architecture' ? 'active' : ''}`}
                  onClick={() => setActiveTab('architecture')}
                >
                  아키텍처
                </button>
                <button 
                  className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
                  onClick={() => setActiveTab('features')}
                >
                  주요 기능
                </button>
                <button 
                  className={`tab-button ${activeTab === 'process' ? 'active' : ''}`}
                  onClick={() => setActiveTab('process')}
                >
                  개발 과정
                </button>
                <button 
                  className={`tab-button ${activeTab === 'screenshots' ? 'active' : ''}`}
                  onClick={() => setActiveTab('screenshots')}
                >
                  스크린샷
                </button>
                <button 
                  className={`tab-button ${activeTab === 'lessons' ? 'active' : ''}`}
                  onClick={() => setActiveTab('lessons')}
                >
                  배운 점
                </button>
              </div>

              {/* Tab Content */}
              {renderTabContent()}

              {selectedProject.githubUrl && (
                <div className="detail-github">
                  <h3>GitHub 저장소</h3>
                  <Button
                    as="a"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    color="#00ff88,#FFD700,#5DE0F0,#FF6B6B"
                    speed="4s"
                    thickness={2}
                  >
                    GitHub에서 보기 ↗
                  </Button>
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
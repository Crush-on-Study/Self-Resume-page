import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import GradientText from '../components/common/GradientText';
import ShinyText from '../components/external/shinyText';
import Button from '../components/common/button';
import '../styles/home.css';
import '../styles/projects.css';

const ProjectsCompanyPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

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
      githubUrl: "https://github.com/Crush-on-Study/RPA_Crawling",
      // 추가 상세 정보
      overview: {
        problem: "매일 2시간씩 수기로 컨테이너선사 스케줄을 업데이트하는 반복적인 업무",
        solution: "웹 크롤링 자동화 + 실시간 모니터링 대시보드 구축",
        impact: "업무 시간 90% 단축 (2시간 → 27분), 실시간 데이터 추적 가능"
      },
      architecture: {
        frontend: "Vue2 + Chart.js + Element UI",
        backend: "Python Flask + Selenium + Azure OCR",
        database: "Oracle DB + Redis Cache",
        infrastructure: "Azure VM + Docker + Cron Jobs"
      },
      features: [
        "실시간 스케줄 크롤링 (5개 선사)",
        "CAPTCHA 자동 우회 시스템",
        "OCR 기반 이미지 텍스트 추출",
        "실시간 모니터링 대시보드",
        "알림 시스템 (이상 감지 시)",
        "데이터 백업 및 복구 시스템"
      ],
      process: [
        {
          step: 1,
          title: "데이터 수집",
          description: "Selenium을 활용한 웹 크롤링으로 5개 선사의 스케줄 정보 자동 수집"
        },
        {
          step: 2,
          title: "이미지 처리",
          description: "Azure OCR 엔진을 통한 이미지 파일의 텍스트 추출 및 정제"
        },
        {
          step: 3,
          title: "데이터 검증",
          description: "수집된 데이터의 유효성 검사 및 중복 제거"
        },
        {
          step: 4,
          title: "DB 저장",
          description: "Oracle DB에 정제된 데이터 저장 및 인덱싱"
        },
        {
          step: 5,
          title: "대시보드 표시",
          description: "Vue2 기반 실시간 대시보드로 데이터 시각화"
        }
      ],
      screenshots: [
        {
          title: "메인 대시보드",
          description: "실시간 스케줄 현황 및 통계",
          imageUrl: "/screenshots/dashboard-main.png"
        },
        {
          title: "크롤링 모니터링",
          description: "크롤링 상태 및 오류 로그",
          imageUrl: "/screenshots/crawling-monitor.png"
        },
        {
          title: "데이터 분석",
          description: "스케줄 패턴 분석 및 예측",
          imageUrl: "/screenshots/data-analysis.png"
        }
      ],
      lessons: [
        "CAPTCHA 우회를 위한 다양한 기술 조합의 중요성",
        "대용량 데이터 처리 시 캐싱 전략의 필요성",
        "실시간 모니터링 시스템의 안정성 확보 방법",
        "OCR 정확도 향상을 위한 이미지 전처리의 중요성"
      ]
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
      "🚢", "📊", "🌱", // 첫 번째 프로젝트 이미지들
      "📈", "💹", "📉", // 두 번째 프로젝트 이미지들  
      "🏭", "♻️", "🌍"  // 세 번째 프로젝트 이미지들
    ];
    return images[index];
  };

  const renderTabContent = () => {
    if (!selectedProject) return null;

    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <div className="overview-section">
              <h3>프로젝트 개요</h3>
              <div className="overview-grid">
                <div className="overview-card">
                  <h4>문제 상황</h4>
                  <p>{selectedProject.overview?.problem || selectedProject.detailDescription}</p>
                </div>
                <div className="overview-card">
                  <h4>해결 방안</h4>
                  <p>{selectedProject.overview?.solution || "자동화 시스템 구축"}</p>
                </div>
                <div className="overview-card">
                  <h4>성과</h4>
                  <p>{selectedProject.overview?.impact || "업무 효율성 대폭 향상"}</p>
                </div>
              </div>
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
          </div>
        );

      case 'architecture':
        return (
          <div className="tab-content">
            <div className="architecture-section">
              <h3>시스템 아키텍처</h3>
              <div className="architecture-grid">
                <div className="arch-card">
                  <h4>Frontend</h4>
                  <p>{selectedProject.architecture?.frontend || "Vue2 + Chart.js"}</p>
                </div>
                <div className="arch-card">
                  <h4>Backend</h4>
                  <p>{selectedProject.architecture?.backend || "Python Flask"}</p>
                </div>
                <div className="arch-card">
                  <h4>Database</h4>
                  <p>{selectedProject.architecture?.database || "Oracle DB"}</p>
                </div>
                <div className="arch-card">
                  <h4>Infrastructure</h4>
                  <p>{selectedProject.architecture?.infrastructure || "Azure VM"}</p>
                </div>
              </div>
            </div>
            
            <div className="features-section">
              <h3>주요 기능</h3>
              <div className="features-grid">
                {selectedProject.features?.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{feature}</span>
                  </div>
                )) || (
                  <p>기능 정보를 추가해주세요.</p>
                )}
              </div>
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="tab-content">
            <div className="process-section">
              <h3>개발 프로세스</h3>
              <div className="process-timeline">
                {selectedProject.process?.map((step, idx) => (
                  <div key={idx} className="process-step">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                )) || (
                  <p>프로세스 정보를 추가해주세요.</p>
                )}
              </div>
            </div>
          </div>
        );

      case 'screenshots':
        return (
          <div className="tab-content">
            <div className="screenshots-section">
              <h3>스크린샷</h3>
              <div className="screenshots-grid">
                {selectedProject.screenshots?.map((screenshot, idx) => (
                  <div key={idx} className="screenshot-card">
                    <div className="screenshot-placeholder">
                      <span>📸</span>
                      <p>{screenshot.title}</p>
                    </div>
                    <h4>{screenshot.title}</h4>
                    <p>{screenshot.description}</p>
                  </div>
                )) || (
                  <p>스크린샷을 추가해주세요.</p>
                )}
              </div>
            </div>
          </div>
        );

      case 'lessons':
        return (
          <div className="tab-content">
            <div className="lessons-section">
              <h3>배운 점 & 인사이트</h3>
              <div className="lessons-grid">
                {selectedProject.lessons?.map((lesson, idx) => (
                  <div key={idx} className="lesson-item">
                    <span className="lesson-icon">💡</span>
                    <p>{lesson}</p>
                  </div>
                )) || (
                  <p>배운 점을 추가해주세요.</p>
                )}
              </div>
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

              {/* 탭 네비게이션 */}
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
                  className={`tab-button ${activeTab === 'process' ? 'active' : ''}`}
                  onClick={() => setActiveTab('process')}
                >
                  프로세스
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

              {/* 탭 컨텐츠 */}
              {renderTabContent()}

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

export default ProjectsCompanyPage; 
import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import GradientText from '../components/common/GradientText';
import ShinyText from '../components/external/shinyText';
import Button from '../components/common/button';
import ProjectTabNavigation from '../components/ui/ProjectTabNavigation';
import ProjectTabContent from '../components/ui/ProjectTabContent';
import Tag from '../components/common/Tag';
import '../styles/pages/home.css';
import '../styles/pages/projects.css';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [filterType, setFilterType] = useState('all'); // 'all', 'personal', 'company'

  // Personal 프로젝트 데이터
  const personalProjects = [
    {
      id: 1,
      title: "포트폴리오 웹사이트",
      description: "지금 여러분이 보고 있는 이 사이트!",
      tech: ["React", "Framer Motion", "Figma", "Firebase"],
      role: "프론트엔드", 
      duration: "2025.08.01 - 2025.08.09",
      type: "personal",
      member: "1인",
      overview: {
        problem: "개발자로서의 경험과 프로젝트를 효과적으로 보여줄 방법이 필요했습니다.",
        solution: "인터랙티브한 애니메이션과 현대적인 디자인을 적용한 포트폴리오 웹사이트를 개발했습니다.",
        impact: "제가 해온 경험들을 스토리 식으로 보여주는 포트폴리오를 완성했습니다."
      },
      architecture: {
        frontend: "React + Framer Motion + CSS3 + Three.js",
        backend: "Firebase Hosting",
        design: "Figma",
        openSource: "React-bits"
      },
      features: [
        "인터랙티브 애니메이션 시스템",
        "모바일 타겟 반응형 디자인",
        "다크 테마"
      ],
      process: [
        {step: 1, title: "기획 및 디자인", description: "Figma를 활용한 UI/UX 디자인 및 프로젝트 구조 설계 + 디자인 오픈소스 서칭"},
        {step: 2, title: "컨텐츠 구상", description: "어떤 내용들을 담아서 보여드릴지 고민"},
        {step: 3, title: "프론트엔드 개발", description: "React + Three.js + Framer Motion을 활용한 인터랙티브 컴포넌트 개발 및 오픈소스 커스터마이징"},
        {step: 4, title: "최적화", description: "재사용 컴포넌트 리팩토링 + 번들러 최적화를 위한 스플리팅팅"},
        {step: 5, title: "배포", description: "Firebase Hosting을 통한 배포"}
      ],
      screenshots: [],
      lessons: [
        "Framer Motion을 활용한 고급 애니메이션 구현 방법",
        "React 성능 최적화 기법",
        "반응형 디자인과 접근성 고려사항",
        "Firebase Hosting"
      ],
      githubUrl: "https://github.com/Crush-on-Study/Self-Resume-page"
    },
    {
      id: 2,
      title: "Black Market",
      description: "React로 만든 회사 식권 포인트 p2p 마켓 사이트",
      tech: ["React", "Zustand", "Figma", "Python (FastAPI)", "AWS EC2"],
      role: "기획, 디자인, 프론트엔드",
      duration: "2025.08.10 - 2025.12.01",
      type: "personal",
      member: "2인",
      overview: {
        problem: "식권어플을 사용하는 기업들 대상으로, 부족한 식권포인트를 P2P로 거래할 수 있는 플랫폼이 필요했습니다. 이런 플랫폼이 없어서 매번 발품팔아 식권을 사는게 불편했던 것에서 시작했습니다.",
        solution: "P2P 마켓플레이스에 실시간 채팅과 거래 시스템을 구현했습니다.",
        impact: "사용자들이 온라인상에서 포인트를 거래할 수 있는 플랫폼을 제공했습니다."
      },
      architecture: {
        frontend: "React",
        backend: "Python (FastAPI)",
        infrastructure: "AWS EC2"
      },
      features: [
        "소셜로그인 후, 회사 선택하여 회사별 거래소 게시판으로 이동",
        "ver 2.0에 결제시스템 도입 예정",
        "판매자 & 구매자 평점 시스템",
        "거래 관련 퀘스트 및 보상 시스템",
        "판매 & 구매 글 등록 및 거래 요청 알림  or 팔로우한 판매자 새글 등록 시 구매자에게 알림"
      ],
      process: [
        { step: 1, title: "기획", description: "문제정의 및 사용자 시나리오 설계, 확장성을 고려한 설계" },
        { step: 2, title: "디자인", description: "Figma 기반 플로우/와이어/하이파이 UI 제작" },
        { step: 3, title: "프론트엔드", description: "React + Zustand 구조 설계 및 핵심 화면/상태 관리 구현" },
        { step: 4, title: "백엔드", description: "FastAPI 기반 API 스펙 설계 및 엔드포인트 구현" },
        { step: 5, title: "인증/알림", description: "소셜로그인 연동, 회사 선택 라우팅, 알림 플로우 설계" },
        { step: 6, title: "배포", description: "AWS EC2 환경 구성 및 무중단 배포 파이프라인 준비" }
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
      role: "프론트엔드",
      duration: "2025.03.06 - 2025.03.20",
      type: "personal",
      member: "1인",
      overview: {
        problem: "저희 회사 점심시간을 효율적으로 활용하여 최대한 많은 휴식시간을 갖고 싶을때 도움이 되고자 했습니다.",
        solution: "위치 기반 식당 추천과 다 먹고 난 뒤 남은 시간 예측 기능을 제공하는 앱을 개발했습니다.",
        impact: "사용자들이 점심시간을 더 효율적으로 활용할 수 있도록 도움을 제공했습니다."
      },
      architecture: {
        frontend: "Vue3 + Vue Router",
        backend: "Firebase Functions + Firestore",
        maps: "Naver Maps API",
        db: "Firestore + Redis Cache",
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
        {step: 5, title: "점심 약속 일정 등록", description: "서로 시간 비는날이 언제인지 공유하기위한 캘린더 기능 추가"},
        {step: 6, title: "테스트 및 출시", description: "베타 테스트 후 정식 출시"}
      ],
      screenshots: [
        {title: "메인 화면", description: "위치 기반 식당 추천", imageUrl: "/screenshots/lunch-insects/main.png"},
        {title: "시간 예측", description: "이동 및 식사 시간 예측", imageUrl: "/screenshots/lunch-insects/prediction.png"},
        {title: "상세 정보", description: "식당 상세 정보 화면", imageUrl: "/screenshots/lunch-insects/detail.png"}
      ],
      lessons: [
        "Vue3 Composition API를 활용한 모던 개발 방법",
        "Naver Maps API 활용법",
        "사용자 중심의 UX 디자인 프로세스",
        "Firebase 기능 심화 이해"
      ],
      githubUrl: "https://github.com/Crush-on-Study/Lunch-Insects"
    }
  ];

  // Company 프로젝트 데이터
  const companyProjects = [
    {
      id: 4,
      title: "업무 자동화를 위한 선사 스케줄 크롤링 및 모니터링 화면",
      description: "정기 컨테이너선사 스케줄 일정 크롤링 + 모니터링 개발",
      tech: ["Vue2", "Python", "Azure", "Figma", "Oracle"],
      detailDescription: "[2시간 ➡️ 27분] 수기로 스케줄 업데이트하던 작업을 선사 홈페이지를 찍고 자동으로 크롤링하고, 실시간으로 모니터링할 수 있는 대시보드를 개발했습니다.",
      role: "기획, 프론트엔드, 크롤링",
      duration: "2025.06.25 - 2025.08.22",
      type: "company",
      member: "4인",
      challenges: ["CAPTCHA 차단봇 우회", "구글 드라이브 업로드 자동화", "웹에 에러로그 뿌려는 방법"],
      solutions: ["사랑해요 오픈소스", "Azure OCR엔진 사용", "크롤링 작업부터 기간계 DB 적재까지의 구조화 리팩토링"],
      githubUrl: "https://github.com/Crush-on-Study/RPA_Crawling",
      overview: {
        problem: "매일 2시간씩 수기로 컨테이너선사 스케줄을 업데이트하는 반복적인 업무",
        solution: "웹 크롤링 자동화 + 실시간 모니터링 대시보드 구축",
        impact: "업무 시간 90% 단축 (2시간 → 27분), 실시간 데이터 추적 가능"
      },
      architecture: {
        frontend: "Vue2",
        backend: "Python FastAPI + Selenium",
        database: "Oracle DB"
      },
      features: [
        "실시간 스케줄 크롤링 (32개 선사, 179척)",
        "CAPTCHA 자동 우회 시스템",
        "구글 드라이브 API 통신 기반 업로드 자동화",
        "실시간 모니터링 대시보드",
        "비동기 처리방식"
      ],
      process: [
        {
          step: 1,
          title: "데이터 수집",
          description: "Selenium을 활용한 웹 크롤링으로 179척의 스케줄 정보 자동 수집"
        },
        {
          step: 2,
          title: "이미지 처리",
          description: "일부 스케줄 데이터가 이미지로 되어있는 경우는 Azure OCR 엔진을 통한 이미지 파일의 텍스트 추출 및 정제"
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
          description: "실시간 스케줄 수집 성공여부를 판단을 위한 에러로그 정리",
          imageUrl: "/screenshots/dashboard-main.png"
        },
        {
          title: "비동기 처리방식 크롤링",
          description: "수작업 2시간에서 27분으로 줄였지만 더 줄이기 위한 노력",
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
        "비동기 프로그래밍 기반 웹 크롤링",
        "실시간 모니터링 시스템의 안정성 확보 방법",
        "OCR 정확도 향상을 위한 이미지 전처리의 중요성"
      ]
    },
    {
      id: 5,
      title: "운임 방향 예측을 통한 선복 공급량 판단",
      description: "스케줄 , SCFI 선물지수 , 항만 적체 일수 , GRI 공표 자료 기반 운임 방향 예상",
      tech: ["JavaScript (Vanila)", "Python", "Oracle", "Figma"],
      detailDescription: "선박 스케줄, SCFI 선물지수, 항만 적체 일수, GRI 공표 자료를 종합적으로 분석하여 운임 방향 (급락/하락/상승/급등)을 예측하는데 근거모델로써 활용",
      role: "기획,PM,프론트엔드,크롤링",
      duration: "2025.07.25 - 2025.11.30",
      type: "company",
      member: "2인 + 외주업체",
      challenges: ["검색 키워드 기반 크롤링", "운임 방향 예측에 대한 근거 제시", "크롤링 데이터 파이프라인 구축"],
      solutions: ["???", "ChatGPT 기반 LLM 연동", "cx_Oracle 기반 쿼리작성"],
      githubUrl: "https://github.com/Crush-on-Study/profit_dashboard"
    },
    {
      id: 6,
      title: "중소 제조업 대상 LCA 대시보드",
      description: "중소 제조업 대상 환경 부하 및 환경 영향 평가 프로그램 개발",
      tech: ["Vue3", "Python", "Figma"],
      detailDescription: "중소 제조업체들이 제품의 환경 영향을 쉽게 평가할 수 있도록 LCA(Life Cycle Assessment) 대시보드를 개발했습니다. 복잡한 환경 평가 과정을 직관적인 인터페이스로 제공하여 중소기업도 쉽게 활용할 수 있도록 했습니다.",
      role: "프론트엔드,데이터분석 보조",
      duration: "2023.07.01 - 2024.08.31",
      type: "company",
      member: "2인 + 외주업체",
      challenges: ["공정 데이터 취합", "사용자 친화적 인터페이스 설계", "다양한 제품 유형 지원"],
      solutions: ["직접 인터뷰", "단계별 가이드 시스템", "템플릿 기반 데이터 입력"],
      githubUrl: "https://github.com/Crush-on-Study"
    }
  ];

  // 모든 프로젝트 합치기
  const allProjects = [...personalProjects, ...companyProjects];

  // 필터링된 프로젝트
  const filteredProjects = filterType === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.type === filterType);

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
      "🎨", "💻", "🚀", // 포트폴리오 웹사이트
      "🛒", "💬", "💰", // Black Market
      "🍽️", "⏰", "📍", // Lunch Insects
      "🚢", "📊", "🌱", // 크롤링 프로젝트
      "📈", "💹", "📉", // 운임 예측
      "🏭", "♻️", "🌍"  // LCA 대시보드
    ];
    return images[index];
  };

  const getFilterButtonClass = (type) => {
    return `filter-button ${filterType === type ? 'active' : ''}`;
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
                &lt;projects /&gt;
              </GradientText>
              <ShinyText 
                text="개인 및 회사 프로젝트 모음"
                disabled={false}
                speed={3}
                className="projects-subtitle"
              />
            </div>

            {/* Filter Buttons */}
            <div className="projects-filter">
              <Button 
                className={getFilterButtonClass('all')}
                onClick={() => setFilterType('all')}
                color="#4CAF50"
                speed="3s"
              >
                All Projects
              </Button>
              <Button 
                className={getFilterButtonClass('personal')}
                onClick={() => setFilterType('personal')}
                color="#5DE0F0"
                speed="3s"
              >
                Personal
              </Button>
              <Button 
                className={getFilterButtonClass('company')}
                onClick={() => setFilterType('company')}
                color="#FFD700"
                speed="3s"
              >
                Company
              </Button>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
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
                        <Tag key={idx}>{tech}</Tag>
                      ))}
                    </div>
                    <div className="project-type">
                      <Tag className={`type-badge ${project.type}`}>
                        {project.type === 'personal' ? 'Personal' : 'Company'}
                      </Tag>
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
                  <span className="detail-member">👥 {selectedProject.member}</span>
                  <Tag className={`type-badge ${selectedProject.type}`}>
                    {selectedProject.type === 'personal' ? 'Personal' : 'Company'}
                  </Tag>
                </div>
              </div>

              {/* Tab Navigation */}
              <ProjectTabNavigation 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {/* Tab Content */}
              <ProjectTabContent 
                activeTab={activeTab}
                selectedProject={selectedProject}
              />

              {selectedProject.githubUrl && (
                <div className="detail-github">
                  <h3>관련 링크</h3>
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

export default ProjectsPage;

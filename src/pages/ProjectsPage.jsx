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
      status: "completed",
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
        {step: 1, title: "기획 및 디자인", description: "Figma를 활용한 UI/UX 디자인 및 프로젝트 구조 설계 + 디자인 오픈소스 서칭", contribution: 100},
        {step: 2, title: "컨텐츠 구상", description: "어떤 내용들을 담아서 보여드릴지 고민", contribution: 100},
        {step: 3, title: "프론트엔드 개발", description: "React + Three.js + Framer Motion을 활용한 인터랙티브 컴포넌트 개발 및 오픈소스 커스터마이징", contribution: 100},
        {step: 4, title: "최적화", description: "재사용 컴포넌트 리팩토링 + 번들러 최적화를 위한 스플리팅팅", contribution: 100},
        {step: 5, title: "배포", description: "Firebase Hosting을 통한 배포", contribution: 100}
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
      tech: ["React", "Zustand", "TypeScript", "CSS3", "Figma", "Python (FastAPI)", "PostgreSQL", "Socket.io", "AWS EC2", "Git", "GitHub", "ESLint", "Prettier"],
      role: "기획, 디자인, 프론트엔드",
      duration: "2025.08.10 - 2025.12.01",
      type: "personal",
      member: "2인",
      status: "ongoing",
      overview: {
        problem: "식권어플을 사용하는 기업들 대상으로, 부족한 식권포인트를 P2P로 거래할 수 있는 플랫폼이 필요했습니다. 이런 플랫폼이 없어서 매번 발품팔아 식권을 사는게 불편했던 것에서 시작했습니다.",
        solution: "P2P 마켓플레이스에 실시간 채팅과 거래 시스템을 구현했습니다.",
        impact: "사용자들이 온라인상에서 포인트를 거래할 수 있는 플랫폼을 제공했습니다."
      },
      architecture: {
        frontend: "React + TypeScript + Zustand + CSS3",
        backend: "Python (FastAPI) + PostgreSQL",
        realtime: "Socket.io",
        infrastructure: "AWS EC2",
        tools: "Git + GitHub + ESLint + Prettier"
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
        {title: "메인 마켓", description: "거래 목록 화면", imageUrl: "/blackmarket/main.png"},
        {title: "로그인 화면", description: "소셜 로그인 인터페이스", imageUrl: "/blackmarket/login.png"},
        {title: "회사 소개", description: "회사별 거래소 정보", imageUrl: "/blackmarket/aboutus.png"},
        {title: "퀘스트 시스템", description: "거래 관련 퀘스트 및 보상", imageUrl: "/blackmarket/quest.png"}
      ],
      lessons: [
        "Zustand를 통한 여러 state들의 효율적인 관리 방법 - 사용자 인증, 거래 상태, 채팅 데이터, 알림 등을 독립적인 store로 분리하여 관리하면서도 필요한 경우 store 간 연동이 가능한 구조 설계",
        "Error Boundary의 중요성, 특히 이런 대시보드 형태에선 필수 - 거래 실패, API 오류, 네트워크 문제 등 다양한 에러 상황에서 사용자 경험을 해치지 않으면서도 적절한 에러 처리와 복구 방안 제공",
        "전통 CSS로는 스타일링에 너무 많은 시간이 든다. 다음에는 Tailwind나 CSS-in-JS를 써봐야겠다 - 반응형 디자인, 다크모드, 애니메이션 등을 구현할 때 CSS 클래스 관리와 스타일 충돌 해결에 예상보다 많은 시간 소요",
        "코드 스플리팅과 레이지 로딩의 중요성 - 거래 목록, 채팅, 사용자 프로필 등 기능별로 번들을 분리하여 초기 로딩 속도 개선 및 사용자가 실제로 사용하는 기능만 로드하는 최적화 경험",
        "깃 브랜치 전략 - feature/거래시스템, feature/채팅, feature/인증 등 기능별 브랜치 분리와 develop 브랜치를 통한 통합 테스트, main 브랜치 배포 전 code review 프로세스 구축"
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
      status: "renewal",
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
      tech: ["Apex (Vanila JS)", "Python", "Azure", "Figma", "Oracle"],
      detailDescription: "[2시간 ➡️ 16분] 수기로 스케줄 업데이트하던 작업을 선사 홈페이지를 찍고 자동으로 크롤링하고, 실시간으로 모니터링할 수 있는 대시보드를 개발했습니다.",
      role: "기획, 프론트엔드, 크롤링, PM",
      duration: "2025.06.25 - 2025.08.29",
      type: "company",
      member: "4인",
      status: "completed",
      challenges: ["클라우드플레어 우회 설정","비동기 처리를 위한 스레드 활용", "구글 드라이브 업로드 자동화를 위한 OAuth 접근 방식", "사원직급의 PM으로써 과장,차장들과 소통을 해야한다는 점" , "디자인 패턴 적용"],
      solutions: ["셀레니움베이스 모듈을 통해 로봇이 아님을 통과","스레드 락 처리 & 자원 경쟁 방지 & HW스펙 대비 권장 스레드 수 서브로직 구현", "OAuth Key 기반 구글 드라이브와 데이터 통신 구현", "미팅 들어가기전에 항상 본인이 안건을 확실히 정하여 모든 회의를 30분안에 끝내도록 했으며, 매번 회의록을 적어 요약한 내용을 공유함.", "객체 생성 - 팩토리 메서드 , 단계별 행위 - 빌더 패턴 적용"],
      githubUrl: "https://github.com/Crush-on-Study/RPA_Crawling",
      overview: {
        problem: "매일 2시간씩 수기로 컨테이너선사 스케줄을 업데이트하는 반복적인 업무",
        solution: "웹 크롤링 자동화 + 실시간 모니터링 대시보드 구축",
        impact: "업무 시간 90% 단축 (2시간 → 16분), 비동기 처리방식 도입으로 큰 활약"
      },
      architecture: {
        frontend: "Apex (Vanila JS)",
        backend: "Python (Selenium)",
        database: "Oracle DB",
        tools: "UiPath"
      },
      features: [
        "실시간 스케줄 크롤링 (32개 선사 중 16개 대상, 96척)",
        "클라우드플레어어 우회 시스템",
        "구글 드라이브 API 통신을 위한 OAuth 인증 방식 업로드 자동화",
        "실시간 모니터링 대시보드",
        "멀티스레딩으로 비동기 처리방식 구현",
        "에러로그 관리 및 데이터 생명주기 관리"
      ],
      process: [
        {
          step: 1,
          title: "문제 파악 및 기획",
          description: "운항팀이 공동운항 타선사 스케줄을 이메일/웹사이트 방문으로 수기 등록하며 평균 2시간 소요되는 반복 업무임을 파악하고 자동화 기획 시작",
          result: "기획서, 기능명세서, 화면정의서",
          contribution: 100
        },
        {
          step: 2,
          title: "팀 구성 및 역할 분담",
          description: "PM으로서 4명 인력 구성 - 나(기획/PM/크롤링/프론트엔드), UiPath 자동화 담당, 운항팀 현업 담당, 인프라 담당",
          result: "WBS",
          contribution: 100
        },
        {
          step: "3-1",
          title: "웹 크롤링 구현",
          description: "타겟 선사별 선박 스케줄(입항/접안/출항 예정시간, 항구, 선박명, 항차번호) 크롤링 및 구글드라이브 자동 업로드 구현",
          result: "크롤링 코드 (Python), 각종 스케줄 데이터 파일",
          contribution: 100
        },
        {
          step: "3-2",
          title: "이메일 자동화",
          description: "운항팀 통합 스케줄 이메일 계정에 RPA봇 계정 수신추가, 필터 조건으로 원하는 스케줄 정보(입항/접안/출항 예정시간, 항구, 선박명, 항차번호) 추출 및 데이터 통합",
          result: "UiPath 작업물, 각종 스케줄 데이터 파일",
          contribution: 0
        },
        {
          step: 4,
          title: "데이터 검증 및 가상테이블 비교",
          description: "스케줄 정확성 체크용 가상테이블 생성, 업데이트 여부 판단 후 문제없으면 기간계 DB 적재",
          result: "체크용 가상테이블",
          contribution: 0
        },
        {
          step: 5,
          title: "현업 최종 검증",
          description: "기간계 DB 적재 후 운항팀 현업의 최종 체크 및 save 승인",
          result: "테스트 시나리오",
          contribution: 30
        },
        {
          step: 6,
          title: "모니터링 대시보드 구축",
          description: "전 과정 흐름을 모니터링할 수 있는 대시보드 화면 개발",
          result: "화면",
          contribution: 20
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
        "사원직급에서 PM 역할을 맡아 상급자들과의 소통과 협업을 이끌어내는 리더십 역량 - 매번 회의록을 작성하고 요약하여 공유함으로써 의사소통의 투명성과 효율성을 높였습니다",
        "클라우드플레어 우회를 위한 Selenium 기반 봇 탐지 회피 기술 - User-Agent 조작, 쿠키 관리, 요청 간격 조절 등을 통해 안정적인 크롤링 시스템을 구축했습니다",
        "멀티스레딩을 활용한 비동기 데이터 처리 방식 - 스레드 락 처리와 자원 경쟁 방지를 통해 32개 선사, 96척 선박의 스케줄을 효율적으로 수집하는 시스템을 구현했습니다",
        "OAuth 2.0 기반 구글 드라이브 API 연동으로 자동화 파이프라인 완성 - 크롤링된 데이터를 자동으로 구글 드라이브에 업로드하여 데이터 백업과 공유를 자동화했습니다",
        "실시간 모니터링 대시보드를 통한 업무 프로세스 투명성 확보 - Apex 기반 대시보드로 크롤링 성공/실패 현황을 실시간으로 모니터링하여 문제 발생 시 즉시 대응할 수 있었습니다",
        "업무 시간 90% 단축을 통한 RPA 도입의 비즈니스 임팩트 실현 - 수기 작업 2시간에서 자동화 16분으로 단축하여 팀의 생산성을 크게 향상시켰습니다",
        "객체지향 디자인 패턴 적용 - 팩토리 메서드와 빌더 패턴을 활용하여 크롤링 모듈의 확장성과 유지보수성을 높였습니다",
        "데이터 검증 및 생명주기 관리 - 가상테이블을 통한 데이터 정확성 검증 후 기간계 DB 적재하는 안전한 데이터 파이프라인을 구축했습니다"
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
      status: "ongoing",
      challenges: ["검색 키워드 기반 크롬링", "운임 방향 예측에 대한 근거 제시", "크롤링 데이터 파이프라인 구축"],
      solutions: ["???", "ChatGPT 기반 LLM 연동", "cx_Oracle 기반 쿼리작성"],
      githubUrl: "https://github.com/Crush-on-Study/profit_dashboard"
    },
    {
      id: 6,
      title: "다음 프로젝트를 기대해주세요! 🚀",
      description: "새로운 도전과 성장을 위한 프로젝트를 준비 중입니다.",
      tech: ["Coming Soon..."],
      detailDescription: "더 나은 서비스를 위한 새로운 프로젝트를 기획하고 있습니다.",
      role: "기획 중",
      duration: "Coming Soon...",
      type: "company",
      member: "Coming Soon...",
              status: "planning",
      specialClass: "coming-soon",
      challenges: ["새로운 도전을 위한 기획 중"],
      solutions: ["준비 중..."],
      githubUrl: ""
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
    }, 3000); // slower cycle

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

  const getCarouselImage = (project, flatIndex) => {
    // Portfolio project: cycle through real screenshots in public/
    if (project?.id === 1) {
      const imgs = [
        '/portfolio/IntroPage.png',
        '/portfolio/HomePage.png',
        '/portfolio/Experience.png'
      ];
      const src = imgs[currentImageIndex % imgs.length];
      return (
        <img 
          src={src} 
          alt="Portfolio preview"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      );
    }

    // Black Market project: cycle through real screenshots in public/blackmarket
    if (project?.id === 2) {
      const imgs = [
        '/blackmarket/main.png',
        '/blackmarket/login.png',
        '/blackmarket/aboutus.png',
        '/blackmarket/quest.png'
      ];
      const src = imgs[currentImageIndex % imgs.length];
      return (
        <img 
          src={src} 
          alt="Black Market preview"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      );
    }

    // Crawling project: cycle two real screenshots in public/crawling
    if (project?.id === 4) {
      const imgs = [
        '/crawling/Crawling.png',
        '/crawling/GoogleUpload.png'
      ];
      const src = imgs[currentImageIndex % imgs.length];
      return (
        <img 
          src={src} 
          alt="Crawling project preview"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      );
    }

    // Fallback: emoji carousel for other projects
    const images = [
      '🎨', '💻', '🚀', // 포트폴리오 웹사이트 (unused when id===1)
      '🛒', '💬', '💰', // Black Market
      '🍽️', '⏰', '📍', // Lunch Insects
      '🚢', '📊', '🌱', // 크롤링 프로젝트
      '📈', '💹', '📉', // 운임 예측
      '🏭', '♻️', '🌍'  // LCA 대시보드
    ];
    return images[flatIndex % images.length];
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
                    {project.status && (
                      <div className={`status-ribbon ${project.status} ${project.specialClass || ''}`}>
                        {project.status === 'completed' ? 'Complete' : project.status === 'renewal' ? 'Renewal' : project.status === 'planning' ? 'Planning' : 'Ongoing'}
                      </div>
                    )}
                    <div className="project-carousel">
                      <div className={`carousel-image show`}>
                        {getCarouselImage(project, index * 3 + currentImageIndex)}
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
                                          <Tag className={`status-badge ${project.status} ${project.specialClass || ''}`} style={{ marginLeft: 8 }}>
                      {project.status === 'completed' ? 'Completed' : project.status === 'renewal' ? 'Renewal' : project.status === 'planning' ? 'Planning' : 'Ongoing'}
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
                  <Tag className={`status-badge ${selectedProject.status}`} style={{ marginLeft: 8 }}>
                    {selectedProject.status === 'completed' ? 'Complete' : selectedProject.status === 'renewal' ? 'Renewal' : selectedProject.status === 'planning' ? 'Planning' : 'Ongoing'}
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

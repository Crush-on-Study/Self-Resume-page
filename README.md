# BinKoon's Portfolio Website

개인 포트폴리오 웹사이트입니다. React와 Vite를 기반으로 제작되었으며, 화려한 애니메이션과 인터랙티브한 요소들을 포함하고 있습니다.

## 🚀 기술 스택

### Frontend
- **React 18** - 사용자 인터페이스 구축
- **Vite** - 빠른 개발 환경과 빌드 도구
- **React Router** - SPA 라우팅
- **Framer Motion** - 부드러운 애니메이션
- **CSS3** - 스타일링 및 애니메이션

### Backend & Deployment
- **Firebase** - BaaS (Backend as a Service)
  - Hosting
  - Authentication (예정)
  - Firestore Database (예정)

## 🎨 주요 기능

### 1. 인터랙티브 네비게이션
- **GooeyNav**: 파티클 효과가 있는 네비게이션
- **ShinyText**: 반짝이는 텍스트 효과
- **GradientText**: 그래디언트 텍스트 애니메이션

### 2. 페이지 구성
- **IntroPage**: 로테이팅 텍스트와 글로우 효과
- **HomePage**: 자기소개 및 프로필 + MacOS/Windows 색상 안내 팝업
- **SkillsPage**: 기술 스택을 민들레 씨앗처럼 떠다니는 노드들 (통합된 뷰)
- **ExperiencePage**: 인생의 레이스 스타일 타임라인
- **ProjectsFunPage**: 개인 프로젝트
- **ProjectsCompanyPage**: 회사 프로젝트

### 3. 시각적 효과
- **Orb**: 배경 파티클 애니메이션
- **Ballpit**: 인터랙티브한 공 애니메이션
- **RotatingText**: 회전하는 텍스트 애니메이션
- **Button**: 그래디언트 테두리 애니메이션

### 4. 재사용 가능한 컴포넌트
- **Modal**: 범용 모달 컴포넌트
- **Popup**: 안내 팝업 컴포넌트
- **Button**: 애니메이션 버튼 컴포넌트

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── common/           # 공통 컴포넌트
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   ├── GooeyNav.jsx
│   │   ├── GradientText.jsx
│   │   ├── Modal.jsx
│   │   └── Popup.jsx
│   ├── external/         # 외부 라이브러리 기반 컴포넌트
│   │   ├── Orb.jsx
│   │   ├── Ballpit.jsx
│   │   ├── ShinyText.jsx
│   │   ├── RotatingText.jsx
│   │   └── OpeningRotatingText.jsx
│   └── ui/              # UI 컴포넌트
│       ├── ProjectCard.jsx
│       ├── ProjectTabContent.jsx
│       └── ProjectTabNavigation.jsx
├── pages/                # 페이지 컴포넌트
│   ├── IntroPage.jsx
│   ├── HomePage.jsx
│   ├── SkillsPage.jsx
│   ├── ExperiencePage.jsx
│   ├── ProjectsFunPage.jsx
│   └── ProjectsCompanyPage.jsx
├── styles/               # CSS 스타일
│   ├── components/       # 컴포넌트별 스타일
│   ├── external/         # 외부 컴포넌트 스타일
│   ├── global/          # 전역 스타일
│   └── pages/           # 페이지별 스타일
├── router/              # 라우팅 설정
├── firebase/            # Firebase 설정
└── hooks/               # 커스텀 훅
```

## 🛠️ 설치 및 실행

### 필수 요구사항
- Node.js 16.0 이상
- npm 또는 yarn

### 설치
```bash
# 저장소 클론
git clone [repository-url]
cd my-resume

# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

### 린팅
```bash
npm run lint
```

## 🎯 주요 컴포넌트 설명

### GooeyNav
- 파티클 효과가 있는 네비게이션
- 클릭 시 글로우 효과
- 반응형 디자인
- ShinyText 효과 통합

### ShinyText
- 반짝이는 텍스트 애니메이션
- CSS keyframes를 활용한 shine 효과
- 속도 조절 가능
- disabled 상태 지원

### SkillsPage (개선됨)
- **통합된 기술 뷰**: Personal/Company 구분 없이 기술별 통합
- **민들레 씨앗 애니메이션**: 9개 노드가 자유롭게 떠다님
- **인터랙티브 툴팁**: 클릭 시 Personal/Company 프로젝트 모두 표시
- **반응형 디자인**: 모든 화면 크기에서 최적화

### ExperiencePage (완전 새로워짐)
- **인생의 레이스**: 레이스 트랙 스타일의 타임라인
- **마일스톤 시스템**: Major/Minor 마일스톤 구분
- **인터랙티브 모달**: 클릭 시 상세 정보 표시
- **현재 위치 표시**: NOW 인디케이터로 현재 상태 표시
- **반응형 스크롤**: 모바일에서 부드러운 가로 스크롤

### Modal 컴포넌트
- **재사용 가능**: 다양한 용도로 사용 가능
- **애니메이션**: fadeIn, slideIn 효과
- **반응형**: 모든 화면 크기에서 최적화
- **커스터마이징**: title, subtitle, icon, footer 등 설정 가능

### Popup 컴포넌트
- **투명한 배경**: backdrop-filter로 흐릿한 효과
- **MacOS/Windows 안내**: 색상 차이에 대한 사용자 안내
- **1일간 안보기**: 사용자 경험 개선
- **반응형 디자인**: 모바일에서도 완벽 작동

### 애니메이션
- 부드러운 전환 효과
- 파티클 기반 인터랙션
- 호버 효과와 글로우 애니메이션
- 스크롤 스냅 기능

## 🔧 최근 수정사항

### ExperiencePage 완전 리뉴얼
- **레이스 트랙 디자인**: 인생의 레이스를 시각화
- **통합된 타임라인**: 학력과 경력을 하나의 스토리로
- **인터랙티브 마일스톤**: 클릭 시 상세 정보 모달
- **반응형 최적화**: 모든 화면 크기에서 완벽 작동

### SkillsPage 리팩토링
- **기술별 통합**: 중복 기술 제거 및 통합
- **9개 노드 시스템**: 균형잡힌 배치
- **Personal/Company 구분**: 하나의 기술에서 양쪽 프로젝트 표시
- **확장된 애니메이션**: 더 넓은 움직임 공간

### 컴포넌트 재사용성 개선
- **Modal 컴포넌트**: 범용 모달 시스템
- **Popup 컴포넌트**: 안내 팝업 시스템
- **Button 컴포넌트**: 모든 버튼에서 재사용

### 반응형 디자인 강화
- **모바일 최적화**: 768px, 480px, 320px 브레이크포인트
- **가로 스크롤**: 모바일에서 부드러운 스크롤
- **터치 친화적**: 충분한 터치 영역
- **성능 최적화**: 최적화된 크기와 애니메이션

### CSS Import 경로 수정
- `GooeyNav.css`에서 `ShinyText.css` import 경로 수정
- 상대 경로를 올바르게 설정하여 빌드 에러 해결

## 🚀 배포

Firebase Hosting로 배포 완료

## 📝 향후 계획

- 방문자 게시판 기능
- 다크/라이트 모드 토글
- 성능 최적화
- SEO 개선

## 🐛 알려진 이슈

- 모든 주요 이슈가 해결되었습니다
- 빌드 및 개발 서버가 정상적으로 작동합니다
- 반응형 디자인이 모든 화면 크기에서 완벽하게 작동합니다

---

**개발자**: Crush on Study  
**이메일**: twonkang00@naver.com  
**최종 업데이트**: 2025년 8월 7일

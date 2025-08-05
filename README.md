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
- 반짝이는 텍스트 효과 (ShinyText)
- 그래디언트 텍스트 애니메이션 (GradientText)

### 2. 페이지 구성
- **IntroPage**: 로테이팅 텍스트와 글로우 효과
- **HomePage**: 자기소개 및 프로필
- **SkillsPage**: 기술 스택을 민들레 씨앗처럼 떠다니는 노드들
- **ExperiencePage**: 경력 및 학력 정보
- **ProjectsFunPage**: 개인 프로젝트
- **ProjectsCompanyPage**: 회사 프로젝트

### 3. 시각적 효과 (출처 - Reactbits)
- **Orb**: 배경 파티클 애니메이션
- **Ballpit**: 인터랙티브한 공 애니메이션
- **GlareHover**: 마우스오버 글로우 효과
- **Button**: 그래디언트 테두리 애니메이션

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── common/           # 공통 컴포넌트
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   ├── GooeyNav.jsx
│   │   ├── GradientText.jsx
│   │   └── GlareHover.jsx
│   └── external/         # 외부 라이브러리 기반 컴포넌트
│       ├── Orb.jsx
│       ├── Ballpit.jsx
│       ├── ShinyText.jsx
│       └── OpeningRotatingText.jsx
├── pages/                # 페이지 컴포넌트
│   ├── IntroPage.jsx
│   ├── HomePage.jsx
│   ├── SkillsPage.jsx
│   ├── ExperiencePage.jsx
│   ├── ProjectsFunPage.jsx
│   └── ProjectsCompanyPage.jsx
├── styles/               # CSS 스타일
├── router/              # 라우팅 설정
└── firebase/            # Firebase 설정 (예정)
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

## 🎯 주요 컴포넌트 설명

### GooeyNav
- 파티클 효과가 있는 네비게이션
- 클릭 시 글로우 효과
- 반응형 디자인

### SkillsPage
- 기술 스택을 노드로 표현
- 민들레 씨앗처럼 떠다니는 애니메이션
- 툴팁으로 프로젝트 정보 표시

### OpeningRotatingText
- 보라색 배경이 열렸다 닫혔다 하며 텍스트 로테이션
- Framer Motion 기반 애니메이션

### 애니메이션
- 부드러운 전환 효과
- 파티클 기반 인터랙션
- 호버 효과와 글로우 애니메이션

## 🚀 배포

Firebase Hosting을 통해 배포할 예정

## 📝 향후 계획

- [ ] Firebase Authentication 추가
- [ ] Firestore Database 연동
- [ ] 방문자 게시판 기능
- [ ] 다국어 지원
- [ ] 다크/라이트 모드 토글

---

**개발자**: Crush on Study
**이메일**: twonkang00@naver.com  

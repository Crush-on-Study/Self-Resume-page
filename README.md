# BinKoon's Portfolio Website

개인 포트폴리오 웹사이트입니다. React와 Vite를 기반으로 제작되었으며, 인터랙티브 애니메이션과 스토리텔링 UI를 지향합니다.

## 🚀 기술 스택

### Frontend
- **React 19** (Vite)
- **Framer Motion**
- **CSS3**
- **Three.js** (오픈소스 코드 커스터마이징에 사용)

### Backend & Deployment
- **Firebase Hosting**

### Open Source
- 리액트 UI 오픈소스 웹사이트: **React-bits**

### 성능 최적화
- Code Splitting (React.lazy)
- Preloading (조건부/호버 기반)
- Lazy Loading

## 🎨 주요 기능

### 1) 인터랙티브 네비게이션
- GooeyNav: 파티클/버블 이펙트
- ShinyText / GradientText: 텍스트 하이라이트 애니메이션

### 2) 페이지 구성
- **IntroPage**: 오프닝 로테이팅 텍스트
- **HomePage**: 좌측 프로필, 우측 레터(한 줄씩 페이드인되는 편지 UI)
- **SkillsPage**: 기술 스택 네트워크(노드/툴팁)
- **ExperiencePage**: 인생 레이스(가로 드래그 타임라인) + 간단 간트 차트(TimelineBar)
- **ProjectsPage**: 개인/회사 프로젝트 통합, 상세 탭 구성(개요/기술스택/프로세스/스크린샷/배운 점)

### 3) 시각적 효과
- Orb, Ballpit, RotatingText, Gradient Button 등

### 4) 재사용 컴포넌트
- **Modal**, **Popup**, **Button**, **LoadingSpinner**
- **Tag**: 타입/기술 태그(Projects 타입 배지에도 사용)
- **MilestoneCard**: Experience 마일스톤 카드
- **TimelineBar**: 기간 시각화(진행 중 NOW 반영)
- **LetterLines**: 한 줄씩 누적되는 레터 UI

## 📁 프로젝트 구조 (요약)

```
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   ├── GooeyNav.jsx
│   │   ├── GradientText.jsx
│   │   ├── Modal.jsx
│   │   ├── Popup.jsx
│   │   └── LoadingSpinner.jsx
│   ├── external/
│   │   ├── Orb.jsx
│   │   ├── Ballpit.jsx
│   │   ├── ShinyText.jsx
│   │   └── RotatingText.jsx
│   └── ui/
│       ├── ProjectCard.jsx
│       ├── ProjectTabContent.jsx
│       ├── ProjectTabNavigation.jsx
│       ├── MilestoneCard.jsx
│       ├── TimelineBar.jsx
│       └── LetterLines.jsx
├── pages/
│   ├── IntroPage.jsx
│   ├── HomePage.jsx
│   ├── SkillsPage.jsx
│   ├── ExperiencePage.jsx
│   └── ProjectsPage.jsx
└── styles/ ...
```

## 🛠️ 설치 및 실행

### 요구사항
- Node.js 18+

### 설치
```bash
git clone [repository-url]
cd my-resume
npm install
```

### 개발 서버
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

## 🚀 배포 (Firebase Hosting)
```bash
# Firebase CLI (처음 1회)
npm install -g firebase-tools
firebase login
firebase init hosting  # firebase.json 참고

# 배포 전 빌드
npm run build

# 배포
firebase deploy
```

- 프로덕션: https://myresume-3d74d.web.app

## 🔧 최근 업데이트 (2025-08-09)
- Projects 상세 기술스택에 **Open Source** 필드 추가 (포트폴리오: React-bits)
- Projects 타입 배지 `Tag` 컴포넌트로 통일, 상세 메타에 멤버 배지 추가(👥)
- Experience 데이터 구조 개선(start/end/date) 및 **TimelineBar** 간트형 시각화 추가, 모달 날짜 표기 개선
- 학교 항목을 단일 날짜(Start!)로 표기
- Home 우측에 **LetterLines** 도입(한 줄씩 페이드인)
- 페이지 타이틀을 `<skills />`, `<experience />`, `<projects />` 형태로 통일, 좌측 정렬

## 📝 향후 계획
- 프로젝트별 Open Source 출처 확장 표기
- 프로젝트 스크린샷/데모 링크 보강
- 라이트 테마

---

**개발자**: Crush on Study  
**이메일**: twonkang00@naver.com  
**최종 업데이트**: 2025년 8월 9일  ver 1.0.4

import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from './components/common/LoadingSpinner';
import { preloadStrategies } from './utils/preloadUtils';
import './App.css';

// IntroPage는 즉시 로드 (첫 페이지)
import IntroPage from './pages/IntroPage';

// 나머지 페이지는 Lazy Loading 적용
const HomePage = lazy(() => import('./pages/HomePage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

// 조건부 프리로딩 컴포넌트
const Preloader = () => {
  const location = useLocation();

  useEffect(() => {
    // 현재 페이지에 따라 조건부 프리로딩 실행
    const preloadBasedOnCurrentPage = () => {
      switch(location.pathname) {
        case '/':
        case '/home':
          preloadStrategies.home();
          break;
        case '/skills':
          preloadStrategies.skills();
          break;

        case '/experience':
          preloadStrategies.experience();
          break;
        case '/projects':
          preloadStrategies.projects();
          break;
        default:
          break;
      }
    };

    preloadBasedOnCurrentPage();
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Preloader />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<IntroPage />} />
                            <Route path="/home" element={<HomePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

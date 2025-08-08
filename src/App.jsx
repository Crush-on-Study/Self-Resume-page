import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from './components/common/LoadingSpinner';
import { preloadStrategies } from './utils/preloadUtils';
import './App.css';

// Lazy Loading 적용
const IntroPage = lazy(() => import('./pages/IntroPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ProjectsFunPage = lazy(() => import('./pages/ProjectsFunPage'));
const ProjectsCompanyPage = lazy(() => import('./pages/ProjectsCompanyPage'));

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
            <Route path="/projects-fun" element={<ProjectsFunPage />} />
            <Route path="/projects-company" element={<ProjectsCompanyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

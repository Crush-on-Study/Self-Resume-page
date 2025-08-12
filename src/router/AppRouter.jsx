import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntroPage from '../pages/IntroPage';
import HomePage from '../pages/HomePage';
import SkillsPage from '../pages/SkillsPage';
import ExperiencePage from '../pages/ExperiencePage';
import ProjectsPage from '../pages/ProjectsPage';
import { ROUTES } from './routes';

const AppRouter = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={ROUTES.INTRO} element={<IntroPage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.SKILLS} element={<SkillsPage />} />
          <Route path={ROUTES.EXPERIENCE} element={<ExperiencePage />} />
          <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
          <Route path="*" element={<Navigate to={ROUTES.INTRO} replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter; 
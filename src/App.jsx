import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsFunPage from './pages/ProjectsFunPage';
import ProjectsCompanyPage from './pages/ProjectsCompanyPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects-fun" element={<ProjectsFunPage />} />
          <Route path="/projects-company" element={<ProjectsCompanyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

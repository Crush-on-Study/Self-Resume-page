import React, { useState } from 'react';
import IntroPage from '../pages/IntroPage';
import HomePage from '../pages/HomePage';
import SkillsPage from '../pages/SkillsPage';
import { ROUTES } from './routes';

const AppRouter = () => {
  const [currentPage, setCurrentPage] = useState(ROUTES.INTRO);

  const handleStart = () => {
    setCurrentPage(ROUTES.HOME);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case ROUTES.INTRO:
        return <IntroPage onStart={handleStart} />;
      case ROUTES.HOME:
        return <HomePage onNavigate={handleNavigate} />;
      case ROUTES.SKILLS:
        return <SkillsPage onNavigate={handleNavigate} />;
      default:
        return <IntroPage onStart={handleStart} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
};

export default AppRouter; 
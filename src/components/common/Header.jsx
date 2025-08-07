import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GooeyNav from './GooeyNav';
import { NAV_ITEMS } from '../../router/routes';
import '../../styles/header.css';

const Header = ({ activeIndex = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 현재 경로에 따라 activeIndex 자동 설정
  const currentActiveIndex = NAV_ITEMS.findIndex(item => 
    location.pathname === item.route
  );
  
  const navItems = NAV_ITEMS.map(item => ({
    ...item,
    onClick: () => navigate(item.route)
  }));

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="profile-pic-small" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <div className="profile-image-placeholder">
            <img 
              src="/profile.jpeg" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          <div className="profile-glow"></div>
        </div>
        <div className="header-text">
          <h2 className="header-name">BinKoon</h2>
          <p className="header-title">Cookie papa</p>
        </div>
        <div className="social-links">
          <div 
            className="social-icon github-icon"
            onClick={() => handleSocialClick('https://github.com/Crush-on-Study')}
            title="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <div 
            className="social-icon notion-icon"
            onClick={() => handleSocialClick('https://hyunbin95.notion.site/IT-114483dd44168082a597d6a84affd103')}
            title="Notion"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.28.466l1.73 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046 1.354-.373 1.354-1.214V6.354c0-.84-.513-1.168-1.354-1.214L6.466 4.3c-.841-.047-1.214.233-1.214.98zm14.337.537c.093.42 0 .84-.42.84l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l1.215-.14z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="header-right">
        <GooeyNav items={navItems} initialActiveIndex={currentActiveIndex >= 0 ? currentActiveIndex : activeIndex} />
        <div className="globe-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header; 
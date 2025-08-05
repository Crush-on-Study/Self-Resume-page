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

  return (
    <header className="header">
      <div className="header-left">
        <div className="profile-pic-small">
          <div className="profile-image-placeholder">
            {/* 사진이 준비되면 여기에 이미지 추가 */}
          </div>
          <div className="profile-glow"></div>
        </div>
        <div className="header-text">
          <h2 className="header-name">FAWZIUIUX</h2>
          <p className="header-title">A DESIGNER</p>
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
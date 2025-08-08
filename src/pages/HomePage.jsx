import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import Button from '../components/common/button';
import Popup from '../components/common/Popup';
import '../styles/pages/home.css';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // 팝업이 이미 닫혔는지 확인
    const popupDismissed = localStorage.getItem('popupDismissed');
    const lastDismissed = localStorage.getItem('popupLastDismissed');
    
    if (!popupDismissed) {
      // 1일간 안보기 체크
      if (lastDismissed) {
        const lastDismissedDate = new Date(lastDismissed);
        const now = new Date();
        const diffTime = now - lastDismissedDate;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        
        if (diffDays >= 1) {
          // 1일이 지났으면 팝업 표시
          setShowPopup(true);
        }
      } else {
        // 처음 방문하는 경우 팝업 표시
        setShowPopup(true);
      }
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDontShowAgain = () => {
    const now = new Date();
    localStorage.setItem('popupLastDismissed', now.toISOString());
    setShowPopup(false);
  };

  return (
    <div className="home-page">
      {/* Background Orb */}
      <div className="orb-background">
        <Orb />
      </div>
      
      {/* Header */}
      <Header activeIndex={0} />

      {/* Main Content */}
      <main className="main-content">
        {/* Left Section - AboutMe Content */}
        <div className="content-left">
          <div className="text-content">
            <h1 className="about-tag">&lt;aboutMe /&gt;</h1>
            <p className="greeting">Hi I am</p>
            <h2 className="name">HyunBin Kang</h2>
            <h3 className="title">
              <span className="title-line">Front-End</span>
              <span className="title-line">Developer</span>
            </h3>
            <p className="description">
              화려한 고대비테마의 사이버펑크 디자인을 좋아합니다.<br></br>웹페이지 보고 이상하게 보실까봐 말씀드리자면 <br></br>
              그래도 회사에서는 얌전하게 만듭니다.
            </p>
            <Button 
              className="download-cv-btn"
              color="#4CAF50,#5DE0F0,#FFD700,#FF6B6B"
              speed="4s"
              thickness={2}
            >
              Download CV
            </Button>
          </div>
        </div>
      </main>

      {/* Popup */}
      <Popup 
        isOpen={showPopup}
        onClose={handleClosePopup}
        onDontShowAgain={handleDontShowAgain}
      />
    </div>
  );
};

export default HomePage; 
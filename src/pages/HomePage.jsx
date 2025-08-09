import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import Button from '../components/common/button';
import Popup from '../components/common/Popup';
import GradientText from '../components/common/GradientText';
import LetterLines from '../components/ui/LetterLines';
import '../styles/pages/home.css';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupDismissed = localStorage.getItem('popupDismissed');
    const lastDismissed = localStorage.getItem('popupLastDismissed');
    
    if (!popupDismissed) {
      if (lastDismissed) {
        const lastDismissedDate = new Date(lastDismissed);
        const now = new Date();
        const diffTime = now - lastDismissedDate;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        
        if (diffDays >= 1) {
          setShowPopup(true);
        }
      } else {
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

  const letter = [
    '반갑습니다. 디자인과 IT를 좋아하는 강현빈입니다.',
    '무엇을 좋아하는지 알기 위해 다양한 경험, 다양한 포지션을 경험해왔습니다.',
    '누구는 처음부터 원하던 전공, 원하던 직무를 찾았지만  저는 그렇지 못했습니다.',
    '대략 4년간 하고 싶은게 무엇인지 찾고나니 기억에 남는건 프론트엔드 분야였습니다.',
    '저의 상상을 빈 화면에서 시작하여 채워나가는게 재밌었기 때문입니다.',
    '이 공간은 제가 그동안 경험했던 것들을 담아놓았습니다.',
    '제 작은 세상에 와주셔서 감사합니다.'
  ];

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
            <GradientText 
              className="about-tag"
              colors={["#4CAF50", "#5DE0F0", "#FFD700", "#FF6B6B"]}
              animationSpeed={6}
            >
              &lt;aboutMe /&gt;
            </GradientText>
            <p className="greeting">Hi I am</p>
            <h2 className="name">HyunBin Kang</h2>
            <h3 className="title">
              <span className="title-line">Front-End</span>
              <span className="title-line">Developer</span>
            </h3>
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

        {/* Right Section - Letter */}
        <div className="content-right">
          <LetterLines lines={letter} intervalMs={1600} />
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
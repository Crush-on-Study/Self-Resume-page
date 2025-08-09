import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import Button from '../components/common/button';
import Popup from '../components/common/Popup';
import GradientText from '../components/common/GradientText';
import LetterLines from '../components/ui/LetterLines';
import '../styles/pages/home.css';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const POPUP_VERSION = 'v2';

  useEffect(() => {
    const storedVersion = localStorage.getItem('popupVersion');
    if (storedVersion !== POPUP_VERSION) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem('popupVersion', POPUP_VERSION);
  };

  const handleDontShowAgain = () => {
    localStorage.setItem('popupVersion', POPUP_VERSION);
    setShowPopup(false);
  };

  const letter = useMemo(() => ([
    '반갑습니다.',
    '저는 제가 무엇을 좋아하는지 깨닫기 위해 다양한 경험, 다양한 포지션을 경험해왔습니다.',
    '누구는 처음부터 원하던 전공, 원하던 직무를 찾았지만  저는 그렇지 못했습니다.',
    '그렇게 대략 4년간 하고 싶은게 무엇인지 찾아다니다보니 제일 재밌었던건 프론트엔드 개발자였습니다.',
    '저의 상상을 빈 화면에서 시작하여 채워나가는게 재밌습니다.',
    '이 공간은 제가 그동안 경험했던 것들을 기록해놓았습니다.',
    '제 작은 세상에 와주셔서 감사합니다.'
  ]), []);

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
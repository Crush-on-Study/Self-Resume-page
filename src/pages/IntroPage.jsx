import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ballpit from '../components/external/Ballpit';
import Button from '../components/common/button';
import ShinyText from '../components/external/shinyText';
import OpeningRotatingText from '../components/external/OpeningRotatingText';
import '../styles/pages/intro.css';
import '../styles/external/Ballpit.css';
import '../styles/external/OpeningRotatingText.css';

const IntroPage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [rotatingTextComplete, setRotatingTextComplete] = useState(false);
  
  const handleStart = () => {
    navigate('/home');
  };
  
  const handleRotatingTextComplete = () => {
    setRotatingTextComplete(true);
    // 약간의 지연 후 intro-content를 보여줌
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };
  return (
    <div className="intro-page">
      {/* Ballpit 배경 */}
      <div className="ballpit-container">
        <Ballpit 
          followCursor={false}
          colors={[
            0x4A90E2, // 밝은 파란색
            0x7B68EE, // 보라색
            0x20B2AA, // 라이트 시안
            0xFF6B6B, // 산호색
            0x4ECDC4, // 민트색
            0x45B7D1, // 하늘색
            0x96CEB4, // 연한 초록색
            0xFFEAA7, // 연한 노란색
            0xDDA0DD, // 연한 보라색
            0x98D8C8  // 연한 민트색
          ]}
          count={150}
          minSize={0.3}
          maxSize={1.2}
          gravity={0.3}
          friction={0.998}
          wallBounce={0.9}
          maxVelocity={0.2}
        />
      </div>
      
      {!rotatingTextComplete ? (
        <div className="rotating-text-container">
          <div className="intro-rotating-text">
            <span className="static-text">Creative </span>
            <OpeningRotatingText
              texts={[
                "Action?",
                "BinKoon!"
              ]}
              rotationInterval={1500}
              onComplete={handleRotatingTextComplete}
            />
          </div>
        </div>
      ) : (
        <div className={`intro-content ${showContent ? 'fade-in' : ''}`}>
          <div className="intro-text">
            <h1 className="main-title">
              <ShinyText text="사람은 누구든 창작 욕구가 있다, 나는 그걸 화면에 옮겼다." disabled={false} speed={3} className='custom-class' />
            </h1>
            <p className="sub-title">
              <ShinyText text="풀스택을 꿈꾸는 방구석 개발자" disabled={false} speed={3} className='custom-class' />
            </p>
          </div>
          
          <Button 
            onClick={handleStart}
            className="start-button"
            color="#00ff88,#FFD700,#5DE0F0,#FF6B6B"
            speed="4s"
            thickness={2}
          >
            뭐 했는지 보러가기
          </Button>
        </div>
      )}
    </div>
  );
};

export default IntroPage; 
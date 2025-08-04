import React from 'react';
import Ballpit from '../components/external/Ballpit';
import Button from '../components/common/button';
import '../styles/intro.css';

const IntroPage = ({ onStart }) => {
  return (
    <div className="intro-page">
      {/* Ballpit 배경 */}
      <div className="ballpit-container">
        <Ballpit />
      </div>
      
      {/* 콘텐츠 오버레이 */}
      <div className="intro-content">
        <div className="intro-text">
          <h1 className="main-title">
            사람은 누구든 창작 욕구가 있다, 나는 그걸 화면에 옮겼다.
          </h1>
          <p className="sub-title">
            풀스택을 꿈꾸는 방구석 개발자
          </p>
        </div>
        
        <Button 
          onClick={onStart}
          className="start-button"
          color="#00ff88"
          speed="4s"
          thickness={2}
        >
          뭐 했는지 보러가기
        </Button>
      </div>
    </div>
  );
};

export default IntroPage; 
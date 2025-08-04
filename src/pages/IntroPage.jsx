import React from 'react';
import Ballpit from '../components/external/orb';
import Button from '../components/common/button';
import ShinyText from '../components/external/shinyText';
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
            <ShinyText text="사람은 누든 창작 욕구가 있다, 나는 그걸 화면에 옮겼다." disabled={false} speed={3} className='custom-class' />
          </h1>
          <p className="sub-title">
            <ShinyText text="풀스택을 꿈꾸는 방구석 개발자" disabled={false} speed={3} className='custom-class' />
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
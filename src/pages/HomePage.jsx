import React from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import Button from '../components/common/button';
import '../styles/pages/home.css';
import GooeyNav from '../components/common/GooeyNav';

const HomePage = () => {

  return (
    <div className="home-page">
      {/* Background Orb */}
      <div className="orb-background">
        <Orb />
      </div>
      
      {/* Header */}
      {/* <GooeyNav items={NAV_ITEMS} /> */}
      <Header activeIndex={0} />

      {/* Main Content */}
      <main className="main-content">
        {/* Left Section - Text Content */}
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

        {/* Right Section - Profile Picture & Social Icons */}
        <div className="content-right">
          
        </div>
      </main>

    </div>
  );
};

export default HomePage; 
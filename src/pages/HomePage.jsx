import React from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import '../styles/home.css';

const HomePage = () => {

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
              화려함과 사이버펑키한 디자인을 좋아합니다. 극한의 화려함에 희열을 느껴요. 그래도 회사에서는 얌전하게 만듭니다.
            </p>
            <button className="download-cv-btn">Download CV</button>
          </div>
        </div>

        {/* Right Section - Profile Picture & Social Icons */}
        <div className="content-right">
          <div className="profile-section">
            <div className="profile-picture">
              <div className="profile-border">
                <div className="profile-image-placeholder">
                  {/* 사진이 준비되면 여기에 이미지 추가 */}
                  <div className="placeholder-text">Profile Image</div>
                </div>
              </div>
            </div>
            <div className="social-icons">
              <div className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </div>
              <div className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.27 10.94v-8.37H5.5v8.37h2.67z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default HomePage; 
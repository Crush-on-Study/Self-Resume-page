import React from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import GradientText from '../components/common/GradientText';
import ShinyText from '../components/external/shinyText';
import '../styles/home.css';
import '../styles/experience.css';

const ExperiencePage = () => {
  const workExperience = [
    {
      company: "Korea Marine Transport Co",
      role: "IT Planner & Front-End",
      period: "01 Sep 2024 ~",
      description: "정기 컨테이선 서비스 중 운항 모니터링과 운임지수 예측 주제로 프론트엔드 개발 및 IT 기획 업무를 담당하고 있습니다. Vue2 또는 바닐라 JS기반의 Low Code 플랫폼으로 화면을 개발합니다.",
      isCurrent: true
    },
    {
      company: "Korea Electronic Tech Ins",
      role: "Data analysis & Front-End",
      period: "16 Jan 2023 ~ 07 July 2023",
      description: "중소 제조업 타겟 탄소전과정 (LCA) 데이터 분석 보조 및 프론트엔드 개발 업무를 수행했습니다. Python을 활용한 데이터 처리 및 Vue3 기반 대시보드 개발을 담당했습니다.",
      isCurrent: false
    },
    {
      company: "LG Display",
      role: "ESG Manager",
      period: "05 July 2022 ~ 20 Dec 2022",
      description: "유해물질 관리 및 납품 관리 업무를 담당했습니다.",
      isCurrent: false
    }
  ];

  const education = [
    {
      institution: "중앙대학교",
      degree: "Physics",
      period: "14th Feb 2022 Graduate",
      description: "물리학 단일전공으로 SW는 전혀 접점이 없던 디스플레이 업계 취업 지망생이었습니다."
    },
    {
      institution: "SCSA 20th in 삼성SDS",
      degree: "채용연계형 교육생",
      period: "16th Jan 2023 ~ 7th July 2023",
      description: "알고리즘 문제 풀이와 간단한 데이터분석 + 프론트엔드 개발 토이프로젝트 진행"
    }
  ];

  const certifications = [
    {
      name: "SQLD",
      issuer: "Korea Data Academy",
      date: "2022",
      description: "MySql 자격증 취득"
    },
    {
      name: "CSTS FL",
      issuer: "Korea information institute",
      date: "2023",
      description: "SW 테스트 이론 및 테스트 방법론 자격증 취득"
    },
  ];

  return (
    <div className="experience-page">
      {/* Background Orb */}
      <div className="orb-background">
        <Orb />
      </div>
      
      {/* Header */}
      <Header activeIndex={2} />

      {/* Main Content */}
      <main className="experience-content">
        <div className="experience-header">
          <GradientText 
            className="experience-title"
            colors={["#4CAF50", "#5DE0F0", "#FFD700", "#FF6B6B"]}
            animationSpeed={6}
          >
            From My Way
          </GradientText>
          <ShinyText 
            text="Job Experience & Education"
            disabled={false}
            speed={3}
            className="experience-subtitle"
          />
        </div>

        <div className="timeline-container">
          {/* Work Experience Section */}
          <div className="timeline-section work-section">
            <h2 className="section-title">Work Experience</h2>
            <div className="timeline">
              {workExperience.map((work, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div className="timeline-marker">
                    <div className={`marker ${work.isCurrent ? 'current' : ''}`}></div>
                  </div>
                  <div className="timeline-content">
                    <div className="content-header">
                      <h3 className="company-name">{work.company}</h3>
                      <span className="role-badge">{work.role}</span>
                    </div>
                    <p className="period">{work.period}</p>
                    <p className="description">{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Section */}
          <div className="timeline-section education-section">
            <h2 className="section-title">Education & Certifications</h2>
            
            {/* Education */}
            <div className="education-subsection">
              <h3 className="subsection-title">Education</h3>
              <div className="education-list">
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-header">
                      <h4 className="institution-name">{edu.institution}</h4>
                      <span className="degree-badge">{edu.degree}</span>
                    </div>
                    <p className="period">{edu.period}</p>
                    <p className="description">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="certifications-subsection">
              <h3 className="subsection-title">Certifications</h3>
              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <div className="certification-header">
                      <h4 className="certification-name">{cert.name}</h4>
                      <span className="issuer-badge">{cert.issuer}</span>
                    </div>
                    <p className="period">{cert.date}</p>
                    <p className="description">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExperiencePage; 
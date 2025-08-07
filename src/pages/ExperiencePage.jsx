import React, { useState } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import GradientText from '../components/common/GradientText';
import ShinyText from '../components/external/shinyText';
import Modal from '../components/common/Modal';
import '../styles/pages/home.css';
import '../styles/pages/experience.css';

const ExperiencePage = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  // 인생의 레이스 데이터 - 시간순으로 정렬
  const lifeRace = [
    {
      id: 1,
      year: 2022,
      month: 2,
      type: 'education',
      title: '중앙대학교 졸업',
      subtitle: 'Physics',
      description: '물리학 단일전공으로 SW는 전혀 접점이 없던 디스플레이 업계 취업 지망생이었습니다.',
      icon: '🎓',
      color: '#4CAF50',
      isMilestone: true
    },
    {
      id: 2,
      year: 2022,
      month: 7,
      type: 'work',
      title: 'LG Display',
      subtitle: 'ESG Manager',
      description: '유해물질 관리 및 납품 관리 업무를 담당했습니다.',
      icon: '🏢',
      color: '#FF6B6B',
      isMilestone: true
    },
    {
      id: 3,
      year: 2022,
      month: 12,
      type: 'education',
      title: 'SQLD 자격증',
      subtitle: 'Korea Data Academy',
      description: 'MySql 자격증 취득',
      icon: '📜',
      color: '#FFD700',
      isMilestone: false
    },
    {
      id: 4,
      year: 2023,
      month: 1,
      type: 'education',
      title: 'SCSA 20th',
      subtitle: '삼성SDS 채용연계형 교육생',
      description: '알고리즘 문제 풀이와 간단한 데이터분석 + 프론트엔드 개발 토이프로젝트 진행',
      icon: '💻',
      color: '#5DE0F0',
      isMilestone: true
    },
    {
      id: 5,
      year: 2023,
      month: 7,
      type: 'work',
      title: 'Korea Electronic Tech Ins',
      subtitle: 'Data analysis & Front-End',
      description: '중소 제조업 타겟 탄소전과정 (LCA) 데이터 분석 보조 및 프론트엔드 개발 업무를 수행했습니다. Python을 활용한 데이터 처리 및 Vue3 기반 대시보드 개발을 담당했습니다.',
      icon: '🔬',
      color: '#FF6B6B',
      isMilestone: true
    },
    {
      id: 6,
      year: 2023,
      month: 12,
      type: 'education',
      title: 'CSTS FL 자격증',
      subtitle: 'Korea information institute',
      description: 'SW 테스트 이론 및 테스트 방법론 자격증 취득',
      icon: '📜',
      color: '#FFD700',
      isMilestone: false
    },
    {
      id: 7,
      year: 2024,
      month: 9,
      type: 'work',
      title: 'Korea Marine Transport Co',
      subtitle: 'IT Planner & Front-End',
      description: '정기 컨테이선 서비스 중 운항 모니터링과 운임지수 예측 주제로 프론트엔드 개발 및 IT 기획 업무를 담당하고 있습니다. Vue2 또는 바닐라 JS기반의 Low Code 플랫폼으로 화면을 개발합니다.',
      icon: '🚢',
      color: '#4CAF50',
      isMilestone: true,
      isCurrent: true
    }
  ];

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(milestone);
  };

  const handleCloseModal = () => {
    setSelectedMilestone(null);
  };

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
            My Life Race
          </GradientText>
          <ShinyText 
            text="From Physics Student to Front-End Developer"
            disabled={false}
            speed={3}
            className="experience-subtitle"
          />
        </div>

        {/* Life Race Track */}
        <div className="race-track-container">
          <div className="race-track">
            {/* Start Line */}
            <div className="start-line">
              <div className="start-flag">🏁</div>
              <span>START</span>
            </div>

            {/* Milestones */}
            {lifeRace.map((milestone, index) => (
              <div 
                key={milestone.id}
                className={`milestone ${milestone.isMilestone ? 'major' : 'minor'} ${milestone.isCurrent ? 'current' : ''}`}
                style={{ '--milestone-color': milestone.color }}
                onClick={() => handleMilestoneClick(milestone)}
              >
                <div className="milestone-icon">{milestone.icon}</div>
                <div className="milestone-info">
                  <div className="milestone-date">{milestone.year}.{milestone.month.toString().padStart(2, '0')}</div>
                  <div className="milestone-title">{milestone.title}</div>
                  <div className="milestone-subtitle">{milestone.subtitle}</div>
                </div>
                {milestone.isCurrent && <div className="current-indicator">NOW</div>}
              </div>
            ))}

            {/* Finish Line */}
            <div className="finish-line">
              <div className="finish-flag">🏆</div>
              <span>FUTURE</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="race-legend">
          <div className="legend-item">
            <div className="legend-icon major">🎯</div>
            <span>Major Milestone</span>
          </div>
          <div className="legend-item">
            <div className="legend-icon minor">📜</div>
            <span>Certification</span>
          </div>
          <div className="legend-item">
            <div className="legend-icon current">⚡</div>
            <span>Current Position</span>
          </div>
        </div>

        {/* Milestone Modal */}
        <Modal
          isOpen={!!selectedMilestone}
          onClose={handleCloseModal}
          title={selectedMilestone?.title}
          subtitle={selectedMilestone?.subtitle}
          icon={selectedMilestone?.icon}
          iconColor={selectedMilestone?.color}
        >
          <div className="modal-date">
            {selectedMilestone?.year}.{selectedMilestone?.month.toString().padStart(2, '0')}
            {selectedMilestone?.isCurrent && <span className="current-badge">CURRENT</span>}
          </div>
          <p className="modal-description">{selectedMilestone?.description}</p>
          <div className="modal-type">
            <span className={`type-badge ${selectedMilestone?.type}`}>
              {selectedMilestone?.type === 'work' ? '💼 Work' : '🎓 Education'}
            </span>
          </div>
        </Modal>
      </main>
    </div>
  );
};

export default ExperiencePage; 
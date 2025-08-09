import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/common/Header';
import Orb from '../components/external/orb';
import GradientText from '../components/common/GradientText';
import ShinyText from '../components/external/shinyText';
import Modal from '../components/common/Modal';
import TimelineBar from '../components/ui/TimelineBar';
import MilestoneCard from '../components/ui/MilestoneCard';
import '../styles/pages/home.css';
import '../styles/pages/experience.css';

const DRAG_THRESHOLD_PX = 8; // 이 거리 이하 이동이면 클릭으로 간주

const ExperiencePage = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragMoved, setDragMoved] = useState(0);
  const trackRef = useRef(null);

  const formatDate = (iso) => {
    if (!iso) return '';
    const [y, m, d] = iso.split('-');
    return `${y}.${m}.${d}`;
  };

  // 인생의 레이스 데이터 - 시간순으로 정렬
  const lifeRace = [
    { id: 1, type: 'education', title: 'Start!', subtitle: '중앙대학교 물리학과 졸업', date: '2022-02-14', description: '물리학 단일 전공, 아직 뭘 하고 싶은지 몰랐던 상태', icon: '🎓', color: '#4CAF50', isMilestone: true },

    { id: 2, type: 'work', title: 'ON Semiconductor', subtitle: '반도체 테스트 엔지니어', start: '2021-10-25', end: '2022-06-15', description: '우연히 접한 SW, C++로 반도체 안정성 테스트 로직 유지수', icon: '🧪', color: '#5DE0F0', isMilestone: true },

    { id: 3, type: 'work', title: 'LG Display', subtitle: 'ESG Manager', start: '2022-07-05', end: '2022-12-20', description: 'ESG경영팀 유해물질 테스트', icon: '🏢', color: '#5DE0F0', isMilestone: true },

    { id: 4, type: 'education', title: 'SCSA 20th', subtitle: '삼성SDS 채용연계형 교육생', start: '2023-01-16', end: '2023-07-07', description: 'SW로 진로를 전환하고자, 퇴사하고 도전한 교육과정. 전환에 실패했지만 많이 단단해진 시기', icon: '💻', color: '#4CAF50', isMilestone: true },

    { id: 5, type: 'work', title: 'Freelance', subtitle: 'Data analysis & Front-End', start: '2023-07-01', end: '2024-08-31', description: '알고지낸 박사님의 추천으로 중소 제조업 고객 대상 ESG 탄소분석 플랫폼 개발 보조 시작', icon: '🔬', color: '#5DE0F0', isMilestone: true },

    { id: 6, type: 'work', title: 'Korea Marine Transport Co', subtitle: 'IT Planner & Front-End', start: '2024-09-01', end: null, description: '기획과 프론트엔드 업무 담당', icon: '🚢', color: '#5DE0F0', isMilestone: true, isCurrent: true }
  ];

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(milestone);
  };

  const handleCloseModal = () => {
    setSelectedMilestone(null);
  };

  // 드래그 시작
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    setDragMoved(0);
    trackRef.current.style.cursor = 'grabbing';
  };

  // 드래그 중
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const delta = x - startX;
    const walk = delta * 2; // 드래그 속도 조절
    trackRef.current.scrollLeft = scrollLeft - walk;
    setDragMoved(Math.abs(delta));
  };

  // 드래그 종료
  const handleMouseUp = () => {
    setIsDragging(false);
    trackRef.current && (trackRef.current.style.cursor = 'grab');
  };

  // 터치 이벤트 지원
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    setDragMoved(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const delta = x - startX;
    const walk = delta * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
    setDragMoved(Math.abs(delta));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // 클릭 처리: 임계값 이내 이동이면 클릭으로 간주
  const handleMilestoneMouseUp = (e, milestone) => {
    if (dragMoved <= DRAG_THRESHOLD_PX) {
      handleMilestoneClick(milestone);
    }
  };

  // 컴포넌트 언마운트 시 이벤트 리스너 정리
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleMouseLeave = () => {
      setIsDragging(false);
      track.style.cursor = 'grab';
    };

    track.addEventListener('mouseleave', handleMouseLeave);
    return () => track.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

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
            &lt;experience /&gt;
          </GradientText>
          <ShinyText 
            text="From Physics Student to Front-End Developer"
            disabled={false}
            speed={3}
            className="experience-subtitle"
          />
        </div>

        {/* Timeline (Gantt-like) */}
        <TimelineBar items={lifeRace} />

        {/* Life Race Track */}
        <div className="race-track-container">
          <div 
            ref={trackRef}
            className={`race-track ${isDragging ? 'dragging' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {/* Start Line */}
            <div className="start-line">
              <div className="start-flag">🏁</div>
              <span>START</span>
            </div>

            {/* Milestones */}
            {lifeRace.map((milestone) => (
              <MilestoneCard 
                key={milestone.id}
                milestone={milestone}
                onMouseUp={(e) => handleMilestoneMouseUp(e, milestone)}
                onTouchEnd={(e) => handleMilestoneMouseUp(e, milestone)}
              />
            ))}

            {/* Finish Line */}
            <div className="finish-line">
              <div className="finish-flag">🏆</div>
              <span>FUTURE</span>
            </div>
          </div>
        </div>

        {/* Drag Instructions */}
        <div className="drag-instructions">
          <span>💡 드래그하여 타임라인을 좌우로 스크롤하세요</span>
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
            {selectedMilestone?.date
              ? formatDate(selectedMilestone.date)
              : `${formatDate(selectedMilestone?.start)} ~ ${selectedMilestone?.end ? formatDate(selectedMilestone.end) : 'NOW'}`}
            {selectedMilestone?.isCurrent && <span className="current-badge">CURRENT</span>}
          </div>
          {selectedMilestone?.description && (
            <p className="modal-description">{selectedMilestone.description}</p>
          )}
          <div className="modal-type">
            <span className={`type-badge ${selectedMilestone?.type}`}>
              {selectedMilestone?.type === 'work' ? '💼 Work' : selectedMilestone?.type === 'education' ? '🎓 Education' : '🏷️'}
            </span>
          </div>
        </Modal>
      </main>
    </div>
  );
};

export default ExperiencePage;

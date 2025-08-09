import React from 'react';

const ProjectTabContent = ({ activeTab, selectedProject }) => {
  if (!selectedProject) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <div className="overview-section">
              <h3>프로젝트 개요</h3>
              <div className="overview-grid">
                <div className="overview-card">
                  <h4>문제 상황</h4>
                  <p>{selectedProject.overview?.problem || selectedProject.detailDescription}</p>
                </div>
                <div className="overview-card">
                  <h4>해결 방안</h4>
                  <p>{selectedProject.overview?.solution || "자동화 시스템 구축"}</p>
                </div>
                <div className="overview-card">
                  <h4>성과</h4>
                  <p>{selectedProject.overview?.impact || "업무 효율성 대폭 향상"}</p>
                </div>
              </div>
            </div>
            
            <div className="detail-challenges">
              <h3>주요 도전 과제</h3>
              <ul>
                {selectedProject.challenges?.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>
            
            <div className="detail-solutions">
              <h3>해결 방안</h3>
              <ul>
                {selectedProject.solutions?.map((solution, idx) => (
                  <li key={idx}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="tab-content">
            <div className="architecture-section">
              <h3>기술스택</h3>
              <div className="architecture-grid">
                {selectedProject.architecture ? (
                  Object.entries(selectedProject.architecture).map(([key, value]) => (
                    <div key={key} className="arch-card">
                      <h4>{
                        {
                          frontend: 'Frontend',
                          backend: 'Backend',
                          database: 'Database',
                          infrastructure: 'Infrastructure',
                          server: 'Server',
                          authentication: 'Auth',
                          design: 'Design',
                          deployment: 'Deployment',
                          maps: 'Maps',
                          db: 'Database'
                        }[key] || key
                      }</h4>
                      <p>{value}</p>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="arch-card">
                      <h4>Frontend</h4>
                      <p>Vue2 + Chart.js</p>
                    </div>
                    <div className="arch-card">
                      <h4>Backend</h4>
                      <p>Python Flask</p>
                    </div>
                    <div className="arch-card">
                      <h4>Database</h4>
                      <p>Oracle DB</p>
                    </div>
                    <div className="arch-card">
                      <h4>Infrastructure</h4>
                      <p>Azure VM</p>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="features-section">
              <h3>주요 기능</h3>
              <div className="features-grid">
                {selectedProject.features?.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{feature}</span>
                  </div>
                )) || (
                  <p>기능 정보를 추가해주세요.</p>
                )}
              </div>
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="tab-content">
            <div className="process-section">
              <h3>개발 프로세스</h3>
              <div className="process-timeline">
                {selectedProject.process?.map((step, idx) => (
                  <div key={idx} className="process-step">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                )) || (
                  <p>프로세스 정보를 추가해주세요.</p>
                )}
              </div>
            </div>
          </div>
        );

      case 'screenshots':
        return (
          <div className="tab-content">
            <div className="screenshots-section">
              <h3>스크린샷</h3>
              <div className="screenshots-grid">
                {selectedProject.screenshots?.map((screenshot, idx) => (
                  <div key={idx} className="screenshot-card">
                    <div className="screenshot-placeholder">
                      <span>📸</span>
                      <p>{screenshot.title}</p>
                    </div>
                    <h4>{screenshot.title}</h4>
                    <p>{screenshot.description}</p>
                  </div>
                )) || (
                  <p>스크린샷을 추가해주세요.</p>
                )}
              </div>
            </div>
          </div>
        );

      case 'lessons':
        return (
          <div className="tab-content">
            <div className="lessons-section">
              <h3>배운 점 & 인사이트</h3>
              <div className="lessons-grid">
                {selectedProject.lessons?.map((lesson, idx) => (
                  <div key={idx} className="lesson-item">
                    <span className="lesson-icon">💡</span>
                    <p>{lesson}</p>
                  </div>
                )) || (
                  <p>배운 점을 추가해주세요.</p>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderTabContent();
};

export default ProjectTabContent; 
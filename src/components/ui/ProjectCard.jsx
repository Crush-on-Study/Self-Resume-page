import React, { useState, useEffect } from 'react';
import Button from '../common/button';
import '../../styles/components/ProjectCard.css';

const ProjectCard = ({ 
  project, 
  onClick, 
  className = '',
  index = 0
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {
    id,
    title,
    description,
    tech,
    role,
    duration,
    overview
  } = project;

  // 이미지 캐러셀 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getCarouselImage = (projectIndex) => {
    const images = [
      "🚢", "📊", "🌱", // 첫 번째 프로젝트 이미지들
      "📈", "💹", "📉", // 두 번째 프로젝트 이미지들  
      "🏭", "♻️", "🌍"  // 세 번째 프로젝트 이미지들
    ];
    return images[projectIndex * 3 + currentImageIndex];
  };

  return (
    <div 
      className={`project-card ${className}`}
      onClick={() => onClick(project)}
    >
      <div className="project-image">
        <div className="project-carousel">
          <div className="carousel-image">
            {getCarouselImage(index)}
          </div>
        </div>
      </div>
      
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {tech.map((technology, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {technology}
            </span>
          ))}
        </div>
        
        {overview && (
          <div className="project-overview">
            <div className="overview-item">
              <strong>문제:</strong> {overview.problem}
            </div>
            <div className="overview-item">
              <strong>해결:</strong> {overview.solution}
            </div>
            <div className="overview-item">
              <strong>영향:</strong> {overview.impact}
            </div>
          </div>
        )}
        
        <div className="project-meta">
          <span className="project-role">{role}</span>
          <span className="project-duration">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 
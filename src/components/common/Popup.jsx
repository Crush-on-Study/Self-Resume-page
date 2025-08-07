import React, { useState, useEffect } from 'react';
import Button from './button';
import '../../styles/components/popup.css';

const Popup = ({ isOpen, onClose, onDontShowAgain }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // 애니메이션 완료 후 닫기
  };

  const handleDontShowAgain = () => {
    localStorage.setItem('popupDismissed', 'true');
    handleClose();
    onDontShowAgain();
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h3>💻 화면 색상 안내</h3>
          <button className="popup-close-btn" onClick={handleClose}>
            ×
          </button>
        </div>
        
        <div className="popup-body">
          <div className="popup-icon">🎨</div>
          <p>
            이 포트폴리오는 <strong>MacOS 환경</strong>에서 개발되었습니다.
          </p>
          <p>
            <strong>Windows 환경</strong>에서 보실 때 색상이 흐릿하게 보일 수 있습니다.
          </p>
          <p>
            <strong>Web</strong>에 최적화되어있고 모바일은 아직 다소 불편합니다.
          </p>
          <div className="popup-tips">
            <h4>💡 팁</h4>
            <ul>
              <li>모니터 밝기와 대비를 조정해보세요</li>
              <li>다크모드 설정을 확인해보세요</li>
              <li>브라우저 확대/축소를 조정해보세요</li>
            </ul>
          </div>
        </div>
        
        <div className="popup-footer">
          <Button 
            className="popup-btn-secondary" 
            onClick={handleDontShowAgain}
            color="#cccccc"
            speed="3s"
            thickness={1}
          >
            1일간 안보기
          </Button>
          <Button 
            className="popup-btn-primary" 
            onClick={handleClose}
            color="#ffffff"
            speed="3s"
            thickness={1}
          >
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup; 
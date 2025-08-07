import React, { useState, useEffect } from 'react';
import Button from './button';
import '../../styles/components/modal.css';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle, 
  icon, 
  iconColor, 
  children, 
  showCloseButton = true,
  showFooter = false,
  footerButtons = []
}) => {
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

  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {icon && (
            <div className="modal-icon" style={{ color: iconColor }}>
              {icon}
            </div>
          )}
          <div className="modal-title">
            <h3>{title}</h3>
            {subtitle && <p className="modal-subtitle">{subtitle}</p>}
          </div>
          {showCloseButton && (
            <button className="modal-close-btn" onClick={handleClose}>
              ×
            </button>
          )}
        </div>
        
        <div className="modal-body">
          {children}
        </div>
        
        {showFooter && footerButtons.length > 0 && (
          <div className="modal-footer">
            {footerButtons.map((button, index) => (
              <Button 
                key={index}
                onClick={button.onClick}
                color={button.color || "#ffffff"}
                speed="3s"
                thickness={1}
                className={button.className}
              >
                {button.text}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal; 
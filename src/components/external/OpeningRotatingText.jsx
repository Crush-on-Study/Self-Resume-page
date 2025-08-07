import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/external/OpeningRotatingText.css';

const OpeningRotatingText = ({ 
  texts, 
  onComplete, 
  rotationInterval = 2000,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        
        // 배경을 닫고
        setIsOpen(false);
        
        setTimeout(() => {
          // 텍스트 변경
          setCurrentIndex((prev) => {
            const nextIndex = prev + 1;
            if (nextIndex >= texts.length) {
              clearInterval(interval);
              if (onComplete) onComplete();
              return prev;
            }
            return nextIndex;
          });
          
          // 배경을 다시 열기
          setTimeout(() => {
            setIsOpen(true);
            setIsAnimating(false);
          }, 300);
        }, 300);
      }
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval, onComplete, isAnimating]);

  // 초기 애니메이션 시작
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`opening-rotating-container ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="opening-rotating-background"
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: isOpen ? 1 : 0,
            transition: { 
              duration: 0.3, 
              ease: "easeInOut" 
            }
          }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.span
            className="opening-rotating-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              y: isOpen ? 0 : 20,
              transition: { 
                duration: 0.3, 
                delay: 0.1,
                ease: "easeOut" 
              }
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            {texts[currentIndex]}
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OpeningRotatingText; 
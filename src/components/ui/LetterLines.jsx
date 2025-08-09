import React, { useEffect, useState } from 'react';
import '../../styles/components/LetterLines.css';

const LetterLines = ({
  lines = [],
  intervalMs = 1500,
  className = ''
}) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!lines.length) return;
    setVisibleCount(0);
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= lines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, intervalMs);
    return () => clearInterval(timer);
  }, [lines, intervalMs]);

  return (
    <div className={`letter-lines ${className}`.trim()}>
      {lines.map((text, idx) => (
        <p key={idx} className={`line ${idx < visibleCount ? 'visible' : ''}`}>{text}</p>
      ))}
    </div>
  );
};

export default LetterLines; 
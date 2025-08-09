import React, { useEffect, useRef, useState } from 'react';
import '../../styles/components/TimelineBar.css';

const parse = (iso) => iso ? new Date(iso) : null;
const minDate = (a, b) => (a && b ? (a < b ? a : b) : a || b);
const maxDate = (a, b) => (a && b ? (a > b ? a : b) : a || b);

const TimelineBar = ({ items = [] }) => {
  // collect all dates including 'now' for ongoing
  const now = new Date();
  const dates = items.flatMap(it => [parse(it.start), parse(it.end || (it.isCurrent ? now.toISOString().slice(0,10) : null)), parse(it.date)]).filter(Boolean);
  if (dates.length === 0) return null;
  const min = dates.reduce((acc, d) => minDate(acc, d));
  const max = dates.reduce((acc, d) => maxDate(acc, d));
  const totalMs = max - min || 1;

  const toPercent = (isoOrDate) => {
    const d = isoOrDate instanceof Date ? isoOrDate : (parse(isoOrDate) || max);
    return ((d - min) / totalMs) * 100;
  };

  // build quarterly ticks between min and max
  const buildQuarterTicks = () => {
    const ticks = [];
    const start = new Date(min.getFullYear(), min.getMonth(), 1);
    // advance to next quarter boundary (Mar, Jun, Sep, Dec)
    while (((start.getMonth() + 1) % 3) !== 0) {
      start.setMonth(start.getMonth() + 1);
    }
    const cursor = new Date(start);
    while (cursor <= max) {
      ticks.push(new Date(cursor));
      cursor.setMonth(cursor.getMonth() + 3);
    }
    return ticks;
  };
  const quarterTicks = buildQuarterTicks();

  // responsive quarter width for scrollable content
  const [quarterWidth, setQuarterWidth] = useState(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1280;
    if (w >= 1600) return 160;
    if (w >= 1200) return 140;
    if (w >= 992) return 120;
    if (w >= 768) return 100;
    return 80;
  });

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w >= 1600) setQuarterWidth(160);
      else if (w >= 1200) setQuarterWidth(140);
      else if (w >= 992) setQuarterWidth(120);
      else if (w >= 768) setQuarterWidth(100);
      else setQuarterWidth(80);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const contentWidthPx = Math.max(quarterTicks.length * quarterWidth, 600);

  // drag-to-scroll behaviors
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // speed factor
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    if (!scrollRef.current) return;
    setIsDragging(false);
    scrollRef.current.style.cursor = 'grab';
  };

  const handleTouchStart = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => endDrag();

  return (
    <div className="timeline">
      <div
        className={`timeline-scroll ${isDragging ? 'dragging' : ''}`}
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="timeline-content" style={{ width: `${contentWidthPx}px` }}>
          {/* Quarter Ticks */}
          <div className="timeline-ticks">
            {quarterTicks.map((d) => {
              const leftPct = toPercent(d);
              const yy = String(d.getFullYear() % 100);
              const mm = d.getMonth() + 1; // 1-12
              const label = `${yy}/${mm}`;
              return (
                <div key={`${d.getFullYear()}-${d.getMonth()}`} className="tick" style={{ left: `${leftPct}%` }}>
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
          <div className="timeline-bar">
            {items.map((it) => {
              const endIso = it.end || (it.isCurrent ? now.toISOString().slice(0,10) : it.start || it.date);
              const startPct = toPercent(it.start || it.date);
              const endPct = toPercent(endIso);
              const widthPct = Math.max(2, endPct - startPct || 2);
              const cls = `tl-item ${it.type || ''} ${it.isCurrent ? 'current' : ''}`.trim();
              return (
                <div key={it.id} className={cls} style={{ left: `${startPct}%`, width: `${widthPct}%` }}>
                  <span className="tl-label">{it.title}</span>
                  {it.isCurrent && <span className="now-badge">NOW</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineBar; 
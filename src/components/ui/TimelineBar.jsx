import React from 'react';
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

  const toPercent = (iso) => {
    const d = parse(iso) || max;
    return ((d - min) / totalMs) * 100;
  };

  return (
    <div className="timeline-bar">
      {items.map((it) => {
        const endIso = it.end || (it.isCurrent ? now.toISOString().slice(0,10) : it.start || it.date);
        const startPct = toPercent(it.start || it.date);
        const endPct = toPercent(endIso);
        const widthPct = Math.max(2, endPct - startPct || 2);
        const cls = `tl-item ${it.type || ''}`.trim();
        return (
          <div key={it.id} className={cls} style={{ left: `${startPct}%`, width: `${widthPct}%` }}>
            <span className="tl-label">{it.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineBar; 
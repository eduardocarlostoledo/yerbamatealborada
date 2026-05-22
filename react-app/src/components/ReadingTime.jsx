import React from 'react';
import '../css/components/reading-time.css';

const ReadingTime = ({ minutes, category = null }) => {
  if (!minutes) return null;

  const getReadingLevel = (mins) => {
    if (mins <= 3) return 'Lectura rápida';
    if (mins <= 7) return 'Lectura breve';
    if (mins <= 12) return 'Lectura completa';
    return 'Lectura profunda';
  };

  return (
    <div className="reading-time">
      <span className="reading-time__icon">📖</span>
      <span className="reading-time__text">
        {minutes} min · {getReadingLevel(minutes)}
      </span>
      {category && <span className="reading-time__category">{category}</span>}
    </div>
  );
};

export default ReadingTime;

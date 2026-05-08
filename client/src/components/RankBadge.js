import React from 'react';
import { getRank } from '../data/ranks';
import './RankBadge.css';

export default function RankBadge({ mmr = 1000, size = 'md', showMmr = false, showName = true }) {
  const rank = getRank(mmr);
  return (
    <div className={`rank-badge rb-${size} rb-${rank.id}`} style={{ '--rank-color': rank.color }}>
      <span className="rb-icon">{rank.icon}</span>
      {showName && <span className="rb-name">{rank.name}</span>}
      {showMmr  && <span className="rb-mmr">{mmr} MMR</span>}
    </div>
  );
}

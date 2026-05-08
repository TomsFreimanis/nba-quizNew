import React, { useState } from 'react';
import { ACHIEVEMENTS, ACH_CATEGORIES, TIER_COLORS } from '../data/achievements';
import './Achievements.css';

function progressOf(ach, achState, stats, collection, cardMap) {
  const s = achState[ach.id] || {};
  if (s.unlocked) return { current: ach.condition.value, max: ach.condition.value, pct: 100 };

  let current = 0;
  const { type, value, rarity } = ach.condition;

  switch (type) {
    case 'gamesPlayed':     current = stats.gamesPlayed     || 0; break;
    case 'bestScore':       current = stats.bestScore       || 0; break;
    case 'bestStreak':      current = stats.bestStreak      || 0; break;
    case 'coinsEarned':     current = stats.coinsEarned     || 0; break;
    case 'packsOpened':     current = stats.packsOpened     || 0; break;
    case 'dailyCompleted':  current = stats.dailyCompleted  || 0; break;
    case 'hardCompleted':   current = stats.hardCompleted   || 0; break;
    case 'quiz100':         current = stats.quiz100         || 0; break;
    case 'cardsOwned':      current = collection.length;          break;
    case 'rarityOwned':
      current = collection.some(c => cardMap[c.cardId]?.rarity === rarity) ? 1 : 0;
      break;
    default: break;
  }

  const pct = value ? Math.min(100, Math.round((current / value) * 100)) : 0;
  return { current, max: value || 1, pct };
}

function AchievementCard({ ach, achState, stats, collection, cardMap }) {
  const unlocked = achState[ach.id]?.unlocked;
  const { current, max, pct } = progressOf(ach, achState, stats, collection, cardMap);
  const tierColor = TIER_COLORS[ach.tier];

  return (
    <div className={`ach-card ${unlocked ? 'ach-unlocked' : 'ach-locked'}`}
      style={{ '--tc': tierColor }}>
      <div className="ach-tier-bar" style={{ background: tierColor }} />
      <div className="ach-icon-wrap">
        <span className="ach-icon">{ach.icon}</span>
        {unlocked && <span className="ach-check">✓</span>}
      </div>
      <div className="ach-body">
        <div className="ach-name">{ach.name}</div>
        <div className="ach-desc">{ach.description}</div>
        <div className="ach-progress">
          <div className="ach-bar">
            <div className="ach-fill" style={{ width: `${pct}%`, background: tierColor }} />
          </div>
          <span className="ach-prog-label">
            {unlocked
              ? <span className="ach-done-text" style={{ color: tierColor }}>Completed!</span>
              : `${Math.min(current, max).toLocaleString()} / ${max.toLocaleString()}`
            }
          </span>
        </div>
      </div>
      <div className="ach-reward" style={{ color: unlocked ? '#FFD700' : '#555' }}>
        <span className="ach-reward-icon">🪙</span>
        <span className="ach-reward-val">{ach.reward}</span>
      </div>
    </div>
  );
}

export default function Achievements({ achState, stats, collection, cardMap, onBack }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const unlockedCount = Object.values(achState).filter(a => a.unlocked).length;
  const totalReward   = ACHIEVEMENTS
    .filter(a => achState[a.id]?.unlocked)
    .reduce((s, a) => s + a.reward, 0);

  const categories = ['All', ...ACH_CATEGORIES];

  const displayed = activeCategory === 'All'
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter(a => a.category === activeCategory);

  const unlocked = displayed.filter(a => achState[a.id]?.unlocked);
  const locked   = displayed.filter(a => !achState[a.id]?.unlocked);

  return (
    <div className="achievements-page">

      {/* Header */}
      <div className="ach-header">
        <div>
          <div className="ach-eyebrow">Player Progress</div>
          <h1 className="ach-title">🏅 Achievements</h1>
          <p className="ach-subtitle">Unlock rewards by mastering the quiz</p>
        </div>
        <div className="ach-header-stats">
          <div className="ahs-item">
            <span className="ahs-val">{unlockedCount}/{ACHIEVEMENTS.length}</span>
            <span className="ahs-lbl">Unlocked</span>
          </div>
          <div className="ahs-div" />
          <div className="ahs-item">
            <span className="ahs-val" style={{color:'#FFD700'}}>🪙 {totalReward.toLocaleString()}</span>
            <span className="ahs-lbl">Earned</span>
          </div>
          <div className="ahs-overall">
            <div className="ahs-bar-wrap">
              <div className="ahs-overall-bar">
                <div className="ahs-overall-fill"
                  style={{ width: `${Math.round(unlockedCount/ACHIEVEMENTS.length*100)}%` }} />
              </div>
              <span className="ahs-pct">{Math.round(unlockedCount/ACHIEVEMENTS.length*100)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="ach-tabs">
        {categories.map(cat => {
          const catAchs  = cat === 'All' ? ACHIEVEMENTS : ACHIEVEMENTS.filter(a => a.category === cat);
          const catDone  = catAchs.filter(a => achState[a.id]?.unlocked).length;
          return (
            <button
              key={cat}
              className={`ach-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              <span className="ach-tab-count">{catDone}/{catAchs.length}</span>
            </button>
          );
        })}
      </div>

      {/* Unlocked section */}
      {unlocked.length > 0 && (
        <div className="ach-section">
          <h3 className="ach-section-title">✅ Completed ({unlocked.length})</h3>
          <div className="ach-grid">
            {unlocked.map(a => (
              <AchievementCard key={a.id} ach={a} achState={achState}
                stats={stats} collection={collection} cardMap={cardMap} />
            ))}
          </div>
        </div>
      )}

      {/* Locked section */}
      {locked.length > 0 && (
        <div className="ach-section">
          <h3 className="ach-section-title">🔒 In Progress ({locked.length})</h3>
          <div className="ach-grid">
            {locked.map(a => (
              <AchievementCard key={a.id} ach={a} achState={achState}
                stats={stats} collection={collection} cardMap={cardMap} />
            ))}
          </div>
        </div>
      )}

      <div className="ach-actions">
        <button className="btn-secondary" onClick={onBack}>← Back to Home</button>
      </div>
    </div>
  );
}

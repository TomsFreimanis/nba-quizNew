import React, { useState, useEffect } from 'react';
import { ACHIEVEMENTS }                              from '../data/achievements';
import { CARDS, CARD_MAP, RARITY_COLORS, NBA_PHOTO_URL } from '../data/cards';
import { getDailyQuests, getLevelProgress }          from '../data/quests';
import { getRank, getRankProgress }                  from '../data/ranks';
import RankBadge                                     from './RankBadge';
import './StartScreen.css';

const DIFFICULTIES = ['all', 'easy', 'medium', 'hard'];
const COUNTS       = [5, 10, 15, 20];
const DIFF_LABELS  = { all:'All', easy:'Easy', medium:'Medium', hard:'Hard' };

function loadBlitzBest() {
  try { const s = JSON.parse(localStorage.getItem('nba_blitz_hs') || '[]'); return s[0] || null; }
  catch { return null; }
}

function RewardedAdButton({ rewardedToday, onClaim }) {
  const [watching, setWatching] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleWatch = () => {
    setWatching(true);
    setCountdown(5);
    let c = 5;
    const t = setInterval(() => {
      c--;
      setCountdown(c);
      if (c <= 0) {
        clearInterval(t);
        setWatching(false);
        onClaim();
      }
    }, 1000);
  };

  if (watching) return (
    <div className="qa-btn qa-rewarded watching">
      <span className="qa-icon">📺</span>
      <span className="qa-label">Ad... {countdown}s</span>
    </div>
  );

  return (
    <button className="qa-btn qa-rewarded" onClick={handleWatch}>
      <span className="qa-icon">🎁</span>
      <span className="qa-label">+50 coins ({3 - rewardedToday} left)</span>
    </button>
  );
}

export default function StartScreen({
  coins, stats, achState, collection, playerName,
  xp = 0, dailyProgress, dust = 0, equippedBanner, rewardedToday = 0,
  myMmr = 1000,
  onChangeName, onStart, onLeaderboard, onShop,
  onCollection, onAchievements, onMystery, onBlitz, onClaimQuest, onProfile,
  onDuel, onTournament, onRewardedClaim, onRankedLeaderboard,
}) {
  const [difficulty,  setDifficulty]  = useState('all');
  const [count,       setCount]       = useState(10);
  const [category,    setCategory]    = useState('all');
  const [categories,  setCategories]  = useState([]);
  const [dailyInfo,   setDailyInfo]   = useState(null);
  const [editingName, setEditingName] = useState(!playerName);
  const [nameVal,     setNameVal]     = useState(playerName);
  const [showConfig,  setShowConfig]  = useState(false);

  const blitzBest = loadBlitzBest();

  useEffect(() => {
    fetch('/api/categories').then(r=>r.json()).then(d=>setCategories(['all',...d])).catch(()=>setCategories(['all']));
    fetch('/api/daily-challenge').then(r=>r.json()).then(setDailyInfo).catch(()=>{});
  }, []);

  const alreadyPlayedDaily = dailyInfo && localStorage.getItem(`daily_${dailyInfo.date}`) === '1';
  const accuracy = stats.totalQuestions > 0 ? Math.round((stats.totalCorrect/stats.totalQuestions)*100) : 0;
  const saveName  = () => { if (nameVal.trim()) { onChangeName(nameVal.trim()); setEditingName(false); } };

  const handleStart = () => onStart({ difficulty, count, category, isDaily:false, coinMultiplier:1 });
  const handleDailyStart = () => {
    if (!dailyInfo) return;
    if (dailyInfo.date) localStorage.setItem(`daily_${dailyInfo.date}`, '1');
    onStart({ difficulty:'all', count:10, category:'all', isDaily:true, coinMultiplier: dailyInfo.coinMultiplier || 2 });
  };

  const unlockedAchs = Object.values(achState).filter(a => a.unlocked).length;
  const ownedCards   = collection.length;
  const legendCards  = collection.filter(c => CARD_MAP[c.cardId]?.rarity === 'legendary').length;

  const showcaseCards = (() => {
    const rarityOrder = { legendary:4, epic:3, rare:2, common:1 };
    const ownedIds = [...new Set(collection.map(c => c.cardId))];
    return ownedIds.map(id => CARD_MAP[id]).filter(Boolean)
      .sort((a,b) => rarityOrder[b.rarity] - rarityOrder[a.rarity]).slice(0, 5);
  })();

  const levelInfo   = getLevelProgress(xp);
  const today       = new Date().toISOString().split('T')[0];
  const dailyQuests = getDailyQuests(today);
  const dp          = dailyProgress || {};

  const myRank     = getRank(myMmr);
  const myProgress = getRankProgress(myMmr);

  return (
    <div className="start-screen">

      {/* ── Profile Dashboard ─────────────────────────────── */}
      <div className="profile-dashboard card"
        style={equippedBanner ? { '--banner-bg': equippedBanner.gradient } : {}}>
        {equippedBanner && <div className="pd-banner-bg" style={{ background: equippedBanner.gradient }} />}
        <div className="pd-top">
          <div className="pd-left">
            <div className="pd-avatar">{playerName ? playerName.charAt(0).toUpperCase() : '?'}</div>
            <div className="pd-identity">
              {editingName ? (
                <div className="name-edit-row">
                  <input className="name-edit-input" value={nameVal}
                    onChange={e=>setNameVal(e.target.value)}
                    onKeyDown={e=>e.key==='Enter'&&saveName()}
                    placeholder="Your name…" maxLength={20} autoFocus />
                  <button className="name-save-btn" onClick={saveName}>Save</button>
                </div>
              ) : (
                <div className="name-row">
                  <span className="pd-name">{playerName || 'Anonymous'}</span>
                  <button className="edit-name-btn" onClick={()=>setEditingName(true)}>✏️</button>
                </div>
              )}
              <span className="pd-sub">{stats.gamesPlayed} games played · {accuracy}% accuracy</span>
            </div>
          </div>
          <div className="pd-coin-badge">
            <span className="pd-coin-icon">🪙</span>
            <span className="pd-coin-val">{coins.toLocaleString()}</span>
            <span className="pd-coin-lbl">coins</span>
          </div>
        </div>

        <div className="pd-stats-row">
          <div className="pd-stat">
            <span className="pds-val" style={{color:'#e63946'}}>{stats.bestScore.toLocaleString()}</span>
            <span className="pds-lbl">Best Score</span>
          </div>
          <div className="pd-stat-div"/>
          <div className="pd-stat">
            <span className="pds-val" style={{color:'#00b4d8'}}>{stats.bestStreak}</span>
            <span className="pds-lbl">Best Streak</span>
          </div>
          <div className="pd-stat-div"/>
          <div className="pd-stat cursor-pointer" onClick={onAchievements}>
            <span className="pds-val" style={{color:'#FFD700'}}>{unlockedAchs}<span className="pds-total">/{ACHIEVEMENTS.length}</span></span>
            <span className="pds-lbl">Badges</span>
          </div>
          <div className="pd-stat-div"/>
          <div className="pd-stat cursor-pointer" onClick={onCollection}>
            <span className="pds-val" style={{color:'#9B5DE5'}}>{ownedCards}<span className="pds-total">/60</span></span>
            <span className="pds-lbl">Cards</span>
          </div>
          {legendCards > 0 && <>
            <div className="pd-stat-div"/>
            <div className="pd-stat">
              <span className="pds-val" style={{color:'#FFD700'}}>⚡{legendCards}</span>
              <span className="pds-lbl">Legends</span>
            </div>
          </>}
          {blitzBest && <>
            <div className="pd-stat-div"/>
            <div className="pd-stat">
              <span className="pds-val" style={{color:'#c994ff'}}>{blitzBest.correct}</span>
              <span className="pds-lbl">Blitz Best</span>
            </div>
          </>}
          {dust > 0 && <>
            <div className="pd-stat-div"/>
            <div className="pd-stat cursor-pointer" onClick={onCollection}>
              <span className="pds-val" style={{color:'#a0e0ff'}}>{dust}</span>
              <span className="pds-lbl">Dust</span>
            </div>
          </>}
        </div>

        {/* XP / Level bar */}
        <div className="pd-xp-row">
          <div className="pd-xp-label">
            <span className="pd-level-badge">LV {levelInfo.level}</span>
            <span className="pd-level-title">{levelInfo.title}</span>
          </div>
          <div className="pd-xp-bar-wrap">
            <div className="pd-xp-bar-fill"
              style={{ width: levelInfo.isMaxed ? '100%' : `${Math.min((levelInfo.current / levelInfo.total) * 100, 100)}%` }} />
          </div>
          <span className="pd-xp-text">
            {levelInfo.isMaxed ? 'MAX' : `${levelInfo.current} / ${levelInfo.total} XP`}
          </span>
        </div>

        {/* Profile customize shortcut */}
        {onProfile && (
          <div className="pd-profile-bar">
            {equippedBanner ? (
              <span className="pd-banner-name" style={{ background: equippedBanner.gradient, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                {equippedBanner.name}
              </span>
            ) : (
              <span className="pd-banner-name pd-no-banner">No banner equipped</span>
            )}
            <button className="pd-customize-btn" onClick={onProfile}>🎨 Customize Profile</button>
          </div>
        )}
      </div>

      {/* ── Competitive Hero ──────────────────────────────── */}
      {onDuel && (
        <div className="comp-hero card" style={{ '--rank-color': myRank.color }}>
          <div className="ch-left">
            <div className="ch-eyebrow">Ranked Mode</div>
            <RankBadge mmr={myMmr} size="lg" showName showMmr />
            <div className="ch-bar-wrap">
              <div className="ch-bar-fill" style={{ width: `${myProgress.pct}%`, background: myRank.color }} />
            </div>
            <div className="ch-pts">
              {myProgress.pointsNeeded > 0
                ? `${myProgress.pointsNeeded} pts to next rank`
                : 'Max rank achieved! 👑'}
            </div>
          </div>
          <div className="ch-right">
            <button className="ch-duel-btn" onClick={onDuel}>⚔️ Find Match</button>
            {onRankedLeaderboard && (
              <button className="ch-ladder-btn" onClick={onRankedLeaderboard}>View Ladder →</button>
            )}
          </div>
        </div>
      )}

      {/* ── Mode Selector Grid ─────────────────────────────── */}
      <div className="mode-grid">

        {/* BLITZ — featured, spans full width on top */}
        <div className="mode-card mode-blitz" onClick={onBlitz}>
          <div className="mc-glow" />
          <div className="mc-content">
            <div className="mc-icon">⚡</div>
            <div className="mc-body">
              <div className="mc-eyebrow">FEATURED MODE</div>
              <div className="mc-title">BLITZ 60</div>
              <div className="mc-desc">60-second sprint · +5s correct · −5s wrong · Combo ×3 · Local leaderboard</div>
              {blitzBest && (
                <div className="mc-record">
                  🏆 Personal best: <strong>{blitzBest.correct} correct</strong> · 🪙 {blitzBest.coins.toLocaleString()}
                </div>
              )}
            </div>
            <button className="mc-btn mc-btn-blitz" onClick={e=>{e.stopPropagation();onBlitz();}}>
              Play →
            </button>
          </div>
        </div>

        {/* Daily Challenge */}
        <div className={`mode-card mode-daily ${alreadyPlayedDaily?'mode-daily-done':''}`} onClick={handleDailyStart}>
          <div className="mc-content">
            <div className="mc-icon">📅</div>
            <div className="mc-body">
              <div className="mc-title">Daily Challenge</div>
              <div className="mc-desc">10 questions · Same for everyone · <span style={{color:'#FFD700'}}>×2 coins</span></div>
              {alreadyPlayedDaily && <div className="mc-done-tag">✓ Completed today</div>}
            </div>
            <button className={`mc-btn ${alreadyPlayedDaily?'btn-secondary':'btn-gold'}`}
              onClick={e=>{e.stopPropagation();handleDailyStart();}} disabled={!dailyInfo}>
              {alreadyPlayedDaily ? 'Replay' : 'Play →'}
            </button>
          </div>
        </div>

        {/* Mystery Player */}
        <div className="mode-card mode-mystery" onClick={onMystery}>
          <div className="mc-content">
            <div className="mc-icon">🕵️</div>
            <div className="mc-body">
              <div className="mc-title">Mystery Player</div>
              <div className="mc-desc">Guess the player from progressive hints · Up to 500 🪙</div>
            </div>
            <button className="mc-btn btn-mystery" onClick={e=>{e.stopPropagation();onMystery();}}>Play →</button>
          </div>
        </div>

        {/* 1v1 Duel */}
        {onDuel && (
          <div className="mode-card mode-duel" onClick={onDuel}>
            <div className="mc-content">
              <div className="mc-icon">⚔️</div>
              <div className="mc-body">
                <div className="mc-eyebrow">LIVE MULTIPLAYER</div>
                <div className="mc-title">1v1 Duel</div>
                <div className="mc-desc">Race a real opponent · Same questions · Winner earns <span style={{color:'#FFD700'}}>350 coins</span></div>
              </div>
              <button className="mc-btn mc-btn-duel" onClick={e=>{e.stopPropagation();onDuel();}}>Find Match →</button>
            </div>
          </div>
        )}

        {/* Tournament */}
        {onTournament && (
          <div className="mode-card mode-tournament" onClick={onTournament}>
            <div className="mc-content">
              <div className="mc-icon">🏆</div>
              <div className="mc-body">
                <div className="mc-eyebrow">WEEKLY EVENT</div>
                <div className="mc-title">Tournament</div>
                <div className="mc-desc">Entry 150 coins · Top 3 win <span style={{color:'#FFD700'}}>5000 / 2000 / 1000 coins</span></div>
              </div>
              <button className="mc-btn mc-btn-tournament" onClick={e=>{e.stopPropagation();onTournament();}}>View →</button>
            </div>
          </div>
        )}

        {/* Custom Quiz — expand on click */}
        <div className={`mode-card mode-custom ${showConfig?'mode-custom-open':''}`}>
          <div className="mc-content" onClick={()=>!showConfig && setShowConfig(true)}>
            <div className="mc-icon">🎯</div>
            <div className="mc-body">
              <div className="mc-title">Custom Quiz</div>
              <div className="mc-desc">Pick difficulty, count & category</div>
            </div>
            {!showConfig && <button className="mc-btn btn-primary" onClick={e=>{e.stopPropagation();setShowConfig(true);}}>Configure →</button>}
          </div>

          {showConfig && (
            <div className="config-panel">
              <div className="config-row">
                <label className="config-label">Difficulty</label>
                <div className="option-row">
                  {DIFFICULTIES.map(d=>(
                    <button key={d} className={`opt-btn ${difficulty===d?'selected':''} diff-opt-${d}`}
                      onClick={()=>setDifficulty(d)}>{DIFF_LABELS[d]}</button>
                  ))}
                </div>
              </div>
              <div className="config-row">
                <label className="config-label">Questions</label>
                <div className="option-row">
                  {COUNTS.map(c=>(
                    <button key={c} className={`opt-btn ${count===c?'selected':''}`}
                      onClick={()=>setCount(c)}>{c}</button>
                  ))}
                </div>
              </div>
              <div className="config-row">
                <label className="config-label">Category</label>
                <select className="cat-select" value={category} onChange={e=>setCategory(e.target.value)}>
                  {categories.map(c=><option key={c} value={c}>{c==='all'?'All Categories':c}</option>)}
                </select>
              </div>
              <div className="config-actions">
                <button className="btn-primary big-start-btn" onClick={handleStart}>Start Quiz →</button>
                <button className="btn-secondary" onClick={()=>setShowConfig(false)}>Cancel</button>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* ── Quick Actions ──────────────────────────────────── */}
      <div className="quick-actions">
        <button className="qa-btn" onClick={onShop}>
          <span className="qa-icon">🛒</span><span className="qa-label">Shop</span>
        </button>
        <button className="qa-btn" onClick={onCollection}>
          <span className="qa-icon">🃏</span><span className="qa-label">Cards</span>
        </button>
        <button className="qa-btn" onClick={onAchievements}>
          <span className="qa-icon">🏅</span><span className="qa-label">Badges</span>
        </button>
        <button className="qa-btn" onClick={onLeaderboard}>
          <span className="qa-icon">🏆</span><span className="qa-label">Board</span>
        </button>
        {onRewardedClaim && rewardedToday < 3 && (
          <RewardedAdButton rewardedToday={rewardedToday} onClaim={onRewardedClaim} />
        )}
      </div>

      {/* ── Card Showcase ──────────────────────────────────── */}
      {showcaseCards.length > 0 && (
        <div className="card-showcase card" onClick={onCollection}>
          <div className="cs-header">
            <span className="cs-title">🃏 Your Best Cards</span>
            <span className="cs-cta">View all {ownedCards} →</span>
          </div>
          <div className="cs-row">
            {showcaseCards.map(card => {
              const photo = NBA_PHOTO_URL(card.nbaId);
              return (
                <div key={card.id} className="cs-mini-card"
                  style={{ background:`linear-gradient(160deg,${card.c1},${card.c2})`, borderColor:RARITY_COLORS[card.rarity] }}>
                  {photo && <img className="csmini-photo" src={photo} alt={card.name}
                    onError={e=>{e.target.style.display='none';}} />}
                  <div className="csmini-jersey" style={{color:RARITY_COLORS[card.rarity]}}>#{card.jersey}</div>
                  <div className="csmini-overlay">
                    <div className="csmini-name">{card.name.split(' ').slice(-1)[0]}</div>
                    <div className="csmini-rarity" style={{color:RARITY_COLORS[card.rarity]}}>{card.rarity}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Daily Quests ───────────────────────────────────── */}
      <div className="daily-quests card">
        <div className="dq-header">
          <span className="dq-title">📋 Daily Quests</span>
          <span className="dq-reset">Resets at midnight</span>
        </div>
        <div className="dq-list">
          {dailyQuests.map(quest => {
            const progress = Math.min(dp[quest.trackKey] || 0, quest.target);
            const pct      = Math.min((progress / quest.target) * 100, 100);
            const complete = progress >= quest.target;
            const claimed  = (dp.claimed || []).includes(quest.id);
            return (
              <div key={quest.id} className={`dq-item ${complete ? 'dq-complete' : ''} ${claimed ? 'dq-claimed' : ''}`}>
                <span className="dq-icon">{quest.icon}</span>
                <div className="dq-body">
                  <div className="dq-label">{quest.label}</div>
                  <div className="dq-bar-wrap">
                    <div className="dq-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="dq-progress-text">{progress} / {quest.target}</div>
                </div>
                <div className="dq-reward">
                  {claimed ? (
                    <span className="dq-claimed-tag">✓ Claimed</span>
                  ) : complete ? (
                    <button className="dq-claim-btn" onClick={() => onClaimQuest && onClaimQuest(quest.id, quest.reward)}>
                      🪙 {quest.reward}
                    </button>
                  ) : (
                    <span className="dq-reward-val">🪙 {quest.reward}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Stats snapshot ─────────────────────────────────── */}
      <div className="stats-strip">
        <div className="ss-item">
          <span className="ss-icon">📊</span>
          <div className="ss-text">
            <span className="ss-val">{stats.totalCorrect.toLocaleString()}</span>
            <span className="ss-lbl">Total correct answers</span>
          </div>
        </div>
        <div className="ss-div"/>
        <div className="ss-item">
          <span className="ss-icon">🔥</span>
          <div className="ss-text">
            <span className="ss-val">{stats.bestStreak}</span>
            <span className="ss-lbl">Best answer streak</span>
          </div>
        </div>
        <div className="ss-div"/>
        <div className="ss-item">
          <span className="ss-icon">🎮</span>
          <div className="ss-text">
            <span className="ss-val">{stats.gamesPlayed}</span>
            <span className="ss-lbl">Games played</span>
          </div>
        </div>
      </div>

    </div>
  );
}

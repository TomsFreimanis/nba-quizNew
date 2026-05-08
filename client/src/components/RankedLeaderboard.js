import React, { useState, useEffect } from 'react';
import { getRank } from '../data/ranks';
import RankBadge from './RankBadge';
import './RankedLeaderboard.css';

const API = (process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/$/, '');

export default function RankedLeaderboard({ myUsername, onBack, onDuel }) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/ranked-leaderboard?limit=100`)
      .then(r => r.json())
      .then(d => { setPlayers(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const myRank = players.findIndex(p => p.username === myUsername) + 1;

  return (
    <div className="rl-root">
      <div className="rl-header">
        <button className="rl-back" onClick={onBack}>← Back</button>
        <div>
          <div className="rl-eyebrow">Season 1</div>
          <h1 className="rl-title">⚔️ Ranked Ladder</h1>
          <div className="rl-subtitle">MMR-based · Updated after every duel</div>
        </div>
        {onDuel && <button className="rl-duel-btn" onClick={onDuel}>Find Match →</button>}
      </div>

      {myRank > 0 && (
        <div className="rl-myrank">
          <span className="rlm-label">Your rank</span>
          <span className="rlm-rank">#{myRank}</span>
          <span className="rlm-out">of {players.length} ranked players</span>
        </div>
      )}

      <div className="rl-table-header">
        <span className="rlt-rank">Rank</span>
        <span className="rlt-player">Player</span>
        <span className="rlt-mmr">MMR</span>
        <span className="rlt-record">W / L</span>
        <span className="rlt-wr">Win%</span>
        <span className="rlt-streak">Streak</span>
      </div>

      {loading && <div className="rl-loading">Loading ladder…</div>}

      {!loading && players.length === 0 && (
        <div className="rl-empty">
          <div className="rl-empty-icon">⚔️</div>
          <div>No ranked players yet.</div>
          <div className="rl-empty-sub">Be the first to climb the ladder!</div>
        </div>
      )}

      <div className="rl-list">
        {players.map((p, i) => {
          const rank     = getRank(p.mmr);
          const isMe     = p.username === myUsername;
          const isTop3   = i < 3;
          const topIcons = ['🥇','🥈','🥉'];
          return (
            <div key={p.username} className={`rl-row ${isMe ? 'rl-me' : ''} ${isTop3 ? 'rl-top3' : ''}`}
              style={isMe ? { '--rank-color': rank.color } : {}}>
              <span className="rl-pos" style={isTop3 ? { color: rank.color } : {}}>
                {isTop3 ? topIcons[i] : `#${i + 1}`}
              </span>
              <span className="rl-player">
                {p.avatar
                  ? <img className="rl-avatar-img" src={p.avatar} alt="" referrerPolicy="no-referrer" />
                  : <span className="rl-avatar" style={{ background: rank.bg }}>{p.username.charAt(0).toUpperCase()}</span>
                }
                <span className="rl-name">{p.username}{isMe ? ' (You)' : ''}</span>
                <RankBadge mmr={p.mmr} size="sm" showName />
              </span>
              <span className="rl-mmr" style={{ color: rank.color }}>{p.mmr}</span>
              <span className="rl-record">{p.wins}W / {p.losses}L</span>
              <span className="rl-wr">{p.winRate}%</span>
              <span className="rl-streak">{p.winStreak > 1 ? `🔥${p.winStreak}` : p.winStreak === 1 ? '1' : '-'}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

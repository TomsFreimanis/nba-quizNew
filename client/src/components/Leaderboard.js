import React, { useState, useEffect, useCallback } from 'react';
import './Leaderboard.css';

const PERIODS = [
  { key: 'alltime', label: 'All Time',  icon: '∞'  },
  { key: 'monthly', label: 'Monthly',   icon: '📆' },
  { key: 'weekly',  label: 'Weekly',    icon: '7️⃣' },
  { key: 'daily',   label: 'Today',     icon: '🌅' },
];

const MEDALS = ['🥇', '🥈', '🥉'];

function AccuracyBar({ correct, total }) {
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const color = pct >= 80 ? '#4cc977' : pct >= 60 ? '#ffa500' : '#e63946';
  return (
    <div className="acc-bar-wrap">
      <div className="acc-bar"><div className="acc-fill" style={{ width: `${pct}%`, background: color }} /></div>
      <span className="acc-label" style={{ color }}>{pct}%</span>
    </div>
  );
}

export default function Leaderboard({ onBack }) {
  const [period, setPeriod] = useState('alltime');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counts, setCounts]   = useState({});

  const fetchBoard = useCallback(async (p) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/leaderboard?period=${p}&limit=20`);
      const data = await res.json();
      setEntries(data);
    } catch {
      setEntries([]);
    }
    setLoading(false);
  }, []);

  // Pre-fetch counts for badges
  useEffect(() => {
    Promise.all(PERIODS.map(p =>
      fetch(`/api/leaderboard?period=${p.key}&limit=100`)
        .then(r => r.json())
        .then(d => [p.key, d.length])
        .catch(() => [p.key, 0])
    )).then(results => setCounts(Object.fromEntries(results)));
  }, []);

  useEffect(() => { fetchBoard(period); }, [period, fetchBoard]);

  const periodLabel = PERIODS.find(p => p.key === period)?.label ?? '';

  return (
    <div className="leaderboard">

      {/* Header */}
      <div className="lb-header">
        <div className="lb-header-text">
          <div className="lb-eyebrow">Rankings</div>
          <h1 className="lb-title">🏆 Leaderboard</h1>
          <p className="lb-subtitle">NBA Quiz Champions</p>
        </div>
      </div>

      {/* Period tabs */}
      <div className="period-tabs">
        {PERIODS.map(p => (
          <button
            key={p.key}
            className={`period-tab ${period === p.key ? 'active' : ''}`}
            onClick={() => setPeriod(p.key)}
          >
            <span className="tab-icon">{p.icon}</span>
            <span className="tab-label">{p.label}</span>
            {counts[p.key] > 0 && <span className="tab-count">{counts[p.key]}</span>}
          </button>
        ))}
      </div>

      {/* Board */}
      <div className="lb-board card">
        <div className="lb-board-header">
          <span className="lbh-period">{periodLabel} Top 20</span>
          <button className="refresh-btn" onClick={() => fetchBoard(period)} title="Refresh">↻</button>
        </div>

        {loading ? (
          <div className="lb-state">
            <div className="loading-spinner" />
            <p>Loading rankings…</p>
          </div>
        ) : entries.length === 0 ? (
          <div className="lb-state">
            <span className="lb-empty-icon">📭</span>
            <p>No scores yet for this period.</p>
            <p className="lb-empty-hint">Play a quiz to be the first!</p>
          </div>
        ) : (
          <>
            {/* Top 3 podium */}
            {period === 'alltime' && entries.length >= 3 && (
              <div className="podium">
                {[entries[1], entries[0], entries[2]].map((e, podiumIdx) => {
                  const realRank = podiumIdx === 0 ? 2 : podiumIdx === 1 ? 1 : 3;
                  const heights  = [110, 140, 90];
                  return (
                    <div key={e.name + realRank} className={`podium-slot p-${realRank}`} style={{ height: heights[podiumIdx] }}>
                      <span className="podium-medal">{MEDALS[realRank - 1]}</span>
                      <span className="podium-name">{e.name}</span>
                      <span className="podium-score">{e.score.toLocaleString()}</span>
                      <div className="podium-base" style={{ height: heights[podiumIdx] }}>
                        <span className="podium-rank">#{realRank}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Full table */}
            <table className="lb-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Player</th>
                  <th>Score</th>
                  <th>Accuracy</th>
                  <th>Mode</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((e, i) => (
                  <tr key={i} className={i < 3 ? `top-${i + 1}` : ''}>
                    <td className="rank-cell">
                      {i < 3
                        ? <span className="medal-icon">{MEDALS[i]}</span>
                        : <span className="rank-num">#{e.rank}</span>
                      }
                    </td>
                    <td className="name-cell">
                      <span className="player-name">{e.name}</span>
                    </td>
                    <td className="score-cell">{e.score.toLocaleString()}</td>
                    <td className="acc-cell">
                      {e.correct != null
                        ? <AccuracyBar correct={e.correct} total={e.total} />
                        : <span className="no-data">—</span>
                      }
                    </td>
                    <td className="diff-cell">
                      {e.difficulty && e.difficulty !== 'all'
                        ? <span className={`badge badge-${e.difficulty}`}>{e.difficulty}</span>
                        : <span className="diff-all">All</span>
                      }
                    </td>
                    <td className="date-cell">{e.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>

      <div className="lb-actions">
        <button className="btn-secondary" onClick={onBack}>← Back to Home</button>
      </div>
    </div>
  );
}

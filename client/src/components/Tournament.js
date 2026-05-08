import React, { useState, useEffect } from 'react';
import './Tournament.css';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const PRIZES = [5000, 2000, 1000];
const PRIZE_COLORS = ['#FFD700', '#C0C0C0', '#CD7F32'];
const PRIZE_ICONS  = ['🥇', '🥈', '🥉'];

export default function Tournament({ username, coins, onEnter, onBack, isEntered, onStart }) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState('');

  const fetchTournament = () => {
    setLoading(true);
    fetch(`${API}/api/tournament`)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => { setError('Could not load tournament'); setLoading(false); });
  };

  useEffect(() => { fetchTournament(); }, []);

  const handleEnter = () => {
    if (coins < 150) return;
    fetch(`${API}/api/tournament/enter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    }).then(() => {
      onEnter();
      fetchTournament();
    }).catch(() => {});
  };

  const myRank = data?.entries.findIndex(e => e.username === username) + 1 || 0;
  const myPrize = myRank >= 1 && myRank <= 3 ? PRIZES[myRank - 1] : 0;

  return (
    <div className="tournament">
      <div className="tourn-header">
        <button className="tourn-back" onClick={onBack}>← Back</button>
        <div>
          <div className="tourn-eyebrow">Weekly Event</div>
          <h1 className="tourn-title">🏆 Tournament</h1>
          {data && <div className="tourn-week">{data.weekKey}</div>}
        </div>
        <div className="tourn-balance">
          <span className="tb-label">Balance</span>
          <span className="tb-coins">🪙 {coins.toLocaleString()}</span>
        </div>
      </div>

      {/* Prize pool */}
      <div className="tourn-prizes">
        {PRIZES.map((p, i) => (
          <div key={i} className="tp-item" style={{ borderColor: PRIZE_COLORS[i] + '55' }}>
            <span className="tp-icon">{PRIZE_ICONS[i]}</span>
            <span className="tp-rank">#{i + 1}</span>
            <span className="tp-coins" style={{ color: PRIZE_COLORS[i] }}>+{p.toLocaleString()} 🪙</span>
          </div>
        ))}
      </div>

      {/* Your status */}
      {isEntered ? (
        <div className="tourn-status entered">
          <div className="ts-left">
            <div className="ts-label">Your rank this week</div>
            <div className="ts-rank" style={{ color: myRank <= 3 ? PRIZE_COLORS[myRank - 1] : '#fff' }}>
              {myRank > 0 ? `#${myRank}` : 'Not on board yet'}
            </div>
            {myPrize > 0 && <div className="ts-winning">Winning {myPrize.toLocaleString()} 🪙!</div>}
          </div>
          <button className="tourn-play-btn" onClick={onStart}>
            Play Hard Quiz →
          </button>
        </div>
      ) : (
        <div className="tourn-status not-entered">
          <div className="ts-info">
            <div className="ts-label">Entry fee</div>
            <div className="ts-entry-fee">150 🪙</div>
            <div className="ts-desc">Your best hard quiz score this week counts. Top 3 win coins.</div>
          </div>
          <button
            className={`tourn-enter-btn ${coins < 150 ? 'disabled' : ''}`}
            onClick={handleEnter}
            disabled={coins < 150}
          >
            {coins < 150 ? 'Need 150 coins' : 'Enter Tournament →'}
          </button>
        </div>
      )}

      {/* Leaderboard */}
      <div className="tourn-board">
        <h3 className="tb-title">This Week's Standings</h3>
        {loading && <div className="tourn-loading">Loading…</div>}
        {error   && <div className="tourn-error">{error}</div>}
        {!loading && data && data.entries.length === 0 && (
          <div className="tourn-empty">No entries yet — be the first!</div>
        )}
        {!loading && data && data.entries.length > 0 && (
          <div className="tourn-list">
            {data.entries.map((e, i) => {
              const isMe = e.username === username;
              const hasPrize = i < 3;
              return (
                <div key={e.username} className={`tl-row ${isMe ? 'tl-me' : ''} ${hasPrize ? 'tl-prize' : ''}`}>
                  <span className="tl-rank" style={hasPrize ? { color: PRIZE_COLORS[i] } : {}}>
                    {hasPrize ? PRIZE_ICONS[i] : `#${i + 1}`}
                  </span>
                  <span className="tl-name">{e.username}{isMe ? ' (You)' : ''}</span>
                  <span className="tl-score">{e.score.toLocaleString()}</span>
                  {hasPrize && <span className="tl-prize" style={{ color: PRIZE_COLORS[i] }}>+{PRIZES[i].toLocaleString()} 🪙</span>}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

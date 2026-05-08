import React, { useState, useCallback } from 'react';
import './Results.css';

const API = (process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/$/, '');

function getRank(pct) {
  if (pct >= 90) return { label: 'NBA Legend',    icon: '🏆', color: '#ffd700' };
  if (pct >= 75) return { label: 'All-Star',       icon: '⭐', color: '#e63946' };
  if (pct >= 60) return { label: 'Starter',        icon: '🏀', color: '#4cc977' };
  if (pct >= 40) return { label: 'Bench Player',   icon: '📋', color: '#ffa500' };
  return              { label: 'Rookie',           icon: '🌱', color: '#888' };
}

export default function Results({ result, playerName, onRestart, onLeaderboard }) {
  const [nameInput,  setNameInput]  = useState(playerName || '');
  const [submitted,  setSubmitted]  = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [rank,       setRank]       = useState(null);
  const [showReview, setShowReview] = useState(false);
  const [shareDone,  setShareDone]  = useState(false);

  const handleShare = useCallback(() => {
    const rankEmoji = tierInfo.icon;
    const txt = [
      `${rankEmoji} NBA Quiz — ${tierInfo.label}`,
      `Score: ${score.toLocaleString()} pts  |  ${correct}/${total} correct (${pct}%)`,
      `Best Streak: ${bestStreak}  |  Coins earned: +${((coinsEarned || 0) + (perfectBonus || 0)).toLocaleString()} 🪙`,
      config.isDaily ? '📅 Daily Challenge' : `Difficulty: ${config.difficulty}`,
      '🏀 Play at NBA Quiz',
    ].join('\n');

    if (navigator.share) {
      navigator.share({ title: 'NBA Quiz Result', text: txt }).catch(() => {});
    } else {
      navigator.clipboard.writeText(txt).then(() => {
        setShareDone(true);
        setTimeout(() => setShareDone(false), 2000);
      }).catch(() => {});
    }
  }, []); // eslint-disable-line

  const { score, coinsEarned, total, correct, bestStreak, answers, questions, config, perfectBonus } = result;
  const wrong   = answers.filter(a => !a.correct && !a.skipped && !a.oracleUsed).length;
  const skipped = answers.filter(a => a.skipped).length;
  const pct     = Math.round((correct / total) * 100);
  const tierInfo = getRank(pct);

  const handleSubmit = async () => {
    if (!nameInput.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch(`${API}/api/score`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameInput.trim(), score, correct, total, difficulty: config.difficulty }),
      });
      const data = await res.json();
      setRank(data.rank);
    } catch { /* offline — still show success */ }
    setSubmitted(true);
    setSubmitting(false);
  };

  // Coin breakdown
  const coinBreakdown = answers.map((ans, i) => {
    const q = questions[i];
    if (!q) return null;
    const base        = ans.correct ? ({ easy: 50, medium: 100, hard: 150 }[q.difficulty] || 75) : 0;
    const timeBonus   = ans.correct ? '~time bonus' : 0;
    return { ...ans, q, base };
  }).filter(Boolean);

  return (
    <div className="results">

      {/* ── Hero card ─────────────────────────────────── */}
      <div className="result-hero card">
        <div className="hero-top">
          <div className="tier-badge" style={{ color: tierInfo.color, borderColor: tierInfo.color }}>
            <span>{tierInfo.icon}</span> {tierInfo.label}
          </div>
          {config.isDaily && <div className="daily-badge">📅 Daily Challenge</div>}
        </div>

        <div className="hero-stats-row">
          <div className="circle-wrap" style={{ '--pct': pct }}>
            <svg className="ring" viewBox="0 0 100 100">
              <circle className="ring-bg" cx="50" cy="50" r="40" />
              <circle
                className="ring-fill"
                cx="50" cy="50" r="40"
                strokeDasharray={`${pct * 2.513} 251.3`}
                style={{ stroke: tierInfo.color }}
              />
            </svg>
            <div className="ring-inner">
              <span className="ring-pct">{pct}%</span>
              <span className="ring-sub">accuracy</span>
            </div>
          </div>

          <div className="hero-numbers">
            <div className="hero-num">
              <span className="hn-val" style={{ color: '#4cc977' }}>{correct}</span>
              <span className="hn-lbl">Correct</span>
            </div>
            <div className="hero-num">
              <span className="hn-val" style={{ color: '#e63946' }}>{wrong}</span>
              <span className="hn-lbl">Wrong</span>
            </div>
            {skipped > 0 && (
              <div className="hero-num">
                <span className="hn-val" style={{ color: '#ffa500' }}>{skipped}</span>
                <span className="hn-lbl">Skipped</span>
              </div>
            )}
            <div className="hero-num">
              <span className="hn-val" style={{ color: '#ffd700' }}>{score.toLocaleString()}</span>
              <span className="hn-lbl">Points</span>
            </div>
            <div className="hero-num">
              <span className="hn-val" style={{ color: '#00b4d8' }}>{bestStreak}</span>
              <span className="hn-lbl">Best Streak</span>
            </div>
          </div>
        </div>

        {/* Perfect game banner */}
        {perfectBonus > 0 && (
          <div className="perfect-game-banner">
            <span className="pgb-icon">🏆</span>
            <div className="pgb-text">
              <span className="pgb-title">PERFECT GAME!</span>
              <span className="pgb-sub">Flawless hard quiz bonus</span>
            </div>
            <span className="pgb-coins">+500 🪙</span>
          </div>
        )}

        {/* Coin summary */}
        <div className="coin-summary">
          <div className="coin-summary-inner">
            <span className="cs-icon">🪙</span>
            <div className="cs-text">
              <span className="cs-amount">+{((coinsEarned || 0) + (perfectBonus || 0)).toLocaleString()} coins earned</span>
              {config.isDaily && <span className="cs-bonus"> (×2 Daily bonus!)</span>}
              {perfectBonus > 0 && <span className="cs-bonus"> (+500 perfect bonus!)</span>}
            </div>
          </div>
        </div>
      </div>

      {/* ── Submit score ────────────────────────────── */}
      {!submitted ? (
        <div className="submit-card card">
          <h3 className="submit-title">🏅 Submit to Leaderboard</h3>
          <div className="submit-row">
            <input
              className="name-input"
              type="text"
              placeholder="Enter your player name…"
              value={nameInput}
              maxLength={20}
              onChange={e => setNameInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            />
            <button className="btn-primary" onClick={handleSubmit} disabled={!nameInput.trim() || submitting}>
              {submitting ? 'Saving…' : 'Submit'}
            </button>
          </div>
        </div>
      ) : (
        <div className="submit-success card">
          <span className="ss-icon">🎉</span>
          <div>
            <p className="ss-main">Score submitted!</p>
            {rank && <p className="ss-rank">You ranked <strong>#{rank}</strong> all-time</p>}
          </div>
        </div>
      )}

      {/* ── Actions ─────────────────────────────────── */}
      <div className="result-actions">
        <button className="btn-primary"   onClick={onRestart}>Play Again</button>
        <button className="btn-secondary" onClick={onLeaderboard}>Leaderboard</button>
        <button className="btn-share"     onClick={handleShare}>
          {shareDone ? '✓ Copied!' : '📤 Share Result'}
        </button>
        <button className="btn-ghost"     onClick={() => setShowReview(r => !r)}>
          {showReview ? 'Hide Review' : 'Review Answers'}
        </button>
      </div>

      {/* ── Answer review ───────────────────────────── */}
      {showReview && (
        <div className="review-section">
          <h2 className="review-title">Answer Review</h2>
          <div className="review-list">
            {questions.map((q, idx) => {
              const ans = answers[idx] || {};
              const isCorrect = ans.correct;
              const isSkipped = ans.skipped;
              const isOracle  = ans.oracleUsed;
              const isTimedOut = ans.timedOut;
              return (
                <div key={q.id} className={`review-item card ${isCorrect ? 'ri-correct' : isSkipped ? 'ri-skipped' : 'ri-wrong'}`}>
                  <div className="ri-header">
                    <span className={`ri-num ${isCorrect ? 'n-correct' : isSkipped ? 'n-skipped' : 'n-wrong'}`}>{idx + 1}</span>
                    <span className={`badge badge-${q.difficulty}`}>{q.difficulty}</span>
                    <span className="ri-cat">{q.category}</span>
                    <span className="ri-result-icon">
                      {isCorrect ? '✓' : isTimedOut ? '⏱' : isSkipped ? '⏭' : isOracle ? '🔮' : '✗'}
                    </span>
                  </div>
                  <p className="ri-q">{q.question}</p>
                  <div className="ri-answers">
                    {ans.selected && ans.selected !== q.answer && !isOracle && (
                      <div className="ri-ans wrong-ans"><span>Your answer:</span><span>{ans.selected}</span></div>
                    )}
                    {isTimedOut && <div className="ri-ans wrong-ans"><span>Result:</span><span>Time ran out</span></div>}
                    {isSkipped  && <div className="ri-ans skip-ans"><span>Result:</span><span>Skipped via power-up</span></div>}
                    {isOracle   && <div className="ri-ans oracle-ans"><span>Result:</span><span>Oracle revealed — no points</span></div>}
                    <div className="ri-ans correct-ans"><span>Correct answer:</span><span>{q.answer}</span></div>
                  </div>
                  <p className="ri-expl">{q.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

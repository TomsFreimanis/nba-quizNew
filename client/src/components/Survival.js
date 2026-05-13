import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Survival.css';

const API = (process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/$/, '');
const QUESTION_TIME = 15;
const MAX_LIVES = 3;
const HS_KEY = 'nba_survival_hs';

const MULTIPLIERS = [
  { min: 10, mult: 3.0, label: '×3', desc: 'INSANE!',  color: '#FFD700', bg: 'rgba(255,215,0,0.15)' },
  { min: 6,  mult: 2.0, label: '×2', desc: 'HOT!',     color: '#e63946', bg: 'rgba(230,57,70,0.15)' },
  { min: 3,  mult: 1.5, label: '×1.5', desc: 'STREAK', color: '#ffa500', bg: 'rgba(255,165,0,0.12)' },
];

const MILESTONES = [5, 10, 20, 30, 50];
const MILESTONE_BONUS = { 5: 50, 10: 150, 20: 300, 30: 500, 50: 1000 };

function getMult(streak) {
  return MULTIPLIERS.find(m => streak >= m.min) || { mult: 1, label: '×1', desc: null, color: '#aaa', bg: 'transparent' };
}

function loadHS() {
  try { return parseInt(localStorage.getItem(HS_KEY) || '0', 10); } catch { return 0; }
}
function saveHS(n) {
  const current = loadHS();
  if (n > current) localStorage.setItem(HS_KEY, n);
}

export default function Survival({ onBack, onCoinsEarned }) {
  const [phase,      setPhase]      = useState('idle');
  const [questions,  setQuestions]  = useState([]);
  const [qIdx,       setQIdx]       = useState(0);
  const [lives,      setLives]      = useState(MAX_LIVES);
  const [streak,     setStreak]     = useState(0);
  const [score,      setScore]      = useState(0);
  const [coins,      setCoins]      = useState(0);
  const [xp,         setXp]         = useState(0);
  const [selected,   setSelected]   = useState(null);
  const [revealed,   setRevealed]   = useState(false);
  const [timeLeft,   setTimeLeft]   = useState(QUESTION_TIME);
  const [highScore,  setHighScore]  = useState(loadHS);
  const [lostLife,   setLostLife]   = useState(false);
  const [floatCoins, setFloatCoins] = useState(null); // { amount, id }
  const [milestone,  setMilestone]  = useState(null); // score milestone hit
  const timerRef   = useRef(null);
  const lockRef    = useRef(false);
  const floatIdRef = useRef(0);

  const showFloat = useCallback((amount, color = '#FFD700') => {
    const id = ++floatIdRef.current;
    setFloatCoins({ amount, color, id });
    setTimeout(() => setFloatCoins(f => f?.id === id ? null : f), 1000);
  }, []);

  const endGame = useCallback((finalScore, finalCoins, finalXp) => {
    clearInterval(timerRef.current);
    saveHS(finalScore);
    setHighScore(h => Math.max(h, finalScore));
    if (finalCoins > 0) onCoinsEarned(finalCoins, finalScore);
    setPhase('dead');
  }, [onCoinsEarned]);

  const nextQuestion = useCallback((newQIdx, newLives, newScore, newCoins, newXp, newStreak, allQuestions) => {
    if (newQIdx >= allQuestions.length || newLives <= 0) {
      endGame(newScore, newCoins, newXp);
      return;
    }
    // Milestone check
    const hit = MILESTONES.find(m => m === newScore);
    if (hit) {
      setMilestone(hit);
      setTimeout(() => setMilestone(null), 2000);
    }

    setQIdx(newQIdx);
    setSelected(null);
    setRevealed(false);
    setTimeLeft(QUESTION_TIME);
    lockRef.current = false;
    clearInterval(timerRef.current);
    let t = QUESTION_TIME;
    timerRef.current = setInterval(() => {
      t--;
      setTimeLeft(t);
      if (t <= 0) {
        clearInterval(timerRef.current);
        if (lockRef.current) return;
        lockRef.current = true;
        const newL = newLives - 1;
        setLives(newL);
        setStreak(0);
        setLostLife(true);
        setTimeout(() => setLostLife(false), 600);
        setRevealed(true);
        setTimeout(() => {
          if (newL <= 0) { endGame(newScore, newCoins, newXp); return; }
          nextQuestion(newQIdx + 1, newL, newScore, newCoins, newXp, 0, allQuestions);
        }, 1600);
      }
    }, 1000);
  }, [endGame]);

  const start = async () => {
    setPhase('loading');
    setLives(MAX_LIVES); setScore(0); setCoins(0); setXp(0); setStreak(0); setQIdx(0);
    setSelected(null); setRevealed(false); setMilestone(null);
    lockRef.current = false;
    try {
      const data = await fetch(`${API}/api/questions?count=60&difficulty=all`).then(r => r.json());
      setQuestions(data);
      setPhase('playing');
      nextQuestion(0, MAX_LIVES, 0, 0, 0, 0, data);
    } catch {
      setPhase('idle');
    }
  };

  const handleAnswer = (opt) => {
    if (lockRef.current || revealed) return;
    lockRef.current = true;
    clearInterval(timerRef.current);
    setSelected(opt);
    setRevealed(true);

    const q     = questions[qIdx];
    const right = opt === q.answer;  // ← fixed: was q.correctAnswer

    if (right) {
      const newStreak  = streak + 1;
      const mult       = getMult(newStreak).mult;
      const coinEarn   = Math.round(8 * mult);
      const xpEarn     = Math.round(12 * mult);
      const newScore   = score + 1;
      const milestoneBonus = MILESTONE_BONUS[newScore] || 0;
      const totalCoins = coinEarn + milestoneBonus;

      setStreak(newStreak);
      setScore(newScore);
      setCoins(c => c + totalCoins);
      setXp(x => x + xpEarn);

      if (milestoneBonus > 0) {
        showFloat(`+${milestoneBonus} BONUS!`, '#FFD700');
      } else {
        showFloat(`+${coinEarn}`, getMult(newStreak).color);
      }

      setTimeout(() => nextQuestion(qIdx + 1, lives, newScore, coins + totalCoins, xp + xpEarn, newStreak, questions), 900);
    } else {
      const newL = lives - 1;
      setLives(newL);
      setStreak(0);
      setLostLife(true);
      setTimeout(() => setLostLife(false), 600);
      setTimeout(() => {
        if (newL <= 0) { endGame(score, coins, xp); return; }
        nextQuestion(qIdx + 1, newL, score, coins, xp, 0, questions);
      }, 1600);
    }
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  const q        = questions[qIdx];
  const mult     = getMult(streak);
  const timerPct = (timeLeft / QUESTION_TIME) * 100;
  const timerColor = timeLeft > 8 ? '#4cc977' : timeLeft > 4 ? '#ffa500' : '#e63946';

  // ── IDLE ────────────────────────────────────────────────────────────────────
  if (phase === 'idle') return (
    <div className="surv-screen">
      <div className="surv-hero">
        <div className="surv-icon">❤️‍🔥</div>
        <h1 className="surv-title">Survival Mode</h1>
        <p className="surv-sub">
          Answer endless questions with 3 lives.<br />
          Build streaks for bigger coin rewards!
        </p>

        {highScore > 0 && (
          <div className="surv-hs">🏆 Personal best: <strong>{highScore} correct</strong></div>
        )}

        {/* Multiplier ladder */}
        <div className="surv-mult-ladder">
          {MULTIPLIERS.slice().reverse().map(m => (
            <div key={m.label} className="surv-mult-row" style={{ borderColor: m.color }}>
              <span className="surv-mult-badge" style={{ color: m.color, background: m.bg }}>{m.label} {m.desc}</span>
              <span className="surv-mult-when">{m.min}+ streak</span>
            </div>
          ))}
        </div>

        {/* Milestone info */}
        <div className="surv-milestones">
          <div className="surv-milestone-title">🎯 Milestone Bonuses</div>
          {MILESTONES.map(m => (
            <div key={m} className="surv-milestone-row">
              <span>{m} correct</span>
              <span className="surv-milestone-coins">+{MILESTONE_BONUS[m]} 🪙</span>
            </div>
          ))}
        </div>

        <button className="surv-start-btn" onClick={start}>Start Game →</button>
        <button className="surv-back-btn" onClick={onBack}>← Back</button>
      </div>
    </div>
  );

  // ── LOADING ──────────────────────────────────────────────────────────────────
  if (phase === 'loading') return (
    <div className="surv-screen">
      <div className="surv-loading-wrap">
        <div className="surv-loading-icon">❤️‍🔥</div>
        <div className="surv-loading-text">Loading questions…</div>
      </div>
    </div>
  );

  // ── DEAD ─────────────────────────────────────────────────────────────────────
  if (phase === 'dead') {
    const isNewHS = score > 0 && score >= highScore;
    const earnedXp = xp;
    return (
      <div className="surv-screen">
        <div className="surv-gameover">
          <div className="surv-go-icon">{score >= 20 ? '🏆' : score >= 10 ? '🔥' : '💀'}</div>
          <h2 className="surv-go-title">{score >= 20 ? 'Legendary!' : score >= 10 ? 'Nice Run!' : 'Game Over'}</h2>

          {isNewHS && <div className="surv-new-hs">🏆 NEW PERSONAL BEST!</div>}

          <div className="surv-go-stats">
            <div className="surv-go-stat">
              <span className="surv-go-val" style={{ color: '#4cc977' }}>{score}</span>
              <span className="surv-go-lbl">Correct</span>
            </div>
            <div className="surv-go-div" />
            <div className="surv-go-stat">
              <span className="surv-go-val" style={{ color: '#FFD700' }}>{coins}</span>
              <span className="surv-go-lbl">Coins</span>
            </div>
            <div className="surv-go-div" />
            <div className="surv-go-stat">
              <span className="surv-go-val" style={{ color: '#9B5DE5' }}>{earnedXp}</span>
              <span className="surv-go-lbl">XP</span>
            </div>
          </div>

          <div className="surv-go-btns">
            <button className="surv-start-btn" onClick={start}>Play Again</button>
            <button className="surv-back-btn" onClick={onBack}>Back to Home</button>
          </div>
        </div>
      </div>
    );
  }

  // ── PLAYING ──────────────────────────────────────────────────────────────────
  if (!q) return null;

  return (
    <div className="surv-screen surv-screen-playing">

      {/* Milestone popup */}
      {milestone && (
        <div className="surv-milestone-popup">
          🎯 {milestone} CORRECT! +{MILESTONE_BONUS[milestone]} 🪙
        </div>
      )}

      {/* Floating coin */}
      {floatCoins && (
        <div key={floatCoins.id} className="surv-float-coin" style={{ color: floatCoins.color }}>
          {floatCoins.amount}
        </div>
      )}

      {/* HUD */}
      <div className={`surv-hud ${lostLife ? 'surv-shake' : ''}`}>
        {/* Lives */}
        <div className="surv-lives">
          {Array.from({ length: MAX_LIVES }).map((_, i) => (
            <span key={i} className={`surv-heart ${i < lives ? '' : 'dead'}`}>
              {i < lives ? '❤️' : '🖤'}
            </span>
          ))}
        </div>

        {/* Score + multiplier */}
        <div className="surv-score-center">
          <span className="surv-score-num">{score}</span>
          {mult.desc && (
            <span className="surv-mult-pill" style={{ background: mult.color, color: '#000' }}>
              {mult.label} {mult.desc}
            </span>
          )}
        </div>

        {/* Coins in HUD */}
        <div className="surv-hud-coins">
          <span className="surv-hud-coin-icon">🪙</span>
          <span className="surv-hud-coin-val">{coins}</span>
        </div>

        {/* Timer */}
        <div className="surv-timer-wrap">
          <div className="surv-timer-bar" style={{ width: `${timerPct}%`, background: timerColor }} />
          <span className="surv-timer-num" style={{ color: timerColor }}>{timeLeft}s</span>
        </div>
      </div>

      {/* Streak bar */}
      {streak >= 3 && (
        <div className="surv-streak-bar" style={{ background: mult.bg, borderColor: mult.color, color: mult.color }}>
          🔥 {streak}-answer streak &nbsp;·&nbsp; {mult.label} coins {mult.desc}
        </div>
      )}

      {/* Next milestone hint */}
      {(() => {
        const next = MILESTONES.find(m => m > score);
        return next ? (
          <div className="surv-next-milestone">
            🎯 {next - score} more correct for <strong>+{MILESTONE_BONUS[next]} 🪙 bonus</strong>
          </div>
        ) : null;
      })()}

      {/* Question card */}
      <div className="surv-q-card">
        <div className="surv-q-meta">
          <span className="surv-q-counter">Q{qIdx + 1}</span>
          <span className="surv-q-difficulty" data-diff={q.difficulty}>{q.difficulty?.toUpperCase()}</span>
        </div>
        <div className="surv-q-text">{q.question}</div>
        <div className="surv-options">
          {q.options.map((opt, i) => {
            let cls = 'surv-opt';
            if (revealed) {
              if (opt === q.answer)     cls += ' surv-correct';  // ← fixed
              else if (opt === selected) cls += ' surv-wrong';
              else                       cls += ' surv-dim';
            }
            return (
              <button key={i} className={cls} onClick={() => handleAnswer(opt)} disabled={revealed}>
                <span className="surv-opt-letter">{String.fromCharCode(65 + i)}</span>
                <span className="surv-opt-text">{opt}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

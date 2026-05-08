import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Blitz.css';

const BLITZ_TIME   = 60;
const REVEAL_DELAY = 700;
const COIN_BASE    = { easy: 25, medium: 55, hard: 110 };
const COMBO_LEVELS = [
  { min: 8, mult: 3.0, label: '×3', color: '#FFD700' },
  { min: 5, mult: 2.0, label: '×2', color: '#e63946' },
  { min: 3, mult: 1.5, label: '×1.5', color: '#ffa500' },
];
const HS_KEY = 'nba_blitz_hs';

function getCombo(streak) {
  return COMBO_LEVELS.find(l => streak >= l.min) || { mult: 1, label: null, color: '#fff' };
}

function loadHighscores() {
  try { return JSON.parse(localStorage.getItem(HS_KEY) || '[]'); } catch { return []; }
}

function saveHighscore(entry) {
  const list = loadHighscores();
  list.push(entry);
  list.sort((a, b) => b.correct - a.correct || b.coins - a.coins);
  localStorage.setItem(HS_KEY, JSON.stringify(list.slice(0, 5)));
}

// ── Highscore list ────────────────────────────────────────────────────────────
function HighscoreList() {
  const scores = loadHighscores();
  if (!scores.length) return <p className="hs-empty">No records yet — be the first!</p>;
  return (
    <div className="hs-list">
      {scores.map((s, i) => (
        <div key={i} className={`hs-row ${i === 0 ? 'hs-top' : ''}`}>
          <span className="hs-rank">{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}</span>
          <span className="hs-correct">{s.correct} ✓</span>
          <span className="hs-coins">🪙 {s.coins.toLocaleString()}</span>
          <span className="hs-acc">{s.acc}%</span>
          <span className="hs-date">{s.date}</span>
        </div>
      ))}
    </div>
  );
}

// ── Results screen ────────────────────────────────────────────────────────────
function BlitzResults({ answered, correct, coins, onFinish, onBack, isNewBest }) {
  const [tab, setTab] = useState('stats');
  const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  const getRank = () => {
    if (correct >= 25) return { label: 'GOAT Mode 🐐',    color: '#FFD700' };
    if (correct >= 18) return { label: 'All-Star ⭐',      color: '#e63946' };
    if (correct >= 12) return { label: 'Starter 🏀',      color: '#4cc977' };
    if (correct >= 6)  return { label: 'Bench Player 🪑',  color: '#ffa500' };
    return                    { label: 'Rookie 🌱',        color: '#888'    };
  };
  const rank = getRank();
  return (
    <div className="blitz-results">
      <div className="br-icon">⚡</div>
      {isNewBest && <div className="br-new-best">🏆 NEW PERSONAL BEST!</div>}
      <h1 className="br-title">Blitz Complete!</h1>
      <div className="br-rank" style={{ color: rank.color, borderColor: rank.color }}>{rank.label}</div>
      <div className="br-tabs">
        <button className={`br-tab ${tab === 'stats' ? 'active' : ''}`} onClick={() => setTab('stats')}>Results</button>
        <button className={`br-tab ${tab === 'hs'    ? 'active' : ''}`} onClick={() => setTab('hs')}>🏆 Scores</button>
      </div>
      {tab === 'stats' ? (
        <div className="br-stats-grid">
          <div className="br-stat"><span className="br-val" style={{ color: '#4cc977' }}>{correct}</span><span className="br-lbl">Correct</span></div>
          <div className="br-stat"><span className="br-val">{answered}</span><span className="br-lbl">Answered</span></div>
          <div className="br-stat"><span className="br-val" style={{ color: '#ffa500' }}>{pct}%</span><span className="br-lbl">Accuracy</span></div>
          <div className="br-stat"><span className="br-val" style={{ color: '#FFD700' }}>{coins.toLocaleString()}</span><span className="br-lbl">🪙 Earned</span></div>
        </div>
      ) : (
        <HighscoreList />
      )}
      <div className="br-actions">
        <button className="btn-primary"   onClick={() => onFinish(coins, correct, answered)}>Claim Coins →</button>
        <button className="btn-secondary" onClick={onBack}>Home</button>
      </div>
    </div>
  );
}

// ── Main Blitz component ──────────────────────────────────────────────────────
export default function Blitz({ onFinish, onBack }) {
  const [questions,   setQuestions]   = useState([]);
  const [phase,       setPhase]       = useState('loading'); // 'loading' | 'playing' | 'done'
  const [error,       setError]       = useState(null);
  const [current,     setCurrent]     = useState(0);
  const [timeLeft,    setTimeLeft]    = useState(BLITZ_TIME);
  const [answered,    setAnswered]    = useState(0);
  const [correct,     setCorrect]     = useState(0);
  const [coins,       setCoins]       = useState(0);
  const [selected,    setSelected]    = useState(null);
  const [streak,      setStreak]      = useState(0);
  const [bestStreak,  setBestStreak]  = useState(0);
  const [flashKey,    setFlashKey]    = useState(0);
  const [flashType,   setFlashType]   = useState('');
  const [timePop,     setTimePop]     = useState(false);
  const [penaltyPop,  setPenaltyPop]  = useState(false);
  const [comboPop,    setComboPop]    = useState(null);
  const [isNewBest,   setIsNewBest]   = useState(false);

  // Refs for stable values inside interval callbacks
  const intervalRef  = useRef(null);
  const advanceRef   = useRef(null);
  const timeRef      = useRef(BLITZ_TIME);
  const phaseRef     = useRef('loading');
  const questionsRef = useRef([]);
  const currentRef   = useRef(0);
  const answeredRef  = useRef(0);
  const correctRef   = useRef(0);
  const coinsRef     = useRef(0);
  const streakRef    = useRef(0);

  // Fetch questions on mount
  useEffect(() => {
    fetch('/api/questions?count=60&difficulty=all')
      .then(r => r.json())
      .then(data => {
        questionsRef.current = data;
        setQuestions(data);
        phaseRef.current = 'playing';
        setPhase('playing');
      })
      .catch(() => setError('Server unreachable — is the backend running?'));
  }, []);

  // Start interval when phase becomes 'playing'
  useEffect(() => {
    if (phase !== 'playing') return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (phaseRef.current !== 'playing') {
        clearInterval(intervalRef.current);
        return;
      }
      timeRef.current -= 1;
      setTimeLeft(timeRef.current);
      if (timeRef.current <= 0) {
        clearInterval(intervalRef.current);
        triggerEndGame();
      }
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [phase]); // eslint-disable-line

  function triggerEndGame() {
    phaseRef.current = 'done';
    setPhase('done');
    clearInterval(intervalRef.current);
    clearTimeout(advanceRef.current);
    const pct = answeredRef.current > 0
      ? Math.round((correctRef.current / answeredRef.current) * 100) : 0;
    const entry = { correct: correctRef.current, coins: coinsRef.current, acc: pct, date: new Date().toLocaleDateString() };
    const prev = loadHighscores();
    const isBest = !prev.length
      || correctRef.current > prev[0].correct
      || (correctRef.current === prev[0].correct && coinsRef.current > prev[0].coins);
    setIsNewBest(isBest);
    saveHighscore(entry);
  }

  const advanceQuestion = useCallback(() => {
    const next = currentRef.current + 1;
    if (next >= questionsRef.current.length || phaseRef.current !== 'playing') {
      triggerEndGame();
      return;
    }
    currentRef.current = next;
    setCurrent(next);
    setSelected(null);
  }, []); // eslint-disable-line

  const handleSelect = useCallback((option) => {
    if (phaseRef.current !== 'playing') return;
    const q = questionsRef.current[currentRef.current];
    if (!q) return;

    const isCorrect = option === q.answer;
    setSelected(option);
    answeredRef.current += 1;
    setAnswered(a => a + 1);

    if (isCorrect) {
      const newStreak = streakRef.current + 1;
      streakRef.current = newStreak;
      setStreak(newStreak);
      setBestStreak(b => Math.max(b, newStreak));

      const combo = getCombo(newStreak);
      const earned = Math.round((COIN_BASE[q.difficulty] || 50) * combo.mult);
      correctRef.current += 1;
      coinsRef.current   += earned;
      setCorrect(c => c + 1);
      setCoins(c => c + earned);

      // +5 seconds
      const newTime = Math.min(timeRef.current + 5, 90);
      timeRef.current = newTime;
      setTimeLeft(newTime);
      setTimePop(true);
      setTimeout(() => setTimePop(false), 900);

      if (combo.label && (newStreak === 3 || newStreak === 5 || newStreak === 8)) {
        setComboPop({ label: combo.label, color: combo.color, key: Date.now() });
        setTimeout(() => setComboPop(null), 1000);
      }
      setFlashType('correct');
    } else {
      streakRef.current = 0;
      setStreak(0);
      // -5 seconds penalty for wrong answer
      const penalty = Math.max(timeRef.current - 5, 0);
      timeRef.current = penalty;
      setTimeLeft(penalty);
      setPenaltyPop(true);
      setTimeout(() => setPenaltyPop(false), 900);
      if (penalty <= 0) {
        clearTimeout(advanceRef.current);
        triggerEndGame();
        return;
      }
      setFlashType('wrong');
    }
    setFlashKey(k => k + 1);
    clearTimeout(advanceRef.current);
    advanceRef.current = setTimeout(advanceQuestion, REVEAL_DELAY);
  }, [advanceQuestion]);

  const handleSkip = useCallback(() => {
    if (phaseRef.current !== 'playing' || selected !== null) return;
    const newTime = Math.max(timeRef.current - 3, 0);
    timeRef.current = newTime;
    setTimeLeft(newTime);
    if (newTime <= 0) { triggerEndGame(); return; }
    streakRef.current = 0;
    setStreak(0);
    setSelected('__skip__');
    answeredRef.current += 1;
    setAnswered(a => a + 1);
    setFlashType('skip');
    setFlashKey(k => k + 1);
    clearTimeout(advanceRef.current);
    advanceRef.current = setTimeout(advanceQuestion, REVEAL_DELAY);
  }, [selected, advanceQuestion]); // eslint-disable-line

  useEffect(() => () => {
    clearInterval(intervalRef.current);
    clearTimeout(advanceRef.current);
  }, []);

  // ── Render ──────────────────────────────────────────────────────────────────
  if (phase === 'loading') {
    return (
      <div className="blitz-loading">
        {error
          ? <><p style={{ color: '#e63946', fontSize: '1rem' }}>⚠️ {error}</p>
              <button className="btn-secondary" onClick={onBack} style={{ marginTop: '1rem' }}>Back</button></>
          : <><div className="blitz-loading-icon">⚡</div>
              <p className="blitz-loading-text">LOADING BLITZ…</p></>
        }
      </div>
    );
  }

  if (phase === 'done') {
    return (
      <BlitzResults
        answered={answeredRef.current}
        correct={correctRef.current}
        coins={coinsRef.current}
        onFinish={onFinish}
        onBack={onBack}
        isNewBest={isNewBest}
      />
    );
  }

  const q = questions[current];
  if (!q) return (
    <div className="blitz-loading">
      <div className="blitz-loading-icon">⚡</div>
      <p className="blitz-loading-text">LOADING BLITZ…</p>
    </div>
  );

  const timerPct = Math.max(0, (timeLeft / BLITZ_TIME) * 100);
  const danger   = timeLeft <= 10;
  const warn     = timeLeft <= 20;
  const combo    = getCombo(streak);
  const isSkipped = selected === '__skip__';

  return (
    <div className="blitz">
      {/* Flash overlay */}
      {flashType && <div key={flashKey} className={`blitz-flash blitz-flash-${flashType}`} aria-hidden="true" />}

      {/* Combo pop */}
      {comboPop && (
        <div className="combo-pop" key={comboPop.key} style={{ color: comboPop.color }}>
          {comboPop.label} COMBO!
        </div>
      )}

      {/* +5s / -5s pops */}
      {timePop    && <div className="time-pop">+5s ⏱</div>}
      {penaltyPop && <div className="time-pop penalty-pop">−5s ⏱</div>}

      {/* ── Header ── */}
      <div className="blitz-header">
        <div className="blitz-score-chip">
          <span className="bsc-correct">{correct} ✓</span>
          <span className="bsc-divider">·</span>
          <span className="bsc-total">Q{answered + 1}</span>
          {streak >= 3 && (
            <span className="bsc-streak" style={{ color: combo.color }}>
              🔥{streak} <span className="bsc-mult">{combo.label}</span>
            </span>
          )}
        </div>

        {/* Circular SVG timer */}
        <div className={`blitz-timer-wrap ${danger ? 'bt-danger' : warn ? 'bt-warn' : ''}`}>
          <svg className="bt-svg" viewBox="0 0 80 80">
            <circle className="bt-bg"   cx="40" cy="40" r="33" />
            <circle className="bt-ring" cx="40" cy="40" r="33"
              strokeDasharray={`${timerPct * 2.073} 207.3`}
              style={{ stroke: danger ? '#e63946' : warn ? '#ffa500' : '#9B5DE5' }}
            />
          </svg>
          <span className="bt-num">{timeLeft}</span>
        </div>

        <div className="blitz-coins-live">
          <span>🪙</span>
          <span className="bcl-val">{coins.toLocaleString()}</span>
        </div>
      </div>

      {/* Timer bar */}
      <div className="blitz-bar-wrap">
        <div className={`blitz-bar-fill ${danger ? 'bb-danger' : warn ? 'bb-warn' : ''}`}
          style={{ width: `${timerPct}%` }} />
      </div>

      {/* Question */}
      <div className={`blitz-question card ${selected ? (isSkipped ? 'bq-skip' : selected === q.answer ? 'bq-correct' : 'bq-wrong') : ''}`}>
        <div className="bq-meta">
          <span className={`badge badge-${q.difficulty}`}>{q.difficulty}</span>
          <span className="bq-cat">{q.category}</span>
          {q.difficulty === 'hard' && <span className="bq-hard-tag">💎 +110</span>}
          {streak >= 3 && !selected && (
            <span className="bq-combo-tag" style={{ color: combo.color, borderColor: combo.color }}>
              {combo.label} streak
            </span>
          )}
        </div>
        <p className="bq-text">{q.question}</p>
      </div>

      {/* Options */}
      <div className="blitz-options">
        {q.options.map((opt, i) => {
          let cls = 'blitz-opt';
          if (selected && !isSkipped) {
            if (opt === q.answer)                           cls += ' bo-correct';
            else if (opt === selected && opt !== q.answer) cls += ' bo-wrong';
            else                                           cls += ' bo-dimmed';
          } else if (isSkipped) {
            cls += opt === q.answer ? ' bo-correct bo-dimmed-skip' : ' bo-dimmed';
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(opt)} disabled={!!selected}>
              <span className="bo-letter">{String.fromCharCode(65 + i)}</span>
              <span className="bo-text">{opt}</span>
              {selected && !isSkipped && opt === q.answer && <span className="bo-icon bo-icon-correct">✓</span>}
              {selected && !isSkipped && opt === selected && opt !== q.answer && <span className="bo-icon bo-icon-wrong">✗</span>}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="blitz-footer">
        {!selected ? (
          <button className="blitz-skip-btn" onClick={handleSkip}>
            ⏭ Skip <span className="skip-cost">−3s</span>
          </button>
        ) : (
          <div className="blitz-auto-hint">
            {isSkipped
              ? <span style={{ color: '#ffa500' }}>Skipped — answer shown above</span>
              : selected === q.answer
                ? <span style={{ color: '#4cc977' }}>+{Math.round((COIN_BASE[q.difficulty] || 50) * combo.mult)} 🪙{combo.label ? ` (${combo.label} combo!)` : ''}</span>
                : <span style={{ color: '#e63946' }}>Streak reset</span>
            }
          </div>
        )}
        <span className="blitz-best-streak">Best: {bestStreak} 🔥</span>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Quiz.css';

const API = (process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/$/, '');

const QUESTION_TIME = { easy: 22, medium: 18, hard: 14 };

const COIN_BASE = { easy: 50, medium: 100, hard: 150 };

function getStreakMult(streak) {
  if (streak >= 10) return 3.0;
  if (streak >= 5)  return 2.0;
  if (streak >= 3)  return 1.5;
  return 1.0;
}

function calcCoins(difficulty, timeLeft, streak, double, triple) {
  const base = COIN_BASE[difficulty] || 75;
  const timeBonus = timeLeft * 2;
  const mult = getStreakMult(streak);
  const raw = Math.floor((base + timeBonus) * mult);
  return triple ? raw * 3 : double ? raw * 2 : raw;
}

export default function Quiz({ config, inventory, onFinish, onUsePowerUp }) {
  const [questions, setQuestions]   = useState([]);
  const [current, setCurrent]       = useState(0);
  const [selected, setSelected]     = useState(null);
  const [revealed, setRevealed]     = useState(false);
  const [score, setScore]           = useState(0);
  const [coinsEarned, setCoinsEarned] = useState(0);
  const [answers, setAnswers]       = useState([]);
  const [timeLeft, setTimeLeft]     = useState(QUESTION_TIME.medium);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);
  const [streak, setStreak]         = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [hiddenOptions, setHiddenOptions] = useState([]);
  const [doubleCoin,       setDoubleCoin]       = useState(false);
  const [tripleDown,       setTripleDown]       = useState(false);
  const [shieldActive,     setShieldActive]     = useState(false);
  const [secondChanceOn,   setSecondChanceOn]   = useState(false);
  const [oracleUsed,       setOracleUsed]       = useState(false);
  const [coinPop,          setCoinPop]          = useState(null);
  const [streakFlash,      setStreakFlash]       = useState(false);
  const [secondChancePop,  setSecondChancePop]  = useState(false);
  const aceUsedRef = useRef(false);
  const timerRef   = useRef(null);

  // Load questions (with deduplication)
  useEffect(() => {
    const { difficulty, count, category, isDaily } = config;
    if (isDaily) {
      fetch(`${API}/api/daily-challenge`)
        .then(r => r.json())
        .then(data => { setQuestions(data.questions); setLoading(false); setTimeLeft(QUESTION_TIME.medium); })
        .catch(() => { setError('Server unreachable — is the backend running?'); setLoading(false); });
      return;
    }
    // Read seen IDs, pass as exclude param
    let seenIds = [];
    try { seenIds = JSON.parse(localStorage.getItem('nba_seen_ids') || '[]'); } catch {}
    const params = new URLSearchParams({ count, difficulty, category });
    if (seenIds.length) params.set('exclude', seenIds.join(','));
    fetch(`${API}/api/questions?${params}`)
      .then(r => r.json())
      .then(data => { setQuestions(data); setLoading(false); if (data[0]) setTimeLeft(QUESTION_TIME[data[0].difficulty] || 18); })
      .catch(() => { setError('Server unreachable — is the backend running?'); setLoading(false); });
  }, [config]);

  // Countdown
  const handleTimeout = useCallback(() => {
    if (revealed) return;
    setRevealed(true);
    if (!shieldActive) setStreak(0);
    setAnswers(prev => [...prev, { questionId: questions[current]?.id, selected: null, correct: false, timedOut: true }]);
  }, [revealed, questions, current, shieldActive]);

  useEffect(() => {
    if (loading || revealed || questions.length === 0) return;
    if (timeLeft <= 0) { handleTimeout(); return; }
    timerRef.current = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timerRef.current);
  }, [timeLeft, loading, revealed, questions.length, handleTimeout]);

  // Answer selection
  const handleSelect = useCallback((option) => {
    if (revealed) return;
    clearTimeout(timerRef.current);
    const q = questions[current];
    const isCorrect = option === q.answer;

    // Second Chance: wrong + active → give retry, no streak break
    if (!isCorrect && secondChanceOn) {
      setSecondChanceOn(false);
      setSecondChancePop(true);
      setTimeout(() => setSecondChancePop(false), 1200);
      // Timer restarts automatically (revealed stays false, useEffect re-fires)
      return;
    }

    setSelected(option);
    setRevealed(true);

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setBestStreak(b => Math.max(b, newStreak));
      if (newStreak === 3 || newStreak === 5 || newStreak === 10) {
        setStreakFlash(true);
        setTimeout(() => setStreakFlash(false), 1000);
      }
      const pts = calcScore(q.difficulty, timeLeft);
      setScore(s => s + pts);
      const coins = calcCoins(q.difficulty, timeLeft, newStreak, doubleCoin, tripleDown);
      const multiplied = config.coinMultiplier > 1 ? Math.floor(coins * config.coinMultiplier) : coins;
      setCoinsEarned(c => c + multiplied);
      setCoinPop({ value: multiplied, key: Date.now() });
      setTimeout(() => setCoinPop(null), 1200);
    } else {
      if (shieldActive) {
        setShieldActive(false);
      } else {
        setStreak(0);
      }
    }
    setDoubleCoin(false);
    setTripleDown(false);
    setAnswers(prev => [...prev, { questionId: q.id, selected: option, correct: isCorrect, oracleUsed }]);
    setOracleUsed(false);
  }, [revealed, questions, current, streak, doubleCoin, tripleDown, shieldActive, secondChanceOn, timeLeft, oracleUsed, config.coinMultiplier]);

  function calcScore(difficulty, time) {
    const base = difficulty === 'hard' ? 150 : difficulty === 'medium' ? 100 : 75;
    return base + Math.floor(time * 2);
  }

  // Answer Ace — auto-consume when question changes
  useEffect(() => {
    aceUsedRef.current = false;
  }, [current]);

  useEffect(() => {
    if (aceUsedRef.current || loading || revealed || !questions[current]) return;
    if ((inventory.answer_ace || 0) < 1) return;
    aceUsedRef.current = true;
    onUsePowerUp('answer_ace');
    const q = questions[current];
    const wrongs = q.options.filter(o => o !== q.answer && !hiddenOptions.includes(o));
    if (wrongs.length > 0) {
      const toHide = wrongs[Math.floor(Math.random() * wrongs.length)];
      setHiddenOptions(prev => [...prev, toHide]);
    }
  }, [current, loading, questions]); // eslint-disable-line

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      const finalCorrect = answers.filter(a => a.correct).length;
      if (!config.isDaily) {
        try {
          const existing = JSON.parse(localStorage.getItem('nba_seen_ids') || '[]');
          const newIds = questions.map(q => q.id);
          const merged = [...new Set([...existing, ...newIds])];
          if (merged.length > 140) localStorage.removeItem('nba_seen_ids');
          else localStorage.setItem('nba_seen_ids', JSON.stringify(merged));
        } catch {}
      }
      onFinish({ score, coinsEarned, total: questions.length, correct: finalCorrect, bestStreak, answers, questions, config });
    } else {
      const nextQ = questions[current + 1];
      setCurrent(c => c + 1);
      setSelected(null);
      setRevealed(false);
      setTimeLeft(nextQ ? (QUESTION_TIME[nextQ.difficulty] || 18) : 18);
      setHiddenOptions([]);
      setOracleUsed(false);
      setSecondChanceOn(false);
    }
  };

  // Power-ups
  const useFiftyFifty = () => {
    if ((inventory.fifty_fifty || 0) < 1 || revealed) return;
    onUsePowerUp('fifty_fifty');
    const q = questions[current];
    const wrongs = q.options.filter(o => o !== q.answer && !hiddenOptions.includes(o));
    const toHide = wrongs.sort(() => Math.random() - 0.5).slice(0, 2);
    setHiddenOptions(prev => [...prev, ...toHide]);
  };

  const useTimeFreeze = () => {
    if ((inventory.time_freeze || 0) < 1 || revealed) return;
    onUsePowerUp('time_freeze');
    setTimeLeft(t => Math.min(t + 15, 35));
  };

  const useSkipPass = () => {
    if ((inventory.skip_pass || 0) < 1 || revealed) return;
    onUsePowerUp('skip_pass');
    clearTimeout(timerRef.current);
    setRevealed(true);
    setAnswers(prev => [...prev, { questionId: questions[current]?.id, selected: null, correct: false, skipped: true }]);
  };

  const useCoinMagnet = () => {
    if ((inventory.coin_magnet || 0) < 1 || revealed || doubleCoin) return;
    onUsePowerUp('coin_magnet');
    setDoubleCoin(true);
  };

  const useStreakShield = () => {
    if ((inventory.streak_shield || 0) < 1 || revealed || shieldActive) return;
    onUsePowerUp('streak_shield');
    setShieldActive(true);
  };

  const useOracle = () => {
    if ((inventory.oracle || 0) < 1 || revealed) return;
    onUsePowerUp('oracle');
    const q = questions[current];
    clearTimeout(timerRef.current);
    setOracleUsed(true);
    setSelected(q.answer);
    setRevealed(true);
    // streak kept, no points
    setAnswers(prev => [...prev, { questionId: q.id, selected: q.answer, correct: false, oracleUsed: true }]);
  };

  const useSecondChance = () => {
    if ((inventory.second_chance || 0) < 1 || revealed || secondChanceOn) return;
    onUsePowerUp('second_chance');
    setSecondChanceOn(true);
  };

  const useDoubleDown = () => {
    if ((inventory.double_down || 0) < 1 || revealed || tripleDown) return;
    onUsePowerUp('double_down');
    setTripleDown(true);
  };

  const powerUps = [
    { id: 'fifty_fifty',   icon: '✂️',  label: '50/50',    action: useFiftyFifty,   color: '#4cc977', active: false },
    { id: 'time_freeze',   icon: '⏰',  label: '+15s',     action: useTimeFreeze,   color: '#00b4d8', active: false },
    { id: 'skip_pass',     icon: '⏭️',  label: 'Skip',     action: useSkipPass,     color: '#ffa500', active: false },
    { id: 'coin_magnet',   icon: '🪙',  label: '2× Coin',  action: useCoinMagnet,   color: '#ffd700', active: doubleCoin },
    { id: 'streak_shield', icon: '🛡️',  label: 'Shield',   action: useStreakShield, color: '#e63946', active: shieldActive },
    { id: 'oracle',        icon: '🔮',  label: 'Oracle',   action: useOracle,       color: '#9b5de5', active: false },
    { id: 'second_chance', icon: '🔁',  label: '2nd Try',  action: useSecondChance, color: '#4cc977', active: secondChanceOn },
    { id: 'double_down',   icon: '💰',  label: '3× Coin',  action: useDoubleDown,   color: '#ffd700', active: tripleDown },
  ].filter(p => (inventory[p.id] || 0) > 0 || p.active);

  // ── Render ──────────────────────────────────────────────────────────────────
  if (loading) return (
    <div className="quiz-state">
      <div className="loading-spinner" />
      <p>Loading questions…</p>
    </div>
  );

  if (error) return (
    <div className="quiz-state card">
      <span className="state-icon">⚠️</span>
      <h2>Connection Error</h2>
      <p>{error}</p>
    </div>
  );

  if (questions.length === 0) return (
    <div className="quiz-state card">
      <span className="state-icon">🤔</span>
      <h2>No Questions Found</h2>
      <p>Try different filters.</p>
    </div>
  );

  const q = questions[current];
  const progress = (current / questions.length) * 100;
  const timerPct = (timeLeft / (QUESTION_TIME[q.difficulty] || 18)) * 100;
  const maxTime  = QUESTION_TIME[q.difficulty] || 18;
  const timerCls = timeLeft <= 4 ? 'danger' : timeLeft <= Math.floor(maxTime * 0.4) ? 'warning' : 'normal';
  const multLabel = getStreakMult(streak);

  return (
    <div className="quiz">
      {/* Top row */}
      <div className="quiz-topbar">
        <div className="quiz-meta">
          <span className="q-counter"><strong>{current + 1}</strong>/{questions.length}</span>
          <span className={`badge badge-${q.difficulty}`}>{q.difficulty}</span>
          <span className="cat-tag">{q.category}</span>
          {config.isDaily && <span className="daily-tag">📅 Daily</span>}
        </div>
        <div className="quiz-right-meta">
          {streak >= 3 && (
            <div className={`streak-badge ${streakFlash ? 'flash' : ''}`}>
              🔥 {streak} <span className="mult-label">×{multLabel}</span>
            </div>
          )}
          {shieldActive && <div className="shield-active">🛡️ Shield</div>}
          {doubleCoin   && <div className="magnet-active">🪙 ×2</div>}
          <div className="score-chip">
            <span className="score-chip-label">Score</span>
            <span className="score-chip-value">{score.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
        <div className="progress-segments">
          {questions.map((_, i) => <div key={i} className={`seg ${i < current ? 'done' : ''}`} />)}
        </div>
      </div>

      {/* Timer */}
      <div className="timer-row">
        <div className="timer-bar">
          <div className={`timer-fill t-${timerCls}`} style={{ width: `${timerPct}%` }} />
        </div>
        <span className={`timer-num t-${timerCls}`}>{timeLeft}s</span>
      </div>

      {/* Question */}
      <div className="question-card card">
        <p className="question-text">{q.question}</p>
      </div>

      {/* Second chance pop */}
      {secondChancePop && (
        <div className="second-chance-pop">🔁 Second Chance! Try again!</div>
      )}

      {/* Power-ups bar */}
      {powerUps.length > 0 && !revealed && (
        <div className="powerup-bar">
          <span className="powerup-bar-label">Power-ups:</span>
          {powerUps.map(p => (
            <button
              key={p.id}
              className={`powerup-btn ${p.active ? 'pu-active' : ''}`}
              onClick={p.action}
              title={p.label}
              style={{ '--pu-color': p.color }}
            >
              <span className="pu-icon">{p.icon}</span>
              <span className="pu-label">{p.label}</span>
              <span className="pu-count" style={{ color: p.color }}>
                {p.active ? '✓' : `×${inventory[p.id] || 0}`}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Options */}
      <div className="options-grid">
        {q.options.map((opt, i) => {
          if (hiddenOptions.includes(opt)) return null;
          let cls = 'option';
          if (revealed) {
            if (opt === q.answer) cls += ' correct';
            else if (opt === selected && !oracleUsed) cls += ' wrong';
            else cls += ' dimmed';
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(opt)} disabled={revealed}>
              <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
              <span className="opt-text">{opt}</span>
              {revealed && opt === q.answer && <span className="opt-icon correct-icon">✓</span>}
              {revealed && opt === selected && opt !== q.answer && !oracleUsed && <span className="opt-icon wrong-icon">✗</span>}
            </button>
          );
        })}
      </div>

      {/* Coin pop animation */}
      {coinPop && (
        <div className="coin-pop" key={coinPop.key}>
          +{coinPop.value} 🪙
          {config.coinMultiplier > 1 && <span className="daily-mult"> ×{config.coinMultiplier} Daily!</span>}
        </div>
      )}

      {/* Explanation */}
      {revealed && (
        <div className={`explanation card ${oracleUsed ? 'expl-oracle' : selected === q.answer ? 'expl-correct' : 'expl-wrong'}`}>
          <div className="expl-header">
            <span className="expl-emoji">
              {oracleUsed ? '🔮' : selected === q.answer ? '🎯' : selected === null ? '⏱' : '💡'}
            </span>
            <strong>
              {oracleUsed      ? 'Oracle revealed' :
               selected === q.answer ? 'Correct!' :
               selected === null     ? "Time's up!" : 'Not quite!'}
            </strong>
            {selected === q.answer && (
              <span className="pts-earned">
                +{calcScore(q.difficulty, timeLeft + 1)} pts &nbsp;
                <span className="coins-earned">+{coinPop?.value ?? 0} 🪙</span>
              </span>
            )}
          </div>
          <p className="expl-text">{q.explanation}</p>
          <button className="btn-primary next-btn" onClick={handleNext}>
            {current + 1 >= questions.length ? 'See Results 🏆' : 'Next →'}
          </button>
        </div>
      )}
    </div>
  );
}

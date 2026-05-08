import React, { useState, useEffect, useRef, useCallback } from 'react';
import { io } from 'socket.io-client';
import { getRank, getRankProgress } from '../data/ranks';
import RankBadge from './RankBadge';
import './Duel.css';

const SOCKET_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default function Duel({ username, myMmr = 1000, onCoinsEarned, onMmrChange, onBack, onViewLeaderboard }) {
  const [phase,           setPhase]           = useState('idle');
  const [opponent,        setOpponent]        = useState('');
  const [opponentMmr,     setOpponentMmr]     = useState(1000);
  const [roomId,          setRoomId]          = useState('');
  const [question,        setQuestion]        = useState(null);
  const [questionIdx,     setQuestionIdx]     = useState(0);
  const [questionCount,   setQuestionCount]   = useState(10);
  const [scores,          setScores]          = useState([]);
  const [selected,        setSelected]        = useState(null);
  const [opponentAnswered,setOpponentAnswered] = useState(false);
  const [timeLeft,        setTimeLeft]        = useState(15);
  const [roundResult,     setRoundResult]     = useState(null);
  const [gameOver,        setGameOver]        = useState(null);
  const [countdown,       setCountdown]       = useState(3);
  const [queueSize,       setQueueSize]       = useState(0);
  const [predWin,         setPredWin]         = useState(0);
  const [predLoss,        setPredLoss]        = useState(0);
  const [rankUpAnim,      setRankUpAnim]      = useState(null);

  const socketRef = useRef(null);
  const timerRef  = useRef(null);
  const roomRef   = useRef('');
  const qIdxRef   = useRef(0);

  useEffect(() => { roomRef.current  = roomId;      }, [roomId]);
  useEffect(() => { qIdxRef.current  = questionIdx; }, [questionIdx]);

  useEffect(() => {
    return () => {
      socketRef.current?.emit('duel:cancel');
      socketRef.current?.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const connect = useCallback(() => {
    socketRef.current?.disconnect();
    const socket = io(SOCKET_URL, { transports: ['websocket'] });
    socketRef.current = socket;

    socket.on('connect', () => socket.emit('duel:join', { username }));

    socket.on('duel:queuing', ({ queueSize: qs }) => {
      setQueueSize(qs); setPhase('queuing');
    });

    socket.on('duel:matched', ({ roomId: rid, opponent: opp, opponentMmr: oppMmr, myMmr: mMmr, questionCount: qc, predWin: pw, predLoss: pl }) => {
      setRoomId(rid); setOpponent(opp); setOpponentMmr(oppMmr);
      setQuestionCount(qc); setPredWin(pw); setPredLoss(pl);
      setPhase('countdown');
      let c = 3;
      setCountdown(c);
      const t = setInterval(() => { c--; setCountdown(c); if (c <= 0) clearInterval(t); }, 1000);
    });

    socket.on('duel:question', ({ question: q, questionIdx: idx, scores: sc, timeLimit }) => {
      setQuestion(q); setQuestionIdx(idx); setScores(sc);
      setSelected(null); setOpponentAnswered(false); setTimeLeft(timeLimit);
      setPhase('question');
      if (timerRef.current) clearInterval(timerRef.current);
      let t = timeLimit;
      timerRef.current = setInterval(() => { t--; setTimeLeft(t); if (t <= 0) clearInterval(timerRef.current); }, 1000);
    });

    socket.on('duel:opponent_answered', () => setOpponentAnswered(true));

    socket.on('duel:round_end', ({ correctAnswer, results, questionIdx: idx }) => {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
      setRoundResult({ correctAnswer, results, questionIdx: idx });
      setScores(results.map(r => ({ username: r.username, score: r.score })));
      setPhase('round_end');
    });

    socket.on('duel:game_over', ({ scores: finalScores, winnerName }) => {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
      const me = finalScores.find(s => s.username === username);
      setGameOver({ scores: finalScores, winnerName, myCoins: me?.coins || 0, myMmrChange: me?.mmrChange || 0, myMmrAfter: me?.mmrAfter || myMmr });
      setPhase('game_over');
      if (me?.coins)     onCoinsEarned(me.coins);
      if (me?.mmrChange) {
        onMmrChange(me.mmrAfter);
        const oldRank = getRank(me.mmrBefore || myMmr);
        const newRank = getRank(me.mmrAfter);
        if (newRank.id !== oldRank.id) {
          const promoted = newRank.min > oldRank.min;
          setRankUpAnim({ promoted, rank: newRank });
          setTimeout(() => setRankUpAnim(null), 4000);
        }
      }
    });

    socket.on('duel:opponent_left', () => {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
      setPhase('left');
    });
  }, [username, myMmr, onCoinsEarned, onMmrChange]);

  const handleAnswer = (opt) => {
    if (selected !== null || phase !== 'question') return;
    setSelected(opt);
    socketRef.current?.emit('duel:answer', { roomId: roomRef.current, questionIdx: qIdxRef.current, answerId: opt });
  };

  const handleCancel = () => {
    socketRef.current?.emit('duel:cancel');
    socketRef.current?.disconnect();
    socketRef.current = null;
    setPhase('idle');
  };

  const myRank     = getRank(myMmr);
  const myProgress = getRankProgress(myMmr);
  const oppRank    = getRank(opponentMmr);
  const myScore    = scores.find(s => s.username === username)?.score ?? 0;
  const oppScore   = scores.find(s => s.username !== username)?.score ?? 0;
  const myRound    = roundResult?.results?.find(r => r.username === username);
  const oppRound   = roundResult?.results?.find(r => r.username !== username);

  // ── IDLE ────────────────────────────────────────────────────────────────────
  if (phase === 'idle') return (
    <div className="duel-screen">
      {rankUpAnim && (
        <div className={`duel-rankup-overlay ${rankUpAnim.promoted ? 'promoted' : 'demoted'}`}>
          <div className="dru-content">
            <div className="dru-icon">{rankUpAnim.rank.icon}</div>
            <div className="dru-text">{rankUpAnim.promoted ? 'Rank Up!' : 'Rank Down'}</div>
            <div className="dru-rank" style={{ color: rankUpAnim.rank.color }}>{rankUpAnim.rank.name}</div>
          </div>
        </div>
      )}
      <div className="duel-hero">
        <div className="duel-hero-top">
          <div className="duel-hero-rank">
            <RankBadge mmr={myMmr} size="lg" showName showMmr />
            <div className="duel-rank-bar-wrap">
              <div className="duel-rank-bar" style={{ width: `${myProgress.pct}%`, background: myRank.color }} />
            </div>
            {myProgress.pointsNeeded > 0
              ? <div className="duel-rank-pts">{myProgress.pointsNeeded} pts to {getRank(myMmr + myProgress.pointsNeeded + 1)?.name || 'next rank'}</div>
              : <div className="duel-rank-pts" style={{color:'#FFD700'}}>Max rank achieved!</div>
            }
          </div>
          {onViewLeaderboard && (
            <button className="duel-ladder-btn" onClick={onViewLeaderboard}>View Ladder →</button>
          )}
        </div>

        <div className="duel-vs-icon">⚔️</div>
        <h1 className="duel-title">Ranked Duel</h1>
        <p className="duel-sub">Face a real opponent · 10 questions · 15 sec each<br/>
          Win to climb the ladder · MMR determines your rank.</p>

        <div className="duel-prizes">
          <div className="dp-item dp-win"><span className="dp-icon">🏆</span><div><div className="dp-label">Win</div><div className="dp-coins">+350 🪙</div><div className="dp-mmr" style={{color:'#4cc977'}}>+MMR</div></div></div>
          <div className="dp-item dp-tie"><span className="dp-icon">🤝</span><div><div className="dp-label">Tie</div><div className="dp-coins">+150 🪙</div><div className="dp-mmr" style={{color:'#aaa'}}>±0 MMR</div></div></div>
          <div className="dp-item dp-loss"><span className="dp-icon">📋</span><div><div className="dp-label">Loss</div><div className="dp-coins">+75 🪙</div><div className="dp-mmr" style={{color:'#e63946'}}>-MMR</div></div></div>
        </div>

        <button className="duel-find-btn" onClick={connect}>Find Match →</button>
        <button className="duel-back-btn" onClick={onBack}>← Back to Home</button>
      </div>
    </div>
  );

  // ── QUEUING ──────────────────────────────────────────────────────────────────
  if (phase === 'queuing') return (
    <div className="duel-screen">
      <div className="duel-waiting">
        <div className="duel-pulse-ring" />
        <div className="duel-wait-icon">🔍</div>
        <h2 className="duel-wait-title">Finding opponent…</h2>
        <p className="duel-wait-sub">Searching near <strong style={{color:myRank.color}}>{myRank.name}</strong> rank · {queueSize} in queue</p>
        <div className="duel-loading-bar"><div className="duel-loading-fill" /></div>
        <button className="duel-back-btn" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );

  // ── COUNTDOWN ────────────────────────────────────────────────────────────────
  if (phase === 'countdown') return (
    <div className="duel-screen">
      <div className="duel-countdown-wrap">
        <div className="duel-matched-tag">Match Found!</div>
        <div className="duel-matchup">
          <div className="duel-player duel-me">
            <div className="dm-avatar">{username.charAt(0).toUpperCase()}</div>
            <div className="dm-name">{username}</div>
            <div className="dm-you">You</div>
            <RankBadge mmr={myMmr} size="sm" showName showMmr />
          </div>
          <div className="duel-vs-col">
            <div className="duel-vs">VS</div>
            <div className="duel-pred">
              <span style={{color:'#4cc977'}}>+{predWin > 0 ? predWin : '?'}</span>
              {' / '}
              <span style={{color:'#e63946'}}>{predLoss}</span>
              {' MMR'}
            </div>
          </div>
          <div className="duel-player duel-opp">
            <div className="dm-avatar opp">{opponent.charAt(0).toUpperCase()}</div>
            <div className="dm-name">{opponent}</div>
            <div className="dm-you" style={{color:'#e63946'}}>Opponent</div>
            <RankBadge mmr={opponentMmr} size="sm" showName showMmr />
          </div>
        </div>
        <div className="duel-countdown-num">{countdown}</div>
        <div className="duel-countdown-label">Get ready…</div>
      </div>
    </div>
  );

  // ── QUESTION ─────────────────────────────────────────────────────────────────
  if (phase === 'question' && question) {
    const timerPct   = (timeLeft / 15) * 100;
    const timerColor = timeLeft > 8 ? '#4cc977' : timeLeft > 4 ? '#ffa500' : '#e63946';
    return (
      <div className="duel-screen">
        <div className="duel-scorebar">
          <div className="dsb-player dsb-me">
            <span className="dsb-avatar" style={{background:myRank.bg}}>{username.charAt(0).toUpperCase()}</span>
            <span className="dsb-name">{username}</span>
            <span className="dsb-score" style={{ color: '#4cc977' }}>{myScore}</span>
          </div>
          <div className="dsb-mid">
            <span className="dsb-progress">{questionIdx + 1} / {questionCount}</span>
            <div className="dsb-timer-wrap">
              <div className="dsb-timer-bar" style={{ width: `${timerPct}%`, background: timerColor }} />
            </div>
            <span className="dsb-time" style={{ color: timerColor }}>{timeLeft}s</span>
          </div>
          <div className="dsb-player dsb-opp">
            <span className="dsb-score" style={{ color: '#e63946' }}>{oppScore}</span>
            <span className="dsb-name">{opponent}</span>
            <span className="dsb-avatar opp" style={{background:oppRank.bg}}>{opponent.charAt(0).toUpperCase()}</span>
          </div>
        </div>

        <div className="duel-q-card">
          <div className="duel-q-text">{question.question}</div>
          <div className="duel-options">
            {question.options.map((opt, i) => (
              <button key={i}
                className={`duel-opt ${selected === opt ? 'duel-opt-selected' : ''} ${selected !== null ? 'duel-opt-locked' : ''}`}
                onClick={() => handleAnswer(opt)}
                disabled={selected !== null}
              >
                <span className="duel-opt-letter">{String.fromCharCode(65 + i)}</span>
                {opt}
              </button>
            ))}
          </div>
          {selected && <div className="duel-answered-self">You answered — waiting for opponent…</div>}
          {!selected && opponentAnswered && <div className="duel-opp-hint">⚡ Opponent answered!</div>}
        </div>
      </div>
    );
  }

  // ── ROUND END ────────────────────────────────────────────────────────────────
  if (phase === 'round_end' && roundResult) return (
    <div className="duel-screen">
      <div className="duel-round-result">
        <div className="drr-q">{question?.question}</div>
        <div className="drr-correct">✓ {roundResult.correctAnswer}</div>
        <div className="drr-players">
          {[myRound, oppRound].map((r, i) => r && (
            <div key={i} className={`drr-player ${r.correct ? 'drr-correct-p' : 'drr-wrong-p'}`}>
              <span className="drr-icon">{r.correct ? '✓' : r.answered ? '✗' : '⏱'}</span>
              <span className="drr-name">{r.username}</span>
              <span className="drr-score">{r.score}</span>
            </div>
          ))}
        </div>
        <div className="drr-next">Next question coming…</div>
      </div>
    </div>
  );

  // ── GAME OVER ────────────────────────────────────────────────────────────────
  if (phase === 'game_over' && gameOver) {
    const iWon  = gameOver.winnerName === username;
    const isTie = !gameOver.winnerName;
    const mmrUp = (gameOver.myMmrChange || 0) > 0;
    return (
      <div className="duel-screen">
        {rankUpAnim && (
          <div className={`duel-rankup-overlay ${rankUpAnim.promoted ? 'promoted' : 'demoted'}`}>
            <div className="dru-content">
              <div className="dru-icon">{rankUpAnim.rank.icon}</div>
              <div className="dru-text">{rankUpAnim.promoted ? 'Rank Up!' : 'Rank Down'}</div>
              <div className="dru-rank" style={{ color: rankUpAnim.rank.color }}>{rankUpAnim.rank.name}</div>
            </div>
          </div>
        )}
        <div className="duel-gameover">
          <div className={`duel-result-badge ${iWon ? 'duel-win' : isTie ? 'duel-tie' : 'duel-loss'}`}>
            <span className="drb-icon">{iWon ? '🏆' : isTie ? '🤝' : '📋'}</span>
            <span className="drb-text">{iWon ? 'Victory!' : isTie ? 'Tie Game' : 'Defeat'}</span>
          </div>

          <div className="duel-mmr-result">
            <div className="dmr-change" style={{ color: mmrUp ? '#4cc977' : gameOver.myMmrChange === 0 ? '#aaa' : '#e63946' }}>
              {gameOver.myMmrChange > 0 ? `+${gameOver.myMmrChange}` : gameOver.myMmrChange} MMR
            </div>
            <div className="dmr-after">
              <RankBadge mmr={gameOver.myMmrAfter} size="md" showName showMmr />
            </div>
          </div>

          <div className="duel-final-scores">
            {gameOver.scores.map(s => {
              const r = getRank(s.mmrAfter || 1000);
              return (
                <div key={s.username} className={`dfs-row ${s.username === username ? 'dfs-me' : ''}`}>
                  <span className="dfs-name">{s.username}{s.username === username ? ' (You)' : ''}</span>
                  <span className="dfs-score">{s.score}/10</span>
                  <span className="dfs-mmr" style={{ color: (s.mmrChange || 0) > 0 ? '#4cc977' : (s.mmrChange || 0) < 0 ? '#e63946' : '#aaa' }}>
                    {s.mmrChange > 0 ? `+${s.mmrChange}` : s.mmrChange} MMR
                  </span>
                  <span className="dfs-coins">+{s.coins} 🪙</span>
                </div>
              );
            })}
          </div>

          <div className="duel-gameover-btns">
            <button className="duel-find-btn" onClick={() => { setPhase('idle'); setGameOver(null); setScores([]); }}>Play Again</button>
            {onViewLeaderboard && <button className="duel-ladder-btn-sm" onClick={onViewLeaderboard}>View Ladder</button>}
            <button className="duel-back-btn" onClick={onBack}>Back to Home</button>
          </div>
        </div>
      </div>
    );
  }

  // ── LEFT ─────────────────────────────────────────────────────────────────────
  if (phase === 'left') return (
    <div className="duel-screen">
      <div className="duel-waiting">
        <div className="duel-wait-icon">😬</div>
        <h2 className="duel-wait-title">Opponent disconnected</h2>
        <p className="duel-wait-sub">No MMR change — forfeit doesn't count.</p>
        <div className="duel-gameover-btns">
          <button className="duel-find-btn" onClick={() => setPhase('idle')}>Find New Match</button>
          <button className="duel-back-btn" onClick={onBack}>Back to Home</button>
        </div>
      </div>
    </div>
  );

  return null;
}

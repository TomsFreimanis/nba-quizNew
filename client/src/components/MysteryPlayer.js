import React, { useState, useMemo, useCallback } from 'react';
import { CARDS, RARITY_COLORS, RARITY_GLOWS, RARITY_LABELS, NBA_PHOTO_URL } from '../data/cards';
import './MysteryPlayer.css';

const ROUND_COUNT = 5;
// Coins at 0 hints revealed, 1 hint, 2 hints, 3 hints, 4 hints
const HINT_REWARDS = [500, 300, 150, 75, 30];

const HINTS = [
  { key: 'pos',        label: 'Position',      icon: '📍' },
  { key: 'teamSeason', label: 'Team & Season', icon: '🏀' },
  { key: 'stats',      label: 'Career Stats',  icon: '📊' },
  { key: 'special',    label: 'Achievement',   icon: '⭐' },
];

function pickRounds() {
  return [...CARDS].sort(() => Math.random() - 0.5).slice(0, ROUND_COUNT);
}

function makeChoices(correct, all) {
  const pool = all.filter(c => c.id !== correct.id);
  const sameRarity = pool.filter(c => c.rarity === correct.rarity);
  const src = sameRarity.length >= 3 ? sameRarity : pool;
  const decoys = [...src].sort(() => Math.random() - 0.5).slice(0, 3);
  return [correct, ...decoys].sort(() => Math.random() - 0.5);
}

function getHintText(card, key) {
  switch (key) {
    case 'pos':        return card.pos;
    case 'teamSeason': return `${card.team} · ${card.season}`;
    case 'stats':      return `${card.pts} PPG  /  ${card.reb} RPG  /  ${card.ast} APG`;
    case 'special':    return card.special;
    default: return '???';
  }
}

// ── Round view ──────────────────────────────────────────────────────────────────
function RoundView({ card, choices, hintsShown, phase, selected, onRevealHint, onSelect, onNext, roundIdx, totalRounds, results }) {
  const [imgFailed, setImgFailed] = useState(false);
  const rc       = RARITY_COLORS[card.rarity];
  const glow     = RARITY_GLOWS[card.rarity];
  const photoUrl = NBA_PHOTO_URL(card.nbaId);
  const reward   = HINT_REWARDS[Math.min(hintsShown, HINT_REWARDS.length - 1)];
  const answered = phase === 'correct' || phase === 'wrong';
  const isCorrect = phase === 'correct';
  const nextReward = HINT_REWARDS[Math.min(hintsShown + 1, HINT_REWARDS.length - 1)];

  return (
    <div className="mp-content">
      {/* Mystery Card */}
      <div className="mp-card-side">
        <div
          className={`mp-card-wrap ${answered ? (isCorrect ? 'mp-revealed-correct' : 'mp-revealed-wrong') : ''}`}
          style={{ '--c1': card.c1, '--c2': card.c2, '--rc': rc, '--glow': glow }}
        >
          {card.rarity === 'legendary' && answered && <div className="mp-holo-border" />}
          <div className="mp-card-inner">
            <div className="mp-photo-wrap">
              {photoUrl && !imgFailed ? (
                <img
                  className={`mp-photo ${answered ? 'mp-photo-revealed' : 'mp-photo-hidden'}`}
                  src={photoUrl}
                  alt={answered ? card.name : '?'}
                  onError={() => setImgFailed(true)}
                  draggable={false}
                />
              ) : (
                <div className="mp-no-photo">
                  {answered
                    ? <span className="mp-jersey">#{card.jersey}</span>
                    : <span className="mp-mystery-icon">👤</span>
                  }
                </div>
              )}
              {!answered && <div className="mp-photo-overlay"><span className="mp-q-mark">?</span></div>}
              <div className="mp-photo-fade" />
            </div>
            <div className="mp-card-info">
              <div className="mp-card-name">{answered ? card.name : '— — —'}</div>
              <div className="mp-card-team">{answered ? `${card.team} · ${card.season}` : '???'}</div>
              <div className="mp-card-rarity" style={{ color: rc }}>{RARITY_LABELS[card.rarity]}</div>
            </div>
          </div>
        </div>

        {!answered ? (
          <div className="mp-reward-preview">
            <span className="mp-reward-lbl">Correct now =</span>
            <span className="mp-reward-val">🪙 {reward}</span>
          </div>
        ) : (
          <div className={`mp-result-badge ${isCorrect ? 'mp-result-correct' : 'mp-result-wrong'}`}>
            {isCorrect
              ? `🎉 +${results[results.length - 1]?.coinsEarned} 🪙`
              : `❌ ${card.name}`
            }
          </div>
        )}
      </div>

      {/* Right Panel */}
      <div className="mp-right-side">
        {/* Hints */}
        <div className="mp-hints">
          <div className="mp-hints-header">
            <span>Hints</span>
            <span className="mp-hints-sub">{hintsShown}/{HINTS.length} revealed</span>
          </div>
          <div className="mp-hints-list">
            {HINTS.map((hint, i) => (
              <div key={hint.key} className={`mp-hint-row ${i < hintsShown ? 'mp-hint-visible' : 'mp-hint-locked'}`}>
                <span className="mp-hint-icon">{hint.icon}</span>
                <span className="mp-hint-label">{hint.label}</span>
                <span className="mp-hint-value">
                  {i < hintsShown ? getHintText(card, hint.key) : '• • •'}
                </span>
              </div>
            ))}
          </div>
          {!answered && hintsShown < HINTS.length && (
            <button className="mp-reveal-hint-btn" onClick={onRevealHint}>
              <span>👁 Reveal hint</span>
              <span className="mp-hint-btn-reward">({nextReward} 🪙 if correct)</span>
            </button>
          )}
        </div>

        {/* Choices or result */}
        {!answered ? (
          <div className="mp-choices">
            <div className="mp-choices-label">Who is this player?</div>
            {choices.map((choice, i) => (
              <button
                key={choice.id}
                className="mp-choice-btn"
                onClick={() => onSelect(choice)}
              >
                <span className="mp-choice-letter">{String.fromCharCode(65 + i)}</span>
                <span className="mp-choice-name">{choice.name}</span>
                <span className="mp-choice-rarity" style={{ color: RARITY_COLORS[choice.rarity] }}>
                  {choice.rarity}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="mp-answer-section">
            <div className={`mp-answer-result ${isCorrect ? 'mar-correct' : 'mar-wrong'}`}>
              {isCorrect ? (
                <>
                  <div className="mar-icon">🎯</div>
                  <div className="mar-title">Correct!</div>
                  <div className="mar-sub">
                    {hintsShown === 0 ? 'No hints — maximum reward!' : `Used ${hintsShown} hint${hintsShown > 1 ? 's' : ''}`}
                  </div>
                </>
              ) : (
                <>
                  <div className="mar-icon">😬</div>
                  <div className="mar-title">Nope!</div>
                  <div className="mar-sub">It was <strong>{card.name}</strong></div>
                  <div className="mar-sub">You guessed: {selected?.name}</div>
                </>
              )}
            </div>
            <button className="btn-primary mp-next-btn" onClick={onNext}>
              {roundIdx + 1 >= totalRounds ? 'See Results 🏆' : 'Next Player →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Summary ─────────────────────────────────────────────────────────────────────
function Summary({ results, totalCoins, onFinish, onBack }) {
  const correct = results.filter(r => r.correct).length;
  return (
    <div className="mp-summary">
      <div className="mp-sum-hero">
        <div className="mp-sum-icon">🕵️</div>
        <h1 className="mp-sum-title">Mystery Complete!</h1>
        <p className="mp-sum-sub">{correct}/{ROUND_COUNT} identified correctly</p>
      </div>

      <div className="mp-sum-coins">
        <span className="mp-sc-icon">🪙</span>
        <span className="mp-sc-val">{totalCoins}</span>
        <span className="mp-sc-lbl">coins earned</span>
      </div>

      <div className="mp-sum-list">
        {results.map((r, i) => (
          <div key={i} className={`mp-sum-row ${r.correct ? 'sum-correct' : 'sum-wrong'}`}>
            <span className="msr-num">{i + 1}</span>
            <div className="msr-card-info">
              <span className="msr-name">{r.card.name}</span>
              <span className="msr-rarity" style={{ color: RARITY_COLORS[r.card.rarity] }}>{r.card.rarity}</span>
            </div>
            <span className="msr-hints">
              {r.hintsUsed === 0 ? '🔥 No hints' : `${r.hintsUsed} hint${r.hintsUsed > 1 ? 's' : ''}`}
            </span>
            <span className={`msr-coins ${r.correct ? 'msr-coins-earned' : 'msr-coins-zero'}`}>
              {r.correct ? `+${r.coinsEarned} 🪙` : '—'}
            </span>
          </div>
        ))}
      </div>

      <div className="mp-sum-actions">
        <button className="btn-primary" onClick={onFinish}>Claim Coins & Exit →</button>
        <button className="btn-secondary" onClick={onBack}>Back to Home</button>
      </div>
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────────
export default function MysteryPlayer({ onFinish, onBack }) {
  const rounds   = useMemo(pickRounds, []);
  const [roundIdx,   setRoundIdx]   = useState(0);
  const [hintsShown, setHintsShown] = useState(0);
  const [choices,    setChoices]    = useState(() => makeChoices(rounds[0], CARDS));
  const [phase,      setPhase]      = useState('guessing');
  const [selected,   setSelected]   = useState(null);
  const [totalCoins, setTotalCoins] = useState(0);
  const [results,    setResults]    = useState([]);

  const card = rounds[roundIdx];

  const handleRevealHint = useCallback(() => {
    setHintsShown(h => Math.min(h + 1, HINTS.length));
  }, []);

  const handleSelect = useCallback((choice) => {
    if (phase !== 'guessing') return;
    const isCorrect = choice.id === card.id;
    const earned    = isCorrect ? HINT_REWARDS[Math.min(hintsShown, HINT_REWARDS.length - 1)] : 0;
    setSelected(choice);
    setTotalCoins(c => c + earned);
    setResults(r => [...r, { card, correct: isCorrect, coinsEarned: earned, hintsUsed: hintsShown }]);
    setPhase(isCorrect ? 'correct' : 'wrong');
  }, [phase, card, hintsShown]);

  const handleNext = useCallback(() => {
    const next = roundIdx + 1;
    if (next >= ROUND_COUNT) {
      setPhase('done');
    } else {
      setRoundIdx(next);
      setHintsShown(0);
      setChoices(makeChoices(rounds[next], CARDS));
      setSelected(null);
      setPhase('guessing');
    }
  }, [roundIdx, rounds]);

  if (phase === 'done') {
    return (
      <Summary
        results={results}
        totalCoins={totalCoins}
        onFinish={() => onFinish(totalCoins)}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="mystery-player">
      {/* Header */}
      <div className="mp-header">
        <button className="btn-secondary mp-back-btn" onClick={onBack}>← Back</button>
        <div className="mp-title">
          <span className="mp-title-icon">🕵️</span>
          <span className="mp-title-text">Mystery Player</span>
        </div>
        <div className="mp-coins-earned">
          <span>🪙</span>
          <span className="mp-coins-val">{totalCoins}</span>
        </div>
      </div>

      {/* Round progress dots */}
      <div className="mp-progress">
        {rounds.map((_, i) => {
          const r = results[i];
          let cls = '';
          if (i < results.length) cls = r.correct ? 'done-correct' : 'done-wrong';
          else if (i === roundIdx) cls = 'current';
          return (
            <div key={i} className={`mp-prog-dot ${cls}`}>
              <span className="mp-prog-num">{i + 1}</span>
            </div>
          );
        })}
      </div>

      <RoundView
        key={roundIdx}
        card={card}
        choices={choices}
        hintsShown={hintsShown}
        phase={phase}
        selected={selected}
        onRevealHint={handleRevealHint}
        onSelect={handleSelect}
        onNext={handleNext}
        roundIdx={roundIdx}
        totalRounds={ROUND_COUNT}
        results={results}
      />
    </div>
  );
}

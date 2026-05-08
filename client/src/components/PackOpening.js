import React, { useState, useEffect, useRef } from 'react';
import { CARDS, RARITY_COLORS, RARITY_LABELS, NBA_PHOTO_URLS } from '../data/cards';
import './PackOpening.css';

// ── Reel geometry ──────────────────────────────────────────────────────────────
const CARD_W   = 128;
const GAP      = 10;
const STEP     = CARD_W + GAP;
const VISIBLE  = 5;
const VP_W     = VISIBLE * CARD_W + (VISIBLE - 1) * GAP;
const PRE      = 22;
const REEL_LEN = PRE + 1 + 7;
const RES_IDX  = PRE;
const TARGET_X = (VP_W / 2) - (RES_IDX * STEP) - (CARD_W / 2);

const RARITY_ORDER = { legendary: 4, epic: 3, rare: 2, common: 1 };
const CONF_COLORS  = ['#FFD700','#e63946','#9B5DE5','#00B4D8','#4cc977','#ffffff','#FFA500'];

function getBestCard(cards) {
  return [...cards].sort((a, b) => RARITY_ORDER[b.rarity] - RARITY_ORDER[a.rarity])[0];
}

// Sort common→rare→epic→legendary so best card flips last = max suspense
function sortForReveal(cards) {
  return [...cards].sort((a, b) => RARITY_ORDER[a.rarity] - RARITY_ORDER[b.rarity]);
}

function buildReel(resultCard) {
  return Array.from({ length: REEL_LEN }, (_, i) => {
    if (i === RES_IDX) return resultCard;
    let c;
    do { c = CARDS[Math.floor(Math.random() * CARDS.length)]; }
    while (c.id === resultCard.id);
    return c;
  });
}

// ── Confetti ───────────────────────────────────────────────────────────────────
function Confetti() {
  const pieces = useRef(
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x:      Math.random() * 100,
      delay:  Math.random() * 0.6,
      dur:    1.8 + Math.random() * 1.6,
      color:  CONF_COLORS[i % CONF_COLORS.length],
      size:   6 + Math.random() * 10,
      rot:    Math.random() * 360,
      circle: Math.random() > 0.4,
    }))
  ).current;

  return (
    <div className="conf-wrap" aria-hidden>
      {pieces.map(p => (
        <div key={p.id} className="conf-piece"
          style={{
            left:              `${p.x}%`,
            background:        p.color,
            width:             p.size,
            height:            p.circle ? p.size : p.size * 0.45,
            borderRadius:      p.circle ? '50%' : '2px',
            animationDelay:    `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            transform:         `rotate(${p.rot}deg)`,
          }} />
      ))}
    </div>
  );
}

// ── Reel card (used inside the spinning reel) ─────────────────────────────────
function ReelCard({ card, glow = false }) {
  const [imgStage, setImgStage] = useState(0);
  const rc   = RARITY_COLORS[card.rarity];
  const urls = NBA_PHOTO_URLS(card.nbaId);
  const photo = urls[imgStage] || null;
  return (
    <div className={`rc rc-reel rc-${card.rarity} ${glow ? 'rc-glow' : ''}`}
      style={{ '--c1': card.c1, '--c2': card.c2, '--rc': rc }}>
      <div className="rc-bg" />
      <div className="rc-img-wrap">
        {photo
          ? <img className="rc-photo" src={photo} alt={card.name} onError={() => setImgStage(s => s + 1)} draggable={false} />
          : <div className="rc-no-photo"><span className="rc-num">#{card.jersey}</span></div>}
        <div className="rc-img-fade" />
      </div>
      <div className="rc-foot">
        <div className="rc-foot-name">{card.name.split(' ').slice(-1)[0]}</div>
        <div className="rc-foot-rar" style={{ color: rc }}>{card.rarity}</div>
      </div>
      {glow && card.rarity === 'legendary' && <div className="rc-legendary-aura" />}
    </div>
  );
}

// ── Flip card (used in the reveal grid) ───────────────────────────────────────
function FlipCard({ card, flipped }) {
  const [imgStage, setImgStage] = useState(0);
  const rc   = RARITY_COLORS[card.rarity];
  const urls = NBA_PHOTO_URLS(card.nbaId);
  const photo = urls[imgStage] || null;
  return (
    <div className="flip-card">
      <div className={`flip-inner ${flipped ? 'flipped' : ''}`}>
        {/* Back face */}
        <div className="flip-back">
          <div className="flip-back-logo">🏀</div>
          <div className="flip-back-text">NBA QUIZ</div>
        </div>
        {/* Front face */}
        <div className={`flip-front rc rc-done rc-${card.rarity}`}
          style={{ '--c1': card.c1, '--c2': card.c2, '--rc': rc }}>
          <div className="rc-bg" />
          <div className="rc-img-wrap">
            {photo
              ? <img className="rc-photo" src={photo} alt={card.name} onError={() => setImgStage(s => s + 1)} draggable={false} />
              : <div className="rc-no-photo"><span className="rc-num">#{card.jersey}</span></div>}
            <div className="rc-img-fade" />
          </div>
          <div className="rc-foot">
            <div className="rc-foot-name">{card.name.split(' ').slice(-1)[0]}</div>
            <div className="rc-foot-rar" style={{ color: rc }}>{card.rarity}</div>
          </div>
          {card.rarity === 'legendary' && <div className="rc-legendary-aura" />}
        </div>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
// Phase flow: init → spinning → landing → flipping → done
export default function PackOpening({ pack, pulledCards, onCollect }) {
  const [phase,       setPhase]       = useState('init');
  const [reel,        setReel]        = useState([]);
  const [landedCard,  setLandedCard]  = useState(null);
  const [flipCount,   setFlipCount]   = useState(0);
  const [confetti,    setConfetti]    = useState(false);
  const [legendFlash, setLegendFlash] = useState(false);
  const [canSkip,     setCanSkip]     = useState(false);

  const trackRef = useRef(null);
  const phaseRef = useRef('init');
  useEffect(() => { phaseRef.current = phase; }, [phase]);

  const bestCard    = getBestCard(pulledCards);
  const sortedCards = sortForReveal(pulledCards);

  // Attach CSS transitionend once
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const handler = () => {
      if (phaseRef.current === 'spinning') setPhase('landing');
    };
    el.addEventListener('transitionend', handler);
    return () => el.removeEventListener('transitionend', handler);
  }, []);

  // Build reel for best card, start spin
  useEffect(() => {
    setReel(buildReel(bestCard));
    const el = trackRef.current;
    if (el) {
      el.style.transition = 'none';
      el.style.transform  = 'translateX(0)';
      el.getBoundingClientRect();
    }
    setPhase('init');

    const skipTid = setTimeout(() => setCanSkip(true), 1000);
    const spinTid = setTimeout(() => {
      if (!trackRef.current) return;
      trackRef.current.style.transition = 'transform 4800ms cubic-bezier(0.05,0.85,0.14,1)';
      trackRef.current.style.transform  = `translateX(${TARGET_X}px)`;
      setPhase('spinning');
    }, 600);

    return () => { clearTimeout(spinTid); clearTimeout(skipTid); };
  }, []); // eslint-disable-line

  // Landing: flash effects, then switch to flip-reveal grid
  useEffect(() => {
    if (phase !== 'landing') return;
    setLandedCard(bestCard);

    if (bestCard.rarity === 'legendary') {
      setLegendFlash(true);
      setConfetti(true);
      setTimeout(() => setLegendFlash(false), 800);
    } else if (bestCard.rarity === 'epic') {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 2500);
    }

    // Show reel result for 1.4s then switch to flip grid
    const tid = setTimeout(() => {
      setConfetti(false);
      setPhase('flipping');

      // Stagger flip reveals 520ms apart (common→rare→epic→legendary)
      sortedCards.forEach((card, i) => {
        setTimeout(() => {
          setFlipCount(i + 1);
          if (card.rarity === 'legendary') {
            setLegendFlash(true);
            setConfetti(true);
            setTimeout(() => setLegendFlash(false), 800);
            setTimeout(() => setConfetti(false), 4000);
          } else if (card.rarity === 'epic') {
            setConfetti(true);
            setTimeout(() => setConfetti(false), 2500);
          }
        }, i * 520);
      });

      setTimeout(() => setPhase('done'), sortedCards.length * 520 + 900);
    }, 1400);

    return () => clearTimeout(tid);
  }, [phase]); // eslint-disable-line

  const handleSkip = () => {
    setFlipCount(sortedCards.length);
    setPhase('done');
    setConfetti(false);
  };

  const showReel     = phase === 'init' || phase === 'spinning' || phase === 'landing';
  const showFlipGrid = phase === 'flipping' || phase === 'done';
  const isDone       = phase === 'done';

  return (
    <div className="po-overlay">
      {confetti    && <Confetti />}
      {legendFlash && <div className="po-legend-flash" />}

      <div className="po-modal">
        {/* Header */}
        <div className="po-header">
          <span className="po-pack-icon">{pack.icon}</span>
          <span className="po-pack-name">{pack.name}</span>
          {showReel && (
            <div className="po-best-badge" style={{ color: RARITY_COLORS[bestCard.rarity] }}>
              Best: {RARITY_LABELS[bestCard.rarity]}
            </div>
          )}
        </div>

        {/* Reel — single spin for best card */}
        {showReel && (
          <div className="po-reel-section">
            <div className="po-viewport" style={{ width: VP_W }}>
              <div className="po-center-glow" style={{ width: CARD_W }} />
              <div className="po-arrow po-arrow-t">▼</div>
              <div className="po-arrow po-arrow-b">▲</div>
              <div className="po-vignette po-vignette-l" />
              <div className="po-vignette po-vignette-r" />
              <div ref={trackRef} className="po-track">
                {reel.map((card, i) => (
                  <ReelCard key={i} card={card} glow={i === RES_IDX && phase === 'landing'} />
                ))}
              </div>
            </div>
            <div className="po-status">
              {(phase === 'init' || phase === 'spinning') && (
                <span className="po-status-spin">
                  <span className="po-spinner" />
                  {phase === 'init' ? 'Preparing…' : 'Spinning for best card…'}
                </span>
              )}
              {phase === 'landing' && landedCard && (
                <span className="po-status-land" style={{ color: RARITY_COLORS[landedCard.rarity] }}>
                  {RARITY_LABELS[landedCard.rarity]} — {landedCard.name}!
                </span>
              )}
            </div>
            {canSkip && phase === 'spinning' && (
              <button className="po-skip-btn" onClick={handleSkip}>Skip All</button>
            )}
          </div>
        )}

        {/* Flip reveal grid */}
        {showFlipGrid && (
          <div className="po-flip-section">
            <div className="po-flip-title">
              {isDone ? '🎉 Pack Opened!' : `Revealing… ${flipCount} / ${sortedCards.length}`}
            </div>
            <div className="po-flip-grid">
              {sortedCards.map((card, i) => (
                <FlipCard key={`${card.id}-${i}`} card={card} flipped={i < flipCount} />
              ))}
            </div>
            {isDone && (
              <>
                <div className="po-rar-summary">
                  {['legendary','epic','rare','common'].map(r => {
                    const n = pulledCards.filter(c => c.rarity === r).length;
                    return n ? (
                      <span key={r} style={{ color: RARITY_COLORS[r], fontFamily:'Orbitron', fontWeight:700 }}>
                        {n}× {r.charAt(0).toUpperCase() + r.slice(1)}
                      </span>
                    ) : null;
                  })}
                </div>
                <button className="btn-primary po-collect-btn" onClick={onCollect}>
                  ✓ Add to Collection
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

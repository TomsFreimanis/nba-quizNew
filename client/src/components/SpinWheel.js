import React, { useState, useRef, useEffect } from 'react';
import './SpinWheel.css';

const PRIZES = [
  { id: 'coins_100',   label: '100',    sublabel: 'COINS',     color: '#e63946', dark: '#8B0000', coins: 100,  icon: '🪙' },
  { id: 'pack_rookie', label: 'PACK',   sublabel: 'ROOKIE',    color: '#ffa500', dark: '#7a4f00', pack: 'rookie', coins: 0, icon: '📦' },
  { id: 'coins_250',   label: '250',    sublabel: 'COINS',     color: '#9B5DE5', dark: '#4a1a8a', coins: 250, icon: '🪙' },
  { id: 'coins_50',    label: '50',     sublabel: 'COINS',     color: '#4cc977', dark: '#1a5c35', coins: 50,  icon: '🪙' },
  { id: 'coins_500',   label: '500',    sublabel: 'COINS',     color: '#FFD700', dark: '#7a6500', coins: 500, icon: '💰' },
  { id: 'xp_boost',   label: 'XP',     sublabel: '×2 NEXT',   color: '#00b4d8', dark: '#005a6e', xpBoost: true, coins: 0, icon: '⚡' },
  { id: 'coins_150',   label: '150',    sublabel: 'COINS',     color: '#FF6B35', dark: '#7a2e0a', coins: 150, icon: '🪙' },
  { id: 'pack_elite',  label: 'ELITE',  sublabel: 'PACK',      color: '#c994ff', dark: '#4a1a6e', pack: 'elite', coins: 0, icon: '💎' },
];
const WEIGHTS = [25, 10, 15, 20, 8, 7, 13, 2]; // sum 100
const SEG = 360 / PRIZES.length; // 45°

function weightedRandom() {
  const total = WEIGHTS.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < WEIGHTS.length; i++) {
    r -= WEIGHTS[i];
    if (r <= 0) return i;
  }
  return 0;
}

const SPIN_KEY = 'nba_spin_date';

function canSpin() {
  return localStorage.getItem(SPIN_KEY) !== new Date().toISOString().split('T')[0];
}

export default function SpinWheel({ onClose, onClaim }) {
  const [spinning,   setSpinning]   = useState(false);
  const [rotation,   setRotation]   = useState(0);
  const [winner,     setWinner]     = useState(null);
  const [claimed,    setClaimed]    = useState(!canSpin());
  const [showPrize,  setShowPrize]  = useState(false);
  const rotRef = useRef(0);
  const timerRef = useRef(null);

  const handleSpin = () => {
    if (spinning || claimed) return;
    const idx = weightedRandom();
    const prize = PRIZES[idx];

    // Center of segment idx is at idx*SEG + SEG/2 degrees (measuring from top, clockwise)
    // To bring it to pointer (top), wheel must rotate: 360 - (idx*SEG + SEG/2) + N*360
    const target = 360 - (idx * SEG + SEG / 2);
    const totalSpin = rotRef.current + 5 * 360 + ((target - rotRef.current % 360 + 360) % 360);

    rotRef.current = totalSpin;
    setRotation(totalSpin);
    setSpinning(true);

    timerRef.current = setTimeout(() => {
      setSpinning(false);
      setWinner(prize);
      setShowPrize(true);
      setClaimed(true);
      localStorage.setItem(SPIN_KEY, new Date().toISOString().split('T')[0]);
    }, 4200);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleClaim = () => {
    if (winner) onClaim(winner);
    setShowPrize(false);
    onClose();
  };

  return (
    <div className="sw-overlay" onClick={e => e.target === e.currentTarget && !spinning && onClose()}>
      <div className="sw-modal">
        <div className="sw-header">
          <div className="sw-eyebrow">Daily Reward</div>
          <h2 className="sw-title">🎡 Spin the Wheel</h2>
          <div className="sw-sub">{claimed && !showPrize ? "Come back tomorrow for another spin!" : "One free spin every day"}</div>
        </div>

        <div className="sw-arena">
          {/* Pointer */}
          <div className="sw-pointer">▼</div>

          {/* Wheel */}
          <div className="sw-wheel-wrap">
            <div
              className="sw-wheel"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: spinning ? 'transform 4s cubic-bezier(0.17,0.67,0.12,0.99)' : 'none',
              }}
            >
              {PRIZES.map((p, i) => (
                <div
                  key={p.id}
                  className="sw-segment"
                  style={{
                    '--seg-color': p.color,
                    '--seg-dark': p.dark,
                    '--seg-angle': `${i * SEG}deg`,
                    '--seg-deg': `${SEG}deg`,
                  }}
                >
                  <div className="sw-seg-content" style={{ transform: `rotate(${i * SEG + SEG / 2}deg) translateY(-90px)` }}>
                    <span className="sw-seg-icon">{p.icon}</span>
                    <span className="sw-seg-label">{p.label}</span>
                    <span className="sw-seg-sub">{p.sublabel}</span>
                  </div>
                </div>
              ))}
              <div className="sw-center-cap">🏀</div>
            </div>
          </div>
        </div>

        <button
          className={`sw-spin-btn ${spinning ? 'spinning' : ''} ${claimed && !showPrize ? 'used' : ''}`}
          onClick={handleSpin}
          disabled={spinning || (claimed && !showPrize)}
        >
          {spinning ? 'Spinning…' : claimed && !showPrize ? '✓ Spun Today' : 'SPIN!'}
        </button>

        {!spinning && !showPrize && <button className="sw-close-btn" onClick={onClose}>Close</button>}
      </div>

      {/* Prize popup */}
      {showPrize && winner && (
        <div className="sw-prize-overlay">
          <div className="sw-prize-card" style={{ '--prize-color': winner.color }}>
            <div className="sw-prize-shimmer" />
            <div className="sw-prize-icon">{winner.icon}</div>
            <div className="sw-prize-label">You won!</div>
            <div className="sw-prize-value" style={{ color: winner.color }}>
              {winner.coins > 0 ? `${winner.coins} Coins` : winner.pack === 'rookie' ? 'Rookie Pack' : winner.pack === 'elite' ? 'Elite Pack' : 'XP ×2 Boost'}
            </div>
            <div className="sw-prize-desc">
              {winner.coins > 0 ? 'Added to your wallet' : winner.xpBoost ? 'Active for your next game' : 'Pack added to inventory'}
            </div>
            <button className="sw-claim-btn" onClick={handleClaim}>Claim →</button>
          </div>
        </div>
      )}
    </div>
  );
}

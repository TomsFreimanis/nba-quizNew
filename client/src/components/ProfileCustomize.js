import React, { useState, useEffect } from 'react';
import { getLevelProgress } from '../data/quests';
import './ProfileCustomize.css';

const API = (process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/$/, '');

const TIER_ORDER  = ['basic', 'premium', 'legendary', 'special'];
const TIER_LABELS = { basic: 'Basic', premium: 'Premium', legendary: 'Legendary', special: '★ Special Edition' };
const TIER_COLORS = { basic: '#4cc977', premium: '#00B4D8', legendary: '#FFD700', special: '#FF6B35' };

export default function ProfileCustomize({
  username, coins, xp = 0, collection = [], ownedBanners = [],
  equippedBanner, onEquip, onBack, onLogout,
}) {
  const [banners,   setBanners]   = useState([]);
  const [preview,   setPreview]   = useState(null);
  const levelInfo = getLevelProgress(xp);

  useEffect(() => {
    fetch(`${API}/api/banners`)
      .then(r => r.json())
      .then(setBanners)
      .catch(() => {});
  }, []);

  const grouped = TIER_ORDER.map(tier => ({
    tier,
    items: banners.filter(b => b.tier === tier),
  })).filter(g => g.items.length);

  const previewBanner = preview || equippedBanner || null;

  return (
    <div className="pc-root">
      {/* Profile card preview */}
      <div className="pc-preview-wrap"
        style={{ background: previewBanner?.image ? '#000' : (previewBanner?.gradient || 'linear-gradient(135deg,#1a0a2e,#2d1b69)') }}>
        {previewBanner?.image && (
          <img className="pc-preview-img" src={previewBanner.image} alt="" />
        )}
        <div className="pc-preview-overlay" />
        <div className="pc-profile-card">
          <div className="pc-avatar">
            {username ? username.charAt(0).toUpperCase() : '?'}
          </div>
          <div className="pc-username">{username}</div>
          <div className="pc-level-row">
            <span className="pc-level-badge">LV {levelInfo.level}</span>
            <span className="pc-level-title">{levelInfo.title}</span>
          </div>
          <div className="pc-stats-row">
            <div className="pc-stat"><span className="pc-stat-val">{coins.toLocaleString()}</span><span className="pc-stat-lab">Coins</span></div>
            <div className="pc-stat"><span className="pc-stat-val">{collection.length}</span><span className="pc-stat-lab">Cards</span></div>
            <div className="pc-stat"><span className="pc-stat-val">{ownedBanners.length}</span><span className="pc-stat-lab">Banners</span></div>
          </div>
          {previewBanner && (
            <div className="pc-banner-tag" style={{ color: TIER_COLORS[previewBanner.tier] }}>
              {previewBanner.name}
            </div>
          )}
        </div>
      </div>

      {/* Banner selector */}
      <div className="pc-selector">
        <div className="pc-selector-header">
          <button className="pc-back-btn" onClick={onBack}>← Back</button>
          <h2 className="pc-selector-title">Profile Banners</h2>
          {onLogout && (
            <button className="pc-logout-btn" onClick={onLogout}>Sign Out</button>
          )}
        </div>

        {/* None option */}
        <div className="pc-tier-section">
          <div className="pc-tier-label" style={{ color: '#666' }}>Default</div>
          <div className="pc-banner-grid">
            <div
              className={`pc-banner-card pc-banner-none ${!equippedBanner ? 'pc-equipped' : ''}`}
              onClick={() => { setPreview(null); onEquip(null); }}
              onMouseEnter={() => setPreview(null)}
            >
              <div className="pcb-gradient" style={{ background: 'linear-gradient(135deg,#1a0a2e,#2d1b69)' }} />
              <div className="pcb-name">Default</div>
              <div className="pcb-desc">No banner</div>
              {!equippedBanner && <div className="pcb-equipped-tag">Equipped</div>}
            </div>
          </div>
        </div>

        {grouped.map(({ tier, items }) => (
          <div key={tier} className="pc-tier-section">
            <div className="pc-tier-label" style={{ color: TIER_COLORS[tier] }}>
              {TIER_LABELS[tier]}
            </div>
            <div className="pc-banner-grid">
              {items.map(b => {
                const owned    = ownedBanners.includes(b.id);
                const equipped = equippedBanner?.id === b.id;
                return (
                  <div
                    key={b.id}
                    className={`pc-banner-card ${equipped ? 'pc-equipped' : ''} ${!owned ? 'pc-locked' : ''} ${b.tier === 'special' ? 'pcb-special' : ''}`}
                    onClick={() => { if (owned) { setPreview(b); onEquip(b); } }}
                    onMouseEnter={() => setPreview(b)}
                    onMouseLeave={() => setPreview(null)}
                  >
                    {b.image
                      ? <img className="pcb-image" src={b.image} alt={b.name} />
                      : <div className="pcb-gradient" style={{ background: b.gradient }} />
                    }
                    {b.tier === 'legendary' && <div className="pcb-legendary-sheen" />}
                    {b.tier === 'special' && <div className="pcb-special-sheen" />}
                    <div className="pcb-name">{b.name}</div>
                    <div className="pcb-desc">{b.description}</div>
                    {!owned && (
                      <div className="pcb-lock-overlay">
                        <span className="pcb-lock-icon">🔒</span>
                        <span className="pcb-lock-price">{b.price.toLocaleString()} coins</span>
                        <span className="pcb-lock-tier" style={{ color: TIER_COLORS[b.tier] }}>Buy in Shop</span>
                      </div>
                    )}
                    {equipped && <div className="pcb-equipped-tag">Equipped</div>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

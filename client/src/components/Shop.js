import React, { useState, useEffect } from 'react';
import './Shop.css';

const API = (process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/$/, '');

const TIER_CONFIG = {
  basic:     { label: '⚡ Basic Power-Ups',     desc: 'Affordable boosts for every game',           color: '#4cc977' },
  premium:   { label: '💎 Premium Power-Ups',   desc: 'Powerful abilities for serious players',     color: '#00b4d8' },
  legendary: { label: '👑 Legendary Upgrades',  desc: 'Rare upgrades that change how packs work',  color: '#FFD700' },
};

const BANNER_TIER_CONFIG = {
  basic:     { label: '🖼️ Basic Banners',     desc: 'Starter profile styles',                    color: '#4cc977' },
  premium:   { label: '✨ Premium Banners',    desc: 'Stand out with premium team-inspired looks', color: '#00b4d8' },
  legendary: { label: '👑 Legendary Banners', desc: 'The rarest, most prestigious profile banners', color: '#FFD700' },
};

export default function Shop({ coins, inventory, ownedBanners = [], onPurchase, onBuyBanner, onBack }) {
  const [items,   setItems]   = useState([]);
  const [banners, setBanners] = useState([]);
  const [flash,   setFlash]   = useState(null);
  const [section, setSection] = useState('powerups'); // 'powerups' | 'banners'

  useEffect(() => {
    fetch(`${API}/api/shop`)
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]));
    fetch(`${API}/api/banners`)
      .then(r => r.json())
      .then(setBanners)
      .catch(() => setBanners([]));
  }, []);

  const handleBuy = (item) => {
    const owned = inventory[item.id] || 0;
    if (owned >= item.maxStack) { triggerFlash(item.id, 'maxed'); return; }
    const ok = onPurchase(item.id, item.price);
    triggerFlash(item.id, ok ? 'bought' : 'broke');
  };

  const handleBuyBanner = (banner) => {
    if (ownedBanners.includes(banner.id)) return;
    const ok = onBuyBanner(banner.id, banner.price);
    triggerFlash(banner.id, ok ? 'bought' : 'broke');
  };

  const triggerFlash = (id, type) => {
    setFlash({ id, type });
    setTimeout(() => setFlash(null), 900);
  };

  const totalOwned = Object.values(inventory).reduce((s, v) => s + v, 0);

  const grouped = ['basic', 'premium', 'legendary'].map(tier => ({
    tier,
    ...TIER_CONFIG[tier],
    items: items.filter(i => i.tier === tier),
  })).filter(g => g.items.length > 0);

  const bannersGrouped = ['basic', 'premium', 'legendary'].map(tier => ({
    tier,
    ...BANNER_TIER_CONFIG[tier],
    items: banners.filter(b => b.tier === tier),
  })).filter(g => g.items.length > 0);

  return (
    <div className="shop">
      <div className="shop-header">
        <div>
          <div className="shop-eyebrow">Store</div>
          <h1 className="shop-title">🏪 Shop</h1>
          <p className="shop-subtitle">Spend coins on power-ups and profile banners</p>
        </div>
        <div className="shop-balance">
          <span className="balance-label">Your Balance</span>
          <span className="balance-amount">🪙 {coins.toLocaleString()}</span>
          {totalOwned > 0 && <span className="owned-hint">{totalOwned} power-ups owned</span>}
        </div>
      </div>

      {/* Section tabs */}
      <div className="shop-section-tabs">
        <button className={`sst-btn ${section === 'powerups' ? 'active' : ''}`} onClick={() => setSection('powerups')}>⚡ Power-Ups</button>
        <button className={`sst-btn ${section === 'banners'  ? 'active' : ''}`} onClick={() => setSection('banners')}>🖼️ Banners <span className="sst-count">{ownedBanners.length}</span></button>
      </div>

      {section === 'powerups' && (
        <>
          <div className="shop-how">
            <h3>How to earn coins</h3>
            <div className="earn-grid">
              <div className="earn-item"><span className="earn-icon">✅</span><span>Correct answer: <strong>50–150 coins</strong> (by difficulty)</span></div>
              <div className="earn-item"><span className="earn-icon">⚡</span><span>Time bonus: <strong>+2 coins</strong> per second left</span></div>
              <div className="earn-item"><span className="earn-icon">🔥</span><span>3-streak: <strong>×1.5</strong> &nbsp;5-streak: <strong>×2.0</strong> &nbsp;10-streak: <strong>×3.0</strong></span></div>
              <div className="earn-item"><span className="earn-icon">📅</span><span>Daily Challenge: <strong>×2 all coins</strong></span></div>
              <div className="earn-item"><span className="earn-icon">📋</span><span>Daily Quests: <strong>75–300 coins</strong> per quest</span></div>
              <div className="earn-item"><span className="earn-icon">🧪</span><span>Disenchant duplicate cards for <strong>Forge dust</strong></span></div>
            </div>
          </div>

          {grouped.map(group => (
            <div key={group.tier} className="shop-tier-section">
              <div className="tier-header" style={{ '--tier-color': group.color }}>
                <span className="tier-label">{group.label}</span>
                <span className="tier-desc">{group.desc}</span>
              </div>
              <div className="shop-grid">
                {group.items.map(item => {
                  const owned = inventory[item.id] || 0;
                  const canAfford = coins >= item.price;
                  const isMaxed = owned >= item.maxStack;
                  const flashState = flash?.id === item.id ? flash.type : null;

                  return (
                    <div
                      key={item.id}
                      className={`shop-card card ${flashState || ''} ${isMaxed ? 'maxed' : ''} tier-${item.tier}`}
                      style={{ '--item-color': item.color }}
                    >
                      {item.tier === 'legendary' && <div className="item-legendary-bg" />}
                      <div className="item-glow" style={{ background: item.color }} />
                      <div className="item-icon">{item.icon}</div>
                      <div className="item-info">
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-desc">{item.description}</p>
                      </div>
                      <div className="item-footer">
                        <div className="item-stock">
                          <div className="stock-pips">
                            {Array.from({ length: item.maxStack }).map((_, i) => (
                              <span key={i} className={`pip ${i < owned ? 'filled' : ''}`}
                                style={i < owned ? { background: item.color } : {}} />
                            ))}
                          </div>
                          <span className="stock-label">{owned}/{item.maxStack}</span>
                        </div>
                        <button
                          className={`buy-btn ${!canAfford ? 'cant-afford' : ''} ${isMaxed ? 'btn-maxed' : ''}`}
                          onClick={() => handleBuy(item)}
                          disabled={isMaxed}
                          style={canAfford && !isMaxed ? { '--btn-color': item.color } : {}}
                        >
                          {flashState === 'bought' ? '✓ Bought!' :
                           flashState === 'broke'  ? '✗ Need coins' :
                           flashState === 'maxed'  ? 'Max owned' :
                           isMaxed ? 'Maxed out' :
                           <><span className="buy-coin">🪙</span> {item.price.toLocaleString()}</>}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="shop-inventory">
            <h2 className="inv-title">Your Inventory</h2>
            {totalOwned === 0 ? (
              <p className="inv-empty">No power-ups yet — buy some above!</p>
            ) : (
              <div className="inv-grid">
                {items.filter(item => (inventory[item.id] || 0) > 0).map(item => (
                  <div key={item.id} className="inv-item" style={{ '--item-color': item.color }}>
                    <span className="inv-icon">{item.icon}</span>
                    <span className="inv-name">{item.name}</span>
                    <span className="inv-count" style={{ color: item.color }}>×{inventory[item.id]}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {section === 'banners' && (
        <div className="banner-shop">
          <p className="banner-shop-hint">Banners appear as the background of your profile card. Equip them in <strong>Profile → Customize</strong>.</p>
          {bannersGrouped.map(group => (
            <div key={group.tier} className="shop-tier-section">
              <div className="tier-header" style={{ '--tier-color': group.color }}>
                <span className="tier-label">{group.label}</span>
                <span className="tier-desc">{group.desc}</span>
              </div>
              <div className="banner-shop-grid">
                {group.items.map(banner => {
                  const owned      = ownedBanners.includes(banner.id);
                  const canAfford  = coins >= banner.price;
                  const flashState = flash?.id === banner.id ? flash.type : null;
                  return (
                    <div key={banner.id} className={`banner-shop-card ${owned ? 'banner-owned' : ''} tier-${banner.tier}`}>
                      {banner.tier === 'legendary' && <div className="item-legendary-bg" />}
                      <div className="banner-preview" style={{ background: banner.gradient }}>
                        {banner.tier === 'legendary' && <div className="banner-leg-sheen" />}
                      </div>
                      <div className="banner-shop-info">
                        <div className="banner-shop-name">{banner.name}</div>
                        <div className="banner-shop-desc">{banner.description}</div>
                      </div>
                      <button
                        className={`buy-btn banner-buy-btn ${owned ? 'btn-maxed' : ''} ${!canAfford && !owned ? 'cant-afford' : ''}`}
                        onClick={() => handleBuyBanner(banner)}
                        disabled={owned}
                        style={canAfford && !owned ? { '--btn-color': group.color } : {}}
                      >
                        {flashState === 'bought' ? '✓ Unlocked!' :
                         flashState === 'broke'  ? '✗ Need coins' :
                         owned ? '✓ Owned' :
                         <><span className="buy-coin">🪙</span> {banner.price.toLocaleString()}</>}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="shop-actions">
        <button className="btn-secondary" onClick={onBack}>← Back to Home</button>
      </div>
    </div>
  );
}

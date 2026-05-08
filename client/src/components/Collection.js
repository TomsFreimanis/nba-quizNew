import React, { useState, useCallback } from 'react';
import { CARDS, CARD_MAP, RARITY_COLORS, RARITY_GLOWS, RARITY_LABELS, NBA_PHOTO_URLS } from '../data/cards';
import { PACKS } from '../data/packs';
import PackOpening from './PackOpening';
import './Collection.css';

// ── Weighted random card pull ──────────────────────────────────────────────────
function pullCard(weights) {
  const roll = Math.random() * 100;
  let cum = 0;
  let rarity = 'common';
  for (const [r, w] of Object.entries(weights)) {
    cum += w;
    if (roll < cum) { rarity = r; break; }
  }
  const pool = CARDS.filter(c => c.rarity === rarity);
  return pool[Math.floor(Math.random() * pool.length)];
}

function generatePackCards(pack) {
  const cards = Array.from({ length: pack.cardCount }, () => pullCard(pack.weights));
  // Enforce guarantee
  if (pack.guaranteed) {
    const rarityOrder = { legendary: 4, epic: 3, rare: 2, common: 1 };
    const guaranteed = rarityOrder[pack.guaranteed];
    const hasGuarantee = cards.some(c => rarityOrder[c.rarity] >= guaranteed);
    if (!hasGuarantee) {
      const pool = CARDS.filter(c => rarityOrder[c.rarity] >= guaranteed);
      cards[0] = pool[Math.floor(Math.random() * pool.length)];
    }
  }
  return cards;
}

// ── PlayerCard ─────────────────────────────────────────────────────────────────
function PlayerCard({ card, owned = 0, copies = 0, onClick, size = 'md', showOwned = false }) {
  const [imgStage, setImgStage] = useState(0); // 0,1,2=CDN tries, 3=show jersey fallback
  const rc   = RARITY_COLORS[card.rarity];
  const glow = RARITY_GLOWS[card.rarity];
  const urls = NBA_PHOTO_URLS(card.nbaId);
  const photoUrl = urls[imgStage] || null;
  const showPhoto = !!photoUrl;
  const handleImgError = () => setImgStage(s => s + 1);

  return (
    <div
      className={`player-card pc-${size} pc-${card.rarity} ${owned ? 'pc-owned' : 'pc-unowned'}`}
      style={{ '--c1': card.c1, '--c2': card.c2, '--rc': rc, '--glow': glow }}
      onClick={onClick}
    >
      {/* Animated holo border for legendary */}
      {card.rarity === 'legendary' && <div className="pc-holo-border" />}

      <div className="pc-inner">
        {/* Photo / fallback jersey area */}
        <div className="pc-photo-wrap">
          {showPhoto ? (
            <img
              className="pc-photo"
              src={photoUrl}
              alt={card.name}
              onError={handleImgError}
              draggable={false}
            />
          ) : (
            <div className="pc-no-photo">
              <span className="pc-jersey-num">#{card.jersey}</span>
              <span className="pc-initials">{card.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</span>
            </div>
          )}
          {/* Gradient fade into info section */}
          <div className="pc-photo-fade" />
          {/* POS + Season badges */}
          <span className="pc-badge-pos">{card.pos}</span>
          <span className="pc-badge-season">{card.season}</span>
        </div>

        {/* Info section */}
        <div className="pc-info">
          <div className="pc-name">{card.name}</div>
          {size !== 'sm' && <div className="pc-team">{card.team}</div>}
          <div className="pc-stats">
            <div className="pc-stat"><span className="pcs-val">{card.pts}</span><span className="pcs-lbl">PPG</span></div>
            <div className="pc-stat"><span className="pcs-val">{card.reb}</span><span className="pcs-lbl">RPG</span></div>
            <div className="pc-stat"><span className="pcs-val">{card.ast}</span><span className="pcs-lbl">APG</span></div>
          </div>
          {size !== 'sm' && <div className="pc-special">{card.special}</div>}
          <div className="pc-rarity-label" style={{ color: rc }}>{RARITY_LABELS[card.rarity]}</div>
        </div>

        {/* Shine overlay */}
        <div className="pc-shine" />
        {card.rarity === 'legendary' && <div className="pc-holo-sheen" />}
      </div>

      {showOwned && copies > 0 && <div className="pc-copies">×{copies}</div>}
      {showOwned && copies === 0 && <div className="pc-locked">🔒</div>}
    </div>
  );
}

// ── CardDetail modal ───────────────────────────────────────────────────────────
function CardDetail({ card, copies, onClose }) {
  if (!card) return null;
  return (
    <div className="card-detail-overlay" onClick={onClose}>
      <div className="card-detail-modal" onClick={e => e.stopPropagation()}>
        <button className="cdm-close" onClick={onClose}>✕</button>
        <PlayerCard card={card} owned={copies > 0} copies={copies} size="lg" />
        <div className="cdm-info">
          <div className="cdm-copies">{copies > 0 ? `You own ${copies} cop${copies > 1 ? 'ies' : 'y'}` : 'Not in collection yet'}</div>
        </div>
      </div>
    </div>
  );
}


// ── Main Collection Screen ─────────────────────────────────────────────────────
const DUST_VALUES = { common:10, rare:30, epic:100, legendary:300 };
const CRAFT_COSTS = { common:50, rare:150, epic:500, legendary:1500 };

export default function Collection({ coins, collection, dust = 0, inventory = {}, onOpenPack, onDustCard, onCraftCard, onUsePowerUp, onBack }) {
  const [tab, setTab]               = useState('packs');
  const [filter, setFilter]         = useState('all');
  const [opening, setOpening]       = useState(null);  // { pack, cards }
  const [detailCard, setDetailCard] = useState(null);

  const copiesOf = useCallback((cardId) =>
    collection.filter(c => c.cardId === cardId).length, [collection]);

  // Pity counter — packs since last legendary
  const [pityCount, setPityCount] = useState(() => {
    try { return parseInt(localStorage.getItem('nba_pity_packs') || '0', 10); } catch { return 0; }
  });

  const updatePity = (cards) => {
    const hasLegendary = cards.some(c => c.rarity === 'legendary');
    const next = hasLegendary ? 0 : pityCount + 1;
    setPityCount(next);
    try { localStorage.setItem('nba_pity_packs', String(next)); } catch {}
  };

  const PITY_THRESHOLD = 20;

  const handleBuyPack = (pack) => {
    if (coins < pack.price) return;
    const cards = generatePackCards(pack);
    // Legend Token: guarantee a legendary
    const hasToken = (inventory.legend_token || 0) > 0;
    if (hasToken || pityCount >= PITY_THRESHOLD - 1) {
      const legendPool = CARDS.filter(c => c.rarity === 'legendary');
      cards[0] = legendPool[Math.floor(Math.random() * legendPool.length)];
      if (hasToken && onUsePowerUp) onUsePowerUp('legend_token');
    }
    // Pack Upgrade: add 2 bonus cards
    if ((inventory.pack_upgrade || 0) > 0) {
      cards.push(pullCard(pack.weights), pullCard(pack.weights));
      if (onUsePowerUp) onUsePowerUp('pack_upgrade');
    }
    setOpening({ pack, cards });
  };

  const handleCollect = () => {
    if (!opening) return;
    updatePity(opening.cards);
    onOpenPack(opening.pack, opening.cards);
    setOpening(null);
  };

  const ownedCount   = collection.length;
  const uniqueCount  = new Set(collection.map(c => c.cardId)).size;
  const legendCount  = collection.filter(c => CARD_MAP[c.cardId]?.rarity === 'legendary').length;
  const epicCount    = collection.filter(c => CARD_MAP[c.cardId]?.rarity === 'epic').length;

  const FILTERS = ['all', 'legendary', 'epic', 'rare', 'common'];

  const displayCards = filter === 'all'
    ? CARDS
    : CARDS.filter(c => c.rarity === filter);

  return (
    <div className="collection">
      {opening && (
        <PackOpening
          pack={opening.pack}
          pulledCards={opening.cards}
          onCollect={handleCollect}
        />
      )}

      {detailCard && (
        <CardDetail
          card={detailCard}
          copies={copiesOf(detailCard.id)}
          onClose={() => setDetailCard(null)}
        />
      )}

      {/* Header */}
      <div className="coll-header">
        <div>
          <div className="coll-eyebrow">NBA Player Cards</div>
          <h1 className="coll-title">🃏 Collection</h1>
          <p className="coll-subtitle">Open packs · Collect legends</p>
        </div>
        <div className="coll-stats">
          <div className="cs2-item"><span className="cs2-val">{ownedCount}</span><span className="cs2-lbl">Cards</span></div>
          <div className="cs2-div" />
          <div className="cs2-item"><span className="cs2-val" style={{color:'#FFD700'}}>{legendCount}</span><span className="cs2-lbl">Legendary</span></div>
          <div className="cs2-div" />
          <div className="cs2-item"><span className="cs2-val" style={{color:'#9B5DE5'}}>{epicCount}</span><span className="cs2-lbl">Epic</span></div>
          <div className="cs2-div" />
          <div className="cs2-item"><span className="cs2-val">{uniqueCount}/{CARDS.length}</span><span className="cs2-lbl">Unique</span></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="coll-tabs">
        <button className={`ctab ${tab==='packs'?'active':''}`} onClick={() => setTab('packs')}>📦 Pack Store</button>
        <button className={`ctab ${tab==='cards'?'active':''}`} onClick={() => setTab('cards')}>🃏 My Cards ({ownedCount})</button>
        <button className={`ctab ${tab==='all'?'active':''}`} onClick={() => setTab('all')}>📖 All Cards</button>
        <button className={`ctab ${tab==='dust'?'active':''}`} onClick={() => setTab('dust')}>
          🧪 Forge <span style={{color:'#a0e0ff',marginLeft:4}}>{dust} dust</span>
        </button>
      </div>

      {/* ── Pack Store ─────────────────────────────── */}
      {tab === 'packs' && (
        <div className="pack-store">
          <div className="ps-top-row">
            <div className="ps-balance">
              <span className="ps-bal-icon">🪙</span>
              <span className="ps-bal-amt">{coins.toLocaleString()} coins available</span>
            </div>
            <div className={`ps-pity ${pityCount >= PITY_THRESHOLD - 5 ? 'pity-close' : ''}`} title="Packs since last Legendary">
              <span className="pity-icon">⚡</span>
              <span className="pity-label">Pity: {pityCount}/{PITY_THRESHOLD}</span>
              <div className="pity-bar-wrap">
                <div className="pity-bar-fill" style={{ width: `${(pityCount / PITY_THRESHOLD) * 100}%` }} />
              </div>
            </div>
          </div>
          <div className="pack-grid">
            {PACKS.map(pack => {
              const canAfford = coins >= pack.price;
              return (
                <div key={pack.id} className={`pack-card ${!canAfford ? 'pack-broke' : ''}`}
                  style={{ background: pack.gradient, borderColor: pack.borderColor }}>
                  <div className="pack-top-glow" style={{ background: pack.borderColor }} />
                  <div className="pack-tag" style={{ color: pack.tagColor, borderColor: pack.tagColor }}>
                    {pack.tag}
                  </div>
                  <div className="pack-icon">{pack.icon}</div>
                  <h3 className="pack-name">{pack.name}</h3>
                  <p className="pack-desc">{pack.longDesc}</p>
                  <div className="pack-odds">
                    <span className="po-title">Drop Rates</span>
                    <div className="po-rates">
                      {Object.entries(pack.weights).filter(([,w]) => w > 0).map(([r, w]) => (
                        <span key={r} className="po-rate" style={{ color: RARITY_COLORS[r] }}>
                          {r.charAt(0).toUpperCase() + r.slice(1)}: {w}%
                        </span>
                      ))}
                    </div>
                    {pack.guaranteed && (
                      <div className="po-guaranteed">
                        ✓ Guaranteed {pack.guaranteed.charAt(0).toUpperCase() + pack.guaranteed.slice(1)}+
                      </div>
                    )}
                  </div>
                  <div className="pack-footer">
                    <span className="pack-cards-count">🃏 {pack.cardCount} cards</span>
                    <button
                      className={`pack-buy-btn ${canAfford ? 'can-afford' : ''}`}
                      onClick={() => handleBuyPack(pack)}
                      disabled={!canAfford}
                      style={canAfford ? { borderColor: pack.borderColor, color: pack.tagColor } : {}}
                    >
                      {canAfford ? `🪙 ${pack.price.toLocaleString()}` : `Need ${(pack.price - coins).toLocaleString()} more`}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── My Cards ───────────────────────────────── */}
      {tab === 'cards' && (
        <div className="my-cards">
          {ownedCount === 0 ? (
            <div className="empty-coll">
              <span>📭</span>
              <p>No cards yet! Open a pack to start collecting.</p>
              <button className="btn-primary" onClick={() => setTab('packs')}>Go to Pack Store</button>
            </div>
          ) : (
            <>
              <div className="filter-row">
                {FILTERS.map(f => (
                  <button key={f} className={`filter-btn ${filter===f?'active':''}`}
                    style={filter===f && f!=='all' ? { borderColor: RARITY_COLORS[f], color: RARITY_COLORS[f] } : {}}
                    onClick={() => setFilter(f)}>
                    {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
              <div className="cards-grid">
                {CARDS
                  .filter(c => filter === 'all' || c.rarity === filter)
                  .filter(c => copiesOf(c.id) > 0)
                  .sort((a, b) => {
                    const ro = { legendary: 4, epic: 3, rare: 2, common: 1 };
                    return ro[b.rarity] - ro[a.rarity];
                  })
                  .map(card => (
                    <PlayerCard key={card.id} card={card} owned={true}
                      copies={copiesOf(card.id)} showOwned size="md"
                      onClick={() => setDetailCard(card)} />
                  ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* ── All Cards ──────────────────────────────── */}
      {tab === 'all' && (
        <div className="all-cards">
          <div className="filter-row">
            {FILTERS.map(f => (
              <button key={f} className={`filter-btn ${filter===f?'active':''}`}
                style={filter===f && f!=='all' ? { borderColor: RARITY_COLORS[f], color: RARITY_COLORS[f] } : {}}
                onClick={() => setFilter(f)}>
                {f === 'all' ? `All (${CARDS.length})` : `${f.charAt(0).toUpperCase() + f.slice(1)} (${CARDS.filter(c=>c.rarity===f).length})`}
              </button>
            ))}
          </div>
          <div className="cards-grid">
            {displayCards
              .sort((a, b) => {
                const ro = { legendary: 4, epic: 3, rare: 2, common: 1 };
                return ro[b.rarity] - ro[a.rarity];
              })
              .map(card => (
                <PlayerCard key={card.id} card={card}
                  owned={copiesOf(card.id) > 0}
                  copies={copiesOf(card.id)}
                  showOwned size="md"
                  onClick={() => setDetailCard(card)} />
              ))}
          </div>
        </div>
      )}

      {/* ── Forge (Dust + Craft) ───────────────────────────── */}
      {tab === 'dust' && (
        <div className="forge-screen">
          {/* Dust section — convert duplicate cards */}
          <div className="forge-section">
            <div className="forge-section-title">🧪 Disenchant Duplicates</div>
            <p className="forge-desc">Convert extra copies of cards you already own into Dust. Keep 1 copy, burn the rest.</p>
            <div className="cards-grid">
              {CARDS
                .filter(c => copiesOf(c.id) > 1)
                .sort((a, b) => {
                  const ro = { legendary:4, epic:3, rare:2, common:1 };
                  return ro[b.rarity] - ro[a.rarity];
                })
                .map(card => {
                  const extra    = copiesOf(card.id) - 1;
                  const dustGain = DUST_VALUES[card.rarity] * extra;
                  return (
                    <div key={card.id} className="forge-card-wrap">
                      <PlayerCard card={card} owned copies={copiesOf(card.id)} showOwned size="md" />
                      <button className="forge-dust-btn" onClick={() => onDustCard && onDustCard(card.id)}>
                        Burn ×{extra}<br />
                        <span style={{color:'#a0e0ff'}}>+{dustGain} dust</span>
                      </button>
                    </div>
                  );
                })}
              {CARDS.filter(c => copiesOf(c.id) > 1).length === 0 && (
                <div className="forge-empty">
                  <span>🌟</span>
                  <p>No duplicates to disenchant yet.<br />Open more packs to get duplicates!</p>
                </div>
              )}
            </div>
          </div>

          {/* Craft section — spend dust to get a card */}
          <div className="forge-section">
            <div className="forge-section-title">⚗️ Craft a Card</div>
            <p className="forge-desc">Spend dust to receive a random card of your chosen rarity.</p>
            <div className="forge-craft-grid">
              {(['common','rare','epic','legendary']).map(rarity => {
                const cost    = CRAFT_COSTS[rarity];
                const canCraft = dust >= cost;
                return (
                  <div key={rarity} className={`forge-craft-card ${canCraft ? 'can-craft' : ''}`}
                    style={{ borderColor: canCraft ? RARITY_COLORS[rarity] : undefined }}>
                    <div className="fcc-rarity" style={{ color: RARITY_COLORS[rarity] }}>
                      {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
                    </div>
                    <div className="fcc-cost">🧪 {cost} dust</div>
                    <div className="fcc-pool">{CARDS.filter(c=>c.rarity===rarity).length} possible cards</div>
                    <button className="forge-craft-btn"
                      disabled={!canCraft}
                      style={canCraft ? { borderColor: RARITY_COLORS[rarity], color: RARITY_COLORS[rarity] } : {}}
                      onClick={() => onCraftCard && onCraftCard(rarity)}>
                      {canCraft ? 'Craft →' : `Need ${cost - dust} more`}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="coll-actions">
        <button className="btn-secondary" onClick={onBack}>← Back to Home</button>
      </div>
    </div>
  );
}

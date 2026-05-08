export const RANKS = [
  { id: 'bronze',   name: 'Bronze',   min: 0,    max: 999,  color: '#CD7F32', icon: '🥉', bg: 'linear-gradient(135deg,#2a1000 0%,#7a3d0a 50%,#CD7F32 100%)' },
  { id: 'silver',   name: 'Silver',   min: 1000, max: 1249, color: '#B8C0CC', icon: '🥈', bg: 'linear-gradient(135deg,#1a1a1a 0%,#555 50%,#B8C0CC 100%)' },
  { id: 'gold',     name: 'Gold',     min: 1250, max: 1499, color: '#FFD700', icon: '🥇', bg: 'linear-gradient(135deg,#1a1000 0%,#a07800 50%,#FFD700 100%)' },
  { id: 'platinum', name: 'Platinum', min: 1500, max: 1749, color: '#00B4D8', icon: '⚡', bg: 'linear-gradient(135deg,#001220 0%,#006b9f 50%,#00B4D8 100%)' },
  { id: 'diamond',  name: 'Diamond',  min: 1750, max: 1999, color: '#9B5DE5', icon: '💎', bg: 'linear-gradient(135deg,#0d0019 0%,#5a1fa0 50%,#9B5DE5 100%)' },
  { id: 'master',   name: 'Master',   min: 2000, max: 2249, color: '#e63946', icon: '🔥', bg: 'linear-gradient(135deg,#1a0000 0%,#8b0000 50%,#e63946 100%)' },
  { id: 'legend',   name: 'Legend',   min: 2250, max: Infinity, color: '#FFD700', icon: '👑', bg: 'linear-gradient(135deg,#0d0d0d 0%,#ce1141 25%,#9B5DE5 50%,#FFD700 75%,#0d0d0d 100%)' },
];

export function getRank(mmr = 1000) {
  return RANKS.find(r => mmr >= r.min && (r.max === Infinity || mmr <= r.max)) || RANKS[0];
}

export function getNextRank(mmr = 1000) {
  const idx = RANKS.findIndex(r => mmr >= r.min && (r.max === Infinity || mmr <= r.max));
  return idx < RANKS.length - 1 ? RANKS[idx + 1] : null;
}

export function getRankProgress(mmr = 1000) {
  const rank = getRank(mmr);
  if (rank.max === Infinity) return { pct: 100, pointsIn: mmr - rank.min, pointsNeeded: 0 };
  const range = rank.max - rank.min + 1;
  const pointsIn = mmr - rank.min;
  return { pct: Math.min((pointsIn / range) * 100, 100), pointsIn, pointsNeeded: rank.max - mmr + 1 };
}

export function calcElo(myMmr, oppMmr, won, rankGames) {
  const K = rankGames < 10 ? 40 : 25;
  const expected = 1 / (1 + Math.pow(10, (oppMmr - myMmr) / 400));
  return Math.round(K * ((won ? 1 : 0) - expected));
}

export function predictElo(myMmr, oppMmr, rankGames) {
  const winDelta  = calcElo(myMmr, oppMmr, true,  rankGames);
  const lossDelta = calcElo(myMmr, oppMmr, false, rankGames);
  return { winDelta, lossDelta };
}

const express    = require('express');
const cors       = require('cors');
const crypto     = require('crypto');
const fs         = require('fs');
const path       = require('path');
const http       = require('http');
const https      = require('https');
const { Server } = require('socket.io');
const questions  = require('./data/questions');

const app        = express();
const httpServer = http.createServer(app);
const io         = new Server(httpServer, { cors: { origin: '*', methods: ['GET','POST'] } });
const PORT       = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ── Auth helpers ───────────────────────────────────────────────────────────────
const USERS_FILE = path.join(__dirname, 'data', 'users.json');
const sessions   = new Map();

function loadUsers()     { try { return JSON.parse(fs.readFileSync(USERS_FILE,'utf8')); } catch { return []; } }
function saveUsers(u)    { fs.writeFileSync(USERS_FILE, JSON.stringify(u, null, 2)); }
function hashPw(pw)      { return crypto.createHash('sha256').update(pw + 'nba-quiz-2026').digest('hex'); }
function makeToken()     { return crypto.randomBytes(32).toString('hex'); }
function ensureMMR(user) {
  if (user.mmr         === undefined) user.mmr         = 1000;
  if (user.wins        === undefined) user.wins        = 0;
  if (user.losses      === undefined) user.losses      = 0;
  if (user.rankGames   === undefined) user.rankGames   = 0;
  if (user.winStreak   === undefined) user.winStreak   = 0;
  if (user.coins       === undefined) user.coins       = 500;
  return user;
}

function userPublic(user) {
  return {
    username:  user.username,
    mmr:       user.mmr        || 1000,
    wins:      user.wins       || 0,
    losses:    user.losses     || 0,
    rankGames: user.rankGames  || 0,
    winStreak: user.winStreak  || 0,
    avatar:    user.avatar     || null,
    createdAt: user.createdAt  || 0,
  };
}

// ── ELO ───────────────────────────────────────────────────────────────────────
function calcElo(myMmr, oppMmr, won, rankGames) {
  const K = rankGames < 10 ? 40 : 25;
  const expected = 1 / (1 + Math.pow(10, (oppMmr - myMmr) / 400));
  return Math.round(K * ((won ? 1 : 0) - expected));
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = seed;
  const rand = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return Math.abs(s) / 0xffffffff; };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getWeekKey() {
  const d = new Date();
  const jan1 = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil(((d - jan1) / 86400000 + jan1.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${week}`;
}

// ── Simple fetch helper for Google userinfo ─────────────────────────────────
function httpsGet(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const opts = { headers };
    https.get(url, opts, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch { reject(new Error('JSON parse error')); }
      });
    }).on('error', reject);
  });
}

// ── Leaderboard store ──────────────────────────────────────────────────────────
const PLAYER_NAMES = [
  'HoopsMaster','CourtVision','StatGuru','RimRocker','TripleDouble',
  'SlamDunkKing','ThreeAndD','PostUpPro','FastBreaker','PaintProtect',
  'AllStarFan','DraftGenius','ZoneBuster','IsoKing','PickAndPop',
  'BenchWarmer','AnkleBreakerX','MidRangeKing','GlassEater','DimeDropper',
];

function generateSeedEntries() {
  const now = Date.now();
  const entries = [];
  for (let i = 0; i < 120; i++) {
    const daysAgo = Math.random() * 30;
    const ts = now - daysAgo * 86400000;
    const correct = Math.floor(Math.random() * 9) + 2;
    const total = 10;
    const diff = ['easy','medium','hard','all'][Math.floor(Math.random() * 4)];
    const baseScore = diff === 'hard' ? 150 : diff === 'medium' ? 100 : 75;
    const score = Math.floor(correct * baseScore * (0.8 + Math.random() * 0.6));
    entries.push({
      name: PLAYER_NAMES[Math.floor(Math.random() * PLAYER_NAMES.length)] + Math.floor(Math.random() * 99 + 1),
      score, correct, total, difficulty: diff, timestamp: Math.floor(ts),
    });
  }
  return entries;
}

let leaderboard = generateSeedEntries();

// ── Tournament store ───────────────────────────────────────────────────────────
const tournamentData = new Map();
function getTournamentEntries() {
  const wk = getWeekKey();
  if (!tournamentData.has(wk)) tournamentData.set(wk, new Map());
  return tournamentData.get(wk);
}

// ── Shop / Banners ─────────────────────────────────────────────────────────────
const SHOP_ITEMS = [
  { id: 'fifty_fifty',   tier: 'basic',     name: '50 / 50',       icon: '✂️',  price: 80,   description: 'Eliminate 2 wrong answers instantly',                           color: '#4cc977', maxStack: 5 },
  { id: 'time_freeze',   tier: 'basic',     name: 'Time Freeze',    icon: '⏰',  price: 60,   description: 'Add +15 seconds to the countdown timer',                        color: '#00b4d8', maxStack: 5 },
  { id: 'skip_pass',     tier: 'basic',     name: 'Skip Pass',      icon: '⏭️',  price: 120,  description: 'Skip a question — no penalty, no points',                      color: '#ffa500', maxStack: 3 },
  { id: 'coin_magnet',   tier: 'basic',     name: 'Coin Magnet',    icon: '🪙',  price: 150,  description: 'Double coins earned on next correct answer',                    color: '#ffd700', maxStack: 3 },
  { id: 'streak_shield', tier: 'basic',     name: 'Streak Shield',  icon: '🛡️',  price: 200,  description: 'Protect your streak from one wrong answer',                    color: '#e63946', maxStack: 3 },
  { id: 'oracle',        tier: 'basic',     name: 'Oracle',         icon: '🔮',  price: 300,  description: 'Reveal the correct answer — streak kept, no points',           color: '#9b5de5', maxStack: 2 },
  { id: 'second_chance', tier: 'premium',   name: 'Second Chance',  icon: '🔁',  price: 450,  description: 'Activate before a question — get a retry if wrong',            color: '#4cc977', maxStack: 2 },
  { id: 'double_down',   tier: 'premium',   name: 'Double Down',    icon: '💰',  price: 600,  description: 'Triple coins on your next correct answer',                      color: '#ffd700', maxStack: 3 },
  { id: 'answer_ace',    tier: 'premium',   name: 'Answer Ace',     icon: '♠️',  price: 750,  description: 'Auto-removes one wrong answer when each question loads',        color: '#00b4d8', maxStack: 3 },
  { id: 'pack_upgrade',  tier: 'legendary', name: 'Pack Upgrade',   icon: '📦',  price: 1200, description: 'Your next pack opening gives 2 bonus extra cards',             color: '#9b5de5', maxStack: 2 },
  { id: 'legend_token',  tier: 'legendary', name: 'Legend Token',   icon: '👑',  price: 2500, description: 'Guarantees a Legendary card in your next pack',                color: '#FFD700', maxStack: 1 },
];

const BANNERS = [
  { id: 'court_classic', name: 'Court Classic',    price: 500,   tier: 'basic',     gradient: 'linear-gradient(135deg,#5c3d1a 0%,#8B6914 40%,#5c3d1a 100%)',                                  description: 'Classic hardwood floors' },
  { id: 'midnight_blue', name: 'Midnight Blue',    price: 500,   tier: 'basic',     gradient: 'linear-gradient(135deg,#040e24 0%,#1D428A 60%,#040e24 100%)',                                  description: 'Cool court nights' },
  { id: 'fire_starter',  name: 'Fire Starter',     price: 750,   tier: 'basic',     gradient: 'linear-gradient(135deg,#1a0000 0%,#e63946 50%,#ff6b00 100%)',                                 description: 'Heat up your profile' },
  { id: 'emerald_city',  name: 'Emerald City',     price: 750,   tier: 'basic',     gradient: 'linear-gradient(135deg,#001a00 0%,#007A33 50%,#4cc977 100%)',                                 description: 'Green machine energy' },
  { id: 'golden_era',    name: 'Golden Era',       price: 1500,  tier: 'premium',   gradient: 'linear-gradient(135deg,#1a1000 0%,#C49100 40%,#FDB927 60%,#1a1000 100%)',                    description: 'Showtime Lakers gold' },
  { id: 'dynasty',       name: 'Dynasty',          price: 2000,  tier: 'premium',   gradient: 'linear-gradient(135deg,#CE1141 0%,#0d0d0d 40%,#CE1141 100%)',                                description: 'Six-ring dynasty' },
  { id: 'splash_zone',   name: 'Splash Zone',      price: 2500,  tier: 'premium',   gradient: 'linear-gradient(135deg,#1D428A 0%,#00B4D8 50%,#FFC72C 100%)',                               description: 'Bay Area splash brothers' },
  { id: 'purple_reign',  name: 'Purple Reign',     price: 3500,  tier: 'premium',   gradient: 'linear-gradient(135deg,#2a0060 0%,#552583 40%,#9B5DE5 70%,#FDB927 100%)',                   description: 'Showtime purple and gold' },
  { id: 'all_star',      name: 'All-Star Weekend', price: 5000,  tier: 'legendary', gradient: 'linear-gradient(135deg,#1a0a2e 0%,#9B5DE5 30%,#FFD700 65%,#9B5DE5 85%,#1a0a2e 100%)',      description: 'All-Star game vibes' },
  { id: 'mvp_season',    name: 'MVP Season',       price: 7500,  tier: 'legendary', gradient: 'linear-gradient(135deg,#0d0d0d 0%,#FFD700 20%,#FF6B00 50%,#FFD700 80%,#0d0d0d 100%)',      description: 'You are the most valuable player' },
  { id: 'championship',  name: 'Championship',     price: 10000, tier: 'legendary', gradient: 'linear-gradient(135deg,#010a14 0%,#0066cc 15%,#FFD700 35%,#ffffff 50%,#FFD700 65%,#0066cc 85%,#010a14 100%)', description: 'Champions banner in the rafters' },
  { id: 'goat',          name: 'G.O.A.T.',         price: 15000, tier: 'legendary', gradient: 'linear-gradient(135deg,#0d0d0d 0%,#ce1141 18%,#9B5DE5 36%,#FFD700 54%,#00B4D8 72%,#4cc977 90%,#0d0d0d 100%)', description: 'Greatest of all time — undisputed' },
  // ── Special image banners ──────────────────────────────────────────────────────
  { id: 'lebron_finals',  name: 'LeBron — Finals',      price: 25000, tier: 'special', image: '/banners/lebron-finals.jpg',  gradient: 'linear-gradient(135deg,#1a0000,#8B0000)', description: 'The King raises his hands in glory' },
  { id: 'curry_warriors', name: 'Curry — Warriors',     price: 25000, tier: 'special', image: '/banners/curry-warriors.jpg', gradient: 'linear-gradient(135deg,#00275e,#1D428A)', description: 'Splash Brother in flight' },
  { id: 'lebron_games',   name: 'LeBron — Legacy',      price: 30000, tier: 'special', image: '/banners/lebron-games.jpg',   gradient: 'linear-gradient(135deg,#1a0030,#552583)', description: 'A legacy written in purple and gold' },
];

// ── Daily challenge ────────────────────────────────────────────────────────────
function getDailyQuestions() {
  const now = new Date();
  const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  return seededShuffle(questions, seed).slice(0, 10).map(q => ({ ...q, options: shuffleArray(q.options) }));
}

// ── REST Routes ────────────────────────────────────────────────────────────────
app.get('/api/questions', (req, res) => {
  const { count = 10, difficulty, category, exclude } = req.query;
  const excludeIds = exclude ? new Set(exclude.split(',').map(Number)) : new Set();
  let filtered = [...questions];
  if (difficulty && difficulty !== 'all') filtered = filtered.filter(q => q.difficulty === difficulty);
  if (category   && category   !== 'all') filtered = filtered.filter(q => q.category   === category);
  const unseen = filtered.filter(q => !excludeIds.has(q.id));
  const pool   = unseen.length >= parseInt(count) ? unseen : filtered;
  const picked = shuffleArray(pool).slice(0, Math.min(parseInt(count), pool.length));
  res.json(picked.map(q => ({ ...q, options: shuffleArray(q.options) })));
});

app.get('/api/categories', (req, res) => {
  res.json([...new Set(questions.map(q => q.category))].sort());
});

app.get('/api/daily-challenge', (req, res) => {
  res.json({ questions: getDailyQuestions(), date: new Date().toISOString().split('T')[0], coinMultiplier: 2 });
});

app.get('/api/shop',    (req, res) => res.json(SHOP_ITEMS));
app.get('/api/banners', (req, res) => res.json(BANNERS));

app.get('/api/leaderboard', (req, res) => {
  const { period = 'alltime', limit = 20 } = req.query;
  const now = Date.now();
  const cutoffs = { daily: 86400000, weekly: 604800000, monthly: 2592000000 };
  const cutoff  = cutoffs[period];
  const filtered = cutoff ? leaderboard.filter(e => now - e.timestamp < cutoff) : leaderboard;
  const sorted   = [...filtered].sort((a, b) => b.score - a.score);
  res.json(sorted.slice(0, parseInt(limit)).map((e, i) => ({ ...e, rank: i + 1, date: new Date(e.timestamp).toISOString().split('T')[0] })));
});

app.post('/api/score', (req, res) => {
  const { name, score, correct, total, difficulty } = req.body;
  if (!name || score === undefined) return res.status(400).json({ error: 'name and score required' });
  const entry = { name: String(name).slice(0, 20), score, correct, total, difficulty, timestamp: Date.now() };
  leaderboard.push(entry);
  if (leaderboard.length > 500) leaderboard = leaderboard.slice(-500);
  const allSorted = [...leaderboard].sort((a, b) => b.score - a.score);
  const rank = allSorted.findIndex(e => e === entry) + 1;
  res.json({ success: true, rank });
});

// ── Ranked Leaderboard ─────────────────────────────────────────────────────────
app.get('/api/ranked-leaderboard', (req, res) => {
  const { limit = 100 } = req.query;
  const users  = loadUsers();
  const ranked = users
    .map(ensureMMR)
    .filter(u => u.rankGames > 0)
    .map(userPublic)
    .sort((a, b) => b.mmr - a.mmr)
    .slice(0, parseInt(limit))
    .map((u, i) => ({ ...u, rank: i + 1, winRate: u.rankGames > 0 ? Math.round((u.wins / u.rankGames) * 100) : 0 }));
  res.json(ranked);
});

app.get('/api/profile/:username', (req, res) => {
  const users = loadUsers();
  const user  = users.find(u => u.username.toLowerCase() === req.params.username.toLowerCase());
  if (!user) return res.status(404).json({ error: 'User not found' });
  const pub = userPublic(ensureMMR(user));
  const allRanked = users.map(ensureMMR).filter(u => u.rankGames > 0).sort((a, b) => (b.mmr||1000) - (a.mmr||1000));
  const globalRank = allRanked.findIndex(u => u.username === user.username) + 1;
  res.json({ ...pub, globalRank });
});

// ── Tournament routes ──────────────────────────────────────────────────────────
const TOURNAMENT_PRIZES = [5000, 2000, 1000];
const TOURNAMENT_ENTRY  = 150;

app.get('/api/tournament', (req, res) => {
  const entries = getTournamentEntries();
  const sorted  = [...entries.values()].sort((a, b) => b.score - a.score);
  res.json({ weekKey: getWeekKey(), prizes: TOURNAMENT_PRIZES, entryFee: TOURNAMENT_ENTRY, entries: sorted.slice(0, 50).map((e, i) => ({ ...e, rank: i + 1 })) });
});

app.post('/api/tournament/enter', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'username required' });
  const entries = getTournamentEntries();
  if (!entries.has(username)) entries.set(username, { username, score: 0, timestamp: Date.now() });
  res.json({ success: true });
});

app.post('/api/tournament/score', (req, res) => {
  const { username, score } = req.body;
  if (!username || score === undefined) return res.status(400).json({ error: 'username and score required' });
  const entries = getTournamentEntries();
  const existing = entries.get(username);
  if (!existing) return res.status(403).json({ error: 'not entered in tournament' });
  if (score > existing.score) entries.set(username, { ...existing, score, timestamp: Date.now() });
  const sorted = [...entries.values()].sort((a, b) => b.score - a.score);
  const rank   = sorted.findIndex(e => e.username === username) + 1;
  const prize  = rank <= TOURNAMENT_PRIZES.length ? TOURNAMENT_PRIZES[rank - 1] : 0;
  res.json({ success: true, rank, prize });
});

// ── Auth routes ────────────────────────────────────────────────────────────────
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password required' });
  const name = String(username).trim().slice(0, 20);
  if (name.length < 3)         return res.status(400).json({ error: 'Username must be at least 3 characters' });
  if (String(password).length < 4) return res.status(400).json({ error: 'Password must be at least 4 characters' });
  const users = loadUsers();
  if (users.find(u => u.username.toLowerCase() === name.toLowerCase()))
    return res.status(409).json({ error: 'Username already taken' });
  const user = ensureMMR({ username: name, password: hashPw(password), coins: 500, createdAt: Date.now() });
  users.push(user);
  saveUsers(users);
  const token = makeToken();
  sessions.set(token, name);
  res.json({ token, username: name, coins: user.coins, mmr: user.mmr });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password required' });
  const users = loadUsers();
  const user  = users.find(u => u.username.toLowerCase() === String(username).toLowerCase());
  if (!user || user.password !== hashPw(password))
    return res.status(401).json({ error: 'Invalid username or password' });
  ensureMMR(user);
  saveUsers(users);
  const token = makeToken();
  sessions.set(token, user.username);
  res.json({ token, username: user.username, coins: user.coins, mmr: user.mmr, avatar: user.avatar || null });
});

app.post('/api/auth/google', async (req, res) => {
  const { accessToken } = req.body;
  if (!accessToken) return res.status(400).json({ error: 'Access token required' });
  try {
    const gUser = await httpsGet('https://www.googleapis.com/oauth2/v3/userinfo', { Authorization: `Bearer ${accessToken}` });
    if (!gUser.sub) return res.status(401).json({ error: 'Invalid Google token' });
    const users = loadUsers();
    let user = users.find(u => u.googleId === gUser.sub);
    if (!user) {
      user = users.find(u => u.email && u.email === gUser.email);
      if (user) {
        user.googleId = gUser.sub;
        user.avatar   = gUser.picture || user.avatar;
      } else {
        const base = (gUser.name || gUser.email.split('@')[0]).replace(/[^a-zA-Z0-9_]/g, '').slice(0, 18) || 'Player';
        let uname = base;
        let n = 1;
        while (users.find(u => u.username.toLowerCase() === uname.toLowerCase())) uname = base + n++;
        user = ensureMMR({ username: uname, googleId: gUser.sub, email: gUser.email, avatar: gUser.picture || null, coins: 500, createdAt: Date.now() });
        users.push(user);
      }
      saveUsers(users);
    }
    const token = makeToken();
    sessions.set(token, user.username);
    res.json({ token, username: user.username, coins: user.coins, mmr: user.mmr || 1000, avatar: user.avatar || null });
  } catch (e) {
    res.status(500).json({ error: 'Google authentication failed' });
  }
});

app.post('/api/logout', (req, res) => {
  const token = req.headers['x-auth-token'];
  if (token) sessions.delete(token);
  res.json({ success: true });
});

app.get('/api/health', (req, res) => res.json({ status: 'ok', questions: questions.length, onlineNow: io.engine.clientsCount }));

// ── Socket.io Duel System ──────────────────────────────────────────────────────
const duelQueue = [];
const duelRooms = new Map();

function pickDuelQuestions() {
  return shuffleArray(questions).slice(0, 10).map(q => ({ ...q, options: shuffleArray(q.options) }));
}

function createDuelRoom(p1, p2) {
  const users = loadUsers();
  const u1    = users.find(u => u.username === p1.username);
  const u2    = users.find(u => u.username === p2.username);
  ensureMMR(u1 || {});
  ensureMMR(u2 || {});

  p1.mmr       = u1?.mmr       || 1000;
  p2.mmr       = u2?.mmr       || 1000;
  p1.rankGames = u1?.rankGames || 0;
  p2.rankGames = u2?.rankGames || 0;

  const roomId = crypto.randomBytes(6).toString('hex');
  const qs     = pickDuelQuestions();
  const room   = {
    id: roomId,
    players: [
      { socketId: p1.socketId, username: p1.username, score: 0, mmr: p1.mmr, rankGames: p1.rankGames },
      { socketId: p2.socketId, username: p2.username, score: 0, mmr: p2.mmr, rankGames: p2.rankGames },
    ],
    questions: qs,
    current: 0,
    answers: {},
    timer: null,
  };
  duelRooms.set(roomId, room);

  const s1 = io.sockets.sockets.get(p1.socketId);
  const s2 = io.sockets.sockets.get(p2.socketId);
  s1?.join(roomId);
  s2?.join(roomId);

  const winPred1 = calcElo(p1.mmr, p2.mmr, true,  p1.rankGames);
  const lossPred1 = calcElo(p1.mmr, p2.mmr, false, p1.rankGames);
  const winPred2 = calcElo(p2.mmr, p1.mmr, true,  p2.rankGames);
  const lossPred2 = calcElo(p2.mmr, p1.mmr, false, p2.rankGames);

  s1?.emit('duel:matched', { roomId, opponent: p2.username, opponentMmr: p2.mmr, myMmr: p1.mmr, questionCount: qs.length, predWin: winPred1, predLoss: lossPred1 });
  s2?.emit('duel:matched', { roomId, opponent: p1.username, opponentMmr: p1.mmr, myMmr: p2.mmr, questionCount: qs.length, predWin: winPred2, predLoss: lossPred2 });

  setTimeout(() => sendDuelQuestion(roomId), 3500);
}

function sendDuelQuestion(roomId) {
  const room = duelRooms.get(roomId);
  if (!room) return;
  const q = room.questions[room.current];
  room.answers = {};
  io.to(roomId).emit('duel:question', {
    questionIdx: room.current,
    question:    q,
    scores:      room.players.map(p => ({ username: p.username, score: p.score })),
    timeLimit:   15,
  });
  room.timer = setTimeout(() => resolveDuelRound(roomId), 15000);
}

function resolveDuelRound(roomId) {
  const room = duelRooms.get(roomId);
  if (!room) return;
  if (room.timer) { clearTimeout(room.timer); room.timer = null; }

  const q = room.questions[room.current];
  const roundResults = room.players.map(p => {
    const ans     = room.answers[p.socketId];
    const correct = ans !== undefined && ans === q.answer;
    if (correct) p.score++;
    return { username: p.username, socketId: p.socketId, correct, answered: ans };
  });

  io.to(roomId).emit('duel:round_end', {
    questionIdx:   room.current,
    correctAnswer: q.answer,
    results:       roundResults.map(r => ({ ...r, score: room.players.find(p => p.socketId === r.socketId).score })),
  });

  room.current++;
  if (room.current >= room.questions.length) {
    setTimeout(() => endDuelGame(roomId), 2800);
  } else {
    setTimeout(() => sendDuelQuestion(roomId), 2800);
  }
}

function endDuelGame(roomId) {
  const room = duelRooms.get(roomId);
  if (!room) return;

  const [p1, p2] = room.players;
  let winnerName  = null;
  if      (p1.score > p2.score) winnerName = p1.username;
  else if (p2.score > p1.score) winnerName = p2.username;
  const isTie = !winnerName;

  // ELO changes
  const p1Won = winnerName === p1.username;
  const p2Won = winnerName === p2.username;
  const d1 = isTie ? 0 : calcElo(p1.mmr, p2.mmr, p1Won, p1.rankGames);
  const d2 = isTie ? 0 : calcElo(p2.mmr, p1.mmr, p2Won, p2.rankGames);

  const newMmr1 = Math.max(0, p1.mmr + d1);
  const newMmr2 = Math.max(0, p2.mmr + d2);

  // Persist
  const users = loadUsers();
  const u1 = users.find(u => u.username === p1.username);
  const u2 = users.find(u => u.username === p2.username);
  if (u1) {
    ensureMMR(u1);
    u1.mmr       = newMmr1;
    u1.wins      = (u1.wins      || 0) + (p1Won ? 1 : 0);
    u1.losses    = (u1.losses    || 0) + (p2Won ? 1 : 0);
    u1.rankGames = (u1.rankGames || 0) + 1;
    u1.winStreak = p1Won ? (u1.winStreak || 0) + 1 : 0;
  }
  if (u2) {
    ensureMMR(u2);
    u2.mmr       = newMmr2;
    u2.wins      = (u2.wins      || 0) + (p2Won ? 1 : 0);
    u2.losses    = (u2.losses    || 0) + (p1Won ? 1 : 0);
    u2.rankGames = (u2.rankGames || 0) + 1;
    u2.winStreak = p2Won ? (u2.winStreak || 0) + 1 : 0;
  }
  saveUsers(users);

  const coinsFor = (p) => isTie ? 150 : p.username === winnerName ? 350 : 75;

  io.to(roomId).emit('duel:game_over', {
    scores: room.players.map(p => ({
      username:  p.username,
      score:     p.score,
      coins:     coinsFor(p),
      mmrChange: p.username === p1.username ? d1 : d2,
      mmrBefore: p.username === p1.username ? p1.mmr : p2.mmr,
      mmrAfter:  p.username === p1.username ? newMmr1 : newMmr2,
    })),
    winnerName,
  });
  duelRooms.delete(roomId);
}

io.on('connection', (socket) => {
  socket.on('duel:join', ({ username }) => {
    const existing = duelQueue.findIndex(p => p.socketId === socket.id);
    if (existing >= 0) duelQueue.splice(existing, 1);
    duelQueue.push({ socketId: socket.id, username: String(username).slice(0, 20) });
    socket.emit('duel:queuing', { queueSize: duelQueue.length });
    if (duelQueue.length >= 2) {
      const a = duelQueue.shift();
      const b = duelQueue.shift();
      createDuelRoom(a, b);
    }
  });

  socket.on('duel:cancel', () => {
    const idx = duelQueue.findIndex(p => p.socketId === socket.id);
    if (idx >= 0) duelQueue.splice(idx, 1);
  });

  socket.on('duel:answer', ({ roomId, questionIdx, answerId }) => {
    const room = duelRooms.get(roomId);
    if (!room || room.current !== questionIdx || room.answers[socket.id] !== undefined) return;
    room.answers[socket.id] = answerId;
    for (const p of room.players) {
      if (p.socketId !== socket.id) io.to(p.socketId).emit('duel:opponent_answered', { questionIdx });
    }
    if (Object.keys(room.answers).length >= room.players.length) resolveDuelRound(roomId);
  });

  socket.on('disconnect', () => {
    const qi = duelQueue.findIndex(p => p.socketId === socket.id);
    if (qi >= 0) duelQueue.splice(qi, 1);
    for (const [roomId, room] of duelRooms) {
      if (room.players.some(p => p.socketId === socket.id)) {
        if (room.timer) clearTimeout(room.timer);
        io.to(roomId).emit('duel:opponent_left');
        duelRooms.delete(roomId);
        break;
      }
    }
  });
});

httpServer.listen(PORT, () => console.log(`NBA Quiz Server → http://localhost:${PORT}`));

import React, { useState, useEffect, useCallback, useRef } from 'react';
import StartScreen        from './components/StartScreen';
import Quiz               from './components/Quiz';
import Results            from './components/Results';
import Leaderboard        from './components/Leaderboard';
import RankedLeaderboard  from './components/RankedLeaderboard';
import Shop               from './components/Shop';
import Collection         from './components/Collection';
import Achievements       from './components/Achievements';
import MysteryPlayer      from './components/MysteryPlayer';
import Blitz              from './components/Blitz';
import LoginScreen        from './components/LoginScreen';
import ProfileCustomize   from './components/ProfileCustomize';
import Duel               from './components/Duel';
import Tournament         from './components/Tournament';
import { ACHIEVEMENTS, ACH_MAP } from './data/achievements';
import { CARD_MAP, CARDS }        from './data/cards';
import './App.css';

// ── Persistence ────────────────────────────────────────────────────────────────
const DEF_INVENTORY   = { fifty_fifty:0, time_freeze:0, skip_pass:0, coin_magnet:0, streak_shield:0, oracle:0, second_chance:0, double_down:0, answer_ace:0, pack_upgrade:0, legend_token:0 };
const DEF_STATS       = { gamesPlayed:0, totalScore:0, bestScore:0, totalCorrect:0, totalQuestions:0, bestStreak:0, coinsEarned:0, packsOpened:0, dailyCompleted:0, hardCompleted:0, quiz100:0 };
const DEF_ACHIEVEMENTS = {};

function todayStr() { return new Date().toISOString().split('T')[0]; }

function getWeekKey() {
  const d = new Date();
  const jan1 = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil(((d - jan1) / 86400000 + jan1.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${week}`;
}

function freshDailyProgress(date) {
  return { date, gamesPlayed:0, correctTotal:0, maxStreak:0, packsOpened:0, blitzPlayed:0, mysteryPlayed:0, dailyPlayed:0, hardCorrect:0, coinsEarned:0, perfectGames:0, blitz10:0, claimed:[] };
}

const DUST_VALUES  = { common:10, rare:30,  epic:100, legendary:300 };
const CRAFT_COSTS  = { common:50, rare:150, epic:500, legendary:1500 };

function load(k, fb) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch { return fb; } }
function save(k, v)  { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }

// ── Achievement checker ────────────────────────────────────────────────────────
function checkNewUnlocks(achState, stats, collection) {
  const newlyUnlocked = [];
  for (const ach of ACHIEVEMENTS) {
    if (achState[ach.id]?.unlocked) continue;
    let pass = false;
    const { type, value, rarity } = ach.condition;
    switch (type) {
      case 'gamesPlayed':    pass = (stats.gamesPlayed    || 0) >= value; break;
      case 'bestScore':      pass = (stats.bestScore      || 0) >= value; break;
      case 'bestStreak':     pass = (stats.bestStreak     || 0) >= value; break;
      case 'coinsEarned':    pass = (stats.coinsEarned    || 0) >= value; break;
      case 'packsOpened':    pass = (stats.packsOpened    || 0) >= value; break;
      case 'dailyCompleted': pass = (stats.dailyCompleted || 0) >= value; break;
      case 'hardCompleted':  pass = (stats.hardCompleted  || 0) >= value; break;
      case 'quiz100':        pass = (stats.quiz100        || 0) >= value; break;
      case 'cardsOwned':     pass = collection.length >= value;            break;
      case 'rarityOwned':    pass = collection.some(c => CARD_MAP[c.cardId]?.rarity === rarity); break;
      default: break;
    }
    if (pass) newlyUnlocked.push(ach);
  }
  return newlyUnlocked;
}

// ── Toast component ────────────────────────────────────────────────────────────
function AchToast({ toasts, onDismiss }) {
  if (!toasts.length) return null;
  return (
    <div className="toast-stack">
      {toasts.map(t => (
        <div key={t.id} className="ach-toast" onClick={() => onDismiss(t.id)}>
          <span className="at-icon">{t.icon}</span>
          <div className="at-body">
            <div className="at-label">Achievement Unlocked!</div>
            <div className="at-name">{t.name}</div>
          </div>
          <div className="at-reward">🪙 +{t.reward}</div>
        </div>
      ))}
    </div>
  );
}

// ── App ────────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen,      setScreen]      = useState('start');
  const [coins,       setCoins]       = useState(() => load('nba_coins',        150));
  const [inventory,   setInventory]   = useState(() => load('nba_inventory',    DEF_INVENTORY));
  const [stats,       setStats]       = useState(() => load('nba_stats',        DEF_STATS));
  const [playerName,  setPlayerName]  = useState(() => load('nba_name',         ''));
  const [collection,  setCollection]  = useState(() => load('nba_collection',   []));
  const [achState,    setAchState]    = useState(() => load('nba_achievements', DEF_ACHIEVEMENTS));
  const [toasts,      setToasts]      = useState([]);
  const [quizConfig,  setQuizConfig]  = useState({ difficulty:'all', count:10, category:'all', isDaily:false, coinMultiplier:1 });
  const [quizResult,  setQuizResult]  = useState(null);
  const [loginBonus,  setLoginBonus]  = useState(null);
  const [xp,          setXp]          = useState(() => load('nba_xp', 0));
  const [dust,        setDust]        = useState(() => load('nba_dust', 0));
  const [dailyProgress, setDailyProgress] = useState(() => {
    const saved = load('nba_daily_progress', null);
    return (saved && saved.date === todayStr()) ? saved : freshDailyProgress(todayStr());
  });
  // Auth
  const [authToken,   setAuthToken]   = useState(() => localStorage.getItem('nba_auth_token') || '');
  const [authUser,    setAuthUser]    = useState(() => localStorage.getItem('nba_auth_user')  || '');
  // MMR / Ranked
  const [myMmr,       setMyMmr]       = useState(() => load('nba_mmr', 1000));
  // Banners
  const [ownedBanners,   setOwnedBanners]   = useState(() => load('nba_owned_banners',   []));
  const [equippedBanner, setEquippedBanner] = useState(() => load('nba_equipped_banner', null));
  // Tournament
  const [tournamentEntered, setTournamentEntered] = useState(() => {
    const wk = getWeekKey();
    return load('nba_tourn_week', '') === wk;
  });
  // Rewarded coins: track how many times claimed today
  const [rewardedToday, setRewardedToday] = useState(() => {
    const today = new Date().toISOString().split('T')[0];
    const saved = load('nba_rewarded', { date: '', count: 0 });
    return saved.date === today ? saved.count : 0;
  });

  const toastCounter = useRef(0);

  // ── Daily login bonus ────────────────────────────────────────────────────────
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastLogin  = localStorage.getItem('nba_last_login')  || '';
    const rawStreak  = parseInt(localStorage.getItem('nba_login_streak') || '0', 10);
    if (lastLogin === today) return;

    const yesterday = new Date(Date.now() - 86_400_000).toISOString().split('T')[0];
    const newStreak  = lastLogin === yesterday ? rawStreak + 1 : 1;
    const bonus      = Math.min(50 + (newStreak - 1) * 30, 300);
    const isRecord   = newStreak > 0 && newStreak % 7 === 0; // week milestone

    localStorage.setItem('nba_last_login',    today);
    localStorage.setItem('nba_login_streak',  String(newStreak));

    setCoins(c => c + bonus);
    setLoginBonus({ coins: bonus, streak: newStreak, isRecord });
  }, []); // eslint-disable-line

  // Persist
  useEffect(() => save('nba_coins',          coins),         [coins]);
  useEffect(() => save('nba_inventory',      inventory),     [inventory]);
  useEffect(() => save('nba_stats',          stats),         [stats]);
  useEffect(() => save('nba_name',           playerName),    [playerName]);
  useEffect(() => save('nba_collection',     collection),    [collection]);
  useEffect(() => save('nba_achievements',   achState),      [achState]);
  useEffect(() => save('nba_xp',             xp),            [xp]);
  useEffect(() => save('nba_dust',           dust),          [dust]);
  useEffect(() => save('nba_daily_progress', dailyProgress), [dailyProgress]);
  useEffect(() => save('nba_owned_banners',   ownedBanners),   [ownedBanners]);
  useEffect(() => save('nba_equipped_banner', equippedBanner), [equippedBanner]);
  useEffect(() => save('nba_mmr',             myMmr),          [myMmr]);
  useEffect(() => {
    if (authToken) localStorage.setItem('nba_auth_token', authToken);
    else localStorage.removeItem('nba_auth_token');
  }, [authToken]);
  useEffect(() => {
    if (authUser) localStorage.setItem('nba_auth_user', authUser);
    else localStorage.removeItem('nba_auth_user');
  }, [authUser]);

  // Reset daily quest progress when the day rolls over
  useEffect(() => {
    const today = todayStr();
    if (dailyProgress.date !== today) {
      setDailyProgress(freshDailyProgress(today));
    }
  }, []); // eslint-disable-line

  // ── Toast helpers ────────────────────────────────────────────────────────────
  const pushToasts = useCallback((achs) => {
    if (!achs.length) return;
    const newToasts = achs.map(a => ({ ...a, id: ++toastCounter.current }));
    setToasts(prev => [...prev, ...newToasts]);
    newToasts.forEach(t => setTimeout(() => setToasts(p => p.filter(x => x.id !== t.id)), 4500));
  }, []);

  const dismissToast = useCallback((id) => setToasts(p => p.filter(x => x.id !== id)), []);

  // ── Unlock achievements & award coins ───────────────────────────────────────
  const triggerAchievementCheck = useCallback((newStats, newCollection, newAchState) => {
    const unlocked = checkNewUnlocks(newAchState, newStats, newCollection);
    if (!unlocked.length) return { updatedAchState: newAchState, bonus: 0 };
    const now = Date.now();
    const updatedAchState = { ...newAchState };
    let bonus = 0;
    for (const a of unlocked) {
      updatedAchState[a.id] = { unlocked: true, unlockedAt: now };
      bonus += a.reward;
    }
    setAchState(updatedAchState);
    setCoins(c => c + bonus);
    pushToasts(unlocked);
    return { updatedAchState, bonus };
  }, [pushToasts]);

  // ── Quiz handlers ────────────────────────────────────────────────────────────
  const handleStart = (config) => { setQuizConfig(config); setScreen('quiz'); };

  const handleFinish = useCallback((result) => {
    const earned = result.coinsEarned || 0;
    const isPerfect     = result.correct === result.total && result.total > 0;
    const isPerfectHard = isPerfect && result.total >= 10 && result.config?.difficulty === 'hard';
    const perfectBonus  = isPerfectHard ? 500 : 0;
    const isDaily       = result.config?.isDaily;
    const isHard        = result.config?.difficulty === 'hard';
    const xpGain = result.correct * 12 + (isPerfect ? 150 : 0) + (isDaily ? 100 : 0);

    setCoins(c => c + earned + perfectBonus);
    setXp(x => x + xpGain);
    setStats(prev => {
      const newStats = {
        ...prev,
        gamesPlayed:    prev.gamesPlayed    + 1,
        totalScore:     prev.totalScore     + result.score,
        bestScore:      Math.max(prev.bestScore, result.score),
        totalCorrect:   prev.totalCorrect   + result.correct,
        totalQuestions: prev.totalQuestions + result.total,
        bestStreak:     Math.max(prev.bestStreak, result.bestStreak || 0),
        coinsEarned:    prev.coinsEarned    + earned + perfectBonus,
        dailyCompleted: prev.dailyCompleted + (isDaily ? 1 : 0),
        hardCompleted:  prev.hardCompleted  + (isHard  ? 1 : 0),
        quiz100:        prev.quiz100        + (isPerfect && result.total > 0 ? 1 : 0),
      };
      triggerAchievementCheck(newStats, collection, achState);
      return newStats;
    });
    setDailyProgress(prev => ({
      ...prev,
      gamesPlayed:  prev.gamesPlayed  + 1,
      correctTotal: prev.correctTotal + result.correct,
      maxStreak:    Math.max(prev.maxStreak, result.bestStreak || 0),
      dailyPlayed:  prev.dailyPlayed  + (isDaily ? 1 : 0),
      hardCorrect:  prev.hardCorrect  + (isHard  ? result.correct : 0),
      coinsEarned:  prev.coinsEarned  + earned + perfectBonus,
      perfectGames: prev.perfectGames + (isPerfect ? 1 : 0),
    }));
    setQuizResult({ ...result, perfectBonus });
    setScreen('results');
    if (result.config?.isTournament) handleTournamentScore(result.score);
  }, [collection, achState, triggerAchievementCheck]);

  // ── Mystery Player handler ───────────────────────────────────────────────────
  const handleMysteryFinish = useCallback((coinsEarned) => {
    setCoins(c => c + coinsEarned);
    setXp(x => x + 150);
    setStats(prev => {
      const newStats = {
        ...prev,
        gamesPlayed: prev.gamesPlayed + 1,
        coinsEarned: prev.coinsEarned + coinsEarned,
      };
      triggerAchievementCheck(newStats, collection, achState);
      return newStats;
    });
    setDailyProgress(prev => ({
      ...prev,
      mysteryPlayed: prev.mysteryPlayed + 1,
      coinsEarned:   prev.coinsEarned   + coinsEarned,
    }));
    setScreen('start');
  }, [collection, achState, triggerAchievementCheck]);

  // ── Blitz handler ────────────────────────────────────────────────────────────
  const handleBlitzFinish = useCallback((coinsEarned, correct, answered) => {
    const c = correct || 0;
    setCoins(x => x + coinsEarned);
    setXp(x => x + c * 10 + 50);
    setStats(prev => {
      const newStats = {
        ...prev,
        gamesPlayed:    prev.gamesPlayed    + 1,
        totalCorrect:   prev.totalCorrect   + c,
        totalQuestions: prev.totalQuestions + (answered || 0),
        coinsEarned:    prev.coinsEarned    + coinsEarned,
      };
      triggerAchievementCheck(newStats, collection, achState);
      return newStats;
    });
    setDailyProgress(prev => ({
      ...prev,
      blitzPlayed:  prev.blitzPlayed  + 1,
      correctTotal: prev.correctTotal + c,
      coinsEarned:  prev.coinsEarned  + coinsEarned,
      blitz10:      prev.blitz10      + (c >= 10 ? 1 : 0),
    }));
    setScreen('start');
  }, [collection, achState, triggerAchievementCheck]);

  // ── Auth handlers ────────────────────────────────────────────────────────────
  const handleAuth = useCallback((token, username, serverCoins, serverMmr) => {
    setAuthToken(token);
    setAuthUser(username);
    if (!playerName) setPlayerName(username);
    if (serverCoins && serverCoins > 150) setCoins(serverCoins);
    if (serverMmr)   setMyMmr(serverMmr);
  }, [playerName]);

  const handleMmrChange = useCallback((newMmr) => {
    setMyMmr(newMmr);
  }, []);

  const handleLogout = useCallback(() => {
    setAuthToken('');
    setAuthUser('');
  }, []);

  // ── Banner handlers ───────────────────────────────────────────────────────────
  const handleBuyBanner = useCallback((bannerId, price) => {
    if (coins < price) return false;
    setCoins(c => c - price);
    setOwnedBanners(prev => prev.includes(bannerId) ? prev : [...prev, bannerId]);
    return true;
  }, [coins]);

  const handleEquipBanner = useCallback((banner) => {
    setEquippedBanner(banner);
  }, []);

  // ── Tournament handlers ───────────────────────────────────────────────────────
  const handleTournamentEnter = useCallback(() => {
    setCoins(c => c - 150);
    const wk = getWeekKey();
    save('nba_tourn_week', wk);
    setTournamentEntered(true);
  }, []);

  const handleTournamentScore = useCallback(async (score) => {
    if (!authUser || !tournamentEntered) return;
    try {
      const res = await fetch(`${(process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/$/,'')}/api/tournament/score`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: authUser, score }),
      });
      const data = await res.json();
      if (data.prize > 0) setCoins(c => c + data.prize);
    } catch {}
  }, [authUser, tournamentEntered]);

  // ── Rewarded coins ─────────────────────────────────────────────────────────
  const handleRewardedClaim = useCallback(() => {
    const today = todayStr();
    const newCount = rewardedToday + 1;
    setRewardedToday(newCount);
    save('nba_rewarded', { date: today, count: newCount });
    setCoins(c => c + 50);
  }, [rewardedToday]);

  // ── Shop handlers ────────────────────────────────────────────────────────────
  const handlePurchase = useCallback((itemId, price) => {
    if (coins < price) return false;
    setCoins(c => c - price);
    setInventory(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    return true;
  }, [coins]);

  const handleUsePowerUp = useCallback((itemId) => {
    setInventory(prev => ({ ...prev, [itemId]: Math.max(0, (prev[itemId] || 0) - 1) }));
  }, []);

  // ── Pack opening ─────────────────────────────────────────────────────────────
  const handleOpenPack = useCallback((pack, cards) => {
    setCoins(c => c - pack.price);
    setXp(x => x + 60);
    const newEntries = cards.map(c => ({ cardId: c.id, openedAt: Date.now() }));
    const newCollection = [...collection, ...newEntries];
    setCollection(newCollection);
    setStats(prev => {
      const newStats = { ...prev, packsOpened: (prev.packsOpened || 0) + 1 };
      triggerAchievementCheck(newStats, newCollection, achState);
      return newStats;
    });
    setDailyProgress(prev => ({ ...prev, packsOpened: prev.packsOpened + 1 }));
  }, [collection, achState, triggerAchievementCheck]);

  // ── Quest claiming ───────────────────────────────────────────────────────────
  const handleClaimQuest = useCallback((questId, reward) => {
    setCoins(c => c + reward);
    setDailyProgress(prev => ({
      ...prev,
      claimed: [...(prev.claimed || []), questId],
    }));
  }, []);

  // ── Card dusting ─────────────────────────────────────────────────────────────
  const handleDustCard = useCallback((cardId) => {
    const card = CARD_MAP[cardId];
    if (!card) return;
    const copies = collection.filter(c => c.cardId === cardId).length;
    if (copies < 2) return;
    const dustExtra = copies - 1;
    const dustGain  = DUST_VALUES[card.rarity] * dustExtra;
    setDust(d => d + dustGain);
    setCollection(prev => {
      const remaining = [...prev];
      let removed = 0;
      return remaining.filter(c => {
        if (c.cardId === cardId && removed < dustExtra) { removed++; return false; }
        return true;
      });
    });
  }, [collection]);

  const handleCraftCard = useCallback((rarity) => {
    const cost = CRAFT_COSTS[rarity];
    if (dust < cost) return;
    const pool = CARDS.filter(c => c.rarity === rarity);
    if (!pool.length) return;
    const card = pool[Math.floor(Math.random() * pool.length)];
    setDust(d => d - cost);
    setCollection(prev => [...prev, { cardId: card.id, openedAt: Date.now() }]);
  }, [dust]);

  const nav = (s) => setScreen(s);

  if (!authToken) {
    return <LoginScreen onAuth={handleAuth} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <button className="logo" onClick={() => nav('start')}>
            <span className="logo-ball">🏀</span>
            <span className="logo-text">NBA <span className="logo-accent">QUIZ</span></span>
          </button>
          <div className="header-center">
            {(screen === 'quiz' || screen === 'mystery' || screen === 'blitz') && <span className="header-tag">IN GAME</span>}
          </div>
          <div className="header-right">
            <button className="coin-display" onClick={() => nav('shop')} title="Shop">
              <span className="coin-icon">🪙</span>
              <span className="coin-amount">{coins.toLocaleString()}</span>
            </button>
            <nav className="header-nav">
              <button className={`nav-btn ${screen==='start'||screen==='mystery'?'active':''}`} onClick={() => nav('start')}>Home</button>
              <button className={`nav-btn ${screen==='ranked-leaderboard'?'active':''}`} onClick={() => nav('ranked-leaderboard')}>⚔️ Ranked</button>
              <button className={`nav-btn ${screen==='leaderboard' ?'active':''}`} onClick={() => nav('leaderboard')}>Board</button>
              <button className={`nav-btn nav-cards ${screen==='collection' ?'active':''}`} onClick={() => nav('collection')}>Cards</button>
              <button className={`nav-btn nav-ach   ${screen==='achievements'?'active':''}`} onClick={() => nav('achievements')}>
                Badges
                {Object.values(achState).filter(a=>a.unlocked).length > 0 &&
                  <span className="ach-count-badge">{Object.values(achState).filter(a=>a.unlocked).length}</span>
                }
              </button>
              <button className={`nav-btn nav-shop  ${screen==='shop'  ?'active':''}`} onClick={() => nav('shop')}>Shop</button>
              <button className={`nav-btn nav-profile ${screen==='profile'?'active':''}`} onClick={() => nav('profile')} title={authUser}>
                <span className="nav-avatar">{authUser ? authUser.charAt(0).toUpperCase() : '?'}</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="app-main">
        {screen === 'start'        && <StartScreen coins={coins} stats={stats} achState={achState} collection={collection} playerName={playerName} xp={xp} dailyProgress={dailyProgress} dust={dust} equippedBanner={equippedBanner} rewardedToday={rewardedToday} myMmr={myMmr} onChangeName={setPlayerName} onStart={handleStart} onLeaderboard={() => nav('leaderboard')} onShop={() => nav('shop')} onCollection={() => nav('collection')} onAchievements={() => nav('achievements')} onMystery={() => nav('mystery')} onBlitz={() => nav('blitz')} onClaimQuest={handleClaimQuest} onProfile={() => nav('profile')} onDuel={() => nav('duel')} onTournament={() => nav('tournament')} onRewardedClaim={handleRewardedClaim} onRankedLeaderboard={() => nav('ranked-leaderboard')} />}
        {screen === 'quiz'         && <Quiz config={quizConfig} inventory={inventory} onFinish={handleFinish} onUsePowerUp={handleUsePowerUp} />}
        {screen === 'mystery'      && <MysteryPlayer onFinish={handleMysteryFinish} onBack={() => nav('start')} />}
        {screen === 'blitz'        && <Blitz onFinish={handleBlitzFinish} onBack={() => nav('start')} />}
        {screen === 'results'      && <Results result={quizResult} playerName={playerName} onRestart={() => nav('start')} onLeaderboard={() => nav('leaderboard')} />}
        {screen === 'leaderboard'  && <Leaderboard onBack={() => nav('start')} />}
        {screen === 'shop'         && <Shop coins={coins} inventory={inventory} ownedBanners={ownedBanners} onPurchase={handlePurchase} onBuyBanner={handleBuyBanner} onBack={() => nav('start')} />}
        {screen === 'collection'   && <Collection coins={coins} collection={collection} dust={dust} inventory={inventory} onOpenPack={handleOpenPack} onDustCard={handleDustCard} onCraftCard={handleCraftCard} onUsePowerUp={handleUsePowerUp} onBack={() => nav('start')} />}
        {screen === 'achievements' && <Achievements achState={achState} stats={stats} collection={collection} cardMap={CARD_MAP} onBack={() => nav('start')} />}
        {screen === 'profile'      && <ProfileCustomize username={authUser} coins={coins} xp={xp} collection={collection} ownedBanners={ownedBanners} equippedBanner={equippedBanner} onEquip={handleEquipBanner} onBack={() => nav('start')} onLogout={handleLogout} />}
        {screen === 'duel'         && <Duel username={authUser || playerName} myMmr={myMmr} onCoinsEarned={(c) => setCoins(prev => prev + c)} onMmrChange={handleMmrChange} onBack={() => nav('start')} onViewLeaderboard={() => nav('ranked-leaderboard')} />}
        {screen === 'ranked-leaderboard' && <RankedLeaderboard myUsername={authUser || playerName} onBack={() => nav('start')} onDuel={() => nav('duel')} />}
        {screen === 'tournament'   && <Tournament username={authUser || playerName} coins={coins} isEntered={tournamentEntered} onEnter={handleTournamentEnter} onBack={() => nav('start')} onStart={() => { nav('quiz'); setQuizConfig({ difficulty:'hard', count:10, category:'all', isDaily:false, coinMultiplier:1, isTournament:true }); }} />}
      </main>

      <footer className="app-footer">
        <p>NBA Advanced Quiz &copy; 2026 &mdash; Collect · Achieve · Dominate</p>
      </footer>

      <nav className="mobile-nav">
        <button className={`mn-btn ${screen==='start'?'mn-active':''}`} onClick={() => nav('start')}>
          <span className="mn-icon">🏠</span><span className="mn-lbl">Home</span>
        </button>
        <button className={`mn-btn ${screen==='ranked-leaderboard'||screen==='duel'?'mn-active':''}`} onClick={() => nav('ranked-leaderboard')}>
          <span className="mn-icon">⚔️</span><span className="mn-lbl">Ranked</span>
        </button>
        <button className={`mn-btn mn-btn-play`} onClick={() => nav('duel')}>
          <span className="mn-icon">🎮</span><span className="mn-lbl">Duel</span>
        </button>
        <button className={`mn-btn ${screen==='shop'?'mn-active':''}`} onClick={() => nav('shop')}>
          <span className="mn-icon">🛒</span><span className="mn-lbl">Shop</span>
        </button>
        <button className={`mn-btn ${screen==='profile'?'mn-active':''}`} onClick={() => nav('profile')}>
          <span className="mn-icon"><span className="mn-avatar">{authUser ? authUser.charAt(0).toUpperCase() : '?'}</span></span>
          <span className="mn-lbl">Profile</span>
        </button>
      </nav>

      <AchToast toasts={toasts} onDismiss={dismissToast} />
      {loginBonus && <LoginBonusModal bonus={loginBonus} onClaim={() => setLoginBonus(null)} />}
    </div>
  );
}

// ── Daily Login Bonus Modal ────────────────────────────────────────────────────
function LoginBonusModal({ bonus, onClaim }) {
  const milestones = [1,2,3,4,5,6,7];
  const streakInWeek = ((bonus.streak - 1) % 7) + 1;
  return (
    <div className="lb-overlay" onClick={onClaim}>
      <div className="lb-modal" onClick={e => e.stopPropagation()}>
        {bonus.isRecord && <div className="lb-record-banner">🔥 Week Streak Complete!</div>}
        <div className="lb-eyebrow">Daily Login Bonus</div>
        <div className="lb-coins">
          <span className="lb-coin-icon">🪙</span>
          <span className="lb-coin-amt">+{bonus.coins.toLocaleString()}</span>
        </div>
        <div className="lb-streak-label">Day {bonus.streak} Streak</div>
        <div className="lb-week">
          {milestones.map(d => (
            <div key={d} className={`lb-day ${d < streakInWeek ? 'done' : d === streakInWeek ? 'today' : ''}`}>
              <div className="lb-day-icon">{d === 7 ? '🏆' : d <= streakInWeek ? '✓' : d}</div>
              <div className="lb-day-lbl">+{Math.min(50+(d-1)*30,300)}</div>
            </div>
          ))}
        </div>
        <p className="lb-tip">Come back tomorrow for +{Math.min(50 + bonus.streak * 30, 300)} coins!</p>
        <button className="btn-gold lb-claim-btn" onClick={onClaim}>Claim Bonus →</button>
      </div>
    </div>
  );
}

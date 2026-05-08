export const QUEST_POOL = [
  { id: 'play_2_games',   label: 'Play 2 quiz games',                 icon: '🎮', target: 2,   reward: 75,  trackKey: 'gamesPlayed'  },
  { id: 'play_3_games',   label: 'Play 3 quiz games',                 icon: '🎮', target: 3,   reward: 125, trackKey: 'gamesPlayed'  },
  { id: 'correct_15',     label: 'Answer 15 questions correctly',     icon: '✅', target: 15,  reward: 125, trackKey: 'correctTotal' },
  { id: 'correct_30',     label: 'Answer 30 questions correctly',     icon: '📚', target: 30,  reward: 200, trackKey: 'correctTotal' },
  { id: 'streak_5',       label: 'Get a 5-answer streak',             icon: '🔥', target: 5,   reward: 150, trackKey: 'maxStreak'    },
  { id: 'streak_8',       label: 'Get an 8-answer streak',            icon: '🔥', target: 8,   reward: 225, trackKey: 'maxStreak'    },
  { id: 'open_pack',      label: 'Open a card pack',                  icon: '📦', target: 1,   reward: 75,  trackKey: 'packsOpened'  },
  { id: 'play_blitz',     label: 'Play Blitz mode',                   icon: '⚡', target: 1,   reward: 100, trackKey: 'blitzPlayed'  },
  { id: 'play_mystery',   label: 'Play Mystery Player',               icon: '🕵️', target: 1,   reward: 100, trackKey: 'mysteryPlayed'},
  { id: 'play_daily',     label: 'Complete the Daily Challenge',      icon: '📅', target: 1,   reward: 200, trackKey: 'dailyPlayed'  },
  { id: 'hard_correct_5', label: 'Answer 5 hard questions correctly', icon: '💪', target: 5,   reward: 150, trackKey: 'hardCorrect'  },
  { id: 'earn_300',       label: 'Earn 300 coins from quizzes',       icon: '🪙', target: 300, reward: 175, trackKey: 'coinsEarned'  },
  { id: 'perfect_game',   label: 'Finish a game with no mistakes',    icon: '⭐', target: 1,   reward: 300, trackKey: 'perfectGames' },
  { id: 'blitz_10',       label: 'Get 10+ correct in Blitz',         icon: '⚡', target: 1,   reward: 200, trackKey: 'blitz10'      },
];

function seededRand(seed) {
  let s = seed;
  return () => {
    s = ((s * 1664525) + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

export function getDailyQuests(dateStr) {
  const dayNum = Math.floor(new Date(dateStr).getTime() / 86400000);
  const rand   = seededRand(dayNum);
  const pool   = [...QUEST_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 3);
}

export const LEVEL_THRESHOLDS = [0, 100, 250, 500, 900, 1400, 2100, 3000, 4200, 5700, 7500, 10000];
export const LEVEL_TITLES     = ['','Rookie','Amateur','Semi-Pro','Pro','All-Star','Superstar','MVP','Champion','Legend','GOAT','Immortal'];

export function getLevel(xp) {
  let level = 1;
  while (level < LEVEL_THRESHOLDS.length && xp >= LEVEL_THRESHOLDS[level]) level++;
  return Math.min(level, LEVEL_THRESHOLDS.length);
}

export function getLevelProgress(xp) {
  const level   = getLevel(xp);
  const curFloor = LEVEL_THRESHOLDS[level - 1] || 0;
  const nextFloor = LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1] + 5000;
  return {
    level,
    title:    LEVEL_TITLES[level] || 'Legend',
    current:  xp - curFloor,
    total:    nextFloor - curFloor,
    isMaxed:  level >= LEVEL_THRESHOLDS.length,
  };
}

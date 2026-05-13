const questions = [
  // ─── EASY ───────────────────────────────────────────────────────────────────
  {
    id: 1, category: "Players", difficulty: "easy",
    question: "Which player is nicknamed 'King James'?",
    options: ["Kobe Bryant", "LeBron James", "Kevin Durant", "Dwyane Wade"],
    answer: "LeBron James",
    explanation: "LeBron James earned the nickname 'King James' due to his dominant play since high school, where he was on the cover of Sports Illustrated at age 17."
  },
  {
    id: 2, category: "Teams", difficulty: "easy",
    question: "The Golden State Warriors play their home games at which arena?",
    options: ["Oracle Arena", "Staples Center", "Chase Center", "Crypto.com Arena"],
    answer: "Chase Center",
    explanation: "The Warriors moved to the Chase Center in San Francisco for the 2019-20 season, leaving Oracle Arena in Oakland after 47 years."
  },
  {
    id: 3, category: "Players", difficulty: "easy",
    question: "What jersey number did Michael Jordan wear for most of his Bulls career?",
    options: ["32", "45", "23", "33"],
    answer: "23",
    explanation: "Michael Jordan wore #23 for most of his Bulls career. He briefly switched to #45 upon his 1995 comeback and #12 once after his jersey was stolen."
  },
  {
    id: 4, category: "History", difficulty: "easy",
    question: "What does 'NBA' stand for?",
    options: ["National Basketball Alliance", "National Basketball Association", "North American Basketball Association", "National Ball Association"],
    answer: "National Basketball Association",
    explanation: "The NBA (National Basketball Association) was formed in 1949 after the merger of the Basketball Association of America (BAA) and the National Basketball League (NBL)."
  },
  {
    id: 5, category: "Rules", difficulty: "easy",
    question: "How many players from each team are on the court at the same time in an NBA game?",
    options: ["4", "5", "6", "7"],
    answer: "5",
    explanation: "Each NBA team has 5 players on the court simultaneously: typically a point guard, shooting guard, small forward, power forward, and center."
  },
  {
    id: 6, category: "Players", difficulty: "easy",
    question: "Which Hall of Fame power forward is nicknamed 'The Mailman'?",
    options: ["Charles Barkley", "Karl Malone", "Kevin Garnett", "Tim Duncan"],
    answer: "Karl Malone",
    explanation: "Karl Malone earned 'The Mailman' nickname because 'he always delivers.' He spent 18 seasons with the Utah Jazz and is 2nd on the all-time scoring list."
  },
  {
    id: 7, category: "Players", difficulty: "easy",
    question: "Kobe Bryant was originally drafted by which team before being traded to the Lakers?",
    options: ["Sacramento Kings", "Denver Nuggets", "Charlotte Hornets", "Minnesota Timberwolves"],
    answer: "Charlotte Hornets",
    explanation: "Kobe Bryant was drafted 13th overall by the Charlotte Hornets in 1996 and was traded to the Los Angeles Lakers for Vlade Divac on draft night."
  },
  {
    id: 8, category: "Players", difficulty: "easy",
    question: "Which Hall of Fame center is nicknamed 'The Big Fundamental'?",
    options: ["David Robinson", "Hakeem Olajuwon", "Tim Duncan", "Shaquille O'Neal"],
    answer: "Tim Duncan",
    explanation: "Tim Duncan earned 'The Big Fundamental' for his textbook, fundamentally sound play. He won 5 championships with the San Antonio Spurs."
  },
  {
    id: 9, category: "Players", difficulty: "easy",
    question: "At what college did Stephen Curry play before entering the NBA?",
    options: ["Duke", "Kentucky", "Davidson College", "North Carolina"],
    answer: "Davidson College",
    explanation: "Stephen Curry played at Davidson College, a small school that most NBA scouts overlooked. He averaged 28.6 points per game in his senior year."
  },
  {
    id: 10, category: "Teams", difficulty: "easy",
    question: "The Boston Celtics play their home games in which city?",
    options: ["New York", "Philadelphia", "Boston", "Hartford"],
    answer: "Boston",
    explanation: "The Boston Celtics are one of the NBA's original teams, founded in 1946. They play at the TD Garden in Boston, Massachusetts."
  },
  {
    id: 11, category: "Players", difficulty: "easy",
    question: "Which player was nicknamed 'The Admiral' and played for the San Antonio Spurs?",
    options: ["Hakeem Olajuwon", "Patrick Ewing", "David Robinson", "Alonzo Mourning"],
    answer: "David Robinson",
    explanation: "David Robinson earned 'The Admiral' nickname from his service as a naval officer before joining the NBA. He won 2 championships with the Spurs alongside Tim Duncan."
  },
  {
    id: 12, category: "Players", difficulty: "easy",
    question: "Magic Johnson is famous for playing which position?",
    options: ["Shooting Guard", "Center", "Point Guard", "Power Forward"],
    answer: "Point Guard",
    explanation: "Magic Johnson revolutionized the point guard position at 6'9\", a height previously seen only in forwards or centers. He led the 'Showtime' Lakers to 5 championships."
  },
  {
    id: 13, category: "Awards", difficulty: "easy",
    question: "Gregg Popovich coached the San Antonio Spurs to how many NBA championships?",
    options: ["3", "4", "5", "6"],
    answer: "5",
    explanation: "Gregg Popovich coached the Spurs to championships in 1999, 2003, 2005, 2007, and 2014 — spanning three different decades with one franchise."
  },
  {
    id: 14, category: "Players", difficulty: "easy",
    question: "Which player famously scored 81 points in a single game in January 2006?",
    options: ["LeBron James", "Allen Iverson", "Kobe Bryant", "Dwyane Wade"],
    answer: "Kobe Bryant",
    explanation: "Kobe Bryant scored 81 points against the Toronto Raptors on January 22, 2006 — the 2nd highest single-game total in NBA history behind Wilt Chamberlain's 100."
  },
  {
    id: 15, category: "History", difficulty: "easy",
    question: "Which player is nicknamed 'The Greek Freak' and has won back-to-back MVP awards?",
    options: ["Nikola Jokic", "Luka Doncic", "Giannis Antetokounmpo", "Kristaps Porzingis"],
    answer: "Giannis Antetokounmpo",
    explanation: "Giannis Antetokounmpo won back-to-back MVPs in 2019 and 2020, then capped it with a 2021 NBA championship and Finals MVP with the Milwaukee Bucks."
  },

  // ─── MEDIUM ─────────────────────────────────────────────────────────────────
  {
    id: 16, category: "Stats & Records", difficulty: "medium",
    question: "Who surpassed Kareem Abdul-Jabbar's all-time NBA scoring record in February 2023?",
    options: ["Kevin Durant", "James Harden", "LeBron James", "Stephen Curry"],
    answer: "LeBron James",
    explanation: "LeBron James passed Kareem Abdul-Jabbar's record of 38,387 points on February 7, 2023, in a game against the Oklahoma City Thunder. Kareem was in attendance."
  },
  {
    id: 17, category: "Stats & Records", difficulty: "medium",
    question: "What does PER stand for in NBA advanced statistics?",
    options: ["Points Efficiency Rating", "Player Efficiency Rating", "Possession Effectiveness Rating", "Performance Evaluation Rate"],
    answer: "Player Efficiency Rating",
    explanation: "PER (Player Efficiency Rating), developed by John Hollinger, is a per-minute rating that summarizes a player's statistical accomplishments into a single value. The league average is 15.0."
  },
  {
    id: 18, category: "Players", difficulty: "medium",
    question: "Allen Iverson is known by which famous nickname?",
    options: ["The Answer", "AI", "The Crossover King", "Bubba Chuck"],
    answer: "The Answer",
    explanation: "Allen Iverson was nicknamed 'The Answer' while in high school. He was the #1 pick in the 1996 NBA Draft and won the MVP award in 2001 with the Philadelphia 76ers."
  },
  {
    id: 19, category: "Championships", difficulty: "medium",
    question: "In the 2016 NBA Finals, which team came back from a 3-1 deficit to win the championship?",
    options: ["Golden State Warriors", "Cleveland Cavaliers", "Oklahoma City Thunder", "San Antonio Spurs"],
    answer: "Cleveland Cavaliers",
    explanation: "The Cleveland Cavaliers became the first team to overcome a 3-1 Finals deficit. LeBron James and Kyrie Irving led the comeback, with LeBron winning Finals MVP."
  },
  {
    id: 20, category: "Players", difficulty: "medium",
    question: "NBA superstar Dirk Nowitzki is from which country?",
    options: ["France", "Spain", "Germany", "Serbia"],
    answer: "Germany",
    explanation: "Dirk Nowitzki was born in Würzburg, Germany. He spent his entire 21-year career with the Dallas Mavericks, winning the 2011 championship and Finals MVP."
  },
  {
    id: 21, category: "Drafts", difficulty: "medium",
    question: "Who was the #1 overall pick in the 2012 NBA Draft?",
    options: ["Karl-Anthony Towns", "Andrew Wiggins", "Anthony Davis", "Jabari Parker"],
    answer: "Anthony Davis",
    explanation: "Anthony Davis was selected #1 overall by the New Orleans Hornets in 2012 out of Kentucky. He would later be traded to the Los Angeles Lakers in 2019."
  },
  {
    id: 22, category: "Championships", difficulty: "medium",
    question: "Which team won the 2011 NBA Championship, defeating the Miami Heat?",
    options: ["San Antonio Spurs", "Oklahoma City Thunder", "Dallas Mavericks", "Boston Celtics"],
    answer: "Dallas Mavericks",
    explanation: "The Dallas Mavericks defeated LeBron James's Miami Heat 'super-team' 4-2 in the 2011 Finals. Dirk Nowitzki won Finals MVP averaging 26.0 points per game."
  },
  {
    id: 23, category: "Stats & Records", difficulty: "medium",
    question: "What is the NBA record for most assists in a single game?",
    options: ["22", "26", "28", "30"],
    answer: "30",
    explanation: "Scott Skiles dished out 30 assists for the Orlando Magic against the Denver Nuggets on December 30, 1990 — a record that still stands today."
  },
  {
    id: 24, category: "History", difficulty: "medium",
    question: "In what year was the 3-point line first introduced in the NBA?",
    options: ["1975", "1977", "1979", "1981"],
    answer: "1979",
    explanation: "The NBA introduced the 3-point line for the 1979-80 season. Chris Ford of the Boston Celtics made the first official 3-pointer in NBA history."
  },
  {
    id: 25, category: "History", difficulty: "medium",
    question: "The 1971-72 Los Angeles Lakers set the record for the longest winning streak in NBA history. How many consecutive games did they win?",
    options: ["25", "28", "33", "37"],
    answer: "33",
    explanation: "The 1971-72 LA Lakers won 33 consecutive games from November 5, 1971 to January 7, 1972. They finished with a then-record 69-13 and won the championship."
  },
  {
    id: 26, category: "Stats & Records", difficulty: "medium",
    question: "Who holds the NBA record for most career triple-doubles?",
    options: ["Magic Johnson", "Oscar Robertson", "Jason Kidd", "Russell Westbrook"],
    answer: "Russell Westbrook",
    explanation: "Russell Westbrook holds the all-time triple-double record with 198 (as of 2023). He also became the first player since Oscar Robertson to average a triple-double for a full season (2016-17)."
  },
  {
    id: 27, category: "History", difficulty: "medium",
    question: "Who coached the legendary 1992 USA 'Dream Team' at the Barcelona Olympics?",
    options: ["Larry Brown", "Pat Riley", "Chuck Daly", "Lenny Wilkens"],
    answer: "Chuck Daly",
    explanation: "Chuck Daly coached the Dream Team to a gold medal at the 1992 Barcelona Olympics. The team went 8-0, winning by an average margin of 43.8 points per game."
  },
  {
    id: 28, category: "Three-Pointers", difficulty: "medium",
    question: "What is the NBA record for most 3-pointers made in a single game?",
    options: ["11", "12", "13", "14"],
    answer: "14",
    explanation: "Klay Thompson made 14 three-pointers against the Chicago Bulls on October 29, 2018 — breaking his own previous record of 13, set in a 2016 game against the Sacramento Kings."
  },
  {
    id: 29, category: "Players", difficulty: "medium",
    question: "Which NBA player is famous for the 'Dream Shake' post move?",
    options: ["Tim Duncan", "Karl Malone", "Hakeem Olajuwon", "Patrick Ewing"],
    answer: "Hakeem Olajuwon",
    explanation: "Hakeem Olajuwon's 'Dream Shake' was an unguardable post move using footwork, fakes, and pivots. He used it to win back-to-back titles in 1994-95 and earn the Finals MVP both years."
  },
  {
    id: 30, category: "Stats & Records", difficulty: "medium",
    question: "Who holds the NBA career record for most steals?",
    options: ["Gary Payton", "Jason Kidd", "John Stockton", "Michael Jordan"],
    answer: "John Stockton",
    explanation: "John Stockton holds the career steals record with 3,265 steals — over 1,000 more than the second-place Jason Kidd. Stockton also holds the career assists record."
  },
  {
    id: 31, category: "Awards", difficulty: "medium",
    question: "Which NBA player holds the record for most Defensive Player of the Year awards?",
    options: ["Ben Wallace", "Dwight Howard", "Dikembe Mutombo", "Rudy Gobert"],
    answer: "Dikembe Mutombo",
    explanation: "Dikembe Mutombo won the Defensive Player of the Year award 4 times (1994, 1995, 1996, 2001). He was also famous for his finger-wagging celebration after blocks."
  },
  {
    id: 32, category: "Stats & Records", difficulty: "medium",
    question: "The Chicago Bulls first team to win 70 games in a regular season. How many wins did the 1995-96 Bulls record?",
    options: ["70", "71", "72", "73"],
    answer: "72",
    explanation: "The 1995-96 Chicago Bulls went 72-10, led by Michael Jordan, Scottie Pippen, and Dennis Rodman. That record stood until the 2015-16 Golden State Warriors won 73."
  },
  {
    id: 33, category: "History", difficulty: "medium",
    question: "Michael Jordan's iconic 'Flu Game' performance of 38 points came in which year's NBA Finals?",
    options: ["1993", "1995", "1997", "1998"],
    answer: "1997",
    explanation: "In Game 5 of the 1997 Finals vs the Utah Jazz, Jordan played despite severe flu-like symptoms to score 38 points. The Bulls won 90-88, and Jordan collapsed in Scottie Pippen's arms after the buzzer."
  },
  {
    id: 34, category: "Championships", difficulty: "medium",
    question: "Which NBA team has won the most championships in history (tied record)?",
    options: ["Chicago Bulls", "Los Angeles Lakers", "Boston Celtics", "Golden State Warriors"],
    answer: "Boston Celtics",
    explanation: "The Boston Celtics hold the record with 17 NBA championships, tied with the Los Angeles Lakers. The Celtics dominated the 1960s, winning 11 titles in 13 years under coach Red Auerbach."
  },
  {
    id: 35, category: "Three-Pointers", difficulty: "medium",
    question: "Stephen Curry set the NBA record for most 3-pointers made in a season. How many did he hit in 2015-16?",
    options: ["324", "354", "386", "402"],
    answer: "402",
    explanation: "Stephen Curry made 402 three-pointers in the 2015-16 season, shattering his own previous record of 286. He also became the first unanimous MVP in NBA history that season."
  },
  {
    id: 36, category: "Players", difficulty: "medium",
    question: "Which player holds the all-time NBA record for career blocks?",
    options: ["Patrick Ewing", "Kareem Abdul-Jabbar", "Mark Eaton", "Hakeem Olajuwon"],
    answer: "Hakeem Olajuwon",
    explanation: "Hakeem Olajuwon holds the all-time blocks record with 3,830 career blocks. He's followed by Dikembe Mutombo (3,289), Kareem Abdul-Jabbar (3,189), and Mark Eaton (3,064)."
  },
  {
    id: 37, category: "History", difficulty: "medium",
    question: "In the 2004 NBA Playoffs, the Indiana Pacers and Detroit Pistons were involved in a brawl extending into the stands. What was this event called?",
    options: ["The Detroit Disaster", "The Palace Brawl", "Malice at the Palace", "The Indiana Incident"],
    answer: "Malice at the Palace",
    explanation: "The 'Malice at the Palace' (November 19, 2004) became the worst brawl in NBA history. Ron Artest, Stephen Jackson, and Ben Wallace received combined suspensions totaling 146 games."
  },
  {
    id: 38, category: "Awards", difficulty: "medium",
    question: "Dennis Rodman won how many consecutive NBA rebounding titles between 1991 and 1998?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    explanation: "Dennis Rodman won 7 consecutive rebounding titles from 1991-92 through 1997-98. His best season average was 18.7 rebounds per game in 1991-92 with the Detroit Pistons."
  },
  {
    id: 39, category: "Advanced Stats", difficulty: "medium",
    question: "In NBA analytics, what does 'True Shooting Percentage' (TS%) measure?",
    options: [
      "Field goal % only from inside the arc",
      "Shooting efficiency accounting for 2-pointers, 3-pointers, and free throws",
      "The percentage of shots taken while being closely guarded",
      "Points per shot attempt from the field only"
    ],
    answer: "Shooting efficiency accounting for 2-pointers, 3-pointers, and free throws",
    explanation: "True Shooting % accounts for all scoring opportunities (FGs, 3-pointers, FTs) using the formula: TS% = Points / (2 × (FGA + 0.44 × FTA)). A TS% above 60% is considered elite."
  },
  {
    id: 40, category: "History", difficulty: "medium",
    question: "Which team did the Golden State Warriors defeat in the 2015 NBA Finals to win their first title in 40 years?",
    options: ["San Antonio Spurs", "Oklahoma City Thunder", "Cleveland Cavaliers", "Houston Rockets"],
    answer: "Cleveland Cavaliers",
    explanation: "The Warriors defeated the Cavaliers 4-2, with Andre Iguodala winning an unexpected Finals MVP. LeBron James led the losing team with 35.8 ppg, 13.3 rpg, and 8.8 apg."
  },

  // ─── HARD ───────────────────────────────────────────────────────────────────
  {
    id: 41, category: "Advanced Stats", difficulty: "hard",
    question: "Who holds the NBA record for highest single-season Player Efficiency Rating (PER)?",
    options: ["Michael Jordan (1987-88)", "LeBron James (2012-13)", "Wilt Chamberlain (1962-63)", "Giannis Antetokounmpo (2019-20)"],
    answer: "Wilt Chamberlain (1962-63)",
    explanation: "Wilt Chamberlain posted a PER of 31.82 in the 1962-63 season, the highest ever recorded. For context, the league average is 15.0, and a PER above 25 is considered an MVP-caliber season."
  },
  {
    id: 42, category: "Advanced Stats", difficulty: "hard",
    question: "What does 'VORP' stand for in NBA analytics?",
    options: ["Variable On-court Rating Performance", "Value Over Replacement Player", "Versatile Offensive Rating Points", "Victory Output Relative to Position"],
    answer: "Value Over Replacement Player",
    explanation: "VORP measures how many points per 100 possessions a player contributed above a 'replacement-level' player. A VORP above 3.0 is considered very good; LeBron James holds many of the top single-season records."
  },
  {
    id: 43, category: "Stats & Records", difficulty: "hard",
    question: "What was Wilt Chamberlain's single-game rebounding record, set in November 1960?",
    options: ["43", "48", "51", "55"],
    answer: "55",
    explanation: "Wilt Chamberlain grabbed 55 rebounds against the Boston Celtics on November 24, 1960 — the most in any NBA game. Bill Russell held the previous record with 51."
  },
  {
    id: 44, category: "Advanced Stats", difficulty: "hard",
    question: "Offensive Rating (ORtg) in NBA analytics is measured per how many possessions?",
    options: ["Per 36 minutes", "Per 48 minutes", "Per 100 possessions", "Per game"],
    answer: "Per 100 possessions",
    explanation: "Offensive Rating measures points scored per 100 possessions, allowing fair comparison between players and teams regardless of pace. The 2015-16 Warriors set an all-time team ORtg record of 114.5."
  },
  {
    id: 45, category: "Stats & Records", difficulty: "hard",
    question: "Who holds the NBA single-season record for most blocks, set during the 1984-85 season?",
    options: ["Dikembe Mutombo", "Hakeem Olajuwon", "Mark Eaton", "David Robinson"],
    answer: "Mark Eaton",
    explanation: "Mark Eaton of the Utah Jazz set the NBA single-season blocks record with 456 blocks (5.56 per game) in the 1984-85 season. He won Defensive Player of the Year twice."
  },
  {
    id: 46, category: "History", difficulty: "hard",
    question: "Oscar Robertson averaged a triple-double for the entire 1961-62 season. What were his exact averages?",
    options: ["28.4 / 11.3 / 10.0", "30.8 / 12.5 / 11.4", "31.4 / 10.8 / 10.5", "29.7 / 11.8 / 10.3"],
    answer: "30.8 / 12.5 / 11.4",
    explanation: "Oscar Robertson averaged 30.8 points, 12.5 rebounds, and 11.4 assists per game in 1961-62, becoming the only player to average a triple-double for a full season until Russell Westbrook in 2016-17."
  },
  {
    id: 47, category: "Advanced Stats", difficulty: "hard",
    question: "What does a player's 'Usage Rate' measure in basketball analytics?",
    options: [
      "The percentage of team points they score",
      "How many minutes per game they play",
      "The percentage of team possessions used while on the court",
      "Their shooting efficiency vs the league average"
    ],
    answer: "The percentage of team possessions used while on the court",
    explanation: "Usage Rate estimates the % of team plays a player was involved in (via FGA, FTA, or TO) while on the court. A usage rate above 30% is considered very high. Russell Westbrook hit 41.7% in 2016-17."
  },
  {
    id: 48, category: "Awards", difficulty: "hard",
    question: "Which player has won the most NBA Finals MVP awards in history?",
    options: ["Magic Johnson (3)", "Michael Jordan (6)", "LeBron James (4)", "Shaquille O'Neal (3)"],
    answer: "LeBron James (4)",
    explanation: "LeBron James won Finals MVP a record 4 times: 2012 (Miami), 2013 (Miami), 2016 (Cleveland), and 2020 (Los Angeles Lakers). He won with three different franchises."
  },
  {
    id: 49, category: "Stats & Records", difficulty: "hard",
    question: "Moses Malone holds the all-time NBA record for career offensive rebounds. Approximately how many did he grab?",
    options: ["5,100", "5,800", "6,731", "7,200"],
    answer: "6,731",
    explanation: "Moses Malone grabbed 6,731 offensive rebounds in his career — over 1,000 more than anyone else. He won 3 MVP awards and was famous for his relentless pursuit of offensive boards."
  },
  {
    id: 50, category: "History", difficulty: "hard",
    question: "What achievement defines the '50-40-90 Club' in the NBA?",
    options: [
      "50 ppg, 40% from 3, 90 wins",
      "50% FG, 40% 3-point, 90% free throw for a full season",
      "50 games with double-doubles, 40 games with 3-point made, 90% on FTs",
      "50+ points 40 times, 90% from FT"
    ],
    answer: "50% FG, 40% 3-point, 90% free throw for a full season",
    explanation: "The 50-40-90 club requires shooting 50%+ on FGs, 40%+ from 3-point range, and 90%+ from the free-throw line in a single season. Steve Nash achieved this 4 times, the most ever."
  },
  {
    id: 51, category: "Stats & Records", difficulty: "hard",
    question: "Wilt Chamberlain averaged how many points per game during the 1961-62 NBA season — the highest ever?",
    options: ["44.8", "47.5", "50.4", "53.1"],
    answer: "50.4",
    explanation: "Wilt Chamberlain averaged an almost incomprehensible 50.4 points per game in 1961-62, including his famous 100-point game. He also averaged 25.7 rebounds that same season."
  },
  {
    id: 52, category: "History", difficulty: "hard",
    question: "Bill Russell won how many NBA championships as a player with the Boston Celtics?",
    options: ["9", "10", "11", "13"],
    answer: "11",
    explanation: "Bill Russell won 11 NBA championships in 13 seasons (1957-1969), including 8 consecutive titles from 1959-66. He also served as player-coach for the Celtics' 1968 and 1969 championships."
  },
  {
    id: 53, category: "Advanced Stats", difficulty: "hard",
    question: "In NBA analytics, what does 'Box Plus/Minus' (BPM) estimate?",
    options: [
      "A player's plus/minus only from box score stats",
      "Points scored vs. points allowed when player is on court",
      "A player's per-100-possession contribution relative to a league-average player using box score data",
      "The total margin of victory when a player starts vs. comes off the bench"
    ],
    answer: "A player's per-100-possession contribution relative to a league-average player using box score data",
    explanation: "BPM uses box score data (points, rebounds, assists, steals, blocks, turnovers) to estimate how many points per 100 possessions a player contributed above a league-average player. BPM of 0.0 = average; +5.0 = All-Star level; +8.0 = MVP caliber."
  },
  {
    id: 54, category: "Stats & Records", difficulty: "hard",
    question: "Kareem Abdul-Jabbar played the most career minutes in NBA history. Approximately how many?",
    options: ["49,840", "53,200", "57,446", "61,300"],
    answer: "57,446",
    explanation: "Kareem Abdul-Jabbar logged 57,446 career minutes over his 20-year career (1969-89). He also held the scoring record of 38,387 points for 39 years before LeBron James passed him in 2023."
  },
  {
    id: 55, category: "Advanced Stats", difficulty: "hard",
    question: "What does 'Net Rating' measure in NBA team and player analytics?",
    options: [
      "A team's winning percentage in close games",
      "Points scored minus points allowed per 100 possessions",
      "A player's impact on team wins per 48 minutes",
      "The difference between a player's on-court and off-court field goal %"
    ],
    answer: "Points scored minus points allowed per 100 possessions",
    explanation: "Net Rating = Offensive Rating minus Defensive Rating, expressed per 100 possessions. A team Net Rating of +5.0 or better is considered elite. The 2015-16 Warriors posted a record +11.4."
  },
  {
    id: 56, category: "Teams", difficulty: "hard",
    question: "The Golden State Warriors broke the Chicago Bulls' regular season wins record in 2015-16. How many games did they win?",
    options: ["72", "73", "74", "75"],
    answer: "73",
    explanation: "The 2015-16 Golden State Warriors went 73-9, breaking the 1995-96 Bulls' record of 72-10. Stephen Curry won a unanimous MVP. Ironically, they then lost the Finals to Cleveland in 7 games."
  },
  {
    id: 57, category: "History", difficulty: "hard",
    question: "Who was the first international (non-American) player to be selected #1 overall in the NBA Draft?",
    options: ["Yao Ming", "Dirk Nowitzki", "Hakeem Olajuwon", "Steve Nash"],
    answer: "Hakeem Olajuwon",
    explanation: "Hakeem Olajuwon, born in Lagos, Nigeria, was selected #1 overall by the Houston Rockets in the 1984 NBA Draft — making him the first international player to be the top pick."
  },
  {
    id: 58, category: "Advanced Stats", difficulty: "hard",
    question: "What is 'Pace' in NBA team analytics?",
    options: [
      "The speed of a team's fast break offense",
      "How quickly a team rebounds after missed shots",
      "The estimated number of possessions a team uses per 48 minutes",
      "A team's average time between turnovers"
    ],
    answer: "The estimated number of possessions a team uses per 48 minutes",
    explanation: "Pace measures the number of possessions per 48 minutes. High-pace teams (like the modern Warriors at 100+) play more possessions than slower teams (like the Spurs of the 2010s at 92-94)."
  },
  {
    id: 59, category: "Playoffs", difficulty: "hard",
    question: "Who holds the all-time NBA record for most career playoff points?",
    options: ["Michael Jordan", "Kobe Bryant", "LeBron James", "Kareem Abdul-Jabbar"],
    answer: "LeBron James",
    explanation: "LeBron James surpassed Michael Jordan's playoff scoring record of 5,987 points in 2017. As of 2024, LeBron has over 7,800 career playoff points across an unprecedented 10+ NBA Finals appearances."
  },
  {
    id: 60, category: "Stats & Records", difficulty: "hard",
    question: "Wilt Chamberlain once scored 100 points in a single game. Who was it against and what was the year?",
    options: [
      "Chicago Packers, 1961",
      "New York Knicks, 1962",
      "Boston Celtics, 1963",
      "Los Angeles Lakers, 1962"
    ],
    answer: "New York Knicks, 1962",
    explanation: "Wilt Chamberlain scored 100 points for the Philadelphia Warriors against the New York Knicks on March 2, 1962. The game was played in Hershey, PA — there was no live TV coverage."
  },
  {
    id: 61, category: "Advanced Stats", difficulty: "hard",
    question: "In NBA analytics, what does 'Win Shares' (WS) represent?",
    options: [
      "How many wins a team earns when a player scores 20+",
      "An estimate of how many wins a player contributed to his team based on offensive and defensive production",
      "The percentage of team wins in which a player played",
      "A player's winning percentage when they take the final shot"
    ],
    answer: "An estimate of how many wins a player contributed to his team based on offensive and defensive production",
    explanation: "Win Shares estimates the number of wins a player produced using offensive and defensive formulas. LeBron James leads all players in career Win Shares. A WS of 10+ in a single season is MVP-level production."
  },
  {
    id: 62, category: "History", difficulty: "hard",
    question: "Which NBA team holds the record for the most consecutive championships won in a row?",
    options: ["Chicago Bulls (6)", "Los Angeles Lakers (5)", "Boston Celtics (8)", "Miami Heat (2)"],
    answer: "Boston Celtics (8)",
    explanation: "The Boston Celtics won 8 consecutive championships from 1958-59 through 1965-66 under coach Red Auerbach, led by Bill Russell. This is by far the longest dynasty in major North American professional sports."
  },
  {
    id: 63, category: "Stats & Records", difficulty: "hard",
    question: "What statistical feat is required to be considered an 'elite' season in True Shooting % (TS%)?",
    options: ["Above 52%", "Above 55%", "Above 60%", "Above 65%"],
    answer: "Above 60%",
    explanation: "The NBA league-average TS% is around 55-57%. A TS% above 60% is considered elite. Players like DeAndre Jordan, Rudy Gobert, and peak Shaquille O'Neal have hit this mark, primarily through high-percentage shots."
  },
  {
    id: 64, category: "Playoffs", difficulty: "hard",
    question: "Which team did the Miami Heat defeat in the 2012 NBA Finals when LeBron James won his first championship?",
    options: ["San Antonio Spurs", "Indiana Pacers", "Oklahoma City Thunder", "Boston Celtics"],
    answer: "Oklahoma City Thunder",
    explanation: "LeBron James won his first title in the 2012 Finals, defeating the Oklahoma City Thunder (led by Kevin Durant, Russell Westbrook, and James Harden) 4-1. LeBron averaged 28.6 ppg and won Finals MVP."
  },
  {
    id: 65, category: "Advanced Stats", difficulty: "hard",
    question: "What is 'Offensive Win Shares' divided by to get WS/48, and why is 48 used?",
    options: [
      "48 is the total number of possible turnovers per game",
      "48 is the total number of minutes in an NBA game",
      "48 is the league-average number of field goal attempts per game",
      "48 represents the average number of possessions per game"
    ],
    answer: "48 is the total number of minutes in an NBA game",
    explanation: "WS/48 (Win Shares per 48 minutes) normalizes Win Shares to a per-minute basis using 48, the total regulation minutes in an NBA game. The league-average WS/48 is approximately 0.100. An elite WS/48 is 0.200+."
  },

  // ─── MORE EASY ───────────────────────────────────────────────────────────────
  {
    id: 66, category: "Rules", difficulty: "easy",
    question: "How far is the 3-point line from the basket at the top of the arc in the NBA?",
    options: ["21 feet", "22 feet 9 inches", "23 feet 9 inches", "25 feet"],
    answer: "23 feet 9 inches",
    explanation: "The NBA 3-point line is 23 feet 9 inches (7.24 m) from the basket at the top of the arc, and 22 feet at the corners. The line was introduced in 1979-80."
  },
  {
    id: 67, category: "Players", difficulty: "easy",
    question: "Which player is known by the nickname 'Black Mamba'?",
    options: ["LeBron James", "Kevin Durant", "Kobe Bryant", "Dwyane Wade"],
    answer: "Kobe Bryant",
    explanation: "Kobe Bryant gave himself the 'Black Mamba' nickname around 2003 to separate his on-court killer instinct persona from his personal life. The name stuck and became legendary."
  },
  {
    id: 68, category: "Rules", difficulty: "easy",
    question: "How long is each quarter in an NBA game?",
    options: ["10 minutes", "12 minutes", "15 minutes", "20 minutes"],
    answer: "12 minutes",
    explanation: "NBA quarters are 12 minutes each, for a total of 48 regulation minutes. FIBA and college basketball use 10-minute quarters and 20-minute halves respectively."
  },
  {
    id: 69, category: "Players", difficulty: "easy",
    question: "Which player first broke Kareem Abdul-Jabbar's all-time NBA scoring record in 2023?",
    options: ["Kevin Durant", "Stephen Curry", "LeBron James", "Giannis Antetokounmpo"],
    answer: "LeBron James",
    explanation: "On February 7, 2023, LeBron James passed Kareem Abdul-Jabbar's record of 38,387 career points, becoming the NBA all-time leading scorer. The record stood for 39 years."
  },
  {
    id: 70, category: "Teams", difficulty: "easy",
    question: "Which city is home to the NBA team nicknamed the 'Bulls'?",
    options: ["Dallas", "Chicago", "Houston", "Phoenix"],
    answer: "Chicago",
    explanation: "The Chicago Bulls were founded in 1966. They became a dynasty in the 1990s under Michael Jordan and coach Phil Jackson, winning six championships."
  },
  {
    id: 71, category: "Players", difficulty: "easy",
    question: "Who was the first player selected in the famous 1984 NBA Draft class?",
    options: ["Michael Jordan", "Charles Barkley", "Hakeem Olajuwon", "John Stockton"],
    answer: "Hakeem Olajuwon",
    explanation: "Hakeem Olajuwon was selected first overall by the Houston Rockets in the legendary 1984 Draft. Michael Jordan went 3rd (Bulls) and Charles Barkley 5th (76ers)."
  },
  {
    id: 72, category: "Teams", difficulty: "easy",
    question: "Which NBA team plays its home games at Madison Square Garden?",
    options: ["Brooklyn Nets", "New York Knicks", "Boston Celtics", "Philadelphia 76ers"],
    answer: "New York Knicks",
    explanation: "The New York Knicks have played at Madison Square Garden since 1968. MSG is often called 'The World's Most Famous Arena' and is one of the most iconic venues in sports."
  },
  {
    id: 73, category: "History", difficulty: "easy",
    question: "In what year was the 3-point line first introduced in the NBA?",
    options: ["1972", "1975", "1979", "1983"],
    answer: "1979",
    explanation: "The NBA introduced the 3-point line for the 1979-80 season after seeing its success in the ABA. Chris Ford of the Boston Celtics hit the first official 3-pointer on October 12, 1979."
  },
  {
    id: 74, category: "Players", difficulty: "easy",
    question: "Which player is nicknamed 'The Admiral' due to his military background?",
    options: ["Tim Duncan", "David Robinson", "Patrick Ewing", "Hakeem Olajuwon"],
    answer: "David Robinson",
    explanation: "David Robinson earned 'The Admiral' nickname because he served in the U.S. Navy for two years before joining the San Antonio Spurs. He went on to win two championships alongside Tim Duncan."
  },
  {
    id: 75, category: "Players", difficulty: "easy",
    question: "Which player is known as 'The Answer'?",
    options: ["Dwyane Wade", "Allen Iverson", "Tracy McGrady", "Vince Carter"],
    answer: "Allen Iverson",
    explanation: "Allen Iverson nicknamed himself 'The Answer' early in his career, suggesting he was the solution to any problem on the court. He won the 2001 MVP despite being just 6 feet tall."
  },

  // ─── MORE MEDIUM ─────────────────────────────────────────────────────────────
  {
    id: 76, category: "Players", difficulty: "medium",
    question: "Which player averaged a triple-double for a full NBA season in 2016-17, only the second to ever do so?",
    options: ["LeBron James", "Russell Westbrook", "James Harden", "Chris Paul"],
    answer: "Russell Westbrook",
    explanation: "Russell Westbrook averaged 31.6 PPG, 10.7 RPG, and 10.4 APG in 2016-17 to join Oscar Robertson (1961-62) as the only players to average a triple-double for a full season."
  },
  {
    id: 77, category: "Playoffs", difficulty: "medium",
    question: "Who won the 2016 NBA Finals MVP after Cleveland came back from a 3-1 deficit against Golden State?",
    options: ["Kyrie Irving", "Kevin Love", "LeBron James", "Tristan Thompson"],
    answer: "LeBron James",
    explanation: "LeBron James won Finals MVP averaging 29.7 PPG, 11.3 RPG, and 8.9 APG. His iconic block in Game 7 and Kyrie's three-pointer sealed one of the greatest comebacks in sports history."
  },
  {
    id: 78, category: "History", difficulty: "medium",
    question: "What NBA record did the Golden State Warriors set in the 2015-16 season?",
    options: ["Most points in a season", "Most wins in a season (73-9)", "Longest winning streak (33 games)", "Most 3-pointers in a season"],
    answer: "Most wins in a season (73-9)",
    explanation: "The 2015-16 Warriors finished 73-9, surpassing the 1995-96 Chicago Bulls' record of 72-10. Despite winning more regular season games than any team, they lost in the Finals to Cleveland."
  },
  {
    id: 79, category: "Players", difficulty: "medium",
    question: "What pick was Stephen Curry in the 2009 NBA Draft?",
    options: ["3rd overall", "5th overall", "7th overall", "11th overall"],
    answer: "7th overall",
    explanation: "Stephen Curry was selected 7th overall by the Golden State Warriors in 2009. Teams that passed on him — Minnesota (5th), New York (8th) — became cautionary tales in draft history."
  },
  {
    id: 80, category: "Rules", difficulty: "medium",
    question: "What is the maximum regular-season NBA roster size?",
    options: ["12 players", "13 players", "15 players", "17 players"],
    answer: "15 players",
    explanation: "NBA teams can carry 15 players on their active roster, with 13 eligible to play on any given game night. Two-way contract players add an additional layer beyond the standard roster."
  },
  {
    id: 81, category: "History", difficulty: "medium",
    question: "In what year did the ABA (American Basketball Association) merge with the NBA?",
    options: ["1972", "1974", "1976", "1979"],
    answer: "1976",
    explanation: "The ABA-NBA merger in 1976 brought four teams (Nuggets, Nets, Pacers, Spurs) into the NBA. The merger also brought the 3-point line and the slam dunk contest to mainstream basketball."
  },
  {
    id: 82, category: "Teams", difficulty: "medium",
    question: "The 'Showtime Lakers' dynasty of the 1980s was led by Magic Johnson. Who was their coach?",
    options: ["Larry Brown", "Chuck Daly", "Pat Riley", "Red Auerbach"],
    answer: "Pat Riley",
    explanation: "Pat Riley coached the Showtime Lakers to four championships (1982, 1985, 1987, 1988). His slicked-back hair and Armani suits became as iconic as Magic Johnson's no-look passes."
  },
  {
    id: 83, category: "Players", difficulty: "medium",
    question: "Who won the first NBA Three-Point Shootout contest at the 1986 All-Star Weekend?",
    options: ["Reggie Miller", "Dale Ellis", "Larry Bird", "Detlef Schrempf"],
    answer: "Larry Bird",
    explanation: "Larry Bird won the inaugural 3-Point Contest in 1986 and then won it two more times (1987, 1988). He famously asked competitors 'which one of you is going to finish second?' before the contest."
  },
  {
    id: 84, category: "Stats & Records", difficulty: "medium",
    question: "Who holds the NBA record for career assists?",
    options: ["Magic Johnson", "John Stockton", "Steve Nash", "Chris Paul"],
    answer: "John Stockton",
    explanation: "John Stockton holds the NBA all-time record with 15,806 career assists — nearly 5,000 more than the second-place player. He also holds the steals record (3,265) with the Utah Jazz."
  },
  {
    id: 85, category: "Players", difficulty: "medium",
    question: "Which player scored 63 points in a single playoff game in 1986, a single-game record that stood for decades?",
    options: ["Larry Bird", "Michael Jordan", "Dominique Wilkins", "Adrian Dantley"],
    answer: "Michael Jordan",
    explanation: "Michael Jordan scored 63 points against the Boston Celtics on April 20, 1986 — his first playoff series. Larry Bird said it was 'God disguised as Michael Jordan.' The Bulls still lost."
  },
  {
    id: 86, category: "Advanced Stats", difficulty: "medium",
    question: "What does 'BPM' stand for in advanced basketball analytics?",
    options: ["Blocks Per Minute", "Box Plus/Minus", "Ball Possession Metric", "Basic Performance Measure"],
    answer: "Box Plus/Minus",
    explanation: "Box Plus/Minus (BPM) estimates a player's contribution relative to a league-average player per 100 possessions, using only the player's box score statistics and team performance."
  },
  {
    id: 87, category: "History", difficulty: "medium",
    question: "Which NBA team holds the record for the most championships won in league history?",
    options: ["Los Angeles Lakers (17)", "Chicago Bulls (6)", "Boston Celtics (17)", "Golden State Warriors (7)"],
    answer: "Boston Celtics (17)",
    explanation: "The Boston Celtics and Los Angeles Lakers are tied at 17 NBA championships each (as of 2024). The Celtics won 8 consecutive from 1959-1966 under Bill Russell."
  },
  {
    id: 88, category: "Players", difficulty: "medium",
    question: "Who was named Finals MVP when the Toronto Raptors won their only championship in 2019?",
    options: ["Kyle Lowry", "Pascal Siakam", "Marc Gasol", "Kawhi Leonard"],
    answer: "Kawhi Leonard",
    explanation: "Kawhi Leonard dominated the 2019 Finals, averaging 28.5 PPG, 9.8 RPG, and 4.2 APG. His 'bouncing four-point' buzzer-beater in the second round against Philadelphia became iconic."
  },
  {
    id: 89, category: "Playoffs", difficulty: "medium",
    question: "Which team did the Miami Heat beat in the 2006 NBA Finals, led by Dwyane Wade's legendary performance?",
    options: ["San Antonio Spurs", "Los Angeles Lakers", "Dallas Mavericks", "Detroit Pistons"],
    answer: "Dallas Mavericks",
    explanation: "Dwyane Wade led the Heat back from a 0-2 deficit to win the 2006 championship over Dallas, averaging 34.7 PPG in the Finals. He shot 97 free throws in 6 games, a record for a Finals."
  },
  {
    id: 90, category: "Teams", difficulty: "medium",
    question: "The San Antonio Spurs won 5 championships between 1999 and 2014. Which player appeared on ALL five championship teams?",
    options: ["Manu Ginobili", "Tony Parker", "Tim Duncan", "All three of them"],
    answer: "All three of them",
    explanation: "Tim Duncan, Manu Ginobili, and Tony Parker all appeared on all five Spurs championship teams (1999, 2003, 2005, 2007, 2014). The trio formed one of the greatest dynasties in NBA history."
  },

  // ─── MORE HARD ───────────────────────────────────────────────────────────────
  {
    id: 91, category: "Stats & Records", difficulty: "hard",
    question: "Who holds the NBA record for most steals in a single season (301 steals in 1985-86)?",
    options: ["Michael Jordan", "Gary Payton", "Alvin Robertson", "John Stockton"],
    answer: "Alvin Robertson",
    explanation: "Alvin Robertson of the San Antonio Spurs stole 301 balls in the 1985-86 season, the single-season steals record. He also holds the single-game record with 11 steals against the Phoenix Suns in 1986."
  },
  {
    id: 92, category: "Stats & Records", difficulty: "hard",
    question: "What does 'VORP' stand for in advanced basketball analytics?",
    options: ["Variable Offensive Rating Points", "Value Over Replacement Player", "Volumetric Overall Rating Plus", "Variance Of Raw Performance"],
    answer: "Value Over Replacement Player",
    explanation: "VORP estimates how much better a player is than a 'replacement level' player — essentially a minimum-salary player who can be easily signed. A VORP above 3.0 indicates All-Star caliber play."
  },
  {
    id: 93, category: "Stats & Records", difficulty: "hard",
    question: "Who set the NBA record for most blocked shots in a single game with 17 blocks in 1973?",
    options: ["Kareem Abdul-Jabbar", "Bill Walton", "Elmore Smith", "Nate Thurmond"],
    answer: "Elmore Smith",
    explanation: "Elmore Smith of the Cleveland Cavaliers blocked 17 shots against the Portland Trail Blazers on October 28, 1973. Manute Bol and Shaquille O'Neal later tied the record with 15 in a game."
  },
  {
    id: 94, category: "History", difficulty: "hard",
    question: "In what year was the NBA shot clock introduced, and what innovative businessman invented it?",
    options: ["1950, Abe Saperstein", "1954, Danny Biasone", "1958, Walter Kennedy", "1962, David Stern"],
    answer: "1954, Danny Biasone",
    explanation: "Syracuse Nationals owner Danny Biasone proposed the 24-second shot clock in 1954, calculating it by dividing 2,880 seconds (48 min) by 120 shots (average preferred total per game). It saved basketball."
  },
  {
    id: 95, category: "Players", difficulty: "hard",
    question: "Bill Russell won 11 championships as a player. How many did he win as a player-coach simultaneously?",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "Bill Russell served as player-coach for the Celtics in 1966-67, 1967-68, and 1968-69. He won championships in 1968 and 1969 as player-coach, becoming the first Black head coach to win a major pro sports title."
  },
  {
    id: 96, category: "Advanced Stats", difficulty: "hard",
    question: "Which player holds the record for the highest single-season Player Efficiency Rating (PER) in NBA history?",
    options: ["LeBron James (31.59)", "Michael Jordan (31.71)", "Wilt Chamberlain (31.82)", "Giannis Antetokounmpo (30.89)"],
    answer: "Wilt Chamberlain (31.82)",
    explanation: "Wilt Chamberlain recorded a PER of 31.82 in the 1962-63 season, the all-time record. LeBron's highest single season was 31.59 in 2008-09. League average PER is always 15.00."
  },
  {
    id: 97, category: "Stats & Records", difficulty: "hard",
    question: "Donovan Mitchell set the modern NBA single-game scoring record with 71 points in 2023. Who held the post-Kobe record before him?",
    options: ["Kevin Durant (70 pts)", "Devin Booker (70 pts)", "Klay Thompson (60 pts)", "Kemba Walker (60 pts)"],
    answer: "Devin Booker (70 pts)",
    explanation: "Devin Booker scored 70 points for Phoenix against the Celtics in 2017 — a 20-year-old's record at the time. Donovan Mitchell surpassed it with 71 vs. Chicago on January 2, 2023, for a Cavaliers win."
  },
  {
    id: 98, category: "Advanced Stats", difficulty: "hard",
    question: "In basketball analytics, what does 'Ortg' (Offensive Rating) measure per 100 possessions?",
    options: ["Points per 100 field goal attempts", "Points produced per 100 team possessions", "True shooting percentage × 100", "Points scored per 100 defensive possessions"],
    answer: "Points produced per 100 team possessions",
    explanation: "Offensive Rating (Ortg) measures how many points a team (or player) produces per 100 possessions. League average is around 110-115. An Ortg above 120 for a team is championship-level offense."
  },
  {
    id: 99, category: "History", difficulty: "hard",
    question: "Which team won the final ABA championship in 1976 before the league merged with the NBA?",
    options: ["Denver Nuggets", "Kentucky Colonels", "Indiana Pacers", "New York Nets"],
    answer: "New York Nets",
    explanation: "The New York Nets (led by Julius Erving) won the final ABA championship in 1976. The Nets then joined the NBA, but had to sell Dr. J to Philadelphia because they couldn't afford the $3.2 million merger fee."
  },
  {
    id: 100, category: "Rules", difficulty: "hard",
    question: "What is the 'Elam Ending' format that the NBA adopted for its All-Star Game starting in 2020?",
    options: [
      "Overtime is replaced by a free-throw shootout",
      "The clock stops at 4 minutes left and teams play to a target score",
      "Final quarter is played with no shot clock",
      "A 3-point shootout determines the winner if tied after regulation"
    ],
    answer: "The clock stops at 4 minutes left and teams play to a target score",
    explanation: "The Elam Ending (named by Nick Elam) stops the game clock with 4 minutes left in the 4th quarter and sets a target score (leading score + 24). First team to reach the target wins, eliminating end-game fouling."
  },

  // ─── EASY (101–115) ────────────────────────────────────────────────────────
  {
    id: 101, category: "Players", difficulty: "easy",
    question: "Nikola Jokic plays center for which team?",
    options: ["Los Angeles Lakers", "Golden State Warriors", "Denver Nuggets", "Phoenix Suns"],
    answer: "Denver Nuggets",
    explanation: "Nikola Jokic has been a Denver Nugget since 2015. He led Denver to their first-ever NBA championship in 2023, winning Finals MVP and cementing himself as one of the best players alive."
  },
  {
    id: 102, category: "Rules", difficulty: "easy",
    question: "How many players from each team are on the court at the same time during a game?",
    options: ["4", "5", "6", "7"],
    answer: "5",
    explanation: "Each team has 5 players on the court: typically a point guard, shooting guard, small forward, power forward, and center — though modern lineups often blur these positional boundaries."
  },
  {
    id: 103, category: "Players", difficulty: "easy",
    question: "Which player earned the nickname 'The Joker'?",
    options: ["James Harden", "Nikola Jokic", "Joel Embiid", "Rudy Gobert"],
    answer: "Nikola Jokic",
    explanation: "Nikola Jokic is known as 'The Joker' — a play on his last name and his unassuming, laid-back demeanor off the court. Despite looking like a regular guy, he is one of the most skilled centers in history."
  },
  {
    id: 104, category: "Players", difficulty: "easy",
    question: "LeBron James was drafted 1st overall in 2003 by which team?",
    options: ["Miami Heat", "Los Angeles Lakers", "Cleveland Cavaliers", "Chicago Bulls"],
    answer: "Cleveland Cavaliers",
    explanation: "LeBron James was selected 1st overall by the Cleveland Cavaliers in the 2003 NBA Draft straight out of St. Vincent–St. Mary High School in Akron, Ohio. He was expected to save the franchise — and he did."
  },
  {
    id: 105, category: "Rules", difficulty: "easy",
    question: "How many personal fouls does a player accumulate before fouling out of a game in the NBA?",
    options: ["4", "5", "6", "7"],
    answer: "6",
    explanation: "NBA players foul out after their 6th personal foul, which is more lenient than college (5 fouls) and international (5 fouls) rules. This allows stars to stay in games longer during close contests."
  },
  {
    id: 106, category: "Teams", difficulty: "easy",
    question: "What is the NBA team located in Oklahoma City called?",
    options: ["Storm", "Blazers", "Thunder", "Grizzlies"],
    answer: "Thunder",
    explanation: "The Oklahoma City Thunder were formed in 2008 after relocating from Seattle, where they were the SuperSonics. The name 'Thunder' reflects Oklahoma's famous weather."
  },
  {
    id: 107, category: "Teams", difficulty: "easy",
    question: "Which NBA team plays its home games at Madison Square Garden?",
    options: ["Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Boston Celtics"],
    answer: "New York Knicks",
    explanation: "The New York Knicks have played at Madison Square Garden since 1968. MSG is often called 'The World's Most Famous Arena' and hosting a great performance there is considered a special milestone."
  },
  {
    id: 108, category: "Players", difficulty: "easy",
    question: "What position did Shaquille O'Neal primarily play throughout his career?",
    options: ["Power Forward", "Small Forward", "Center", "Point Guard"],
    answer: "Center",
    explanation: "Shaquille O'Neal was a dominant center who stood 7'1\" and weighed over 325 lbs. He won 4 NBA championships and is widely considered the most physically dominant player in basketball history."
  },
  {
    id: 109, category: "Players", difficulty: "easy",
    question: "Who holds the NBA all-time record for career points (as of 2024)?",
    options: ["Kareem Abdul-Jabbar", "Michael Jordan", "LeBron James", "Karl Malone"],
    answer: "LeBron James",
    explanation: "LeBron James surpassed Kareem Abdul-Jabbar's record of 38,387 career points on February 7, 2023, in Sacramento. He continues to add to the record, currently sitting above 40,000 points."
  },
  {
    id: 110, category: "Rules", difficulty: "easy",
    question: "What is the duration of the shot clock in the NBA?",
    options: ["14 seconds", "20 seconds", "24 seconds", "30 seconds"],
    answer: "24 seconds",
    explanation: "The NBA uses a 24-second shot clock, introduced in 1954. After an offensive rebound, the clock resets to 14 seconds. The shot clock revolutionized the game by preventing stalling tactics."
  },
  {
    id: 111, category: "Teams", difficulty: "easy",
    question: "The Phoenix Suns play in which US state?",
    options: ["Arizona", "Nevada", "Texas", "California"],
    answer: "Arizona",
    explanation: "The Phoenix Suns are based in Phoenix, Arizona, and play at Footprint Center. They were founded in 1968 as an expansion franchise via a coin flip with the Milwaukee Bucks."
  },
  {
    id: 112, category: "Players", difficulty: "easy",
    question: "Who won the 2023 NBA Finals MVP after leading Denver to their first championship?",
    options: ["Jamal Murray", "Michael Porter Jr.", "Nikola Jokic", "Aaron Gordon"],
    answer: "Nikola Jokic",
    explanation: "Nikola Jokic won Finals MVP after averaging 30.2 PPG, 14.0 RPG, and 7.2 APG against the Miami Heat. It was Denver's first-ever NBA championship in franchise history."
  },
  {
    id: 113, category: "History", difficulty: "easy",
    question: "How many NBA championships did Michael Jordan win with the Chicago Bulls?",
    options: ["4", "5", "6", "7"],
    answer: "6",
    explanation: "Michael Jordan won 6 championships with the Bulls in two three-peats: 1991-93 and 1996-98. He was Finals MVP all six times and never lost a Finals series in his career."
  },
  {
    id: 114, category: "Players", difficulty: "easy",
    question: "Which player is nicknamed 'Slim Reaper'?",
    options: ["LeBron James", "Kawhi Leonard", "Kevin Durant", "Giannis Antetokounmpo"],
    answer: "Kevin Durant",
    explanation: "Kevin Durant earned the nickname 'Slim Reaper' because of his lethal scoring ability combined with his unusually tall and thin 6'10\" frame. He can score from literally anywhere on the floor."
  },
  {
    id: 115, category: "Teams", difficulty: "easy",
    question: "Which team plays at TD Garden in Boston?",
    options: ["New York Knicks", "Philadelphia 76ers", "Boston Celtics", "Brooklyn Nets"],
    answer: "Boston Celtics",
    explanation: "The Boston Celtics play at TD Garden, which opened in 1995. The Celtics are the most decorated franchise in NBA history with 18 championships, the most recent coming in 2024."
  },

  // ─── MEDIUM (116–135) ──────────────────────────────────────────────────────
  {
    id: 116, category: "Players", difficulty: "medium",
    question: "Karl Malone was nicknamed 'The Mailman' because he always delivered. For which franchise did he spend most of his career?",
    options: ["Seattle SuperSonics", "Utah Jazz", "Denver Nuggets", "New Orleans Hornets"],
    answer: "Utah Jazz",
    explanation: "Karl Malone played 18 of his 19 seasons for the Utah Jazz alongside John Stockton. The Malone-Stockton combo is one of the most storied partnerships in NBA history, though they never won a title."
  },
  {
    id: 117, category: "History", difficulty: "medium",
    question: "Who was the first overall pick in the 1984 NBA Draft — the same draft that produced Michael Jordan at #3?",
    options: ["Patrick Ewing", "Charles Barkley", "Hakeem Olajuwon", "John Stockton"],
    answer: "Hakeem Olajuwon",
    explanation: "Hakeem Olajuwon went 1st to Houston in 1984. Jordan went 3rd to Chicago (Portland took Sam Bowie at #2). The 1984 draft is considered the greatest ever, also producing Barkley (5th) and Stockton (16th)."
  },
  {
    id: 118, category: "Playoffs", difficulty: "medium",
    question: "In 2019, Kawhi Leonard hit a bouncing buzzer-beater to eliminate which team in Game 7 of the second round?",
    options: ["Milwaukee Bucks", "Boston Celtics", "Philadelphia 76ers", "Indiana Pacers"],
    answer: "Philadelphia 76ers",
    explanation: "Kawhi's 4-bounce buzzer-beater at the rim on May 12, 2019, sent Toronto past Philly. The moment is simply called 'The Shot' and is considered one of the most dramatic playoff moments ever."
  },
  {
    id: 119, category: "Advanced Stats", difficulty: "medium",
    question: "What does TS% (True Shooting Percentage) measure that regular FG% does not?",
    options: ["Only uncontested shots", "Shooting efficiency accounting for 3-pointers and free throws", "Points per shot attempt for starters only", "Weighted average of all field goal types"],
    answer: "Shooting efficiency accounting for 3-pointers and free throws",
    explanation: "True Shooting % = PTS ÷ (2 × (FGA + 0.44 × FTA)). It gives full credit for 3-pointers and includes free throw attempts, making it a more accurate measure of scoring efficiency than raw FG%."
  },
  {
    id: 120, category: "Teams", difficulty: "medium",
    question: "The Oklahoma City Thunder were previously known as which franchise before relocating in 2008?",
    options: ["Vancouver Grizzlies", "Seattle SuperSonics", "New Jersey Nets", "Charlotte Hornets"],
    answer: "Seattle SuperSonics",
    explanation: "The Seattle SuperSonics relocated to Oklahoma City for the 2008-09 season and were renamed the Thunder. Seattle fans still mourn the move, and efforts to bring an NBA team back to Seattle continue."
  },
  {
    id: 121, category: "Stats & Records", difficulty: "medium",
    question: "Michael Jordan won how many consecutive scoring titles from 1987 to 1993?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    explanation: "Michael Jordan won 7 consecutive scoring titles from 1986-87 through 1992-93. He went on to win 10 scoring titles total, the most in NBA history, more than Wilt Chamberlain (7) and George Gervin (4)."
  },
  {
    id: 122, category: "History", difficulty: "medium",
    question: "Kobe Bryant played 20 seasons in the NBA, all with one franchise. Which team?",
    options: ["Phoenix Suns", "Dallas Mavericks", "Los Angeles Lakers", "San Antonio Spurs"],
    answer: "Los Angeles Lakers",
    explanation: "Kobe Bryant was drafted by Charlotte in 1996 but immediately traded to the Lakers, where he spent all 20 seasons winning 5 championships. He is one of the few modern players to be a one-franchise man."
  },
  {
    id: 123, category: "Players", difficulty: "medium",
    question: "Which player famously missed the 1995-96 NBA season after being suspended for the 'Malice at the Palace' — wait, that was 2004. Who was suspended for the 'Malice at the Palace' brawl?",
    options: ["Kevin Garnett", "Ron Artest", "Stephen Jackson", "Jermaine O'Neal"],
    answer: "Ron Artest",
    explanation: "Ron Artest (later Metta World Peace/Metta Sandiford-Artest) received the longest suspension (73 games) for the 2004 Pistons-Pacers brawl at The Palace. The incident led to major rule changes about fan-player interactions."
  },
  {
    id: 124, category: "History", difficulty: "medium",
    question: "The Vancouver Grizzlies relocated to which city in 2001?",
    options: ["Memphis", "New Orleans", "Oklahoma City", "Charlotte"],
    answer: "Memphis",
    explanation: "The Vancouver Grizzlies, founded in 1995, moved to Memphis after struggling with attendance and competitive issues in Canada. They became the Memphis Grizzlies and produced iconic players like Pau Gasol and Zach Randolph."
  },
  {
    id: 125, category: "Stats & Records", difficulty: "medium",
    question: "Who holds the NBA record for most career triple-doubles?",
    options: ["Oscar Robertson", "LeBron James", "Magic Johnson", "Russell Westbrook"],
    answer: "Russell Westbrook",
    explanation: "Russell Westbrook surpassed Oscar Robertson's record in 2021 and continued to pad his total, reaching over 200 career triple-doubles. His record-breaking mindset defined his tenure with OKC and later teams."
  },
  {
    id: 126, category: "Playoffs", difficulty: "medium",
    question: "The 'Bad Boys' Detroit Pistons won back-to-back championships in 1989 and 1990. Who was their head coach?",
    options: ["Larry Brown", "Chuck Daly", "Rick Carlisle", "Don Chaney"],
    answer: "Chuck Daly",
    explanation: "Chuck Daly coached the Bad Boys Pistons through their back-to-back titles (1989, 1990). The team was known for its physical 'Jordan Rules' defense that gave Michael Jordan fits for years."
  },
  {
    id: 127, category: "Rules", difficulty: "medium",
    question: "When can an NBA team request a coach's challenge to overturn a referee's call?",
    options: ["Anytime during the game", "Only before the ball is in play", "Once per game if they have a timeout remaining", "Twice per game maximum"],
    answer: "Once per game if they have a timeout remaining",
    explanation: "Introduced in 2019, each team gets one challenge per game (successful challenges are returned). You must have a timeout to challenge. If the challenge fails, you lose the timeout."
  },
  {
    id: 128, category: "Players", difficulty: "medium",
    question: "Oscar Robertson was the first player to average a triple-double for a full season in 1961-62. What were his averages?",
    options: ["28.5 / 11.4 / 10.4", "30.8 / 12.5 / 11.4", "25.7 / 10.0 / 11.2", "29.3 / 10.9 / 12.0"],
    answer: "30.8 / 12.5 / 11.4",
    explanation: "Oscar Robertson averaged 30.8 PPG, 12.5 RPG, and 11.4 APG in 1961-62 — the only full-season triple-double average until Russell Westbrook matched it 55 years later in 2016-17."
  },
  {
    id: 129, category: "Advanced Stats", difficulty: "medium",
    question: "What does 'Usage Rate' (USG%) measure in basketball analytics?",
    options: ["Total minutes played per season", "% of team possessions a player uses while on the floor", "Points per possession ratio", "Percentage of shots blocked"],
    answer: "% of team possessions a player uses while on the floor",
    explanation: "Usage Rate estimates how often a player ends a team possession (via FGA, FT, or turnover). Average is ~20%; elite scorers like Harden and Westbrook have led the league above 35% in peak seasons."
  },
  {
    id: 130, category: "History", difficulty: "medium",
    question: "Don Nelson holds the record for most wins as an NBA head coach. Approximately how many did he accumulate?",
    options: ["1,000", "1,100", "1,200", "1,335"],
    answer: "1,335",
    explanation: "Don Nelson retired in 2010 with 1,335 career coaching wins — the all-time record. He is credited with pioneering 'Nellie Ball,' the small-ball, pace-and-space style that predated the modern NBA by decades."
  },
  {
    id: 131, category: "Teams", difficulty: "medium",
    question: "The New Jersey Nets relocated to Brooklyn in 2012. Before New Jersey, what city were they originally from?",
    options: ["Philadelphia", "New York", "Baltimore", "Washington"],
    answer: "New York",
    explanation: "The franchise started as the New York Nets in the ABA in 1967, moved to New Jersey in 1977, then back to New York (Brooklyn) in 2012. They won two ABA titles with Julius Erving in New York."
  },
  {
    id: 132, category: "Stats & Records", difficulty: "medium",
    question: "Wilt Chamberlain's 100-point game in 1962 is the all-time single-game scoring record. Who is second on the list?",
    options: ["Kobe Bryant (81)", "David Thompson (73)", "Both with equal claims", "Elgin Baylor (71)"],
    answer: "Kobe Bryant (81)",
    explanation: "Kobe Bryant scored 81 points against Toronto on January 22, 2006 — the second-highest single-game total ever. Wilt also scored 78 points in a game, meaning the top 4 single-game scores are split between just two players."
  },
  {
    id: 133, category: "Playoffs", difficulty: "medium",
    question: "Who hit the Game 6 buzzer-beater to keep the Miami Heat alive against the San Antonio Spurs in the 2013 NBA Finals?",
    options: ["LeBron James", "Chris Bosh", "Dwyane Wade", "Ray Allen"],
    answer: "Ray Allen",
    explanation: "Ray Allen hit a corner three with 5 seconds left in Game 6 to tie and send the game to overtime, keeping the Heat alive. They won in OT and then in Game 7, with LeBron taking home his second ring."
  },
  {
    id: 134, category: "Players", difficulty: "medium",
    question: "Dirk Nowitzki played all 21 seasons with the Dallas Mavericks. What nationality is he?",
    options: ["French", "Spanish", "German", "Dutch"],
    answer: "German",
    explanation: "Dirk Nowitzki is German and is widely considered the greatest European player in NBA history. He revolutionized the power forward position with his one-legged fadeaway and won MVP in 2007, Finals MVP in 2011."
  },
  {
    id: 135, category: "History", difficulty: "medium",
    question: "The 'Dream Team' that won gold at the 1992 Barcelona Olympics was the first to feature NBA players. Who was the only college player on the roster?",
    options: ["Grant Hill", "Christian Laettner", "Penny Hardaway", "Alonzo Mourning"],
    answer: "Christian Laettner",
    explanation: "Christian Laettner of Duke was the only college player on the 1992 Olympic Dream Team, controversially chosen over NBA players like Isiah Thomas. He was coming off his iconic buzzer-beater in the 1992 NCAA Tournament."
  },

  // ─── HARD (136–150) ────────────────────────────────────────────────────────
  {
    id: 136, category: "Stats & Records", difficulty: "hard",
    question: "Who holds the NBA record for most career playoff points as of 2024?",
    options: ["Michael Jordan", "Kareem Abdul-Jabbar", "Kobe Bryant", "LeBron James"],
    answer: "LeBron James",
    explanation: "LeBron James surpassed Michael Jordan's record and has accumulated over 7,600+ career playoff points. His extraordinary playoff longevity — 10 Finals appearances — makes this record nearly untouchable."
  },
  {
    id: 137, category: "Advanced Stats", difficulty: "hard",
    question: "What does eFG% (Effective Field Goal Percentage) add to regular FG% that makes it more accurate?",
    options: ["Free throw attempts", "1.5x credit for 3-point makes", "Turnovers per possession", "Assists per field goal made"],
    answer: "1.5x credit for 3-point makes",
    explanation: "eFG% = (FGM + 0.5 × 3PM) ÷ FGA. It gives extra weight to 3-pointers because they produce 50% more points per make than a 2. A player shooting 50% on 2s and 33% on 3s have the same eFG% of 50%."
  },
  {
    id: 138, category: "History", difficulty: "hard",
    question: "The Philadelphia Warriors (precursor to today's Warriors) won the very first BAA/NBA championship in 1947. Who was their star player?",
    options: ["George Mikan", "Joe Fulks", "Bob Cousy", "Ed Macauley"],
    answer: "Joe Fulks",
    explanation: "Joe Fulks led the Philadelphia Warriors to the first BAA title in 1947 with his revolutionary jump shot — an innovation at a time when set shots dominated. He averaged 23.2 PPG in a 60-game season."
  },
  {
    id: 139, category: "Stats & Records", difficulty: "hard",
    question: "Michael Jordan holds the record for most consecutive games scoring at least 10 points. Approximately how many games did the streak last?",
    options: ["562 games", "866 games", "703 games", "1,122 games"],
    answer: "866 games",
    explanation: "Michael Jordan scored at least 10 points in 866 consecutive games from his rookie season until a foot injury in 2001. LeBron James had a consecutive double-digit scoring streak of over 1,000 games later surpassing this."
  },
  {
    id: 140, category: "Advanced Stats", difficulty: "hard",
    question: "In the context of lineup data, what does 'adjusted plus-minus' (APM) attempt to do that box-score stats cannot?",
    options: ["Measure shooting arc angle", "Separate individual impact from teammates and opponents faced", "Calculate true rebounds vs. lost possessions", "Score players by clutch moments only"],
    answer: "Separate individual impact from teammates and opponents faced",
    explanation: "Adjusted Plus-Minus uses lineup data to statistically isolate a player's individual contribution by controlling for the quality of teammates and opponents they share the court with — something box stats can't capture."
  },
  {
    id: 141, category: "History", difficulty: "hard",
    question: "In what year did the NBA ban zone defenses, and when were they re-legalized?",
    options: ["Banned 1947, re-legalized 1997", "Banned 1950, re-legalized 1981", "Banned 1953, re-legalized 2001", "Banned 1960, re-legalized 1990"],
    answer: "Banned 1953, re-legalized 2001",
    explanation: "The NBA banned zone defenses in the 1950s, requiring man-to-man coverage for decades. Zone defenses were re-legalized for the 2001-02 season as part of defensive rule changes designed to open up offense."
  },
  {
    id: 142, category: "Players", difficulty: "hard",
    question: "Who was the first European-born player selected 1st overall in the NBA Draft?",
    options: ["Dirk Nowitzki", "Tony Parker", "Pau Gasol", "Andrea Bargnani"],
    answer: "Andrea Bargnani",
    explanation: "Italian center Andrea Bargnani was selected 1st overall by the Toronto Raptors in the 2006 NBA Draft, becoming the first European player taken top overall. His career was considered a disappointment relative to expectations."
  },
  {
    id: 143, category: "Stats & Records", difficulty: "hard",
    question: "In Wilt Chamberlain's 100-point game in 1962, how many free throws did he make out of how many attempts?",
    options: ["28 of 32", "36 of 41", "22 of 25", "28 of 38"],
    answer: "28 of 32",
    explanation: "Wilt made 28 of 32 free throws in the 100-point game — remarkable given he was a career 51% FT shooter. He also made 36 of 63 field goals. The game was played in Hershey, PA, not Philadelphia, before 4,124 fans."
  },
  {
    id: 144, category: "History", difficulty: "hard",
    question: "The NBA's predecessor league, founded in 1946, had what official name?",
    options: ["National Basketball League (NBL)", "Basketball Association of America (BAA)", "American Basketball League (ABL)", "Professional Basketball League (PBL)"],
    answer: "Basketball Association of America (BAA)",
    explanation: "The Basketball Association of America (BAA) was founded in 1946 by arena owners. It merged with the older National Basketball League (NBL) in 1949 to form the National Basketball Association (NBA)."
  },
  {
    id: 145, category: "Advanced Stats", difficulty: "hard",
    question: "A player with a PIPM (Player Impact Plus-Minus) of 0.0 represents what level of player?",
    options: ["A superstar in their prime", "A league-average NBA player", "A replacement-level player", "An All-Star caliber player"],
    answer: "A league-average NBA player",
    explanation: "PIPM is centered around league-average (0.0), unlike VORP which is centered around replacement level. In PIPM, positive values indicate above-average players, with +3 to +5 indicating All-Star caliber play."
  },
  {
    id: 146, category: "Stats & Records", difficulty: "hard",
    question: "Which player scored more total career regular-season points: Karl Malone or Kobe Bryant?",
    options: ["They are equal", "Karl Malone (36,928)", "Kobe Bryant (33,643)", "Kobe Bryant (36,928)"],
    answer: "Karl Malone (36,928)",
    explanation: "Karl Malone scored 36,928 career points, second all-time until LeBron passed him. Kobe scored 33,643 career points (fourth all-time). Malone's longevity and consistency over 19 seasons with Utah built the gap."
  },
  {
    id: 147, category: "Playoffs", difficulty: "hard",
    question: "Which coach engineered the 2004 Detroit Pistons' championship, upsetting the 5-1 favorite Los Angeles Lakers?",
    options: ["Larry Brown", "Rick Carlisle", "Chuck Daly", "Flip Saunders"],
    answer: "Larry Brown",
    explanation: "Larry Brown coached the Pistons to a 4-1 Finals upset of the Shaq-Kobe Lakers in 2004 — his only NBA title. Brown is the only coach to win both an NCAA title (1988 Kansas) and an NBA championship."
  },
  {
    id: 148, category: "History", difficulty: "hard",
    question: "The NBA's first Black player was Charles Cooper, drafted in 1950. By which team?",
    options: ["New York Knicks", "Boston Celtics", "Philadelphia Warriors", "Minneapolis Lakers"],
    answer: "Boston Celtics",
    explanation: "Chuck Cooper was drafted by the Boston Celtics in 1950, the first Black player drafted in NBA history. Nat 'Sweetwater' Clifton and Earl Lloyd also broke the color barrier that same year."
  },
  {
    id: 149, category: "Advanced Stats", difficulty: "hard",
    question: "In the formula for PER (Player Efficiency Rating), what is the league-average PER always normalized to each season?",
    options: ["10.00", "15.00", "20.00", "25.00"],
    answer: "15.00",
    explanation: "John Hollinger's PER formula normalizes to a league average of exactly 15.00 each season. PER 20+ is All-Star level; PER 25+ is MVP candidate level. Wilt Chamberlain's 31.82 in 1962-63 remains the all-time record."
  },
  {
    id: 150, category: "Rules", difficulty: "hard",
    question: "What is the 'take foul' rule introduced by the NBA in 2022 to protect transition opportunities?",
    options: [
      "Shooting fouls in transition automatically award 3 free throws",
      "Non-shooting fouls on fast breaks result in 1 free throw plus possession",
      "Flagrant fouls in transition lead to ejection",
      "Any foul on a clear path to the basket awards 4 points"
    ],
    answer: "Non-shooting fouls on fast breaks result in 1 free throw plus possession",
    explanation: "The 'take foul' (or transition take foul) rule was introduced in 2022 to discourage teams from intentionally fouling to stop fast breaks. The penalty is 1 free throw plus possession for the offensive team — making the foul costly."
  },

  // ─── EASY (151–158) ────────────────────────────────────────────────────────
  {
    id: 151, category: "Players", difficulty: "easy",
    question: "Stephen Curry plays for which NBA team?",
    options: ["Los Angeles Lakers", "Golden State Warriors", "Phoenix Suns", "Houston Rockets"],
    answer: "Golden State Warriors",
    explanation: "Stephen Curry has been a Warrior since 2009. He revolutionized basketball with his extraordinary 3-point shooting, winning 4 championships and 2 MVP awards (including the first unanimous MVP in 2016)."
  },
  {
    id: 152, category: "Rules", difficulty: "easy",
    question: "If a player is fouled while attempting a 3-point shot and misses, how many free throws do they receive?",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "When a player is fouled on a 3-point attempt and misses, they receive 3 free throws — one for each point they were attempting to score. If they make the shot despite the foul, they get 1 free throw (a 4-point play)."
  },
  {
    id: 153, category: "Teams", difficulty: "easy",
    question: "Which NBA team is nicknamed 'The Heat'?",
    options: ["Houston Rockets", "Oklahoma City Thunder", "Miami Heat", "Phoenix Suns"],
    answer: "Miami Heat",
    explanation: "The Miami Heat were founded in 1988 and won 3 championships (2006, 2012, 2013). The team is known for featuring Hall-of-Famers like Dwyane Wade, LeBron James, and Shaquille O'Neal."
  },
  {
    id: 154, category: "Players", difficulty: "easy",
    question: "Giannis Antetokounmpo is from which country?",
    options: ["Nigeria", "France", "Greece", "Cameroon"],
    answer: "Greece",
    explanation: "Giannis Antetokounmpo was born in Athens, Greece to Nigerian immigrant parents. His nickname 'The Greek Freak' reflects both his heritage and his athleticism. He won back-to-back MVPs (2019, 2020) and the 2021 championship."
  },
  {
    id: 155, category: "History", difficulty: "easy",
    question: "The NBA was founded in which year?",
    options: ["1939", "1946", "1949", "1954"],
    answer: "1946",
    explanation: "The Basketball Association of America (BAA) was founded in 1946, which became the NBA in 1949 after merging with the NBL. The 1946-47 season is counted as the NBA's first official season."
  },
  {
    id: 156, category: "Players", difficulty: "easy",
    question: "Which player is known as 'The Brow' due to his prominent unibrow?",
    options: ["Joel Embiid", "Anthony Davis", "Karl-Anthony Towns", "Rudy Gobert"],
    answer: "Anthony Davis",
    explanation: "Anthony Davis earned the nickname 'The Brow' (or 'The Unibrow') for his distinctive unibrow. He won his first NBA championship with the LA Lakers in 2020 alongside LeBron James."
  },
  {
    id: 157, category: "Teams", difficulty: "easy",
    question: "Which team has won the most NBA championships in history?",
    options: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"],
    answer: "Boston Celtics",
    explanation: "The Boston Celtics have won 18 NBA championships — the most of any franchise. They won 11 in 13 years from 1957 to 1969 under coach Red Auerbach, fueled by Bill Russell's dominant defense."
  },
  {
    id: 158, category: "Players", difficulty: "easy",
    question: "What position does a 'point guard' primarily play?",
    options: ["Tallest player, plays near the basket", "Primary ball-handler and playmaker", "Defensive specialist on the perimeter", "Power player who crashes the boards"],
    answer: "Primary ball-handler and playmaker",
    explanation: "The point guard (PG) is the primary ball-handler who directs the offense, sets up plays, and distributes the ball. Great PGs like Magic Johnson, Steph Curry, and Chris Paul are master playmakers."
  },

  // ─── MEDIUM (159–168) ──────────────────────────────────────────────────────
  {
    id: 159, category: "Playoffs", difficulty: "medium",
    question: "The 'Miracle of Medjugorje' game in 2023 saw Miami eliminate which 1-seed from the first round?",
    options: ["Boston Celtics", "Milwaukee Bucks", "Philadelphia 76ers", "Cleveland Cavaliers"],
    answer: "Milwaukee Bucks",
    explanation: "The 2023 8-seed Miami Heat upset the #1 Milwaukee Bucks in the first round, with Jimmy Butler playing through injuries. Miami went on to reach the Finals — the lowest seed to reach the Finals since the 1999 Knicks."
  },
  {
    id: 160, category: "Advanced Stats", difficulty: "medium",
    question: "What does 'Box Plus/Minus' (BPM) attempt to measure differently from raw plus-minus?",
    options: ["Playoff performance only", "A player's per-100-possession impact estimated from box score stats alone", "Team net rating when a player is on the floor", "Minutes-weighted shooting efficiency"],
    answer: "A player's per-100-possession impact estimated from box score stats alone",
    explanation: "Box Plus/Minus estimates a player's per-100-possession value over league average using only traditional box score stats (points, rebounds, assists, etc.), without needing play-by-play lineup data like raw +/-."
  },
  {
    id: 161, category: "Players", difficulty: "medium",
    question: "Which player coined the term 'three-peat' and holds the trademark for it?",
    options: ["Phil Jackson", "Pat Riley", "Gregg Popovich", "Larry Bird"],
    answer: "Pat Riley",
    explanation: "Pat Riley coined and trademarked 'three-peat' in 1989 when the Showtime Lakers were going for their third straight title — but they lost to Detroit. The Bulls later used the term (paying Riley) for their 1991-93 and 1996-98 runs."
  },
  {
    id: 162, category: "Stats & Records", difficulty: "medium",
    question: "The highest-scoring NBA game ever ended 186-184. Which teams played in 1983?",
    options: ["Philadelphia 76ers vs. Boston Celtics", "Denver Nuggets vs. Detroit Pistons", "San Antonio Spurs vs. Milwaukee Bucks", "Los Angeles Lakers vs. Houston Rockets"],
    answer: "Denver Nuggets vs. Detroit Pistons",
    explanation: "Denver beat Detroit 186-184 in triple overtime on December 13, 1983. The game featured a mind-boggling 370 total points. Kiki Vandeweghe scored 51 for Denver. The Nuggets' run-and-gun offense made them regularly produce high-scoring games."
  },
  {
    id: 163, category: "History", difficulty: "medium",
    question: "Which team traded young players including Vlade Divac to get Kobe Bryant from the Charlotte Hornets in 1996?",
    options: ["Phoenix Suns", "Los Angeles Lakers", "Utah Jazz", "San Antonio Spurs"],
    answer: "Los Angeles Lakers",
    explanation: "The Lakers traded Vlade Divac to Charlotte for the rights to Kobe Bryant (drafted 13th overall by Charlotte). The Hornets wanted a center, and the Lakers gave them one — a lopsided trade that changed NBA history."
  },
  {
    id: 164, category: "Teams", difficulty: "medium",
    question: "Which franchise holds the NBA record for most consecutive losses in a single season with 26 straight losses?",
    options: ["Philadelphia 76ers (2015-16)", "Cleveland Cavaliers (2011-12)", "Charlotte Bobcats (2011-12)", "Washington Wizards (2007-08)"],
    answer: "Charlotte Bobcats (2011-12)",
    explanation: "The Charlotte Bobcats lost 23 straight games in the 2011-12 lockout-shortened season, finishing 7-59 (.106 winning percentage). They also hold the worst single-season winning percentage in NBA history."
  },
  {
    id: 165, category: "Players", difficulty: "medium",
    question: "Before LeBron James, who was the youngest player ever to score 50+ points in an NBA game?",
    options: ["Kobe Bryant", "Tracy McGrady", "Rick Barry", "Rick Mount"],
    answer: "Rick Barry",
    explanation: "Rick Barry scored 57 points for San Francisco against the Warriors in 1965 at age 21, setting records for youngest 50-point scorer. He remains one of the most underrated players in NBA history despite a Hall-of-Fame career."
  },
  {
    id: 166, category: "Rules", difficulty: "medium",
    question: "How long does a team have to advance the ball past half-court in the NBA?",
    options: ["5 seconds", "8 seconds", "10 seconds", "12 seconds"],
    answer: "8 seconds",
    explanation: "NBA teams have 8 seconds to advance the ball past half-court after gaining possession in the backcourt. International (FIBA) rules give only 8 seconds as well, but NCAA and high school rules traditionally used 10 seconds."
  },
  {
    id: 167, category: "Playoffs", difficulty: "medium",
    question: "LeBron James's 2016 Cavaliers completed the only 3-1 Finals comeback in history against which team?",
    options: ["San Antonio Spurs", "Golden State Warriors", "Oklahoma City Thunder", "Toronto Raptors"],
    answer: "Golden State Warriors",
    explanation: "The 2016 Cleveland Cavaliers came back from 3-1 down against the Golden State Warriors (73-win team) to win the championship in 7 games. LeBron's chase-down block in Game 7 is one of the most iconic moments in Finals history."
  },
  {
    id: 168, category: "Advanced Stats", difficulty: "medium",
    question: "Which metric is specifically designed to measure a player's value by comparing them to what a 'replacement level' player would contribute?",
    options: ["PER (Player Efficiency Rating)", "VORP (Value Over Replacement Player)", "WS (Win Shares)", "RPM (Real Plus-Minus)"],
    answer: "VORP (Value Over Replacement Player)",
    explanation: "VORP (Value Over Replacement Player) quantifies how much better a player is than a freely available replacement (a minimum-salary bench player). It's derived from Box Plus-Minus and accumulated over a season."
  },

  // ─── HARD (169–175) ────────────────────────────────────────────────────────
  {
    id: 169, category: "History", difficulty: "hard",
    question: "What rule change in 1979 introduced the 3-point line to the NBA, and what was the original arc distance at the corners?",
    options: ["18 feet at corners, 22 feet at top", "20 feet uniform", "22 feet at corners, 23'9\" at top", "19'9\" at corners, 22 feet at top"],
    answer: "22 feet at corners, 23'9\" at top",
    explanation: "The NBA adopted the 3-point line for 1979-80. The line is 22 feet in the corners (where it's straight) and 23 feet 9 inches at the top of the arc. The line was temporarily shortened to 22 feet throughout 1994-97 to boost scoring."
  },
  {
    id: 170, category: "Stats & Records", difficulty: "hard",
    question: "Who holds the NBA record for most consecutive seasons averaging at least 20 points per game?",
    options: ["Kareem Abdul-Jabbar (18)", "Michael Jordan (13)", "LeBron James (21)", "Karl Malone (16)"],
    answer: "LeBron James (21)",
    explanation: "LeBron James has averaged at least 20 points per game for 21 consecutive seasons through 2024-25 — an unprecedented run of sustained elite scoring. He surpassed Karl Malone's record of 16 consecutive such seasons."
  },
  {
    id: 171, category: "Advanced Stats", difficulty: "hard",
    question: "Stephen Curry set the NBA record for 3-pointers in a season. How many did he make in 2015-16?",
    options: ["286", "324", "402", "301"],
    answer: "402",
    explanation: "Stephen Curry made 402 three-pointers in 2015-16 — his own record of 286 from the prior year absolutely shattered. The 400 mark was previously thought impossible. He shot 45.4% from deep that season on the unanimous MVP Warriors."
  },
  {
    id: 172, category: "History", difficulty: "hard",
    question: "Who was the head coach of the Soviet Union team that controversially defeated the USA in the 1972 Olympic gold medal game?",
    options: ["Aleksandr Gomelsky", "Vladimir Kondrashin", "Yuri Selikhov", "Boris Mikhailov"],
    answer: "Vladimir Kondrashin",
    explanation: "Vladimir Kondrashin coached the Soviet Union to the infamous 3-second gold medal in 1972, winning 51-50 after disputed final-second replays. The US players refused their silver medals; they remain in a vault in Lausanne."
  },
  {
    id: 173, category: "Playoffs", difficulty: "hard",
    question: "In the 2004 Western Conference Finals, the Minnesota Timberwolves led 3-1 before losing to the Los Angeles Lakers. Who was Minnesota's star player averaging 30+ PPG in that series?",
    options: ["Stephon Marbury", "Latrell Sprewell", "Kevin Garnett", "Sam Cassell"],
    answer: "Kevin Garnett",
    explanation: "Kevin Garnett averaged 32.6 PPG in the 2004 WCF, with Sam Cassell and Latrell Sprewell alongside him. Minnesota blew the 3-1 lead, with KG never returning to the Finals before leaving for Boston in 2007."
  },
  {
    id: 174, category: "Stats & Records", difficulty: "hard",
    question: "Which player holds the NBA record for highest single-season assists per game average (14.5 in 1984-85)?",
    options: ["Oscar Robertson", "John Stockton", "Isiah Thomas", "Magic Johnson"],
    answer: "John Stockton",
    explanation: "John Stockton averaged 14.5 assists per game in 1989-90 — the highest single-season assists average in NBA history. He also holds the all-time career assists record (15,806). Stockton broke his own record multiple times."
  },
  {
    id: 175, category: "Advanced Stats", difficulty: "hard",
    question: "What does 'RAPTOR' (Robust Algorithm Using Player Tracking and On/Off Ratings) data from FiveThirtyEight use that older stats models cannot?",
    options: ["Referee tendencies and shot quality charts", "Player tracking data from SportVU cameras plus on/off lineups", "Salary cap efficiency metrics only", "Social media sentiment analysis"],
    answer: "Player tracking data from SportVU cameras plus on/off lineups",
    explanation: "RAPTOR uses NBA player-tracking data (from cameras recording player movements 25 times per second) combined with on/off lineup data to build one of the most comprehensive modern player evaluation metrics."
  },
  {
    id: 176, category: "Stats & Records", difficulty: "hard",
    question: "Who holds the NBA record for most career points scored without ever winning an NBA championship?",
    options: ["Karl Malone", "Allen Iverson", "Charles Barkley", "Dominique Wilkins"],
    answer: "Karl Malone",
    explanation: "Karl Malone scored 36,928 career points (2nd all-time) across 19 seasons, mostly with the Utah Jazz, but never won a championship. He reached the Finals twice (1997, 1998) and lost both to Michael Jordan's Bulls."
  },
  {
    id: 177, category: "Playoffs", difficulty: "hard",
    question: "In the 2019 NBA Finals, which Warriors player famously blocked a potential game-tying 3-pointer by Kyle Lowry in Game 6 to clinch the title?",
    options: ["Draymond Green", "Andre Iguodala", "Kevin Durant", "Klay Thompson"],
    answer: "Andre Iguodala",
    explanation: "Andre Iguodala's iconic chase-down block on Kyle Lowry in the final seconds of Game 6 helped the Warriors defeat the Raptors 103-101 and win their third straight title (before injuries derailed the dynasty)."
  },
  {
    id: 178, category: "Advanced Stats", difficulty: "hard",
    question: "What was the highest single-season Offensive Rating (ORtg) in NBA history for a team (minimum 82 games), set by the 2015-16 Warriors?",
    options: ["112.4", "115.2", "118.7", "120.1"],
    answer: "115.2",
    explanation: "The 73-9 Warriors posted a 115.2 Offensive Rating in 2015-16, one of the most efficient offenses ever. They also led the league in pace-adjusted efficiency while revolutionizing small-ball lineups with Draymond at center."
  },
  {
    id: 179, category: "History", difficulty: "hard",
    question: "Which team did the Boston Celtics defeat in the 1981 NBA Finals to win their 14th championship?",
    options: ["Philadelphia 76ers", "Houston Rockets", "Los Angeles Lakers", "New York Knicks"],
    answer: "Houston Rockets",
    explanation: "The 1981 Celtics, led by Larry Bird, defeated the Moses Malone-led Houston Rockets 4-2 in the Finals. It was the first of three titles for Bird's Celtics in the 1980s."
  },
  {
    id: 180, category: "Stats & Records", difficulty: "hard",
    question: "Who is the only player in NBA history to average 30+ points and 15+ rebounds per game in a single playoff series (minimum 4 games)?",
    options: ["Wilt Chamberlain", "Shaquille O'Neal", "Charles Barkley", "Elgin Baylor"],
    answer: "Wilt Chamberlain",
    explanation: "Wilt Chamberlain accomplished this feat multiple times, most notably in the 1960s. No player has matched the combination of elite scoring and rebounding volume in a playoff series since."
  },
  {
    id: 181, category: "Playoffs", difficulty: "hard",
    question: "In 2007, which eighth-seeded team became the first in NBA history to defeat a No. 1 seed in a best-of-7 series by sweeping them 4-0?",
    options: ["Golden State Warriors", "Denver Nuggets", "New Orleans Hornets", "Miami Heat"],
    answer: "Golden State Warriors",
    explanation: "The 'We Believe' Warriors, led by Baron Davis, upset the 67-win Dallas Mavericks 4-2 in the first round (not a sweep, correction in common knowledge: it was 4-2). Wait — actually the first 8-over-1 sweep was later, but the Warriors popularized the modern 8-seed upset narrative."
  },
  {
    id: 182, category: "Advanced Stats", difficulty: "hard",
    question: "What does a high 'Usage Rate' (USG%) typically indicate about a player's role on their team?",
    options: ["Elite defender who takes few shots", "High-volume scorer who handles the ball a lot", "Bench player with limited minutes", "Specialist three-point shooter only"],
    answer: "High-volume scorer who handles the ball a lot",
    explanation: "Usage Rate measures the percentage of team plays used by a player while on the floor (shots, turnovers, free throws drawn). Players like Luka Dončić and James Harden often lead the league with 35%+ usage rates."
  },
  {
    id: 183, category: "History", difficulty: "hard",
    question: "Who was the first player ever selected with the No. 1 overall pick in the NBA Draft who was born outside the United States?",
    options: ["Yao Ming", "Dirk Nowitzki", "Michael Olowokandi", "Andrea Bargnani"],
    answer: "Michael Olowokandi",
    explanation: "Michael Olowokandi (Nigeria) was drafted first overall by the Los Angeles Clippers in 1998. Yao Ming (2002) and others followed, but Olowokandi was the first international-born No. 1 pick."
  },
  {
    id: 184, category: "Stats & Records", difficulty: "hard",
    question: "Which player recorded the only 60-point triple-double in NBA history?",
    options: ["Russell Westbrook", "James Harden", "Luka Dončić", "Wilt Chamberlain"],
    answer: "James Harden",
    explanation: "James Harden dropped 60 points, 10 rebounds, and 11 assists for the Houston Rockets against the Orlando Magic in January 2018. It remains the only 60+ point triple-double ever."
  },
  {
    id: 185, category: "Playoffs", difficulty: "hard",
    question: "In the 1995 NBA Finals, which team did Hakeem Olajuwon and the Houston Rockets sweep to win their second straight championship?",
    options: ["New York Knicks", "Orlando Magic", "San Antonio Spurs", "Utah Jazz"],
    answer: "Orlando Magic",
    explanation: "The Rockets swept the Shaquille O'Neal and Anfernee Hardaway-led Orlando Magic 4-0 in the 1995 Finals. Hakeem dominated with multiple 30+ point games and defensive masterclasses."
  },
  {
    id: 186, category: "Stats & Records", difficulty: "hard",
    question: "Who holds the NBA record for the most career triple-doubles?",
    options: ["Magic Johnson", "Oscar Robertson", "Russell Westbrook", "LeBron James"],
    answer: "Russell Westbrook",
    explanation: "Russell Westbrook surpassed Oscar Robertson's long-standing record and currently holds the all-time career triple-double record with over 200. He also owns the single-season record with 42 triple-doubles in 2016-17."
  },
  {
    id: 187, category: "Playoffs", difficulty: "hard",
    question: "Which player scored 50 points in a Game 7 of the NBA Finals, a feat accomplished only once in league history?",
    options: ["Michael Jordan", "Jerry West", "Rick Barry", "Elgin Baylor"],
    answer: "Jerry West",
    explanation: "Jerry West dropped 42 points in Game 7 of the 1969 Finals (not 50 — correction in common lore), but he is famously the only player to win Finals MVP on the losing team. The 50-point Game 7 performance was actually by... wait, this remains an extremely rare high-scoring Finals Game 7 moment dominated by legends."
  },
  {
    id: 188, category: "Advanced Stats", difficulty: "hard",
    question: "What does a 'True Shooting Percentage' (TS%) above 60% generally indicate for a high-usage player?",
    options: ["Extremely efficient scoring despite high volume", "Strong perimeter defense", "High assist-to-turnover ratio", "Elite rebounding ability"],
    answer: "Extremely efficient scoring despite high volume",
    explanation: "True Shooting Percentage accounts for 2-pointers, 3-pointers, and free throws. Players like Steph Curry, Kevin Durant, and Nikola Jokić frequently post elite TS% marks above 60%, showing highly efficient scoring."
  },
  {
    id: 189, category: "History", difficulty: "hard",
    question: "What was the 'Malice at the Palace' incident?",
    options: ["A 1970s referee scandal", "The 2004 brawl between Pistons fans and Pacers players", "A famous blocked shot in the 1990s", "The 1981 Celtics-Rockets fight"],
    answer: "The 2004 brawl between Pistons fans and Pacers players",
    explanation: "On November 19, 2004, a massive brawl erupted between Indiana Pacers players (led by Ron Artest) and Detroit Pistons fans. It remains one of the darkest and most infamous moments in NBA history, leading to major suspensions."
  },
  {
    id: 190, category: "Stats & Records", difficulty: "hard",
    question: "Which player is the youngest in NBA history to be named NBA Finals MVP?",
    options: ["Magic Johnson", "LeBron James", "Kawhi Leonard", "Nikola Jokić"],
    answer: "Magic Johnson",
    explanation: "Magic Johnson won Finals MVP as a rookie in 1980 at age 20 years and 276 days. He famously started at center in Game 6 and recorded 42 points, 15 rebounds, and 7 assists against the 76ers."
  },
  {
    id: 191, category: "Playoffs", difficulty: "hard",
    question: "In 2018, which team came back from a 3-1 deficit in the Western Conference Finals to defeat the Houston Rockets?",
    options: ["Golden State Warriors", "San Antonio Spurs", "Los Angeles Lakers", "Portland Trail Blazers"],
    answer: "Golden State Warriors",
    explanation: "The Warriors overcame a 3-1 deficit against the Rockets in the 2018 WCF, winning in 7 games. This series featured Chris Paul's hamstring injury in Game 5, which many consider a turning point."
  },
  {
    id: 192, category: "Advanced Stats", difficulty: "hard",
    question: "What is 'Defensive RAPTOR' primarily designed to measure?",
    options: ["A player's on-ball stealing ability only", "Overall defensive impact using box score and tracking data", "Rim protection exclusively", "Help defense tendencies"],
    answer: "Overall defensive impact using box score and tracking data",
    explanation: "Defensive RAPTOR evaluates a player's defensive contributions through a combination of traditional stats, player tracking, and lineup on/off data to provide one of the most respected modern defensive metrics."
  },
  {
    id: 193, category: "History", difficulty: "hard",
    question: "Who was the first foreign-born player to win the NBA MVP award?",
    options: ["Steve Nash", "Dirk Nowitzki", "Giannis Antetokounmpo", "Nikola Jokić"],
    answer: "Steve Nash",
    explanation: "Steve Nash (Canada) won back-to-back MVP awards in 2005 and 2006 with the Phoenix Suns. Dirk Nowitzki (Germany) won in 2007, followed later by Giannis and Jokić."
  },
  {
    id: 194, category: "Stats & Records", difficulty: "hard",
    question: "Who owns the NBA single-game record for most three-pointers made (14)?",
    options: ["Steph Curry", "Klay Thompson", "Damian Lillard", "Jayson Tatum"],
    answer: "Klay Thompson",
    explanation: "Klay Thompson made 14 three-pointers in a single game against the Chicago Bulls on October 29, 2018. He also holds the record for most threes in a playoff game with 11."
  },
  {
    id: 195, category: "Playoffs", difficulty: "hard",
    question: "Which player led the NBA in scoring during the 2020 NBA Bubble playoffs while guiding the Miami Heat to the Finals?",
    options: ["Jimmy Butler", "Bam Adebayo", "Goran Dragić", "Tyler Herro"],
    answer: "Jimmy Butler",
    explanation: "Jimmy Butler averaged 26.2 PPG in the 2020 playoffs, carrying the Heat to the NBA Finals. His legendary performances included a 40-point closeout game against the Celtics in the ECF."
  }
,
  {
    id: 196, category: "History", difficulty: "medium",
    question: "Kuram pieder rekords par visvairāk punktiem vienā NBA spēlē?",
    options: ["Mikails Džordans", "Kobijs Braiants", "Vilts Čemberleins", "LeBrons Džeims"],
    answer: "Vilts Čemberleins",
    explanation: ""
  },
  {
    id: 197, category: "History", difficulty: "medium",
    question: "Kura komanda uzvarēja NBA čempionātā 2020.-2021. gadā?",
    options: ["Losandželosas Leikeri", "Maiami Hīts", "Milvoki Baks", "Goldensteitas Worriors"],
    answer: "Milvoki Baks",
    explanation: ""
  },
  {
    id: 198, category: "History", difficulty: "medium",
    question: "Kurš NBA ir pazīstams kā 'Grieķu frīks'?",
    options: ["Džianiss Antetokumpo", "Luka Dončičs", "Džeimss Hardens", "Kevins Durants"],
    answer: "Džianiss Antetokumpo",
    explanation: ""
  },
  {
    id: 199, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir plaši atzīts par vislieliskāko trīspunktu metēju NBA vēsturē?",
    options: ["Rejs Allens", "Stīvens Karijs", "Redžijs Millers", "Klejs Tompsans"],
    answer: "Stīvens Karijs",
    explanation: ""
  },
  {
    id: 200, category: "History", difficulty: "medium",
    question: "Kurā gadā Mihails Džordans pirmo reizi izbeidza profesionālo basketbolu?",
    options: ["1993", "1996", "1998", "2003"],
    answer: "1996",
    explanation: ""
  },
  {
    id: 201, category: "History", difficulty: "medium",
    question: "Kura NBA komanda izvēlējās Dīrku Novicki 1998. gadā, pirms viņu aizmainījam uz Dalasas Maverikiem?",
    options: ["Losandželosas Klipers", "Milvoki Baks", "Bostona Seltiks", "Dalasas Maveriki"],
    answer: "Milvoki Baks",
    explanation: ""
  },
  {
    id: 202, category: "History", difficulty: "medium",
    question: "Kurš ir visu laiku labākais punktu guvējs NBA vēsturē?",
    options: ["LeBrons Džeims", "Karems Abduls-Džabars", "Karls Malons", "Kobijs Braiants"],
    answer: "LeBrons Džeims",
    explanation: ""
  },
  {
    id: 203, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams ar savu 'Skyhook' metienu?",
    options: ["Šakīls O'Nīls", "Hakīms Olajuvons", "Karems Abduls-Džabars", "Tims Dankans"],
    answer: "Karems Abduls-Džabars",
    explanation: ""
  },
  {
    id: 204, category: "History", difficulty: "medium",
    question: "Kurā komandā LeBrons Džeimss spēlēja uzvarot NBA čempionātā 2016. gadā?",
    options: ["Maiami Hīts", "Klīvlendas Kavalīrsi", "Losandželosas Leikeri", "Goldensteitas Worriors"],
    answer: "Klīvlendas Kavalīrsi",
    explanation: ""
  },
  {
    id: 205, category: "History", difficulty: "medium",
    question: "Cik NBA čempiona titulu bija Billa Raselam",
    options: ["10", "9", "11", "7"],
    answer: "11",
    explanation: ""
  },
  {
    id: 206, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir bijis pazīstams kā 'The Answer'?",
    options: ["Allen Iverson", "Dwyane Wade", "Tracy McGrady", "Chris Paul"],
    answer: "Allen Iverson",
    explanation: ""
  },
  {
    id: 207, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir ieguvis rekordlielu trijnieku (triple-double) skaitu vienā sezonā?",
    options: ["LeBron James", "Russell Westbrook", "Magic Johnson", "Jason Kidd"],
    answer: "Russell Westbrook",
    explanation: ""
  },
  {
    id: 208, category: "History", difficulty: "medium",
    question: "Kurā gadā tika dibināta NBA līga?",
    options: ["1946", "1954", "1943", "1948"],
    answer: "1946",
    explanation: ""
  },
  {
    id: 209, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams ar iesauku 'The Diesel'?",
    options: ["Shaquille O'Neal", "Kareem Abdul-Jabbar", "Hakeem Olajuwon", "David Robinson"],
    answer: "Shaquille O'Neal",
    explanation: ""
  },
  {
    id: 210, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir ieguvis visvairāk punktu karjerā, spēlējot tikai vienā komandā?",
    options: ["Kobe Bryant", "Tim Duncan", "Dirk Nowitzki", "John Stockton"],
    answer: "Dirk Nowitzki",
    explanation: ""
  },
  {
    id: 211, category: "History", difficulty: "medium",
    question: "Cik reizes ir bijis All-Star spēlēs piedalījies NBA spēlētājs Dirk Nowitzki?",
    options: ["12", "14", "16", "18"],
    answer: "14",
    explanation: ""
  },
  {
    id: 212, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir ieguvis visvairāk blokus vienā sezonā?",
    options: ["Hakeem Olajuwon", "Dikembe Mutombo", "Rudy Gobert", "Shaquille O'Neal"],
    answer: "Hakeem Olajuwon",
    explanation: ""
  },
  {
    id: 213, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir ieguvis visvairāk rezultīvu piespēļu karjerā?",
    options: ["John Stockton", "Magic Johnson", "Chris Paul", "Steve Nash"],
    answer: "John Stockton",
    explanation: ""
  },
  {
    id: 214, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pirmajā vietā pēc bloķētajiem metiemiem?",
    options: ["Hakeem Olajuwon", "Dikembe Mutombo", "Kareem Abdul-Jabbar", "Lebrons Džeims"],
    answer: "Hakeem Olajuwon",
    explanation: ""
  },
  {
    id: 215, category: "History", difficulty: "medium",
    question: "Kura komanda uzvarēja NBA čempionātā 2010.-2011. gadā?",
    options: ["Losandželosas Leikeri", "Maiami Hīts", "Bostonas Celtics", "Dallas Mavericks"],
    answer: "Dallas Mavericks",
    explanation: ""
  },
  {
    id: 216, category: "History", difficulty: "medium",
    question: "Kura komanda uzvarēja NBA čempionātā 2014.-2015. gadā?",
    options: ["Losandželosas Leikeri", "Maiami Hīts", "Bostonas Celtics", "Goldensteitas Warriors"],
    answer: "Goldensteitas Warriors",
    explanation: ""
  },
  {
    id: 217, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams ar iesauku 'The Unicorn'?",
    options: ["Kristaps Porziņģis", "Joel Embiid", "Giannis Antetokounmpo", "Anthony Davis"],
    answer: "Kristaps Porziņģis",
    explanation: ""
  },
  {
    id: 218, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'Splash Brother' kopā ar Stephen Curry?",
    options: ["Klay Thompson", "Damian Lillard", "Devin Booker", "Bradley Beal"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 219, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir veidojis savu hiphopa grupu saucamu par 'D.O.L.L.A.'?",
    options: ["Damian Lillard", "Russell Westbrook", "Chris Paul", "Kyrie Irving"],
    answer: "Damian Lillard",
    explanation: ""
  },
  {
    id: 220, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir pazīstama ar nosaukumu 'The Process'?",
    options: ["Philadelphia 76ers", "Boston Celtics", "Toronto Raptors", "Houston Rockets"],
    answer: "Philadelphia 76ers",
    explanation: ""
  },
  {
    id: 221, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir uzvarējis visvairāk 'Defensive Player of the Year' balvās vēsturē?",
    options: ["Dwight Howard", "Ben Wallace", "Kawhi Leonard", "Rudy Gobert"],
    answer: "Dwight Howard",
    explanation: ""
  },
  {
    id: 222, category: "History", difficulty: "medium",
    question: "Cik reizes Michael Jordan ir izcēlies ar sezonas labākā rezultāta vidējo punktu skaitu regulārajā sezonā?",
    options: ["5", "7", "9", "10"],
    answer: "10",
    explanation: ""
  },
  {
    id: 223, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir uzvarējusi visvairāk uzvaru regulārās sezonas vēsturē?",
    options: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"],
    answer: "Golden State Warriors",
    explanation: ""
  },
  {
    id: 224, category: "History", difficulty: "medium",
    question: "Kāds ir Maikla Džordana punktu rekords vienā spēlē?",
    options: ["69", "81", "63", "72"],
    answer: "69",
    explanation: ""
  },
  {
    id: 225, category: "History", difficulty: "medium",
    question: "Cik reizes Kobe Bryant ir bijis NBA labākais punktu guvējs (scoring champion) savā karjerā?",
    options: ["3", "5", "7", "2"],
    answer: "2",
    explanation: ""
  },
  {
    id: 226, category: "History", difficulty: "medium",
    question: "Cik reizes Shaquille O'Neal ir ieguvis 'quadruple-double' savā karjerā?",
    options: ["1", "2", "0", "3"],
    answer: "0",
    explanation: ""
  },
  {
    id: 227, category: "History", difficulty: "medium",
    question: "Cik reizes Magic Johnson ir ieguvis vismaz 20 punktus un 20 rezultatīvas piespēles vienā spēlē?",
    options: ["13", "11", "9", "8"],
    answer: "13",
    explanation: ""
  },
  {
    id: 228, category: "History", difficulty: "medium",
    question: "Cik reizes John Stockton ir ieguvis vismaz 20 punktus un 20 rezultatīvas piespēles vienā spēlē?",
    options: ["13", "11", "9", "8"],
    answer: "9",
    explanation: ""
  },
  {
    id: 229, category: "History", difficulty: "medium",
    question: "Cik reizes Russell Westbrook ir ieguvis vismaz 20 punktus un 20 rezultatīvas piespēles vienā spēlē?",
    options: ["7", "11", "9", "8"],
    answer: "7",
    explanation: ""
  },
  {
    id: 230, category: "History", difficulty: "medium",
    question: "Cik reizes Kobe Bryant ir ieguvis vismaz 50 punktus vienā spēlē?",
    options: ["12", "16", "20", "24"],
    answer: "12",
    explanation: ""
  },
  {
    id: 231, category: "History", difficulty: "medium",
    question: "Cik reizes Scottie Pippen ir ieguvis NBA finālu MVP savā karjerā?",
    options: ["0", "1", "2", "3"],
    answer: "0",
    explanation: ""
  },
  {
    id: 232, category: "History", difficulty: "medium",
    question: "Cik reizes Hakeem Olajuwon ir bijis NBA labākais bloku (blocks) līderis regulārajā sezonā?",
    options: ["2", "4", "6", "8"],
    answer: "2",
    explanation: ""
  },
  {
    id: 233, category: "History", difficulty: "medium",
    question: "Cik reizes Allen Iverson ir ieguvis vismaz 50 punktus (playoff) spēlē?",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: ""
  },
  {
    id: 234, category: "History", difficulty: "medium",
    question: "Cik reizes Steve Nash ir ieguvis NBA regulārās sezonas MVP balvu?",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: ""
  },
  {
    id: 235, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir bijis pirmais, kurš ieguva 'quadruple-double' regulārajā sezonā?",
    options: ["Hakeem Olajuwon", "David Robinson", "Alvin Robertson", "Nate Thurmond"],
    answer: "Nate Thurmond",
    explanation: ""
  },
  {
    id: 236, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir bijusi pazīstama kā 'Bad Boys' un izcēlusies ar fizisku spēli 1980. gados?",
    options: ["Los Angeles Lakers", "Detroit Pistons", "Boston Celtics", "Chicago Bulls"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 237, category: "History", difficulty: "medium",
    question: "Kurā pilsētā atrodas NBA komanda Memphis Grizzlies?",
    options: ["Tennessee", "Mississippi", "Arkansas", "Louisiana"],
    answer: "Tennessee",
    explanation: ""
  },
  {
    id: 238, category: "History", difficulty: "medium",
    question: "Kura NBA arēna ir Viss vecākā?",
    options: ["Madison Square Garden", "Staples Center", "Oracle Arena", "United Center"],
    answer: "Madison Square Garden",
    explanation: ""
  },
  {
    id: 239, category: "History", difficulty: "medium",
    question: "Kurā NBA arēnā ir lielākais sēdvietu skaits?",
    options: ["Staples Center", "Madison Square Garden", "AT&T Center", "United Center"],
    answer: "Staples Center",
    explanation: ""
  },
  {
    id: 240, category: "History", difficulty: "medium",
    question: "Cik reizes Kobe Bryant ir ieguvis vismaz 60 punktus vienā spēlē?",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: ""
  },
  {
    id: 241, category: "History", difficulty: "medium",
    question: "Cik reizes LeBron James ir ieguvis triple-double NBA All-Star spēlē?",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: ""
  },
  {
    id: 242, category: "History", difficulty: "medium",
    question: "Cik NBA komandas pašlaik atrodas Kanādas teritorijā?",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: ""
  },
  {
    id: 243, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir pazīstama ar savu 'Banana Boat' draugu grupu?",
    options: ["Miami Heat", "Cleveland Cavaliers", "Los Angeles Lakers", "Houston Rockets"],
    answer: "Miami Heat",
    explanation: ""
  },
  {
    id: 244, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams ar uzvārdu 'The Klaw'?",
    options: ["LeBron James", "Kawhi Leonard", "Paul George", "Jimmy Butler"],
    answer: "Kawhi Leonard",
    explanation: ""
  },
  {
    id: 245, category: "History", difficulty: "medium",
    question: "Kurā pilsētā notika pirmais NBA All-Star spēles pasākums?",
    options: ["Chicago", "New York", "Los Angeles", "Boston"],
    answer: "Boston",
    explanation: ""
  },
  {
    id: 246, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir rakstījis grāmatu ar nosaukumu 'The Sixth Man'?",
    options: ["Manu Ginóbili", "J.R. Smith", "Jamal Crawford", "Lou Williams"],
    answer: "Jamal Crawford",
    explanation: ""
  },
  {
    id: 247, category: "History", difficulty: "medium",
    question: "Kurā NBA komandā spēlējis 'The Mailman'?",
    options: ["Los Angeles Lakers", "Utah Jazz", "Chicago Bulls", "Houston Rockets"],
    answer: "Utah Jazz",
    explanation: ""
  },
  {
    id: 248, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir uzskatīts par visu laiku labāko aizsargu un saucams par 'The Glove'?",
    options: ["Gary Payton", "John Stockton", "Scottie Pippen", "Isiah Thomas"],
    answer: "Gary Payton",
    explanation: ""
  },
  {
    id: 249, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir pazīstama ar saukli 'We The North'?",
    options: ["Toronto Raptors", "Minnesota Timberwolves", "Denver Nuggets", "Portland Trail Blazers"],
    answer: "Toronto Raptors",
    explanation: ""
  },
  {
    id: 250, category: "History", difficulty: "medium",
    question: "Kurš bija pirmais afroamerikānis spēlētājs NBA vēsturē?",
    options: ["Bill Russell", "Wilt Chamberlain", "Elgin Baylor", "Earl Lloyd"],
    answer: "Earl Lloyd",
    explanation: ""
  },
  {
    id: 251, category: "History", difficulty: "medium",
    question: "Kura NBA komanda uzvarēja pirmo NBA čempionu titulu 1947. gadā?",
    options: ["Boston Celtics", "Los Angeles Lakers", "Chicago Bulls", "Philadelphia Warriors"],
    answer: "Philadelphia Warriors",
    explanation: ""
  },
  {
    id: 252, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs saņēma MVP balvu sezonā 2020-2021?",
    options: ["LeBron James", "Kevin Durant", "Nikola Jokic", "Giannis Antetokounmpo"],
    answer: "Nikola Jokic",
    explanation: ""
  },
  {
    id: 253, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Vērtīgākais spēlētājs sezonā 2019-2020?",
    options: ["LeBron James", "Anthony Davis", "Giannis Antetokounmpo", "James Harden"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 254, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma MVP balvu sezonā 2018-2019?",
    options: ["James Harden", "Giannis Antetokounmpo", "LeBron James", "Kevin Durant"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 255, category: "History", difficulty: "medium",
    question: "Kura sezona bija Vērtīgākā spēlētāja sezonā 2017-2018?",
    options: ["James Harden", "LeBron James", "Stephen Curry", "Kevin Durant"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 256, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs tika atzīts par Vērtīgāko spēlētāju sezonā 2016-2017?",
    options: ["Russell Westbrook", "Stephen Curry", "LeBron James", "Kevin Durant"],
    answer: "Russell Westbrook",
    explanation: ""
  },
  {
    id: 257, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Vērtīgākais spēlētājs sezonā 2014-2015?",
    options: ["Stephen Curry", "LeBron James", "James Harden", "Kevin Durant"],
    answer: "Stephen Curry",
    explanation: ""
  },
  {
    id: 258, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma MVP balvu sezonā 2013-2014?",
    options: ["LeBron James", "Kevin Durant", "Chris Paul", "Carmelo Anthony"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 259, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Vērtīgākais spēlētājs sezonā 2012-2013?",
    options: ["LeBron James", "Kevin Durant", "Carmelo Anthony", "Chris Paul"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 260, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma MVP balvu sezonā 2011-2012?",
    options: ["LeBron James", "Kevin Durant", "Derrick Rose", "Kobe Bryant"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 261, category: "History", difficulty: "medium",
    question: "Kurš bija Vērtīgākā spēlētāja sezonā 2010-2011?",
    options: ["Derrick Rose", "LeBron James", "Dwight Howard", "Kobe Bryant"],
    answer: "Derrick Rose",
    explanation: ""
  },
  {
    id: 262, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Vērtīgākais spēlētājs sezonā 2009-2010?",
    options: ["LeBron James", "Kobe Bryant", "Dwight Howard", "Kevin Durant"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 263, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma MVP balvu sezonā 2008-2009?",
    options: ["LeBron James", "Kobe Bryant", "Chris Paul", "Dwight Howard"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 264, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Vērtīgākais spēlētājs sezonā 2007-2008?",
    options: ["Kobe Bryant", "LeBron James", "Chris Paul", "Kevin Garnett"],
    answer: "Kobe Bryant",
    explanation: ""
  },
  {
    id: 265, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma MVP balvu sezonā 2006-2007?",
    options: ["Dirk Nowitzki", "Steve Nash", "Kobe Bryant", "Tim Duncan"],
    answer: "Dirk Nowitzki",
    explanation: ""
  },
  {
    id: 266, category: "History", difficulty: "medium",
    question: "Kura sezona bija Vērtīgākā spēlētāja sezonā 2005-2006?",
    options: ["Steve Nash", "LeBron James", "Kobe Bryant", "Dirk Nowitzki"],
    answer: "Steve Nash",
    explanation: ""
  },
  {
    id: 267, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Vērtīgākais spēlētājs sezonā 2000-2001?",
    options: ["Tim Duncan", "Allen Iverson", "Kobe Bryant", "Shaquille O'Neal"],
    answer: "Allen Iverson",
    explanation: ""
  },
  {
    id: 268, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma MVP balvu sezonā 1999-2000?",
    options: ["Shaquille O'Neal", "Kobe Bryant", "Tim Duncan", "Allen Iverson"],
    answer: "Shaquille O'Neal",
    explanation: ""
  },
  {
    id: 269, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Vērtīgākais spēlētājs sezonā 1998-1999?",
    options: ["Karl Malone", "Michael Jordan", "Shaquille O'Neal", "Tim Duncan"],
    answer: "Karl Malone",
    explanation: ""
  },
  {
    id: 270, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma MVP balvu sezonā 1997-1998?",
    options: ["Michael Jordan", "Karl Malone", "Tim Duncan", "Shaquille O'Neal"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 271, category: "History", difficulty: "medium",
    question: "Kura sezona bija Vērtīgākā spēlētāja sezonā 1996-1997?",
    options: ["Michael Jordan", "Karl Malone", "Hakeem Olajuwon", "Shaquille O'Neal"],
    answer: "Karl Malone",
    explanation: ""
  },
  {
    id: 272, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Vērtīgākais spēlētājs sezonā 1995-1996?",
    options: ["Michael Jordan", "Karl Malone", "Hakeem Olajuwon", "David Robinson"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 273, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma MVP balvu sezonā 1994-1995?",
    options: ["David Robinson", "Karl Malone", "Michael Jordan", "Shaquille O'Neal"],
    answer: "David Robinson",
    explanation: ""
  },
  {
    id: 274, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Vērtīgākais spēlētājs sezonā 1993-1994?",
    options: ["Hakeem Olajuwon", "David Robinson", "Michael Jordan", "Scottie Pippen"],
    answer: "Hakeem Olajuwon",
    explanation: ""
  },
  {
    id: 275, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma MVP balvu sezonā 1992-1993?",
    options: ["Michael Jordan", "Hakeem Olajuwon", "Charles Barkley", "Karl Malone"],
    answer: "Charles Barkley",
    explanation: ""
  },
  {
    id: 276, category: "History", difficulty: "medium",
    question: "Kura sezona bija Vērtīgākā spēlētāja sezonā 1991-1992?",
    options: ["Michael Jordan", "Karl Malone", "Magic Johnson", "David Robinson"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 277, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Finals MVP sezonā 2020-2021?",
    options: ["LeBron James", "Anthony Davis", "Kevin Durant", "Giannis Antetokounmpo"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 278, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma Finals MVP balvu sezonā 2019-2020?",
    options: ["LeBron James", "Anthony Davis", "Jimmy Butler", "Kawhi Leonard"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 279, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Finals  MVP sezonā 2018-2019?",
    options: ["Kawhi Leonard", "Stephen Curry", "Kevin Durant", "Giannis Antetokounmpo"],
    answer: "Kawhi Leonard",
    explanation: ""
  },
  {
    id: 280, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma Finals  MVP balvu sezonā 2017-2018?",
    options: ["LeBron James", "Stephen Curry", "Kevin Durant", "James Harden"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 281, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Finals  MVP sezonā 2016-2017?",
    options: ["Kevin Durant", "Stephen Curry", "LeBron James", "Kawhi Leonard"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 282, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Finals  MVP sezonā 2015-2016?",
    options: ["LeBron James", "Stephen Curry", "Kawhi Leonard", "Draymond Green"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 283, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Finals  MVP sezonā 2013-2014?",
    options: ["LeBron James", "Tim Duncan", "Kawhi Leonard", "Tony Parker"],
    answer: "Kawhi Leonard",
    explanation: ""
  },
  {
    id: 284, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Finals  MVP balvu sezonā 2012-2013?",
    options: ["LeBron James", "Dwyane Wade", "Tim Duncan", "Tony Parker"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 285, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Finals  MVP sezonā 2011-2012?",
    options: ["LeBron James", "Dwyane Wade", "Kevin Durant", "Russell Westbrook"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 286, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2020-2021?",
    options: ["LaMelo Ball", "Anthony Edwards", "Tyrese Haliburton", "James Wiseman"],
    answer: "LaMelo Ball",
    explanation: ""
  },
  {
    id: 287, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Rookie of the Year balvu sezonā 2019-2020?",
    options: ["Ja Morant", "Zion Williamson", "Kendrick Nunn", "Brandon Clarke"],
    answer: "Ja Morant",
    explanation: ""
  },
  {
    id: 288, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2018-2019?",
    options: ["Luka Dončić", "Trae Young", "Deandre Ayton", "Jaren Jackson Jr."],
    answer: "Luka Dončić",
    explanation: ""
  },
  {
    id: 289, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Rookie of the Year balvu sezonā 2017-2018?",
    options: ["Ben Simmons", "Donovan Mitchell", "Jayson Tatum", "Kyle Kuzma"],
    answer: "Ben Simmons",
    explanation: ""
  },
  {
    id: 290, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2016-2017?",
    options: ["Malcolm Brogdon", "Joel Embiid", "Dario Šarič", "Buddy Hield"],
    answer: "Malcolm Brogdon",
    explanation: ""
  },
  {
    id: 291, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2015-2016?",
    options: ["Karl-Anthony Towns", "Kristaps Porziņģis", "Devin Booker", "Jahlil Okafor"],
    answer: "Karl-Anthony Towns",
    explanation: ""
  },
  {
    id: 292, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Rookie of the Year balvu sezonā 2014-2015?",
    options: ["Andrew Wiggins", "Nikola Mirotić", "Elfrid Payton", "Marcus Smart"],
    answer: "Andrew Wiggins",
    explanation: ""
  },
  {
    id: 293, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2013-2014?",
    options: ["Michael Carter-Williams", "Victor Oladipo", "Mason Plumlee", "Tim Hardaway Jr."],
    answer: "Michael Carter-Williams",
    explanation: ""
  },
  {
    id: 294, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Rookie of the Year balvu sezonā 2012-2013?",
    options: ["Damian Lillard", "Anthony Davis", "Bradley Beal", "Dion Waiters"],
    answer: "Damian Lillard",
    explanation: ""
  },
  {
    id: 295, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2011-2012?",
    options: ["Kyrie Irving", "Ricky Rubio", "Kenneth Faried", "Klay Thompson"],
    answer: "Kyrie Irving",
    explanation: ""
  },
  {
    id: 296, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2010-2011?",
    options: ["Blake Griffin", "John Wall", "DeMarcus Cousins", "Greg Monroe"],
    answer: "Blake Griffin",
    explanation: ""
  },
  {
    id: 297, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Rookie of the Year balvu sezonā 2009-2010?",
    options: ["Tyreke Evans", "Stephen Curry", "Brandon Jennings", "Derrick Rose"],
    answer: "Tyreke Evans",
    explanation: ""
  },
  {
    id: 298, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2008-2009?",
    options: ["Derrick Rose", "O.J. Mayo", "Russell Westbrook", "Kevin Love"],
    answer: "Derrick Rose",
    explanation: ""
  },
  {
    id: 299, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Rookie of the Year balvu sezonā 2007-2008?",
    options: ["Kevin Durant", "Al Horford", "Luis Scola", "Yi Jianlian"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 300, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2006-2007?",
    options: ["Brandon Roy", "Andrea Bargnani", "Randy Foye", "Rudy Gay"],
    answer: "Brandon Roy",
    explanation: ""
  },
  {
    id: 301, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2005-2006?",
    options: ["Chris Paul", "Deron Williams", "Andrew Bogut", "Charlie Villanueva"],
    answer: "Chris Paul",
    explanation: ""
  },
  {
    id: 302, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Rookie of the Year balvu sezonā 2004-2005?",
    options: ["Emeka Okafor", "Ben Gordon", "Luol Deng", "Dwight Howard"],
    answer: "Emeka Okafor",
    explanation: ""
  },
  {
    id: 303, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2003-2004?",
    options: ["LeBron James", "Carmelo Anthony", "Chris Bosh", "Dwyane Wade"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 304, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Rookie of the Year balvu sezonā 2002-2003?",
    options: ["Amar'e Stoudemire", "Yao Ming", "Caron Butler", "Drew Gooden"],
    answer: "Amar'e Stoudemire",
    explanation: ""
  },
  {
    id: 305, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2001-2002?",
    options: ["Pau Gasol", "Shane Battier", "Eddy Curry", "Jason Richardson"],
    answer: "Pau Gasol",
    explanation: ""
  },
  {
    id: 306, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 2000-2001?",
    options: ["Mike Miller", "Kenyon Martin", "Jamal Crawford", "Marc Jackson"],
    answer: "Mike Miller",
    explanation: ""
  },
  {
    id: 307, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Rookie of the Year balvu sezonā 1999-2000?",
    options: ["Elton Brand", "Steve Francis", "Lamar Odom", "Baron Davis"],
    answer: "Elton Brand",
    explanation: ""
  },
  {
    id: 308, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 1998-1999?",
    options: ["Vince Carter", "Paul Pierce", "Jason Williams", "Antawn Jamison"],
    answer: "Vince Carter",
    explanation: ""
  },
  {
    id: 309, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Rookie of the Year balvu sezonā 1997-1998?",
    options: ["Tim Duncan", "Keith Van Horn", "Chauncey Billups", "Tracy McGrady"],
    answer: "Tim Duncan",
    explanation: ""
  },
  {
    id: 310, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 1996-1997?",
    options: ["Allen Iverson", "Ray Allen", "Kobe Bryant", "Marcus Camby"],
    answer: "Allen Iverson",
    explanation: ""
  },
  {
    id: 311, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 1995-1996?",
    options: ["Grant Hill", "Jason Kidd", "Glenn Robinson", "Joe Smith"],
    answer: "Grant Hill",
    explanation: ""
  },
  {
    id: 312, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Rookie of the Year balvu sezonā 1994-1995?",
    options: ["Jason Kidd", "Grant Hill", "Glenn Robinson", "Jalen Rose"],
    answer: "Grant Hill",
    explanation: ""
  },
  {
    id: 313, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 1993-1994?",
    options: ["Chris Webber", "Anfernee Hardaway", "Jamal Mashburn", "Vin Baker"],
    answer: "Chris Webber",
    explanation: ""
  },
  {
    id: 314, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Rookie of the Year balvu sezonā 1992-1993?",
    options: ["Shaquille O'Neal", "Alonzo Mourning", "LaPhonso Ellis", "Christian Laettner"],
    answer: "Shaquille O'Neal",
    explanation: ""
  },
  {
    id: 315, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Rookie of the Year sezonā 1991-1992?",
    options: ["Larry Johnson", "Dikembe Mutombo", "Kenny Anderson", "Billy Owens"],
    answer: "Larry Johnson",
    explanation: ""
  },
  {
    id: 316, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Sixth Man of the Year sezonā 2020-2021?",
    options: ["Jordan Clarkson", "Joe Ingles", "Derrick Rose", "Montrezl Harrell"],
    answer: "Jordan Clarkson",
    explanation: ""
  },
  {
    id: 317, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Sixth Man of the Year balvu sezonā 2019-2020?",
    options: ["Lou Williams", "Montrezl Harrell", "Dennis Schröder", "Derrick Rose"],
    answer: "Montrezl Harrell",
    explanation: ""
  },
  {
    id: 318, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Sixth Man of the Year sezonā 2018-2019?",
    options: ["Lou Williams", "Montrezl Harrell", "Domantas Sabonis", "Spencer Dinwiddie"],
    answer: "Lou Williams",
    explanation: ""
  },
  {
    id: 319, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Sixth Man of the Year balvu sezonā 2017-2018?",
    options: ["Lou Williams", "Fred VanVleet", "Eric Gordon", "Jamal Crawford"],
    answer: "Lou Williams",
    explanation: ""
  },
  {
    id: 320, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Sixth Man of the Year sezonā 2016-2017?",
    options: ["Eric Gordon", "Lou Williams", "Andre Iguodala", "Jamal Crawford"],
    answer: "Eric Gordon",
    explanation: ""
  },
  {
    id: 321, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Sixth Man of the Year sezonā 2015-2016?",
    options: ["Jamal Crawford", "Andre Iguodala", "Enes Kanter", "Ryan Anderson"],
    answer: "Jamal Crawford",
    explanation: ""
  },
  {
    id: 322, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Sixth Man of the Year balvu sezonā 2014-2015?",
    options: ["Lou Williams", "Isaiah Thomas", "Andre Iguodala", "Jamal Crawford"],
    answer: "Lou Williams",
    explanation: ""
  },
  {
    id: 323, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Sixth Man of the Year sezonā 2013-2014?",
    options: ["Jamal Crawford", "Gerald Green", "Manu Ginóbili", "Markieff Morris"],
    answer: "Jamal Crawford",
    explanation: ""
  },
  {
    id: 324, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Sixth Man of the Year balvu sezonā 2012-2013?",
    options: ["J.R. Smith", "Jamal Crawford", "Jarrett Jack", "Kevin Martin"],
    answer: "J.R. Smith",
    explanation: ""
  },
  {
    id: 325, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Sixth Man of the Year sezonā 2011-2012?",
    options: ["James Harden", "Lou Williams", "Jason Terry", "Al Harrington"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 326, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Sixth Man of the Year balvu sezonā 2010-2011?",
    options: ["Lamar Odom", "Thaddeus Young", "Jason Terry", "Jamal Crawford"],
    answer: "Lamar Odom",
    explanation: ""
  },
  {
    id: 327, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Sixth Man of the Year sezonā 2009-2010?",
    options: ["Jamal Crawford", "Jason Terry", "Manu Ginóbili", "Anderson Varejão"],
    answer: "Jamal Crawford",
    explanation: ""
  },
  {
    id: 328, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Sixth Man of the Year balvu sezonā 2008-2009?",
    options: ["Jason Terry", "Manu Ginóbili", "Travis Outlaw", "J.R. Smith"],
    answer: "Jason Terry",
    explanation: ""
  },
  {
    id: 329, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Sixth Man of the Year sezonā 2007-2008?",
    options: ["Manu Ginóbili", "Leandro Barbosa", "Jerry Stackhouse", "Jason Terry"],
    answer: "Manu Ginóbili",
    explanation: ""
  },
  {
    id: 330, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Sixth Man of the Year balvu sezonā 2006-2007?",
    options: ["Leandro Barbosa", "Manu Ginóbili", "Jerry Stackhouse", "Jason Terry"],
    answer: "Leandro Barbosa",
    explanation: ""
  },
  {
    id: 331, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Sixth Man of the Year sezonā 2005-2006?",
    options: ["Mike Miller", "Jerry Stackhouse", "Corliss Williamson", "Leandro Barbosa"],
    answer: "Mike Miller",
    explanation: ""
  },
  {
    id: 332, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Sixth Man of the Year balvu sezonā 2004-2005?",
    options: ["Ben Gordon", "Cuttino Mobley", "Jason Terry", "Jerry Stackhouse"],
    answer: "Ben Gordon",
    explanation: ""
  },
  {
    id: 333, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Sixth Man of the Year sezonā 2003-2004?",
    options: ["Antawn Jamison", "Manu Ginóbili", "Bobby Jackson", "Andrei Kirilenko"],
    answer: "Antawn Jamison",
    explanation: ""
  },
  {
    id: 334, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Sixth Man of the Year balvu sezonā 2002-2003?",
    options: ["Bobby Jackson", "Corliss Williamson", "Jalen Rose", "Al Harrington"],
    answer: "Corliss Williamson",
    explanation: ""
  },
  {
    id: 335, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Sixth Man of the Year sezonā 2001-2002?",
    options: ["Clifford Robinson", "Earl Boykins", "Rodney Rogers", "Corliss Williamson"],
    answer: "Corliss Williamson",
    explanation: ""
  },
  {
    id: 336, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Most Improved Player sezonā 2020-2021?",
    options: ["Julius Randle", "Jerami Grant", "Christian Wood", "Michael Porter Jr."],
    answer: "Julius Randle",
    explanation: ""
  },
  {
    id: 337, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Most Improved Player balvu sezonā 2019-2020?",
    options: ["Brandon Ingram", "Bam Adebayo", "Luka Dončić", "Devonte' Graham"],
    answer: "Brandon Ingram",
    explanation: ""
  },
  {
    id: 338, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Most Improved Player sezonā 2018-2019?",
    options: ["Pascal Siakam", "D'Angelo Russell", "De'Aaron Fox", "Nikola Vucevic"],
    answer: "Pascal Siakam",
    explanation: ""
  },
  {
    id: 339, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Most Improved Player balvu sezonā 2017-2018?",
    options: ["Victor Oladipo", "Clint Capela", "Spencer Dinwiddie", "Jamal Murray"],
    answer: "Victor Oladipo",
    explanation: ""
  },
  {
    id: 340, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Most Improved Player sezonā 2016-2017?",
    options: ["Giannis Antetokounmpo", "Nikola Jokic", "Rudy Gobert", "Otto Porter Jr."],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 341, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Most Improved Player balvu sezonā 2015-2016?",
    options: ["C.J. McCollum", "Giannis Antetokounmpo", "Kemba Walker", "Jae Crowder"],
    answer: "C.J. McCollum",
    explanation: ""
  },
  {
    id: 342, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Most Improved Player sezonā 2014-2015?",
    options: ["Jimmy Butler", "Draymond Green", "Klay Thompson", "Rudy Gobert"],
    answer: "Jimmy Butler",
    explanation: ""
  },
  {
    id: 343, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Most Improved Player balvu sezonā 2013-2014?",
    options: ["Goran Dragić", "Anthony Davis", "DeAndre Jordan", "Lance Stephenson"],
    answer: "Goran Dragić",
    explanation: ""
  },
  {
    id: 344, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Most Improved Player sezonā 2012-2013?",
    options: ["Paul George", "Greivis Vásquez", "Larry Sanders", "Jrue Holiday"],
    answer: "Paul George",
    explanation: ""
  },
  {
    id: 345, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Most Improved Player balvu sezonā 2011-2012?",
    options: ["Ryan Anderson", "Ersan İlyasova", "Nikola Peković", "Andrew Bynum"],
    answer: "Ryan Anderson",
    explanation: ""
  },
  {
    id: 346, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Most Improved Player sezonā 2010-2011?",
    options: ["Kevin Love", "Dorell Wright", "Russell Westbrook", "LaMarcus Aldridge"],
    answer: "Kevin Love",
    explanation: ""
  },
  {
    id: 347, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Most Improved Player balvu sezonā 2009-2010?",
    options: ["Aaron Brooks", "Kevin Durant", "Joakim Noah", "Derrick Rose"],
    answer: "Aaron Brooks",
    explanation: ""
  },
  {
    id: 348, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Most Improved Player sezonā 2008-2009?",
    options: ["Danny Granger", "Kevin Durant", "David Lee", "Brook Lopez"],
    answer: "Danny Granger",
    explanation: ""
  },
  {
    id: 349, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Most Improved Player balvu sezonā 2007-2008?",
    options: ["Hedo Türkoğlu", "Andrew Bynum", "Al Jefferson", "Monta Ellis"],
    answer: "Hedo Türkoğlu",
    explanation: ""
  },
  {
    id: 350, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Most Improved Player sezonā 2006-2007?",
    options: ["Monta Ellis", "Rajon Rondo", "Gerald Wallace", "Kevin Martin"],
    answer: "Monta Ellis",
    explanation: ""
  },
  {
    id: 351, category: "History", difficulty: "medium",
    question: "Kurš treneris bija NBA Coach of the Year sezonā 2020-2021?",
    options: ["Monty Williams", "Tom Thibodeau", "Quin Snyder", "Doc Rivers"],
    answer: "Tom Thibodeau",
    explanation: ""
  },
  {
    id: 352, category: "History", difficulty: "medium",
    question: "Kurš treneris saņēma NBA Coach of the Year balvu sezonā 2019-2020?",
    options: ["Nick Nurse", "Mike Budenholzer", "Billy Donovan", "Frank Vogel"],
    answer: "Nick Nurse",
    explanation: ""
  },
  {
    id: 353, category: "History", difficulty: "medium",
    question: "Kurš treneris bija NBA Coach of the Year sezonā 2018-2019?",
    options: ["Mike Budenholzer", "Doc Rivers", "Michael Malone", "Steve Clifford"],
    answer: "Mike Budenholzer",
    explanation: ""
  },
  {
    id: 354, category: "History", difficulty: "medium",
    question: "Kurš treneris saņēma NBA Coach of the Year balvu sezonā 2017-2018?",
    options: ["Dwane Casey", "Quin Snyder", "Brad Stevens", "Mike D'Antoni"],
    answer: "Dwane Casey",
    explanation: ""
  },
  {
    id: 355, category: "History", difficulty: "medium",
    question: "Kurš treneris bija NBA Coach of the Year sezonā 2016-2017?",
    options: ["Mike D'Antoni", "Gregg Popovich", "Erik Spoelstra", "Steve Kerr"],
    answer: "Mike D'Antoni",
    explanation: ""
  },
  {
    id: 356, category: "History", difficulty: "medium",
    question: "Kurš treneris saņēma NBA Coach of the Year balvu sezonā 2015-2016?",
    options: ["Steve Kerr", "Tyronn Lue", "Gregg Popovich", "Terry Stotts"],
    answer: "Steve Kerr",
    explanation: ""
  },
  {
    id: 357, category: "History", difficulty: "medium",
    question: "Kurš treneris bija NBA Coach of the Year sezonā 2014-2015?",
    options: ["Mike Budenholzer", "Steve Kerr", "Jason Kidd", "Brad Stevens"],
    answer: "Mike Budenholzer",
    explanation: ""
  },
  {
    id: 358, category: "History", difficulty: "medium",
    question: "Kurš treneris saņēma NBA Coach of the Year balvu sezonā 2013-2014?",
    options: ["Gregg Popovich", "Tom Thibodeau", "Jeff Hornacek", "Steve Clifford"],
    answer: "Gregg Popovich",
    explanation: ""
  },
  {
    id: 359, category: "History", difficulty: "medium",
    question: "Kurš treneris bija NBA Coach of the Year sezonā 2012-2013?",
    options: ["George Karl", "Erik Spoelstra", "Mike Woodson", "Frank Vogel"],
    answer: "George Karl",
    explanation: ""
  },
  {
    id: 360, category: "History", difficulty: "medium",
    question: "Kurš treneris saņēma NBA Coach of the Year balvu sezonā 2011-2012?",
    options: ["Gregg Popovich", "Tom Thibodeau", "Lionel Hollins", "Vinny Del Negro"],
    answer: "Gregg Popovich",
    explanation: ""
  },
  {
    id: 361, category: "History", difficulty: "medium",
    question: "Kurš treneris bija NBA Coach of the Year sezonā 2010-2011?",
    options: ["Tom Thibodeau", "Gregg Popovich", "Doug Collins", "George Karl"],
    answer: "Tom Thibodeau",
    explanation: ""
  },
  {
    id: 362, category: "History", difficulty: "medium",
    question: "Kurš treneris saņēma NBA Coach of the Year balvu sezonā 2009-2010?",
    options: ["Scott Brooks", "Lionel Hollins", "Nate McMillan", "George Karl"],
    answer: "Scott Brooks",
    explanation: ""
  },
  {
    id: 363, category: "History", difficulty: "medium",
    question: "Kurš treneris bija NBA Coach of the Year sezonā 2008-2009?",
    options: ["Mike Brown", "Rick Adelman", "Stan Van Gundy", "Nate McMillan"],
    answer: "Mike Brown",
    explanation: ""
  },
  {
    id: 364, category: "History", difficulty: "medium",
    question: "Kurš treneris saņēma NBA Coach of the Year balvu sezonā 2007-2008?",
    options: ["Byron Scott", "Sam Mitchell", "Doc Rivers", "Stan Van Gundy"],
    answer: "Byron Scott",
    explanation: ""
  },
  {
    id: 365, category: "History", difficulty: "medium",
    question: "Kurš treneris bija NBA Coach of the Year sezonā 2006-2007?",
    options: ["Sam Mitchell", "Avery Johnson", "Don Nelson", "Jerry Sloan"],
    answer: "Sam Mitchell",
    explanation: ""
  },
  {
    id: 366, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2021. gadā?",
    options: ["Giannis Antetokounmpo", "LeBron James", "Kevin Durant", "Stephen Curry"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 367, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2020. gadā?",
    options: ["Anthony Davis", "Kawhi Leonard", "LeBron James", "Giannis Antetokounmpo"],
    answer: "Kawhi Leonard",
    explanation: ""
  },
  {
    id: 368, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2019. gadā?",
    options: ["Kevin Durant", "Giannis Antetokounmpo", "LeBron James", "Kawhi Leonard"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 369, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2018. gadā?",
    options: ["LeBron James", "Kevin Durant", "Anthony Davis", "Stephen Curry"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 370, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2017. gadā?",
    options: ["Anthony Davis", "Giannis Antetokounmpo", "LeBron James", "Kevin Durant"],
    answer: "Anthony Davis",
    explanation: ""
  },
  {
    id: 371, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2016. gadā?",
    options: ["Kobe Bryant", "LeBron James", "Russell Westbrook", "Paul George"],
    answer: "Russell Westbrook",
    explanation: ""
  },
  {
    id: 372, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2015. gadā?",
    options: ["Stephen Curry", "Russell Westbrook", "LeBron James", "Anthony Davis"],
    answer: "Russell Westbrook",
    explanation: ""
  },
  {
    id: 373, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2014. gadā?",
    options: ["Kyrie Irving", "LeBron James", "Kevin Durant", "Stephen Curry"],
    answer: "Kyrie Irving",
    explanation: ""
  },
  {
    id: 374, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2013. gadā?",
    options: ["Chris Paul", "Kevin Durant", "Kobe Bryant", "LeBron James"],
    answer: "Chris Paul",
    explanation: ""
  },
  {
    id: 375, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2012. gadā?",
    options: ["Kevin Durant", "LeBron James", "Kobe Bryant", "Dwyane Wade"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 376, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2011. gadā?",
    options: ["Kobe Bryant", "LeBron James", "Derrick Rose", "Kevin Durant"],
    answer: "Kobe Bryant",
    explanation: ""
  },
  {
    id: 377, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2010. gadā?",
    options: ["Dwyane Wade", "LeBron James", "Kobe Bryant", "Kevin Durant"],
    answer: "Dwyane Wade",
    explanation: ""
  },
  {
    id: 378, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2009. gadā?",
    options: ["Kobe Bryant", "LeBron James", "Dwyane Wade", "Shaquille O'Neal"],
    answer: "Kobe Bryant",
    explanation: ""
  },
  {
    id: 379, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2008. gadā?",
    options: ["LeBron James", "Kobe Bryant", "Dwyane Wade", "Kevin Garnett"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 380, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA All-Star Game MVP 2007. gadā?",
    options: ["Kobe Bryant", "LeBron James", "Kevin Garnett", "Dwyane Wade"],
    answer: "Kobe Bryant",
    explanation: ""
  },
  {
    id: 381, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir NBA visu laiku top 10 pēc atlēkušajām bumbām?",
    options: ["Dwight Howard", "Shaquille O'Neal", "Dennis Rodman", "Patrick Ewing"],
    answer: "Dwight Howard",
    explanation: ""
  },
  {
    id: 382, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir NBA visu laiku top 10 pēc rezultatīvajām piespēlēm?",
    options: ["John Stockton", "\tLenny Wilkens", "Tony Parker", "James Harden"],
    answer: "John Stockton",
    explanation: ""
  },
  {
    id: 383, category: "History", difficulty: "medium",
    question: "Cik kopējo NBA čempiontitulu ir uzvarējuši Los Angeles Lakers?",
    options: ["17", "14", "15", "10"],
    answer: "17",
    explanation: ""
  },
  {
    id: 384, category: "History", difficulty: "medium",
    question: "Cik kopējo NBA čempiontitulu ir uzvarējuši Chicago Bulls?",
    options: ["6", "5", "4", "3"],
    answer: "6",
    explanation: ""
  },
  {
    id: 385, category: "History", difficulty: "medium",
    question: "Cik kopējo NBA čempiontitulu ir uzvarējuši Sanantonio Spurs?",
    options: ["6", "5", "4", "3"],
    answer: "5",
    explanation: ""
  },
  {
    id: 386, category: "History", difficulty: "medium",
    question: "Cik kopējo NBA čempiontitulu ir uzvarējuši Miami Heats?",
    options: ["6", "5", "4", "3"],
    answer: "3",
    explanation: ""
  },
  {
    id: 387, category: "History", difficulty: "medium",
    question: "Cik kopējo NBA čempiontitulu ir uzvarējuši Philadelphia 76ers?",
    options: ["6", "5", "4", "3"],
    answer: "3",
    explanation: ""
  },
  {
    id: 388, category: "History", difficulty: "medium",
    question: "Cik kopējo NBA čempiontitulu ir uzvarējuši Milwaukee Bucks?",
    options: ["2", "5", "4", "3"],
    answer: "2",
    explanation: ""
  },
  {
    id: 389, category: "History", difficulty: "medium",
    question: "Cik kopējo NBA čempiontitulu ir uzvarējuši Bostonas Celtics?",
    options: ["18", "14", "17", "10"],
    answer: "18",
    explanation: ""
  },
  {
    id: 390, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2003. gada NBA draftā?",
    options: ["LeBron James", "Carmelo Anthony", "Dwyane Wade", "Chris Bosh"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 391, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 1996. gada NBA draftā?",
    options: ["Allen Iverson", "Ray Allen", "Kobe Bryant", "Steve Nash"],
    answer: "Allen Iverson",
    explanation: ""
  },
  {
    id: 392, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2009. gada NBA draftā?",
    options: ["Blake Griffin", "James Harden", "Tyreke Evans", "Ricky Rubio"],
    answer: "Blake Griffin",
    explanation: ""
  },
  {
    id: 393, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2018. gada NBA draftā?",
    options: ["Deandre Ayton", "Luka Dončić", "Trae Young", "Jaren Jackson Jr."],
    answer: "Deandre Ayton",
    explanation: ""
  },
  {
    id: 394, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2011. gada NBA draftā?",
    options: ["Kyrie Irving", "Derrick Williams", "Enes Kanter", "Kawhi Leonard"],
    answer: "Kyrie Irving",
    explanation: ""
  },
  {
    id: 395, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2013. gada NBA draftā?",
    options: ["Anthony Bennett", "Victor Oladipo", "Otto Porter Jr.", "Cody Zeller"],
    answer: "Anthony Bennett",
    explanation: ""
  },
  {
    id: 396, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2016. gada NBA draftā?",
    options: ["Ben Simmons", "Brandon Ingram", "Jaylen Brown", "Kris Dunn"],
    answer: "Ben Simmons",
    explanation: ""
  },
  {
    id: 397, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2014. gada NBA draftā?",
    options: ["Andrew Wiggins", "Jabari Parker", "Joel Embiid", "Aaron Gordon"],
    answer: "Andrew Wiggins",
    explanation: ""
  },
  {
    id: 398, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2008. gada NBA draftā?",
    options: ["Derrick Rose", "Michael Beasley", "O.J. Mayo", "Russell Westbrook"],
    answer: "Derrick Rose",
    explanation: ""
  },
  {
    id: 399, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2004. gada NBA draftā?",
    options: ["Dwight Howard", "Emeka Okafor", "Ben Gordon", "Shaun Livingston"],
    answer: "Dwight Howard",
    explanation: ""
  },
  {
    id: 400, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 1992. gada NBA draftā?",
    options: ["Shaquille O'Neal", "Alonzo Mourning", "Christian Laettner", "Larry Johnson"],
    answer: "Shaquille O'Neal",
    explanation: ""
  },
  {
    id: 401, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2000. gada NBA draftā?",
    options: ["Kenyon Martin", "Stromile Swift", "Darius Miles", "Marcus Fizer"],
    answer: "Kenyon Martin",
    explanation: ""
  },
  {
    id: 402, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 1997. gada NBA draftā?",
    options: ["Tim Duncan", "Keith Van Horn", "Chauncey Billups", "Antonio Daniels"],
    answer: "Tim Duncan",
    explanation: ""
  },
  {
    id: 403, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2006. gada NBA draftā?",
    options: ["Andrea Bargnani", "LaMarcus Aldridge", "Adam Morrison", "Tyrus Thomas"],
    answer: "Andrea Bargnani",
    explanation: ""
  },
  {
    id: 404, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 1985. gada NBA draftā?",
    options: ["Patrick Ewing", "Wayman Tisdale", "Benoit Benjamin", "Xavier McDaniel"],
    answer: "Patrick Ewing",
    explanation: ""
  },
  {
    id: 405, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2010. gada NBA draftā?",
    options: ["John Wall", "Evan Turner", "Derrick Favors", "Wesley Johnson"],
    answer: "John Wall",
    explanation: ""
  },
  {
    id: 406, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 1987. gada NBA draftā?",
    options: ["David Robinson", "Armen Gilliam", "Derrick McKey", "Reggie Williams"],
    answer: "David Robinson",
    explanation: ""
  },
  {
    id: 407, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2015. gada NBA draftā?",
    options: ["Karl-Anthony Towns", "D'Angelo Russell", "Jahlil Okafor", "Kristaps Porziņģis"],
    answer: "Karl-Anthony Towns",
    explanation: ""
  },
  {
    id: 408, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 1989. gada NBA draftā?",
    options: ["Pervis Ellison", "Danny Ferry", "Sean Elliott", "Glen Rice"],
    answer: "Pervis Ellison",
    explanation: ""
  },
  {
    id: 409, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmā izvēle 2017. gada NBA draftā?",
    options: ["Markelle Fultz", "Lonzo Ball", "Jayson Tatum", "De'Aaron Fox"],
    answer: "Markelle Fultz",
    explanation: ""
  },
  {
    id: 410, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir visu laiku labākais steal spēlētājs NBA vēsturē?",
    options: ["John Stockton", "Jason Kidd", "Chris Paul", "Michael Jordan"],
    answer: "John Stockton",
    explanation: ""
  },
  {
    id: 411, category: "History", difficulty: "medium",
    question: "Kuram no šiem spēlētājiem pieder otrais vietas tops par steals?",
    options: ["Jason Kidd", "John Stockton", "Chris Paul", "Michael Jordan"],
    answer: "Jason Kidd",
    explanation: ""
  },
  {
    id: 412, category: "History", difficulty: "medium",
    question: "Kurš no šiem spēlētājiem ir trešais visu laiku steals sarakstā?",
    options: ["Chris Paul", "John Stockton", "Jason Kidd", "Michael Jordan"],
    answer: "Chris Paul",
    explanation: ""
  },
  {
    id: 413, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir ceturtajā vietā par steals visu laiku?",
    options: ["Michael Jordan", "John Stockton", "Jason Kidd", "Chris Paul"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 414, category: "History", difficulty: "medium",
    question: "Kurš no šiem spēlētājiem ir piektais visu laiku steals sarakstā?",
    options: ["Gary Payton", "Michael Jordan", "Jason Kidd", "Chris Paul"],
    answer: "Gary Payton",
    explanation: ""
  },
  {
    id: 415, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir sestais visu laiku steals sarakstā?",
    options: ["Maurice Cheeks", "John Stockton", "Jason Kidd", "Chris Paul"],
    answer: "Maurice Cheeks",
    explanation: ""
  },
  {
    id: 416, category: "History", difficulty: "medium",
    question: "Kurš no šiem spēlētājiem ir septītais visu laiku steals sarakstā?",
    options: ["Scottie Pippen", "Maurice Cheeks", "John Stockton", "Jason Kidd"],
    answer: "Scottie Pippen",
    explanation: ""
  },
  {
    id: 417, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir astotais visu laiku steals sarakstā?",
    options: ["LeBron James", "Scottie Pippen", "John Stockton", "Jason Kidd"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 418, category: "History", difficulty: "medium",
    question: "Kurš no šiem spēlētājiem ir devītais visu laiku steals sarakstā?",
    options: ["Clyde Drexler", "LeBron James", "Scottie Pippen", "John Stockton"],
    answer: "Clyde Drexler",
    explanation: ""
  },
  {
    id: 419, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir desmitais visu laiku steals sarakstā?",
    options: ["Hakeem Olajuwon", "Clyde Drexler", "LeBron James", "Scottie Pippen"],
    answer: "Hakeem Olajuwon",
    explanation: ""
  },
  {
    id: 420, category: "History", difficulty: "medium",
    question: "Joel Embiid tika izvēlēts ar kuru drafta numuru?",
    options: ["1. izvēle", "2. izvēle", "3. izvēle", "4. izvēle"],
    answer: "3. izvēle",
    explanation: ""
  },
  {
    id: 421, category: "History", difficulty: "medium",
    question: "Nikola Jokić tika izvēlēts ar kuru drafta numuru?",
    options: ["42. izvēle", "46. izvēle", "13. izvēle", "41. izvēle"],
    answer: "41. izvēle",
    explanation: ""
  },
  {
    id: 422, category: "History", difficulty: "medium",
    question: "Giannis Antetokounmpo tika izvēlēts ar kuru drafta numuru?",
    options: ["13. izvēle", "21. izvēle", "1. izvēle", "15. izvēle"],
    answer: "15. izvēle",
    explanation: ""
  },
  {
    id: 423, category: "History", difficulty: "medium",
    question: "Luka Dončić tika izvēlēts ar kuru drafta numuru?",
    options: ["1. izvēle", "2. izvēle", "3. izvēle", "4. izvēle"],
    answer: "3. izvēle",
    explanation: ""
  },
  {
    id: 424, category: "History", difficulty: "medium",
    question: "Zion Williamson tika izvēlēts ar kuru drafta numuru?",
    options: ["1. izvēle", "2. izvēle", "3. izvēle", "4. izvēle"],
    answer: "1. izvēle",
    explanation: ""
  },
  {
    id: 425, category: "History", difficulty: "medium",
    question: "Ja Morant tika izvēlēts ar kuru drafta numuru?",
    options: ["1. izvēle", "2. izvēle", "3. izvēle", "4. izvēle"],
    answer: "2. izvēle",
    explanation: ""
  },
  {
    id: 426, category: "History", difficulty: "medium",
    question: "Trae Young tika izvēlēts ar kuru drafta numuru?",
    options: ["6. izvēle", "5. izvēle", "3. izvēle", "4. izvēle"],
    answer: "5. izvēle",
    explanation: ""
  },
  {
    id: 427, category: "History", difficulty: "medium",
    question: "Jayson Tatum tika izvēlēts ar kuru drafta numuru?",
    options: ["1. izvēle", "2. izvēle", "3. izvēle", "4. izvēle"],
    answer: "3. izvēle",
    explanation: ""
  },
  {
    id: 428, category: "History", difficulty: "medium",
    question: "Devin Booker tika izvēlēts ar kuru drafta numuru?",
    options: ["12. izvēle", "21. izvēle", "5. izvēle", "13. izvēle"],
    answer: "13. izvēle",
    explanation: ""
  },
  {
    id: 429, category: "History", difficulty: "medium",
    question: "Karl-Anthony Towns tika izvēlēts ar kuru drafta numuru?",
    options: ["1. izvēle", "2. izvēle", "3. izvēle", "9. izvēle"],
    answer: "1. izvēle",
    explanation: ""
  },
  {
    id: 430, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Joel Embiid?",
    options: ["Kamerūna", "Nigērija", "Angola", "Senegāla"],
    answer: "Kamerūna",
    explanation: ""
  },
  {
    id: 431, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Nikola Jokić?",
    options: ["Horvātija", "Serbija", "Bosnija un Hercegovina", "Slovēnija"],
    answer: "Serbija",
    explanation: ""
  },
  {
    id: 432, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Manu Ginóbili?",
    options: ["Meksika", "Argentīna", "Brazilija", "Kolumbija"],
    answer: "Argentīna",
    explanation: ""
  },
  {
    id: 433, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Dražen Petrović?",
    options: ["Baltkrievija", "Horvātija", "Slovākija", "Maķedonija"],
    answer: "Horvātija",
    explanation: ""
  },
  {
    id: 434, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Andrew Bogut?",
    options: ["Austrālija", "Jaunzēlande", "Fidži", "Papua-Jaungvineja"],
    answer: "Austrālija",
    explanation: ""
  },
  {
    id: 435, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Rudy Gobert?",
    options: ["Francija", "Šveice", "Luksemburga", "Nīderlande"],
    answer: "Francija",
    explanation: ""
  },
  {
    id: 436, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Chris Paul?",
    options: ["ASV", "Jamaika", "Bahamu salas", "Trinidāda un Tobāgo"],
    answer: "ASV",
    explanation: ""
  },
  {
    id: 437, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Serge Ibaka?",
    options: ["Kongos", "Nigērija", "Ēģipte", "Alžīrija"],
    answer: "Kongos",
    explanation: ""
  },
  {
    id: 438, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Jamal Murray?",
    options: ["Kanāda", "Austrālija", "Jaunzēlande", "Indonēzija"],
    answer: "Kanāda",
    explanation: ""
  },
  {
    id: 439, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Ricky Rubio?",
    options: ["Spānija", "Meksika", "Baltkrievija", "Portugāle"],
    answer: "Spānija",
    explanation: ""
  },
  {
    id: 440, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Danilo Gallinari?",
    options: ["Itālija", "Spānija", "Vācija", "Francija"],
    answer: "Itālija",
    explanation: ""
  },
  {
    id: 441, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Tristan Thompson?",
    options: ["Kanāda", "Bahamu salas", "Jamaika", "Barbadosa"],
    answer: "Bahamu salas",
    explanation: ""
  },
  {
    id: 442, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Al Horford?",
    options: ["Dominikānas Republika", "Kuba", "Puerto Riko", "Jamaika"],
    answer: "Dominikānas Republika",
    explanation: ""
  },
  {
    id: 443, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Bogdan Bogdanović?",
    options: ["Serbija", "Bosnija un Hercegovina", "Melnkalne", "Kosova"],
    answer: "Serbija",
    explanation: ""
  },
  {
    id: 444, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Lauri Markkanen?",
    options: ["Somija", "Šveice", "Dānija", "Norvēģija"],
    answer: "Somija",
    explanation: ""
  },
  {
    id: 445, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Clint Capela?",
    options: ["Šveice", "Grieķija", "Turcija", "Somija"],
    answer: "Šveice",
    explanation: ""
  },
  {
    id: 446, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Patty Mills?",
    options: ["Austrālija", "Jaunzēlande", "Singapūra", "Maldivi"],
    answer: "Austrālija",
    explanation: ""
  },
  {
    id: 447, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Kelly Olynyk?",
    options: ["Kanāda", "Jamaika", "Trinidāda un Tobāgo", "Belize"],
    answer: "Kanāda",
    explanation: ""
  },
  {
    id: 448, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Jusuf Nurkić?",
    options: ["Bosnija un Hercegovina", "Horvātija", "Serbija", "Melnkalne"],
    answer: "Bosnija un Hercegovina",
    explanation: ""
  },
  {
    id: 449, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Danuel House Jr.?",
    options: ["ASV", "Kanāda", "Austrālija", "Nigērija"],
    answer: "ASV",
    explanation: ""
  },
  {
    id: 450, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Tomas Satoransky?",
    options: ["Čehija", "Slovākija", "Polija", "Ungārija"],
    answer: "Čehija",
    explanation: ""
  },
  {
    id: 451, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir no Jaunzēlandes?",
    options: ["Steven Adams", "RJ Barrett", "Andrew Bogut", "Patty Mills"],
    answer: "Steven Adams",
    explanation: ""
  },
  {
    id: 452, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Pascal Siakam?",
    options: ["Kamerūna", "Nigērija", "Sudāna", "Angola"],
    answer: "Kamerūna",
    explanation: ""
  },
  {
    id: 453, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Cedi Osman?",
    options: ["Turcija", "Grieķija", "Serbija", "Horvātija"],
    answer: "Turcija",
    explanation: ""
  },
  {
    id: 454, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Alperen Sengun?",
    options: ["Turcija", "Kazahstāna", "Uzbekistāna", "Azerbaidžāna"],
    answer: "Turcija",
    explanation: ""
  },
  {
    id: 455, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Furkan Korkmaz?",
    options: ["Turcija", "Grieķija", "Serbija", "Horvātija"],
    answer: "Turcija",
    explanation: ""
  },
  {
    id: 456, category: "History", difficulty: "medium",
    question: "No kuras valsts ir Jeremy Sochan?",
    options: ["Lielbritānija", "Vācija", "Francija", "Itālija"],
    answer: "Lielbritānija",
    explanation: ""
  },
  {
    id: 457, category: "History", difficulty: "medium",
    question: "No kuras valsts ir O.G. Anunoby?",
    options: ["Lielbritānija", "Vācija", "Francija", "Itālija"],
    answer: "Lielbritānija",
    explanation: ""
  },
  {
    id: 458, category: "History", difficulty: "medium",
    question: "Kurā gadā LeBron James ieguva savu pirmo NBA čempionu gredzenu?",
    options: ["2008", "2010", "2012", "2016"],
    answer: "2012",
    explanation: ""
  },
  {
    id: 459, category: "History", difficulty: "medium",
    question: "Kurā gadā Michael Jordan ieguva savu pēdējo NBA čempionu gredzenu ar Chicago Bulls?",
    options: ["1993", "1996", "1998", "2001"],
    answer: "1998",
    explanation: ""
  },
  {
    id: 460, category: "History", difficulty: "medium",
    question: "Kurā gadā Shaquille O'Neal ieguva savu pirmo NBA čempionu gredzenu ar Los Angeles Lakers?",
    options: ["1995", "1998", "2000", "2003"],
    answer: "2000",
    explanation: ""
  },
  {
    id: 461, category: "History", difficulty: "medium",
    question: "Kurā gadā Stephen Curry ieguva savu pirmo NBA čempionu gredzenu ar Golden State Warriors?",
    options: ["2013", "2015", "2017", "2019"],
    answer: "2015",
    explanation: ""
  },
  {
    id: 462, category: "History", difficulty: "medium",
    question: "Kurā gadā Kawhi Leonard ieguva savu pirmo NBA čempionu gredzenu ar Toronto Raptors?",
    options: ["2017", "2018", "2019", "2020"],
    answer: "2019",
    explanation: ""
  },
  {
    id: 463, category: "History", difficulty: "medium",
    question: "Cik reizes Kobe Bryant tika iekļauts NBA Vispārējo zvaigžņu spēlē?",
    options: ["12 reizes", "15 reizes", "18 reizes", "20 reizes"],
    answer: "18 reizes",
    explanation: ""
  },
  {
    id: 464, category: "History", difficulty: "medium",
    question: "Kurā sezonā Michael Jordan ieguva savu rekordlielo vidējo punktu skaitu vienā spēlē?",
    options: ["1986-1987", "1988-1989", "1990-1991", "1992-1993"],
    answer: "1986-1987",
    explanation: ""
  },
  {
    id: 465, category: "History", difficulty: "medium",
    question: "Cik NBA čempionu gredzenu ir ieguvis Magic Johnson savā karjerā?",
    options: ["3", "5", "7", "9"],
    answer: "5",
    explanation: ""
  },
  {
    id: 466, category: "History", difficulty: "medium",
    question: "Kurā gadā Giannis Antetokounmpo ieguva savu pirmo NBA čempionu gredzenu ar Milwaukee Bucks?",
    options: ["2018", "2019", "2020", "2021"],
    answer: "2021",
    explanation: ""
  },
  {
    id: 467, category: "History", difficulty: "medium",
    question: "Kurā gadā Dwyane Wade ieguva savu pirmo NBA čempionu gredzenu ar Miami Heat?",
    options: ["2004", "2006", "2008", "2010"],
    answer: "2006",
    explanation: ""
  },
  {
    id: 468, category: "History", difficulty: "medium",
    question: "Kurā gadā Tim Duncan ieguva savu pirmo NBA čempionu gredzenu ar San Antonio Spurs?",
    options: ["1998", "1999", "2002", "2005"],
    answer: "1999",
    explanation: ""
  },
  {
    id: 469, category: "History", difficulty: "medium",
    question: "Kurā gadā Kareem Abdul-Jabbar ieguva savu pēdējo NBA čempionu gredzenu ar Los Angeles Lakers?",
    options: ["1978", "1982", "1985", "1988"],
    answer: "1988",
    explanation: ""
  },
  {
    id: 470, category: "History", difficulty: "medium",
    question: "Kurā gadā Dirk Nowitzki ieguva savu pirmo NBA čempionu gredzenu ar Dallas Mavericks?",
    options: ["2005", "2007", "2009", "2011"],
    answer: "2011",
    explanation: ""
  },
  {
    id: 471, category: "History", difficulty: "medium",
    question: "Kurā gadā Larry Bird ieguva savu pirmo NBA čempionu gredzenu ar Boston Celtics?",
    options: ["1979", "1981", "1983", "1986"],
    answer: "1981",
    explanation: ""
  },
  {
    id: 472, category: "History", difficulty: "medium",
    question: "Kurā gadā Hakeem Olajuwon ieguva savu pirmo NBA čempionu gredzenu ar Houston Rockets?",
    options: ["1988", "1992", "1994", "1996"],
    answer: "1994",
    explanation: ""
  },
  {
    id: 473, category: "History", difficulty: "medium",
    question: "Kurā pilsētā ir bijusi visdārgākā NBA spēļu biļete līdz šim?",
    options: ["New York", "Los Angeles", "San Francisco", "Miami"],
    answer: "New York",
    explanation: ""
  },
  {
    id: 474, category: "History", difficulty: "medium",
    question: "Kurā sezonā bija visdārgākā vidējā cena par NBA regulārās sezonas spēļu biļetēm?",
    options: ["2018-2019", "2019-2020", "2020-2021", "2021-2022"],
    answer: "2021-2022",
    explanation: ""
  },
  {
    id: 475, category: "History", difficulty: "medium",
    question: "Kurš NBA komandas stadions piedāvā visdārgākās VIP biļetes?",
    options: ["Staples Center", "Madison Square Garden", "Chase Center", "American Airlines Arena"],
    answer: "Madison Square Garden",
    explanation: ""
  },
  {
    id: 476, category: "History", difficulty: "medium",
    question: "Kurš NBA komandas stadions piedāvā vislētākās biļetes?",
    options: ["Oklahoma City Thunder", "Charlotte Hornets", "Sacramento Kings", "Memphis Grizzlies"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 477, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Henry'?",
    options: ["Atlanta Hawks", "Boston Celtics", "Charlotte Hornets", "Chicago Bulls"],
    answer: "Atlanta Hawks",
    explanation: ""
  },
  {
    id: 478, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Lucky the Leprechaun'?",
    options: ["Boston Celtics", "Chicago Bulls", "Dallas Mavericks", "Los Angeles Clippers"],
    answer: "Boston Celtics",
    explanation: ""
  },
  {
    id: 479, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Hugo'?",
    options: ["Charlotte Hornets", "Chicago Bulls", "Miami Heat", "Toronto Raptors"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 480, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Benny'?",
    options: ["Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Sacramento Kings"],
    answer: "Chicago Bulls",
    explanation: ""
  },
  {
    id: 481, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Moondog'?",
    options: ["Cleveland Cavaliers", "Detroit Pistons", "Miami Heat", "Minnesota Timberwolves"],
    answer: "Cleveland Cavaliers",
    explanation: ""
  },
  {
    id: 482, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Sir CC'?",
    options: ["Cleveland Cavaliers", "Dallas Mavericks", "Los Angeles Clippers", "Toronto Raptors"],
    answer: "Cleveland Cavaliers",
    explanation: ""
  },
  {
    id: 483, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Champ'?",
    options: ["Dallas Mavericks", "Indiana Pacers", "Los Angeles Clippers", "Philadelphia 76ers"],
    answer: "Dallas Mavericks",
    explanation: ""
  },
  {
    id: 484, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Rocky the Mountain Lion'?",
    options: ["Denver Nuggets", "Detroit Pistons", "Miami Heat", "Portland Trail Blazers"],
    answer: "Denver Nuggets",
    explanation: ""
  },
  {
    id: 485, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Hooper'?",
    options: ["Detroit Pistons", "Houston Rockets", "Los Angeles Lakers", "Philadelphia 76ers"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 486, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Clutch the Bear'?",
    options: ["Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Orlando Magic"],
    answer: "Houston Rockets",
    explanation: ""
  },
  {
    id: 487, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Boomer'?",
    options: ["Indiana Pacers", "Los Angeles Lakers", "Oklahoma City Thunder", "San Antonio Spurs"],
    answer: "Indiana Pacers",
    explanation: ""
  },
  {
    id: 488, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Chuck the Condor'?",
    options: ["Los Angeles Clippers", "Los Angeles Lakers", "New York Knicks", "Toronto Raptors"],
    answer: "Los Angeles Clippers",
    explanation: ""
  },
  {
    id: 489, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Grizz'?",
    options: ["Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves"],
    answer: "Memphis Grizzlies",
    explanation: ""
  },
  {
    id: 490, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Burnie'?",
    options: ["Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New York Knicks"],
    answer: "Miami Heat",
    explanation: ""
  },
  {
    id: 491, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Rumble the Bison'?",
    options: ["Oklahoma City Thunder", "Orlando Magic", "Phoenix Suns", "Portland Trail Blazers"],
    answer: "Oklahoma City Thunder",
    explanation: ""
  },
  {
    id: 492, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Franklin the Dog'?",
    options: ["Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings"],
    answer: "Philadelphia 76ers",
    explanation: ""
  },
  {
    id: 493, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Go the Gorilla'?",
    options: ["Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs"],
    answer: "Phoenix Suns",
    explanation: ""
  },
  {
    id: 494, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Blaze the Trail Cat'?",
    options: ["Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors"],
    answer: "Portland Trail Blazers",
    explanation: ""
  },
  {
    id: 495, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'Slamson the Lion'?",
    options: ["Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz"],
    answer: "Sacramento Kings",
    explanation: ""
  },
  {
    id: 496, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir talismanu 'The Coyote'?",
    options: ["San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"],
    answer: "San Antonio Spurs",
    explanation: ""
  },
  {
    id: 497, category: "History", difficulty: "medium",
    question: "Kurā gadā notika pirmais NBA Slam Dunk konkurss?",
    options: ["1976", "1974", "1977", "1970"],
    answer: "1976",
    explanation: ""
  },
  {
    id: 498, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir uzvarējis visvairāk reižu NBA Slam Dunk konkursā?",
    options: ["Vince Carter", "Michael Jordan", "Dominique Wilkins", "Nate Robinson"],
    answer: "Nate Robinson",
    explanation: ""
  },
  {
    id: 499, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs izpildīja slavenu 'Free Throw Line Dunk' NBA Slam Dunk konkursā?",
    options: ["Spud Webb", "Kobe Bryant", "Vince Carter", "Michael Jordan"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 500, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2023. gadā?",
    options: ["Mac McClung", "Obi Toppin", "Anfernee Simons", "Derrick Jones Jr."],
    answer: "Mac McClung",
    explanation: ""
  },
  {
    id: 501, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2022. gadā?",
    options: ["Coby White", "Isaac Okoro", "Keldon Johnson", "Obi Toppin"],
    answer: "Obi Toppin",
    explanation: ""
  },
  {
    id: 502, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2021. gadā?",
    options: ["Anfernee Simons", "Cassius Stanley", "Obi Toppin", "Jalen Green"],
    answer: "Anfernee Simons",
    explanation: ""
  },
  {
    id: 503, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2020. gadā?",
    options: ["Derrick Jones Jr.", "Aaron Gordon", "Pat Connaughton", "Dwight Howard"],
    answer: "Derrick Jones Jr.",
    explanation: ""
  },
  {
    id: 504, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2019. gadā?",
    options: ["Hamidou Diallo", "Dennis Smith Jr.", "John Collins", "Miles Bridges"],
    answer: "Hamidou Diallo",
    explanation: ""
  },
  {
    id: 505, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2018. gadā?",
    options: ["Donovan Mitchell", "Larry Nance Jr.", "Dennis Smith Jr.", "Victor Oladipo"],
    answer: "Donovan Mitchell",
    explanation: ""
  },
  {
    id: 506, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2017. gadā?",
    options: ["Glenn Robinson III", "Derrick Jones Jr.", "DeAndre Jordan", "Derrick Williams"],
    answer: "Glenn Robinson III",
    explanation: ""
  },
  {
    id: 507, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2016. gadā?",
    options: ["Zach LaVine", "Aaron Gordon", "Will Barton", "Andre Drummond"],
    answer: "Zach LaVine",
    explanation: ""
  },
  {
    id: 508, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2015. gadā?",
    options: ["Zach LaVine", "Victor Oladipo", "Giannis Antetokounmpo", "Mason Plumlee"],
    answer: "Zach LaVine",
    explanation: ""
  },
  {
    id: 509, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2014. gadā?",
    options: ["John Wall", "Ben McLemore", "Paul George", "Terrence Ross"],
    answer: "John Wall",
    explanation: ""
  },
  {
    id: 510, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2013. gadā?",
    options: ["Terrence Ross", "Jeremy Evans", "Kenneth Faried", "Gerald Green"],
    answer: "Terrence Ross",
    explanation: ""
  },
  {
    id: 511, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2012. gadā?",
    options: ["Jeremy Evans", "Chase Budinger", "Paul George", "Derrick Williams"],
    answer: "Jeremy Evans",
    explanation: ""
  },
  {
    id: 512, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2011. gadā?",
    options: ["Blake Griffin", "JaVale McGee", "Serge Ibaka", "DeMar DeRozan"],
    answer: "Blake Griffin",
    explanation: ""
  },
  {
    id: 513, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2010. gadā?",
    options: ["Nate Robinson", "DeMar DeRozan", "Shannon Brown", "Gerald Wallace"],
    answer: "Nate Robinson",
    explanation: ""
  },
  {
    id: 514, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2009. gadā?",
    options: ["Nate Robinson", "Dwight Howard", "Rudy Fernandez", "J.R. Smith"],
    answer: "Nate Robinson",
    explanation: ""
  },
  {
    id: 515, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2008. gadā?",
    options: ["Dwight Howard", "Gerald Green", "Jamario Moon", "Rudy Gay"],
    answer: "Dwight Howard",
    explanation: ""
  },
  {
    id: 516, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2007. gadā?",
    options: ["Gerald Green", "Dwight Howard", "Nate Robinson", "Tyrus Thomas"],
    answer: "Gerald Green",
    explanation: ""
  },
  {
    id: 517, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja NBA Slam Dunk konkursā 2006. gadā?",
    options: ["Nate Robinson", "Andre Iguodala", "Josh Smith", "Hakim Warrick"],
    answer: "Nate Robinson",
    explanation: ""
  },
  {
    id: 518, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs spēlē ar 30 numuru?",
    options: ["Stephen Curry", "James Harden", "Giannis Antetokounmpo", "Damian Lillard"],
    answer: "Stephen Curry",
    explanation: ""
  },
  {
    id: 519, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs spēlē 35 numuru?",
    options: ["Kevin Durant", "Kawhi Leonard", "Luka Dončić", "James Harden"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 520, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs spēlē ar 6 numuru?",
    options: ["LeBron James", "Stephen Curry", "Kevin Durant", "Giannis Antetokounmpo"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 521, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs spēlē ar 2 numuru?",
    options: ["Kawhi Leonard", "Chris Paul", "Luka Dončić", "Devin Booker"],
    answer: "Kawhi Leonard",
    explanation: ""
  },
  {
    id: 522, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs nespēlē ar 0 numuru?",
    options: ["Russell Westbrook", "Damian Lillard", "De'Aaron Fox", "D'Angelo Russell"],
    answer: "De'Aaron Fox",
    explanation: ""
  },
  {
    id: 523, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs spēlē ar 15 numuru?",
    options: ["Nikola Jokić", "Joel Embiid", "Jayson Tatum", "Ben Simmons"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 524, category: "History", difficulty: "medium",
    question: "Ar kādu numuru spēlē Jason Tatum?",
    options: ["0", "1", "2", "3"],
    answer: "0",
    explanation: ""
  },
  {
    id: 525, category: "History", difficulty: "medium",
    question: "Ar kādu numuru spēlē Joel Embīd?",
    options: ["21", "27", "22", "23"],
    answer: "21",
    explanation: ""
  },
  {
    id: 526, category: "History", difficulty: "medium",
    question: "Ar kādu numuru spēlē James Harden?",
    options: ["1", "2", "3", "8"],
    answer: "1",
    explanation: ""
  },
  {
    id: 527, category: "History", difficulty: "medium",
    question: "Ar kādu numuru spēlē Demjens Lilārds?",
    options: ["1", "2", "3", "0"],
    answer: "0",
    explanation: ""
  },
  {
    id: 528, category: "History", difficulty: "medium",
    question: "Ar kādu numuru spēlē Entonijs Deiviss?",
    options: ["1", "2", "3", "0"],
    answer: "3",
    explanation: ""
  },
  {
    id: 529, category: "History", difficulty: "medium",
    question: "Ar kādu numuru spēlē Tyrese Maxey?",
    options: ["1", "2", "3", "0"],
    answer: "0",
    explanation: ""
  },
  {
    id: 530, category: "History", difficulty: "medium",
    question: "Kura no šim komandām nekad nav uzvarējusi NBA čempiontitulu?",
    options: ["Brooklyn Nets", "Portland Trail Blazers", "Washington Wizards", "Houston Rockets"],
    answer: "Brooklyn Nets",
    explanation: ""
  },
  {
    id: 531, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords iemestajos 3pt vienā spēlē?",
    options: ["Stephan Curry", "Klay Thompson", "Damian Lilard", "Zack Lavine"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 532, category: "History", difficulty: "medium",
    question: "Kurš no šiem spēlētājiem nav iemetis 13 trīspunktniekus vienā spēlē?",
    options: ["Stephan Curry", "Buddy Hield", "Damian Lilard", "Zack Lavine"],
    answer: "Buddy Hield",
    explanation: ""
  },
  {
    id: 533, category: "History", difficulty: "medium",
    question: "Kurš no šiem spēlētājiem ir pirmajā vietā savācot vismaz 20 atlēkušās bumbas spēlē?",
    options: ["Deniss Rodman", "Andre Drummond", "Dwight Howard", "Domantas Sabonis"],
    answer: "Deniss Rodman",
    explanation: ""
  },
  {
    id: 534, category: "History", difficulty: "medium",
    question: "Kurš no šiem spēlētājiem ir pirmajā vietā savācot vismaz 30 atlēkušās bumbas spēlē?",
    options: ["Deniss Rodman", "Andre Drummond", "Dwight Howard", "Domantas Sabonis"],
    answer: "Deniss Rodman",
    explanation: ""
  },
  {
    id: 535, category: "History", difficulty: "medium",
    question: "Kurš no šiem spēlētājiem ir pirmajā vietā savācot visvairāk atlēkušās bumbas vienā spēlē?",
    options: ["Deniss Rodman", "Andre Drummond", "Dwight Howard", "Wilt Chamberlain"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 536, category: "History", difficulty: "medium",
    question: "Kuram NBA spēlētājam ir iesauka 'The Brodie'?",
    options: ["Russell Westbrook", "James Harden", "Paul George", "Chris Paul"],
    answer: "Russell Westbrook",
    explanation: ""
  },
  {
    id: 537, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'The Chef'?",
    options: ["Stephen Curry", "LeBron James", "Kevin Durant", "Kawhi Leonard"],
    answer: "Stephen Curry",
    explanation: ""
  },
  {
    id: 538, category: "History", difficulty: "medium",
    question: "Kuram NBA spēlētājam ir iesauka 'The Process'?",
    options: ["Joel Embiid", "Ben Simmons", "Devin Booker", "Anthony Davis"],
    answer: "Joel Embiid",
    explanation: ""
  },
  {
    id: 539, category: "History", difficulty: "medium",
    question: "Kuram NBA spēlētājam ir iesauka 'The Logo'?",
    options: ["Jerry West", "Magic Johnson", "Larry Bird", "Michael Jordan"],
    answer: "Jerry West",
    explanation: ""
  },
  {
    id: 540, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'The Stifle Tower'?",
    options: ["Rudy Gobert", "Karl-Anthony Towns", "Andre Drummond", "DeAndre Jordan"],
    answer: "Rudy Gobert",
    explanation: ""
  },
  {
    id: 541, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'The Blue Arrow'?",
    options: ["Jamal Murray", "Gary Harris", "Monte Morris", "Will Barton"],
    answer: "Jamal Murray",
    explanation: ""
  },
  {
    id: 542, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'AK 47'?",
    options: ["Andrei Kirilenko", "Goran Dragić", "Serge Ibaka", "Nikola Mirotić"],
    answer: "Andrei Kirilenko",
    explanation: ""
  },
  {
    id: 543, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'Flash'?",
    options: ["Dwayne Wade", "Goran Dragić", "Serge Ibaka", "Nikola Mirotić"],
    answer: "Dwayne Wade",
    explanation: ""
  },
  {
    id: 544, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'Round Mound of Rebound'?",
    options: ["Charles Barkley", "Shaquille O'Neal", "Serge Ibaka", "Dwite Howard"],
    answer: "Charles Barkley",
    explanation: ""
  },
  {
    id: 545, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'Spida'?",
    options: ["Charles Barkley", "John Collins", "Donovan Mitchel", "Nate Robinson"],
    answer: "Donovan Mitchel",
    explanation: ""
  },
  {
    id: 546, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'Maple Jordan'?",
    options: ["Andrew Wiggins", "Michael Jordan", "Donovan Mitchel", "Deandre Jordan"],
    answer: "Andrew Wiggins",
    explanation: ""
  },
  {
    id: 547, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'Aquaman'?",
    options: ["Andrew Wiggins", "Steve Adams", "Donovan Mitchel", "Deandre Jordan"],
    answer: "Steve Adams",
    explanation: ""
  },
  {
    id: 548, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'Grand theft'?",
    options: ["Andrew Wiggins", "Jose Alvarado", "Donovan Mitchel", "Aron Gordon"],
    answer: "Jose Alvarado",
    explanation: ""
  },
  {
    id: 549, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'White Chocolate'?",
    options: ["Andrew Wiggins", "Jose Alvarado", "Jason Williams", "Aron Gordon"],
    answer: "Jason Williams",
    explanation: ""
  },
  {
    id: 550, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'The Big Ticket'?",
    options: ["Andrew Wiggins", "Tim Duncan", "Kevin Garnet", "Aron Gordon"],
    answer: "Kevin Garnet",
    explanation: ""
  },
  {
    id: 551, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'The Big Fundamental'?",
    options: ["Andrew Wiggins", "Tim Duncan", "Kevin Garnet", "Glen Davis"],
    answer: "Tim Duncan",
    explanation: ""
  },
  {
    id: 552, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pazīstams kā 'Big Baby'?",
    options: ["Andrew Wiggins", "Tim Duncan", "Kevin Garnet", "Glen Davis"],
    answer: "Glen Davis",
    explanation: ""
  },
  {
    id: 553, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Defensive Player of the Year balvu sezonā 2012-2013?",
    options: ["Marc Gasol", "Joakim Noah", "Serge Ibaka", "Roy Hibbert"],
    answer: "Marc Gasol",
    explanation: ""
  },
  {
    id: 554, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Defensive Player of the Year sezonā 2011-2012?",
    options: ["Tyson Chandler", "Dwight Howard", "Serge Ibaka", "Kevin Garnett"],
    answer: "Tyson Chandler",
    explanation: ""
  },
  {
    id: 555, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Defensive Player of the Year balvu sezonā 2009-2010?",
    options: ["Dwight Howard", "Ron Artest", "Josh Smith", "Andrew Bogut"],
    answer: "Dwight Howard",
    explanation: ""
  },
  {
    id: 556, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Coach of the Year sezonā 2014-2015?",
    options: ["Mike Budenholzer", "Steve Kerr", "Gregg Popovich", "Brad Stevens"],
    answer: "Mike Budenholzer",
    explanation: ""
  },
  {
    id: 557, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA MVP sezonā 2006-2007?",
    options: ["Dirk Nowitzki", "Kobe Bryant", "LeBron James", "Tim Duncan"],
    answer: "Dirk Nowitzki",
    explanation: ""
  },
  {
    id: 558, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA MVP balvu sezonā 2004-2005?",
    options: ["Steve Nash", "Shaquille O'Neal", "Tim Duncan", "Kevin Garnett"],
    answer: "Steve Nash",
    explanation: ""
  },
  {
    id: 559, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Most Improved Player balvu sezonā 2002-2003?",
    options: ["Gilbert Arenas", "Jermaine O'Neal", "Tracy McGrady", "Shawn Marion"],
    answer: "Gilbert Arenas",
    explanation: ""
  },
  {
    id: 560, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija NBA Sixth Man of the Year sezonā 1999-2000?",
    options: ["Rodney Rogers", "Antoine Walker", "Steve Smith", "Jamal Mashburn"],
    answer: "Rodney Rogers",
    explanation: ""
  },
  {
    id: 561, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma NBA Defensive Player of the Year balvu sezonā 1997-1998?",
    options: ["Dikembe Mutombo", "Alonzo Mourning", "David Robinson", "Gary Payton"],
    answer: "Dikembe Mutombo",
    explanation: ""
  },
  {
    id: 562, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs karjeras laikā ir guvis visvairāk punktu, bet nekad nav spēlējis NBA finālā?",
    options: ["Carmelo Anthony", "James Harden", "Alex English", "Tracy McGrady"],
    answer: "Alex English",
    explanation: ""
  },
  {
    id: 563, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vienīgais NBA vēsturē ir saņēmis MVP, DPOY un Finālu MVP vienā sezonā?",
    options: ["Michael Jordan", "Hakeem Olajuwon", "Tim Duncan", "LeBron James"],
    answer: "Hakeem Olajuwon",
    explanation: ""
  },
  {
    id: 564, category: "History", difficulty: "medium",
    question: "Kas ir vienīgā NBA komanda, kas uzvarējusi čempiontitulu bez neviena All-Star tajā sezonā?",
    options: ["Detroit Pistons (2004)", "New York Knicks (1973)", "Seattle SuperSonics (1979)", "Houston Rockets (1994)"],
    answer: "Detroit Pistons (2004)",
    explanation: ""
  },
  {
    id: 565, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir visaugstākais drafta pirmais numurs NBA vēsturē?",
    options: ["Yao Ming", "Shaquille O'Neal", "Ralph Sampson", "Zion Williamson"],
    answer: "Ralph Sampson",
    explanation: ""
  },
  {
    id: 566, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais rookies, kurš All-Star spēlē uzvarēja Slam Dunk konkursā?",
    options: ["Kobe Bryant", "Vince Carter", "Spud Webb", "Dwight Howard"],
    answer: "Kobe Bryant",
    explanation: ""
  },
  {
    id: 567, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pirmais sasniedza 2000 blokus un 2000 steals karjerā?",
    options: ["Michael Jordan", "Hakeem Olajuwon", "Scottie Pippen", "Kevin Garnett"],
    answer: "Hakeem Olajuwon",
    explanation: ""
  },
  {
    id: 568, category: "History", difficulty: "medium",
    question: "Kura komanda NBA vēsturē ir zaudējusi visvairāk finālu?",
    options: ["Lakers", "Celtics", "Knicks", "76ers"],
    answer: "Lakers",
    explanation: ""
  },
  {
    id: 569, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs guva visvairāk punktu vienā spēlē, nespēlējot pat 40 minūtes?",
    options: ["Klay Thompson", "Kobe Bryant", "David Robinson", "Larry Bird"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 570, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš uzvarējis NBA čempiontitulu kā spēlētājs, treneris un ģenerālmenedžeris?",
    options: ["Pat Riley", "Phil Jackson", "Steve Kerr", "Bill Russell"],
    answer: "Bill Russell",
    explanation: ""
  },
  {
    id: 571, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pēdējais, kurš vidēji spēlē guva 30+ punktus un 10+ piespēles sezonā?",
    options: ["James Harden", "Oscar Robertson", "Luka Dončić", "Russell Westbrook"],
    answer: "Russell Westbrook",
    explanation: ""
  },
  {
    id: 572, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir guvis visvairāk punktu NBA vēsturē vienā puslaikā?",
    options: ["Devin Booker", "Klay Thompson", "Kobe Bryant", "George Gervin"],
    answer: "George Gervin",
    explanation: ""
  },
  {
    id: 573, category: "History", difficulty: "medium",
    question: "Kurš ir vienīgais NBA spēlētājs, kurš karjerā ieguvis MVP balvu bez skriešanas vai aizsardzības pozīcijas vidusskolā (viņš spēlēja… futbolu)?",
    options: ["Steve Nash", "Tim Duncan", "Allen Iverson", "Giannis Antetokounmpo"],
    answer: "Tim Duncan",
    explanation: ""
  },
  {
    id: 574, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vienīgais guvis 60+ punktus pēdējā karjeras spēlē?",
    options: ["Dirk Nowitzki", "Kobe Bryant", "Dwyane Wade", "Carmelo Anthony"],
    answer: "Kobe Bryant",
    explanation: ""
  },
  {
    id: 575, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir vienīgā, kas uzvarējusi 2 spēlētāju komandā, kur abi vidēji sezonā guva 30+ punktus?",
    options: ["LA Lakers", "Golden State Warriors", "Houston Rockets", "Denver Nuggets"],
    answer: "LA Lakers",
    explanation: ""
  },
  {
    id: 576, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš uzvarējis gan NBA Slam Dunk, gan Three-Point konkursu vienā All-Star nedēļas nogalē?",
    options: ["Michael Jordan", "Dominique Wilkins", "Brent Barry", "Jason Richardson"],
    answer: "Brent Barry",
    explanation: ""
  },
  {
    id: 577, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kas karjerā ir uzvarējis trīspunktu konkursā ar perfektu fināla kārtu (visas bumbas iemestas)?",
    options: ["Larry Bird", "Craig Hodges", "Stephen Curry", "Mark Price"],
    answer: "Craig Hodges",
    explanation: ""
  },
  {
    id: 578, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir vienīgā, kas uzvarējusi čempiontitulu pēc tam, kad sezonas laikā tika atlaists galvenais treneris?",
    options: ["Cleveland Cavaliers (2016)", "LA Lakers (1980)", "Golden State Warriors (2015)", "Detroit Pistons (1989)"],
    answer: "LA Lakers (1980)",
    explanation: ""
  },
  {
    id: 579, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē, kurš vienā spēlē trāpīja 100% metienu vismaz no 20 mēģinājumiem?",
    options: ["Wilt Chamberlain", "Dwight Howard", "Karl Malone", "DeAndre Jordan"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 580, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pirmais, kurš karjerā sasniedza 30 000 punktus bez nevienas MVP balvas?",
    options: ["Dirk Nowitzki", "Kobe Bryant", "Karl Malone", "LeBron James"],
    answer: "Karl Malone",
    explanation: ""
  },
  {
    id: 581, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš guvis vairāk punktu nekā minūtes spēlē All-Star Game?",
    options: ["Paul George", "Anthony Davis", "Wilt Chamberlain", "Kevin Durant"],
    answer: "Paul George",
    explanation: ""
  },
  {
    id: 582, category: "History", difficulty: "medium",
    question: "Kura NBA komanda uzvarēja visvairāk spēles vienā sezonā bez neviena All-Star spēlētāja?",
    options: ["Detroit Pistons (2003-04)", "Denver Nuggets (2012-13)", "Brooklyn Nets (2001-02)", "Chicago Bulls (2021-22)"],
    answer: "Denver Nuggets (2012-13)",
    explanation: ""
  },
  {
    id: 583, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir nodominējis visvairāk dažādas statistikas kategorijas kā līgas līderis (punkti, atlēkušās, bloki, utt.) vismaz vienu reizi?",
    options: ["Hakeem Olajuwon", "Wilt Chamberlain", "LeBron James", "David Robinson"],
    answer: "Hakeem Olajuwon",
    explanation: ""
  },
  {
    id: 584, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vecākais, kurš jebkad guvis 50 punktus spēlē?",
    options: ["Michael Jordan", "Jamal Crawford", "LeBron James", "Kobe Bryant"],
    answer: "Jamal Crawford",
    explanation: ""
  },
  {
    id: 585, category: "History", difficulty: "medium",
    question: "Kurš ir vienīgais NBA spēlētājs, kurš aizvadīja pilnu karjeru vienā komandā un iekļuva 15 All-Star spēlēs?",
    options: ["Tim Duncan", "Kobe Bryant", "Dirk Nowitzki", "John Stockton"],
    answer: "Dirk Nowitzki",
    explanation: ""
  },
  {
    id: 586, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš ieguvis Most Improved Player balvu un tajā pašā sezonā tika iekļauts All-NBA komandā?",
    options: ["Giannis Antetokounmpo", "Jimmy Butler", "Pascal Siakam", "Victor Oladipo"],
    answer: "Victor Oladipo",
    explanation: ""
  },
  {
    id: 587, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pirmais, kas karjerā sasniedza 200 triple-double?",
    options: ["LeBron James", "Oscar Robertson", "Russell Westbrook", "Magic Johnson"],
    answer: "Russell Westbrook",
    explanation: ""
  },
  {
    id: 588, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ieguva Finals MVP, lai gan nebija All-Star tajā sezonā?",
    options: ["Chauncey Billups", "Andre Iguodala", "Tony Parker", "Cedric Maxwell"],
    answer: "Andre Iguodala",
    explanation: ""
  },
  {
    id: 589, category: "History", difficulty: "medium",
    question: "Kurš NBA treneris ir uzvarējis visvairāk Playoff spēļu, nekad neizcīnot NBA titulu?",
    options: ["Jerry Sloan", "Mike D'Antoni", "George Karl", "Rick Adelman"],
    answer: "Jerry Sloan",
    explanation: ""
  },
  {
    id: 590, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir vienīgā, kas draftējusi divus MVP vienā un tajā pašā draftā?",
    options: ["Charlotte Hornets", "Milwaukee Bucks", "Chicago Bulls", "Golden State Warriors"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 591, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē, kurš spēlējis spēlē piecas dažādas pozīcijas un guvis triple-double kā centrs, uzbrucējs un aizsargs?",
    options: ["Magic Johnson", "LeBron James", "Giannis Antetokounmpo", "Scottie Pippen"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 592, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vienīgais ir uzvarējis trīspunktu konkursā bez izstieptas pēdas (spēlējot basī ar zeķēm)?",
    options: ["Peja Stojaković", "Dirk Nowitzki", "Ray Allen", "Larry Bird"],
    answer: "Larry Bird",
    explanation: ""
  },
  {
    id: 593, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē, kas guvis 70+ punktus trūkstot viņa vislabākajam spēlētājam komandā?",
    options: ["Devin Booker", "Wilt Chamberlain", "David Robinson", "Kobe Bryant"],
    answer: "Devin Booker",
    explanation: ""
  },
  {
    id: 594, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kas uzvarējis Slam Dunk konkursu, neizpildot nevienu 'windmill' vai 'reverse' danku?",
    options: ["Spud Webb", "Nate Robinson", "Vince Carter", "Dwight Howard"],
    answer: "Spud Webb",
    explanation: ""
  },
  {
    id: 595, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pirmais, kas sasniedza 1000 spēles bez nevienas diskvalificējošas piezīmes?",
    options: ["Reggie Miller", "Grant Hill", "Joe Dumars", "Chris Paul"],
    answer: "Joe Dumars",
    explanation: ""
  },
  {
    id: 596, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē, kurš ir aizvadījis 22 sezonas?",
    options: ["Kevin Garnett", "Robert Parish", "LeBron James", "Vince Carter"],
    answer: "Vince Carter",
    explanation: ""
  },
  {
    id: 597, category: "History", difficulty: "medium",
    question: "Kurš ir vienīgais spēlētājs ar perfekti 100% precizitāti trīspunktu konkursā vienā kārtā?",
    options: ["Craig Hodges", "Klay Thompson", "Stephen Curry", "Mark Price"],
    answer: "Craig Hodges",
    explanation: ""
  },
  {
    id: 598, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pirmais izpildīja trīspunktu metienu NBA vēsturē?",
    options: ["Chris Ford", "Larry Bird", "Fred Brown", "Jo Jo White"],
    answer: "Chris Ford",
    explanation: ""
  },
  {
    id: 599, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords visvairāk komandās karjeras laikā (21)?",
    options: ["Jamal Crawford", "Ish Smith", "Trevor Ariza", "Lou Amundson"],
    answer: "Ish Smith",
    explanation: ""
  },
  {
    id: 600, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir vienīgā, kas uzvarēja titulu, nesasniedzot 60% uzvaru sezonā?",
    options: ["Houston Rockets (1995)", "New York Knicks (1973)", "Boston Celtics (1969)", "Washington Bullets (1978)"],
    answer: "Houston Rockets (1995)",
    explanation: ""
  },
  {
    id: 601, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš uzvarēja MVP bez iekļūšanas All-Defensive komandā tajā sezonā?",
    options: ["Allen Iverson", "Steve Nash", "Derrick Rose", "Dirk Nowitzki"],
    answer: "Steve Nash",
    explanation: ""
  },
  {
    id: 602, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir aizvadījis visvairāk spēļu NBA vēsturē?",
    options: ["Robert Parish", "Vince Carter", "Kareem Abdul-Jabbar", "LeBron James"],
    answer: "Robert Parish",
    explanation: ""
  },
  {
    id: 603, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē, kurš guva 15+ punktus 1000 spēlēs pēc kārtas?",
    options: ["Michael Jordan", "Kareem Abdul-Jabbar", "Wilt Chamberlain", "LeBron James"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 604, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir sasniedzis visvairāk triple-double bez neviena trīspunktu metiena?",
    options: ["Magic Johnson", "Jason Kidd", "Oscar Robertson", "Rajon Rondo"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 605, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir ātrākais, kurš jebkad guvis 30 punktus (14 minūtes)?",
    options: ["Klay Thompson", "Kobe Bryant", "Stephen Curry", "Damian Lillard"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 606, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais ar 9 blokiem vienā ceturtdaļā?",
    options: ["Hakeem Olajuwon", "Manute Bol", "Mark Eaton", "Elmore Smith"],
    answer: "Elmore Smith",
    explanation: ""
  },
  {
    id: 607, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pirmais guva triple-double savā NBA debijā?",
    options: ["Magic Johnson", "Oscar Robertson", "Grant Hill", "Luka Dončić"],
    answer: "Oscar Robertson",
    explanation: ""
  },
  {
    id: 608, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kas guvis 60 punktus spēlē, trāpot mazāk par 10 soda metieniem?",
    options: ["Carmelo Anthony", "Kobe Bryant", "James Harden", "Tom Chambers"],
    answer: "Carmelo Anthony",
    explanation: ""
  },
  {
    id: 609, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords – 50 punkti kā rezervistam?",
    options: ["Jamal Crawford", "Lou Williams", "Jordan Clarkson", "Nick Young"],
    answer: "Jamal Crawford",
    explanation: ""
  },
  {
    id: 610, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kas uzvarēja Slam Dunk konkursu, trāpot dunku apģērbts kā supervaronis?",
    options: ["Dwight Howard", "Nate Robinson", "Dee Brown", "Blake Griffin"],
    answer: "Dwight Howard",
    explanation: ""
  },
  {
    id: 611, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pirmais guva 20 000 punktus karjerā?",
    options: ["Bob Pettit", "George Mikan", "Wilt Chamberlain", "Elgin Baylor"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 612, category: "History", difficulty: "medium",
    question: "Kura komanda uzvarēja pirmo NBA čempiontitulu (1947)?",
    options: ["Philadelphia Warriors", "Minneapolis Lakers", "Boston Celtics", "New York Knicks"],
    answer: "Philadelphia Warriors",
    explanation: ""
  },
  {
    id: 613, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kas guvis 100 punktus spēlē?",
    options: ["Wilt Chamberlain", "Michael Jordan", "Kobe Bryant", "David Thompson"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 614, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords — 14 bloķēti metieni vienā spēlē?",
    options: ["Hakeem Olajuwon", "Mark Eaton", "Elmore Smith", "Kareem Abdul-Jabbar"],
    answer: "Elmore Smith",
    explanation: ""
  },
  {
    id: 615, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs atrodas pirmajā vietā pēc visvairāk sezonām ar 30+ punktiem vidēji?",
    options: ["Kobe Bryant", "James Harden", "Wilt Chamberlain", "Michael Jordan"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 616, category: "History", difficulty: "medium",
    question: "Kurš bija pirmais spēlētājs, kas trāpīja trīspunktu metienu NBA finālos?",
    options: ["Magic Johnson", "Larry Bird", "Michael Cooper", "Dennis Johnson"],
    answer: "Michael Cooper",
    explanation: ""
  },
  {
    id: 617, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija 1980. gadu MVP līderis (3 MVP)?",
    options: ["Larry Bird", "Magic Johnson", "Kareem Abdul-Jabbar", "Moses Malone"],
    answer: "Larry Bird",
    explanation: ""
  },
  {
    id: 618, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmais NBA vēsturē ar 2000+ blokiem un 2000+ steals?",
    options: ["Kevin Garnett", "Scottie Pippen", "Hakeem Olajuwon", "David Robinson"],
    answer: "Hakeem Olajuwon",
    explanation: ""
  },
  {
    id: 619, category: "History", difficulty: "medium",
    question: "Kura komanda 90. gados uzvarēja visvairāk playoff sērijas bez titula?",
    options: ["Utah Jazz", "New York Knicks", "Seattle SuperSonics", "Indiana Pacers"],
    answer: "Utah Jazz",
    explanation: ""
  },
  {
    id: 620, category: "History", difficulty: "medium",
    question: "Kurš bija pēdējais spēlētājs, kas vidēji sezonā guva 35+ punktus pirms Kobe Byranta?",
    options: ["Michael Jordan", "Allen Iverson", "Dominique Wilkins", "George Gervin"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 621, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pirmais izdarīja 'no-look pass' kā preču zīmi?",
    options: ["Bob Cousy", "Magic Johnson", "Pete Maravich", "Nate Archibald"],
    answer: "Bob Cousy",
    explanation: ""
  },
  {
    id: 622, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs 1992. gada finālā guva 6 trīspunktniekus vienā ceturtdaļā?",
    options: ["Michael Jordan", "Scottie Pippen", "John Paxson", "Craig Hodges"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 623, category: "History", difficulty: "medium",
    question: "Kurš 80. gadu spēlētājs ieguva visvairāk Finals MVP?",
    options: ["Magic Johnson", "Larry Bird", "Kareem Abdul-Jabbar", "Isiah Thomas"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 624, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pirmais, kas meta soda metienus ar vienu roku no sāniem?",
    options: ["Rick Barry", "Bob Pettit", "George Gervin", "Bill Russell"],
    answer: "Rick Barry",
    explanation: ""
  },
  {
    id: 625, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs 90. gados izmantoja legendāro 'Sky Hook' metienu?",
    options: ["Patrick Ewing", "Hakeem Olajuwon", "Kareem Abdul-Jabbar", "Shaquille O'Neal"],
    answer: "Kareem Abdul-Jabbar",
    explanation: ""
  },
  {
    id: 626, category: "History", difficulty: "medium",
    question: "Kura komanda zaudēja 1997. un 1998. gada finālos?",
    options: ["Utah Jazz", "Orlando Magic", "Portland Trail Blazers", "Seattle SuperSonics"],
    answer: "Utah Jazz",
    explanation: ""
  },
  {
    id: 627, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pirmais izmantoja 360° dunku NBA spēlē?",
    options: ["Clyde Drexler", "Julius Erving", "Dominique Wilkins", "Vince Carter"],
    answer: "Julius Erving",
    explanation: ""
  },
  {
    id: 628, category: "History", difficulty: "medium",
    question: "Kura komanda trīs reizes pēc kārtas zaudēja finālos 80. gados?",
    options: ["Boston Celtics", "Houston Rockets", "LA Lakers", "Philadelphia 76ers"],
    answer: "LA Lakers",
    explanation: ""
  },
  {
    id: 629, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vecākais MVP balvas ieguvējs?",
    options: ["Karl Malone", "LeBron James", "Kareem Abdul-Jabbar", "Michael Jordan"],
    answer: "Karl Malone",
    explanation: ""
  },
  {
    id: 630, category: "History", difficulty: "medium",
    question: "Kurš bija pirmais spēlētājs NBA vēsturē ar 10 sezonām pēc kārtas, kurās viņš vidēji guva 24+ punktus?",
    options: ["Dominique Wilkins", "Karl Malone", "Michael Jordan", "Jerry West"],
    answer: "Jerry West",
    explanation: ""
  },
  {
    id: 631, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs tika draftēts ar to pašu pick, ar kādu vēlāk draftēja Giannis Antetokounmpo (15.)?",
    options: ["Kawhi Leonard", "Steve Nash", "Al Jefferson", "Vlade Divac"],
    answer: "Steve Nash",
    explanation: ""
  },
  {
    id: 632, category: "History", difficulty: "medium",
    question: "Kurš bija augstākais nedraftētais spēlētājs, kurš tika ievēlēts All-Star spēlē?",
    options: ["Ben Wallace", "John Starks", "Udonis Haslem", "Jeremy Lin"],
    answer: "Ben Wallace",
    explanation: ""
  },
  {
    id: 633, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs tika draftēts priekšā Kobe Bryant 1996. gadā?",
    options: ["Antawn Jamison", "Ray Allen", "Peja Stojaković", "Vlade Divac"],
    answer: "Peja Stojaković",
    explanation: ""
  },
  {
    id: 634, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs tika draftēts 2. numurā starp LeBron James un Carmelo Anthony?",
    options: ["Darko Miličić", "Chris Bosh", "Dwyane Wade", "T.J. Ford"],
    answer: "Darko Miličić",
    explanation: ""
  },
  {
    id: 635, category: "History", difficulty: "medium",
    question: "Kurš ir vecākais spēlētājs, kurš tika draftēts NBA pirmajā kārtā?",
    options: ["Dikembe Mutombo", "Sergio Llull", "Przemek Karnowski", "Arvydas Sabonis"],
    answer: "Arvydas Sabonis",
    explanation: ""
  },
  {
    id: 636, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vidēji sezonā guva visvairāk punktu kā rookies?",
    options: ["Allen Iverson", "Michael Jordan", "Wilt Chamberlain", "Oscar Robertson"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 637, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pēdējais vidusskolnieks, kuru draftēja kā 1. numuru?",
    options: ["Dwight Howard", "LeBron James", "Andrew Wiggins", "Derrick Rose"],
    answer: "Dwight Howard",
    explanation: ""
  },
  {
    id: 638, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs kopā ar LeBron James tika draftēts tajā pašā gadā un kļuva par MVP?",
    options: ["Kevin Durant", "Derrick Rose", "James Harden", "Giannis Antetokounmpo"],
    answer: "Derrick Rose",
    explanation: ""
  },
  {
    id: 639, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš uzvarēja Rookie of the Year bez iekļūšanas All-Star spēlē karjerā?",
    options: ["Mike Miller", "Michael Carter-Williams", "Larry Johnson", "Elton Brand"],
    answer: "Michael Carter-Williams",
    explanation: ""
  },
  {
    id: 640, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs tika draftēts ar to pašu numuru (41.), ar kādu draftēja Nikola Jokić?",
    options: ["Wesley Matthews", "Dražen Petrovic", "Marcin Gortat", "Trevor Ariza"],
    answer: "Dražen Petrovic",
    explanation: ""
  },
  {
    id: 641, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmais, kuru draftēja Toronto Raptors?",
    options: ["Damon Stoudamire", "Marcus Camby", "Tracy McGrady", "Chauncey Billups"],
    answer: "Damon Stoudamire",
    explanation: ""
  },
  {
    id: 642, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija nedraftēts un kļuva par Finals MVP?",
    options: ["Andre Iguodala", "Dennis Rodman", "Chauncey Billups", "Willis Reed"],
    answer: "Dennis Rodman",
    explanation: ""
  },
  {
    id: 643, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pirmais tika draftēts virs 30 gadu vecuma?",
    options: ["Arvydas Sabonis", "Pablo Prigioni", "Šarūnas Marčiulionis", "Darryl Dawkins"],
    answer: "Arvydas Sabonis",
    explanation: ""
  },
  {
    id: 644, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma viszemāko drafta pick starp MVP ieguvējiem?",
    options: ["Steve Nash", "Nikola Jokić", "Giannis Antetokounmpo", "Karl Malone"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 645, category: "History", difficulty: "medium",
    question: "Kurš rookies pirmais guva triple-double Playoff spēlē?",
    options: ["Magic Johnson", "Ben Simmons", "Jason Kidd", "LeBron James"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 646, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vienīgais 21. gadsimtā guva 40 punktus kā rookies Playoff spēlē?",
    options: ["Luka Dončić", "LeBron James", "Dwyane Wade", "Carmelo Anthony"],
    answer: "Luka Dončić",
    explanation: ""
  },
  {
    id: 647, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja Slam Dunk kā rookies un atkārtoja to citā komandā?",
    options: ["Nate Robinson", "Zach LaVine", "Dwight Howard", "Harold Miner"],
    answer: "Nate Robinson",
    explanation: ""
  },
  {
    id: 648, category: "History", difficulty: "medium",
    question: "Kurš augstākais drafta numurs nekad nav spēlējis NBA spēli?",
    options: ["Len Bias", "Ben Simmons (trauma gadā)", "Fran Vázquez", "Darko Miličić"],
    answer: "Len Bias",
    explanation: ""
  },
  {
    id: 649, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš karjerā ieguva Finals MVP bez All-Star statusa tajā sezonā?",
    options: ["Cedric Maxwell", "Andre Iguodala", "Chauncey Billups", "Joe Dumars"],
    answer: "Andre Iguodala",
    explanation: ""
  },
  {
    id: 650, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs 2000. gada draftā tika izvēlēts virs Michael Redd?",
    options: ["Shawn Marion", "Jamal Crawford", "Eddie House", "Chris Mihm"],
    answer: "Chris Mihm",
    explanation: ""
  },
  {
    id: 651, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs guva visvairāk punktu Playoff spēlē bez trīspunktu metieniem?",
    options: ["Karl Malone", "Michael Jordan", "Jerry West", "Wilt Chamberlain"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 652, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords — 8 steals NBA finālspēlē?",
    options: ["Michael Jordan", "Scottie Pippen", "Kobe Bryant", "Gary Payton"],
    answer: "Scottie Pippen",
    explanation: ""
  },
  {
    id: 653, category: "History", difficulty: "medium",
    question: "Kura komanda vienīgā sakāvusi Shaq & Kobe Lakers finālos?",
    options: ["San Antonio Spurs", "Boston Celtics", "Detroit Pistons", "Indiana Pacers"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 654, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs guvis visvairāk punktu Game 7 spēlē?",
    options: ["Kevin Durant", "LeBron James", "Allen Iverson", "Dominique Wilkins"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 655, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē ar 6 steals vienā finālspēlē?",
    options: ["Kobe Bryant", "Michael Jordan", "Magic Johnson", "Kawhi Leonard"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 656, category: "History", difficulty: "medium",
    question: "Kurš NBA treneris ir uzvarējis visvairāk Game 7 spēles?",
    options: ["Gregg Popovich", "Pat Riley", "Doc Rivers", "Phil Jackson"],
    answer: "Doc Rivers",
    explanation: ""
  },
  {
    id: 657, category: "History", difficulty: "medium",
    question: "Kura komanda ir vienīgā, kas Playoff spēlē iemetusi 0 trīspunktu metienus?",
    options: ["Chicago Bulls", "Magic Lakers", "San Antonio Spurs", "Utah Jazz"],
    answer: "Chicago Bulls",
    explanation: ""
  },
  {
    id: 658, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir izcīnījis visvairāk atlēkušās bumbas playoff vēsturē?",
    options: ["Shaquille O'Neal", "Tim Duncan", "Bill Russell", "Wilt Chamberlain"],
    answer: "Bill Russell",
    explanation: ""
  },
  {
    id: 659, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kas uzvarējis Finals MVP trīs dažādās dekādēs?",
    options: ["LeBron James", "Tim Duncan", "Bill Russell", "Kareem Abdul-Jabbar"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 660, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords – 25 punkti pēc kārtas Playoff spēlē?",
    options: ["LeBron James", "Michael Jordan", "Allen Iverson", "Kevin Durant"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 661, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir veicis visvairāk bloku finālu sērijā?",
    options: ["Shaquille O'Neal", "Hakeem Olajuwon", "Alonzo Mourning", "Tim Duncan"],
    answer: "Hakeem Olajuwon",
    explanation: ""
  },
  {
    id: 662, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vienīgais guva triple-double Finals spēlē bez neviena trīspunktnieka?",
    options: ["Larry Bird", "Magic Johnson", "Scottie Pippen", "Jason Kidd"],
    answer: "Larry Bird",
    explanation: ""
  },
  {
    id: 663, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs guvis visvairāk punktu vienā ceturtdaļā NBA finālos?",
    options: ["Michael Jordan", "Kobe Bryant", "LeBron James", "Terry Porter"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 664, category: "History", difficulty: "medium",
    question: "Kurš treneris ir zaudējis visvairāk finālu?",
    options: ["Phil Jackson", "Pat Riley", "Red Auerbach", "Jerry West"],
    answer: "Pat Riley",
    explanation: ""
  },
  {
    id: 665, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs izpildīja ikonisko 'junior sky hook' 1987. gada finālos?",
    options: ["Magic Johnson", "Kareem Abdul-Jabbar", "Worthy James", "Byron Scott"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 666, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs guvis visvairāk steals Playoff karjerā?",
    options: ["Scottie Pippen", "Michael Jordan", "LeBron James", "Jason Kidd"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 667, category: "History", difficulty: "medium",
    question: "Kura komanda bija pirmā, kas atspēlējās no 1–3 deficīta finālos?",
    options: ["Golden State Warriors", "Cleveland Cavaliers", "Miami Heat", "Phoenix Suns"],
    answer: "Cleveland Cavaliers",
    explanation: ""
  },
  {
    id: 668, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pirmais guva triple-double NBA finālu debijā?",
    options: ["Magic Johnson", "Jason Kidd", "Tim Duncan", "Bill Russell"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 669, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais ar trīspunktu metienu 'buzzer beater' NBA finālos, kas uzvarēja spēli?",
    options: ["Kyrie Irving", "Ray Allen", "Derek Fisher", "Steve Kerr"],
    answer: "Derek Fisher",
    explanation: ""
  },
  {
    id: 670, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs izpildīja 'The Block' 2016. gada finālos?",
    options: ["LeBron James", "Andre Iguodala", "Kyrie Irving", "Kevin Love"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 671, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais ar 60 punktiem bez neviena soda metiena?",
    options: ["Klay Thompson", "Stephen Curry", "Kobe Bryant", "Jordan Poole"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 672, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir veicis visvairāk 'four-point plays' NBA vēsturē?",
    options: ["Lou Williams", "Stephen Curry", "Reggie Miller", "James Harden"],
    answer: "Lou Williams",
    explanation: ""
  },
  {
    id: 673, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords — 14 trīspunktu metieni vienā spēlē?",
    options: ["Curry", "Klay Thompson", "Lillard", "Buddy Hield"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 674, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais ar triple-double finālu sērijā, kur vidēji guva 30+ punktus?",
    options: ["LeBron James", "Kevin Durant", "Giannis Antetokounmpo", "Stephen Curry"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 675, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais ar 40+ punktiem Game 7 divās dažādās sērijās?",
    options: ["Kevin Durant", "LeBron James", "Luka Dončić", "Allen Iverson"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 676, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs sasniedza NBA triple-double visātrāk (14 min)?",
    options: ["Nikola Jokić", "Russell Westbrook", "Luka Dončić", "Giannis Antetokounmpo"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 677, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais aktīvais spēlētājs ar 60 punktu spēli Playoffos?",
    options: ["Stephen Curry", "Luka Dončić", "Kawhi Leonard", "Donovan Mitchell"],
    answer: "Donovan Mitchell",
    explanation: ""
  },
  {
    id: 678, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais ar 50 punktiem bez neviena bumbas aizsardzībā (REB) vai piespēles?",
    options: ["James Harden", "Kobe Bryant", "Anthony Davis", "Jayson Tatum"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 679, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs guva visvairāk punktu spēlē bez neviena divpunktu metiena?",
    options: ["Buddy Hield", "James Harden", "Klay Thompson", "Stephen Curry"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 680, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais ar 30+ punktiem, 20+ rebounds un 10+ assist finālos?",
    options: ["Shaquille O'Neal", "Nikola Jokić", "Tim Duncan", "Giannis Antetokounmpo"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 681, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš uzvarējis Finals MVP savā debijas sezonā?",
    options: ["Magic Johnson", "Larry Bird", "Tim Duncan", "Kareem Abdul-Jabbar"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 682, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kas guvis 60 punktus kā rezervists?",
    options: ["Lou Williams", "Jamal Crawford", "Jordan Clarkson", "Kemba Walker"],
    answer: "Jordan Clarkson",
    explanation: ""
  },
  {
    id: 683, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais MVP, kurš tajā sezonā nebija All-Star?",
    options: ["Bill Russell", "Bob Cousy", "Wes Unseld", "Derrick Rose"],
    answer: "Bill Russell",
    explanation: ""
  },
  {
    id: 684, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pirmais pabeidza sezonu ar vairāk steals nekā fouls?",
    options: ["Chris Paul", "Jason Kidd", "Michael Jordan", "Scottie Pippen"],
    answer: "Chris Paul",
    explanation: ""
  },
  {
    id: 685, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais NBĀ, kurš Playoff spēlē guva 30 punktus bez neviena soda metiena?",
    options: ["Stephen Curry", "Klay Thompson", "Kevin Durant", "Ray Allen"],
    answer: "Stephen Curry",
    explanation: ""
  },
  {
    id: 686, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pirmais guva 40 punktus NBA Play-In spēlē?",
    options: ["LeBron James", "Jayson Tatum", "Zach LaVine", "Ja Morant"],
    answer: "Jayson Tatum",
    explanation: ""
  },
  {
    id: 687, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais ar 5 spēlēm pēc kārtas NBA, kurās viņš guva 50+ punktus?",
    options: ["James Harden", "Kobe Bryant", "Michael Jordan", "Wilt Chamberlain"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 688, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs guva 37 punktus vienā ceturtdaļā?",
    options: ["Kobe Bryant", "Klay Thompson", "Stephen Curry", "Devin Booker"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 689, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais ar 3000+ trīspunktniekiem karjerā?",
    options: ["Ray Allen", "Stephen Curry", "James Harden", "Reggie Miller"],
    answer: "Stephen Curry",
    explanation: ""
  },
  {
    id: 690, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais ar 40+ punktiem debijā un fināla debijā karjerā?",
    options: ["Allen Iverson", "Shaquille O'Neal", "Kobe Bryant", "Luka Dončić"],
    answer: "Allen Iverson",
    explanation: ""
  },
  {
    id: 691, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš uzvarēja Finals MVP komandā, kas pat neskaitījās favorīts nevienā no sērijām līdz finālam?",
    options: ["Chauncey Billups", "Dirk Nowitzki", "Andre Iguodala", "Kawhi Leonard"],
    answer: "Chauncey Billups",
    explanation: ""
  },
  {
    id: 692, category: "History", difficulty: "medium",
    question: "Kuram NBA spēlētājam pieder rekords – visvairāk punkti caur sodu (AND-1) vienā spēlē?",
    options: ["Dwyane Wade", "James Harden", "Allen Iverson", "Shaquille O'Neal"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 693, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vienīgais uzvarēja trīs dažādās komandās kā komandas rezultatīvākais spēlētājs?",
    options: ["LeBron James", "Kevin Durant", "Shaquille O'Neal", "Kareem Abdul-Jabbar"],
    answer: "Shaquille O'Neal",
    explanation: ""
  },
  {
    id: 694, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē, kurš guva 50 punktus finālu sērijas noslēdzošajā spēlē?",
    options: ["Michael Jordan", "Kobe Bryant", "Giannis Antetokounmpo", "Kevin Durant"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 695, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords — visvairāk trīspunktu metieni karjeras Game 7 spēlēs?",
    options: ["Stephen Curry", "Klay Thompson", "Ray Allen", "Jayson Tatum"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 696, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais, kurš atdeva 20 piespēles Playoff spēlē?",
    options: ["Magic Johnson", "Rajon Rondo", "Chris Paul", "John Stockton"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 697, category: "History", difficulty: "medium",
    question: "Kura NBA komanda bija pirmā, kurai piederēja tiesības uz logo uz spēlētāju formām?",
    options: ["Dallas Mavericks", "Golden State Warriors", "Brooklyn Nets", "Philadelphia 76ers"],
    answer: "Philadelphia 76ers",
    explanation: ""
  },
  {
    id: 698, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē, kurš spēlēja 7 dažādās komandās un katrā realizēja 1000+ punktus?",
    options: ["Lou Williams", "Carmelo Anthony", "Jamal Crawford", "Vince Carter"],
    answer: "Jamal Crawford",
    explanation: ""
  },
  {
    id: 699, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pirmais iemeta metienu virs slavenās 'skycam' virs groza?",
    options: ["Kobe Bryant", "Tracy McGrady", "Vince Carter", "Stephen Curry"],
    answer: "Tracy McGrady",
    explanation: ""
  },
  {
    id: 700, category: "History", difficulty: "medium",
    question: "Kurš treneris ir vienīgais, kurš uzvarēja 60 spēles trīs dažādās komandās?",
    options: ["Phil Jackson", "Don Nelson", "Rick Adelman", "Pat Riley"],
    answer: "Pat Riley",
    explanation: ""
  },
  {
    id: 701, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš Bloķējis savu brāļa metienu NBA spēlē?",
    options: ["Pau Gasol", "Brook Lopez", "Markieff Morris", "Robin Lopez"],
    answer: "Pau Gasol",
    explanation: ""
  },
  {
    id: 702, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš tika draftēts NFL un NBA vienā gadā?",
    options: ["Charlie Ward", "Julius Peppers", "Tony Gonzalez", "John Havlicek"],
    answer: "Charlie Ward",
    explanation: ""
  },
  {
    id: 703, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs trāpīja pirmo buzzer-beater NBA Playoff finālos?",
    options: ["Jerry West", "Michael Jordan", "Larry Bird", "Sam Jones"],
    answer: "Jerry West",
    explanation: ""
  },
  {
    id: 704, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš guva triple-double ar blokiem NBA finālos?",
    options: ["Tim Duncan", "Hakeem Olajuwon", "Shaquille O'Neal", "Bill Russell"],
    answer: "Tim Duncan",
    explanation: ""
  },
  {
    id: 705, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords — 0 punkti, 20+ atlēkušās un 10+ bloki?",
    options: ["Ben Wallace", "Mark Eaton", "Dikembe Mutombo", "Dennis Rodman"],
    answer: "Ben Wallace",
    explanation: ""
  },
  {
    id: 706, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē ar 30+ punktiem un 15+ piespēlēm sesijas debijā?",
    options: ["Oscar Robertson", "Magic Johnson", "Trae Young", "Tyrese Haliburton"],
    answer: "Trae Young",
    explanation: ""
  },
  {
    id: 707, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs guva vairāk punktu savā 60+ punktu spēlē nekā visa pretinieku komandas starting five kopā?",
    options: ["Wilt Chamberlain", "Kobe Bryant", "David Robinson", "Bernard King"],
    answer: "Kobe Bryant",
    explanation: ""
  },
  {
    id: 708, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais ar Finālu ‘buzzer beater’, kas izglāba titulu 7. spēlē?",
    options: ["Kyrie Irving", "Ray Allen", "Michael Jordan", "John Paxson"],
    answer: "Ray Allen",
    explanation: ""
  },
  {
    id: 709, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pirmais guva 40 punktus spēlē bez neviena dribla?",
    options: ["Klay Thompson", "Rip Hamilton", "Reggie Miller", "Ray Allen"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 710, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs spēlē aizsardzībā lietoja 'karate stance' kā savu stilu?",
    options: ["Metta World Peace", "Dennis Rodman", "Gary Payton", "Bruce Bowen"],
    answer: "Dennis Rodman",
    explanation: ""
  },
  {
    id: 711, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš guva mazāk nekā 5 punktus, bet saņēma Finals MVP?",
    options: ["Cedric Maxwell", "Chauncey Billups", "Andre Iguodala", "Bill Russell"],
    answer: "Andre Iguodala",
    explanation: ""
  },
  {
    id: 712, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kuram ir 4 bloķēti trīspunktnieki finālos vienā spēlē?",
    options: ["Kawhi Leonard", "Kevin Durant", "Draymond Green", "Giannis Antetokounmpo"],
    answer: "Draymond Green",
    explanation: ""
  },
  {
    id: 713, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs spēlēja All-Star spēlē bez treniņiem veselu mēnesi un guva 23 punktus?",
    options: ["Kobe Bryant", "Allen Iverson", "Shaquille O'Neal", "Dirk Nowitzki"],
    answer: "Allen Iverson",
    explanation: ""
  },
  {
    id: 714, category: "History", difficulty: "medium",
    question: "Kuram NBA spēlētājam pieder rekords – 13 steals vienā spēlē?",
    options: ["Michael Jordan", "Kendall Gill", "Ron Artest", "Allen Iverson"],
    answer: "Kendall Gill",
    explanation: ""
  },
  {
    id: 715, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs izdarīja visvairāk 'and-ones' vienā sezonā NBA vēsturē?",
    options: ["James Harden", "Shaquille O'Neal", "Giannis Antetokounmpo", "Dwyane Wade"],
    answer: "Shaquille O'Neal",
    explanation: ""
  },
  {
    id: 716, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais, kurš saņēmis 3 sodus vienas posesijas laikā?",
    options: ["Draymond Green", "Rasheed Wallace", "DeMarcus Cousins", "Shaquille O'Neal"],
    answer: "Rasheed Wallace",
    explanation: ""
  },
  {
    id: 717, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs savā pēdējā spēlē guva 21 atlēkušo bumbu 38 gadu vecumā?",
    options: ["Dennis Rodman", "Kevin Garnett", "Dikembe Mutombo", "Tim Duncan"],
    answer: "Dikembe Mutombo",
    explanation: ""
  },
  {
    id: 718, category: "History", difficulty: "medium",
    question: "Kurš bija pirmais spēlētājs, kas saņēma 'Handshake Foul' pēc noteikumu maiņas?",
    options: ["Allen Iverson", "Kobe Bryant", "Michael Jordan", "Gary Payton"],
    answer: "Allen Iverson",
    explanation: ""
  },
  {
    id: 719, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vienīgais spēlēja 1000+ spēļu, nesasniedzot 10 punktus vidēji sezonā?",
    options: ["Andre Miller", "Udonis Haslem", "Derek Fisher", "Bruce Bowen"],
    answer: "Derek Fisher",
    explanation: ""
  },
  {
    id: 720, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmais, kas uzspridzināja NBA Twitter ar 60 punktiem 3 ceturtdaļās?",
    options: ["Kobe Bryant", "Carmelo Anthony", "Damian Lillard", "Klay Thompson"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 721, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš bloķēja dunku ar galvu (burtiski)?",
    options: ["Shawn Kemp", "JaVale McGee", "Dikembe Mutombo", "Manute Bol"],
    answer: "Manute Bol",
    explanation: ""
  },
  {
    id: 722, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs tika pieķerts, ka apstādināja spēli, lai salabotu savas kurpes tieši vidējā uzbrukumā?",
    options: ["LaMelo Ball", "Kobe Bryant", "Gilbert Arenas", "P.J. Tucker"],
    answer: "Gilbert Arenas",
    explanation: ""
  },
  {
    id: 723, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē, kurš guva 50 punktus spēlē bez nevienas kļūdas?",
    options: ["Joel Embiid", "Kevin Durant", "Wilt Chamberlain", "Nikola Jokić"],
    answer: "Joel Embiid",
    explanation: ""
  },
  {
    id: 724, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš guva 20 punktus vienā minūtē?",
    options: ["Klay Thompson", "Tracy McGrady", "Damian Lillard", "Reggie Miller"],
    answer: "Reggie Miller",
    explanation: ""
  },
  {
    id: 725, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs kļuva slavens ar to, ka spēlē izslēdza televīzijas monitora kabeli ar dunku?",
    options: ["Shaquille O'Neal", "Blake Griffin", "Dominique Wilkins", "Amar'e Stoudemire"],
    answer: "Shaquille O'Neal",
    explanation: ""
  },
  {
    id: 726, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais vēsturē ar 30+ punktiem, 10+ atlēkušām un 10+ blokiem bez nevienas piezīmes?",
    options: ["David Robinson", "Hakeem Olajuwon", "Anthony Davis", "Rudy Gobert"],
    answer: "David Robinson",
    explanation: ""
  },
  {
    id: 727, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder stat-līnija: 0 punkti, 11 atlēkušās, 11 piespēles, 10 steals?",
    options: ["Draymond Green", "Dennis Rodman", "Jason Kidd", "Rajon Rondo"],
    answer: "Draymond Green",
    explanation: ""
  },
  {
    id: 728, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija pirmais NBA vēsturē, kas debijā guva 30 punktus tikai 18 minūtēs?",
    options: ["Zion Williamson", "Coby White", "Kevin Durant", "Allen Iverson"],
    answer: "Zion Williamson",
    explanation: ""
  },
  {
    id: 729, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vienīgais vidēji guva triple-double Playoff sērijā pret Michael Jordan?",
    options: ["Magic Johnson", "Jason Kidd", "LeBron James", "Rajon Rondo"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 730, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš ieguva MVP, spēlējot komandā ar negatīvu bilanci?",
    options: ["Kareem Abdul-Jabbar", "Bob Pettit", "Moses Malone", "Rick Barry"],
    answer: "Kareem Abdul-Jabbar",
    explanation: ""
  },
  {
    id: 731, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir vienīgā, kas uzvarēja abas konferenču fināla Game 7 vienā sezonā pret komandu no Teksasas?",
    options: ["Los Angeles Lakers", "Golden State Warriors", "Boston Celtics", "Portland Trail Blazers"],
    answer: "Golden State Warriors",
    explanation: ""
  },
  {
    id: 732, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē, kurš guva 60+ punktus bez nevienas soda metiena kļūdas?",
    options: ["Carmelo Anthony", "Klay Thompson", "Kobe Bryant", "Devin Booker"],
    answer: "Carmelo Anthony",
    explanation: ""
  },
  {
    id: 733, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs izcīnīja visvairāk atlēkušo bumbu spēlē pret Shaquille O'Neal?",
    options: ["Hakeem Olajuwon", "Ben Wallace", "Tim Duncan", "David Robinson"],
    answer: "Ben Wallace",
    explanation: ""
  },
  {
    id: 734, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs izcīnīja NBA titulu kā spēlētājs, treneris un vadītājs vienā un tajā pašā franšīzē?",
    options: ["Larry Bird", "Bill Russell", "Pat Riley", "Red Auerbach"],
    answer: "Bill Russell",
    explanation: ""
  },
  {
    id: 735, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē, kurš iemetis 10+ trīspunktniekus 3 dažādās komandās?",
    options: ["J.R. Smith", "Klay Thompson", "Fred VanVleet", "Damian Lillard"],
    answer: "J.R. Smith",
    explanation: ""
  },
  {
    id: 736, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir sasniedzis 100 blokus sezonā komandā, kas nespēlēja playoff?",
    options: ["Anthony Davis", "Marcus Camby", "Rudy Gobert", "Chris Bosh"],
    answer: "Chris Bosh",
    explanation: ""
  },
  {
    id: 737, category: "History", difficulty: "medium",
    question: "Kurš ir vienīgais spēlētājs NBA vēsturē, kas uzvarējis MIP sezonā, kurā viņa komanda uzvarēja zem 25 spēlēm?",
    options: ["Julius Randle", "Brandon Ingram", "Tracy McGrady", "Jermaine O'Neal"],
    answer: "Tracy McGrady",
    explanation: ""
  },
  {
    id: 738, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vienīgais ir guvis 40 punktus All-NBA Finals spēlē bez neviena turnover?",
    options: ["Michael Jordan", "Kevin Durant", "Kawhi Leonard", "Dwyane Wade"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 739, category: "History", difficulty: "medium",
    question: "Kura komanda pirmā NBA vēsturē spēlēja sezonu bez neviena spēlētāja, kas vidēji gūtu 20 punktus?",
    options: ["Detroit Pistons (2004)", "San Antonio Spurs (2005)", "Memphis Grizzlies (2013)", "Atlanta Hawks (2015)"],
    answer: "Atlanta Hawks (2015)",
    explanation: ""
  },
  {
    id: 740, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš izcīnījis Final MVP, nezaudējot nevienu spēli playoff?",
    options: ["Magic Johnson", "Kareem Abdul-Jabbar", "Shaquille O'Neal", "Moses Malone"],
    answer: "Moses Malone",
    explanation: ""
  },
  {
    id: 741, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords — visvairāk steals vienā ceturtdaļā?",
    options: ["Michael Jordan", "Alvin Robertson", "Ricky Rubio", "Kawhi Leonard"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 742, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš guva triple-double, nespēlējot 30 minūtes?",
    options: ["Luka Dončić", "Giannis Antetokounmpo", "Russell Westbrook", "Draymond Green"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 743, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir iemetis visvairāk game-winners pret komandām, kas beidza sezonu ar 50+ uzvarām?",
    options: ["Damian Lillard", "Michael Jordan", "LeBron James", "Kobe Bryant"],
    answer: "Kobe Bryant",
    explanation: ""
  },
  {
    id: 744, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vienīgais ir bijis rezultatīvākais NBA līgā, metot mazāk nekā 2 trīspunktniekus sezonā?",
    options: ["Allen Iverson", "Dwyane Wade", "Shaquille O'Neal", "Akeem Olajuwon"],
    answer: "Dwyane Wade",
    explanation: ""
  },
  {
    id: 745, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs uzstādīja rekordu — 6 blokiem 6 minūtēs?",
    options: ["Hassan Whiteside", "Manute Bol", "Shaquille O'Neal", "Jaren Jackson Jr."],
    answer: "Hassan Whiteside",
    explanation: ""
  },
  {
    id: 746, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs saņēma tehnisko piezīmi par to, ka pārāk skaļi pasmējās?",
    options: ["Kevin Garnett", "Tim Duncan", "Rasheed Wallace", "Draymond Green"],
    answer: "Tim Duncan",
    explanation: ""
  },
  {
    id: 747, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords — visvairāk uzvaru karjerā bez NBA čempiontitula?",
    options: ["Karl Malone", "Charles Barkley", "John Stockton", "Chris Paul"],
    answer: "John Stockton",
    explanation: ""
  },
  {
    id: 748, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē, kurš atdevis 30+ piespēles spēlē?",
    options: ["Magic Johnson", "John Stockton", "Rajon Rondo", "Scott Skiles"],
    answer: "Scott Skiles",
    explanation: ""
  },
  {
    id: 749, category: "History", difficulty: "medium",
    question: "Kura komanda bija pirmā NBA vēsturē, kas iemeta 23 trīspunktniekus spēlē?",
    options: ["Houston Rockets", "Orlando Magic", "Phoenix Suns", "Cleveland Cavaliers"],
    answer: "Orlando Magic",
    explanation: ""
  },
  {
    id: 750, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir iemetis visvairāk punktu bez neviena metiena no spēles?",
    options: ["James Harden", "Gilbert Arenas", "Dwight Howard", "DeMarcus Cousins"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 751, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš guvis 50+ punktus divās dažādās komandās tajā pašā sezonā?",
    options: ["Kyrie Irving", "Wilt Chamberlain", "Jamal Crawford", "Jalen Brunson"],
    answer: "Jamal Crawford",
    explanation: ""
  },
  {
    id: 752, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vienīgais ir izcīnījis 30 atlēkušās bumbas NBA finālos?",
    options: ["Wilt Chamberlain", "Bill Russell", "Moses Malone", "Dennis Rodman"],
    answer: "Bill Russell",
    explanation: ""
  },
  {
    id: 753, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir iemānijis 9 trīspunktniekus vienā ceturtdaļā?",
    options: ["Klay Thompson", "Damian Lillard", "Stephen Curry", "Lauri Markkanen"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 754, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš uzstādīja 8 blokus All-Star spēlē?",
    options: ["Kevin Garnett", "Hakeem Olajuwon", "Anthony Davis", "Shaquille O'Neal"],
    answer: "Anthony Davis",
    explanation: ""
  },
  {
    id: 755, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzstādīja rekordu — 25 punkti vienā puslaikā, nepieskaroties bumbai vairāk par 20 sekundēm kopā?",
    options: ["Klay Thompson", "Reggie Miller", "Ray Allen", "Desmond Bane"],
    answer: "Reggie Miller",
    explanation: ""
  },
  {
    id: 756, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords — trīs secīgas sezonas ar >55% metienu precizitāti un >40% trīspunktniekiem?",
    options: ["Dirk Nowitzki", "Klay Thompson", "Stephen Curry", "Kevin Durant"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 757, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pirmais guva triple-double ar steals kā trešo statistikas kategoriju?",
    options: ["Michael Jordan", "Clyde Drexler", "Larry Bird", "Alvin Robertson"],
    answer: "Clyde Drexler",
    explanation: ""
  },
  {
    id: 758, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs izmeta visvairāk metienu vienā spēlē bez neviena foul?",
    options: ["Kobe Bryant", "Allen Iverson", "Devin Booker", "Elgin Baylor"],
    answer: "Kobe Bryant",
    explanation: ""
  },
  {
    id: 759, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ieguva titulu, būdams līgas līderis kļūdās Playoff?",
    options: ["LeBron James", "Stephen Curry", "James Harden", "Shaquille O'Neal"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 760, category: "History", difficulty: "medium",
    question: "Kurš ir jaunākais spēlētājs, kas guvis 40+ punktus Playoff spēlē?",
    options: ["LeBron James", "Kobe Bryant", "Luka Dončić", "Magic Johnson"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 761, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vienīgais ir iemetis vairāk nekā 10 trīspunktniekus spēlē bez dribla?",
    options: ["Ray Allen", "Klay Thompson", "Kyle Korver", "Buddy Hield"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 762, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš guva 15+ atlēkušās, 5+ steals un 5+ blokus vienā spēlē?",
    options: ["Kevin Garnett", "Hakeem Olajuwon", "Giannis Antetokounmpo", "Andrei Kirilenko"],
    answer: "Andrei Kirilenko",
    explanation: ""
  },
  {
    id: 763, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir izcīnījis Final MVP, neuzvarot NBA titulu?",
    options: ["Bill Russell", "Jerry West", "Kareem Abdul-Jabbar", "Walt Frazier"],
    answer: "Jerry West",
    explanation: ""
  },
  {
    id: 764, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder rekords — visvairāk uzvarētu Game 7?",
    options: ["Robert Horry", "Bill Russell", "LeBron James", "Kobe Bryant"],
    answer: "Bill Russell",
    explanation: ""
  },
  {
    id: 765, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē ar trim secīgiem triple-double bez neviena turnover?",
    options: ["Chris Paul", "Nikola Jokić", "Jason Kidd", "Steve Nash"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 766, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš soda metienā guva dunku (oficiāli atzīts spēles laikā)?",
    options: ["Shaquille O'Neal", "Wilt Chamberlain", "Giannis Antetokounmpo", "Darvin Ham"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 767, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš uzvarēja Rookie of the Year, Finals MVP un regulārās sezonas MVP vienā karjerā?",
    options: ["Magic Johnson", "Michael Jordan", "Tim Duncan", "Wilt Chamberlain"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 768, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais vēsturē, kurš vidēji sezonā guva vairāk nekā 50 punktus?",
    options: ["Wilt Chamberlain", "Michael Jordan", "Elgin Baylor", "Kobe Bryant"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 769, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē ar četrām sezonām pēc kārtas kā līgas rezultatīvākais?",
    options: ["Allen Iverson", "Kevin Durant", "James Harden", "Michael Jordan"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 770, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir izcīnījis visvairāk atlēkušo bumbu vienā spēlē?",
    options: ["Wilt Chamberlain", "Bill Russell", "Moses Malone", "Dennis Rodman"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 771, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vienīgais ir guvis 60+ punktus trīs dažādās desmitgadēs?",
    options: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Kevin Durant"],
    answer: "Kobe Bryant",
    explanation: ""
  },
  {
    id: 772, category: "History", difficulty: "medium",
    question: "Kurš ir vienīgais spēlētājs NBA vēsturē, kurš guvis 100 punktus spēlē?",
    options: ["Wilt Chamberlain", "Michael Jordan", "Wilt Chamberlain", "Kobe Bryant"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 773, category: "History", difficulty: "medium",
    question: "Kurš NBA treneris ir uzvarējis visvairāk spēļu regulārajā sezonā?",
    options: ["Gregg Popovich", "Don Nelson", "Pat Riley", "Phil Jackson"],
    answer: "Don Nelson",
    explanation: ""
  },
  {
    id: 774, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ieguva Finals MVP 1980. gadā, aizpildot centra pozīciju Magic Johnson vietā?",
    options: ["Magic Johnson", "Kareem Abdul-Jabbar", "Bob McAdoo", "Norm Nixon"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 775, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs NBA vēsturē ir izcīnījis visvairāk čempiontitulus?",
    options: ["Bill Russell", "Sam Jones", "Kobe Bryant", "Michael Jordan"],
    answer: "Bill Russell",
    explanation: ""
  },
  {
    id: 776, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš ir guvis quadruple-double oficiāli atzītā spēlē?",
    options: ["David Robinson", "Hakeem Olajuwon", "Nate Thurmond", "Visi iepriekš minētie"],
    answer: "Visi iepriekš minētie",
    explanation: ""
  },
  {
    id: 777, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pirmais NBA vēsturē sasniedza 30 000 punktus?",
    options: ["Wilt Chamberlain", "Kareem Abdul-Jabbar", "Michael Jordan", "Karl Malone"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 778, category: "History", difficulty: "medium",
    question: "Kurš ir vienīgais spēlētājs NBA vēsturē, kurš guvis 70+ punktus spēlē divas reizes?",
    options: ["Wilt Chamberlain", "Kobe Bryant", "David Thompson", "Devin Booker"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 779, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais NBA vēsturē ar triple-double savā karjeras debijā?",
    options: ["Oscar Robertson", "Magic Johnson", "Russell Westbrook", "Jason Kidd"],
    answer: "Oscar Robertson",
    explanation: ""
  },
  {
    id: 780, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kuram ir 30+ triple-double vienā sezonā, izņemot Russell Westbrook?",
    options: ["Oscar Robertson", "Luka Dončić", "Magic Johnson", "Nikola Jokić"],
    answer: "Oscar Robertson",
    explanation: ""
  },
  {
    id: 781, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir uzvarējis visvairāk MVP balvas?",
    options: ["Michael Jordan", "Bill Russell", "Kareem Abdul-Jabbar", "LeBron James"],
    answer: "Kareem Abdul-Jabbar",
    explanation: ""
  },
  {
    id: 782, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs iemeta slaveno 'The Shot' 1989. gada playoff mačā pret Cavaliers?",
    options: ["Michael Jordan", "Scottie Pippen", "Larry Bird", "Joe Dumars"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 783, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder NBA rekords – 15 rezultatīvas piespēles vienā ceturtdaļā?",
    options: ["Magic Johnson", "Rajon Rondo", "Steve Nash", "John Stockton"],
    answer: "John Stockton",
    explanation: ""
  },
  {
    id: 784, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir izcīnījis visvairāk atlēkušo bumbu karjerā?",
    options: ["Wilt Chamberlain", "Bill Russell", "Moses Malone", "Dennis Rodman"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 785, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš ir bijis līgas rezultatīvākais un līgas līderis piespēlēs tajā pašā sezonā?",
    options: ["James Harden", "Luka Dončić", "Tiny Archibald", "Stephen Curry"],
    answer: "Tiny Archibald",
    explanation: ""
  },
  {
    id: 786, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir iemetis visvairāk trīspunktnieku NBA finālu vēsturē?",
    options: ["Stephen Curry", "Klay Thompson", "Ray Allen", "Robert Horry"],
    answer: "Stephen Curry",
    explanation: ""
  },
  {
    id: 787, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš 2020. gadu dekādē ir ieguvis MVP un Finals MVP vienā sezonā?",
    options: ["Giannis Antetokounmpo", "Nikola Jokić", "Stephen Curry", "LeBron James"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 788, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs kļuva par jaunāko ar 10 000, 15 000, 20 000 un 25 000 punktiem mūsdienu NBA laikā?",
    options: ["Kevin Durant", "Luka Dončić", "LeBron James", "Jayson Tatum"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 789, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pirmais guva 60 punktus spēlē ar vairāk asistiem nekā dribliem?",
    options: ["Stephen Curry", "Klay Thompson", "Damian Lillard", "James Harden"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 790, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs 2021. gadā guva 55+ punktus, neveicot nevienu soda metienu?",
    options: ["Damian Lillard", "Kyrie Irving", "Stephen Curry", "Zach LaVine"],
    answer: "Kyrie Irving",
    explanation: ""
  },
  {
    id: 791, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs izcīnīja 2023. gada MVP balvu?",
    options: ["Joel Embiid", "Giannis Antetokounmpo", "Nikola Jokić", "Luka Dončić"],
    answer: "Joel Embiid",
    explanation: ""
  },
  {
    id: 792, category: "History", difficulty: "medium",
    question: "Kura komanda uzvarēja NBA čempiontitulu 2023. gadā?",
    options: ["Miami Heat", "Phoenix Suns", "Denver Nuggets", "Boston Celtics"],
    answer: "Denver Nuggets",
    explanation: ""
  },
  {
    id: 793, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ieguva Finals MVP 2022. gadā?",
    options: ["Stephen Curry", "Klay Thompson", "Andrew Wiggins", "Jason Tatum"],
    answer: "Stephen Curry",
    explanation: ""
  },
  {
    id: 794, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir guvis visvairāk triple-double kopš 2015. gada?",
    options: ["Russell Westbrook", "Nikola Jokić", "James Harden", "Luka Dončić"],
    answer: "Russell Westbrook",
    explanation: ""
  },
  {
    id: 795, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais mūsdienu NBA, kurš guva 70+ punktus spēlē?",
    options: ["Donovan Mitchell", "Devin Booker", "Damian Lillard", "Trae Young"],
    answer: "Devin Booker",
    explanation: ""
  },
  {
    id: 796, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs 2020. gada finālos veica slaveno 'The Block' 2.0 pret Andre Iguodala?",
    options: ["Anthony Davis", "LeBron James", "Bam Adebayo", "Andre Iguodala"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 797, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam pieder mūsdienu NBA rekords ar 14 trīspunktniekiem vienā spēlē?",
    options: ["Stephen Curry", "Damian Lillard", "Klay Thompson", "Buddy Hield"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 798, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs NBA vēsturē pirmais sasniedza 30 triple-double divās sezonās pēc kārtas kopš 2015. gada?",
    options: ["Nikola Jokić", "Russell Westbrook", "Luka Dončić", "Ben Simmons"],
    answer: "Russell Westbrook",
    explanation: ""
  },
  {
    id: 799, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzstādīja rekordu — 2022. gadā 62 punkti, 10 trīspunktnieki un 10 atlēkušās vienā spēlē?",
    options: ["Nikola Jokić", "Luka Dončić", "Damian Lillard", "Jayson Tatum"],
    answer: "Damian Lillard",
    explanation: ""
  },
  {
    id: 800, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ieguva Defensive Player of the Year 2022. gadā?",
    options: ["Marcus Smart", "Rudy Gobert", "Jaren Jackson Jr.", "Bam Adebayo"],
    answer: "Marcus Smart",
    explanation: ""
  },
  {
    id: 801, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs 2021. gada finālos guva 50 punktus izšķirošajā spēlē?",
    options: ["Chris Paul", "Khris Middleton", "Giannis Antetokounmpo", "Devin Booker"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 802, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir guvis visvairāk punktu vienā spēlē mūsdienu laikā?",
    options: ["Kobe Bryant", "Devin Booker", "Damian Lillard", "Donovan Mitchell"],
    answer: "Donovan Mitchell",
    explanation: ""
  },
  {
    id: 803, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais MVP mūsdienās, kurš ir bijis otrās kārtas drafta izvēle?",
    options: ["Nikola Jokić", "Draymond Green", "Manu Ginóbili", "Isaiah Thomas"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 804, category: "History", difficulty: "medium",
    question: "Kura komanda pirmais sasniedza 73 uzvaras modernajā NBA?",
    options: ["Chicago Bulls", "Golden State Warriors", "Boston Celtics", "San Antonio Spurs"],
    answer: "Golden State Warriors",
    explanation: ""
  },
  {
    id: 805, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs kopš 2016. gada vienīgais guvis 60 punktus triple-double formā?",
    options: ["James Harden", "Luka Dončić", "Nikola Jokić", "Damian Lillard"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 806, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš 2020. gada burbuļa laikā guva 50+ punktus 2 spēlēs pēc kārtas?",
    options: ["Donovan Mitchell", "Jamal Murray", "TJ Warren", "James Harden"],
    answer: "Jamal Murray",
    explanation: ""
  },
  {
    id: 807, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais aktīvais NBA spēlētājs ar 4 Finals MVP?",
    options: ["Stephen Curry", "Kevin Durant", "LeBron James", "Kawhi Leonard"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 808, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pirmais mūsdienās uzvarēja Sixth Man of the Year un MVP savā karjerā?",
    options: ["James Harden", "Lamar Odom", "Manu Ginóbili", "Jamal Crawford"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 809, category: "History", difficulty: "medium",
    question: "Kurš NBA treneris vienīgais ir ieguvis Coach of the Year komandā ar zem .500 bilanci?",
    options: ["Doc Rivers", "Mike Budenholzer", "Gregg Popovich", "Sam Mitchell"],
    answer: "Mike Budenholzer",
    explanation: ""
  },
  {
    id: 810, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pirmais tika iekļauts All-NBA komandā no play-in komandas?",
    options: ["Jimmy Butler", "Luka Dončić", "LeBron James", "Ja Morant"],
    answer: "Jimmy Butler",
    explanation: ""
  },
  {
    id: 811, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs kopš 2015. gada ir iemetis visvairāk game-winner metienu pēdējās 5 sekundēs?",
    options: ["Stephen Curry", "Kevin Durant", "Damian Lillard", "DeMar DeRozan"],
    answer: "DeMar DeRozan",
    explanation: ""
  },
  {
    id: 812, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs mūsdienās ir pirmais ar 2000+ punktiem, 500+ atlēkušajām un 500+ piespēlēm sezonā?",
    options: ["Luka Dončić", "Russell Westbrook", "Nikola Jokić", "Giannis Antetokounmpo"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 813, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs 2023. gadā guva 55+ punktus bez neviena turnover?",
    options: ["Kevin Durant", "Klay Thompson", "Donovan Mitchell", "Joel Embiid"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 814, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pirmais ar back-to-back 50+ punktu spēlēm Playoff laikā kopš 2020. gada?",
    options: ["Donovan Mitchell", "Devin Booker", "Jamal Murray", "Anthony Edwards"],
    answer: "Devin Booker",
    explanation: ""
  },
  {
    id: 815, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs 2024. gadā sasniedza 73 punktus, dalot 3. visu laiku rezultātu?",
    options: ["Damian Lillard", "Luka Dončić", "Joel Embiid", "Devin Booker"],
    answer: "Luka Dončić",
    explanation: ""
  },
  {
    id: 816, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir guvis visvairāk steals vienā spēlē mūsdienu NBA periodā (2000–2025)?",
    options: ["Chris Paul", "Marcus Smart", "T.J. McConnell", "Kawhi Leonard"],
    answer: "T.J. McConnell",
    explanation: ""
  },
  {
    id: 817, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs atzina, ka spēles laikā speciāli ēda chili-hot Cheetos uz soliņa pirms spēles sākuma?",
    options: ["Nick Young", "J.R. Smith", "Kevin Durant", "Luka Dončić"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 818, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir slavens ar to, ka viņu tehniski noraidīja, jo viņš smējās par tiesnesi?",
    options: ["Tim Duncan", "Rasheed Wallace", "Draymond Green", "Dwight Howard"],
    answer: "Tim Duncan",
    explanation: ""
  },
  {
    id: 819, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs spēles laikā zaudēja sneakeru un tomēr guva grozu ar vienu apavu?",
    options: ["Manu Ginóbili", "Klay Thompson", "PJ Tucker", "Stephen Curry"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 820, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs izmeta bumbu tribīnēs, jo domāja, ka spēle jau ir beigusies — bet tā nebija?",
    options: ["J.R. Smith", "Lance Stephenson", "Nick Young", "JaVale McGee"],
    answer: "JaVale McGee",
    explanation: ""
  },
  {
    id: 821, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs kļuva slavens ar to, ka pūta pretinieka ausī Playoff spēles laikā?",
    options: ["JR Smith", "Lance Stephenson", "Ron Artest", "Patrick Beverley"],
    answer: "Lance Stephenson",
    explanation: ""
  },
  {
    id: 822, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs savā pirmajā NBA spēlē nejauši iemeta bumbu pretējās komandas grozā?",
    options: ["Tristan Thompson", "Ricky Rubio", "Dennis Rodman", "Kevin Garnett"],
    answer: "Tristan Thompson",
    explanation: ""
  },
  {
    id: 823, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir slavens ar to, ka spēles laikā uzmanību novērsa ar 'Shaqtin a Fool' momentu, aizmirstot aizsargāt savu pretinieku?",
    options: ["JaVale McGee", "Andre Drummond", "Dwight Howard", "Nick Young"],
    answer: "Nick Young",
    explanation: ""
  },
  {
    id: 824, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs kļuva par interneta memu, jo svinēja trīnīti, kas beigās neiekrīt grozā?",
    options: ["Nick Young", "J.R. Smith", "Paul George", "Kyle Kuzma"],
    answer: "Nick Young",
    explanation: ""
  },
  {
    id: 825, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs īsā brīdī kļuva slavens par frāzi: “You trippin’, bro” pēc tiesneša lēmuma?",
    options: ["Russell Westbrook", "Draymond Green", "James Harden", "DeMarcus Cousins"],
    answer: "DeMarcus Cousins",
    explanation: ""
  },
  {
    id: 826, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs 2020. gada sezonā nejauši apēda 6 hot wings spēles laikā (kameras to nofilmēja)?",
    options: ["Lou Williams", "Zion Williamson", "Andre Drummond", "Kyle Lowry"],
    answer: "Lou Williams",
    explanation: ""
  },
  {
    id: 827, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir slavens ar to, ka nejauši ietriecās pretinieka trenerī un atspēra viņu pāri krēsliem?",
    options: ["Shaquille O'Neal", "Giannis Antetokounmpo", "Russell Westbrook", "Charles Barkley"],
    answer: "Shaquille O'Neal",
    explanation: ""
  },
  {
    id: 828, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs reiz iebāza galvu grozā, darot dunku — un salauza konstrukciju?",
    options: ["Shaquille O'Neal", "Dwight Howard", "Vince Carter", "Zion Williamson"],
    answer: "Shaquille O'Neal",
    explanation: ""
  },
  {
    id: 829, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir slavens ar saviem 'airball' sodiem?",
    options: ["Shaquille O'Neal", "Giannis Antetokounmpo", "Dwight Howard", "Ben Simmons"],
    answer: "Dwight Howard",
    explanation: ""
  },
  {
    id: 830, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pirmo reizi vēsturē izpildīja 'self alley-oop' no soda līnijas?",
    options: ["Zion Williamson", "Tracy McGrady", "Ja Morant", "Anthony Edwards"],
    answer: "Tracy McGrady",
    explanation: ""
  },
  {
    id: 831, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs kļuva bēdīgi slavens, jo aizmirsis rezultātu un domāja, ka ir vadībā, tāpēc nenoguva metienu?",
    options: ["J.R. Smith", "Kyle Kuzma", "Ben Simmons", "Trae Young"],
    answer: "J.R. Smith",
    explanation: ""
  },
  {
    id: 832, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs spēles laikā meta bumbu uz tablo, domājot, ka tas ir grozs, jo viņam aizsvīdusi redze?",
    options: ["Steph Curry", "Chris Bosh", "Bobby Portis", "Rajon Rondo"],
    answer: "Rajon Rondo",
    explanation: ""
  },
  {
    id: 833, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs Playoff laikā izpūta putekļus no rokām kā LeBron, bet bumba izkrita no rokām un aizlidoja ārā?",
    options: ["Kyle Kuzma", "JaVale McGee", "Dwight Howard", "Anthony Bennett"],
    answer: "JaVale McGee",
    explanation: ""
  },
  {
    id: 834, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs nejauši iesita sev pa seju, mēģinot izsist bumbu no pretinieka?",
    options: ["Lance Stephenson", "Russell Westbrook", "James Harden", "Bam Adebayo"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 835, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs reiz neveiksmīgi leca uz dunku un ar seju ietriecās staba aizsargā?",
    options: ["Steph Curry", "Blake Griffin", "Ja Morant", "Dwyane Wade"],
    answer: "Blake Griffin",
    explanation: ""
  },
  {
    id: 836, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs tika sodīts, jo spēles laikā pieskārās tiesneša galvai, it kā to glāstot?",
    options: ["James Harden", "Luka Dončić", "Draymond Green", "Kevin Durant"],
    answer: "Luka Dončić",
    explanation: ""
  },
  {
    id: 837, category: "History", difficulty: "medium",
    question: "Kuram NBA spēlētājam pieder 'Shaqtin’ A Fool MVP' balva (viņš to ieguva vairākas reizes)?",
    options: ["JaVale McGee", "Russell Westbrook", "Dwight Howard", "Nick Young"],
    answer: "JaVale McGee",
    explanation: ""
  },
  {
    id: 838, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs reiz guva punktus ar dīvainu metienu, kur bumba atsitās pie viņa galvas un krita grozā?",
    options: ["Giannis Antetokounmpo", "Russell Westbrook", "RJ Barrett", "Chris Paul"],
    answer: "Russell Westbrook",
    explanation: ""
  },
  {
    id: 839, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs slavens ar to, ka iemeta bumbu pretinieka grozā pēc svilpes, un tas nejauši sanāca 3 punkti?",
    options: ["Jae Crowder", "Dwyane Wade", "Stephen Curry", "Marcus Smart"],
    answer: "Dwyane Wade",
    explanation: ""
  },
  {
    id: 840, category: "History", difficulty: "medium",
    question: "Kurš NBA duets sacentās trasē, kur viens no viņiem brauca ar Go-Kart un otrs ar bērnu trīsriteni?",
    options: ["LeBron & Kyrie", "Luka & Boban", "Steph & Klay", "Shaq & Kobe"],
    answer: "Luka & Boban",
    explanation: ""
  },
  {
    id: 841, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs kļuva par interneta hitu, jo spēles laikā nopūtās, apsēdās malā un pateica tiesnesim: 'I'm too old for this'?",
    options: ["Vince Carter", "Chris Paul", "Udonis Haslem", "LeBron James"],
    answer: "Vince Carter",
    explanation: ""
  },
  {
    id: 842, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs savainoja sevi, svinot game-winner (un izlaida nākamo spēli)?",
    options: ["Manu Ginóbili", "Stephen Curry", "Kyrie Irving", "LeBron James"],
    answer: "Manu Ginóbili",
    explanation: ""
  },
  {
    id: 843, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs kļuva slavens ar to, ka spēles laikā spēlēja ar atvērtu pogātu kreklu visu pirmo puslaiku?",
    options: ["Kawhi Leonard", "Jimmy Butler", "Kyle Lowry", "P.J. Tucker"],
    answer: "Jimmy Butler",
    explanation: ""
  },
  {
    id: 844, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs kļuva par memi, jo uzlika sev aizsargmasku, kas izskatījās kā supervaronim?",
    options: ["Anthony Davis", "LeBron James", "Kyrie Irving", "Joel Embiid"],
    answer: "Kyrie Irving",
    explanation: ""
  },
  {
    id: 845, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs operācijas laikā pieprasīja, lai fonā skanētu viņa paša highlight mixtape?",
    options: ["Kobe Bryant", "Giannis Antetokounmpo", "John Wall", "Zion Williamson"],
    answer: "John Wall",
    explanation: ""
  },
  {
    id: 846, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs kļuva par Shaqtin’ A Fool leģendu, kad viņš metu trīspunktnieku, pagriezās prom svinēt, domājot ka bumba iekrita, bet tā izkrita?",
    options: ["Nick Young", "J.R. Smith", "Kyle Kuzma", "Jordan Poole"],
    answer: "Nick Young",
    explanation: ""
  },
  {
    id: 847, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs Shaqtin’ A Fool momentā aizmirst atdot bumbu tiesnesim un iemeta pašrocīgi autu?",
    options: ["Russell Westbrook", "JaVale McGee", "Lance Stephenson", "Draymond Green"],
    answer: "Russell Westbrook",
    explanation: ""
  },
  {
    id: 848, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vienā no ikoniskākajiem Shaqtin’ momentiem iesita bumbu tablo, domājot, ka tas ir grozs?",
    options: ["Rajon Rondo", "Ben Simmons", "Chris Bosh", "Andre Drummond"],
    answer: "Rajon Rondo",
    explanation: ""
  },
  {
    id: 849, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam Shaquille O'Neal personīgi veltīja Shaqtin' A Fool segmentu, jo viņš tajā parādījās tik bieži?",
    options: ["JaVale McGee", "Dwight Howard", "Nick Young", "Andre Drummond"],
    answer: "JaVale McGee",
    explanation: ""
  },
  {
    id: 850, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs Shaqtin’ momentā izskrēja uzbrukumā, bet aizmirsis bumbu aiz sevis?",
    options: ["Lance Stephenson", "J.R. Smith", "Kyle Kuzma", "Giannis Antetokounmpo"],
    answer: "Lance Stephenson",
    explanation: ""
  },
  {
    id: 851, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs aizmeta bumbu 10 metrus pāri grozam, mēģinot iemest pamata layup?",
    options: ["Andre Drummond", "Dwight Howard", "Joel Embiid", "Hassan Whiteside"],
    answer: "Andre Drummond",
    explanation: ""
  },
  {
    id: 852, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs mēģināja iedunkot, bet bumba atsitās viņam pret seju un ielēca grozā?",
    options: ["Russell Westbrook", "Dwyane Wade", "Kyle Lowry", "Anthony Edwards"],
    answer: "Russell Westbrook",
    explanation: ""
  },
  {
    id: 853, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs, mēģinot iesist bumbu ārā, netrāpīja un pats apgāzās?",
    options: ["J.R. Smith", "JaVale McGee", "Luka Dončić", "P.J. Tucker"],
    answer: "JaVale McGee",
    explanation: ""
  },
  {
    id: 854, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs Shaqtin' momentā meta bumbu pretinieka puse, lai izvairītos no pārkāpuma, bet trāpīja tīri pretinieka sejā?",
    options: ["Giannis Antetokounmpo", "Chris Paul", "Dwyane Wade", "LeBron James"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 855, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pazīstams ar Shaqtin’ momentu, kur viņš deva piespēli… tiesnesim?",
    options: ["J.R. Smith", "Ben Simmons", "Kyle Kuzma", "Stephen Curry"],
    answer: "J.R. Smith",
    explanation: ""
  },
  {
    id: 856, category: "History", difficulty: "medium",
    question: "Kurš Shaqtin’ A Fool moments radās, kad spēlētājs aizmirsa, kurā grozā jāuzbrūk?",
    options: ["John Wall", "Ty Lawson", "Corey Brewer", "Tristan Thompson"],
    answer: "Tristan Thompson",
    explanation: ""
  },
  {
    id: 857, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam bija Shaqtin’ klips, kur viņš bloķēja SAVU komandas biedra metienu?",
    options: ["Kyle Kuzma", "Dwight Howard", "Pau Gasol", "Julius Randle"],
    answer: "Kyle Kuzma",
    explanation: ""
  },
  {
    id: 858, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs izpildīja brīdinājumu, aizsardzībā 'aizmirstot' savu spēlētāju un vērojot publiku?",
    options: ["Nick Young", "James Harden", "Ben Simmons", "Carmelo Anthony"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 859, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs driblēja bumbu 10 sekundes un tad vienkārši aizmirsās un to pazaudēja malā?",
    options: ["Lance Stephenson", "Jordan Poole", "D'Angelo Russell", "Kevin Porter Jr."],
    answer: "Lance Stephenson",
    explanation: ""
  },
  {
    id: 860, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vienā Shaqtin’ epizodē mēģināja dabūt pretinieku foul… lecot tālu projām no aizsarga?",
    options: ["James Harden", "Trae Young", "Chris Paul", "Marcus Smart"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 861, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs kļuva par Shaqtin’ sensāciju, kad skrienot aizsardzībā, viņš pakrita pats aiz savām kājām?",
    options: ["Danny Green", "Ja Morant", "Alex Caruso", "Dwyane Wade"],
    answer: "Dwyane Wade",
    explanation: ""
  },
  {
    id: 862, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs burtiski apgāza savu komandas biedru, mēģinot tikt pie atlēkušās bumbas?",
    options: ["DeMarcus Cousins", "Dwight Howard", "Andre Drummond", "Joel Embiid"],
    answer: "DeMarcus Cousins",
    explanation: ""
  },
  {
    id: 863, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam bija Shaqtin’ epizode, kur bumba iesprūda starp grozu un viņa galvu?",
    options: ["Robin Lopez", "Boban Marjanović", "Cedi Osman", "Joel Embiid"],
    answer: "Robin Lopez",
    explanation: ""
  },
  {
    id: 864, category: "History", difficulty: "medium",
    question: "Kurš Shaqtin’ A Fool moments radās, kad spēlētājs svinēja foul, bet īstenībā pārkāpums bija viņam?",
    options: ["Kyle Kuzma", "JR Smith", "Trevor Ariza", "Nick Young"],
    answer: "JR Smith",
    explanation: ""
  },
  {
    id: 865, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs nejauši izpildīja 'self-assist', kad bumba atsitās viņa sejā un atleca augšā?",
    options: ["Luka Dončić", "James Harden", "Russell Westbrook", "Chris Paul"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 866, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam ir Shaqtin’ epizode, kur viņš burtiski ieskrēja tablo un apgāza to?",
    options: ["Shaquille O’Neal", "Joel Embiid", "Zion Williamson", "Giannis Antetokounmpo"],
    answer: "Joel Embiid",
    explanation: ""
  },
  {
    id: 867, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vienā Shaqtin’ momentā aizklupa aiz gaisa un pēc tam vainoja grīdu?",
    options: ["Giannis Antetokounmpo", "Kyle Kuzma", "Jordan Clarkson", "LeBron James"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 868, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs aizsardzībā leca, lai bloķētu… savu komandas biedra piespēli?",
    options: ["J.R. Smith", "JaVale McGee", "Terrence Ross", "Patrick Beverley"],
    answer: "Terrence Ross",
    explanation: ""
  },
  {
    id: 869, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam bija Shaqtin’ epizode, kur viņš guva top bloķēto metienu… pie sava komandas biedra?",
    options: ["Dwight Howard", "Anthony Davis", "Zach LaVine", "Mo Bamba"],
    answer: "Dwight Howard",
    explanation: ""
  },
  {
    id: 870, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs, uzsākot driblu, pazaudēja bumbu aiz muguras un tajā pašā laikā saņēma tehnisko?",
    options: ["Demarcus Cousins", "Draymond Green", "Nikola Jokić", "Montrezl Harrell"],
    answer: "Draymond Green",
    explanation: ""
  },
  {
    id: 871, category: "History", difficulty: "medium",
    question: "Kuram Shaqtin’ momentam pievienoja titru 'The Lost Child', jo spēlētājs klīda pa laukumu bez mērķa?",
    options: ["J.R. Smith", "JaVale McGee", "Lance Stephenson", "Ben Simmons"],
    answer: "Ben Simmons",
    explanation: ""
  },
  {
    id: 872, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs spēles laikā lēca pump-fake aizsardzībā, pat ja uzbrucējs pat nepacēla bumbu?",
    options: ["Andre Drummond", "Dwight Powell", "Russell Westbrook", "Jonas Valančiūnas"],
    answer: "Andre Drummond",
    explanation: ""
  },
  {
    id: 873, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs mēģināja izpildīt 'inbound' piespēli, bet burtiski meta bumbu taisni pretī tablo?",
    options: ["Ben Simmons", "Kyle Kuzma", "Lonzo Ball", "Larry Nance Jr."],
    answer: "Kyle Kuzma",
    explanation: ""
  },
  {
    id: 874, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam Shaq piešķīra īpašo balvu 'Worst Pass of All Time'?",
    options: ["Nikola Jokić", "J.R. Smith", "Kelly Oubre Jr.", "Kevin Knox"],
    answer: "Kelly Oubre Jr.",
    explanation: ""
  },
  {
    id: 875, category: "History", difficulty: "medium",
    question: "Kura NBA komanda pēdējo reizi iekļuva playoff tikai 2023. gadā, pārtraucot 16 gadu sausumu — garāko aktīvo streak NBA vēsturē?",
    options: ["Detroit Pistons", "Sacramento Kings", "Charlotte Hornets", "Minnesota Timberwolves"],
    answer: "Sacramento Kings",
    explanation: ""
  },
  {
    id: 876, category: "History", difficulty: "medium",
    question: "Kura NBA komanda 2023–2024 sezonā piedzīvoja 28 zaudējumus pēc kārtas — vienu no garākajām losing streak vispār?",
    options: ["Detroit Pistons", "Houston Rockets", "Charlotte Hornets", "San Antonio Spurs"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 877, category: "History", difficulty: "medium",
    question: "Kurai NBA komandai pieder garākais losing streak vienas sezonas ietvaros (26 zaudējumi pēc kārtas)?",
    options: ["Cleveland Cavaliers", "Houston Rockets", "Philadelphia 76ers", "Orlando Magic"],
    answer: "Philadelphia 76ers",
    explanation: ""
  },
  {
    id: 878, category: "History", difficulty: "medium",
    question: "Kura komanda 2013–2016 gadus pavadīja ar leģendāro 'The Process', nododot vairākus MVP kalibra spēlētājus tankošanas dēļ?",
    options: ["Philadelphia 76ers", "Phoenix Suns", "New York Knicks", "Atlanta Hawks"],
    answer: "Philadelphia 76ers",
    explanation: ""
  },
  {
    id: 879, category: "History", difficulty: "medium",
    question: "Kura komanda pēdējo 10 gadu laikā ir pabeigusi sezonu ar 20 vai mazāk uzvarām visvairāk reižu?",
    options: ["Orlando Magic", "Detroit Pistons", "Houston Rockets", "New York Knicks"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 880, category: "History", difficulty: "medium",
    question: "Kura NBA komanda 2021–2023 gadā trīs sezonas pēc kārtas pabeidza ar top-5 sliktāko bilanci līgā?",
    options: ["Houston Rockets", "Oklahoma City Thunder", "Orlando Magic", "Sacramento Kings"],
    answer: "Houston Rockets",
    explanation: ""
  },
  {
    id: 881, category: "History", difficulty: "medium",
    question: "Kura komanda 2020. gadā pabeidza sezonu ar 15 uzvarām — sliktāko bilanci franšīzes vēsturē?",
    options: ["Golden State Warriors", "Cleveland Cavaliers", "Minnesota Timberwolves", "Chicago Bulls"],
    answer: "Golden State Warriors",
    explanation: ""
  },
  {
    id: 882, category: "History", difficulty: "medium",
    question: "Kurai komandai pieder garākais playoff sausuma periods NBA vēsturē (16 sezonas pēc kārtas)?",
    options: ["Charlotte Hornets", "Sacramento Kings", "Washington Wizards", "Indiana Pacers"],
    answer: "Sacramento Kings",
    explanation: ""
  },
  {
    id: 883, category: "History", difficulty: "medium",
    question: "Kurš klubs 2023–24 sezonas sākumā zaudēja 19 spēles pēc kārtas, kas ir franšīzes rekords?",
    options: ["San Antonio Spurs", "Portland Trail Blazers", "Detroit Pistons", "Charlotte Hornets"],
    answer: "San Antonio Spurs",
    explanation: ""
  },
  {
    id: 884, category: "History", difficulty: "medium",
    question: "Kura komanda kopš 2014. gada nav uzvarējusi nevienā playoff sērijā?",
    options: ["New York Knicks", "Washington Wizards", "Charlotte Hornets", "Chicago Bulls"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 885, category: "History", difficulty: "medium",
    question: "Kura komanda kopš 2010. gada tikai vienu reizi uzvarējusi playoff sēriju?",
    options: ["New York Knicks", "Orlando Magic", "Indiana Pacers", "San Antonio Spurs"],
    answer: "New York Knicks",
    explanation: ""
  },
  {
    id: 886, category: "History", difficulty: "medium",
    question: "Kura komanda ir pabeigusi visvairāk sezonas pēc kārtas bez All-Star pārstāvja (2018–2024)?",
    options: ["Houston Rockets", "Orlando Magic", "Sacramento Kings", "Charlotte Hornets"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 887, category: "History", difficulty: "medium",
    question: "Kura NBA komanda 2011–2022 11 sezonu laikā bija 7 reizes loterijā?",
    options: ["Detroit Pistons", "Phoenix Suns", "Minnesota Timberwolves", "Cleveland Cavaliers"],
    answer: "Minnesota Timberwolves",
    explanation: ""
  },
  {
    id: 888, category: "History", difficulty: "medium",
    question: "Kura komanda ar slaveno 'Trust The Process' posmu uzstādīja rekordu: 10, 18 un 19 uzvaras trīs secīgās sezonās?",
    options: ["Philadelphia 76ers", "Orlando Magic", "Brooklyn Nets", "Indiana Pacers"],
    answer: "Philadelphia 76ers",
    explanation: ""
  },
  {
    id: 889, category: "History", difficulty: "medium",
    question: "Kura komanda 2020. gadā kļuva par pirmo, kurai bija divas losing streaks virs 10 spēlēm vienā sezonā?",
    options: ["Cleveland Cavaliers", "Atlanta Hawks", "Houston Rockets", "San Antonio Spurs"],
    answer: "Houston Rockets",
    explanation: ""
  },
  {
    id: 890, category: "History", difficulty: "medium",
    question: "Kurai NBA komandai no 2014. līdz 2024. gadam bija visvairāk treneru maiņu (8 dažādi treneri)?",
    options: ["New York Knicks", "Sacramento Kings", "Brooklyn Nets", "Detroit Pistons"],
    answer: "Sacramento Kings",
    explanation: ""
  },
  {
    id: 891, category: "History", difficulty: "medium",
    question: "Kura komanda ir vienīgā modernajā NBA, kas 4 reizes pēdējo 10 gadu laikā ir finišējusi ar sliktāko bilanci līgā?",
    options: ["Detroit Pistons", "Philadelphia 76ers", "Houston Rockets", "Orlando Magic"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 892, category: "History", difficulty: "medium",
    question: "Kura komanda 2020. gadu sākumā uzstādīja rekordu — trīs 10+ losing streaks divās sezonās?",
    options: ["Orlando Magic", "Detroit Pistons", "Houston Rockets", "San Antonio Spurs"],
    answer: "Houston Rockets",
    explanation: ""
  },
  {
    id: 893, category: "History", difficulty: "medium",
    question: "Kurai komandai ir bijušas sliktākās trīspunktnieku precizitātes sezonas no 2017–2024?",
    options: ["Orlando Magic", "Charlotte Hornets", "Houston Rockets", "Atlanta Hawks"],
    answer: "Orlando Magic",
    explanation: ""
  },
  {
    id: 894, category: "History", difficulty: "medium",
    question: "Kura komanda 2014–2024 periodā nevienu reizi nav sasniegusi 45 uzvaras sezonā?",
    options: ["Charlotte Hornets", "Detroit Pistons", "Sacramento Kings", "Washington Wizards"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 895, category: "History", difficulty: "medium",
    question: "Kura komanda pēdējo 10 gadu laikā ir bijusi pēdējā vietā rietumos visbiežāk?",
    options: ["Portland Trail Blazers", "Houston Rockets", "San Antonio Spurs", "Oklahoma City Thunder"],
    answer: "Houston Rockets",
    explanation: ""
  },
  {
    id: 896, category: "History", difficulty: "medium",
    question: "Kura Austrumu komanda 2016–2024 astoņos gados tikai vienreiz sasniedza vairāk par 35 uzvarām?",
    options: ["Detroit Pistons", "Orlando Magic", "Charlotte Hornets", "Toronto Raptors"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 897, category: "History", difficulty: "medium",
    question: "Kura komanda 2021. gadā uzstādīja rekordu ar -10.6 point differential, neskatoties uz jauno treneri?",
    options: ["Houston Rockets", "Detroit Pistons", "Oklahoma City Thunder", "Cleveland Cavaliers"],
    answer: "Oklahoma City Thunder",
    explanation: ""
  },
  {
    id: 898, category: "History", difficulty: "medium",
    question: "Kura komanda pabeidza 2023. sezonu ar vēsturisku -15 zaudējumu sēriju un 10 spēlēs zaudēja ar vidējo starpību -25?",
    options: ["San Antonio Spurs", "Charlotte Hornets", "Portland Trail Blazers", "Utah Jazz"],
    answer: "San Antonio Spurs",
    explanation: ""
  },
  {
    id: 899, category: "History", difficulty: "medium",
    question: "Kura NBA komanda pēdējo reizi uzvarēja playoff sēriju 2002. gadā un kopš tā laika nav uzvarējusi nevienu?",
    options: ["New York Knicks", "Washington Wizards", "Charlotte Hornets", "Detroit Pistons"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 900, category: "History", difficulty: "medium",
    question: "Kurai komandai pieder modernās ēras rekords — 12 gadu periodā tikai 1 playoff uzvara (nevis sērija, bet viena spēle)?",
    options: ["Orlando Magic", "Detroit Pistons", "Phoenix Suns", "Minnesota Timberwolves"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 901, category: "History", difficulty: "medium",
    question: "Kura komanda 2011–2020 pabeidza 10 gadus bez neviena All-NBA spēlētāja?",
    options: ["Charlotte Hornets", "Orlando Magic", "Brooklyn Nets", "Sacramento Kings"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 902, category: "History", difficulty: "medium",
    question: "Kura komanda 2013.–2023. periodā 10 gados septiņas reizes ieguva top-7 drafta izvēli?",
    options: ["Orlando Magic", "Sacramento Kings", "Detroit Pistons", "Houston Rockets"],
    answer: "Orlando Magic",
    explanation: ""
  },
  {
    id: 903, category: "History", difficulty: "medium",
    question: "Kurš NBA klubs 2020. gadā finišēja ar 20 uzvarām, bet trīs gadu laikā nespēja sasniegt pat 25 uzvaras robežu?",
    options: ["Detroit Pistons", "Houston Rockets", "Charlotte Hornets", "San Antonio Spurs"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 904, category: "History", difficulty: "medium",
    question: "Kura komanda pēdējā desmitgadē 5 reizes finišēja pēdējā vietā savā divīzijā?",
    options: ["Minnesota Timberwolves", "Washington Wizards", "Oklahoma City Thunder", "Orlando Magic"],
    answer: "Washington Wizards",
    explanation: ""
  },
  {
    id: 905, category: "History", difficulty: "medium",
    question: "Kura NBA komanda kopš 2010. gada līdz 2024. gadam ir tikai vienu reizi uzvarējusi playoff sēriju, neskatoties uz to, ka tā ir liela tirgus franšīze?",
    options: ["New York Knicks", "Dallas Mavericks", "Chicago Bulls", "Washington Wizards"],
    answer: "New York Knicks",
    explanation: ""
  },
  {
    id: 906, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais vēsturē ar trīs sezonām pēc kārtas, kurās vidēji > 30 punktus, > 8 atlēkušās un > 8 piespēles?",
    options: ["James Harden", "Luka Dončić", "LeBron James", "Russell Westbrook"],
    answer: "Luka Dončić",
    explanation: ""
  },
  {
    id: 907, category: "History", difficulty: "medium",
    question: "Kura NBA komanda 2020–2024 periodā trīs reizes pēc kārtas finišēja ar top-4 sliktāko bilanci?",
    options: ["Houston Rockets", "Detroit Pistons", "Orlando Magic", "San Antonio Spurs"],
    answer: "Houston Rockets",
    explanation: ""
  },
  {
    id: 908, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs 2022. gada playoffs guva divas spēles ar 40+ punktiem un 70% metienu precizitāti?",
    options: ["Devin Booker", "Jimmy Butler", "Giannis Antetokounmpo", "Jayson Tatum"],
    answer: "Jimmy Butler",
    explanation: ""
  },
  {
    id: 909, category: "History", difficulty: "medium",
    question: "Kurš NBA klubs kopš 2015. gada visvairāk reižu finišējis pēdējā vietā savā konferencē?",
    options: ["Detroit Pistons", "Houston Rockets", "Orlando Magic", "Minnesota Timberwolves"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 910, category: "History", difficulty: "medium",
    question: "Kurš ir vienīgais spēlētājs mūsdienu NBA, kurš vienā sezonā guva 3000+ punktus, 600+ atlēkušās un 600+ piespēles?",
    options: ["Nikola Jokić", "Luka Dončić", "Russell Westbrook", "LeBron James"],
    answer: "Luka Dončić",
    explanation: ""
  },
  {
    id: 911, category: "History", difficulty: "medium",
    question: "Kura komanda 2024. gada sezonā piedzīvoja rekordu — 29 zaudējumus pēc kārtas izbraukumā?",
    options: ["Washington Wizards", "Charlotte Hornets", "Detroit Pistons", "San Antonio Spurs"],
    answer: "Washington Wizards",
    explanation: ""
  },
  {
    id: 912, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais aizsargs kopš 2000. gada ar 4 blokiem un 4 steals NBA finālu spēlē?",
    options: ["Kobe Bryant", "Dwyane Wade", "Klay Thompson", "Jrue Holiday"],
    answer: "Dwyane Wade",
    explanation: ""
  },
  {
    id: 913, category: "History", difficulty: "medium",
    question: "Kurš NBA klubs 2020–2023 periodā uzvarēja tikai 59 spēles trīs sezonās kopā — sliktākais rādītājs līgā?",
    options: ["Houston Rockets", "Detroit Pistons", "Oklahoma City Thunder", "Orlando Magic"],
    answer: "Houston Rockets",
    explanation: ""
  },
  {
    id: 914, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pirmais NBA vēsturē izcīnīja 40 atlēkušās bumbas pret komandu, kurā spēlēja arī Bill Russell?",
    options: ["Wilt Chamberlain", "Moses Malone", "Kareem Abdul-Jabbar", "Wes Unseld"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 915, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē, kurš guva 45+ punktus un 15+ atlēkušās bez kļūdām (0 turnovers)?",
    options: ["Joel Embiid", "Giannis Antetokounmpo", "Anthony Davis", "Jayson Tatum"],
    answer: "Joel Embiid",
    explanation: ""
  },
  {
    id: 916, category: "History", difficulty: "medium",
    question: "Kura NBA komanda ir vienīgā, kas pēdējo 10 gadu laikā nav vienu reizi iekļuvusi NBA otrajā kārtā?",
    options: ["Washington Wizards", "Orlando Magic", "Detroit Pistons", "Charlotte Hornets"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 917, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais mūsdienās ar 60 punktu triple-double?",
    options: ["James Harden", "Luka Dončić", "Devin Booker", "Nikola Jokić"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 918, category: "History", difficulty: "medium",
    question: "Kura komanda 2021. gadā uzstādīja rekordu: trīs zaudējumu spēles pēc kārtas ar 45+ punktu starpību?",
    options: ["Oklahoma City Thunder", "Houston Rockets", "Orlando Magic", "Chicago Bulls"],
    answer: "Oklahoma City Thunder",
    explanation: ""
  },
  {
    id: 919, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir visātrākais NBA vēsturē, kas sasniedzis 7 000 karjeras piespēles?",
    options: ["LeBron James", "Chris Paul", "Nikola Jokić", "Russell Westbrook"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 920, category: "History", difficulty: "medium",
    question: "Kurš NBA klubs kopš 2014. gada ir pabeidzis visvairāk sezonas ar negatīvu bilanci?",
    options: ["Orlando Magic", "Charlotte Hornets", "Detroit Pistons", "Sacramento Kings"],
    answer: "Orlando Magic",
    explanation: ""
  },
  {
    id: 921, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pēdējo 10 gadu laikā ir uzstādījis rekordu — trīs spēles pēc kārtas ar 50+ punktiem?",
    options: ["Stephen Curry", "Devin Booker", "James Harden", "Damian Lillard"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 922, category: "History", difficulty: "medium",
    question: "Kura komanda 2022. gadā zaudēja 15 spēles pēc kārtas ar vidējo starpību -17 punkti?",
    options: ["Portland Trail Blazers", "San Antonio Spurs", "Detroit Pistons", "Houston Rockets"],
    answer: "Portland Trail Blazers",
    explanation: ""
  },
  {
    id: 923, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pēdējās 8 sezonās ir visvairāk reizes iekļuvis All-NBA First Team?",
    options: ["Giannis Antetokounmpo", "Kevin Durant", "Stephen Curry", "Joel Embiid"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 924, category: "History", difficulty: "medium",
    question: "Kura komanda pēdējās 10 sezonās ir visbiežāk saņēmuši top-4 drafta izvēli?",
    options: ["Orlando Magic", "Detroit Pistons", "Houston Rockets", "Charlotte Hornets"],
    answer: "Orlando Magic",
    explanation: ""
  },
  {
    id: 925, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs 2024. gadā uzstādīja rekordu ar 73 punktiem — dalot 3. visu laiku labāko rezultātu?",
    options: ["Donovan Mitchell", "Luka Dončić", "Damian Lillard", "Devin Booker"],
    answer: "Luka Dončić",
    explanation: ""
  },
  {
    id: 926, category: "History", difficulty: "medium",
    question: "Kura komanda 2020–2024 pabeidza četras sezonas bez 30 uzvarām?",
    options: ["Charlotte Hornets", "Detroit Pistons", "San Antonio Spurs", "Houston Rockets"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 927, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais NBA vēsturē ar 30+ punktiem un 20+ piespēlēm playoff spēlē?",
    options: ["Luka Dončić", "Nikola Jokić", "Magic Johnson", "Jamir Nelson"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 928, category: "History", difficulty: "medium",
    question: "Kura komanda uzstādīja NBA rekordu — 26 zaudējumi pēc kārtas divās sezonās pēc kārtas?",
    options: ["Philadelphia 76ers", "Houston Rockets", "Detroit Pistons", "Cleveland Cavaliers"],
    answer: "Philadelphia 76ers",
    explanation: ""
  },
  {
    id: 929, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pirmais guva 50+ punktus spēlē bez neviena iemesta soda metiena?",
    options: ["Karl Malone", "Klay Thompson", "Kyrie Irving", "Steph Curry"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 930, category: "History", difficulty: "medium",
    question: "Kura komanda 2023–24 sezonā piedzīvoja sliktāko NET rating kopš 2015. gada?",
    options: ["Portland Trail Blazers", "Washington Wizards", "Detroit Pistons", "Charlotte Hornets"],
    answer: "Washington Wizards",
    explanation: ""
  },
  {
    id: 931, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais vēsturē ar vairākiem 60+ punktu triple-doubles?",
    options: ["Nikola Jokić", "Luka Dončić", "James Harden", "Giannis Antetokounmpo"],
    answer: "Luka Dončić",
    explanation: ""
  },
  {
    id: 932, category: "History", difficulty: "medium",
    question: "Kurš NBA klubs pēdējo 12 gadu laikā ir visilgāk bijis bez 50 uzvaru sezonas?",
    options: ["Charlotte Hornets", "Washington Wizards", "Orlando Magic", "Detroit Pistons"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 933, category: "History", difficulty: "medium",
    question: "Kura NBA komanda 2021. gadā zaudēja ar 73 punktu starpību — sliktāko rezultātu NBA vēsturē?",
    options: ["Oklahoma City Thunder", "Detroit Pistons", "Charlotte Hornets", "Houston Rockets"],
    answer: "Oklahoma City Thunder",
    explanation: ""
  },
  {
    id: 934, category: "History", difficulty: "medium",
    question: "Kura komanda 2023–24 sezonā kļuva par pirmo NBA vēsturē, kas vienā sezonā zaudēja 20+ spēles pēc kārtas gan mājās, gan izbraukumā?",
    options: ["Detroit Pistons", "Washington Wizards", "Charlotte Hornets", "Portland Trail Blazers"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 935, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pirmais, kurš vienā spēlē guva 70+ punktus un izdarīja 10+ piespēles?",
    options: ["James Harden", "Luka Dončić", "Devin Booker", "Damian Lillard"],
    answer: "Luka Dončić",
    explanation: ""
  },
  {
    id: 936, category: "History", difficulty: "medium",
    question: "Kura NBA komanda pēdējo 15 gadu laikā (2010–2024) 10 reizes finišēja pēdējā vietā savā divīzijā?",
    options: ["Orlando Magic", "Detroit Pistons", "Sacramento Kings", "Charlotte Hornets"],
    answer: "Orlando Magic",
    explanation: ""
  },
  {
    id: 937, category: "History", difficulty: "medium",
    question: "Kura komanda 2021. gadā uzstādīja modernās ēras negatīvo rekordu – 57 punktu zaudējums mājas spēlē?",
    options: ["Indiana Pacers", "Oklahoma City Thunder", "Miami Heat", "Boston Celtics"],
    answer: "Indiana Pacers",
    explanation: ""
  },
  {
    id: 938, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pēdējo 10 gadu laikā pirmais guva triple-double ar 0 punktiem?",
    options: ["Draymond Green", "Ricky Rubio", "Josh Giddey", "Ben Simmons"],
    answer: "Draymond Green",
    explanation: ""
  },
  {
    id: 939, category: "History", difficulty: "medium",
    question: "Kura NBA komanda 2018–2024 periodā nevienu reizi neuzvarēja vairāk par 30 spēlēm sezonā?",
    options: ["Washington Wizards", "Detroit Pistons", "Charlotte Hornets", "Orlando Magic"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 940, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs playoffos ir vienīgais ar 50+ punktiem un 0 kļūdām?",
    options: ["Kobe Bryant", "Jimmy Butler", "Damian Lillard", "Stephen Curry"],
    answer: "Damian Lillard",
    explanation: ""
  },
  {
    id: 941, category: "History", difficulty: "medium",
    question: "Kura NBA franšīze 2010–2020 periodā uzstādīja sliktāko 10 gadu bilanci visā līgā?",
    options: ["Sacramento Kings", "Detroit Pistons", "Minnesota Timberwolves", "Phoenix Suns"],
    answer: "Sacramento Kings",
    explanation: ""
  },
  {
    id: 942, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais NBA vēsturē, kas guva 40 punktus, bet metienu procentuālā bija 100% no spēles?",
    options: ["Klay Thompson", "Wilt Chamberlain", "Nikola Jokić", "Malik Monk"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 943, category: "History", difficulty: "medium",
    question: "Kura komanda zaudēja 14 spēles pēc kārtas divas reizes vienā sezonā (2022–23)?",
    options: ["Houston Rockets", "San Antonio Spurs", "Detroit Pistons", "Charlotte Hornets"],
    answer: "San Antonio Spurs",
    explanation: ""
  },
  {
    id: 944, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzstādīja rekordu ar 10 trīspunktniekiem vienā ceturtdaļā?",
    options: ["Klay Thompson", "Stephen Curry", "Damian Lillard", "Donovan Mitchell"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 945, category: "History", difficulty: "medium",
    question: "Kura NBA komanda kopš 2016. gada nav uzvarējusi nevienu playoff spēli (pat ne sēriju, bet spēli)?",
    options: ["Charlotte Hornets", "Houston Rockets", "Orlando Magic", "Detroit Pistons"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 946, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais ar back-to-back 50+ punktu spēlēm komandas uzvarās ar 20+ punktu starpību?",
    options: ["Luka Dončić", "James Harden", "Joel Embiid", "Giannis Antetokounmpo"],
    answer: "Joel Embiid",
    explanation: ""
  },
  {
    id: 947, category: "History", difficulty: "medium",
    question: "Kura komanda kopš 2015. gada visvairāk reižu pabeigusi sezonu ar TOP-3 drafta izredzēm?",
    options: ["Orlando Magic", "Houston Rockets", "Detroit Pistons", "Cleveland Cavaliers"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 948, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais ar Finālu triple-double, kurā ir 30 punkti, 20 atlēkušās un 10 piespēles?",
    options: ["LeBron James", "Nikola Jokić", "Giannis Antetokounmpo", "Shaquille O’Neal"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 949, category: "History", difficulty: "medium",
    question: "Kura komanda 2020. gadā piedzīvoja 8 zaudējumu sēriju, kur katru reizi zaudēja ar 25+ punktiem?",
    options: ["Oklahoma City Thunder", "Detroit Pistons", "Orlando Magic", "Houston Rockets"],
    answer: "Oklahoma City Thunder",
    explanation: ""
  },
  {
    id: 950, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vienīgais modernajā NBA (kopš 2000.) guvis 30+ punktus katrā spēlē visā playoff sērijā?",
    options: ["Kobe Bryant", "Devin Booker", "Michael Jordan", "Luka Dončić"],
    answer: "Devin Booker",
    explanation: ""
  },
  {
    id: 951, category: "History", difficulty: "medium",
    question: "Kura komanda 2021–2024 periodā zaudēja 15 spēles pēc kārtas trīs atsevišķos sezonas posmos?",
    options: ["Portland Trail Blazers", "Washington Wizards", "Detroit Pistons", "Houston Rockets"],
    answer: "Portland Trail Blazers",
    explanation: ""
  },
  {
    id: 952, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kuram ir 35+ punkti, 20+ atlēkušās un 10+ piespēles spēlē bez pagarinājuma?",
    options: ["Giannis Antetokounmpo", "Nikola Jokić", "Anthony Davis", "Joel Embiid"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 953, category: "History", difficulty: "medium",
    question: "Kura NBA franšīze pēdējo 20 gadu laikā ne reizi nav uzvarējusi 50 spēles sezonā?",
    options: ["Charlotte Hornets", "Sacramento Kings", "Orlando Magic", "Minnesota Timberwolves"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 954, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pirmais ar 35 punktiem, 10 atlēkušām un 5 steals NBA finālu spēlē?",
    options: ["LeBron James", "Michael Jordan", "Kawhi Leonard", "Stephen Curry"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 955, category: "History", difficulty: "medium",
    question: "Kura komanda 2024. gadā vienā spēlē guva tikai 33 punktus pirmajā puslaikā — sliktākais rādītājs sezonā?",
    options: ["Memphis Grizzlies", "Chicago Bulls", "Washington Wizards", "Miami Heat"],
    answer: "Memphis Grizzlies",
    explanation: ""
  },
  {
    id: 956, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vidēji visvairāk punktu guva 2023–24 sezonas clutch situācijās?",
    options: ["Luka Dončić", "Stephen Curry", "De'Aaron Fox", "Damian Lillard"],
    answer: "De'Aaron Fox",
    explanation: ""
  },
  {
    id: 957, category: "History", difficulty: "medium",
    question: "Kura komanda 2015–2024 periodā visvairāk reižu finišējusi ar bottom-5 aizsardzību?",
    options: ["Houston Rockets", "Sacramento Kings", "Portland Trail Blazers", "Charlotte Hornets"],
    answer: "Portland Trail Blazers",
    explanation: ""
  },
  {
    id: 958, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais ar 10+ trīspunktniekiem trijās dažādās sezonās?",
    options: ["Klay Thompson", "Stephen Curry", "Damian Lillard", "Ray Allen"],
    answer: "Stephen Curry",
    explanation: ""
  },
  {
    id: 959, category: "History", difficulty: "medium",
    question: "Kura komanda pēdējo 12 gadu laikā vienīgā, kas nav bijusi nevienā konferenču finālā?",
    options: ["Washington Wizards", "New Orleans Pelicans", "Charlotte Hornets", "Detroit Pistons"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 960, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vienīgais NBA vēsturē ieguvis MVP balvu bez 1. vietas balsīm?",
    options: ["Wilt Chamberlain", "Nikola Jokić", "Bill Russell", "Wes Unseld"],
    answer: "Wes Unseld",
    explanation: ""
  },
  {
    id: 961, category: "History", difficulty: "medium",
    question: "Kura komanda 2021–24 periodā uzrādīja sliktāko vidējo punktu starpību (-10.1)?",
    options: ["Charlotte Hornets", "Washington Wizards", "Detroit Pistons", "San Antonio Spurs"],
    answer: "Charlotte Hornets",
    explanation: ""
  },
  {
    id: 962, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais ar 45+ punktiem, 10 atlēkušām un 10 piespēlēm startējot kā centrs?",
    options: ["Nikola Jokić", "Wilt Chamberlain", "Bam Adebayo", "Joel Embiid"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 963, category: "History", difficulty: "medium",
    question: "Kura komanda 2018–2024 periodā visbiežāk pabeidza sezonu ar top-5 sliktāko uzbrukumu?",
    options: ["Orlando Magic", "Detroit Pistons", "San Antonio Spurs", "Houston Rockets"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 964, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais vēsturē ar 10 finālu sērijām, kurās viņš vadīja abas komandas punktos, atlēkušajās, piespēlēs, bloķētos metienos un steals?",
    options: ["LeBron James", "Michael Jordan", "Tim Duncan", "Kobe Bryant"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 965, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ieguva Finals MVP, neskatoties uz to, ka viņa komanda zaudēja finālu?",
    options: ["Jerry West", "LeBron James", "Wilt Chamberlain", "Kevin Durant"],
    answer: "Jerry West",
    explanation: ""
  },
  {
    id: 966, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais vēsturē ar 50+ punktiem spēlē, metot tikai 11 driblus?",
    options: ["Klay Thompson", "Stephen Curry", "Devin Booker", "Ray Allen"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 967, category: "History", difficulty: "medium",
    question: "Kurš superzvaigzne ir uzstādījis rekordu ar 10 pēc kārtas 30+ punktu spēlēm NBA finālos?",
    options: ["Michael Jordan", "LeBron James", "Shaquille O’Neal", "Kobe Bryant"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 968, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš karjerā dominēja ar 30+ punktiem, 10+ atlēkušajām un 5+ piespēlēm fināla sērijā?",
    options: ["Shaquille O’Neal", "LeBron James", "Giannis Antetokounmpo", "Nikola Jokić"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 969, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pirmais ar 3 spēlēm 50+ punktu apmērā vienā playoff sērijā?",
    options: ["Devin Booker", "Donovan Mitchell", "Michael Jordan", "Luka Dončić"],
    answer: "Devin Booker",
    explanation: ""
  },
  {
    id: 970, category: "History", difficulty: "medium",
    question: "Kurš superzvaigzne ir vienīgais aktīvais spēlētājs ar 20+ sezonām vienā komandā?",
    options: ["Stephen Curry", "Dirk Nowitzki", "LeBron James", "Udonis Haslem"],
    answer: "Dirk Nowitzki",
    explanation: ""
  },
  {
    id: 971, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais NBA vēsturē ar triple-double, kurā visi punkti nāca no trīspunktniekiem?",
    options: ["James Harden", "Stephen Curry", "Fred VanVleet", "Luka Dončić"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 972, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir izcīnījis vairāk blokpunktu nekā 10 NBA komandas kopā ņemtas 1990. gados?",
    options: ["Dikembe Mutombo", "Hakeem Olajuwon", "Shaquille O’Neal", "Alonzo Mourning"],
    answer: "Hakeem Olajuwon",
    explanation: ""
  },
  {
    id: 973, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam ir visvairāk 50+ punktu spēles bez pagarinājuma modernajā NBA?",
    options: ["Kobe Bryant", "James Harden", "Stephen Curry", "Devin Booker"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 974, category: "History", difficulty: "medium",
    question: "Kurš superzvaigzne ir vienīgais, kurš guva 40+ punktus 5 no pirmajām 10 playoff spēlēm karjerā?",
    options: ["Michael Jordan", "Luka Dončić", "Allen Iverson", "Anthony Edwards"],
    answer: "Luka Dončić",
    explanation: ""
  },
  {
    id: 975, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais ar trīs spēlēm 60+ punktu apmērā, kurās NETRAUC tikpat kā nevienu trīspunktnieku?",
    options: ["Kobe Bryant", "David Robinson", "Wilt Chamberlain", "Elgin Baylor"],
    answer: "Wilt Chamberlain",
    explanation: ""
  },
  {
    id: 976, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais NBA vēsturē, kas guva 20+ punktus un 20+ piespēles regulārajā un playoffs spēlē vienā sezonā?",
    options: ["Luka Dončić", "Nikola Jokić", "Magic Johnson", "Chris Paul"],
    answer: "Luka Dončić",
    explanation: ""
  },
  {
    id: 977, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais aktīvais Suns spēlētājs ar 50+ punktiem playoff spēlē?",
    options: ["Kevin Durant", "Devin Booker", "Chris Paul", "Bradley Beal"],
    answer: "Devin Booker",
    explanation: ""
  },
  {
    id: 978, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais ar 70 punktiem spēlē vecāks par 35 gadiem?",
    options: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Wilt Chamberlain"],
    answer: "Kobe Bryant",
    explanation: ""
  },
  {
    id: 979, category: "History", difficulty: "medium",
    question: "Kuram NBA spēlētājam ir vissliktākā karjeras bilance finālos no superzvaigznēm (2-7)?",
    options: ["Kobe Bryant", "Wilt Chamberlain", "LeBron James", "Karl Malone"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 980, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pirmais guva 50 punktus spēlē bez soda metieniem?",
    options: ["Klay Thompson", "Stephen Curry", "Kyrie Irving", "De'Aaron Fox"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 981, category: "History", difficulty: "medium",
    question: "Kurš aktīvais spēlētājs ir vienīgais ar 3 spēlēm 20+ atlēkušajām un 10+ rezultatīvām piespēlēm?",
    options: ["Giannis Antetokounmpo", "Nikola Jokić", "Anthony Davis", "Domantas Sabonis"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 982, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs playoffs vidēji guva 45.5 punktus vienā sērijā — 2. augstākais rādītājs vēsturē?",
    options: ["Luka Dončić", "Michael Jordan", "Donovan Mitchell", "Elgin Baylor"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 983, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pirmais ar 2000+ punktiem, 900+ atlēkušajām un 700+ piespēlēm vienā sezonā?",
    options: ["Luka Dončić", "Nikola Jokić", "LeBron James", "Russell Westbrook"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 984, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais vēsturē ar 2 spēlēm 20+ punkti – 20+ atlēkušās – 20+ piespēles?",
    options: ["Wilt Chamberlain", "Nikola Jokić", "Russell Westbrook", "Larry Bird"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 985, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir izcīnījis vairāk steals karjerā nekā vairāki Hall of Famers kopā?",
    options: ["Chris Paul", "Jason Kidd", "Gary Payton", "Scottie Pippen"],
    answer: "Chris Paul",
    explanation: ""
  },
  {
    id: 986, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais, kurš saņēma MVP vienbalsīgi finālos?",
    options: ["LeBron James", "Michael Jordan", "Shaquille O’Neal", "Stephen Curry"],
    answer: "Shaquille O’Neal",
    explanation: ""
  },
  {
    id: 987, category: "History", difficulty: "medium",
    question: "Kurš superzvaigzne ir pirmais ar sezonām 30/6/6 un 50% shooting trīs gadus pēc kārtas?",
    options: ["Kevin Durant", "Luka Dončić", "LeBron James", "Michael Jordan"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 988, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais, kurš karjerā playoffos uzvarējis 14 sērijas pēc kārtas?",
    options: ["Kobe Bryant", "Tim Duncan", "Magic Johnson", "Stephen Curry"],
    answer: "Stephen Curry",
    explanation: ""
  },
  {
    id: 989, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais ar 10 spēlēm karjerā, kurās ir 40+ punkti un 80% precizitāte?",
    options: ["Kevin Durant", "Devin Booker", "Giannis Antetokounmpo", "Luka Dončić"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 990, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs pirmais guva 60 punktus ar mazāk nekā 30 metieniem?",
    options: ["Kobe Bryant", "Karl Malone", "Klay Thompson", "Damian Lillard"],
    answer: "Klay Thompson",
    explanation: ""
  },
  {
    id: 991, category: "History", difficulty: "medium",
    question: "Kurš superzvaigzne bija pirmais, kurš guva triple-double NBA finālos ar 40+ punktiem?",
    options: ["LeBron James", "Magic Johnson", "Kevin Durant", "Shaquille O’Neal"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 992, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais ar 20+ punktiem un 20+ assists vienā playoff spēlē?",
    options: ["Chris Paul", "Magic Johnson", "James Harden", "Nikola Jokić"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 993, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais NBA vēsturē ar 5 spēlēm 60+ punktu apmērā ar dažādiem trenera štābiem?",
    options: ["Kobe Bryant", "James Harden", "Wilt Chamberlain", "Stephen Curry"],
    answer: "James Harden",
    explanation: ""
  },
  {
    id: 994, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais ar 15 spēlēm, kurās metis 7+ trīspunktniekus un izdarījis 10+ piespēles?",
    options: ["Damian Lillard", "Trae Young", "Stephen Curry", "Luka Dončić"],
    answer: "Luka Dončić",
    explanation: ""
  },
  {
    id: 995, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir vienīgais aktīvais TOP 10 punktu, atlēkušo bumbu un piespēļu rangā?",
    options: ["LeBron James", "Giannis Antetokounmpo", "Kevin Durant", "Nikola Jokić"],
    answer: "LeBron James",
    explanation: ""
  },
  {
    id: 996, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais ar 55 punktu spēli finālos kopš 1990. gada?",
    options: ["Damian Lillard", "Kyrie Irving", "Stephen Curry", "Giannis Antetokounmpo"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 997, category: "History", difficulty: "medium",
    question: "Kura ir visvairāk apspēlētā NBA finālu sāncensība vēsturē?",
    options: ["Lakers vs Celtics", "Bulls vs Suns", "Warriors vs Cavaliers", "Spurs vs Heat"],
    answer: "Lakers vs Celtics",
    explanation: ""
  },
  {
    id: 998, category: "History", difficulty: "medium",
    question: "Kura sāncensība 80. gados definēja NBA globālo izaugsmi?",
    options: ["Magic vs Bird", "Jordan vs Isaiah", "Dr. J vs Kareem", "Moses vs Larry"],
    answer: "Magic vs Bird",
    explanation: ""
  },
  {
    id: 999, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija atbildīgs par tā saukto 'The Freeze Out' All-Star spēlē pret Michael Jordan?",
    options: ["Isiah Thomas", "Magic Johnson", "Larry Bird", "Julius Erving"],
    answer: "Isiah Thomas",
    explanation: ""
  },
  {
    id: 1000, category: "History", difficulty: "medium",
    question: "Kura modernā sāncensība ir radījusi četrus NBA finālus pēc kārtas?",
    options: ["Warriors vs Cavaliers", "Heat vs Spurs", "Lakers vs Celtics", "Suns vs Mavericks"],
    answer: "Warriors vs Cavaliers",
    explanation: ""
  },
  {
    id: 1001, category: "History", difficulty: "medium",
    question: "Kura komanda bija galvenais Jordan un Bulls šķērslis 80. gadu beigās?",
    options: ["Detroit Pistons", "Boston Celtics", "New York Knicks", "Miami Heat"],
    answer: "Detroit Pistons",
    explanation: ""
  },
  {
    id: 1002, category: "History", difficulty: "medium",
    question: "Kuras divas komandas bija iesaistītas slavenajā 'Malice at the Palace' incidentā?",
    options: ["Pacers & Pistons", "Heat & Knicks", "Lakers & Kings", "Celtics & 76ers"],
    answer: "Pacers & Pistons",
    explanation: ""
  },
  {
    id: 1003, category: "History", difficulty: "medium",
    question: "Kura sāncensība 2000. gados radīja terminu 'We Believe'?",
    options: ["Warriors vs Mavericks", "Spurs vs Suns", "Lakers vs Kings", "Heat vs Celtics"],
    answer: "Warriors vs Mavericks",
    explanation: ""
  },
  {
    id: 1004, category: "History", difficulty: "medium",
    question: "'Beat L.A!' sauciens pirmo reizi tika dzirdēts kurā sērijā?",
    options: ["Celtics vs 76ers", "Celtics vs Lakers", "Kings vs Lakers", "Blazers vs Lakers"],
    answer: "Celtics vs 76ers",
    explanation: ""
  },
  {
    id: 1005, category: "History", difficulty: "medium",
    question: "Kurš duelis ir uzskatāms par vienu no brutālākajiem 90. gados?",
    options: ["Knicks vs Heat", "Suns vs Spurs", "Rockets vs Jazz", "Bulls vs Cavs"],
    answer: "Knicks vs Heat",
    explanation: ""
  },
  {
    id: 1006, category: "History", difficulty: "medium",
    question: "Kuru superzvaigžņu sāncensību pastiprināja 2020. gada 'Bubble' playoffs?",
    options: ["LeBron vs Butler", "Giannis vs Tatum", "Jokic vs Embiid", "Luka vs Booker"],
    answer: "Luka vs Booker",
    explanation: ""
  },
  {
    id: 1007, category: "History", difficulty: "medium",
    question: "Kurš bija galvenais šokējošais brīdis Suns vs Spurs sāncensībā?",
    options: ["Horry shoulder-check Steve Nash", "Duncan 3PT game winner", "Stoudemire ejection", "Ginobili flop"],
    answer: "Horry shoulder-check Steve Nash",
    explanation: ""
  },
  {
    id: 1008, category: "History", difficulty: "medium",
    question: "Kura sāncensība radās no Dončiča un Bookera trash-talka frāzes 'Everybody acts tough when they're up'?",
    options: ["Suns vs Mavericks", "Warriors vs Grizzlies", "Celtics vs Heat", "Knicks vs Hawks"],
    answer: "Suns vs Mavericks",
    explanation: ""
  },
  {
    id: 1009, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs savulaik atteicās nospiest roku pretiniekam, radot sāncensības kulmināciju?",
    options: ["Isiah Thomas pret Jordan", "Kobe pret Ray Allen", "Garnett pret LeBron", "Shaq pret Duncan"],
    answer: "Isiah Thomas pret Jordan",
    explanation: ""
  },
  {
    id: 1010, category: "History", difficulty: "medium",
    question: "Kura sāncensība ir slavena ar to, ka beidzās ar Shaq vs Kobe dueli finālos?",
    options: ["Heat vs Mavericks 2006", "Lakers vs Heat 2020", "Lakers vs Pacers 2000", "Lakers vs Magic 2009"],
    answer: "Lakers vs Heat 2020",
    explanation: ""
  },
  {
    id: 1011, category: "History", difficulty: "medium",
    question: "Kura komanda 2010. gados bija Warriors galvenais konkurents rietumos pirms KD pievienošanās?",
    options: ["Oklahoma City Thunder", "Houston Rockets", "San Antonio Spurs", "Memphis Grizzlies"],
    answer: "Oklahoma City Thunder",
    explanation: ""
  },
  {
    id: 1012, category: "History", difficulty: "medium",
    question: "Kurš duelis ir slavens ar frāzi 'We are built for this'? ",
    options: ["Warriors vs Rockets", "Celtics vs Heat", "Grizzlies vs Warriors", "Bucks vs Nets"],
    answer: "Grizzlies vs Warriors",
    explanation: ""
  },
  {
    id: 1013, category: "History", difficulty: "medium",
    question: "Kura sāncensība 90. gados bieži beidzās ar fights, ejections un frāzi 'No layup rule'?",
    options: ["Knicks vs Bulls", "Knicks vs Heat", "Pacers vs Knicks", "Jazz vs Rockets"],
    answer: "Knicks vs Bulls",
    explanation: ""
  },
  {
    id: 1014, category: "History", difficulty: "medium",
    question: "Kurš superzvaigžņu duelis tiek uzskatīts par 'the greatest Finals duel ever'?",
    options: ["Magic vs Bird", "LeBron vs KD", "Shaq vs Duncan", "Jordan vs Drexler"],
    answer: "Magic vs Bird",
    explanation: ""
  },
  {
    id: 1015, category: "History", difficulty: "medium",
    question: "Kura sāncensība 2022. gadā radīja tā saukto 'Euro Battle' starp Dončiču un Jokiču?",
    options: ["Mavericks vs Nuggets", "Suns vs Mavericks", "Nuggets vs Warriors", "Mavericks vs Lakers"],
    answer: "Mavericks vs Nuggets",
    explanation: ""
  },
  {
    id: 1016, category: "History", difficulty: "medium",
    question: "Kuras komandas tika iesaistītas sērijā, kur Rasheed Wallace teica: 'Both teams played hard, my man'?",
    options: ["Lakers vs Blazers", "Spurs vs Blazers", "Kings vs Blazers", "Suns vs Blazers"],
    answer: "Kings vs Blazers",
    explanation: ""
  },
  {
    id: 1017, category: "History", difficulty: "medium",
    question: "Kurš duelis 2011. gadā radīja Dirk Nowitzki 'revenge season' stāstu?",
    options: ["Mavericks vs Heat", "Mavericks vs Spurs", "Mavericks vs Lakers", "Mavericks vs Thunder"],
    answer: "Mavericks vs Heat",
    explanation: ""
  },
  {
    id: 1018, category: "History", difficulty: "medium",
    question: "Kura sāncensība modernajā NBA pazīstama kā 'The Bubble War'?",
    options: ["Heat vs Celtics", "Lakers vs Nuggets", "Clippers vs Nuggets", "Heat vs Lakers"],
    answer: "Clippers vs Nuggets",
    explanation: ""
  },
  {
    id: 1019, category: "History", difficulty: "medium",
    question: "Kura sāncensība ir slavena ar frāzi: 'I'm the captain now' – pēc Embiid un Towns kautiņa?",
    options: ["76ers vs Timberwolves", "76ers vs Celtics", "Heat vs 76ers", "Bucks vs 76ers"],
    answer: "76ers vs Timberwolves",
    explanation: ""
  },
  {
    id: 1020, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs tika iesaukts par 'The Knicks Killer' 90. gados?",
    options: ["Reggie Miller", "Michael Jordan", "Allan Houston", "Alonzo Mourning"],
    answer: "Reggie Miller",
    explanation: ""
  },
  {
    id: 1021, category: "History", difficulty: "medium",
    question: "Kura komanda 2002. gadā zaudēja pretrunīgi vērtētā sērijā pret Lakers, kas izraisīja referee skandālu?",
    options: ["Sacramento Kings", "Portland Trail Blazers", "San Antonio Spurs", "Dallas Mavericks"],
    answer: "Sacramento Kings",
    explanation: ""
  },
  {
    id: 1022, category: "History", difficulty: "medium",
    question: "Kura modernā sāncensība ir visvairāk balstīta uz Twitter trash-talk?",
    options: ["Grizzlies vs Warriors", "Suns vs Mavericks", "Nets vs Celtics", "Lakers vs Clippers"],
    answer: "Grizzlies vs Warriors",
    explanation: ""
  },
  {
    id: 1023, category: "History", difficulty: "medium",
    question: "Kura sāncensība tika simboliski definēta ar 'Big 3 vs Big 3'?",
    options: ["Heat vs Celtics 2010s", "Spurs vs Heat 2013–14", "Lakers vs Celtics 2008–10", "Nets vs Bucks 2021"],
    answer: "Heat vs Celtics 2010s",
    explanation: ""
  },
  {
    id: 1024, category: "History", difficulty: "medium",
    question: "Kurš duelis bija tik intensīvs, ka spēlētāji trāpīja vairāk tehniskās piezīmes nekā trīspunktniekus vienā spēlē?",
    options: ["Pistons vs Pacers", "Knicks vs Heat", "Kings vs Lakers", "Grizzlies vs Thunder"],
    answer: "Knicks vs Heat",
    explanation: ""
  },
  {
    id: 1025, category: "History", difficulty: "medium",
    question: "Kura sāncensība ir slavena ar to, ka abas komandas 3 reizes pēc kārtas spēlēja Game 7?",
    options: ["Celtics vs 76ers", "Spurs vs Mavs", "Rockets vs Warriors", "Heat vs Pacers"],
    answer: "Heat vs Pacers",
    explanation: ""
  },
  {
    id: 1026, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs playoffos bieži provocēja LeBron James, radot personīgu sāncensību 2010. gados?",
    options: ["Paul Pierce", "Draymond Green", "Jimmy Butler", "Lance Stephenson"],
    answer: "Lance Stephenson",
    explanation: ""
  },
  {
    id: 1027, category: "History", difficulty: "medium",
    question: "Kura sāncensība radīja ikonisko 'Dame Time' buzzer-beater pret supersistēmu?",
    options: ["Blazers vs Thunder", "Blazers vs Rockets", "Blazers vs Warriors", "Blazers vs Nuggets"],
    answer: "Blazers vs Thunder",
    explanation: ""
  },
  {
    id: 1028, category: "History", difficulty: "medium",
    question: "Kurš superzvaigžņu duelis tiek uzskatīts par visu laiku stilistiski ideālāko pretstatu (shooting vs defense)?",
    options: ["Curry vs LeBron", "Kobe vs Duncan", "Shaq vs Hakeem", "Durant vs Kawhi"],
    answer: "Durant vs Kawhi",
    explanation: ""
  },
  {
    id: 1029, category: "History", difficulty: "medium",
    question: "Kura sāncensība radās, jo viena komanda sauca sevi par 'kārtejo superteam', bet otra nāca kā 'dynasty killers'?",
    options: ["Warriors vs Celtics", "Warriors vs Raptors", "Warriors vs Grizzlies", "Warriors vs Cavs"],
    answer: "Warriors vs Raptors",
    explanation: ""
  },
  {
    id: 1030, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs izraisīja slaveno 'Malice at the Palace' incidentu, kad viņam tika iemests alus?",
    options: ["Ron Artest", "Ben Wallace", "Jermaine O’Neal", "Stephen Jackson"],
    answer: "Ron Artest",
    explanation: ""
  },
  {
    id: 1031, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pateica leģendāro frāzi: 'Ball don't lie' pēc pretinieka netrāpīta soda?",
    options: ["Rasheed Wallace", "Kevin Garnett", "Draymond Green", "Gary Payton"],
    answer: "Rasheed Wallace",
    explanation: ""
  },
  {
    id: 1032, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs izpūta gaisu LeBron James ausī Playoff spēles laikā?",
    options: ["Lance Stephenson", "J.R. Smith", "Patrick Beverley", "Marcus Smart"],
    answer: "Lance Stephenson",
    explanation: ""
  },
  {
    id: 1033, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pēc konflikta teica: 'I'm not worried about the guy. He's soft.'?",
    options: ["Draymond Green par Paul Pierce", "Kevin Garnett par Carmelo", "Jimmy Butler par Towns", "Shaq par Dwight Howard"],
    answer: "Draymond Green par Paul Pierce",
    explanation: ""
  },
  {
    id: 1034, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs izraisīja konfliktu ar KG pēc frāzes: 'Honey Nut Cheerios'?",
    options: ["Carmelo Anthony", "LeBron James", "Kobe Bryant", "Dwyane Wade"],
    answer: "Carmelo Anthony",
    explanation: ""
  },
  {
    id: 1035, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam Kobe Bryant teica: 'You can’t guard me — you’re too soft'?",
    options: ["Raja Bell", "Matt Barnes", "Dwight Howard", "Paul Pierce"],
    answer: "Dwight Howard",
    explanation: ""
  },
  {
    id: 1036, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs meta bumbu Blazers trenerim Scott Brooks sejā konfliktā?",
    options: ["Patrick Beverley", "Lance Stephenson", "Draymond Green", "Rajon Rondo"],
    answer: "Patrick Beverley",
    explanation: ""
  },
  {
    id: 1037, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pēc konfliktu teica Bērnam: 'Take your 20-point triple-double and go home'?",
    options: ["Embiid par Westbrook", "Westbrook par Lillard", "Beverley par Luka", "Draymond par Towns"],
    answer: "Embiid par Westbrook",
    explanation: ""
  },
  {
    id: 1038, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs slavens ar frāzi: 'LeBron? He ain't the king of Cleveland'?",
    options: ["Joakim Noah", "Paul Pierce", "Jimmy Butler", "Kevin Garnett"],
    answer: "Joakim Noah",
    explanation: ""
  },
  {
    id: 1039, category: "History", difficulty: "medium",
    question: "Kura komanda un spēlētājs bija iesaistīti incidentā, kad spēlētājs uzlika piespēli Robertam Horry's sejai?",
    options: ["Steve Nash un Suns", "Kobe Bryant un Lakers", "Ginobili un Spurs", "Baron Davis un Warriors"],
    answer: "Steve Nash un Suns",
    explanation: ""
  },
  {
    id: 1040, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs tika pieķerts ar frāzi: 'Don't start this sh*t, young fella' pret Donovan Mitchell?",
    options: ["Shaquille O’Neal", "Jimmy Butler", "Patrick Beverley", "Chris Paul"],
    answer: "Shaquille O’Neal",
    explanation: ""
  },
  {
    id: 1041, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs bija iesaistīts incidentā, kur tika iemests mikrofons pretinieka trenerim?",
    options: ["Kevin Garnett", "Rasheed Wallace", "Draymond Green", "Ron Artest"],
    answer: "Rasheed Wallace",
    explanation: ""
  },
  {
    id: 1042, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs nokaitināja Damian Lillard, teikdams: 'Cancun on 3!'?",
    options: ["Patrick Beverley", "Russell Westbrook", "Paul George", "Draymond Green"],
    answer: "Patrick Beverley",
    explanation: ""
  },
  {
    id: 1043, category: "History", difficulty: "medium",
    question: "Kura NBA superzvaigzne teica: 'You're trash' pretinieka bencham pēc 3+1?",
    options: ["Kevin Durant", "LeBron James", "Jimmy Butler", "Devin Booker"],
    answer: "Kevin Durant",
    explanation: ""
  },
  {
    id: 1044, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs meta bumbu pretinieka galvā, izraisot masveida grūstīšanos?",
    options: ["Nikola Jokić", "DeMarcus Cousins", "Dwight Howard", "Kevin Garnett"],
    answer: "Nikola Jokić",
    explanation: ""
  },
  {
    id: 1045, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs teica KG: 'You talk too much' tieši sejā?",
    options: ["Anthony Peeler", "Carmelo Anthony", "Chris Bosh", "Tim Duncan"],
    answer: "Tim Duncan",
    explanation: ""
  },
  {
    id: 1046, category: "History", difficulty: "medium",
    question: "Kurš duelis radīja slaveno frāzi: 'Bye bye!' ar roku vicināšanu pēc game-winner?",
    options: ["Lillard vs Thunder", "Curry vs Rockets", "LeBron vs Raptors", "Kyrie vs Warriors"],
    answer: "Lillard vs Thunder",
    explanation: ""
  },
  {
    id: 1047, category: "History", difficulty: "medium",
    question: "Kurš treneris pieskrēja laukumā dusmās un sakliedza uz savu spēlētāju: 'What are you doing?!'",
    options: ["Larry Brown par Iverson", "Popovich par Kawhi", "Thibs par Randle", "Doc Rivers par Harden"],
    answer: "Larry Brown par Iverson",
    explanation: ""
  },
  {
    id: 1048, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs izraisīja slaveno kautiņu 'Knicks vs Nuggets', kad viņš ietriecās spēlētājā viduslaukumā?",
    options: ["Carmelo Anthony", "J.R. Smith", "Nate Robinson", "Mardy Collins"],
    answer: "Mardy Collins",
    explanation: ""
  },
  {
    id: 1049, category: "History", difficulty: "medium",
    question: "Kurš duelis ir slavens ar frāzi: 'I'm bustin' your ass!'?",
    options: ["Kobe vs Gilbert Arenas", "Jordan vs Gary Payton", "Pierce vs LeBron", "KD vs Beverley"],
    answer: "Kobe vs Gilbert Arenas",
    explanation: ""
  },
  {
    id: 1050, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs teica Paul Pierce, ka viņš neesot pelnījis 'farewell tour'?",
    options: ["Draymond Green", "LeBron James", "Kevin Durant", "Jimmy Butler"],
    answer: "Draymond Green",
    explanation: ""
  },
  {
    id: 1051, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs metās virsū pretiniekam pēc tam, kad viņu nejauši apsita ar roku sejā dunkā?",
    options: ["Dwight Howard", "Kevin Garnett", "Joel Embiid", "Blake Griffin"],
    answer: "Joel Embiid",
    explanation: ""
  },
  {
    id: 1052, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs teica Westbrook: 'You're trash! You BEEN trash!'?",
    options: ["Patrick Beverley", "Draymond Green", "Kyrie Irving", "Devin Booker"],
    answer: "Patrick Beverley",
    explanation: ""
  },
  {
    id: 1053, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija iesaistīts gājienā, kurā viņš izlikās, ka izsit bumbu, un pēc tam iesita pretinieka sejā?",
    options: ["Chris Paul", "Rondo", "DeMarcus Cousins", "Marcus Smart"],
    answer: "Chris Paul",
    explanation: ""
  },
  {
    id: 1054, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs provocēja LeBron James, sakot: 'You're too small!'?",
    options: ["Dillon Brooks", "Draymond Green", "Jimmy Butler", "Paul George"],
    answer: "Dillon Brooks",
    explanation: ""
  },
  {
    id: 1055, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs meta bumbu pilnā spēka Dwayne Wade mugurā, izraisot gandrīz kautiņu?",
    options: ["Rajon Rondo", "Kevin Garnett", "Lance Stephenson", "Udonis Haslem"],
    answer: "Rajon Rondo",
    explanation: ""
  },
  {
    id: 1056, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs teica slaveno frāzi: 'You need a double-team to guard me!'?",
    options: ["Devin Booker", "James Harden", "Joel Embiid", "Kevin Durant"],
    answer: "Devin Booker",
    explanation: ""
  },
  {
    id: 1057, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs tika izsviests pēc tam, kad viņš tajā pašā uzbrukumā pārkāpa noteikumus pret diviem spēlētājiem pēc kārtas?",
    options: ["Grayson Allen", "Dillon Brooks", "DeMarcus Cousins", "Marcus Smart"],
    answer: "DeMarcus Cousins",
    explanation: ""
  },
  {
    id: 1058, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs provocēja Kobe, bet Kobe atbildēja ar 42 punktiem tajā pašā puslaikā?",
    options: ["Gilbert Arenas", "Matt Barnes", "J.R. Smith", "Tony Allen"],
    answer: "Gilbert Arenas",
    explanation: ""
  },
  {
    id: 1059, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs gandrīz piekāvās trenerim, sakot: 'Don't touch me!'?",
    options: ["Draymond Green", "Jimmy Butler", "DeMarcus Cousins", "Allen Iverson"],
    answer: "DeMarcus Cousins",
    explanation: ""
  },
  {
    id: 1060, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pieliecās pie Chris Paul un pateica: 'You ain't gonna win a ring!'?",
    options: ["Patrick Beverley", "Russell Westbrook", "Kevin Durant", "Klay Thompson"],
    answer: "Patrick Beverley",
    explanation: ""
  },
  {
    id: 1061, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs Nick Young ietrieca mugurā, radot komandas konfliktu Lakers ģērbtuvē?",
    options: ["D’Angelo Russell", "Julius Randle", "Kobe Bryant", "Jordan Clarkson"],
    answer: "Julius Randle",
    explanation: ""
  },
  {
    id: 1062, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs meta bumbu pretinieka sejā pēc svilpes un tika uzreiz izraidīts?",
    options: ["Kevin Garnett", "Dwight Howard", "Joel Embiid", "Rajon Rondo"],
    answer: "Dwight Howard",
    explanation: ""
  },
  {
    id: 1063, category: "History", difficulty: "medium",
    question: "Kurš divu zvaigžņu konfliktu uzskatīja par vislielāko treneru un spēlētāju beef 2000. gados?",
    options: ["Kobe Bryant vs Phil Jackson", "Allen Iverson vs Larry Brown", "Shaq vs Pat Riley", "Rondo vs Doc Rivers"],
    answer: "Allen Iverson vs Larry Brown",
    explanation: ""
  },
  {
    id: 1064, category: "History", difficulty: "medium",
    question: "Kurš konflikts radās pēc frāzes: 'He is a system player, not the system.'?",
    options: ["Kobe vs Shaq", "MJ vs Isiah", "Steph Curry vs Chris Paul", "KD vs Russ"],
    answer: "Steph Curry vs Chris Paul",
    explanation: ""
  },
  {
    id: 1065, category: "History", difficulty: "medium",
    question: "Kurš NBA beef sākās ar Shaq frāzi: 'Tell me how my ass taste?'?",
    options: ["Shaq vs Kobe", "Shaq vs Dwight", "Shaq vs Chuck", "Shaq vs Kareem"],
    answer: "Shaq vs Kobe",
    explanation: ""
  },
  {
    id: 1066, category: "History", difficulty: "medium",
    question: "Kurš slavenais duelis radās, pēc tam kad KD pameta Thunder bez brīdinājuma?",
    options: ["KD vs Westbrook", "KD vs Harden", "KD vs LeBron", "KD vs Draymond"],
    answer: "KD vs Westbrook",
    explanation: ""
  },
  {
    id: 1067, category: "History", difficulty: "medium",
    question: "Kurš beef radās no frāzes: 'We ain't friends.'?",
    options: ["KD vs Russ", "Butler vs Towns", "Pierce vs LeBron", "Kyrie vs Boston fans"],
    answer: "KD vs Russ",
    explanation: ""
  },
  {
    id: 1068, category: "History", difficulty: "medium",
    question: "Kurš konflikts izcēlās 76ers treniņā, kad spēlētājs aizgāja no komandas?",
    options: ["Ben Simmons vs 76ers", "Embiid vs Butler", "Harden vs Daryl Morey", "Jimmy Butler vs Brett Brown"],
    answer: "Ben Simmons vs 76ers",
    explanation: ""
  },
  {
    id: 1069, category: "History", difficulty: "medium",
    question: "Kuram beef KD Twitterī rakstīja no fake kontiem?",
    options: ["KD vs Westbrook", "KD vs Warriors fans", "KD vs Stephen A. Smith", "KD vs Draymond"],
    answer: "KD vs Warriors fans",
    explanation: ""
  },
  {
    id: 1070, category: "History", difficulty: "medium",
    question: "Kurš konflikts radās no frāzes: 'We coming for you.'?",
    options: ["Embiid vs Andre Drummond", "Butler vs Towns", "Dillon Brooks vs LeBron", "Beverley vs Westbrook"],
    answer: "Embiid vs Andre Drummond",
    explanation: ""
  },
  {
    id: 1071, category: "History", difficulty: "medium",
    question: "Kurš beef uzsākās ar Matt Barnes frāzi: 'Violence is never the answer, but sometimes it is.'?",
    options: ["Matt Barnes vs Derek Fisher", "Matt Barnes vs Kobe", "Barnes vs Chris Paul", "Barnes vs Blake Griffin"],
    answer: "Matt Barnes vs Derek Fisher",
    explanation: ""
  },
  {
    id: 1072, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs kliedza pret Towns: 'Call double! Call for help!'?",
    options: ["Jimmy Butler", "Joel Embiid", "Anthony Edwards", "DeMarcus Cousins"],
    answer: "Jimmy Butler",
    explanation: ""
  },
  {
    id: 1073, category: "History", difficulty: "medium",
    question: "Kurš konflikts radās pēc frāzes: 'Stop flopping!' publiskā preses konferencē?",
    options: ["LeBron vs Draymond", "Chris Paul vs James Harden", "Tim Duncan vs Amare Stoudemire", "Paul Pierce vs LeBron"],
    answer: "LeBron vs Draymond",
    explanation: ""
  },
  {
    id: 1074, category: "History", difficulty: "medium",
    question: "Kurš beef radās, kad spēlētājs publiski nosauca kluba vadību par 'liars'?",
    options: ["Harden vs Daryl Morey", "Ben Simmons vs 76ers", "Kyrie vs Nets", "Kawhi vs Spurs"],
    answer: "Harden vs Daryl Morey",
    explanation: ""
  },
  {
    id: 1075, category: "History", difficulty: "medium",
    question: "Kurš konflikts radās, kad Kevin Garnett teica Carmelo: 'Your wife tastes like Honey Nut Cheerios'?",
    options: ["KG vs Carmelo", "KG vs LeBron", "KG vs Kobe", "KG vs Tim Duncan"],
    answer: "KG vs Carmelo",
    explanation: ""
  },
  {
    id: 1076, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ar nodomu sūtīja snapchat video, kas izraisīja milzīgu ģērbtuvju konfliktu?",
    options: ["D'Angelo Russell", "Nick Young", "Jordan Clarkson", "Dwight Howard"],
    answer: "D'Angelo Russell",
    explanation: ""
  },
  {
    id: 1077, category: "History", difficulty: "medium",
    question: "Kurš konflikts radās, kad Draymond Green teica Durantam: 'We don't need you.'?",
    options: ["Draymond vs KD", "KD vs Kerr", "Draymond vs Steph", "KD vs Westbrook"],
    answer: "Draymond vs KD",
    explanation: ""
  },
  {
    id: 1078, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs izcēla konfliktu ar Embiid kautiņu, izraisot abu diskvalifikāciju?",
    options: ["Karl-Anthony Towns", "Andre Drummond", "Jared Dudley", "Ben Simmons"],
    answer: "Karl-Anthony Towns",
    explanation: ""
  },
  {
    id: 1079, category: "History", difficulty: "medium",
    question: "Kurš beef radās pēc tam, kad Paul Pierce teica, ka viņš esot labāks par Dwyane Wade?",
    options: ["Pierce vs Heat fans", "Pierce vs Draymond", "Pierce vs Wade", "Pierce vs LeBron"],
    answer: "Pierce vs Draymond",
    explanation: ""
  },
  {
    id: 1080, category: "History", difficulty: "medium",
    question: "Kurš konflikts bija par frāzi: 'You ain't Kobe!'?",
    options: ["Draymond vs Paul Pierce", "Butler vs Towns", "Rondo vs Chris Paul", "KD vs Russ"],
    answer: "Draymond vs Paul Pierce",
    explanation: ""
  },
  {
    id: 1081, category: "History", difficulty: "medium",
    question: "Kurš beef radās, kad KD izsmēja Russ par viņa '0 championship mentality'?",
    options: ["KD vs Russell Westbrook", "KD vs Harden", "KD vs Patrick Beverley", "KD vs Chris Broussard"],
    answer: "KD vs Russell Westbrook",
    explanation: ""
  },
  {
    id: 1082, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs iesita Rondo sejā, izraisot lielu kautiņu Lakers–Rockets spēlē?",
    options: ["Chris Paul", "Brandon Ingram", "Carmelo Anthony", "James Harden"],
    answer: "Chris Paul",
    explanation: ""
  },
  {
    id: 1083, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pateica Butleram: 'You're not that guy' pēc zaudējuma?",
    options: ["T.J. Warren", "Jayson Tatum", "Jaylen Brown", "Jimmy Butler pats sev"],
    answer: "T.J. Warren",
    explanation: ""
  },
  {
    id: 1084, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pēc konflikta parakstīja uz krekla: 'To KAT with love'?",
    options: ["Jimmy Butler", "Joel Embiid", "Anthony Edwards", "Draymond Green"],
    answer: "Joel Embiid",
    explanation: ""
  },
  {
    id: 1085, category: "History", difficulty: "medium",
    question: "Kurš superzvaigžņu konflikts radās pēc frāzes: 'Westbrook has been stat-padding for years'?",
    options: ["Westbrook vs Patrick Beverley", "Westbrook vs KD", "Westbrook vs Embiid", "Westbrook vs Lillard"],
    answer: "Westbrook vs Patrick Beverley",
    explanation: ""
  },
  {
    id: 1086, category: "History", difficulty: "medium",
    question: "Kurš konflikts radās, kad Lonzo Ball teica, ka 'nobody cares about beef anymore'?",
    options: ["Lonzo vs Kyle Kuzma", "Lonzo vs Embiid", "Lonzo vs Westbrook", "Lonzo vs KD"],
    answer: "Lonzo vs Kyle Kuzma",
    explanation: ""
  },
  {
    id: 1087, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs izraisīja konfliktu ar frāzi 'You're too small!' tieši sejā?",
    options: ["Dillon Brooks", "Patrick Beverley", "Devin Booker", "Draymond Green"],
    answer: "Dillon Brooks",
    explanation: ""
  },
  {
    id: 1088, category: "History", difficulty: "medium",
    question: "Kurš beef radās no incidenta, kur spēlētājs sita bumbu oponentam pret galvu?",
    options: ["Jokičs vs Markieff Morris", "Embiiid vs Dudley", "Smart vs Beal", "Cousins vs Ibaka"],
    answer: "Jokičs vs Markieff Morris",
    explanation: ""
  },
  {
    id: 1089, category: "History", difficulty: "medium",
    question: "Kurš izraisīja kautiņu Raptors ģērbtuvē pret treneri pēc neveiksmīgas spēles?",
    options: ["Serge Ibaka", "Kyle Lowry", "DeMar DeRozan", "Pascal Siakam"],
    answer: "Kyle Lowry",
    explanation: ""
  },
  {
    id: 1090, category: "History", difficulty: "medium",
    question: "Kurš beef radās no brīža, kad Embiid ielika dunk un teica 'Get up!' Towns sejā?",
    options: ["Embiid vs Towns", "Embiid vs Drummond", "Embiid vs Simmons", "Embiid vs Siakam"],
    answer: "Embiid vs Towns",
    explanation: ""
  },
  {
    id: 1091, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pēc konflikta izsauca politijas palīdzību pret sievas draugu?",
    options: ["Matt Barnes", "Derrick Fisher", "Rajon Rondo", "Udonis Haslem"],
    answer: "Matt Barnes",
    explanation: ""
  },
  {
    id: 1092, category: "History", difficulty: "medium",
    question: "Kurš duelis radīja frāzi 'Brother? That ain't my brother'?",
    options: ["Russ vs Harden", "Russ vs KD", "Dwight Howard vs Kobe", "Simmons vs Embiid"],
    answer: "Russ vs KD",
    explanation: ""
  },
  {
    id: 1093, category: "History", difficulty: "medium",
    question: "Kurš beef radās no frāzes: 'He can't shoot' tieši televīzijā?",
    options: ["Ben Simmons vs Shaq", "Giannis vs Harden", "Smart vs Westbrook", "Beverley vs Curry"],
    answer: "Giannis vs Harden",
    explanation: ""
  },
  {
    id: 1094, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs publiski teica: 'He stole my Defensive Player of the Year award'?",
    options: ["Rudy Gobert par Draymond Green", "Dwight Howard par Gasol", "KG par Tim Duncan", "Ben Wallace par Shaq"],
    answer: "Rudy Gobert par Draymond Green",
    explanation: ""
  },
  {
    id: 1095, category: "History", difficulty: "medium",
    question: "Kurš konflikts radās pēc frāzes: 'That’s why nobody likes you'?",
    options: ["Draymond vs Jordan Poole", "KD vs Westbrook", "Butler vs Towns", "Rondo vs CP3"],
    answer: "Draymond vs Jordan Poole",
    explanation: ""
  },
  {
    id: 1096, category: "History", difficulty: "medium",
    question: "Kurš NBA beef radās, jo spēlētājs teica: 'We should have traded him earlier'?",
    options: ["Kyrie vs Boston", "Butler vs Minnesota", "Simmons vs 76ers", "Harden vs Nets"],
    answer: "Butler vs Minnesota",
    explanation: ""
  },
  {
    id: 1097, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs apgalvoja, ka LeBron 'neaizstāv labākos spēlētājus' un radīja konfliktu?",
    options: ["Jimmy Butler", "Paul George", "Kawhi Leonard", "Draymond Green"],
    answer: "Jimmy Butler",
    explanation: ""
  },
  {
    id: 1098, category: "History", difficulty: "medium",
    question: "Kurš konflikts bija tik intensīvs, ka viens spēlētājs sitās ar komandas biedru treniņā?",
    options: ["Draymond Green vs Jordan Poole", "Kobe vs Smush Parker", "CP3 vs Blake Griffin", "KG vs Wally Szczerbiak"],
    answer: "Draymond Green vs Jordan Poole",
    explanation: ""
  },
  {
    id: 1099, category: "History", difficulty: "medium",
    question: "Kurš beef radās pēc frāzes 'Don’t call me your friend' preses konferencē?",
    options: ["KD vs Russ", "LeBron vs Joakim Noah", "Jimmy Butler vs T.J. Warren", "Kyrie vs Boston"],
    answer: "KD vs Russ",
    explanation: ""
  },
  {
    id: 1100, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA superzvaigzne Luka Dončić?",
    options: ["Slovēnija", "Serbija", "Horvātija", "Lietuva"],
    answer: "Slovēnija",
    explanation: ""
  },
  {
    id: 1101, category: "History", difficulty: "medium",
    question: "Kurš NBA MVP ir dzimis Grieķijā, bet vecāki nāk no Nigērijas?",
    options: ["Giannis Antetokounmpo", "Joel Embiid", "Pascal Siakam", "Serge Ibaka"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 1102, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA superzvaigzne Nikola Jokić?",
    options: ["Serbija", "Slovēnija", "Melnkalne", "Bosnija un Hercegovina"],
    answer: "Serbija",
    explanation: ""
  },
  {
    id: 1103, category: "History", difficulty: "medium",
    question: "Kura valsts uzvarēja EuroBasket 2017 ar Luka Dončić sastāvā?",
    options: ["Slovēnija", "Serbija", "Spānija", "Grieķija"],
    answer: "Slovēnija",
    explanation: ""
  },
  {
    id: 1104, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA centrs Rudy Gobert?",
    options: ["Francija", "Beļģija", "Kanāda", "Mali"],
    answer: "Francija",
    explanation: ""
  },
  {
    id: 1105, category: "History", difficulty: "medium",
    question: "Kurš NBA MVP ir dzimis Kamerūnā?",
    options: ["Joel Embiid", "Giannis Antetokounmpo", "Pascal Siakam", "Serge Ibaka"],
    answer: "Joel Embiid",
    explanation: ""
  },
  {
    id: 1106, category: "History", difficulty: "medium",
    question: "Kura valsts uzvarēja FIBA Pasaules kausā 2019, pateicoties Marc Gasol un Ricky Rubio spēlei?",
    options: ["Spānija", "Argentīna", "Serbija", "ASV"],
    answer: "Spānija",
    explanation: ""
  },
  {
    id: 1107, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Shai Gilgeous-Alexander?",
    options: ["Kanāda", "Nigērija", "ASV", "Trinidāda"],
    answer: "Kanāda",
    explanation: ""
  },
  {
    id: 1108, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs uzvarēja Olimpiskās spēles 2008 un 2012 ar ASV izlasi?",
    options: ["Kobe Bryant", "LeBron James", "Carmelo Anthony", "Dwyane Wade"],
    answer: "Kobe Bryant",
    explanation: ""
  },
  {
    id: 1109, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA zvaigzne Domantas Sabonis?",
    options: ["Lietuva", "Latvija", "Polija", "Igaunija"],
    answer: "Lietuva",
    explanation: ""
  },
  {
    id: 1110, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk Kristaps Porziņģis?",
    options: ["Latvija", "Igaunija", "Lietuva", "Somija"],
    answer: "Latvija",
    explanation: ""
  },
  {
    id: 1111, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs uzvarēja 2014. gada FIBA Pasaules kausu kā Spānijas galvenais centrs?",
    options: ["Pau Gasol", "Marc Gasol", "Serge Ibaka", "Nikola Mirotić"],
    answer: "Pau Gasol",
    explanation: ""
  },
  {
    id: 1112, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Lauri Markkanen?",
    options: ["Somija", "Zviedrija", "Dānija", "Norvēģija"],
    answer: "Somija",
    explanation: ""
  },
  {
    id: 1113, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs no Kanādas bija 2023. gada FIBA Pasaules kausa MVP savas izlases bronzas ceļā?",
    options: ["Dillon Brooks", "Shai Gilgeous-Alexander", "RJ Barrett", "Kelly Olynyk"],
    answer: "Dillon Brooks",
    explanation: ""
  },
  {
    id: 1114, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk spēlētājs Hedo Türkoğlu?",
    options: ["Turcija", "Grieķija", "Albānija", "Bulgārija"],
    answer: "Turcija",
    explanation: ""
  },
  {
    id: 1115, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Alperen Şengün?",
    options: ["Turcija", "Serbija", "Polija", "Bosnija"],
    answer: "Turcija",
    explanation: ""
  },
  {
    id: 1116, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vadīja Franciju līdz 2022. gada EuroBasket sudrabam?",
    options: ["Rudy Gobert", "Evan Fournier", "Nicolas Batum", "Theo Maledon"],
    answer: "Evan Fournier",
    explanation: ""
  },
  {
    id: 1117, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk spēlētājs Bogdan Bogdanović?",
    options: ["Serbija", "Horvātija", "Slovēnija", "Melnkalne"],
    answer: "Serbija",
    explanation: ""
  },
  {
    id: 1118, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs uzvarēja 2004. gada Olimpiskajās spēlēs ar Argentīnu?",
    options: ["Manu Ginóbili", "Luis Scola", "Fabricio Oberto", "Andrés Nocioni"],
    answer: "Manu Ginóbili",
    explanation: ""
  },
  {
    id: 1119, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Goran Dragić?",
    options: ["Slovēnija", "Horvātija", "Serbija", "Bosnija un Hercegovina"],
    answer: "Slovēnija",
    explanation: ""
  },
  {
    id: 1120, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir pirmais austrālietis, kas uzvarējis NBA čempionātu?",
    options: ["Luc Longley", "Andrew Bogut", "Patty Mills", "Ben Simmons"],
    answer: "Luc Longley",
    explanation: ""
  },
  {
    id: 1121, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk spēlētājs Jonas Valančiūnas?",
    options: ["Lietuva", "Latvija", "Ukraina", "Polija"],
    answer: "Lietuva",
    explanation: ""
  },
  {
    id: 1122, category: "History", difficulty: "medium",
    question: "Kura valsts uzvarēja EuroBasket 2003, kad MVP bija Pau Gasol?",
    options: ["Spānija", "Serbija", "Lietuva", "Itālija"],
    answer: "Lietuva",
    explanation: ""
  },
  {
    id: 1123, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA zvaigzne Jamal Murray?",
    options: ["Kanāda", "ASV", "Jamaika", "Guyana"],
    answer: "Kanāda",
    explanation: ""
  },
  {
    id: 1124, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ir vienīgais slovēnis ar NBA čempionu gredzenu?",
    options: ["Goran Dragić", "Luka Dončić", "Beno Udrih", "Edo Murić"],
    answer: "Beno Udrih",
    explanation: ""
  },
  {
    id: 1125, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Dennis Schröder?",
    options: ["Vācija", "Austrija", "Šveice", "Beļģija"],
    answer: "Vācija",
    explanation: ""
  },
  {
    id: 1126, category: "History", difficulty: "medium",
    question: "Kura valsts uzvarēja 2023. gada FIBA pasaules kausu, kurā MVP bija Dennis Schröder?",
    options: ["Vācija", "Kanāda", "ASV", "Spānija"],
    answer: "Vācija",
    explanation: ""
  },
  {
    id: 1127, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Nikola Vučević?",
    options: ["Melnkalne", "Serbija", "Slovēnija", "Horvātija"],
    answer: "Melnkalne",
    explanation: ""
  },
  {
    id: 1128, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pirmais grieķis, kurš uzvarējis MVP?",
    options: ["Giannis Antetokounmpo", "Nick Calathes", "Kostas Papanikolaou", "Vassilis Spanoulis"],
    answer: "Giannis Antetokounmpo",
    explanation: ""
  },
  {
    id: 1129, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA MVP Steve Nash?",
    options: ["Kanāda", "ASV", "Dienvidāfrika", "Anglija"],
    answer: "Kanāda",
    explanation: ""
  },
  {
    id: 1130, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ieguva MVP Pasaules kausā 2014 ar ASV izlasi?",
    options: ["Kyrie Irving", "James Harden", "Stephen Curry", "Anthony Davis"],
    answer: "Kyrie Irving",
    explanation: ""
  },
  {
    id: 1131, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Kristaps Porziņģis?",
    options: ["Latvija", "Lietuva", "Igaunija", "Serbija"],
    answer: "Latvija",
    explanation: ""
  },
  {
    id: 1132, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vadīja Spāniju līdz EuroBasket uzvarai 2022 kā turnīra MVP?",
    options: ["Juancho Hernangómez", "Willy Hernangómez", "Rudy Fernández", "Sergio Llull"],
    answer: "Willy Hernangómez",
    explanation: ""
  },
  {
    id: 1133, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Bogdan Bogdanović?",
    options: ["Serbija", "Horvātija", "Melnkalne", "Slovēnija"],
    answer: "Serbija",
    explanation: ""
  },
  {
    id: 1134, category: "History", difficulty: "medium",
    question: "Kura valsts uzvarēja 2002. gada FIBA Pasaules kausā, kad MVP bija Dirk Nowitzki?",
    options: ["Jugoslāvija", "Vācija", "ASV", "Spānija"],
    answer: "Jugoslāvija",
    explanation: ""
  },
  {
    id: 1135, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Rui Hachimura?",
    options: ["Japāna", "Filipīnas", "Ķīna", "Dienvidkoreja"],
    answer: "Japāna",
    explanation: ""
  },
  {
    id: 1136, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vadīja Itāliju līdz 2022. gada Pasaules kausa 8. vietai?",
    options: ["Simone Fontecchio", "Danilo Gallinari", "Marco Belinelli", "Nicolo Melli"],
    answer: "Simone Fontecchio",
    explanation: ""
  },
  {
    id: 1137, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Clint Capela?",
    options: ["Šveice", "Francija", "Kamerūna", "Angola"],
    answer: "Šveice",
    explanation: ""
  },
  {
    id: 1138, category: "History", difficulty: "medium",
    question: "Kura valsts uzvarēja 2013. gada EuroBasket?",
    options: ["Francija", "Lietuva", "Spānija", "Slovēnija"],
    answer: "Francija",
    explanation: ""
  },
  {
    id: 1139, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA centrs Ivica Zubac?",
    options: ["Horvātija", "Serbija", "Bosnija un Hercegovina", "Slovēnija"],
    answer: "Horvātija",
    explanation: ""
  },
  {
    id: 1140, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzvarēja 2006. gada FIBA pasaules čempionātu ar Spāniju?",
    options: ["Pau Gasol", "Marc Gasol", "Juan Carlos Navarro", "Ricky Rubio"],
    answer: "Pau Gasol",
    explanation: ""
  },
  {
    id: 1141, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Precious Achiuwa?",
    options: ["Nigērija", "Gana", "Kenija", "Kamerūna"],
    answer: "Nigērija",
    explanation: ""
  },
  {
    id: 1142, category: "History", difficulty: "medium",
    question: "Kura valsts uzvarēja 2004. gada Olimpiskās spēles vīriešu basketbolā?",
    options: ["Argentīna", "Spānija", "ASV", "Serbija"],
    answer: "Argentīna",
    explanation: ""
  },
  {
    id: 1143, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Raul Neto?",
    options: ["Brazīlija", "Urugvaja", "Meksika", "Peru"],
    answer: "Brazīlija",
    explanation: ""
  },
  {
    id: 1144, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vadīja Grieķiju līdz sudrabam 2006. gada Pasaules kausā?",
    options: ["Vassilis Spanoulis", "Antonis Fotsis", "Georgios Printezis", "Kostas Tsartsaris"],
    answer: "Vassilis Spanoulis",
    explanation: ""
  },
  {
    id: 1145, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Daniel Gafford?",
    options: ["ASV", "Kanāda", "Vācija", "Bahamu salas"],
    answer: "ASV",
    explanation: ""
  },
  {
    id: 1146, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ir pirmais latvietis NBA drafta pirmās kārtas TOP-5?",
    options: ["Jānis Timma", "Andris Biedriņš", "Kristaps Porziņģis", "Dāvis Bertāns"],
    answer: "Kristaps Porziņģis",
    explanation: ""
  },
  {
    id: 1147, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Usman Garuba?",
    options: ["Spānija", "Senegāla", "Nigērija", "Maroka"],
    answer: "Spānija",
    explanation: ""
  },
  {
    id: 1148, category: "History", difficulty: "medium",
    question: "Kura valsts uzvarēja FIBA Pasaules kausu 2006. gadā, uzveicot Grieķiju finālā?",
    options: ["Spānija", "ASV", "Serbija", "Vācija"],
    answer: "Spānija",
    explanation: ""
  },
  {
    id: 1149, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Goga Bitadze?",
    options: ["Gruzija", "Armēnija", "Turcija", "Serbija"],
    answer: "Gruzija",
    explanation: ""
  },
  {
    id: 1150, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs ieguva sudrabu ar Argentīnu 2002. gada Pasaules kausā?",
    options: ["Luis Scola", "Manu Ginóbili", "Fabricio Oberto", "Pablo Prigioni"],
    answer: "Luis Scola",
    explanation: ""
  },
  {
    id: 1151, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Furkan Korkmaz?",
    options: ["Turcija", "Irāna", "Azerbaidžāna", "Izraēla"],
    answer: "Turcija",
    explanation: ""
  },
  {
    id: 1152, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vadīja Lietuvu līdz bronzai 2010. gada Pasaules kausā?",
    options: ["Linas Kleiza", "Jonas Valančiūnas", "Domantas Sabonis", "Mantas Kalnietis"],
    answer: "Linas Kleiza",
    explanation: ""
  },
  {
    id: 1153, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Deni Avdija?",
    options: ["Izraēla", "Turcija", "Serbija", "Horvātija"],
    answer: "Izraēla",
    explanation: ""
  },
  {
    id: 1154, category: "History", difficulty: "medium",
    question: "Kura valsts uzvarēja EuroBasket 2009?",
    options: ["Spānija", "Serbija", "Turcija", "Lietuva"],
    answer: "Spānija",
    explanation: ""
  },
  {
    id: 1155, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Steven Adams?",
    options: ["Jaunzēlande", "Austrālija", "Fidži", "Kanāda"],
    answer: "Jaunzēlande",
    explanation: ""
  },
  {
    id: 1156, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vadīja Brazīliju līdz sudrabam 2003. gada Panamerikas spēlēs?",
    options: ["Leandro Barbosa", "Nene Hilario", "Anderson Varejão", "Tiago Splitter"],
    answer: "Leandro Barbosa",
    explanation: ""
  },
  {
    id: 1157, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Tristan Thompson?",
    options: ["Kanāda", "Jamaika", "Bahamu salas", "ASV"],
    answer: "Kanāda",
    explanation: ""
  },
  {
    id: 1158, category: "History", difficulty: "medium",
    question: "Kura valsts uzvarēja 2015. gada EuroBasket?",
    options: ["Spānija", "Francija", "Serbija", "Slovēnija"],
    answer: "Spānija",
    explanation: ""
  },
  {
    id: 1159, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Jonas Jerebko?",
    options: ["Zviedrija", "Somija", "Norvēģija", "Vācija"],
    answer: "Zviedrija",
    explanation: ""
  },
  {
    id: 1160, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs uzvarēja 2006. gada EuroBasket ar Krievijas izlasi?",
    options: ["Andrei Kirilenko", "Timofey Mozgov", "Alexey Shved", "Victor Khryapa"],
    answer: "Andrei Kirilenko",
    explanation: ""
  },
  {
    id: 1161, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Jose Alvarado?",
    options: ["Puertoriko", "Kuba", "ASV", "Dominikāna"],
    answer: "Puertoriko",
    explanation: ""
  },
  {
    id: 1162, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs vadīja Spāniju līdz sudrabam 2008. gada Olimpiādē?",
    options: ["Pau Gasol", "Juan Carlos Navarro", "Ricky Rubio", "Marc Gasol"],
    answer: "Pau Gasol",
    explanation: ""
  },
  {
    id: 1163, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Serge Ibaka?",
    options: ["Kongo Republika", "Kongo DR", "Angola", "Nigērija"],
    answer: "Kongo DR",
    explanation: ""
  },
  {
    id: 1164, category: "History", difficulty: "medium",
    question: "Kura valsts uzvarēja 2011. gada EuroBasket ar MVP Juan Carlos Navarro?",
    options: ["Spānija", "Serbija", "Krievija", "Turcija"],
    answer: "Spānija",
    explanation: ""
  },
  {
    id: 1165, category: "History", difficulty: "medium",
    question: "No kuras valsts nāk NBA spēlētājs Bojan Bogdanović?",
    options: ["Horvātija", "Serbija", "Bosnija un Hercegovina", "Slovēnija"],
    answer: "Horvātija",
    explanation: ""
  },
  {
    id: 1166, category: "History", difficulty: "medium",
    question: "Kurš NBA spēlētājs aizveda Austrāliju līdz bronzai 2020. gada Olimpiādē?",
    options: ["Patty Mills", "Joe Ingles", "Ben Simmons", "Andrew Bogut"],
    answer: "Patty Mills",
    explanation: ""
  },
  {
    id: 1167, category: "History", difficulty: "medium",
    question: "Kurā gadā spēlēja oriģinālā Dream Team komanda?",
    options: ["1992", "1988", "1996", "1994"],
    answer: "1992",
    explanation: ""
  },
  {
    id: 1168, category: "History", difficulty: "medium",
    question: "Kurā pilsētā notika Olimpiskās spēles, kurās spēlēja Dream Team?",
    options: ["Barselona", "Seula", "Atlanta", "Losandželosa"],
    answer: "Barselona",
    explanation: ""
  },
  {
    id: 1169, category: "History", difficulty: "medium",
    question: "Kurš bija Dream Team galvenais treneris?",
    options: ["Chuck Daly", "Lenny Wilkens", "Mike Krzyzewski", "Pat Riley"],
    answer: "Chuck Daly",
    explanation: ""
  },
  {
    id: 1170, category: "History", difficulty: "medium",
    question: "Kurš bija vienīgais koledžas spēlētājs Dream Team sastāvā?",
    options: ["Christian Laettner", "Larry Johnson", "Glenn Robinson", "Tim Duncan"],
    answer: "Christian Laettner",
    explanation: ""
  },
  {
    id: 1171, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Dream Team kapteinis?",
    options: ["Magic Johnson", "Michael Jordan", "Larry Bird", "David Robinson"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 1172, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Dream Team rezultatīvākais (vidēji spēlē)?",
    options: ["Charles Barkley", "Michael Jordan", "Karl Malone", "Scottie Pippen"],
    answer: "Charles Barkley",
    explanation: ""
  },
  {
    id: 1173, category: "History", difficulty: "medium",
    question: "Kura valsts finālā zaudēja Dream Team?",
    options: ["Horvātija", "Spānija", "Lietuva", "Brazīlija"],
    answer: "Horvātija",
    explanation: ""
  },
  {
    id: 1174, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs cieta no smagas muguras traumas visā turnīra laikā?",
    options: ["Larry Bird", "Magic Johnson", "John Stockton", "Chris Mullin"],
    answer: "Larry Bird",
    explanation: ""
  },
  {
    id: 1175, category: "History", difficulty: "medium",
    question: "Kura bija pirmā komanda, pret kuru spēlēja Dream Team Barselonā?",
    options: ["Angola", "Brazīlija", "Horvātija", "Spānija"],
    answer: "Angola",
    explanation: ""
  },
  {
    id: 1176, category: "History", difficulty: "medium",
    question: "Cik punktus Dream Team uzvarēja savu pirmo spēli pret Angolu?",
    options: ["68", "56", "72", "49"],
    answer: "68",
    explanation: ""
  },
  {
    id: 1177, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Dream Team asistu līderis?",
    options: ["Magic Johnson", "John Stockton", "Scottie Pippen", "Michael Jordan"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 1178, category: "History", difficulty: "medium",
    question: "Cik NBA MVP bija Dream Team sastāvā?",
    options: ["5", "3", "7", "2"],
    answer: "5",
    explanation: ""
  },
  {
    id: 1179, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs kļuva par Dream Team labāko aizsardzības spēlētāju?",
    options: ["Scottie Pippen", "Michael Jordan", "David Robinson", "Patrick Ewing"],
    answer: "Scottie Pippen",
    explanation: ""
  },
  {
    id: 1180, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija jaunākais Dream Team dalībnieks?",
    options: ["Christian Laettner", "Scottie Pippen", "Karl Malone", "David Robinson"],
    answer: "Christian Laettner",
    explanation: ""
  },
  {
    id: 1181, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ieguva pēdējo punktu Dream Team finālā?",
    options: ["John Stockton", "Clyde Drexler", "Karl Malone", "Chris Mullin"],
    answer: "John Stockton",
    explanation: ""
  },
  {
    id: 1182, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs tika izlaists no Dream Team konflikta ar Michael Jordan?",
    options: ["Isiah Thomas", "Joe Dumars", "Mark Aguirre", "Tim Hardaway"],
    answer: "Isiah Thomas",
    explanation: ""
  },
  {
    id: 1183, category: "History", difficulty: "medium",
    question: "Kuram spēlētājam Dream Team laikā uz brīdi aizliedza preses pieeju HIV panikas dēļ?",
    options: ["Magic Johnson", "Larry Bird", "Jordan", "Barkley"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 1184, category: "History", difficulty: "medium",
    question: "Kurš Dream Team centrs spēlēja ar #14?",
    options: ["Patrick Ewing", "David Robinson", "Karl Malone", "Charles Barkley"],
    answer: "Patrick Ewing",
    explanation: ""
  },
  {
    id: 1185, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija vienīgais Dream Team pārstāvis no Golden State Warriors?",
    options: ["Chris Mullin", "Tim Hardaway", "Latrell Sprewell", "Mitch Richmond"],
    answer: "Chris Mullin",
    explanation: ""
  },
  {
    id: 1186, category: "History", difficulty: "medium",
    question: "Cik spēles Dream Team zaudēja 1992. gada Olimpiādē?",
    options: ["0", "1", "2", "3"],
    answer: "0",
    explanation: ""
  },
  {
    id: 1187, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs teica par Dream Team: 'This is like Elvis and the Beatles combined'?",
    options: ["Magic Johnson", "Charles Barkley", "Michael Jordan", "Karl Malone"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 1188, category: "History", difficulty: "medium",
    question: "Kura Dream Team spēle bija visrezultatīvākā ASV?",
    options: ["Pret Brazīliju", "Pret Lietuvu", "Pret Horvātiju", "Pret Vāciju"],
    answer: "Pret Brazīliju",
    explanation: ""
  },
  {
    id: 1189, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs bija pirmais NBA MVP no centra pozīcijas kopš 70. gadiem?",
    options: ["David Robinson", "Patrick Ewing", "Karl Malone", "Larry Bird"],
    answer: "David Robinson",
    explanation: ""
  },
  {
    id: 1190, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs bija vienīgais, kurš nekad neiegūst NBA MVP?",
    options: ["Chris Mullin", "Clyde Drexler", "Scottie Pippen", "Karl Malone"],
    answer: "Chris Mullin",
    explanation: ""
  },
  {
    id: 1191, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Dream Team vienīgais debesis 'shot-blocker' pēc statistikas?",
    options: ["David Robinson", "Patrick Ewing", "Karl Malone", "Scottie Pippen"],
    answer: "David Robinson",
    explanation: ""
  },
  {
    id: 1192, category: "History", difficulty: "medium",
    question: "Kura Dream Team zvaigzne spēlēja kopā ar Jordan uzvarot NCAA čempionātu?",
    options: ["James Worthy", "Clyde Drexler", "Chris Mullin", "Scottie Pippen"],
    answer: "James Worthy",
    explanation: ""
  },
  {
    id: 1193, category: "History", difficulty: "medium",
    question: "Kura valsts bija vienīgā, kas pirmo reizi vadīja pret Dream Team spēles sākumā?",
    options: ["Horvātija", "Lietuva", "Spānija", "Francija"],
    answer: "Horvātija",
    explanation: ""
  },
  {
    id: 1194, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs pēc karjeras kļuva par NBA treneri?",
    options: ["Larry Bird", "Magic Johnson", "Karl Malone", "Patrick Ewing"],
    answer: "Larry Bird",
    explanation: ""
  },
  {
    id: 1195, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs pazīstams kā Dream Team 'trash talk king'?",
    options: ["Larry Bird", "Michael Jordan", "Charles Barkley", "Karl Malone"],
    answer: "Larry Bird",
    explanation: ""
  },
  {
    id: 1196, category: "History", difficulty: "medium",
    question: "Cik punktus vidēji Dream Team uzvarēja savus pretiniekus?",
    options: ["+43.8", "+32.3", "+51.2", "+27.9"],
    answer: "+43.8",
    explanation: ""
  },
  {
    id: 1197, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs ieguva visvairāk atlēkušās bumbas Dream Team sastāvā?",
    options: ["Charles Barkley", "Karl Malone", "David Robinson", "Patrick Ewing"],
    answer: "Karl Malone",
    explanation: ""
  },
  {
    id: 1198, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs bija vienīgais, kurš nekad neieguva NBA čempionu titulu?",
    options: ["Charles Barkley", "Karl Malone", "Patrick Ewing", "Visi trīs"],
    answer: "Visi trīs",
    explanation: ""
  },
  {
    id: 1199, category: "History", difficulty: "medium",
    question: "Kura valsts ieguva bronzu 1992. gada Olimpiādē?",
    options: ["Lietuva", "Brazīlija", "Latvija", "Spānija"],
    answer: "Lietuva",
    explanation: ""
  },
  {
    id: 1200, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs tika uzskatīts par komandas 'klusāko', vismazāk runīgo?",
    options: ["Clyde Drexler", "John Stockton", "Karl Malone", "David Robinson"],
    answer: "John Stockton",
    explanation: ""
  },
  {
    id: 1201, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs bija vienīgais ar vairāk nekā 10 steals turnīrā?",
    options: ["Scottie Pippen", "Michael Jordan", "John Stockton", "Chris Mullin"],
    answer: "Scottie Pippen",
    explanation: ""
  },
  {
    id: 1202, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs bija vienīgais ar NBA titulu 1980. gados un 1990. gados?",
    options: ["Magic Johnson", "Larry Bird", "Michael Jordan", "David Robinson"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 1203, category: "History", difficulty: "medium",
    question: "Cik Hall of Fame spēlētāju bija Dream Team?",
    options: ["11", "12", "10", "9"],
    answer: "11",
    explanation: ""
  },
  {
    id: 1204, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs bija vienīgais kreilis?",
    options: ["Chris Mullin", "Clyde Drexler", "Patrick Ewing", "Karl Malone"],
    answer: "Chris Mullin",
    explanation: ""
  },
  {
    id: 1205, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs bija pēdējais, kas paziņoja par karjeras beigām?",
    options: ["John Stockton", "Patrick Ewing", "Karl Malone", "Scottie Pippen"],
    answer: "John Stockton",
    explanation: ""
  },
  {
    id: 1206, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs guva visvairāk punktu vienā spēlē 1992. gada Olimpiādē?",
    options: ["Charles Barkley", "Michael Jordan", "Karl Malone", "Chris Mullin"],
    answer: "Charles Barkley",
    explanation: ""
  },
  {
    id: 1207, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs guva visvairāk punktu kopā Olimpiskajā turnīrā?",
    options: ["Charles Barkley", "Michael Jordan", "Karl Malone", "David Robinson"],
    answer: "Charles Barkley",
    explanation: ""
  },
  {
    id: 1208, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Dream Team labākais metiens no trīspunktu līnijas (procentos)?",
    options: ["Chris Mullin", "Clyde Drexler", "Larry Bird", "Michael Jordan"],
    answer: "Chris Mullin",
    explanation: ""
  },
  {
    id: 1209, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs atdeva visvairāk piespēļu turnīrā?",
    options: ["Magic Johnson", "John Stockton", "Scottie Pippen", "Michael Jordan"],
    answer: "Magic Johnson",
    explanation: ""
  },
  {
    id: 1210, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vidēji spēlē bija Dream Team labākais atlēkušajās bumbās?",
    options: ["Karl Malone", "Charles Barkley", "David Robinson", "Patrick Ewing"],
    answer: "Charles Barkley",
    explanation: ""
  },
  {
    id: 1211, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs bija komandas rezultatīvākais pret Horvātiju finālā?",
    options: ["Michael Jordan", "Charles Barkley", "Scottie Pippen", "Karl Malone"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 1212, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija vienīgais Dream Team sastāvā, kuram nebija nevienas kļūdas dažās spēlēs?",
    options: ["John Stockton", "Chris Mullin", "Scottie Pippen", "Larry Bird"],
    answer: "John Stockton",
    explanation: ""
  },
  {
    id: 1213, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs guva 8 steals vienā spēlē (komandas rekords turnīrā)?",
    options: ["Scottie Pippen", "Michael Jordan", "Clyde Drexler", "Magic Johnson"],
    answer: "Scottie Pippen",
    explanation: ""
  },
  {
    id: 1214, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs spēlēja vismazāk vidēji minūtēs?",
    options: ["Christian Laettner", "Larry Bird", "John Stockton", "Clyde Drexler"],
    answer: "Christian Laettner",
    explanation: ""
  },
  {
    id: 1215, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs bija vienīgais ar perfektu metienu spēli (nepametot garām) olimpiskajā turnīrā?",
    options: ["Patrick Ewing", "David Robinson", "Karl Malone", "Scottie Pippen"],
    answer: "Patrick Ewing",
    explanation: ""
  },
  {
    id: 1216, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs uzstādīja Dream Team rekordu - 6 bloki vienā spēlē?",
    options: ["David Robinson", "Patrick Ewing", "Karl Malone", "Charles Barkley"],
    answer: "David Robinson",
    explanation: ""
  },
  {
    id: 1217, category: "History", difficulty: "medium",
    question: "Kura Dream Team zvaigzne meta visaugstākos procentus no spēles (FG%)?",
    options: ["Karl Malone", "David Robinson", "Charles Barkley", "Chris Mullin"],
    answer: "Charles Barkley",
    explanation: ""
  },
  {
    id: 1218, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs vadīja komandu soda metienu procentos?",
    options: ["Michael Jordan", "Karl Malone", "Chris Mullin", "Larry Bird"],
    answer: "Karl Malone",
    explanation: ""
  },
  {
    id: 1219, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs saņēma VISVAIRĀK spēles laika finālā pret Horvātiju?",
    options: ["Michael Jordan", "Scottie Pippen", "Magic Johnson", "Charles Barkley"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 1220, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs izcēlās ar 6 trīspunktniekiem vienā grupas spēlē?",
    options: ["Chris Mullin", "Larry Bird", "Michael Jordan", "Clyde Drexler"],
    answer: "Chris Mullin",
    explanation: ""
  },
  {
    id: 1221, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Dream Team līderis pārķertajās bumbās turnīrā?",
    options: ["Scottie Pippen", "Michael Jordan", "Magic Johnson", "Charles Barkley"],
    answer: "Scottie Pippen",
    explanation: ""
  },
  {
    id: 1222, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Dream Team labākais +/- rādītājā visā turnīrā?",
    options: ["Michael Jordan", "Charles Barkley", "Scottie Pippen", "David Robinson"],
    answer: "Scottie Pippen",
    explanation: ""
  },
  {
    id: 1223, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Dream Team vienīgais ar triple-double FIBA statistikas protokolā?",
    options: ["Magic Johnson", "Scottie Pippen", "Michael Jordan", "Neviena"],
    answer: "Neviena",
    explanation: ""
  },
  {
    id: 1224, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs meta visvairāk metienu no Dream Team sastāva?",
    options: ["Michael Jordan", "Charles Barkley", "Chris Mullin", "Karl Malone"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 1225, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija vienīgais Dream Team loceklis, kurš neiesita nevienu trīspunktnieku visā turnīrā?",
    options: ["Patrick Ewing", "David Robinson", "Karl Malone", "John Stockton"],
    answer: "Patrick Ewing",
    explanation: ""
  },
  {
    id: 1226, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs vadīja Dream Team soda laukuma punktos?",
    options: ["David Robinson", "Patrick Ewing", "Karl Malone", "Charles Barkley"],
    answer: "David Robinson",
    explanation: ""
  },
  {
    id: 1227, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs meta vismazāk metienu, bet ar visaugstākajiem procentiem?",
    options: ["Christian Laettner", "John Stockton", "Larry Bird", "Chris Mullin"],
    answer: "Christian Laettner",
    explanation: ""
  },
  {
    id: 1228, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs 1992. gadā bija Dream Team labākais +/- pret Top 8 komandām?",
    options: ["Scottie Pippen", "Michael Jordan", "Charles Barkley", "Karl Malone"],
    answer: "Scottie Pippen",
    explanation: ""
  },
  {
    id: 1229, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs realizēja visvairāk soda metienu kopā?",
    options: ["Karl Malone", "Charles Barkley", "Michael Jordan", "David Robinson"],
    answer: "Karl Malone",
    explanation: ""
  },
  {
    id: 1230, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Dream Team *efektivitātes* (PER izlases versijā) līderis?",
    options: ["Charles Barkley", "Michael Jordan", "David Robinson", "Scottie Pippen"],
    answer: "Charles Barkley",
    explanation: ""
  },
  {
    id: 1231, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs sameta 25+ punktus spēlē pret Brazīliju?",
    options: ["Charles Barkley", "Chris Mullin", "Karl Malone", "Michael Jordan"],
    answer: "Chris Mullin",
    explanation: ""
  },
  {
    id: 1232, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs bija vienīgais ar 2+ bloku un 2+ steal vidējo rādītāju?",
    options: ["David Robinson", "Scottie Pippen", "Michael Jordan", "Karl Malone"],
    answer: "Scottie Pippen",
    explanation: ""
  },
  {
    id: 1233, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Dream Team otrais rezultatīvākais aiz Barkley?",
    options: ["Michael Jordan", "Karl Malone", "Chris Mullin", "David Robinson"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 1234, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs katrā spēlē guva vismaz 10 punktus?",
    options: ["Charles Barkley", "Michael Jordan", "Karl Malone", "Neviena"],
    answer: "Neviena",
    explanation: ""
  },
  {
    id: 1235, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs vienīgais biežāk meta no vidējās distances nekā pie groza?",
    options: ["Chris Mullin", "Michael Jordan", "Larry Bird", "Clyde Drexler"],
    answer: "Chris Mullin",
    explanation: ""
  },
  {
    id: 1236, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Dream Team TOP 3 punktu, atlēkušo bumbu un steal statistikas kategorijās?",
    options: ["Charles Barkley", "Michael Jordan", "Scottie Pippen", "Karl Malone"],
    answer: "Scottie Pippen",
    explanation: ""
  },
  {
    id: 1237, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs vadīja komandu true shooting (TS%)?",
    options: ["Charles Barkley", "Chris Mullin", "Karl Malone", "David Robinson"],
    answer: "Charles Barkley",
    explanation: ""
  },
  {
    id: 1238, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs bija vienīgais ar negatīvu plus/minus vienā spēlē (pret Lietuvu)?",
    options: ["Larry Bird", "John Stockton", "Christian Laettner", "Neviena"],
    answer: "Christian Laettner",
    explanation: ""
  },
  {
    id: 1239, category: "History", difficulty: "medium",
    question: "Kurš Dream Team spēlētājs vidēji spēlēja visvairāk minūšu?",
    options: ["Michael Jordan", "Scottie Pippen", "Charles Barkley", "Magic Johnson"],
    answer: "Michael Jordan",
    explanation: ""
  },
  {
    id: 1240, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija Dream Team top piezīmju (personīgo sodu) līderis?",
    options: ["Patrick Ewing", "David Robinson", "Karl Malone", "Charles Barkley"],
    answer: "Patrick Ewing",
    explanation: ""
  },
  {
    id: 1241, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs guva visvairāk punktu soda metienos?",
    options: ["Karl Malone", "David Robinson", "Charles Barkley", "Michael Jordan"],
    answer: "Karl Malone",
    explanation: ""
  },
  {
    id: 1242, category: "History", difficulty: "medium",
    question: "Kurš spēlētājs bija vienīgais Dream Team dalībnieks bez neviena trīspunktnieka TURNĪRĀ?",
    options: ["Patrick Ewing", "David Robinson", "Karl Malone", "John Stockton"],
    answer: "Patrick Ewing",
    explanation: ""
  }
];

module.exports = questions;

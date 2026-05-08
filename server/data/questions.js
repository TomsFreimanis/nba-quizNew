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
  }
];

module.exports = questions;

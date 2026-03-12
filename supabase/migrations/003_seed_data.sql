-- supabase/migrations/003_seed_data.sql — Seeds all 10 IPL teams, players, matches, and badges

-- ============================================================
-- TEAMS
-- ============================================================
insert into public.teams (id, name, short_name, city, primary_color, secondary_color) values
  ('csk',  'Chennai Super Kings',           'CSK',  'Chennai',   '#FFCB05', '#0081E9'),
  ('mi',   'Mumbai Indians',                'MI',   'Mumbai',    '#004BA0', '#D1AB3E'),
  ('rcb',  'Royal Challengers Bengaluru',   'RCB',  'Bengaluru', '#EC1C24', '#000000'),
  ('kkr',  'Kolkata Knight Riders',         'KKR',  'Kolkata',   '#3A225D', '#F4C300'),
  ('dc',   'Delhi Capitals',                'DC',   'Delhi',     '#004C93', '#EF1C25'),
  ('pbks', 'Punjab Kings',                  'PBKS', 'Mohali',    '#ED1B24', '#A7A9AC'),
  ('rr',   'Rajasthan Royals',              'RR',   'Jaipur',    '#EA1A85', '#254AA5'),
  ('srh',  'Sunrisers Hyderabad',           'SRH',  'Hyderabad', '#FF822A', '#000000'),
  ('gt',   'Gujarat Titans',                'GT',   'Ahmedabad', '#1B2133', '#A0E3F0'),
  ('lsg',  'Lucknow Super Giants',          'LSG',  'Lucknow',   '#A72056', '#FFFF00')
on conflict (id) do nothing;

-- ============================================================
-- PLAYERS — CSK
-- ============================================================
insert into public.players (team_id, name, role, is_overseas, country, jersey_number, batting_style, bowling_style) values
  ('csk', 'MS Dhoni',           'wicket-keeper', false, 'India',       7,  'Right-hand bat', null),
  ('csk', 'Ruturaj Gaikwad',    'batsman',       false, 'India',       31, 'Right-hand bat', 'Right-arm off-break'),
  ('csk', 'Shivam Dube',        'all-rounder',   false, 'India',       25, 'Left-hand bat',  'Right-arm medium'),
  ('csk', 'Ravindra Jadeja',    'all-rounder',   false, 'India',       8,  'Left-hand bat',  'Slow left-arm orthodox'),
  ('csk', 'Deepak Chahar',      'bowler',        false, 'India',       90, 'Right-hand bat', 'Right-arm medium-fast'),
  ('csk', 'Devon Conway',       'batsman',       true,  'New Zealand', 83, 'Left-hand bat',  'Right-arm off-break'),
  ('csk', 'Matheesha Pathirana','bowler',        true,  'Sri Lanka',   70, 'Right-hand bat', 'Right-arm fast'),
  ('csk', 'Rachin Ravindra',    'all-rounder',   true,  'New Zealand', 54, 'Left-hand bat',  'Slow left-arm orthodox'),
  ('csk', 'Tushar Deshpande',   'bowler',        false, 'India',       18, 'Right-hand bat', 'Right-arm medium-fast'),
  ('csk', 'Ajinkya Rahane',     'batsman',       false, 'India',       27, 'Right-hand bat', 'Right-arm off-break'),
  ('csk', 'Shardul Thakur',     'all-rounder',   false, 'India',       10, 'Right-hand bat', 'Right-arm medium-fast'),
  ('csk', 'Moeen Ali',          'all-rounder',   true,  'England',     18, 'Left-hand bat',  'Right-arm off-break'),
  ('csk', 'Mustafizur Rahman',  'bowler',        true,  'Bangladesh',  90, 'Right-hand bat', 'Left-arm medium-fast'),
  ('csk', 'Noor Ahmad',         'bowler',        true,  'Afghanistan', 77, 'Left-hand bat',  'Slow left-arm'),
  ('csk', 'Sameer Rizvi',       'batsman',       false, 'India',       9,  'Right-hand bat', null);

-- ============================================================
-- PLAYERS — MI
-- ============================================================
insert into public.players (team_id, name, role, is_overseas, country, jersey_number, batting_style, bowling_style) values
  ('mi', 'Rohit Sharma',      'batsman',       false, 'India',       45, 'Right-hand bat', 'Right-arm off-break'),
  ('mi', 'Hardik Pandya',     'all-rounder',   false, 'India',       33, 'Right-hand bat', 'Right-arm medium-fast'),
  ('mi', 'Ishan Kishan',      'wicket-keeper', false, 'India',       32, 'Left-hand bat',  null),
  ('mi', 'Suryakumar Yadav',  'batsman',       false, 'India',       63, 'Right-hand bat', 'Right-arm medium'),
  ('mi', 'Jasprit Bumrah',    'bowler',        false, 'India',       93, 'Right-hand bat', 'Right-arm fast'),
  ('mi', 'Tim David',         'batsman',       true,  'Singapore',   28, 'Right-hand bat', 'Right-arm off-break'),
  ('mi', 'Tilak Varma',       'batsman',       false, 'India',       9,  'Left-hand bat',  'Left-arm chinaman'),
  ('mi', 'Dewald Brevis',     'batsman',       true,  'South Africa',52, 'Right-hand bat', 'Right-arm medium'),
  ('mi', 'Piyush Chawla',     'bowler',        false, 'India',       22, 'Right-hand bat', 'Right-arm leg-break'),
  ('mi', 'Shreyas Iyer',      'batsman',       false, 'India',       41, 'Right-hand bat', 'Right-arm off-break'),
  ('mi', 'Kumar Kartikeya',   'bowler',        false, 'India',       36, 'Right-hand bat', 'Slow left-arm'),
  ('mi', 'Gerald Coetzee',    'bowler',        true,  'South Africa',29, 'Right-hand bat', 'Right-arm fast'),
  ('mi', 'Naman Dhir',        'all-rounder',   false, 'India',       14, 'Right-hand bat', 'Right-arm off-break'),
  ('mi', 'Romario Shepherd',  'all-rounder',   true,  'West Indies', 16, 'Right-hand bat', 'Right-arm medium-fast'),
  ('mi', 'Shams Mulani',      'bowler',        false, 'India',       88, 'Left-hand bat',  'Slow left-arm orthodox');

-- ============================================================
-- PLAYERS — RCB
-- ============================================================
insert into public.players (team_id, name, role, is_overseas, country, jersey_number, batting_style, bowling_style) values
  ('rcb', 'Virat Kohli',       'batsman',       false, 'India',       18, 'Right-hand bat', 'Right-arm medium'),
  ('rcb', 'Faf du Plessis',    'batsman',       true,  'South Africa',13, 'Right-hand bat', 'Right-arm medium'),
  ('rcb', 'Glenn Maxwell',     'all-rounder',   true,  'Australia',   32, 'Right-hand bat', 'Right-arm off-break'),
  ('rcb', 'Dinesh Karthik',    'wicket-keeper', false, 'India',       21, 'Right-hand bat', null),
  ('rcb', 'Mohammed Siraj',    'bowler',        false, 'India',       73, 'Right-hand bat', 'Right-arm medium-fast'),
  ('rcb', 'Harshal Patel',     'bowler',        false, 'India',       9,  'Right-hand bat', 'Right-arm medium-fast'),
  ('rcb', 'Yuzvendra Chahal',  'bowler',        false, 'India',       3,  'Right-hand bat', 'Right-arm leg-break'),
  ('rcb', 'Rajat Patidar',     'batsman',       false, 'India',       20, 'Right-hand bat', 'Right-arm off-break'),
  ('rcb', 'Cameron Green',     'all-rounder',   true,  'Australia',   12, 'Left-hand bat',  'Right-arm medium-fast'),
  ('rcb', 'Mahipal Lomror',    'all-rounder',   false, 'India',       5,  'Left-hand bat',  'Slow left-arm orthodox'),
  ('rcb', 'Karn Sharma',       'bowler',        false, 'India',       12, 'Right-hand bat', 'Right-arm leg-break'),
  ('rcb', 'Suyash Prabhudessai','all-rounder',  false, 'India',       99, 'Right-hand bat', 'Right-arm medium'),
  ('rcb', 'Will Jacks',        'all-rounder',   true,  'England',     19, 'Right-hand bat', 'Right-arm off-break'),
  ('rcb', 'Reece Topley',      'bowler',        true,  'England',     24, 'Right-hand bat', 'Left-arm medium-fast'),
  ('rcb', 'Alzarri Joseph',    'bowler',        true,  'West Indies', 55, 'Right-hand bat', 'Right-arm fast');

-- ============================================================
-- PLAYERS — KKR
-- ============================================================
insert into public.players (team_id, name, role, is_overseas, country, jersey_number, batting_style, bowling_style) values
  ('kkr', 'Shreyas Iyer',      'batsman',       false, 'India',       41, 'Right-hand bat', 'Right-arm off-break'),
  ('kkr', 'Andre Russell',     'all-rounder',   true,  'West Indies', 12, 'Right-hand bat', 'Right-arm medium-fast'),
  ('kkr', 'Sunil Narine',      'all-rounder',   true,  'West Indies', 74, 'Left-hand bat',  'Right-arm off-break'),
  ('kkr', 'Rinku Singh',       'batsman',       false, 'India',       64, 'Left-hand bat',  null),
  ('kkr', 'Nitish Rana',       'batsman',       false, 'India',       44, 'Left-hand bat',  'Left-arm medium'),
  ('kkr', 'Phil Salt',         'wicket-keeper', true,  'England',     7,  'Right-hand bat', null),
  ('kkr', 'Varun Chakravarthy','bowler',        false, 'India',       29, 'Right-hand bat', 'Right-arm mystery spin'),
  ('kkr', 'Mitchell Starc',    'bowler',        true,  'Australia',   56, 'Left-hand bat',  'Left-arm fast'),
  ('kkr', 'Harshit Rana',      'bowler',        false, 'India',       21, 'Right-hand bat', 'Right-arm fast'),
  ('kkr', 'Angkrish Raghuvanshi','batsman',     false, 'India',       34, 'Right-hand bat', 'Right-arm off-break'),
  ('kkr', 'Venkatesh Iyer',    'all-rounder',   false, 'India',       9,  'Left-hand bat',  'Right-arm medium'),
  ('kkr', 'Ramandeep Singh',   'all-rounder',   false, 'India',       14, 'Right-hand bat', 'Right-arm medium'),
  ('kkr', 'Suyash Sharma',     'bowler',        false, 'India',       20, 'Right-hand bat', 'Right-arm leg-break'),
  ('kkr', 'Jason Roy',         'batsman',       true,  'England',     11, 'Right-hand bat', 'Right-arm medium'),
  ('kkr', 'Manish Pandey',     'batsman',       false, 'India',       19, 'Right-hand bat', 'Right-arm off-break');

-- ============================================================
-- PLAYERS — DC
-- ============================================================
insert into public.players (team_id, name, role, is_overseas, country, jersey_number, batting_style, bowling_style) values
  ('dc', 'David Warner',      'batsman',       true,  'Australia',   31, 'Left-hand bat',  'Right-arm off-break'),
  ('dc', 'Prithvi Shaw',      'batsman',       false, 'India',       100,'Right-hand bat', 'Right-arm off-break'),
  ('dc', 'Rishabh Pant',      'wicket-keeper', false, 'India',       17, 'Left-hand bat',  null),
  ('dc', 'Axar Patel',        'all-rounder',   false, 'India',       20, 'Left-hand bat',  'Slow left-arm orthodox'),
  ('dc', 'Mitchell Marsh',    'all-rounder',   true,  'Australia',   8,  'Right-hand bat', 'Right-arm medium-fast'),
  ('dc', 'Kuldeep Yadav',     'bowler',        false, 'India',       23, 'Left-hand bat',  'Left-arm wrist spin'),
  ('dc', 'Anrich Nortje',     'bowler',        true,  'South Africa',95, 'Right-hand bat', 'Right-arm fast'),
  ('dc', 'Sarfaraz Khan',     'batsman',       false, 'India',       50, 'Right-hand bat', 'Right-arm off-break'),
  ('dc', 'Tristan Stubbs',    'batsman',       true,  'South Africa',10, 'Right-hand bat', null),
  ('dc', 'Ishant Sharma',     'bowler',        false, 'India',       29, 'Right-hand bat', 'Right-arm fast'),
  ('dc', 'Ricky Bhui',        'batsman',       false, 'India',       77, 'Right-hand bat', 'Right-arm off-break'),
  ('dc', 'Khaleel Ahmed',     'bowler',        false, 'India',       91, 'Right-hand bat', 'Left-arm medium-fast'),
  ('dc', 'Lalit Yadav',       'all-rounder',   false, 'India',       85, 'Right-hand bat', 'Right-arm off-break'),
  ('dc', 'Jake Fraser-McGurk','batsman',       true,  'Australia',   34, 'Right-hand bat', 'Right-arm medium'),
  ('dc', 'Mukesh Kumar',      'bowler',        false, 'India',       51, 'Right-hand bat', 'Right-arm medium-fast');

-- ============================================================
-- PLAYERS — PBKS
-- ============================================================
insert into public.players (team_id, name, role, is_overseas, country, jersey_number, batting_style, bowling_style) values
  ('pbks', 'Shikhar Dhawan',   'batsman',       false, 'India',       42, 'Left-hand bat',  'Right-arm off-break'),
  ('pbks', 'KL Rahul',         'wicket-keeper', false, 'India',       1,  'Right-hand bat', null),
  ('pbks', 'Sam Curran',       'all-rounder',   true,  'England',     58, 'Left-hand bat',  'Right-arm medium-fast'),
  ('pbks', 'Jonny Bairstow',   'batsman',       true,  'England',     51, 'Right-hand bat', null),
  ('pbks', 'Arshdeep Singh',   'bowler',        false, 'India',       2,  'Left-hand bat',  'Left-arm medium-fast'),
  ('pbks', 'Liam Livingstone', 'all-rounder',   true,  'England',     23, 'Right-hand bat', 'Right-arm leg-break'),
  ('pbks', 'Nathan Ellis',     'bowler',        true,  'Australia',   99, 'Right-hand bat', 'Right-arm medium-fast'),
  ('pbks', 'Kagiso Rabada',    'bowler',        true,  'South Africa',25, 'Right-hand bat', 'Right-arm fast'),
  ('pbks', 'Harpreet Brar',    'all-rounder',   false, 'India',       33, 'Left-hand bat',  'Right-arm off-break'),
  ('pbks', 'Jitesh Sharma',    'wicket-keeper', false, 'India',       7,  'Right-hand bat', null),
  ('pbks', 'Sikandar Raza',    'all-rounder',   true,  'Zimbabwe',    11, 'Right-hand bat', 'Right-arm off-break'),
  ('pbks', 'Harshal Patel',    'bowler',        false, 'India',       9,  'Right-hand bat', 'Right-arm medium-fast'),
  ('pbks', 'Rahul Chahar',     'bowler',        false, 'India',       52, 'Right-hand bat', 'Right-arm leg-break'),
  ('pbks', 'Rishi Dhawan',     'all-rounder',   false, 'India',       34, 'Right-hand bat', 'Right-arm medium'),
  ('pbks', 'Prabhsimran Singh','batsman',       false, 'India',       16, 'Right-hand bat', null);

-- ============================================================
-- PLAYERS — RR
-- ============================================================
insert into public.players (team_id, name, role, is_overseas, country, jersey_number, batting_style, bowling_style) values
  ('rr', 'Sanju Samson',      'wicket-keeper', false, 'India',       9,  'Right-hand bat', null),
  ('rr', 'Jos Buttler',       'wicket-keeper', true,  'England',     17, 'Right-hand bat', null),
  ('rr', 'Yashasvi Jaiswal',  'batsman',       false, 'India',       58, 'Left-hand bat',  'Right-arm off-break'),
  ('rr', 'Shimron Hetmyer',   'batsman',       true,  'West Indies', 6,  'Left-hand bat',  null),
  ('rr', 'Trent Boult',       'bowler',        true,  'New Zealand', 18, 'Right-hand bat', 'Left-arm medium-fast'),
  ('rr', 'Yuzvendra Chahal',  'bowler',        false, 'India',       3,  'Right-hand bat', 'Right-arm leg-break'),
  ('rr', 'Devdutt Padikkal',  'batsman',       false, 'India',       19, 'Left-hand bat',  'Slow left-arm'),
  ('rr', 'Dhruv Jurel',       'wicket-keeper', false, 'India',       8,  'Right-hand bat', null),
  ('rr', 'Ravichandran Ashwin','all-rounder',  false, 'India',       99, 'Right-hand bat', 'Right-arm off-break'),
  ('rr', 'Avesh Khan',        'bowler',        false, 'India',       54, 'Right-hand bat', 'Right-arm medium-fast'),
  ('rr', 'Tom Kohler-Cadmore','batsman',       true,  'England',     19, 'Right-hand bat', null),
  ('rr', 'Adam Zampa',        'bowler',        true,  'Australia',   35, 'Right-hand bat', 'Right-arm leg-break'),
  ('rr', 'Jason Holder',      'all-rounder',   true,  'West Indies', 11, 'Right-hand bat', 'Right-arm medium-fast'),
  ('rr', 'Sandeep Sharma',    'bowler',        false, 'India',       19, 'Right-hand bat', 'Right-arm medium'),
  ('rr', 'Riyan Parag',       'all-rounder',   false, 'India',       11, 'Right-hand bat', 'Right-arm off-break');

-- ============================================================
-- PLAYERS — SRH
-- ============================================================
insert into public.players (team_id, name, role, is_overseas, country, jersey_number, batting_style, bowling_style) values
  ('srh', 'Pat Cummins',         'all-rounder',   true,  'Australia',   30, 'Right-hand bat', 'Right-arm fast'),
  ('srh', 'Heinrich Klaasen',    'wicket-keeper', true,  'South Africa',45, 'Right-hand bat', null),
  ('srh', 'Travis Head',         'batsman',       true,  'Australia',   22, 'Left-hand bat',  'Right-arm off-break'),
  ('srh', 'Aiden Markram',       'all-rounder',   true,  'South Africa',13, 'Right-hand bat', 'Right-arm off-break'),
  ('srh', 'Abhishek Sharma',     'all-rounder',   false, 'India',       7,  'Left-hand bat',  'Left-arm orthodox'),
  ('srh', 'Bhuvneshwar Kumar',   'bowler',        false, 'India',       10, 'Right-hand bat', 'Right-arm medium'),
  ('srh', 'T Natarajan',         'bowler',        false, 'India',       91, 'Right-hand bat', 'Left-arm medium-fast'),
  ('srh', 'Rahul Tripathi',      'batsman',       false, 'India',       52, 'Right-hand bat', 'Right-arm off-break'),
  ('srh', 'Mayank Agarwal',      'batsman',       false, 'India',       28, 'Right-hand bat', 'Right-arm off-break'),
  ('srh', 'Washington Sundar',   'all-rounder',   false, 'India',       21, 'Right-hand bat', 'Right-arm off-break'),
  ('srh', 'Marco Jansen',        'bowler',        true,  'South Africa',4,  'Left-hand bat',  'Left-arm medium-fast'),
  ('srh', 'Jaydev Unadkat',      'bowler',        false, 'India',       31, 'Left-hand bat',  'Left-arm medium-fast'),
  ('srh', 'Glenn Phillips',      'all-rounder',   true,  'New Zealand', 24, 'Right-hand bat', 'Right-arm off-break'),
  ('srh', 'Umran Malik',         'bowler',        false, 'India',       95, 'Right-hand bat', 'Right-arm fast'),
  ('srh', 'Shahbaz Ahmed',       'all-rounder',   false, 'India',       14, 'Left-hand bat',  'Slow left-arm orthodox');

-- ============================================================
-- PLAYERS — GT
-- ============================================================
insert into public.players (team_id, name, role, is_overseas, country, jersey_number, batting_style, bowling_style) values
  ('gt', 'Shubman Gill',       'batsman',       false, 'India',       77, 'Right-hand bat', 'Right-arm off-break'),
  ('gt', 'David Miller',       'batsman',       true,  'South Africa',10, 'Left-hand bat',  null),
  ('gt', 'Hardik Pandya',      'all-rounder',   false, 'India',       33, 'Right-hand bat', 'Right-arm medium-fast'),
  ('gt', 'Wriddhiman Saha',    'wicket-keeper', false, 'India',       7,  'Right-hand bat', null),
  ('gt', 'Rashid Khan',        'all-rounder',   true,  'Afghanistan', 19, 'Left-hand bat',  'Right-arm leg-break'),
  ('gt', 'Mohammed Shami',     'bowler',        false, 'India',       11, 'Right-hand bat', 'Right-arm fast'),
  ('gt', 'Alzarri Joseph',     'bowler',        true,  'West Indies', 55, 'Right-hand bat', 'Right-arm fast'),
  ('gt', 'Rahul Tewatia',      'all-rounder',   false, 'India',       9,  'Left-hand bat',  'Right-arm leg-break'),
  ('gt', 'Vijay Shankar',      'all-rounder',   false, 'India',       12, 'Right-hand bat', 'Right-arm medium'),
  ('gt', 'Darshan Nalkande',   'bowler',        false, 'India',       55, 'Right-hand bat', 'Right-arm medium-fast'),
  ('gt', 'Kane Williamson',    'batsman',       true,  'New Zealand', 22, 'Right-hand bat', 'Right-arm off-break'),
  ('gt', 'Azmatullah Omarzai', 'all-rounder',   true,  'Afghanistan', 68, 'Right-hand bat', 'Right-arm medium'),
  ('gt', 'Sai Sudharsan',      'batsman',       false, 'India',       18, 'Left-hand bat',  'Left-arm orthodox'),
  ('gt', 'Noor Ahmad',         'bowler',        true,  'Afghanistan', 77, 'Left-hand bat',  'Slow left-arm'),
  ('gt', 'Shahrukh Khan',      'batsman',       false, 'India',       16, 'Right-hand bat', null);

-- ============================================================
-- PLAYERS — LSG
-- ============================================================
insert into public.players (team_id, name, role, is_overseas, country, jersey_number, batting_style, bowling_style) values
  ('lsg', 'KL Rahul',           'wicket-keeper', false, 'India',       1,  'Right-hand bat', null),
  ('lsg', 'Quinton de Kock',    'wicket-keeper', true,  'South Africa',7,  'Left-hand bat',  null),
  ('lsg', 'Marcus Stoinis',     'all-rounder',   true,  'Australia',   44, 'Right-hand bat', 'Right-arm medium-fast'),
  ('lsg', 'Nicholas Pooran',    'wicket-keeper', true,  'West Indies', 10, 'Left-hand bat',  null),
  ('lsg', 'Ravi Bishnoi',       'bowler',        false, 'India',       19, 'Right-hand bat', 'Right-arm leg-break'),
  ('lsg', 'Mohsin Khan',        'bowler',        false, 'India',       17, 'Left-hand bat',  'Left-arm medium-fast'),
  ('lsg', 'Avesh Khan',         'bowler',        false, 'India',       54, 'Right-hand bat', 'Right-arm medium-fast'),
  ('lsg', 'Deepak Hooda',       'all-rounder',   false, 'India',       22, 'Right-hand bat', 'Right-arm off-break'),
  ('lsg', 'Krunal Pandya',      'all-rounder',   false, 'India',       23, 'Left-hand bat',  'Slow left-arm orthodox'),
  ('lsg', 'Kyle Mayers',        'all-rounder',   true,  'West Indies', 49, 'Left-hand bat',  'Right-arm medium'),
  ('lsg', 'Naveen-ul-Haq',      'bowler',        true,  'Afghanistan', 15, 'Right-hand bat', 'Right-arm medium-fast'),
  ('lsg', 'Ayush Badoni',       'batsman',       false, 'India',       3,  'Left-hand bat',  null),
  ('lsg', 'Amit Mishra',        'bowler',        false, 'India',       22, 'Right-hand bat', 'Right-arm leg-break'),
  ('lsg', 'Prerak Mankad',      'all-rounder',   false, 'India',       96, 'Right-hand bat', 'Right-arm medium'),
  ('lsg', 'Mark Wood',          'bowler',        true,  'England',     33, 'Right-hand bat', 'Right-arm fast');

-- ============================================================
-- MATCHES (IPL 2025 schedule)
-- ============================================================
insert into public.matches (team1_id, team2_id, venue, city, scheduled_at, status) values
  ('csk',  'mi',   'MA Chidambaram Stadium',   'Chennai',   '2025-03-22 14:00:00+00', 'upcoming'),
  ('rcb',  'kkr',  'M Chinnaswamy Stadium',    'Bengaluru', '2025-03-23 14:00:00+00', 'upcoming'),
  ('dc',   'pbks', 'Arun Jaitley Stadium',     'Delhi',     '2025-03-25 14:00:00+00', 'upcoming'),
  ('rr',   'srh',  'Sawai Mansingh Stadium',   'Jaipur',    '2025-03-26 14:00:00+00', 'upcoming'),
  ('gt',   'lsg',  'Narendra Modi Stadium',    'Ahmedabad', '2025-03-28 14:00:00+00', 'upcoming'),
  ('mi',   'rcb',  'Wankhede Stadium',         'Mumbai',    '2025-03-29 14:00:00+00', 'upcoming'),
  ('csk',  'dc',   'MA Chidambaram Stadium',   'Chennai',   '2025-04-01 14:00:00+00', 'upcoming'),
  ('kkr',  'srh',  'Eden Gardens',             'Kolkata',   '2025-04-02 14:00:00+00', 'upcoming'),
  ('pbks', 'lsg',  'PCA Stadium',              'Mohali',    '2025-04-04 14:00:00+00', 'upcoming'),
  ('rr',   'gt',   'Sawai Mansingh Stadium',   'Jaipur',    '2025-04-05 14:00:00+00', 'upcoming'),
  ('mi',   'csk',  'Wankhede Stadium',         'Mumbai',    '2025-04-07 14:00:00+00', 'upcoming'),
  ('srh',  'rcb',  'Rajiv Gandhi Stadium',     'Hyderabad', '2025-04-08 14:00:00+00', 'upcoming'),
  ('lsg',  'kkr',  'BRSABV Ekana Stadium',     'Lucknow',   '2025-04-10 14:00:00+00', 'upcoming'),
  ('dc',   'gt',   'Arun Jaitley Stadium',     'Delhi',     '2025-04-11 14:00:00+00', 'upcoming'),
  ('csk',  'rr',   'MA Chidambaram Stadium',   'Chennai',   '2025-04-13 14:00:00+00', 'upcoming'),
  ('pbks', 'mi',   'PCA Stadium',              'Mohali',    '2025-04-14 14:00:00+00', 'upcoming'),
  ('kkr',  'gt',   'Eden Gardens',             'Kolkata',   '2025-04-16 14:00:00+00', 'upcoming'),
  ('srh',  'lsg',  'Rajiv Gandhi Stadium',     'Hyderabad', '2025-04-17 14:00:00+00', 'upcoming'),
  ('rcb',  'dc',   'M Chinnaswamy Stadium',    'Bengaluru', '2025-04-19 14:00:00+00', 'upcoming'),
  ('rr',   'mi',   'Sawai Mansingh Stadium',   'Jaipur',    '2025-04-20 14:00:00+00', 'upcoming'),
  ('csk',  'kkr',  'MA Chidambaram Stadium',   'Chennai',   '2025-04-22 14:00:00+00', 'upcoming'),
  ('lsg',  'rcb',  'BRSABV Ekana Stadium',     'Lucknow',   '2025-04-23 14:00:00+00', 'upcoming'),
  ('pbks', 'srh',  'PCA Stadium',              'Mohali',    '2025-04-25 14:00:00+00', 'upcoming'),
  ('gt',   'mi',   'Narendra Modi Stadium',    'Ahmedabad', '2025-04-26 14:00:00+00', 'upcoming'),
  ('dc',   'rr',   'Arun Jaitley Stadium',     'Delhi',     '2025-04-28 14:00:00+00', 'upcoming')
on conflict do nothing;

-- ============================================================
-- BADGES
-- ============================================================
insert into public.badges (id, name, description, icon, condition_type, condition_value, points) values
  ('first_prediction',  'First Blood',       'Make your first ever prediction',              '🏏', 'prediction_count',  1,  10),
  ('five_predictions',  'Warming Up',        'Make 5 predictions',                           '🔥', 'prediction_count',  5,  25),
  ('ten_predictions',   'Regular Fan',       'Make 10 predictions',                          '⭐', 'prediction_count',  10, 50),
  ('fifty_predictions', 'Cricket Obsessed',  'Make 50 predictions',                          '🏆', 'prediction_count',  50, 150),
  ('first_correct',     'Lucky Guess',       'Get your first prediction right',              '✅', 'correct_count',     1,  20),
  ('five_correct',      'On Fire!',          'Get 5 predictions correct',                    '💫', 'correct_count',     5,  75),
  ('accuracy_50',       'Decent Analyst',    'Achieve 50% prediction accuracy',              '📊', 'accuracy',          50, 100),
  ('accuracy_75',       'Cricket Expert',    'Achieve 75% prediction accuracy over 10 games','🧠', 'accuracy',          75, 250)
on conflict (id) do nothing;

-- ============================================================
-- SAMPLE POLLS
-- ============================================================
insert into public.polls (question, options, ends_at) values
  ('Who will win IPL 2025?',         ARRAY['CSK', 'MI', 'RCB', 'KKR', 'GT'],                         '2025-05-25 18:30:00+00'),
  ('Best captain of IPL 2025?',      ARRAY['MS Dhoni', 'Rohit Sharma', 'Virat Kohli', 'Pat Cummins'], '2025-04-30 18:30:00+00'),
  ('Top run scorer of IPL 2025?',    ARRAY['Virat Kohli', 'Rohit Sharma', 'KL Rahul', 'Yashasvi Jaiswal'], '2025-05-15 18:30:00+00'),
  ('Best bowler of IPL 2025?',       ARRAY['Jasprit Bumrah', 'Mohammed Shami', 'Rashid Khan', 'Trent Boult'], '2025-05-15 18:30:00+00');

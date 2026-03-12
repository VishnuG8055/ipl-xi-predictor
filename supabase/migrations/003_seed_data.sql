-- supabase/migrations/003_seed_data.sql — Seeds IPL 2025 match schedule

-- Insert upcoming IPL 2025 matches
insert into public.matches (team1_id, team2_id, venue, city, scheduled_at, status) values
  ('csk', 'mi', 'MA Chidambaram Stadium', 'Chennai', '2025-03-22 14:00:00+00', 'upcoming'),
  ('rcb', 'kkr', 'M Chinnaswamy Stadium', 'Bengaluru', '2025-03-23 14:00:00+00', 'upcoming'),
  ('dc', 'pbks', 'Arun Jaitley Stadium', 'Delhi', '2025-03-25 14:00:00+00', 'upcoming'),
  ('rr', 'srh', 'Sawai Mansingh Stadium', 'Jaipur', '2025-03-26 14:00:00+00', 'upcoming'),
  ('gt', 'lsg', 'Narendra Modi Stadium', 'Ahmedabad', '2025-03-28 14:00:00+00', 'upcoming'),
  ('mi', 'rcb', 'Wankhede Stadium', 'Mumbai', '2025-03-29 14:00:00+00', 'upcoming'),
  ('csk', 'dc', 'MA Chidambaram Stadium', 'Chennai', '2025-04-01 14:00:00+00', 'upcoming'),
  ('kkr', 'srh', 'Eden Gardens', 'Kolkata', '2025-04-02 14:00:00+00', 'upcoming'),
  ('pbks', 'lsg', 'PCA Stadium', 'Mohali', '2025-04-04 14:00:00+00', 'upcoming'),
  ('rr', 'gt', 'Sawai Mansingh Stadium', 'Jaipur', '2025-04-05 14:00:00+00', 'upcoming');

-- Insert sample polls
insert into public.polls (question, options, ends_at) values
  ('Who will win IPL 2025?', ARRAY['CSK', 'MI', 'RCB', 'KKR', 'GT'], '2025-05-25 18:30:00+00'),
  ('Best captain of IPL 2025?', ARRAY['MS Dhoni', 'Rohit Sharma', 'Virat Kohli', 'Hardik Pandya'], '2025-04-30 18:30:00+00'),
  ('Who will be the top run scorer?', ARRAY['Virat Kohli', 'Rohit Sharma', 'KL Rahul', 'Shubman Gill'], '2025-05-15 18:30:00+00');

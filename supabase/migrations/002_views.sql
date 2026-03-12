-- supabase/migrations/002_views.sql — Creates useful views for leaderboard and stats

-- Leaderboard view
create or replace view public.leaderboard as
select
  p.id,
  p.username,
  p.avatar_url,
  p.favorite_team_id,
  p.total_points,
  p.prediction_accuracy,
  count(pr.id) as total_predictions,
  count(case when pr.is_correct = true then 1 end) as correct_predictions,
  rank() over (order by p.total_points desc) as rank
from public.profiles p
left join public.predictions pr on p.id = pr.user_id
group by p.id, p.username, p.avatar_url, p.favorite_team_id, p.total_points, p.prediction_accuracy
order by p.total_points desc;

-- Poll results view
create or replace view public.poll_results as
select
  p.id as poll_id,
  p.question,
  p.options,
  p.ends_at,
  pv.option_index,
  count(pv.id) as vote_count
from public.polls p
left join public.poll_votes pv on p.id = pv.poll_id
group by p.id, p.question, p.options, p.ends_at, pv.option_index;

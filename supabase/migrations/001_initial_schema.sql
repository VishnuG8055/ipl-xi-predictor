-- supabase/migrations/001_initial_schema.sql — Creates all tables with Row Level Security

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Teams table (stores all 10 IPL teams)
create table if not exists public.teams (
  id text primary key,                  -- e.g. 'csk', 'mi'
  name text not null,                   -- Full name
  short_name text not null,             -- e.g. 'CSK'
  city text not null,
  primary_color text not null,          -- Hex color
  secondary_color text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Players table (squad members for each team)
create table if not exists public.players (
  id uuid default uuid_generate_v4() primary key,
  team_id text references public.teams(id) on delete cascade not null,
  name text not null,
  role text not null check (role in ('batsman', 'bowler', 'all-rounder', 'wicket-keeper')),
  is_overseas boolean default false not null,
  country text default 'India' not null,
  jersey_number integer,
  batting_style text,
  bowling_style text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Badges table
create table if not exists public.badges (
  id text primary key,
  name text not null,
  description text not null,
  icon text not null,           -- emoji icon
  condition_type text not null, -- e.g. 'prediction_count', 'accuracy'
  condition_value integer not null,
  points integer default 0 not null
);

-- Profiles table
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  username text unique not null,
  full_name text,
  avatar_url text,
  favorite_team_id text,
  total_points integer default 0 not null,
  prediction_accuracy numeric(5,2),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- User badges (which badges a user has earned — placed after profiles so FK works)
create table if not exists public.user_badges (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  badge_id text references public.badges(id) on delete cascade not null,
  earned_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, badge_id)
);

-- Matches table
create table if not exists public.matches (
  id uuid default uuid_generate_v4() primary key,
  team1_id text not null,
  team2_id text not null,
  venue text not null,
  city text not null,
  scheduled_at timestamp with time zone not null,
  status text default 'upcoming' check (status in ('upcoming', 'live', 'completed')),
  winner_id text,
  result_description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Predictions table
create table if not exists public.predictions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  match_id uuid references public.matches(id) on delete cascade not null,
  predicted_team_id text,
  players text[] default '{}',
  is_correct boolean,
  points_earned integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, match_id)
);

-- Polls table
create table if not exists public.polls (
  id uuid default uuid_generate_v4() primary key,
  question text not null,
  options text[] not null,
  ends_at timestamp with time zone not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Poll votes table
create table if not exists public.poll_votes (
  id uuid default uuid_generate_v4() primary key,
  poll_id uuid references public.polls(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  option_index integer not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(poll_id, user_id)
);

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.matches enable row level security;
alter table public.predictions enable row level security;
alter table public.polls enable row level security;
alter table public.poll_votes enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone" on public.profiles
  for select using (true);

create policy "Users can insert their own profile" on public.profiles
  for insert with check (auth.uid() = id);

create policy "Users can update their own profile" on public.profiles
  for update using (auth.uid() = id);

-- Matches policies
create policy "Matches are viewable by everyone" on public.matches
  for select using (true);

-- Predictions policies
create policy "Predictions are viewable by everyone" on public.predictions
  for select using (true);

create policy "Users can insert their own predictions" on public.predictions
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own predictions" on public.predictions
  for update using (auth.uid() = user_id);

-- Polls policies
create policy "Polls are viewable by everyone" on public.polls
  for select using (true);

-- Poll votes policies
create policy "Poll votes are viewable by everyone" on public.poll_votes
  for select using (true);

create policy "Users can insert their own votes" on public.poll_votes
  for insert with check (auth.uid() = user_id);

-- Teams & Players policies
alter table public.teams enable row level security;
alter table public.players enable row level security;
alter table public.badges enable row level security;
alter table public.user_badges enable row level security;

create policy "Teams are viewable by everyone" on public.teams
  for select using (true);

create policy "Players are viewable by everyone" on public.players
  for select using (true);

create policy "Badges are viewable by everyone" on public.badges
  for select using (true);

create policy "User badges are viewable by everyone" on public.user_badges
  for select using (true);

create policy "Users can insert their own badges" on public.user_badges
  for insert with check (auth.uid() = user_id);

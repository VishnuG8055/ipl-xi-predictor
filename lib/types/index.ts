// lib/types/index.ts — TypeScript interfaces for all data models in IPL XI Predictor

export interface Team {
  id: string;
  name: string;
  shortName: string;
  city: string;
  primaryColor: string;
  secondaryColor: string;
  glowColor: string;
  logoUrl?: string;
}

export interface Player {
  id: string;
  teamId: string;
  name: string;
  role: 'batsman' | 'bowler' | 'all-rounder' | 'wicket-keeper';
  isOverseas: boolean;
  country: string;
  jerseyNumber?: number;
  battingStyle?: string;
  bowlingStyle?: string;
  stats?: {
    matches: number;
    runs?: number;
    wickets?: number;
    average?: number;
    strikeRate?: number;
  };
}

export interface Match {
  id: string;
  team1Id: string;
  team2Id: string;
  venue: string;
  city: string;
  scheduledAt: string;
  status: 'upcoming' | 'live' | 'completed';
  result?: {
    winnerId?: string;
    description: string;
  };
}

export interface Profile {
  id: string;
  username: string;
  fullName?: string;
  avatarUrl?: string;
  favoriteTeamId?: string;
  totalPoints: number;
  predictionAccuracy?: number;
  createdAt: string;
}

export interface Prediction {
  id: string;
  userId: string;
  matchId: string;
  predictedTeamId?: string;
  players: string[];
  isCorrect?: boolean;
  pointsEarned?: number;
  createdAt: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  iconUrl?: string;
  condition: string;
  points: number;
}

export interface Poll {
  id: string;
  question: string;
  options: string[];
  endsAt: string;
  votes: Record<string, number>;
  userVote?: string;
}

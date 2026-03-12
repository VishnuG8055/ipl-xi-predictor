// lib/utils/theme.ts — Helper functions for team colors and gradients

import { IPL_TEAMS } from './constants';
import { Team } from '../types';

export function getTeamColors(teamId: string): { primary: string; secondary: string; glow: string } {
  const team = IPL_TEAMS.find((t) => t.id === teamId);
  if (!team) {
    return { primary: '#00f5d4', secondary: '#7b2ff7', glow: 'rgba(0, 245, 212, 0.3)' };
  }
  return {
    primary: team.primaryColor,
    secondary: team.secondaryColor,
    glow: team.glowColor,
  };
}

export function getTeamGradient(teamId: string): string {
  const colors = getTeamColors(teamId);
  return `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`;
}

export function getTeamById(teamId: string): Team | undefined {
  return IPL_TEAMS.find((t) => t.id === teamId);
}

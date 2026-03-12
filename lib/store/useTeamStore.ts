// lib/store/useTeamStore.ts — Zustand store for managing the selected IPL team

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Team } from '../types';

interface TeamState {
  selectedTeam: Team | null;
  favoriteTeamId: string | null;
  setSelectedTeam: (team: Team | null) => void;
  setFavoriteTeamId: (teamId: string) => void;
}

export const useTeamStore = create<TeamState>()(
  persist(
    (set) => ({
      selectedTeam: null,
      favoriteTeamId: null,
      setSelectedTeam: (team) => set({ selectedTeam: team }),
      setFavoriteTeamId: (teamId) => set({ favoriteTeamId: teamId }),
    }),
    {
      name: 'team-storage',
    }
  )
);

import { create } from 'zustand';

interface ActivityState {
  steps: number;
  stepGoal: number;
  isLoading: boolean;
  
  // Actions
  fetchTodayActivity: () => Promise<void>;
  addSteps: (amount: number) => void;
}

export const useActivityStore = create<ActivityState>((set) => ({
  // Estado inicial
  steps: 8432, // Datos mockeados
  stepGoal: 10000,
  isLoading: false,

  fetchTodayActivity: async () => {
    set({ isLoading: true });
    try {
      // TODO: Reemplazar con HealthConnect / SQLite local
      await new Promise((resolve) => setTimeout(resolve, 500));
      set({ isLoading: false });
    } catch (error) {
      console.error('Error fetching activity', error);
      set({ isLoading: false });
    }
  },

  addSteps: (amount) => set((state) => ({ steps: state.steps + amount })),
}));

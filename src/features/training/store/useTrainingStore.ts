import { create } from 'zustand';

interface WorkoutPlan {
  id: string;
  name: string;
  duration: number; // en minutos
  timeOfDay: 'Morning' | 'Afternoon' | 'Evening';
}

interface TrainingState {
  todayWorkout: WorkoutPlan | null;
  isLoading: boolean;
  
  // Actions
  fetchTodayWorkout: () => Promise<void>;
}

export const useTrainingStore = create<TrainingState>((set) => ({
  todayWorkout: {
    id: '1',
    name: 'Push Day Workout',
    duration: 45,
    timeOfDay: 'Morning',
  },
  isLoading: false,

  fetchTodayWorkout: async () => {
    set({ isLoading: true });
    try {
      // TODO: Buscar entrenamiento del día en SQLite local
      await new Promise((resolve) => setTimeout(resolve, 500));
      set({ isLoading: false });
    } catch (error) {
      console.error('Error fetching today workout', error);
      set({ isLoading: false });
    }
  },
}));

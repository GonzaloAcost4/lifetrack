import { create } from 'zustand';
import { db } from '@/core/db';
// Aquí importaremos las queries de Drizzle luego

interface NutritionState {
  dailyGoal: number;
  consumed: number;
  protein: number;
  carbs: number;
  fat: number;
  isLoading: boolean;
  
  // Actions
  fetchTodaySummary: () => Promise<void>;
  addCalories: (amount: number) => void;
}

export const useNutritionStore = create<NutritionState>((set) => ({
  // Estado inicial
  dailyGoal: 2500,
  consumed: 1450, // Datos mockeados temporalmente hasta conectar BD real
  protein: 85,
  carbs: 120,
  fat: 45,
  isLoading: false,

  fetchTodaySummary: async () => {
    set({ isLoading: true });
    try {
      // TODO: Reemplazar con query real a SQLite usando Drizzle
      // const todayData = await db.select().from(foodLogs).where(...)
      
      // Simulamos latencia
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      set({ 
        consumed: 1450,
        isLoading: false 
      });
    } catch (error) {
      console.error('Error fetching nutrition summary', error);
      set({ isLoading: false });
    }
  },

  addCalories: (amount) => set((state) => ({ consumed: state.consumed + amount })),
}));

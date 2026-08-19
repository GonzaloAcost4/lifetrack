import { create } from 'zustand';
import { Platform } from 'react-native';
import { db } from '@/core/db';
import { foods, foodLogs } from '@/core/db/schema/nutrition';
import { users } from '@/core/db/schema/users';
import * as Crypto from 'expo-crypto';
import { eq, sql, gte, lt } from 'drizzle-orm';

interface NutritionState {
  dailyGoal: number;
  consumed: number;
  protein: number;
  carbs: number;
  fat: number;
  isLoading: boolean;
  
  // Actions
  fetchTodaySummary: () => Promise<void>;
  addFoodLog: (name: string, calories: number, protein: number, carbs: number, fat: number) => Promise<void>;
}

export const useNutritionStore = create<NutritionState>((set, get) => ({
  dailyGoal: 2500,
  consumed: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
  isLoading: false,

  fetchTodaySummary: async () => {
    if (Platform.OS === 'web') return; // Bypass on web for now
    
    set({ isLoading: true });
    try {
      // 1. Aseguramos que exista un usuario por defecto
      const existingUser = await db.select().from(users).limit(1);
      if (existingUser.length === 0) {
        await db.insert(users).values({
          id: 'default-user',
          name: 'Usuario',
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      // 2. Calculamos el inicio y fin del día actual
      const now = new Date();
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const endOfDay = new Date(startOfDay);
      endOfDay.setDate(endOfDay.getDate() + 1);

      // 3. Traemos todos los logs de hoy cruzados con sus alimentos
      const logs = await db
        .select({
          calories: foods.calories,
          protein: foods.protein,
          carbs: foods.carbs,
          fat: foods.fat,
        })
        .from(foodLogs)
        .innerJoin(foods, eq(foodLogs.foodId, foods.id))
        .where(
          sql`${foodLogs.consumedAt} >= ${startOfDay.getTime()} AND ${foodLogs.consumedAt} < ${endOfDay.getTime()}`
        );

      // 4. Sumamos
      let totalCals = 0;
      let totalProtein = 0;
      let totalCarbs = 0;
      let totalFat = 0;

      for (const log of logs) {
        totalCals += log.calories;
        totalProtein += log.protein;
        totalCarbs += log.carbs;
        totalFat += log.fat;
      }

      set({ 
        consumed: totalCals,
        protein: totalProtein,
        carbs: totalCarbs,
        fat: totalFat,
        isLoading: false 
      });
    } catch (error) {
      console.error('Error fetching nutrition summary', error);
      set({ isLoading: false });
    }
  },

  addFoodLog: async (name, calories, protein, carbs, fat) => {
    if (Platform.OS === 'web') {
      // Optimistic update for web dev
      set((state) => ({ consumed: state.consumed + calories }));
      return;
    }

    try {
      const foodId = Crypto.randomUUID();
      const logId = Crypto.randomUUID();
      const now = new Date();

      // Guardamos el alimento
      await db.insert(foods).values({
        id: foodId,
        name,
        calories,
        protein,
        carbs,
        fat,
        servingSize: 100,
        servingUnit: 'g',
        isCustom: true,
      });

      // Guardamos el registro de consumo
      await db.insert(foodLogs).values({
        id: logId,
        userId: 'default-user',
        foodId: foodId,
        consumedAt: now,
        mealType: 'snack',
        amountConsumed: 100,
      });

      // Actualizamos el estado de Zustand directamente sin volver a hacer fetching
      set((state) => ({
        consumed: state.consumed + calories,
        protein: state.protein + protein,
        carbs: state.carbs + carbs,
        fat: state.fat + fat,
      }));

    } catch (error) {
      console.error('Error adding food log:', error);
    }
  },
}));

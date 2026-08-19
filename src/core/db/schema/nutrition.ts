import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
import { users } from './users';

export const foods = sqliteTable('foods', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  brand: text('brand'),
  calories: real('calories').notNull(),
  protein: real('protein').notNull(),
  carbs: real('carbs').notNull(),
  fat: real('fat').notNull(),
  servingSize: real('serving_size').notNull(), // en gramos o ml
  servingUnit: text('serving_unit').notNull().default('g'),
  isCustom: integer('is_custom', { mode: 'boolean' }).default(false),
});

export const foodLogs = sqliteTable('food_logs', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  foodId: text('food_id').references(() => foods.id).notNull(),
  consumedAt: integer('consumed_at', { mode: 'timestamp' }).notNull(),
  mealType: text('meal_type').notNull(), // 'breakfast', 'lunch', 'dinner', 'snack'
  amountConsumed: real('amount_consumed').notNull(), // cantidad en base a la unidad
});

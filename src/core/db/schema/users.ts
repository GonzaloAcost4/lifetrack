import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(), // UUID
  name: text('name'),
  email: text('email'),
  dailyCalorieGoal: integer('daily_calorie_goal').default(2000),
  dailyProteinGoal: integer('daily_protein_goal').default(150),
  themePreference: text('theme_preference').default('dark'), // 'light', 'dark', 'system'
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

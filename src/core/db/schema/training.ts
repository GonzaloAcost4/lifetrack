import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
import { users } from './users';

export const workouts = sqliteTable('workouts', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  name: text('name').notNull(), // ej: "Push Day", "Legs"
  startedAt: integer('started_at', { mode: 'timestamp' }).notNull(),
  endedAt: integer('ended_at', { mode: 'timestamp' }),
  notes: text('notes'),
});

export const exercises = sqliteTable('exercises', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  targetMuscle: text('target_muscle'), // Chest, Back, Legs, etc.
  equipment: text('equipment'), // Barbell, Dumbbell, Machine
});

export const workoutSets = sqliteTable('workout_sets', {
  id: text('id').primaryKey(),
  workoutId: text('workout_id').references(() => workouts.id).notNull(),
  exerciseId: text('exercise_id').references(() => exercises.id).notNull(),
  setNumber: integer('set_number').notNull(),
  weight: real('weight').notNull(), // en kg o lbs
  reps: integer('reps').notNull(),
  rpe: real('rpe'), // Rate of Perceived Exertion (1-10)
});

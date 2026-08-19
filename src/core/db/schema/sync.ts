import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Esta tabla es crucial para el modo Offline-First. 
// Guarda las acciones que ocurren mientras no hay internet, para enviarlas a Supabase despues.
export const syncQueue = sqliteTable('sync_queue', {
  id: text('id').primaryKey(),
  action: text('action').notNull(), // 'CREATE', 'UPDATE', 'DELETE'
  entityType: text('entity_type').notNull(), // 'food_logs', 'workouts', etc.
  entityId: text('entity_id').notNull(),
  payload: text('payload'), // JSON string del cambio
  status: text('status').default('pending').notNull(), // 'pending', 'processing', 'failed'
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});

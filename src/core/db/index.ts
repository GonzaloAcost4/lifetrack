import { openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as schema from './schema';

// Abre o crea la base de datos local
export const expoDb = openDatabaseSync('lifetrack.db', { enableChangeListener: true });

// Inicializa Drizzle con la DB de Expo SQLite
export const db = drizzle(expoDb, { schema });

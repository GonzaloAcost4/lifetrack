import { openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { Platform } from 'react-native';
import * as schema from './schema';

// Abre o crea la base de datos local (solo en móviles)
export const expoDb = Platform.OS === 'web' ? null as any : openDatabaseSync('lifetrack.db', { enableChangeListener: true });

// Inicializa Drizzle con la DB de Expo SQLite
export const db = Platform.OS === 'web' ? null as any : drizzle(expoDb, { schema });

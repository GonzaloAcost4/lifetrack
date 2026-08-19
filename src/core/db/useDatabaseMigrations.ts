import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { db } from './index';
import migrations from './migrations/migrations';
import { Platform } from 'react-native';

export function useDatabaseMigrations() {
  if (Platform.OS === 'web') {
    return { success: true, error: null };
  }

  // En móvil pasamos la bd real
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { success, error } = useMigrations(db as any, migrations);

  return { success, error };
}

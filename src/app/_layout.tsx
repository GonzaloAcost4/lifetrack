import { Stack } from 'expo-router';
import { useDatabaseMigrations } from '@/core/db/useDatabaseMigrations';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Prevent auto hide of splash screen
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { success: migrationsSuccess, error: migrationsError } = useDatabaseMigrations();

  useEffect(() => {
    if (migrationsSuccess || migrationsError) {
      if (migrationsError) {
        console.error('Database migration error:', migrationsError);
      }
      SplashScreen.hideAsync();
    }
  }, [migrationsSuccess, migrationsError]);

  if (!migrationsSuccess && !migrationsError) {
    return null; // DB is still migrating
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

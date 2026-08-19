import { Stack } from 'expo-router';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useDatabaseMigrations } from '@/core/db/useDatabaseMigrations';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Prevent auto hide of splash screen
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
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
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Aquí irán los modales y otras pantallas full-screen */}
      </Stack>
    </ThemeProvider>
  );
}

import { Tabs } from 'expo-router';
import { Home, Apple, Dumbbell, CalendarDays, User } from 'lucide-react-native';
import { useColorScheme } from 'react-native';
import { theme } from '@/core/theme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeColor = theme.colors.accent.primary;
  const inactiveColor = colorScheme === 'dark' ? theme.colors.text.disabled : '#A0AEC0';

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? theme.colors.bg.secondary : '#FFFFFF',
          borderTopColor: colorScheme === 'dark' ? theme.colors.bg.tertiary : '#E2E8F0',
        },
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? theme.colors.bg.primary : '#FFFFFF',
        },
        headerTintColor: colorScheme === 'dark' ? theme.colors.text.primary : '#1A202C',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="nutrition"
        options={{
          title: 'Nutrición',
          tabBarIcon: ({ color, size }) => <Apple color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          title: 'Entreno',
          tabBarIcon: ({ color, size }) => <Dumbbell color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          title: 'Agenda',
          tabBarIcon: ({ color, size }) => <CalendarDays color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}

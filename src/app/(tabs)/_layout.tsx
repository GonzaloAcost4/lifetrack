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
        headerShown: false,
        tabBarActiveTintColor: theme.colors.brand.dark,
        tabBarInactiveTintColor: theme.colors.text.secondary,
        tabBarActiveBackgroundColor: theme.colors.brand.blue, // Pill de fondo celeste pastel
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.bg.primary,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 80,
          paddingHorizontal: 20,
          paddingTop: 10,
        },
        tabBarItemStyle: {
          height: 48,
          width: 48,
          borderRadius: 24,
          marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
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

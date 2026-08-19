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
        tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
        tabBarActiveBackgroundColor: theme.colors.bg.secondary,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.brand.dark,
          position: 'absolute',
          bottom: 24,
          left: 24,
          right: 24,
          height: 72,
          borderRadius: 36,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 20,
          paddingHorizontal: 8,
          paddingBottom: 0,
        },
        tabBarItemStyle: {
          height: 56,
          marginTop: 8,
          borderRadius: 28,
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

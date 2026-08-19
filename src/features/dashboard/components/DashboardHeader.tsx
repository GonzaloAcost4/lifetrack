import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/core/theme';
import { User, Search } from 'lucide-react-native';

export function DashboardHeader() {
  const today = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity style={styles.avatarButton}>
          <User color={theme.colors.bg.primary} size={24} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Hello, Gonzalo</Text>
          <Text style={styles.date}>Today {today}.</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.iconButton}>
        <Search color={theme.colors.text.primary} size={22} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  avatarButton: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.brand.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {},
  greeting: {
    color: theme.colors.text.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: theme.colors.text.secondary,
    fontSize: 13,
    marginTop: 2,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.bg.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
});

import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { theme } from '@/core/theme';
import { Bell, Search } from 'lucide-react-native';

export function DashboardHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.greeting}>Hello, Gonzalo 👋</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Bell color={theme.colors.text.inverse} size={20} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <Search color={theme.colors.text.secondary} size={20} style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={theme.colors.text.secondary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.md,
    backgroundColor: theme.colors.bg.primary,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  greeting: {
    color: theme.colors.text.primary,
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.bg.secondary,
    borderRadius: theme.borderRadius.full,
    paddingHorizontal: theme.spacing.md,
    height: 52,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.text.primary,
    height: '100%',
  },
});

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/core/theme';
import { Target, ChevronRight } from 'lucide-react-native';

export function NutritionCard() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Calories</Text>
        <Text style={styles.subtitle}>Complete your goal before 9:00 PM</Text>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.avatars}>
          <View style={[styles.avatar, { backgroundColor: theme.colors.semantic.error, zIndex: 3 }]} />
          <View style={[styles.avatar, { backgroundColor: theme.colors.semantic.warning, marginLeft: -12, zIndex: 2 }]} />
          <View style={[styles.avatar, { backgroundColor: theme.colors.semantic.info, marginLeft: -12, zIndex: 1 }]} />
          <View style={[styles.avatarPlus, { marginLeft: -12, zIndex: 0 }]}>
            <Text style={styles.avatarPlusText}>+2</Text>
          </View>
        </View>

        <View style={styles.graphicContainer}>
           <Target color={theme.colors.bg.primary} size={40} strokeWidth={1.5} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.brand.purple,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    minHeight: 160,
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    marginBottom: theme.spacing.md,
  },
  title: {
    color: theme.colors.text.primary,
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 4,
    maxWidth: '70%',
    lineHeight: 32,
  },
  subtitle: {
    color: theme.colors.text.primary,
    opacity: 0.7,
    fontSize: 14,
    maxWidth: '70%',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing.md,
  },
  avatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: theme.colors.brand.purple,
  },
  avatarPlus: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: theme.colors.brand.purple,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlusText: {
    color: theme.colors.text.primary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  graphicContainer: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

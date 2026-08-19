import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/core/theme';
import { Play } from 'lucide-react-native';

export function NutritionCard() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Calories</Text>
        <Text style={styles.subtitle}>Nutritional Balance</Text>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.pill}>
          <Text style={styles.pillText}>1450 kcal</Text>
        </View>

        <View style={styles.playButton}>
           <Play color={theme.colors.brand.dark} size={16} fill={theme.colors.brand.dark} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.brand.dark,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    minHeight: 180,
    justifyContent: 'space-between',
  },
  header: {
    marginBottom: theme.spacing.md,
  },
  title: {
    color: theme.colors.text.inverse,
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 4,
    maxWidth: '80%',
    lineHeight: 32,
  },
  subtitle: {
    color: theme.colors.text.inverse,
    opacity: 0.7,
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing.md,
  },
  pill: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: theme.borderRadius.full,
  },
  pillText: {
    color: theme.colors.text.inverse,
    fontSize: 14,
    fontWeight: '600',
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.brand.mint, // Acento de color pastel
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 3, // Centrar el ícono de play
  },
});

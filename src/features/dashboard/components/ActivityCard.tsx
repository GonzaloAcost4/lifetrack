import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/core/theme';
import { Activity, Dumbbell, ChevronRight } from 'lucide-react-native';

export function ActivityCard() {
  return (
    <View style={styles.container}>
      {/* Pasos */}
      <TouchableOpacity style={[styles.card, styles.stepsCard]}>
        <View style={styles.cardHeader}>
          <View style={styles.iconContainer}>
            <Activity color={theme.colors.semantic.info} size={20} />
          </View>
          <Text style={styles.cardTitle}>Pasos</Text>
        </View>
        <Text style={styles.mainValue}>8,432</Text>
        <Text style={styles.subValue}>/ 10,000</Text>
      </TouchableOpacity>

      {/* Entrenamiento */}
      <TouchableOpacity style={[styles.card, styles.workoutCard]}>
        <View style={styles.cardHeader}>
          <View style={[styles.iconContainer, { backgroundColor: `${theme.colors.accent.primary}20` }]}>
            <Dumbbell color={theme.colors.accent.primary} size={20} />
          </View>
          <Text style={styles.cardTitle}>Entrenamiento</Text>
        </View>
        <Text style={styles.mainValue}>Push Day</Text>
        <View style={styles.workoutFooter}>
          <Text style={styles.subValue}>Hace 2 horas</Text>
          <ChevronRight color={theme.colors.text.secondary} size={16} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  card: {
    flex: 1,
    backgroundColor: theme.colors.bg.secondary,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
  },
  stepsCard: {},
  workoutCard: {},
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: theme.borderRadius.full,
    backgroundColor: `${theme.colors.semantic.info}20`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: theme.colors.text.secondary,
    fontSize: 14,
    fontWeight: '500',
  },
  mainValue: {
    color: theme.colors.text.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subValue: {
    color: theme.colors.text.secondary,
    fontSize: 12,
  },
  workoutFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

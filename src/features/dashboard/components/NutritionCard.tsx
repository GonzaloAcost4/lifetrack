import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/core/theme';
import { Plus } from 'lucide-react-native';

interface MacroBarProps {
  label: string;
  consumed: number;
  goal: number;
  color: string;
}

function MacroBar({ label, consumed, goal, color }: MacroBarProps) {
  const percentage = Math.min((consumed / goal) * 100, 100);

  return (
    <View style={styles.macroContainer}>
      <View style={styles.macroHeader}>
        <Text style={styles.macroLabel}>{label}</Text>
        <Text style={styles.macroValues}>
          {consumed} / {goal}g
        </Text>
      </View>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${percentage}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
}

export function NutritionCard() {
  const goalCals = 2500;
  const consumedCals = 1450;
  const remainingCals = goalCals - consumedCals;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Nutrición</Text>
          <Text style={styles.subtitle}>Faltan {remainingCals} kcal</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Plus color={theme.colors.bg.primary} size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.caloriesCircle}>
          <Text style={styles.caloriesNumber}>{consumedCals}</Text>
          <Text style={styles.caloriesLabel}>consumidas</Text>
        </View>

        <View style={styles.macrosList}>
          <MacroBar label="Proteína" consumed={85} goal={160} color={theme.colors.macros.protein} />
          <MacroBar label="Carbo" consumed={120} goal={250} color={theme.colors.macros.carbs} />
          <MacroBar label="Grasa" consumed={45} goal={70} color={theme.colors.macros.fat} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.bg.secondary,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  title: {
    color: theme.colors.text.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: theme.colors.text.secondary,
    fontSize: 14,
    marginTop: 2,
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.semantic.success,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xl,
  },
  caloriesCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8,
    borderColor: theme.colors.macros.calories,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caloriesNumber: {
    color: theme.colors.text.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  caloriesLabel: {
    color: theme.colors.text.secondary,
    fontSize: 12,
  },
  macrosList: {
    flex: 1,
    gap: theme.spacing.md,
  },
  macroContainer: {},
  macroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  macroLabel: {
    color: theme.colors.text.primary,
    fontSize: 12,
    fontWeight: '500',
  },
  macroValues: {
    color: theme.colors.text.secondary,
    fontSize: 12,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: theme.colors.bg.tertiary,
    borderRadius: theme.borderRadius.full,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: theme.borderRadius.full,
  },
});

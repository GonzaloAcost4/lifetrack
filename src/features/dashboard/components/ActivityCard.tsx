import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/core/theme';
import { Activity, Dumbbell, Play } from 'lucide-react-native';

export function ActivityCard() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Special for you</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        {/* Card Entrenamiento (Celeste Pastel) */}
        <TouchableOpacity style={[styles.card, { backgroundColor: theme.colors.brand.blue }]}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Push Day Workout</Text>
            <View style={styles.tagsRow}>
              <View style={[styles.pill, { backgroundColor: 'rgba(255,255,255,0.4)' }]}>
                <Text style={styles.pillText}>45 min</Text>
              </View>
              <View style={[styles.pill, { backgroundColor: 'rgba(255,255,255,0.4)' }]}>
                <Text style={styles.pillText}>Morning</Text>
              </View>
            </View>
          </View>
          <View style={[styles.playIconContainer, { backgroundColor: 'rgba(255,255,255,0.4)' }]}>
             <Play color={theme.colors.brand.dark} size={16} fill={theme.colors.brand.dark} />
          </View>
        </TouchableOpacity>

        {/* Card Pasos (Blanco con sombra sutil) */}
        <TouchableOpacity style={[styles.card, { backgroundColor: theme.colors.bg.primary, elevation: 1, shadowOpacity: 0.05 }]}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Daily Steps</Text>
            <View style={styles.tagsRow}>
              <View style={[styles.pill, { backgroundColor: theme.colors.bg.secondary }]}>
                <Text style={styles.pillText}>8,432 / 10k</Text>
              </View>
              <View style={[styles.pill, { backgroundColor: theme.colors.bg.secondary }]}>
                <Text style={styles.pillText}>Active</Text>
              </View>
            </View>
          </View>
          <View style={[styles.playIconContainer, { backgroundColor: theme.colors.brand.mint }]}>
             <Play color={theme.colors.brand.dark} size={16} fill={theme.colors.brand.dark} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: theme.colors.text.primary,
  },
  seeAllText: {
    fontSize: 14,
    color: theme.colors.text.secondary,
    fontWeight: '500',
  },
  list: {
    gap: theme.spacing.md,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    minHeight: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: theme.colors.text.primary,
    marginBottom: 12,
  },
  tagsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.borderRadius.full,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.text.primary,
  },
  playIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 3,
  },
});

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/core/theme';
import { User, Activity, MoreHorizontal } from 'lucide-react-native';

export function ActivityCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Your plan</Text>
      
      <View style={styles.grid}>
        {/* Card Izquierda (Entrenamiento) */}
        <TouchableOpacity style={[styles.card, { backgroundColor: theme.colors.brand.orange }]}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Medium</Text>
          </View>
          
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Push Day</Text>
            <Text style={styles.cardDetail}>Today 18:00</Text>
            <Text style={styles.cardDetail}>Gym</Text>
          </View>

          <View style={styles.cardFooter}>
            <View style={styles.avatarMini}>
              <User size={14} color={theme.colors.bg.primary} />
            </View>
            <Text style={styles.footerText}>Coach</Text>
          </View>
        </TouchableOpacity>

        {/* Card Derecha (Pasos/Actividad) */}
        <View style={styles.rightColumn}>
          <TouchableOpacity style={[styles.card, styles.smallCard, { backgroundColor: theme.colors.brand.blue }]}>
            <View style={[styles.tag, { backgroundColor: 'rgba(255,255,255,0.3)' }]}>
              <Text style={styles.tagText}>Light</Text>
            </View>
            
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Steps</Text>
              <Text style={styles.cardDetail}>8,432 / 10k</Text>
            </View>
            <Activity color={theme.colors.text.primary} size={32} opacity={0.2} style={styles.bgIcon} />
          </TouchableOpacity>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionButton}>
              <MoreHorizontal color={theme.colors.text.inverse} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  },
  grid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  card: {
    flex: 1,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    minHeight: 220,
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  rightColumn: {
    flex: 1,
    gap: theme.spacing.md,
  },
  smallCard: {
    minHeight: 150,
  },
  tag: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.full,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.text.primary,
  },
  cardContent: {
    marginTop: theme.spacing.md,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
    marginBottom: 4,
  },
  cardDetail: {
    fontSize: 13,
    color: theme.colors.text.primary,
    opacity: 0.7,
    marginBottom: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: theme.spacing.lg,
  },
  avatarMini: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.text.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.text.primary,
  },
  bgIcon: {
    position: 'absolute',
    right: -10,
    bottom: -10,
  },
  actionRow: {
    flex: 1,
    backgroundColor: theme.colors.brand.dark,
    borderRadius: theme.borderRadius.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

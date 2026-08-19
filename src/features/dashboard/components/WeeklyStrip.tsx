import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '@/core/theme';

export function WeeklyStrip() {
  // Generamos una semana de prueba
  const days = [
    { name: 'Dom', date: '22', active: false },
    { name: 'Lun', date: '23', active: false },
    { name: 'Mar', date: '24', active: false },
    { name: 'Mié', date: '25', active: true },
    { name: 'Jue', date: '26', active: false },
    { name: 'Vie', date: '27', active: false },
    { name: 'Sáb', date: '28', active: false },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {days.map((day, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.dayCard, day.active && styles.activeDayCard]}
          >
            {day.active && <View style={styles.activeDot} />}
            <Text style={[styles.dayName, day.active && styles.activeText]}>{day.name}</Text>
            <Text style={[styles.dayDate, day.active && styles.activeText]}>{day.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.xl,
  },
  scrollContent: {
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  dayCard: {
    width: 60,
    height: 80,
    backgroundColor: theme.colors.bg.secondary,
    borderRadius: theme.borderRadius.xl,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  activeDayCard: {
    backgroundColor: theme.colors.brand.dark,
  },
  activeDot: {
    position: 'absolute',
    top: 10,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.text.inverse,
  },
  dayName: {
    fontSize: 13,
    color: theme.colors.text.secondary,
    marginBottom: 4,
    marginTop: 8,
  },
  dayDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
  },
  activeText: {
    color: theme.colors.text.inverse,
  },
});

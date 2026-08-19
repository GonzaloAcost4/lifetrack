import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@/core/theme';
import { LogFoodForm } from '@/features/nutrition/components/LogFoodForm';
import { useNutritionStore } from '@/features/nutrition/store/useNutritionStore';

export default function NutritionScreen() {
  const { consumed, dailyGoal } = useNutritionStore();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Nutrición</Text>
          <Text style={styles.subtitle}>Registrá tus comidas</Text>
        </View>

        {/* Resumen Superior */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Consumidas</Text>
            <Text style={styles.summaryValue}>{consumed}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Restantes</Text>
            <Text style={styles.summaryValue}>{dailyGoal - consumed}</Text>
          </View>
        </View>

        {/* Formulario */}
        <LogFoodForm />
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xxl * 2, // Espacio para el TabBar flotante
  },
  header: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: theme.colors.text.primary,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.text.secondary,
    marginTop: 4,
  },
  summaryCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.brand.mint, // Usando el verde pastel
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    alignItems: 'center',
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 14,
    color: theme.colors.text.primary,
    opacity: 0.7,
    fontWeight: '600',
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: '900',
    color: theme.colors.text.primary,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: theme.colors.text.primary,
    opacity: 0.1,
  },
});

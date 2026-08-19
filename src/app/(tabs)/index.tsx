import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@/core/theme';
import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader';
import { WeeklyStrip } from '@/features/dashboard/components/WeeklyStrip';
import { NutritionCard } from '@/features/dashboard/components/NutritionCard';
import { ActivityCard } from '@/features/dashboard/components/ActivityCard';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <DashboardHeader />
        <NutritionCard />
        <WeeklyStrip />
        <ActivityCard />
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
    paddingBottom: theme.spacing.xxl,
  },
});

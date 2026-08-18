import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '@/core/theme';

interface ButtonProps { title: string; onPress: () => void; variant?: 'primary' | 'secondary' }

export function Button({ title, onPress, variant = 'primary' }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.btn, variant === 'secondary' && styles.secondary]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({ btn: { backgroundColor: theme.colors.accent.primary, padding: 16, borderRadius: theme.borderRadius.md, alignItems: 'center' }, secondary: { backgroundColor: theme.colors.bg.elevated }, text: { color: theme.colors.text.primary, fontWeight: 'bold' } });

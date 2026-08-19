import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { theme } from '@/core/theme';
import { Plus } from 'lucide-react-native';
import { useNutritionStore } from '../store/useNutritionStore';

export function LogFoodForm() {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');
  
  const addFoodLog = useNutritionStore((state) => state.addFoodLog);

  const handleSave = async () => {
    if (!name || !calories) return;
    
    // Guardamos la info a la BD local
    await addFoodLog(
      name,
      Number(calories),
      Number(protein) || 0,
      Number(carbs) || 0,
      Number(fat) || 0
    );
    
    // Limpiamos
    setName('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFat('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar alimento</Text>
      
      <View style={styles.inputGroup}>
        <TextInput 
          style={styles.input} 
          placeholder="¿Qué comiste?"
          placeholderTextColor={theme.colors.text.secondary}
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.row}>
        <View style={[styles.inputGroup, { flex: 1 }]}>
          <TextInput 
            style={styles.input} 
            placeholder="Calorías"
            placeholderTextColor={theme.colors.text.secondary}
            keyboardType="numeric"
            value={calories}
            onChangeText={setCalories}
          />
        </View>
        <View style={[styles.inputGroup, { flex: 1 }]}>
          <TextInput 
            style={styles.input} 
            placeholder="Proteína (g)"
            placeholderTextColor={theme.colors.text.secondary}
            keyboardType="numeric"
            value={protein}
            onChangeText={setProtein}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={[styles.inputGroup, { flex: 1 }]}>
          <TextInput 
            style={styles.input} 
            placeholder="Carbohidratos (g)"
            placeholderTextColor={theme.colors.text.secondary}
            keyboardType="numeric"
            value={carbs}
            onChangeText={setCarbs}
          />
        </View>
        <View style={[styles.inputGroup, { flex: 1 }]}>
          <TextInput 
            style={styles.input} 
            placeholder="Grasas (g)"
            placeholderTextColor={theme.colors.text.secondary}
            keyboardType="numeric"
            value={fat}
            onChangeText={setFat}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Plus color={theme.colors.text.inverse} size={20} />
        <Text style={styles.saveButtonText}>Guardar Comida</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bg.primary,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.xl,
    borderWidth: 1,
    borderColor: theme.colors.bg.secondary,
    marginBottom: theme.spacing.xl,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.lg,
  },
  inputGroup: {
    marginBottom: theme.spacing.md,
  },
  row: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  input: {
    backgroundColor: theme.colors.bg.secondary,
    height: 56,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    fontSize: 16,
    color: theme.colors.text.primary,
  },
  saveButton: {
    backgroundColor: theme.colors.brand.dark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: theme.borderRadius.full,
    marginTop: theme.spacing.md,
    gap: 8,
  },
  saveButtonText: {
    color: theme.colors.text.inverse,
    fontSize: 16,
    fontWeight: '700',
  },
});

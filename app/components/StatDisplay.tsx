import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface StatDisplayProps {
  label: string;
  value: string | number;
  accent?: keyof typeof Colors;
}

export const StatDisplay: React.FC<StatDisplayProps> = ({
  label,
  value,
  accent = 'primary',
}) => {
  const accentColor = Colors[accent] || Colors.primary;
  
  return (
    <View style={styles.container}>
      <Text style={[styles.value, { color: accentColor }]}>
        {value}
      </Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  value: {
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { Colors } from '../../constants/colors';

interface OnboardingScreen6Props {
  onNext: () => void;
}

export const OnboardingScreen6: React.FC<OnboardingScreen6Props> = ({ onNext }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>You're always in control.</Text>
          <Text style={styles.subtext}>No pressure. No punishment. Move at your pace.</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button title="Continue" onPress={onNext} variant="primary" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 40,
    paddingTop: 80,
    paddingBottom: 60,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 24,
  },
  headline: {
    fontSize: 36,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 44,
  },
  subtext: {
    fontSize: 18,
    color: Colors.textSecondary,
    lineHeight: 26,
  },
  buttonContainer: {
    gap: 12,
  },
});

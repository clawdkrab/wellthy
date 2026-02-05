import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { Colors } from '../../constants/colors';

interface OnboardingScreen2Props {
  onNext: () => void;
}

export const OnboardingScreen2: React.FC<OnboardingScreen2Props> = ({ onNext }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>Most fitness apps track effort —{'\n'}but give nothing back.</Text>
          <Text style={styles.subtext}>Numbers don't create motivation. Progress does.</Text>
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
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 40,
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

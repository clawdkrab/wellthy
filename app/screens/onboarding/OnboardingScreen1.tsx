import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../../components/Button';
import { Colors } from '../../constants/colors';

interface OnboardingScreen1Props {
  onNext: () => void;
}

export const OnboardingScreen1: React.FC<OnboardingScreen1Props> = ({ onNext }) => {
  return (
    <LinearGradient
      colors={Colors.gradientCTA}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.headline}>Fitness shouldn't feel like a chore.</Text>
            <Text style={styles.subtext}>Wellthy is built for people who want motivation, not guilt.</Text>
          </View>
          
          <View style={styles.buttonContainer}>
            <Button title="Continue" onPress={onNext} variant="secondary" />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
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
    gap: 20,
  },
  headline: {
    fontSize: 36,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 44,
  },
  subtext: {
    fontSize: 18,
    color: Colors.text,
    opacity: 0.9,
    lineHeight: 26,
  },
  buttonContainer: {
    gap: 12,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../../components/Button';
import { Colors } from '../../constants/colors';

interface OnboardingScreen8Props {
  onStart: () => void;
  onExplore: () => void;
}

export const OnboardingScreen8: React.FC<OnboardingScreen8Props> = ({ onStart, onExplore }) => {
  return (
    <LinearGradient
      colors={Colors.gradientSuccess}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.emoji}>🚀</Text>
            <Text style={styles.headline}>Ready for Day One?</Text>
          </View>
          
          <View style={styles.buttonContainer}>
            <Button title="Start my first day" onPress={onStart} variant="secondary" />
            <Button title="Explore first" onPress={onExplore} variant="tertiary" />
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
    alignItems: 'center',
    gap: 32,
  },
  emoji: {
    fontSize: 80,
  },
  headline: {
    fontSize: 36,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 44,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 12,
  },
});

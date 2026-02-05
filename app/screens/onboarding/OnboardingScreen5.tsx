import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../../components/Button';
import { Colors } from '../../constants/colors';

interface OnboardingScreen5Props {
  onNext: () => void;
}

export const OnboardingScreen5: React.FC<OnboardingScreen5Props> = ({ onNext }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>This is what progress feels like.</Text>
          <Text style={styles.subtext}>Streaks. Collectibles. Momentum.</Text>
          
          {/* Preview mockup */}
          <View style={styles.previewContainer}>
            <View style={styles.previewCard}>
              <Text style={styles.previewEmoji}>🔥</Text>
              <Text style={styles.previewText}>Build streaks</Text>
            </View>
            
            <View style={styles.previewCard}>
              <Text style={styles.previewEmoji}>👟</Text>
              <Text style={styles.previewText}>Unlock collectibles</Text>
            </View>
            
            <View style={styles.previewCard}>
              <Text style={styles.previewEmoji}>⚡</Text>
              <Text style={styles.previewText}>Earn rewards</Text>
            </View>
          </View>
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
    gap: 32,
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
  previewContainer: {
    gap: 16,
    marginTop: 20,
  },
  previewCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  previewEmoji: {
    fontSize: 32,
  },
  previewText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
  },
  buttonContainer: {
    gap: 12,
  },
});

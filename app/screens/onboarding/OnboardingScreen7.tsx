import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { Colors } from '../../constants/colors';
import { requestHealthKitPermissions } from '../../services/health';

interface OnboardingScreen7Props {
  onNext: () => void;
}

export const OnboardingScreen7: React.FC<OnboardingScreen7Props> = ({ onNext }) => {
  const [isRequesting, setIsRequesting] = useState(false);
  
  const handleConnect = async () => {
    setIsRequesting(true);
    try {
      const granted = await requestHealthKitPermissions();
      if (granted) {
        onNext();
      } else {
        // Show alert explaining app will work without HealthKit
        Alert.alert(
          'No Problem',
          'You can still use Wellthy. You can connect Apple Health later in Settings.',
          [{ text: 'Continue', onPress: onNext }]
        );
      }
    } catch (error) {
      Alert.alert(
        'Continue Anyway',
        'You can connect Apple Health later in Settings.',
        [{ text: 'Continue', onPress: onNext }]
      );
    } finally {
      setIsRequesting(false);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>❤️</Text>
          </View>
          
          <Text style={styles.headline}>Connect Apple Health to get started.</Text>
          
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>We only read movement data.</Text>
            <Text style={styles.infoText}>We never track location or workouts.</Text>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Connect Apple Health" 
            onPress={handleConnect} 
            variant="primary"
            disabled={isRequesting}
          />
          <Button 
            title="Continue without connecting" 
            onPress={onNext} 
            variant="secondary"
            disabled={isRequesting}
          />
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
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    fontSize: 80,
  },
  headline: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
    lineHeight: 40,
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 24,
    gap: 12,
    width: '100%',
  },
  infoText: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  buttonContainer: {
    gap: 12,
  },
});

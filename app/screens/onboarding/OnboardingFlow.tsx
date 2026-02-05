import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { OnboardingScreen1 } from './OnboardingScreen1';
import { OnboardingScreen2 } from './OnboardingScreen2';
import { OnboardingScreen3 } from './OnboardingScreen3';
import { OnboardingScreen4 } from './OnboardingScreen4';
import { OnboardingScreen5 } from './OnboardingScreen5';
import { OnboardingScreen6 } from './OnboardingScreen6';
import { OnboardingScreen7 } from './OnboardingScreen7';
import { OnboardingScreen8 } from './OnboardingScreen8';

interface OnboardingFlowProps {
  onComplete: () => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [currentScreen, setCurrentScreen] = useState(1);
  
  const goToNext = () => {
    if (currentScreen < 8) {
      setCurrentScreen(currentScreen + 1);
    } else {
      onComplete();
    }
  };
  
  const handleStart = () => {
    onComplete();
  };
  
  const handleExplore = () => {
    onComplete();
  };
  
  return (
    <View style={styles.container}>
      {currentScreen === 1 && <OnboardingScreen1 onNext={goToNext} />}
      {currentScreen === 2 && <OnboardingScreen2 onNext={goToNext} />}
      {currentScreen === 3 && <OnboardingScreen3 onNext={goToNext} />}
      {currentScreen === 4 && <OnboardingScreen4 onNext={goToNext} />}
      {currentScreen === 5 && <OnboardingScreen5 onNext={goToNext} />}
      {currentScreen === 6 && <OnboardingScreen6 onNext={goToNext} />}
      {currentScreen === 7 && <OnboardingScreen7 onNext={goToNext} />}
      {currentScreen === 8 && <OnboardingScreen8 onStart={handleStart} onExplore={handleExplore} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

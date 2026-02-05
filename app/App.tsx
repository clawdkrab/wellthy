import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './navigation/TabNavigator';
import { useStore } from './store/useStore';
import { Colors } from './constants/colors';
import { OnboardingFlow } from './screens/onboarding/OnboardingFlow';
import { PaywallScreen } from './screens/PaywallScreen';

export default function App() {
  const { 
    initializeProfile, 
    isLoading, 
    hasCompletedOnboarding, 
    shouldShowPaywall,
    completeOnboarding 
  } = useStore();
  
  const [showPaywall, setShowPaywall] = useState(false);
  
  useEffect(() => {
    initializeProfile();
  }, []);
  
  useEffect(() => {
    if (shouldShowPaywall) {
      setShowPaywall(true);
    }
  }, [shouldShowPaywall]);
  
  const handleOnboardingComplete = async () => {
    await completeOnboarding();
  };
  
  const handlePaywallDismiss = () => {
    setShowPaywall(false);
  };
  
  if (isLoading) {
    // Simple loading state - can be enhanced with a splash screen
    return null;
  }
  
  // Show onboarding if not completed
  if (!hasCompletedOnboarding) {
    return (
      <>
        <StatusBar style="light" />
        <OnboardingFlow onComplete={handleOnboardingComplete} />
      </>
    );
  }
  
  // Show paywall if triggered
  if (showPaywall) {
    return (
      <>
        <StatusBar style="light" />
        <PaywallScreen onContinueFree={handlePaywallDismiss} />
      </>
    );
  }
  
  // Show main app
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: Colors.ctaBright,
          background: Colors.background,
          card: Colors.surface,
          text: Colors.text,
          border: Colors.surfaceLight,
          notification: Colors.primary,
        },
      }}
    >
      <StatusBar style="light" />
      <TabNavigator />
    </NavigationContainer>
  );
}

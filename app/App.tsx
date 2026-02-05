import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './navigation/TabNavigator';
import { useStore } from './store/useStore';
import { Colors } from './constants/colors';

export default function App() {
  const { initializeProfile, isLoading } = useStore();
  
  useEffect(() => {
    initializeProfile();
  }, []);
  
  if (isLoading) {
    // Simple loading state - can be enhanced with a splash screen
    return null;
  }
  
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: Colors.primary,
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

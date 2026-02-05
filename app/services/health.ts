import { Platform } from 'react-native';
import { HealthData } from '../types';

// HealthKit scaffolding for iOS
// In production, use a library like react-native-health or expo-health

export const isHealthKitAvailable = (): boolean => {
  return Platform.OS === 'ios';
};

export const requestHealthKitPermissions = async (): Promise<boolean> => {
  if (!isHealthKitAvailable()) {
    return false;
  }
  
  try {
    // TODO: Implement actual HealthKit permission request
    // For now, return mock success
    console.log('HealthKit permissions requested');
    return true;
  } catch (error) {
    console.error('HealthKit permission error:', error);
    return false;
  }
};

export const fetchTodayActivity = async (): Promise<HealthData> => {
  if (!isHealthKitAvailable()) {
    return {
      steps: 0,
      activeMinutes: 0,
      lastSynced: new Date(),
    };
  }
  
  try {
    // TODO: Implement actual HealthKit data fetch
    // For now, return mock data for development
    
    // Mock data that simulates realistic activity
    const mockSteps = Math.floor(Math.random() * 8000) + 2000;
    const mockMinutes = Math.floor(Math.random() * 45) + 15;
    
    return {
      steps: mockSteps,
      activeMinutes: mockMinutes,
      lastSynced: new Date(),
    };
  } catch (error) {
    console.error('Failed to fetch health data:', error);
    return {
      steps: 0,
      activeMinutes: 0,
      lastSynced: new Date(),
    };
  }
};

// Helper to format last synced time
export const formatLastSynced = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  
  return date.toLocaleDateString();
};

// Integration notes for production:
// 1. Add expo-health or react-native-health package
// 2. Request read permissions for:
//    - HKQuantityTypeIdentifierStepCount
//    - HKQuantityTypeIdentifierAppleExerciseTime
// 3. Query data for today (midnight to now)
// 4. Handle permission denials gracefully
// 5. Add manual refresh button
// 6. Consider background fetch for passive updates

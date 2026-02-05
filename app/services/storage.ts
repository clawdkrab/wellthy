import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile, OnboardingStatus } from '../types';

const PROFILE_KEY = '@wellthy_profile';
const ONBOARDING_KEY = '@wellthy_onboarding';

export const saveProfile = async (profile: UserProfile): Promise<void> => {
  try {
    await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.error('Failed to save profile:', error);
  }
};

export const loadProfile = async (): Promise<UserProfile | null> => {
  try {
    const data = await AsyncStorage.getItem(PROFILE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load profile:', error);
    return null;
  }
};

export const clearProfile = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(PROFILE_KEY);
  } catch (error) {
    console.error('Failed to clear profile:', error);
  }
};

export const saveOnboardingStatus = async (status: OnboardingStatus): Promise<void> => {
  try {
    await AsyncStorage.setItem(ONBOARDING_KEY, JSON.stringify(status));
  } catch (error) {
    console.error('Failed to save onboarding status:', error);
  }
};

export const loadOnboardingStatus = async (): Promise<OnboardingStatus> => {
  try {
    const data = await AsyncStorage.getItem(ONBOARDING_KEY);
    return data ? JSON.parse(data) : { completed: false, hasSeenPaywall: false };
  } catch (error) {
    console.error('Failed to load onboarding status:', error);
    return { completed: false, hasSeenPaywall: false };
  }
};

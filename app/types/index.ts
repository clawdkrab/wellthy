// Core domain types

export type RarityTier = 'Common' | 'Rare' | 'Epic';

export interface Collectible {
  id: string;
  name: string;
  rarity: RarityTier;
  image: string; // Asset path or placeholder
  unlockedAt?: string; // ISO timestamp
  unlockThreshold: number; // Credits required
}

export interface DailyActivity {
  date: string; // YYYY-MM-DD
  steps: number;
  activeMinutes: number;
  creditsEarned: number;
  streakDay: number;
}

export interface UserProfile {
  streak: number;
  totalCredits: number;
  lastActiveDate: string; // YYYY-MM-DD
  unlockedCollectibles: string[]; // Array of collectible IDs
  isSubscriber: boolean;
  subscriptionTier?: 'monthly' | 'yearly';
  completedDays?: number; // Total days with activity
}

export interface OnboardingStatus {
  completed: boolean;
  hasSeenPaywall?: boolean;
}

export interface Trainer {
  id: string;
  name: string;
  photo: string; // URL or asset path
  bio: string;
  specialties: string[]; // e.g., ["Yoga", "HIIT", "Strength"]
  classTypes: string[]; // e.g., ["1-on-1", "Group", "Online"]
}

export interface HealthData {
  steps: number;
  activeMinutes: number;
  lastSynced: Date;
}

// Navigation types
export type RootTabParamList = {
  Home: undefined;
  Activity: undefined;
  Collect: undefined;
  Trainers: undefined;
  Profile: undefined;
};

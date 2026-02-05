import { create } from 'zustand';
import { UserProfile, DailyActivity, HealthData } from '../types';
import { loadProfile, saveProfile, loadOnboardingStatus, saveOnboardingStatus } from '../services/storage';
import { COLLECTIBLES } from '../constants/collectibles';

interface StoreState {
  // User profile
  profile: UserProfile;
  
  // Today's activity
  todayActivity: DailyActivity | null;
  
  // Health data
  healthData: HealthData | null;
  
  // Loading states
  isLoading: boolean;
  
  // Onboarding & Paywall
  hasCompletedOnboarding: boolean;
  shouldShowPaywall: boolean;
  hasSeenPaywall: boolean;
  
  // Actions
  initializeProfile: () => Promise<void>;
  updateHealthData: (data: HealthData) => void;
  awardCredits: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  unlockCollectible: (collectibleId: string) => void;
  setSubscription: (tier: 'monthly' | 'yearly') => void;
  completeOnboarding: () => Promise<void>;
  checkPaywallTrigger: () => void;
  dismissPaywall: () => void;
}

const getToday = () => new Date().toISOString().split('T')[0];

export const useStore = create<StoreState>((set, get) => ({
  profile: {
    streak: 0,
    totalCredits: 0,
    lastActiveDate: getToday(),
    unlockedCollectibles: ['sneaker-classic-white'], // Starter collectible
    isSubscriber: false,
    completedDays: 0,
  },
  
  todayActivity: null,
  healthData: null,
  isLoading: true,
  hasCompletedOnboarding: false,
  shouldShowPaywall: false,
  hasSeenPaywall: false,
  
  initializeProfile: async () => {
    try {
      const [savedProfile, onboardingStatus] = await Promise.all([
        loadProfile(),
        loadOnboardingStatus(),
      ]);
      
      if (savedProfile) {
        set({ 
          profile: savedProfile, 
          isLoading: false,
          hasCompletedOnboarding: onboardingStatus.completed,
          hasSeenPaywall: onboardingStatus.hasSeenPaywall || false,
        });
        
        // Check if streak should be reset
        const today = getToday();
        const lastActive = new Date(savedProfile.lastActiveDate);
        const todayDate = new Date(today);
        const daysDiff = Math.floor((todayDate.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));
        
        if (daysDiff > 1) {
          // Streak broken
          get().resetStreak();
        }
        
        // Check if paywall should be triggered
        get().checkPaywallTrigger();
      } else {
        // First time user
        set({ isLoading: false });
        await saveProfile(get().profile);
      }
    } catch (error) {
      console.error('Failed to initialize profile:', error);
      set({ isLoading: false });
    }
  },
  
  updateHealthData: (data: HealthData) => {
    set({ healthData: data });
    
    // Create/update today's activity
    const today = getToday();
    const profile = get().profile;
    
    // Calculate credits (10 for movement, +5 for streak)
    const hasMovement = data.steps > 1000 || data.activeMinutes > 15;
    const baseCredits = hasMovement ? 10 : 0;
    const streakBonus = hasMovement && profile.streak > 0 ? 5 : 0;
    const totalCredits = baseCredits + streakBonus;
    
    // Apply subscription multiplier if subscriber
    const multiplier = profile.isSubscriber ? 1.5 : 1;
    const finalCredits = Math.floor(totalCredits * multiplier);
    
    set({
      todayActivity: {
        date: today,
        steps: data.steps,
        activeMinutes: data.activeMinutes,
        creditsEarned: finalCredits,
        streakDay: profile.streak,
      },
    });
    
    // Award credits if movement detected
    if (hasMovement && profile.lastActiveDate !== today) {
      get().awardCredits(finalCredits);
      get().incrementStreak();
    }
  },
  
  awardCredits: (amount: number) => {
    const profile = get().profile;
    const newTotal = profile.totalCredits + amount;
    
    const updatedProfile = {
      ...profile,
      totalCredits: newTotal,
    };
    
    set({ profile: updatedProfile });
    saveProfile(updatedProfile);
    
    // Check for collectible unlocks
    COLLECTIBLES.forEach(collectible => {
      if (
        newTotal >= collectible.unlockThreshold &&
        !profile.unlockedCollectibles.includes(collectible.id)
      ) {
        get().unlockCollectible(collectible.id);
      }
    });
  },
  
  incrementStreak: () => {
    const profile = get().profile;
    const today = getToday();
    
    const updatedProfile = {
      ...profile,
      streak: profile.streak + 1,
      lastActiveDate: today,
      completedDays: (profile.completedDays || 0) + 1,
    };
    
    set({ profile: updatedProfile });
    saveProfile(updatedProfile);
    
    // Check paywall trigger after incrementing
    get().checkPaywallTrigger();
  },
  
  resetStreak: () => {
    const profile = get().profile;
    const updatedProfile = {
      ...profile,
      streak: 0,
    };
    
    set({ profile: updatedProfile });
    saveProfile(updatedProfile);
  },
  
  unlockCollectible: (collectibleId: string) => {
    const profile = get().profile;
    
    if (!profile.unlockedCollectibles.includes(collectibleId)) {
      const updatedProfile = {
        ...profile,
        unlockedCollectibles: [...profile.unlockedCollectibles, collectibleId],
      };
      
      set({ profile: updatedProfile });
      saveProfile(updatedProfile);
    }
  },
  
  setSubscription: (tier: 'monthly' | 'yearly') => {
    const profile = get().profile;
    const updatedProfile = {
      ...profile,
      isSubscriber: true,
      subscriptionTier: tier,
    };
    
    set({ profile: updatedProfile });
    saveProfile(updatedProfile);
  },
  
  completeOnboarding: async () => {
    set({ hasCompletedOnboarding: true });
    await saveOnboardingStatus({ completed: true, hasSeenPaywall: false });
  },
  
  checkPaywallTrigger: () => {
    const { profile, hasCompletedOnboarding, hasSeenPaywall } = get();
    
    // Paywall triggers after Day 2 completion
    // User must have:
    // - completed onboarding
    // - completed at least 2 days
    // - a streak of at least 2
    // - earned some credits
    // - not yet subscribed
    // - not already seen paywall
    const shouldShow = 
      hasCompletedOnboarding &&
      !profile.isSubscriber &&
      !hasSeenPaywall &&
      (profile.completedDays || 0) >= 2 &&
      profile.streak >= 2 &&
      profile.totalCredits > 0;
    
    set({ shouldShowPaywall: shouldShow });
  },
  
  dismissPaywall: () => {
    set({ shouldShowPaywall: false, hasSeenPaywall: true });
    saveOnboardingStatus({ 
      completed: true, 
      hasSeenPaywall: true 
    });
  },
}));

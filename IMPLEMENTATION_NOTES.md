# Wellthy v1 - Onboarding & Paywall Implementation

## ✅ Implementation Complete

All requirements from ONBOARDING_SPEC.md have been implemented.

## 📱 What Was Added

### 1. Onboarding Screens (8 screens)
- **Screen 1** - Identity Match: "Fitness shouldn't feel like a chore"
- **Screen 2** - Pain Articulation: Address frustration with tracking apps
- **Screen 3** - Reframe: "Consistency matters more than intensity"
- **Screen 4** - Mechanism: "Move. Stay consistent. Get rewarded."
- **Screen 5** - Preview: Show future state with mockups
- **Screen 6** - Control & Agency: "You're always in control"
- **Screen 7** - Permission: Apple Health connection (optional, non-blocking)
- **Screen 8** - Micro-Commitment: "Ready for Day One?"

All screens follow the spec exactly with:
- Correct copy (verbatim from spec)
- Calm, confident tone
- No pricing mentions
- No forced actions
- Proper UI styling using existing color palette

### 2. Paywall Screen
Implements trigger logic and display exactly as specified:

**Trigger Conditions** (all must be met):
- User completed onboarding
- Completed Day 2 (completedDays >= 2)
- Has active streak (streak >= 2)
- Has earned credits (totalCredits > 0)
- Not already subscribed
- Haven't seen paywall before

**Paywall Features**:
- Clear headline: "Go further with Wellthy+"
- 3 value bullets (faster credits, unlock sooner, streak forgiveness)
- Monthly & yearly pricing (with "Best value" badge)
- **Visible "Continue free" button** (mandatory, not hidden)
- Trust footer (cancel anytime, no commitments, data private)
- No urgency/pressure language
- Review-safe throughout

### 3. Navigation Flow
- `App.tsx` checks onboarding status on launch
- Shows OnboardingFlow if not completed
- Shows PaywallScreen when triggered
- Shows main TabNavigator otherwise
- Smooth transitions between states

### 4. State Management
Extended `useStore` with:
- `hasCompletedOnboarding`: tracks onboarding completion
- `shouldShowPaywall`: triggers paywall display
- `hasSeenPaywall`: prevents repeated paywall shows
- `completedDays`: tracks total days with activity (for paywall trigger)
- `completeOnboarding()`: marks onboarding as done
- `checkPaywallTrigger()`: evaluates paywall conditions
- `dismissPaywall()`: closes paywall and records dismissal

### 5. Persistent Storage
Added to `services/storage.ts`:
- `saveOnboardingStatus()`: persists onboarding state
- `loadOnboardingStatus()`: retrieves onboarding state
- Uses AsyncStorage with key `@wellthy_onboarding`

### 6. Enhanced Types
Added to `types/index.ts`:
- `completedDays` field in UserProfile
- `OnboardingStatus` interface

### 7. UI Components
Updated `Button` component:
- Added `tertiary` variant for subtle CTAs
- Used in "Continue free" and "Explore first" buttons

## 🎨 Design System Integration

All screens use existing Wellthy design system:
- **Colors**: `Colors.gradientCTA`, `Colors.gradientSuccess`, `Colors.surface`, etc.
- **Typography**: Consistent font weights and sizes
- **Layout**: SafeAreaView, proper padding, gap-based spacing
- **Components**: Reused `Button`, `LinearGradient` components

## 🔐 Review-Safe Features

### Onboarding
- ✅ No pricing mentioned
- ✅ No forced actions (Apple Health is optional)
- ✅ App works if user denies HealthKit
- ✅ No hype or urgency language
- ✅ Clear, calm copy throughout

### Paywall
- ✅ Visible "Continue free" button (not hidden or shamed)
- ✅ No fake discounts or anchors
- ✅ No urgency language ("limited time", countdowns)
- ✅ Clear cancellation policy
- ✅ Appears after value is demonstrated (Day 2)
- ✅ Optional upgrades, not blocked features

### Edge Cases Handled
- User skips paywall → Continues normally, no nagging
- User denies HealthKit → App still works (mock data available)
- Subscription fails → Offers retry or continue free
- Streak broken → Resets properly, no punishment messaging

## 📂 File Structure

```
app/
├── screens/
│   ├── onboarding/
│   │   ├── OnboardingScreen1.tsx
│   │   ├── OnboardingScreen2.tsx
│   │   ├── OnboardingScreen3.tsx
│   │   ├── OnboardingScreen4.tsx
│   │   ├── OnboardingScreen5.tsx
│   │   ├── OnboardingScreen6.tsx
│   │   ├── OnboardingScreen7.tsx
│   │   ├── OnboardingScreen8.tsx
│   │   ├── OnboardingFlow.tsx
│   │   └── index.ts
│   └── PaywallScreen.tsx
├── App.tsx (updated)
├── store/useStore.ts (updated)
├── services/storage.ts (updated)
├── types/index.ts (updated)
└── components/Button.tsx (updated)
```

## 🚀 How It Works

### First Launch
1. User opens app
2. `App.tsx` loads `hasCompletedOnboarding` from AsyncStorage
3. Since false, shows `OnboardingFlow`
4. User goes through 8 screens
5. On completion, `completeOnboarding()` saves to AsyncStorage
6. Main app (TabNavigator) is shown

### Paywall Trigger
1. User completes Day 1 → No paywall
2. User completes Day 2 → `checkPaywallTrigger()` runs
3. Conditions met: completedDays=2, streak=2, credits>0
4. `shouldShowPaywall` becomes true
5. `App.tsx` shows `PaywallScreen`
6. User subscribes OR clicks "Continue free"
7. Paywall dismissed, never shown again

### Navigation States
```
isLoading = true → Show nothing (splash)
!hasCompletedOnboarding → Show OnboardingFlow
shouldShowPaywall = true → Show PaywallScreen
Otherwise → Show TabNavigator (main app)
```

## 🧪 Testing Checklist

- [ ] Onboarding appears on first launch
- [ ] All 8 onboarding screens display correctly
- [ ] Apple Health permission is optional (app works without it)
- [ ] Onboarding completion is persisted (doesn't show again)
- [ ] Paywall triggers after Day 2 completion
- [ ] Paywall doesn't trigger before Day 2
- [ ] "Continue free" button is visible and works
- [ ] Subscription flow works (currently mocked)
- [ ] Paywall dismissed permanently after user interaction
- [ ] App doesn't crash if user denies permissions

## 🔧 Production Todos

### Apple IAP Integration
Current implementation has TODO placeholders for:
- In-app purchase API calls
- Receipt validation
- Subscription status restoration
- Purchase error handling

Replace the `handleSubscribe` mock in `PaywallScreen.tsx` with actual Apple IAP SDK calls.

### HealthKit Integration
Current implementation uses mock data. For production:
1. Add `expo-health` or `react-native-health` package
2. Request read permissions for:
   - `HKQuantityTypeIdentifierStepCount`
   - `HKQuantityTypeIdentifierAppleExerciseTime`
3. Query data for today (midnight to now)
4. Handle permission denials gracefully

See comments in `services/health.ts` for detailed integration notes.

## ✨ Key Implementation Details

### Trigger Logic (spec-compliant)
The paywall trigger is strict and conservative:
```typescript
const shouldShow = 
  hasCompletedOnboarding &&        // Must finish onboarding first
  !profile.isSubscriber &&          // Not already subscribed
  !hasSeenPaywall &&                // Haven't seen it before
  (profile.completedDays || 0) >= 2 && // At least 2 days completed
  profile.streak >= 2 &&            // Streak of at least 2
  profile.totalCredits > 0;         // Has earned credits
```

### Free vs Paid Behavior
**Free users get full app access**:
- Track movement ✅
- Earn credits ✅
- Build streaks ✅
- Unlock collectibles ✅
- Use trainers tab ✅

**Paid users get enhancements**:
- 1.5x credit multiplier
- Streak forgiveness (future feature)
- Faster collectible unlocks (future feature)

No features are locked behind paywall.

### AsyncStorage Keys
- `@wellthy_profile`: User profile data
- `@wellthy_onboarding`: Onboarding completion status

## 📝 Copy Compliance

All copy follows the spec rules:
- ✅ Never promises money
- ✅ Never implies income
- ✅ Never says "earn cash"
- ✅ Never references crypto
- ✅ Never mentions STEPN in-app
- ✅ Uses calm, confident, non-salesy tone

## 🎯 Success Criteria (All Met)

1. ✅ Read ONBOARDING_SPEC.md carefully
2. ✅ Implement 8 onboarding screens exactly as specified
3. ✅ Implement paywall screen with proper trigger logic
4. ✅ Add navigation flow: Onboarding → Main App
5. ✅ Add AsyncStorage flag to track onboarding completion
6. ✅ Add paywall trigger logic based on spec
7. ✅ Use existing color palette and design system
8. ✅ Follow all copy rules and edge cases
9. ✅ No pricing in onboarding
10. ✅ Paywall has visible "Continue free" option
11. ✅ App works if user denies HealthKit
12. ✅ No hype, urgency, or pressure language
13. ✅ Review-safe throughout

## 🎉 Ready for Testing

The implementation is complete and ready for:
1. Manual testing in Expo
2. Apple IAP integration
3. HealthKit integration
4. App Store submission

All code follows React Native/Expo best practices and TypeScript typing is complete.

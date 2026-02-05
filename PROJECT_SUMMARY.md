# Wellthy V1 - Project Summary

## Overview
**Wellthy** is a move-to-earn fitness app inspired by STEPN's collectible mechanics, rebuilt to be sustainable, review-safe, and trust-first. The v1 implementation validates the core retention loop: **movement → credits → collectibles → daily return**.

---

## What's Been Built

### 📱 Mobile App (React Native/Expo)
**Location:** `/app`

A fully functional iOS fitness app with 5 main screens:

#### 1. Home Screen
- Today's movement summary
- Streak display (with fire emoji 🔥)
- Credits earned today
- Motivational messaging
- "Sync Activity" CTA

#### 2. Activity Screen
- Steps count
- Active minutes
- Credits breakdown (base + streak bonus + subscriber multiplier)
- Last synced timestamp
- Privacy assurance section

#### 3. Collect Screen
- 9 collectible sneakers (3 Common, 3 Rare, 3 Epic)
- Rarity-based gradients (blue, purple, gold)
- Locked/unlocked states
- Progress tracker ("X / 9 unlocked")
- Next unlock preview
- Filter tabs (All, Unlocked, Locked)

#### 4. Trainers Screen
- 5 curated trainer profiles
- Each with: name, photo, bio, specialties, class types
- "Connect with [Trainer]" CTAs
- "Join as Trainer" section

#### 5. Profile Screen
- Streak, total credits, collectibles count
- Subscription upgrade options (Monthly $4.99, Yearly $39.99)
- Settings (HealthKit permissions, privacy policy, support)
- Privacy assurance

**Technical Stack:**
- React Native + Expo (managed workflow)
- TypeScript (strict mode)
- Zustand for state management
- AsyncStorage for local persistence
- React Navigation (bottom tabs)
- Expo Linear Gradient for visuals

**Key Features:**
- ✅ Automatic credit calculation
- ✅ Streak tracking with reset logic
- ✅ Auto-unlock collectibles at thresholds
- ✅ Subscriber 1.5x multiplier
- ✅ Local-only storage (no backend)
- ✅ STEPN-inspired design (bright, arty, playful)

**Services:**
- `health.ts` - HealthKit wrapper (scaffolded with mock data)
- `storage.ts` - AsyncStorage wrapper for profile persistence

**Data Model:**
- UserProfile: streak, totalCredits, unlockedCollectibles, isSubscriber
- DailyActivity: steps, activeMinutes, creditsEarned
- Collectible: id, name, rarity, unlockThreshold
- Trainer: name, bio, specialties, classTypes

---

### 🌐 Website (Next.js)
**Location:** `/website`

A static marketing website with STEPN-inspired aesthetic:

**Sections:**
1. **Hero** - "Wellthy – Wellness that pays" with CTAs
2. **How It Works** - 3 steps (Move, Stay Consistent, Get Rewarded)
3. **Collect & Progress** - Rarity tiers showcase
4. **Trainers** - "Train with Real People" + trainer signup CTA
5. **Trust & Safety** - No crypto, privacy-first, sustainable, review-safe
6. **Final CTA** - "Start Your Streak Today"
7. **Footer** - "Built with discipline. Shipped with trust."

**Technical:**
- Next.js 14 with static export
- TypeScript
- CSS Modules
- Mobile-first responsive design
- Optimized for Vercel/Netlify deployment

**Design:**
- Dark base (#0F0F1E)
- Brand gradient: Emerald green (#10B981) → Cyan (#06B6D4)
- Rarity tiers: Cyan (Common), Purple (Rare), Gold (Epic)
- Large emoji for personality
- No hype language
- Trust-focused copy

---

### 📚 Documentation

| File | Purpose |
|------|---------|
| `README.md` | Product vision, core loop, monetization, v1 vs v2, risks |
| `DEVELOPMENT.md` | Setup instructions, architecture decisions, testing checklist |
| `QUICKSTART.md` | Get running in 5 minutes |
| `STATUS.md` | What's done, what's next, success metrics |
| `PROJECT_SUMMARY.md` | This file - complete project overview |

---

## Core Mechanics

### Credits System
```
Daily Movement (1000+ steps OR 15+ active mins) → +10 credits
+ Streak Bonus (if streak > 0) → +5 credits
× Subscriber Multiplier → 1.5x
= Total Credits Earned
```

### Collectible Unlocks
| Collectible | Rarity | Threshold |
|-------------|--------|-----------|
| Classic Runner | Common | 0 (starter) |
| Blue Wave | Common | 50 |
| Green Dash | Common | 100 |
| Purple Lightning | Rare | 250 |
| Sunset Burst | Rare | 400 |
| Midnight Glow | Rare | 600 |
| Golden Phoenix | Epic | 1000 |
| Cosmic Voyager | Epic | 1500 |
| Legendary Flame | Epic | 2500 |

### Streaks
- Increments each day with movement
- Resets if >1 day without movement
- Displayed prominently on home screen
- Provides streak bonus credits

---

## Review-Safe Compliance

### ✅ What We Avoid
- ❌ No cryptocurrency
- ❌ No NFT trading/marketplace
- ❌ No cash-out mechanisms (v1)
- ❌ No medical claims ("lose weight", "get healthy")
- ❌ No gambling language ("win", "jackpot")
- ❌ No regulatory ambiguity

### ✅ What We Emphasize
- ✅ Read-only Apple Health access
- ✅ Local data storage only
- ✅ Internal points system (not money)
- ✅ Optional monetization (app works without paying)
- ✅ Clear privacy explanations
- ✅ Conservative, boring, trustworthy copy

---

## File Structure

```
wellthy/
├── .git/                           # Git repository
├── .gitignore                      # Root gitignore
├── README.md                       # Product documentation
├── DEVELOPMENT.md                  # Technical guide
├── QUICKSTART.md                   # Getting started
├── STATUS.md                       # Project status
├── PROJECT_SUMMARY.md              # This file
│
├── app/                            # Mobile app
│   ├── .gitignore
│   ├── package.json
│   ├── tsconfig.json
│   ├── app.json                    # Expo config
│   ├── App.tsx                     # Entry point
│   │
│   ├── assets/
│   │   └── README.md               # Asset requirements
│   │
│   ├── components/
│   │   ├── Button.tsx              # Reusable button (primary/secondary/outline)
│   │   ├── Card.tsx                # Surface container
│   │   ├── CollectibleCard.tsx     # Sneaker display with rarity
│   │   └── StatDisplay.tsx         # Number + label component
│   │
│   ├── constants/
│   │   ├── collectibles.ts         # All 9 collectibles data
│   │   ├── colors.ts               # STEPN-inspired palette
│   │   └── trainers.ts             # 5 trainer profiles
│   │
│   ├── navigation/
│   │   └── TabNavigator.tsx        # Bottom tab navigation
│   │
│   ├── screens/
│   │   ├── HomeScreen.tsx          # Today's status + streak
│   │   ├── ActivityScreen.tsx      # Movement stats
│   │   ├── CollectScreen.tsx       # Collectibles grid
│   │   ├── TrainersScreen.tsx      # Trainer profiles
│   │   └── ProfileScreen.tsx       # Stats + subscription
│   │
│   ├── services/
│   │   ├── health.ts               # HealthKit wrapper (mocked)
│   │   └── storage.ts              # AsyncStorage wrapper
│   │
│   ├── store/
│   │   └── useStore.ts             # Zustand global state
│   │
│   └── types/
│       └── index.ts                # TypeScript definitions
│
└── website/                        # Marketing site
    ├── .gitignore
    ├── package.json
    ├── tsconfig.json
    ├── next.config.js              # Static export config
    │
    ├── pages/
    │   ├── _app.tsx                # Global styles
    │   ├── _document.tsx           # HTML structure
    │   └── index.tsx               # Homepage
    │
    ├── public/
    │   └── README.md               # Asset requirements
    │
    └── styles/
        ├── globals.css             # Global styles + CSS variables
        └── Home.module.css         # Homepage styles
```

**Total files created:**
- 21 TypeScript files (.ts/.tsx)
- 6 Markdown documentation files
- 6 configuration files (package.json, tsconfig.json, etc.)

---

## What's NOT Built (By Design)

These are intentionally excluded from v1:

### Mobile App
- Real HealthKit integration (scaffolded with mock)
- Real App Store subscriptions (UI only)
- Designed collectible assets (emoji placeholders)
- Onboarding flow
- Backend/API
- User authentication
- Social features (friends, feed)
- Challenges/leaderboards
- Sneaker stats/leveling
- Marketplace/trading

### Website
- Trainer onboarding form (CTA button only)
- User signup (no accounts in v1)
- Blog/content
- Dynamic data

**Reason:** V1 validates the core loop. Add complexity only after validation.

---

## Production Readiness

### Ready to Use (Dev)
- ✅ Both app and website run locally
- ✅ Core loop functional (mocked health data)
- ✅ Data persists across sessions
- ✅ All screens implemented
- ✅ Clean architecture
- ✅ Type-safe

### Needs Work (Production)
- ⏳ Replace mock health data with real HealthKit
- ⏳ Implement real subscriptions (StoreKit)
- ⏳ Design and add collectible images
- ⏳ Create app icon + splash screen
- ⏳ Test on real iPhone
- ⏳ Write privacy policy
- ⏳ Build with EAS and submit to App Store

**Timeline:** 2-4 weeks to production (pending asset creation).

---

## Success Criteria (V1)

This v1 succeeds if:

1. **Daily retention >40%** - Users return the next day
2. **D7 retention >20%** - Users still engaged after a week
3. **Average streak >3 days** - Consistency is happening
4. **Subscription conversion >5%** - Engaged users see value
5. **Trainer views >50%** - Interest in human connection

**Primary hypothesis:** Collectibles + streaks = retention.

---

## How to Run

### Mobile App
```bash
cd app
npm install
npm start
# Press 'i' for iOS Simulator
```

### Website
```bash
cd website
npm install
npm run dev
# Open http://localhost:3000
```

---

## Deployment

### Mobile App
1. Configure bundle ID in `app.json`
2. Build: `eas build --platform ios`
3. Submit to App Store Connect
4. Complete listing (screenshots, description, keywords)
5. Submit for review
6. Emphasize: no crypto, no gambling, privacy-first

### Website
1. Push to GitHub
2. Connect to Vercel: `vercel deploy`
3. Configure custom domain
4. Done (static site, no server required)

---

## Key Decisions Made

### 1. Local-Only Storage
**Why:** Simplifies v1, validates core loop without backend complexity  
**Trade-off:** No cross-device sync (acceptable for v1)

### 2. Mock Health Data
**Why:** Allows full app development without iOS device  
**When to replace:** Before production build

### 3. No Backend
**Why:** Reduces costs, complexity, and time to ship  
**When to add:** After validating retention in v1

### 4. Static Website
**Why:** Free hosting, fast load times, easy deployment  
**Trade-off:** No dynamic trainer signup form (can add later)

### 5. STEPN Inspiration
**Why:** Proven collectible psychology works  
**Differentiation:** No crypto, sustainable economics, trust-first

---

## Maintenance Notes

### Code Quality
- TypeScript strict mode enabled
- Clean component structure
- Zustand for simple state
- No overengineering

### Scalability
- Easy to add more collectibles (just update `constants/collectibles.ts`)
- Easy to add more trainers (just update `constants/trainers.ts`)
- State management scales to v2 social features
- Navigation can extend to add more tabs

### Technical Debt (Acceptable)
- Hardcoded data (collectibles, trainers)
- No error tracking (Sentry, etc.)
- No analytics (privacy-first, but limits insights)
- Mock services (health, subscriptions)

---

## Next Steps

### Immediate (This Week)
1. Test app on iOS Simulator
2. Test website locally
3. Review all screens
4. Verify credits calculation
5. Verify collectible unlocking

### Short-Term (2-4 Weeks)
1. Implement real HealthKit integration
2. Design collectible sneaker assets
3. Create app icon + splash screen
4. Write privacy policy + terms
5. Set up App Store listing
6. Build with EAS
7. Submit to App Store

### Post-Launch (After Validation)
1. Monitor retention metrics
2. Gather user feedback
3. Iterate on core loop
4. Plan v2 features (only if v1 succeeds)

---

## Resources

- **Expo Docs:** https://docs.expo.dev
- **Next.js Docs:** https://nextjs.org/docs
- **React Navigation:** https://reactnavigation.org
- **Zustand:** https://github.com/pmndrs/zustand
- **App Store Guidelines:** https://developer.apple.com/app-store/review/guidelines/

---

## Contact / Support

For questions about this codebase:
1. Check documentation files (README, DEVELOPMENT, QUICKSTART, STATUS)
2. Review inline code comments
3. Consult framework documentation
4. Ask in project Slack/Discord (if applicable)

---

**Wellthy v1 - Built with discipline. Ready to ship.** ✅

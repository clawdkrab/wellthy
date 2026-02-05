# 🚀 Wellthy Quick Start

## 1. Install Dependencies

### Mobile App
```bash
cd app
npm install
```

### Website
```bash
cd website
npm install
```

## 2. Run Development Servers

### Mobile App
```bash
cd app
npm start
# Press 'i' for iOS Simulator
# Press 'a' for Android Emulator
```

**Note:** iOS Simulator requires Xcode to be installed.

### Website
```bash
cd website
npm run dev
# Open http://localhost:3000 in browser
```

## 3. What You'll See

### Mobile App
- **Home Tab:** Today's movement, streak, and credits
- **Activity Tab:** Steps, active minutes, how credits work
- **Collect Tab:** 9 collectible sneakers (3 Common, 3 Rare, 3 Epic)
- **Trainers Tab:** 5 curated trainer profiles
- **Profile Tab:** Stats, subscription options, settings

**Current Behavior:**
- Health data is **mocked** (random values each sync)
- Credits are **calculated automatically** based on movement
- Collectibles **unlock automatically** when you reach credit thresholds
- Data **persists** between app restarts (AsyncStorage)

### Website
- Hero section with tagline and CTA
- "How It Works" section (3 steps)
- "Collect & Progress" section (rarity tiers)
- "Train with Real People" section
- "Trust & Safety" section
- Final CTA and footer

## 4. Test the Core Loop

1. **Open the app** → Home screen shows streak = 0, credits = 0
2. **Tap "Sync Activity"** → Mock health data loads
3. **Check credits earned** → Should show 10+ credits (base + streak bonus if applicable)
4. **Go to Collect tab** → First sneaker ("Classic Runner") should be unlocked
5. **Earn more credits** → Sync again tomorrow (or manipulate store for testing)
6. **Watch collectibles unlock** → More sneakers appear as credits increase

## 5. Production Checklist

Before shipping to real users:

### Mobile App
- [ ] Replace mock health data with real HealthKit integration
- [ ] Replace emoji sneaker placeholders with actual designed assets
- [ ] Implement real subscription flow (App Store in-app purchases)
- [ ] Create app icon and splash screen
- [ ] Test on real device (not just simulator)
- [ ] Configure bundle ID in `app.json`
- [ ] Build with `eas build --platform ios`
- [ ] Submit to App Store

### Website
- [ ] Add app screenshots
- [ ] Create demo video
- [ ] Add Open Graph meta tags
- [ ] Deploy to Vercel/Netlify
- [ ] Configure custom domain

## 6. Key Files to Understand

| File | Purpose |
|------|---------|
| `app/store/useStore.ts` | Global state management (profile, credits, streaks) |
| `app/services/health.ts` | HealthKit wrapper (currently mocked) |
| `app/constants/collectibles.ts` | All 9 collectibles with unlock thresholds |
| `app/constants/colors.ts` | STEPN-inspired color palette |
| `app/screens/HomeScreen.tsx` | Main screen - core loop entry point |
| `website/pages/index.tsx` | Marketing website homepage |

## 7. Common Commands

```bash
# Mobile App
cd app
npm start                    # Start Expo dev server
npm run ios                  # Run on iOS Simulator directly
expo install <package>       # Add Expo-compatible package

# Website
cd website
npm run dev                  # Development server
npm run build                # Production build
npm run start                # Serve production build locally

# Git
git status                   # Check changes
git add .                    # Stage all changes
git commit -m "message"      # Commit changes
git log --oneline            # View commit history
```

## 8. Project Discipline

Remember the core principles:

✅ **Do in v1:**
- Movement detection
- Credits & streaks
- Visual collectibles
- Trainer profiles (no booking)
- Subscription UI (mock OK)

❌ **Don't do in v1:**
- Sneaker stats/leveling
- Marketplace/trading
- Cash rewards
- Social feeds
- Complex backend

**When in doubt:** Choose simpler, safer, faster.

---

## Need Help?

1. Check `README.md` for product context
2. Check `DEVELOPMENT.md` for technical details
3. Check inline code comments
4. Consult Expo docs: https://docs.expo.dev
5. Consult Next.js docs: https://nextjs.org/docs

---

**Now go build. Ship Wellthy v1.** 🏃‍♂️✨

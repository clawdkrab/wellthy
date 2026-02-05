# Changelog

All notable changes to Wellthy will be documented in this file.

---

## [Unreleased]

### STEPN-Inspired UI Update (2024 v2)
**Hybrid Color System: Brand Identity + Action Energy**

#### Added
- **CTA Colors:** Bright cyan-green (#00E5A0) for primary action buttons
- **STEPN Patterns:** Darker base, bright gradients, glow shadows
- **Accent Colors:** Pink (#FF6BA0), brighter yellow (#FFD700), purple (#9D7EFF)
- **Rarity Badges:** STEPN-style badges at top of collectible cards
- **Card Borders:** Subtle rgba borders for depth

#### Changed
- **Base Colors:** Darker backgrounds (#1A1A1A, was #0F0F1E) for better focus
- **Surface Colors:** Darker cards (#2A2A2A, was #1A1A2E) with borders
- **Button Text:** Dark text on bright buttons (STEPN style)
- **Tab Active State:** Bright green (#00E5A0, was emerald #10B981)
- **Collectible Gradients:** Brighter, more energetic colors
- **Color Philosophy:** Brand gradient (emerald → cyan) for logo/identity, bright CTA for actions

#### Documentation
- Added `STEPN_ANALYSIS.md` - Design reconciliation document
- Updated `COLOR_REFERENCE.md` - New hybrid color system
- Explains when to use brand vs CTA colors

### Brand Update (2024 v1)
**Initial Visual Identity**

#### Changed
- **Color Palette:** Initial brand based on app icon
  - Primary: `#10B981` (emerald green) → `#06B6D4` (cyan/turquoise)
  - Success states use brand green
  - Common collectibles: cyan
  - Rare collectibles: purple
  - Epic collectibles: yellow/gold

#### Updated Components
- **App:**
  - `constants/colors.ts` - New brand palette
  - `components/Button.tsx` - Primary gradient updated
  - `components/CollectibleCard.tsx` - Rarity gradients match brand
  - `screens/HomeScreen.tsx` - Hero card uses brand gradient
  
- **Website:**
  - `styles/globals.css` - CSS variables updated
  - `styles/Home.module.css` - All gradients refreshed
  - Hero title gradient matches app icon
  - CTA buttons use brand gradient

#### Added
- `BRAND.md` - Comprehensive brand guidelines
  - Color system documentation
  - Typography standards
  - Component specifications
  - Copy voice guidelines
  - Animation principles
  - Accessibility standards

---

## [1.0.0] - 2024 (Initial Release)

### Added
**Mobile App**
- 5-tab navigation (Home, Activity, Collect, Trainers, Profile)
- Automatic movement detection via Apple Health (scaffolded)
- Credits system (daily movement + streak bonuses)
- Streak tracking with automatic reset logic
- 9 collectible sneakers (3 Common, 3 Rare, 3 Epic)
- Automatic collectible unlocking at credit thresholds
- Subscription system (UI scaffolded, payment integration pending)
- 5 curated trainer profiles
- Local data persistence (AsyncStorage)
- Dark theme with STEPN-inspired aesthetics

**Website**
- Marketing homepage (Next.js static export)
- Sections: Hero, How It Works, Collect & Progress, Trainers, Trust & Safety
- Mobile-first responsive design
- Optimized for Vercel/Netlify deployment

**Documentation**
- `README.md` - Product vision, core loop, monetization strategy
- `DEVELOPMENT.md` - Technical setup and architecture
- `QUICKSTART.md` - 5-minute getting started guide
- `STATUS.md` - Project status and roadmap
- `PROJECT_SUMMARY.md` - Complete overview

**Infrastructure**
- React Native + Expo (managed workflow)
- TypeScript strict mode
- Zustand state management
- Git repository initialized

### Design Decisions
- Local-only storage (no backend in v1)
- Mock health data for development
- Review-safe language (no crypto, no medical claims)
- Trust-first approach (privacy, transparency)

---

## Version Principles

### Semantic Versioning
- **Major (X.0.0):** Breaking changes, major feature additions
- **Minor (0.X.0):** New features, backward compatible
- **Patch (0.0.X):** Bug fixes, minor improvements

### V1 Scope (MVP)
- Validate core retention loop
- Review-safe, trust-first approach
- Essential features only

### V2 Roadmap (Post-Validation)
- Sneaker stats & leveling
- Social features (friends, feed)
- Trainer booking system
- Seasons & challenges
- Backend infrastructure

---

## Known Issues

### V1 Limitations (By Design)
- HealthKit integration scaffolded (uses mock data)
- Subscription system UI-only (no payment processing)
- Collectible placeholders (emoji, not final art)
- No backend/API
- No user accounts
- No cross-device sync

### Pending (Before App Store Submission)
- Replace mock health data with real HealthKit
- Implement StoreKit in-app purchases
- Design and add collectible artwork
- Create app icon + splash screen assets
- Write privacy policy
- Test on physical iPhone
- App Store screenshots

---

## Future Considerations

### Platform Expansion
- Android version (React Native supports it)
- Web app (progressive web app)
- Apple Watch companion app

### Feature Additions
- Challenges (community events)
- Leaderboards (time-limited, healthy competition)
- Trainer marketplace (bookings + commissions)
- B2B wellness programs (corporate, councils)

### Technical Improvements
- Backend API for cross-device sync
- Analytics dashboard
- Push notifications (streak reminders)
- Background health data sync
- Offline mode improvements

---

## Contribution Guidelines

When adding to this changelog:
1. Group changes by category (Added, Changed, Deprecated, Removed, Fixed, Security)
2. Include file paths for code changes
3. Explain *why* for major decisions
4. Link to issues/PRs when applicable
5. Keep it human-readable

---

Last updated: 2024

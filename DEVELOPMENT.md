# Development Guide

## Project Structure

```
wellthy/
├── app/                 # React Native / Expo mobile app
│   ├── screens/        # 5 main screens (Home, Activity, Collect, Trainers, Profile)
│   ├── components/     # Reusable UI components
│   ├── navigation/     # Tab navigation setup
│   ├── store/          # Zustand state management
│   ├── services/       # HealthKit, storage services
│   ├── types/          # TypeScript definitions
│   └── constants/      # Colors, collectibles, trainers data
│
├── website/            # Next.js marketing website
│   ├── pages/         # Website pages
│   ├── styles/        # CSS modules
│   └── public/        # Static assets
│
└── README.md          # Main documentation
```

## Setup Instructions

### Prerequisites

- **Node.js 18+**
- **npm or yarn**
- **Xcode** (for iOS development)
- **Expo CLI** (install globally: `npm install -g expo-cli`)

### Mobile App Setup

```bash
cd app
npm install
npm start
```

This will start the Expo development server. Press `i` to open iOS simulator.

### Website Setup

```bash
cd website
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Key Implementation Notes

### Mobile App

#### State Management
- Uses **Zustand** for global state
- Profile data stored in **AsyncStorage** (local only, no backend in v1)
- Health data synced from Apple Health on app open

#### HealthKit Integration
- **Currently scaffolded** - uses mock data for development
- Production requires:
  - Add `expo-health` or `react-native-health` package
  - Request read permissions for steps and active minutes
  - Query data for current day (midnight to now)
  
See `/app/services/health.ts` for implementation notes.

#### Credits System
- Daily movement (1000+ steps or 15+ active mins): **+10 credits**
- Streak bonus: **+5 credits/day**
- Subscriber multiplier: **1.5x**
- Credits auto-unlock collectibles when thresholds are met

#### Streaks
- Increments when user has movement on consecutive days
- Resets if no movement for >1 day
- Subscribers get 1 "forgiveness" per month (not implemented in v1)

#### Collectibles
- 9 total (3 Common, 3 Rare, 3 Epic)
- Visual only in v1 (no stats, no marketplace)
- Unlocked automatically via credit thresholds
- See `/app/constants/collectibles.ts` for full list

#### Subscriptions
- **Mock implementation** in v1
- Production requires:
  - Apple App Store in-app purchases setup
  - StoreKit integration
  - Receipt validation
  
See `/app/screens/ProfileScreen.tsx` for UI flow.

### Website

#### Static Export
- Configured for static export (`output: 'export'` in `next.config.js`)
- Can be deployed to **Vercel**, **Netlify**, or any static hosting
- No server-side rendering required

#### Design System
- Colors defined in `globals.css` (matches app colors)
- Mobile-first responsive design
- STEPN-inspired gradients and vibrant palette

## Testing Checklist

### Mobile App
- [ ] App loads without errors
- [ ] Home screen shows today's stats
- [ ] Activity screen displays steps and active minutes
- [ ] Collect screen shows all collectibles with locked/unlocked states
- [ ] Trainers screen displays trainer profiles
- [ ] Profile screen shows streak and total credits
- [ ] Subscription flow (mock) works
- [ ] Data persists across app restarts
- [ ] Health data sync button updates values

### Website
- [ ] All sections render correctly
- [ ] Buttons and links work
- [ ] Responsive on mobile, tablet, desktop
- [ ] No console errors
- [ ] Fast load time

## Next Steps for Production

### Mobile App

1. **HealthKit Integration**
   - Install `expo-health` or `react-native-health`
   - Implement real permission request
   - Query steps and active minutes
   - Handle permission denials gracefully

2. **App Store In-App Purchases**
   - Set up products in App Store Connect
   - Integrate StoreKit
   - Validate receipts
   - Handle subscription renewals

3. **Assets**
   - Replace emoji placeholders with designed collectible images
   - Create app icon (1024x1024)
   - Create splash screen (1284x2778)

4. **App Store Submission**
   - Configure bundle ID in `app.json`
   - Build with `eas build --platform ios`
   - Complete App Store Connect listing
   - Emphasize: no crypto, no gambling, no medical claims
   - Submit for review

### Website

1. **Content**
   - Add screenshots of app
   - Create demo video
   - Write detailed trainer onboarding page

2. **SEO**
   - Add Open Graph meta tags
   - Create sitemap
   - Add robots.txt

3. **Deployment**
   - Deploy to Vercel: `vercel deploy`
   - Configure custom domain
   - Set up analytics (privacy-friendly)

## Architecture Decisions

### Why Local-Only Storage?
- Simplifies v1 (no backend to build/maintain)
- Reduces privacy concerns
- Faster development
- Validates core loop before investing in infrastructure

**Trade-off:** Data doesn't sync across devices. Acceptable for v1.

### Why No Backend?
- V1 goal: Validate retention and core loop
- Backend adds complexity, cost, and delay
- Can add in v2 when validated

### Why Zustand?
- Lightweight (< 1KB)
- Simple API
- No boilerplate
- TypeScript-friendly

### Why Next.js Static Export?
- Free hosting (Vercel, Netlify)
- Fast load times
- No server costs
- Easy to deploy

## Common Issues

### Expo App Won't Start
```bash
# Clear cache
expo start -c

# Reinstall dependencies
rm -rf node_modules
npm install
```

### TypeScript Errors
```bash
# Regenerate types
npx tsc --noEmit
```

### Website Build Fails
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Git Workflow

```bash
# Initialize repo (already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial Wellthy v1 implementation"

# Create remote repo (GitHub, GitLab, etc.)
git remote add origin <your-repo-url>

# Push
git push -u origin main
```

## Questions?

If you encounter issues or need clarification:
1. Check this guide
2. Review inline comments in code
3. Check `README.md` for product context
4. Consult Expo and Next.js documentation

---

**Ship fast. Ship safe. Ship Wellthy v1.** 🚀

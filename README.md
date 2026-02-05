# Wellthy – Wellness that pays

**Move more. Stay consistent. Get rewarded.**

Wellthy is a move-to-earn fitness platform that makes consistency rewarding through collectibles, progression, and connection with real trainers.

---

## 🎯 Core Loop

1. **User opens app** → sees today's status + streak
2. **Movement detected automatically** → via Apple Health (read-only)
3. **Credits awarded** → daily movement + streak bonuses
4. **Progress unlocked** → collectible sneakers & gear
5. **App implies return** → "come back tomorrow"

**If this loop isn't obvious in the first session, retention fails.**

---

## 🎨 Why STEPN Inspired This

STEPN proved that **money + movement = motivation**. It made fitness:
- Fun (not a chore)
- Collectible (sneakers with rarity)
- Artistic (vibrant, playful visuals)
- Social (community-driven)

But STEPN's economics were fragile and created regulatory risk.

---

## 🔄 How Wellthy Differs from STEPN

| STEPN | Wellthy |
|-------|---------|
| Crypto wallets | No crypto |
| NFT marketplace | No trading |
| Cash-out expectations | Internal credits only (v1) |
| Sneaker stats & leveling | Visual collectibles only (v1) |
| GPS-tracked runs | Apple Health passive detection |
| High barrier to entry | Free to start, optional subscription |
| Regulatory ambiguity | Review-safe, trust-first |

Wellthy keeps the **game feel** while removing the **fragile economics**.

---

## 💰 Monetization Model (V1)

### Primary: Subscriptions
- **Monthly** & **Yearly** tiers
- Unlocks:
  - Higher credit multiplier (progress faster)
  - Faster collectible unlocks
  - Streak forgiveness (1 miss/month)
  - Premium trainer content (future)

### Future: Trainer Economy
- Trainers list classes/services
- Wellthy takes commission on bookings
- Users discover trainers through the app
- V1 validates **interest** (profiles only), not revenue

### Philosophy
Subscriptions feel like: *"This works. I want more."*  
Not: *"I'm blocked."*

App is fully usable without payment.

---

## ✅ What V1 Validates

1. **Core loop retention** – Do users return daily?
2. **Collectible motivation** – Do sneakers drive consistency?
3. **Trainer interest** – Do users explore trainer profiles?
4. **Subscription value** – Do engaged users upgrade?
5. **Trust** – Does the no-hype approach build credibility?

---

## ⚠️ Known Risks

### App Store Review
- **Mitigation:** No crypto, no gambling language, no cash-out promises, no medical claims
- **Strategy:** Conservative wording, clear privacy policy, optional monetization

### User Retention
- **Risk:** Collectibles alone may not sustain long-term engagement
- **Mitigation:** Trainer connection (human element), seasons (future), community (future)

### Trainer Adoption
- **Risk:** Trainers may not see value without immediate revenue
- **Mitigation:** Showcase profiles, build waiting list, launch with commission model in v2

### Technical
- **Risk:** HealthKit data sync reliability
- **Mitigation:** Graceful handling, clear "last synced" timestamps, manual refresh option

---

## 🗺️ Planned V2

After v1 validates the core loop:

1. **Sneaker stats** – attributes, leveling, specialization
2. **Trainer bookings** – real revenue for trainers, commission for Wellthy
3. **Seasons** – timed progression, leaderboards, exclusive collectibles
4. **Social feed** – share progress, follow friends (carefully, to avoid toxicity)
5. **Challenges** – community events, brand partnerships
6. **B2B** – councils, employers, wellness programs

**Do not build these in v1.** Ship lean, learn, iterate.

---

## 🏗️ Project Structure

```
wellthy/
├── app/                    # React Native / Expo app
│   ├── App.tsx            # Main entry point
│   ├── app.json           # Expo config
│   ├── package.json
│   ├── tsconfig.json
│   ├── screens/           # Main screens (Home, Activity, Collect, Trainers, Profile)
│   ├── components/        # Reusable UI components
│   ├── navigation/        # Tab navigation
│   ├── store/             # Zustand state management
│   ├── services/          # HealthKit, storage
│   ├── types/             # TypeScript definitions
│   ├── constants/         # Colors, collectibles data
│   └── assets/            # Images, icons
│
├── website/               # Next.js marketing site
│   ├── pages/
│   ├── components/
│   ├── styles/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Expo CLI: `npm install -g expo-cli`
- iOS Simulator (Xcode) or physical iPhone

### Mobile App

```bash
cd app
npm install
npm start
# Press 'i' for iOS simulator
```

### Website

```bash
cd website
npm install
npm run dev
# Open http://localhost:3000
```

---

## 🎨 Design Principles

- **Bright, arty, colourful** – STEPN-inspired energy
- **Brand gradient:** Emerald green → cyan/turquoise (from app icon)
- **Dark UI base** (#0F0F1E) with vibrant accent colors
- **Soft gradients**, abstract shapes, playful iconography
- **Not clinical** – fitness should feel alive, not like a hospital app
- **Mobile-first** – every interaction optimised for thumbs

**See [BRAND.md](BRAND.md) for complete brand guidelines.**

---

## 🔒 Privacy & Trust

- **Apple Health read-only** – we never write data
- **Local storage only** – no backend in v1 (AsyncStorage)
- **No tracking** – no analytics until we tell users
- **Clear permissions** – explain why we need HealthKit access
- **No crypto** – no wallets, no tokens, no regulatory ambiguity

---

## 📋 Version Discipline

### ✅ V1 Includes
- Movement detection (HealthKit)
- Streaks
- Credits (internal points)
- Collectibles (visual, rarity tiers)
- Trainer profiles (static, no booking)
- Subscriptions (monthly/yearly)
- Website (marketing + trainer signup)

### ❌ V1 Excludes
- Sneaker stats / leveling
- Marketplace / trading
- Cash rewards / withdrawals
- Social feed
- Challenges / leaderboards
- B2B / councils UI
- Real trainer booking system

**If it risks App Store rejection, complicates v1, or delays shipping: cut it.**

---

## 🧪 Testing Checklist

- [ ] HealthKit permission flow works
- [ ] Steps sync and display correctly
- [ ] Credits award properly (daily + streak bonus)
- [ ] Streak increments and resets correctly
- [ ] Collectibles unlock at correct thresholds
- [ ] Subscription flow (test mode)
- [ ] Onboarding is clear and motivating
- [ ] App works without subscription (no paywalls)
- [ ] "Last synced" timestamp updates
- [ ] All copy is review-safe (no hype, no promises)

---

## 📦 Deployment

### Mobile App
1. Configure `app.json` with bundle ID
2. Build with `eas build --platform ios`
3. Submit to App Store Connect
4. Await review (expect questions about monetization)

### Website
1. Build: `npm run build`
2. Deploy to Vercel / Netlify
3. Configure custom domain

---

## 🤝 Contributing

This is v1. Keep it simple. When in doubt:
- Choose the **safer** option (legal, review risk)
- Choose the **simpler** option (code, UX)
- Choose the **faster** option (shipping beats perfection)

---

## 📄 License

Proprietary. Not open source.

---

**Built with discipline. Shipped with trust.**

# Wellthy Brand Guidelines

## Brand Identity

**Wellthy** embodies energetic, playful wellness without crypto baggage. The brand communicates:
- **Progress** (upward movement, growth)
- **Energy** (vibrant, alive, motivating)
- **Trust** (no hype, no gimmicks, sustainable)
- **Playfulness** (fun collectibles, not clinical fitness)

---

## Color Palette

### Primary Brand Gradient
The core Wellthy identity — **emerald green → cyan/turquoise**

```
Emerald Green: #10B981
Cyan/Turquoise: #06B6D4
```

**Usage:**
- Primary CTAs (Download button, Sync Activity)
- Tab bar active states
- Hero sections
- Logo
- Main branding moments

**Gradient code:**
```css
background: linear-gradient(135deg, #10B981 0%, #06B6D4 100%);
```

---

### Supporting Colors

#### Rarity Tiers (Collectibles)

**Common: Cyan**
```
Base: #06B6D4
Light: #22D3EE
```
- Most accessible collectibles
- Fresh, approachable feel

**Rare: Purple**
```
Base: #8B5CF6
Light: #A78BFA
```
- Mid-tier collectibles
- Mysterious, valuable feel

**Epic: Yellow/Gold**
```
Base: #FBBF24
Light: #F59E0B
```
- Most exclusive collectibles
- Premium, achievement feel
- Also used for warning states

---

### Semantic Colors

**Success (matches brand green):**
```
#10B981
```
- Credits earned
- Streak achievements
- Movement detected
- Positive feedback

**Warning:**
```
#FBBF24
```
- Alerts
- Important notices

**Error:**
```
#EF4444
```
- Errors
- Streak broken
- Failed actions

---

### Neutral Base

**Dark backgrounds:**
```
Background: #0F0F1E
Surface: #1A1A2E
Surface Light: #252541
```

**Text hierarchy:**
```
Primary: #FFFFFF
Secondary: #B2B2C9
Tertiary: #6C6C89
```

---

## Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

### Weights
- **900:** Hero titles, big numbers
- **800:** Section titles, emphasis
- **700:** Buttons, labels, strong text
- **600:** Subtitles, metadata
- **500:** Body text (selected states)
- **400:** Default (not used much — prefer bold)

### Sizes (Mobile)
```
Hero: 72px (desktop), 48px (mobile)
H1: 32-48px
H2: 24-32px
H3: 20-24px
Body: 15-16px
Small: 12-14px
```

---

## Gradients Library

### Brand Gradient (Primary)
```
Emerald → Cyan: ['#10B981', '#06B6D4']
```
Use for: Main CTAs, hero sections, active states

### Green Depth
```
Deep Emerald: ['#059669', '#10B981']
```
Use for: Success states, movement achievements

### Cyan Variations
```
Cyan Range: ['#06B6D4', '#22D3EE']
```
Use for: Common collectibles, secondary actions

### Purple (Rare)
```
Purple: ['#8B5CF6', '#A78BFA']
```
Use for: Rare collectibles

### Gold (Epic)
```
Gold: ['#FBBF24', '#F59E0B']
```
Use for: Epic collectibles, premium features

---

## UI Components

### Buttons

**Primary (Brand Gradient)**
```
Background: linear-gradient(135deg, #10B981, #06B6D4)
Text: #FFFFFF
Border Radius: 16px
Padding: 18px 36px (large), 14px 24px (medium)
Font Weight: 700
```

**Secondary (Solid Surface)**
```
Background: #252541
Text: #FFFFFF
Border Radius: 16px
```

**Outline (Brand Border)**
```
Background: transparent
Border: 2px solid #10B981
Text: #10B981
Border Radius: 16px
```

### Cards

**Surface**
```
Background: #1A1A2E
Border Radius: 20-24px
Padding: 20-32px
```

**Elevated (with shadow)**
```
Shadow: 0px 4px 12px rgba(0,0,0,0.3)
```

### Collectible Cards

**Locked state:**
- Gradient: ['#252541', '#1A1A2E']
- Opacity: 0.3 on image
- Lock badge: "🔒 X credits"

**Unlocked state:**
- Full rarity gradient
- Image opacity: 1.0
- Rarity badge visible

---

## Iconography

### Style
- Emoji for quick personality (🔥 🏃 ✨ 👟 💪)
- Use sparingly (don't overdo it)
- No custom icons in v1 (use emoji + text)

### Key Emoji
```
🔥 Streak
👟 Collectibles
🏃 Movement/Activity
✨ Rewards/Credits
💪 Trainers
🔒 Locked
✅ Complete/Success
⚠️ Warning
🎁 Unlock/Surprise
```

---

## Visual Language

### Photography/Imagery (Future)
- Active people (not gym models)
- Everyday movement (walking, dancing, playing)
- Diverse ages and body types
- Candid, not staged
- Natural lighting

### Illustration Style (Collectibles)
When designing sneaker collectibles:
- **Bold, graphic style** (not photorealistic)
- **Bright, saturated colors** (matches brand energy)
- **Abstract elements** (swirls, sparkles, gradients)
- **Playful details** (stars, lightning, glow effects)
- **Inspiration:** STEPN sneakers, but more accessible/friendly

**Avoid:**
- Hyper-realistic renders
- Crypto/blockchain aesthetics (chains, coins)
- Dark/edgy tone
- Clinical/medical vibes

---

## Copy Voice

### Tone
- **Motivating** (not preachy)
- **Playful** (not childish)
- **Honest** (no hype)
- **Energetic** (not aggressive)

### Dos
✅ "Keep your streak alive"  
✅ "You're on track"  
✅ "Consistency beats intensity"  
✅ "Come back tomorrow"  
✅ "Every step counts"

### Don'ts
❌ "Crush your goals!" (too intense)  
❌ "Get rich with movement" (crypto vibes)  
❌ "Transform your body" (medical claims)  
❌ "Join the revolution" (hype)  
❌ "You're failing" (negative)

---

## Animation Principles

### Timing
- **Fast:** 200-300ms for interactions (button press)
- **Medium:** 400-500ms for transitions (screen changes)
- **Slow:** 600-800ms for celebrations (collectible unlock)

### Easing
- **Buttons/tabs:** ease-out (snappy feel)
- **Cards/modals:** ease-in-out (smooth)
- **Celebrations:** spring (playful bounce)

### What to Animate (v2)
- Collectible unlock (scale + fade in)
- Streak increment (number count up)
- Credits earned (sparkle effect)
- Tab transitions (smooth fade)

**V1:** Keep animations minimal (focus on functionality).

---

## App Icon

The Wellthy app icon is the core brand element:

**Elements:**
- Stylized "W" letterform
- Upward arrow integrated (progress signal)
- Gradient: emerald green (#10B981) → cyan (#06B6D4)
- Dark background with subtle grid pattern
- Modern, energetic, clean

**Usage:**
- App Store icon (1024×1024)
- Splash screen logo
- Website favicon
- Social media profile

**Do not:**
- Change the gradient colors
- Remove the upward arrow
- Add additional elements
- Use on light backgrounds without adjustment

---

## Accessibility

### Color Contrast
All text must meet WCAG AA standards:
- **White on Dark Base:** ✅ Passes (21:1 ratio)
- **Green/Cyan on Dark:** ✅ Passes for large text
- **Yellow on Dark:** ✅ Passes

**Avoid:**
- Cyan text on green backgrounds
- Yellow text on white
- Low-opacity text for critical info

### Interactive Elements
- Minimum tap target: 44×44pt (iOS standard)
- Clear visual feedback on press
- Disable state clearly visible

---

## Platform-Specific

### iOS
- Use SF Symbols where appropriate (system icons)
- Follow iOS Human Interface Guidelines
- Tab bar icons: 28×28pt
- Respect safe areas (notch, home indicator)

### Web
- Mobile-first responsive design
- Breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly tap targets (min 48×48px)
- Fast load times (static export)

---

## Brand Applications

### App Store Listing
- Icon: Full color, gradient prominent
- Screenshots: Show collectibles, streaks, clean UI
- Copy: "Wellness that pays. Move more. Stay consistent. Get rewarded."

### Social Media
- Profile picture: App icon (square crop)
- Cover/banner: Brand gradient with tagline
- Posts: Bright, energetic, motivational
- Hashtags: #Wellthy #WellnessThatPays #MoveMore

### Marketing Materials
- Hero images: Brand gradient backgrounds
- CTAs: Always use primary gradient button
- White space: Don't overcrowd (let brand breathe)

---

## File Formats

### Logo/Icon
- **Vector:** SVG (for website)
- **Raster:** PNG with transparency (1024×1024 for App Store)

### Collectibles
- **Format:** PNG with transparency
- **Size:** 512×512px (2x for retina)
- **Color space:** sRGB

### Screenshots
- **iOS:** 1290×2796 (iPhone 15 Pro Max)
- **Format:** PNG
- **Brightness:** Showcase UI clearly

---

## Version History

**v1.0 (2024):** Initial brand identity with emerald → cyan gradient, based on app icon design.

---

## Quick Reference

**Primary Gradient:** `#10B981 → #06B6D4`  
**Dark Base:** `#0F0F1E`  
**Collectible Tiers:** Cyan (Common), Purple (Rare), Gold (Epic)  
**Voice:** Motivating, playful, honest  
**Vibe:** STEPN energy without crypto baggage

---

**Consistency is key. Keep the brand clean, energetic, and trustworthy.**

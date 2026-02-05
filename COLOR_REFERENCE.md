# Wellthy Color Reference Card v2

Quick reference for developers. For full guidelines, see [BRAND.md](BRAND.md).

---

## 🎨 Color System (Hybrid Approach)

### Brand Identity (Logo & Icon)
```
Emerald Green → Cyan: #10B981 → #06B6D4
```
**Use for:** App icon, logo, splash screen, brand moments

### Primary Actions (STEPN-Inspired)
```
Bright Cyan-Green: #00E5A0
CTA Gradient: #00E5A0 → #00D4FF
```
**Use for:** Primary buttons, active tabs, high-emphasis CTAs

---

## 🎭 Collectible Rarity Colors

### Common (Bright Cyan)
```
Base: #00D4FF
Gradient: ['#00D4FF', '#00A8CC']
```

### Rare (Purple)
```
Base: #9D7EFF
Gradient: ['#9D7EFF', '#B794FF']
```

### Epic (Gold)
```
Base: #FFD700
Gradient: ['#FFD700', '#FFC300']
```

---

## ✅ Semantic Colors

```javascript
success: '#10B981',  // Emerald (brand green)
warning: '#FFD700',  // Gold
error: '#EF4444',    // Red
```

---

## 🌑 Dark Base (STEPN-Inspired)

```javascript
background: '#1A1A1A',      // Main app background (darker)
surface: '#2A2A2A',         // Cards, containers
surfaceLight: '#353535',    // Secondary surfaces
```

---

## 📝 Text Hierarchy

```javascript
text: '#FFFFFF',            // Primary text
textSecondary: '#8F8F8F',   // Subtitles, descriptions (adjusted for darker base)
textTertiary: '#6C6C89',    // Metadata, timestamps
```

---

## 🔧 Usage Examples

### React Native (LinearGradient)

```tsx
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/colors';

// Primary action button (CTA)
<LinearGradient
  colors={Colors.gradientCTA}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={{
    shadowColor: Colors.ctaBright,
    shadowOpacity: 0.3,
    shadowRadius: 8,
  }}
>
  <Text style={{ color: '#1A1A1A' }}>Sync Activity</Text>
</LinearGradient>

// Brand moment (logo, splash)
<LinearGradient
  colors={Colors.gradientBrand}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
>
  {/* Wellthy logo */}
</LinearGradient>

// Common collectible card
<LinearGradient
  colors={Colors.gradientCyan}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
>
  {/* Card content */}
</LinearGradient>
```

### CSS (Website)

```css
/* Primary CTA gradient (title, buttons) */
.hero-title {
  background: linear-gradient(135deg, #00E5A0 0%, #00D4FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* CTA Button */
.primary-button {
  background: linear-gradient(135deg, #00E5A0, #00D4FF);
  color: #1A1A1A;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 229, 160, 0.3);
}

/* Brand logo */
.logo {
  background: linear-gradient(135deg, #10B981, #06B6D4);
}

/* Rarity card (Common) */
.common-card {
  background: linear-gradient(135deg, #00D4FF, #00A8CC);
}
```

---

## 🚦 Do's & Don'ts

### ✅ Do
- Use CTA bright green (#00E5A0) for primary action buttons
- Use brand gradient (emerald → cyan) for logo/icon
- Use dark text (#1A1A1A) on bright buttons
- Add glow shadows to CTAs for depth
- Maintain contrast ratios (WCAG AA)
- Keep rarity colors consistent

### ❌ Don't
- Mix brand gradient with CTA gradient on same screen
- Use brand gradient for action buttons (use CTA instead)
- Use light text on bright buttons (use dark #1A1A1A)
- Overuse yellow (reserve for Epic + warnings)
- Change core brand or CTA colors

---

## 📱 Quick Copy-Paste

### App (TypeScript)
```typescript
// In constants/colors.ts
export const Colors = {
  // Brand identity
  brandGreen: '#10B981',
  brandCyan: '#06B6D4',
  gradientBrand: ['#10B981', '#06B6D4'],
  
  // Primary actions
  ctaBright: '#00E5A0',
  gradientCTA: ['#00E5A0', '#00D4FF'],
  
  // Rarity
  common: '#00D4FF',
  rare: '#9D7EFF',
  epic: '#FFD700',
  
  // Semantic
  success: '#10B981',
  warning: '#FFD700',
  error: '#EF4444',
};
```

### Website (CSS)
```css
:root {
  --brand-green: #10B981;
  --brand-cyan: #06B6D4;
  --cta-bright: #00E5A0;
  --common: #00D4FF;
  --rare: #9D7EFF;
  --epic: #FFD700;
  --success: #10B981;
}
```

---

## 🎯 When to Use Each Gradient

| Gradient | When to Use |
|----------|-------------|
| **Brand** (Emerald→Cyan) | Logo, app icon, splash screen, brand moments |
| **CTA** (Bright Green→Cyan) | Primary buttons, active tabs, high-emphasis actions |
| **Cyan** (Bright) | Common collectibles |
| **Purple** | Rare collectibles |
| **Gold** | Epic collectibles, premium features |
| **Success** (Emerald) | Success states, achievements, credits earned |

---

**Last updated:** 2024 v2 (STEPN-inspired update: hybrid brand + CTA system)

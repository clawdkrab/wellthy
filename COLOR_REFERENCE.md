# Wellthy Color Reference Card

Quick reference for developers. For full guidelines, see [BRAND.md](BRAND.md).

---

## 🎨 Brand Gradient (Primary)

```
Emerald Green → Cyan/Turquoise
#10B981 → #06B6D4
```

**Use for:**
- Primary CTAs
- Active tab states
- Hero sections
- Main branding

---

## 🎭 Collectible Rarity Colors

### Common (Cyan)
```
Base: #06B6D4
Light: #22D3EE
Gradient: ['#06B6D4', '#22D3EE']
```

### Rare (Purple)
```
Base: #8B5CF6
Light: #A78BFA
Gradient: ['#8B5CF6', '#A78BFA']
```

### Epic (Yellow/Gold)
```
Base: #FBBF24
Light: #F59E0B
Gradient: ['#FBBF24', '#F59E0B']
```

---

## ✅ Semantic Colors

```javascript
success: '#10B981',  // Emerald (matches brand)
warning: '#FBBF24',  // Yellow
error: '#EF4444',    // Red
```

---

## 🌑 Dark Base

```javascript
background: '#0F0F1E',      // Main app background
surface: '#1A1A2E',         // Cards, containers
surfaceLight: '#252541',    // Secondary surfaces
```

---

## 📝 Text Hierarchy

```javascript
text: '#FFFFFF',            // Primary text
textSecondary: '#B2B2C9',   // Subtitles, descriptions
textTertiary: '#6C6C89',    // Metadata, timestamps
```

---

## 🔧 Usage Examples

### React Native (LinearGradient)

```tsx
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/colors';

// Primary brand button
<LinearGradient
  colors={Colors.gradientPrimary}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
>
  {/* Button content */}
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
/* Primary brand gradient */
.hero-title {
  background: linear-gradient(135deg, #10B981 0%, #06B6D4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Button */
.primary-button {
  background: linear-gradient(135deg, #10B981, #06B6D4);
  color: #FFFFFF;
  border-radius: 16px;
}

/* Rarity card (Common) */
.common-card {
  background: linear-gradient(135deg, #06B6D4, #22D3EE);
}
```

---

## 🚦 Do's & Don'ts

### ✅ Do
- Use brand gradient for primary actions
- Maintain contrast ratios (WCAG AA)
- Keep rarity colors consistent
- Use semantic colors for feedback

### ❌ Don't
- Mix rarity gradients (no cyan + purple)
- Use light text on light backgrounds
- Change brand gradient colors
- Overuse yellow (reserve for Epic + warnings)

---

## 📱 Quick Copy-Paste

### App (TypeScript)
```typescript
// In constants/colors.ts
export const Colors = {
  primary: '#10B981',
  primaryLight: '#06B6D4',
  gradientPrimary: ['#10B981', '#06B6D4'],
  
  common: '#06B6D4',
  rare: '#8B5CF6',
  epic: '#FBBF24',
  
  success: '#10B981',
  warning: '#FBBF24',
  error: '#EF4444',
};
```

### Website (CSS)
```css
:root {
  --primary: #10B981;
  --primary-light: #06B6D4;
  --common: #06B6D4;
  --rare: #8B5CF6;
  --epic: #FBBF24;
  --success: #10B981;
}
```

---

## 🎯 When to Use Each Gradient

| Gradient | When to Use |
|----------|-------------|
| **Primary** (Green→Cyan) | Main CTAs, hero sections, active tabs |
| **Cyan** | Common collectibles, secondary actions |
| **Purple** | Rare collectibles |
| **Gold** | Epic collectibles, premium features |
| **Green** | Success states, achievements |

---

**Last updated:** 2024 (Brand refresh)

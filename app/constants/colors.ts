// Wellthy color palette v2
// Hybrid: Brand identity (emerald → cyan) + STEPN energy (bright CTAs)
// Darker base (#1A1A1A) with bright, actionable accents

export const Colors = {
  // Base (STEPN-inspired: darker, more focused)
  background: '#1A1A1A',
  surface: '#2A2A2A',
  surfaceLight: '#353535',
  
  // Brand identity (from app icon - use for logo/brand moments)
  brandGreen: '#10B981', // Emerald green
  brandCyan: '#06B6D4', // Cyan/turquoise
  
  // Primary actions (STEPN-inspired: bright, energetic)
  ctaBright: '#00E5A0', // Bright cyan-green (primary buttons)
  ctaSecondary: '#00D4FF', // Bright cyan (secondary actions)
  
  // Collectible rarity colors (STEPN palette)
  common: '#00D4FF', // Bright cyan
  rare: '#9D7EFF', // Purple
  epic: '#FFD700', // Gold/yellow
  
  // Accents (from STEPN)
  accentPink: '#FF6BA0', // Playful moments
  accentYellow: '#FFD700', // Streaks, highlights
  accentPurple: '#9D7EFF', // Rare items
  accentCyan: '#00D4FF', // Progress bars
  
  // Semantic
  success: '#10B981', // Emerald (brand green)
  warning: '#FFD700', // Yellow
  error: '#EF4444',
  
  // Text (adjusted for darker base)
  text: '#FFFFFF',
  textSecondary: '#8F8F8F',
  textTertiary: '#6C6C89',
  
  // Gradients (for LinearGradient)
  gradientBrand: ['#10B981', '#06B6D4'], // Brand identity (logo, icon)
  gradientCTA: ['#00E5A0', '#00D4FF'], // Primary action buttons
  gradientCyan: ['#00D4FF', '#00A8CC'], // Common collectibles
  gradientPurple: ['#9D7EFF', '#B794FF'], // Rare collectibles
  gradientGold: ['#FFD700', '#FFC300'], // Epic collectibles
  gradientSuccess: ['#10B981', '#059669'], // Success states
};

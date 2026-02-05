// Wellthy brand color palette
// Based on app icon: emerald green → cyan gradient with yellow accents
// Dark base with vibrant, energetic accents

export const Colors = {
  // Base
  background: '#0F0F1E',
  surface: '#1A1A2E',
  surfaceLight: '#252541',
  
  // Primary accents (brand gradient: green → cyan)
  primary: '#10B981', // Emerald green
  primaryLight: '#06B6D4', // Cyan/turquoise
  
  // Collectible rarity colors
  common: '#06B6D4', // Cyan (matches brand)
  rare: '#8B5CF6', // Purple (contrast)
  epic: '#FBBF24', // Yellow/gold (accent from icon)
  
  // Semantic
  success: '#10B981', // Emerald green (matches brand)
  warning: '#FBBF24',
  error: '#EF4444',
  
  // Text
  text: '#FFFFFF',
  textSecondary: '#B2B2C9',
  textTertiary: '#6C6C89',
  
  // Gradients (for LinearGradient)
  gradientPrimary: ['#10B981', '#06B6D4'], // Brand gradient (green → cyan)
  gradientGreen: ['#059669', '#10B981'], // Deep emerald
  gradientCyan: ['#06B6D4', '#22D3EE'], // Cyan variations
  gradientGold: ['#FBBF24', '#F59E0B'], // Yellow accent
  gradientPurple: ['#8B5CF6', '#A78BFA'], // Rare collectibles
};

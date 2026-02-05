import { Collectible } from '../types';

// V1 collectibles - visual only, no stats
// Unlocked via credit thresholds

export const COLLECTIBLES: Collectible[] = [
  // Common tier
  {
    id: 'sneaker-classic-white',
    name: 'Classic Runner',
    rarity: 'Common',
    image: '👟', // Placeholder - replace with actual assets
    unlockThreshold: 0, // Starter collectible
  },
  {
    id: 'sneaker-blue-wave',
    name: 'Blue Wave',
    rarity: 'Common',
    image: '👟',
    unlockThreshold: 50,
  },
  {
    id: 'sneaker-green-dash',
    name: 'Green Dash',
    rarity: 'Common',
    image: '👟',
    unlockThreshold: 100,
  },
  
  // Rare tier
  {
    id: 'sneaker-purple-lightning',
    name: 'Purple Lightning',
    rarity: 'Rare',
    image: '👟',
    unlockThreshold: 250,
  },
  {
    id: 'sneaker-sunset-burst',
    name: 'Sunset Burst',
    rarity: 'Rare',
    image: '👟',
    unlockThreshold: 400,
  },
  {
    id: 'sneaker-midnight-glow',
    name: 'Midnight Glow',
    rarity: 'Rare',
    image: '👟',
    unlockThreshold: 600,
  },
  
  // Epic tier
  {
    id: 'sneaker-golden-phoenix',
    name: 'Golden Phoenix',
    rarity: 'Epic',
    image: '👟',
    unlockThreshold: 1000,
  },
  {
    id: 'sneaker-cosmic-voyager',
    name: 'Cosmic Voyager',
    rarity: 'Epic',
    image: '👟',
    unlockThreshold: 1500,
  },
  {
    id: 'sneaker-legendary-flame',
    name: 'Legendary Flame',
    rarity: 'Epic',
    image: '👟',
    unlockThreshold: 2500,
  },
];

// Helper functions
export const getCollectiblesByRarity = (rarity: Collectible['rarity']) => {
  return COLLECTIBLES.filter(c => c.rarity === rarity);
};

export const getNextUnlockable = (currentCredits: number, unlockedIds: string[]) => {
  return COLLECTIBLES
    .filter(c => !unlockedIds.includes(c.id))
    .filter(c => c.unlockThreshold > currentCredits)
    .sort((a, b) => a.unlockThreshold - b.unlockThreshold)[0];
};

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Collectible } from '../types';
import { Colors } from '../constants/colors';

interface CollectibleCardProps {
  collectible: Collectible;
  isUnlocked: boolean;
}

export const CollectibleCard: React.FC<CollectibleCardProps> = ({
  collectible,
  isUnlocked,
}) => {
  const getRarityColor = () => {
    switch (collectible.rarity) {
      case 'Common':
        return Colors.common;
      case 'Rare':
        return Colors.rare;
      case 'Epic':
        return Colors.epic;
      default:
        return Colors.common;
    }
  };
  
  const getGradient = () => {
    switch (collectible.rarity) {
      case 'Common':
        return Colors.gradientCyan; // Bright cyan
      case 'Rare':
        return Colors.gradientPurple; // Purple
      case 'Epic':
        return Colors.gradientGold; // Gold
      default:
        return Colors.gradientCyan;
    }
  };
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={isUnlocked ? getGradient() : ['#353535', '#2A2A2A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        {/* STEPN-style rarity badge */}
        <View style={[
          styles.rarityBadge,
          { backgroundColor: isUnlocked ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)' }
        ]}>
          <Text style={[styles.rarityBadgeText, !isUnlocked && { opacity: 0.5 }]}>
            {collectible.rarity.toUpperCase()}
          </Text>
        </View>
        
        <Text style={[styles.image, !isUnlocked && styles.locked]}>
          {collectible.image}
        </Text>
        
        <View style={styles.info}>
          <Text style={[styles.name, !isUnlocked && styles.lockedText]}>
            {isUnlocked ? collectible.name : '???'}
          </Text>
        </View>
        
        {!isUnlocked && (
          <View style={styles.lockBadge}>
            <Text style={styles.lockText}>🔒 {collectible.unlockThreshold} credits</Text>
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: 16,
  },
  card: {
    borderRadius: 20,
    padding: 16,
    aspectRatio: 0.75,
    justifyContent: 'space-between',
  },
  image: {
    fontSize: 64,
    textAlign: 'center',
  },
  locked: {
    opacity: 0.3,
  },
  rarityBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  rarityBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: 0.5,
  },
  info: {
    gap: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
  },
  lockedText: {
    color: Colors.textTertiary,
  },
  lockBadge: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  lockText: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
    fontWeight: '600',
  },
});

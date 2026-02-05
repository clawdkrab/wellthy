import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStore } from '../store/useStore';
import { COLLECTIBLES, getNextUnlockable } from '../constants/collectibles';
import { Colors } from '../constants/colors';
import { Card } from '../components/Card';
import { CollectibleCard } from '../components/CollectibleCard';

const CollectScreen = () => {
  const { profile } = useStore();
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');
  
  const filteredCollectibles = COLLECTIBLES.filter(collectible => {
    const isUnlocked = profile.unlockedCollectibles.includes(collectible.id);
    
    if (filter === 'unlocked') return isUnlocked;
    if (filter === 'locked') return !isUnlocked;
    return true;
  });
  
  const nextUnlock = getNextUnlockable(
    profile.totalCredits,
    profile.unlockedCollectibles
  );
  
  const unlockedCount = profile.unlockedCollectibles.length;
  const totalCount = COLLECTIBLES.length;
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Stats */}
        <Card style={styles.headerCard}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.collectionLabel}>Your Collection</Text>
              <Text style={styles.collectionCount}>
                {unlockedCount} / {totalCount}
              </Text>
            </View>
            
            <View style={styles.creditsBox}>
              <Text style={styles.creditsLabel}>Credits</Text>
              <Text style={styles.creditsValue}>{profile.totalCredits}</Text>
            </View>
          </View>
          
          {nextUnlock && (
            <View style={styles.nextUnlockSection}>
              <Text style={styles.nextUnlockLabel}>Next unlock</Text>
              <View style={styles.nextUnlockRow}>
                <Text style={styles.nextUnlockName}>{nextUnlock.name}</Text>
                <Text style={styles.nextUnlockCredits}>
                  {nextUnlock.unlockThreshold - profile.totalCredits} credits away
                </Text>
              </View>
            </View>
          )}
        </Card>
        
        {/* Filter Tabs */}
        <View style={styles.filterRow}>
          {['all', 'unlocked', 'locked'].map(filterOption => (
            <Text
              key={filterOption}
              style={[
                styles.filterTab,
                filter === filterOption && styles.filterTabActive,
              ]}
              onPress={() => setFilter(filterOption as typeof filter)}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </Text>
          ))}
        </View>
        
        {/* Collectibles Grid */}
        <View style={styles.grid}>
          {filteredCollectibles.map(collectible => (
            <CollectibleCard
              key={collectible.id}
              collectible={collectible}
              isUnlocked={profile.unlockedCollectibles.includes(collectible.id)}
            />
          ))}
        </View>
        
        {/* Empty State */}
        {filteredCollectibles.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🎁</Text>
            <Text style={styles.emptyText}>
              {filter === 'unlocked'
                ? 'Keep moving to unlock collectibles'
                : 'All collectibles unlocked! 🎉'}
            </Text>
          </View>
        )}
        
        {/* Info Section */}
        <Card style={styles.infoCard}>
          <Text style={styles.infoTitle}>About Collectibles</Text>
          <Text style={styles.infoText}>
            Collectibles are unlocked as you earn credits through consistent movement. Each has a unique design and rarity tier.
          </Text>
          <View style={styles.rarityList}>
            <View style={styles.rarityRow}>
              <View style={[styles.rarityDot, { backgroundColor: Colors.common }]} />
              <Text style={styles.rarityName}>Common</Text>
            </View>
            <View style={styles.rarityRow}>
              <View style={[styles.rarityDot, { backgroundColor: Colors.rare }]} />
              <Text style={styles.rarityName}>Rare</Text>
            </View>
            <View style={styles.rarityRow}>
              <View style={[styles.rarityDot, { backgroundColor: Colors.epic }]} />
              <Text style={styles.rarityName}>Epic</Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 20,
    gap: 20,
  },
  headerCard: {
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  collectionLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  collectionCount: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.ctaBright,
    marginTop: 4,
  },
  creditsBox: {
    alignItems: 'flex-end',
  },
  creditsLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  creditsValue: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.success,
    marginTop: 2,
  },
  nextUnlockSection: {
    backgroundColor: Colors.surfaceLight,
    borderRadius: 12,
    padding: 12,
    gap: 6,
  },
  nextUnlockLabel: {
    fontSize: 12,
    color: Colors.textTertiary,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  nextUnlockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextUnlockName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
  },
  nextUnlockCredits: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
  },
  filterTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
  },
  filterTabActive: {
    backgroundColor: Colors.ctaBright,
    color: '#1A1A1A',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
    gap: 12,
  },
  emptyEmoji: {
    fontSize: 64,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  infoCard: {
    gap: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },
  infoText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  rarityList: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 8,
  },
  rarityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rarityDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  rarityName: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '600',
  },
});

export default CollectScreen;

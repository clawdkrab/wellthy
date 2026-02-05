import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStore } from '../store/useStore';
import { requestHealthKitPermissions } from '../services/health';
import { Colors } from '../constants/colors';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const ProfileScreen = () => {
  const { profile, setSubscription } = useStore();
  
  const handleSubscribe = (tier: 'monthly' | 'yearly') => {
    // V1: Mock subscription flow
    // Production: Integrate with App Store in-app purchases
    Alert.alert(
      'Subscription',
      `Subscribe ${tier}? (This is a demo - no payment processed)`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Subscribe',
          onPress: () => {
            setSubscription(tier);
            Alert.alert('Success', 'Subscription activated! 🎉');
          },
        },
      ]
    );
  };
  
  const handleHealthPermissions = async () => {
    const granted = await requestHealthKitPermissions();
    Alert.alert(
      granted ? 'Permissions Granted' : 'Permissions Denied',
      granted
        ? 'Wellthy can now read your health data'
        : 'Please enable permissions in Settings to track your movement'
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Stats Summary */}
        <Card style={styles.statsCard}>
          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{profile.streak}</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </View>
            
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{profile.totalCredits}</Text>
              <Text style={styles.statLabel}>Total Credits</Text>
            </View>
            
            <View style={styles.statBox}>
              <Text style={styles.statValue}>
                {profile.unlockedCollectibles.length}
              </Text>
              <Text style={styles.statLabel}>Collectibles</Text>
            </View>
          </View>
        </Card>
        
        {/* Subscription Card */}
        {!profile.isSubscriber ? (
          <Card style={styles.subscriptionCard}>
            <Text style={styles.subscriptionTitle}>✨ Upgrade to Premium</Text>
            <Text style={styles.subscriptionText}>
              Get 1.5x credit multiplier, faster unlocks, and streak forgiveness
            </Text>
            
            <View style={styles.subscriptionOptions}>
              <TouchableOpacity
                style={styles.subscriptionOption}
                onPress={() => handleSubscribe('monthly')}
              >
                <Text style={styles.subscriptionTier}>Monthly</Text>
                <Text style={styles.subscriptionPrice}>$4.99/mo</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.subscriptionOption, styles.subscriptionBest]}
                onPress={() => handleSubscribe('yearly')}
              >
                <View style={styles.bestBadge}>
                  <Text style={styles.bestBadgeText}>BEST VALUE</Text>
                </View>
                <Text style={styles.subscriptionTier}>Yearly</Text>
                <Text style={styles.subscriptionPrice}>$39.99/yr</Text>
                <Text style={styles.subscriptionSavings}>Save 33%</Text>
              </TouchableOpacity>
            </View>
          </Card>
        ) : (
          <Card style={styles.subscriberCard}>
            <Text style={styles.subscriberEmoji}>⭐</Text>
            <Text style={styles.subscriberTitle}>Premium Member</Text>
            <Text style={styles.subscriberText}>
              You're getting 1.5x credits and exclusive benefits
            </Text>
          </Card>
        )}
        
        {/* Settings */}
        <Card style={styles.settingsCard}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          <TouchableOpacity
            style={styles.settingRow}
            onPress={handleHealthPermissions}
          >
            <Text style={styles.settingLabel}>Apple Health Permissions</Text>
            <Text style={styles.settingChevron}>›</Text>
          </TouchableOpacity>
          
          <View style={styles.divider} />
          
          <TouchableOpacity
            style={styles.settingRow}
            onPress={() => Alert.alert('Privacy', 'Opens privacy policy')}
          >
            <Text style={styles.settingLabel}>Privacy Policy</Text>
            <Text style={styles.settingChevron}>›</Text>
          </TouchableOpacity>
          
          <View style={styles.divider} />
          
          <TouchableOpacity
            style={styles.settingRow}
            onPress={() => Alert.alert('Support', 'Opens support page')}
          >
            <Text style={styles.settingLabel}>Help & Support</Text>
            <Text style={styles.settingChevron}>›</Text>
          </TouchableOpacity>
        </Card>
        
        {/* Privacy Assurance */}
        <Card style={styles.privacyCard}>
          <Text style={styles.privacyTitle}>🔒 Your Data is Safe</Text>
          <Text style={styles.privacyText}>
            • All data stored locally on your device{'\n'}
            • Read-only access to Apple Health{'\n'}
            • No tracking or third-party sharing{'\n'}
            • No crypto or financial risk
          </Text>
        </Card>
        
        <Text style={styles.version}>Wellthy v1.0.0</Text>
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
  statsCard: {},
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: Colors.surfaceLight,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '600',
    textAlign: 'center',
  },
  subscriptionCard: {
    gap: 16,
  },
  subscriptionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    textAlign: 'center',
  },
  subscriptionText: {
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 21,
  },
  subscriptionOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  subscriptionOption: {
    flex: 1,
    backgroundColor: Colors.surfaceLight,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    gap: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  subscriptionBest: {
    borderColor: Colors.primary,
  },
  bestBadge: {
    position: 'absolute',
    top: -8,
    backgroundColor: Colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  bestBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.text,
  },
  subscriptionTier: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginTop: 12,
  },
  subscriptionPrice: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.primary,
  },
  subscriptionSavings: {
    fontSize: 12,
    color: Colors.success,
    fontWeight: '600',
  },
  subscriberCard: {
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.primary,
  },
  subscriberEmoji: {
    fontSize: 48,
  },
  subscriberTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.text,
  },
  subscriberText: {
    fontSize: 15,
    color: Colors.text,
    textAlign: 'center',
    opacity: 0.9,
  },
  settingsCard: {
    gap: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  settingLabel: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: '500',
  },
  settingChevron: {
    fontSize: 20,
    color: Colors.textTertiary,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.surfaceLight,
  },
  privacyCard: {
    gap: 12,
  },
  privacyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
  },
  privacyText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  version: {
    fontSize: 12,
    color: Colors.textTertiary,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default ProfileScreen;

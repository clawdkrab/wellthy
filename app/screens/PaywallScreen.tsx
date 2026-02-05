import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components/Button';
import { Colors } from '../constants/colors';
import { useStore } from '../store/useStore';

interface PaywallScreenProps {
  onContinueFree: () => void;
}

export const PaywallScreen: React.FC<PaywallScreenProps> = ({ onContinueFree }) => {
  const { setSubscription, dismissPaywall } = useStore();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleSubscribe = async (tier: 'monthly' | 'yearly') => {
    setIsProcessing(true);
    
    try {
      // TODO: Implement actual Apple IAP here
      // For now, simulate subscription
      Alert.alert(
        'Subscription',
        `${tier === 'monthly' ? 'Monthly' : 'Yearly'} subscription would be processed here via Apple IAP`,
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Subscribe',
            onPress: () => {
              setSubscription(tier);
              onContinueFree();
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        'Subscription Error',
        'Unable to process subscription. Please try again.',
        [
          { text: 'Try Again', onPress: () => handleSubscribe(tier) },
          { text: 'Continue Free', onPress: onContinueFree },
        ]
      );
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleContinueFree = () => {
    dismissPaywall();
    onContinueFree();
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headline}>Go further with Wellthy+</Text>
          <Text style={styles.subheadline}>Optional upgrades for deeper progress and faster rewards.</Text>
        </View>
        
        {/* Value Stack */}
        <View style={styles.valueStack}>
          <View style={styles.valueItem}>
            <View style={styles.valueIcon}>
              <Text style={styles.iconText}>⚡</Text>
            </View>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Earn credits faster</Text>
              <Text style={styles.valueDescription}>Higher multipliers for consistent days.</Text>
            </View>
          </View>
          
          <View style={styles.valueItem}>
            <View style={styles.valueIcon}>
              <Text style={styles.iconText}>👟</Text>
            </View>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Unlock collectibles sooner</Text>
              <Text style={styles.valueDescription}>Access rarer items and drops.</Text>
            </View>
          </View>
          
          <View style={styles.valueItem}>
            <View style={styles.valueIcon}>
              <Text style={styles.iconText}>🛡️</Text>
            </View>
            <View style={styles.valueContent}>
              <Text style={styles.valueTitle}>Streak forgiveness</Text>
              <Text style={styles.valueDescription}>Miss one day without losing progress.</Text>
            </View>
          </View>
        </View>
        
        {/* Pricing */}
        <View style={styles.pricingContainer}>
          <View style={styles.pricingCard}>
            <View style={styles.pricingHeader}>
              <Text style={styles.pricingTitle}>Monthly</Text>
            </View>
            <Text style={styles.pricingPrice}>$9.99/month</Text>
            <Button
              title="Start Monthly"
              onPress={() => handleSubscribe('monthly')}
              variant="primary"
              disabled={isProcessing}
            />
          </View>
          
          <LinearGradient
            colors={Colors.gradientGold}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.pricingCardHighlight}
          >
            <View style={styles.bestValueBadge}>
              <Text style={styles.bestValueText}>Best Value</Text>
            </View>
            <View style={styles.pricingHeader}>
              <Text style={styles.pricingTitle}>Yearly</Text>
            </View>
            <Text style={styles.pricingPrice}>$79.99/year</Text>
            <Text style={styles.pricingSavings}>Save $40</Text>
            <Button
              title="Start Yearly"
              onPress={() => handleSubscribe('yearly')}
              variant="secondary"
              disabled={isProcessing}
            />
          </LinearGradient>
        </View>
        
        {/* Continue Free Button */}
        <View style={styles.continueContainer}>
          <Button
            title="Continue free"
            onPress={handleContinueFree}
            variant="tertiary"
            disabled={isProcessing}
          />
        </View>
        
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Cancel anytime.</Text>
          <Text style={styles.footerText}>No commitments.</Text>
          <Text style={styles.footerText}>Your data stays private.</Text>
        </View>
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
    padding: 24,
    gap: 32,
  },
  header: {
    gap: 12,
    alignItems: 'center',
    paddingTop: 20,
  },
  headline: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
    textAlign: 'center',
  },
  subheadline: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  valueStack: {
    gap: 20,
  },
  valueItem: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
  },
  valueIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
  },
  valueContent: {
    flex: 1,
    gap: 4,
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },
  valueDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  pricingContainer: {
    gap: 16,
  },
  pricingCard: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 24,
    gap: 16,
  },
  pricingCardHighlight: {
    borderRadius: 20,
    padding: 24,
    gap: 16,
    position: 'relative',
  },
  bestValueBadge: {
    position: 'absolute',
    top: -12,
    left: '50%',
    transform: [{ translateX: -50 }],
    backgroundColor: Colors.accentYellow,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
  },
  bestValueText: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.background,
  },
  pricingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pricingTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
  },
  pricingPrice: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
  },
  pricingSavings: {
    fontSize: 14,
    color: Colors.background,
    fontWeight: '600',
    opacity: 0.8,
  },
  continueContainer: {
    paddingVertical: 8,
  },
  footer: {
    gap: 8,
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 13,
    color: Colors.textTertiary,
  },
});

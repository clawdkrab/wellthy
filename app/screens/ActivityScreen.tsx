import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStore } from '../store/useStore';
import { formatLastSynced } from '../services/health';
import { Colors } from '../constants/colors';
import { Card } from '../components/Card';
import { StatDisplay } from '../components/StatDisplay';

const ActivityScreen = () => {
  const { healthData, todayActivity } = useStore();
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.intro}>
          Your movement is tracked automatically via Apple Health.
        </Text>
        
        {/* Today's Movement */}
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Today's Movement</Text>
          
          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>
                {healthData?.steps.toLocaleString() || 0}
              </Text>
              <Text style={styles.statLabel}>Steps</Text>
            </View>
            
            <View style={styles.statBox}>
              <Text style={styles.statValue}>
                {healthData?.activeMinutes || 0}
              </Text>
              <Text style={styles.statLabel}>Active Minutes</Text>
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.creditsSection}>
            <Text style={styles.creditsEarned}>
              {todayActivity?.creditsEarned || 0} credits earned today
            </Text>
            <Text style={styles.creditsHint}>
              {todayActivity?.creditsEarned === 0
                ? 'Move more to earn credits'
                : 'Come back tomorrow for more'}
            </Text>
          </View>
        </Card>
        
        {/* How It Works */}
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>How Credits Work</Text>
          
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <Text style={styles.infoBullet}>•</Text>
              <Text style={styles.infoText}>
                <Text style={styles.infoBold}>Daily movement:</Text> +10 credits
              </Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoBullet}>•</Text>
              <Text style={styles.infoText}>
                <Text style={styles.infoBold}>Streak bonus:</Text> +5 credits/day
              </Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoBullet}>•</Text>
              <Text style={styles.infoText}>
                <Text style={styles.infoBold}>Subscribers:</Text> 1.5x multiplier
              </Text>
            </View>
          </View>
          
          <Text style={styles.infoNote}>
            Credits unlock collectibles and show your progress.
          </Text>
        </Card>
        
        {/* Last Synced */}
        {healthData && (
          <View style={styles.syncInfo}>
            <Text style={styles.syncText}>
              Last synced: {formatLastSynced(healthData.lastSynced)}
            </Text>
            <Text style={styles.syncHint}>
              Data refreshes automatically when you open the app
            </Text>
          </View>
        )}
        
        {/* Privacy Note */}
        <Card style={styles.privacyCard}>
          <Text style={styles.privacyTitle}>🔒 Privacy First</Text>
          <Text style={styles.privacyText}>
            Wellthy only <Text style={styles.privacyBold}>reads</Text> your step count and active minutes from Apple Health. We never write data or share it with third parties.
          </Text>
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
  intro: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  card: {
    gap: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: Colors.surfaceLight,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.ctaBright,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.surfaceLight,
  },
  creditsSection: {
    alignItems: 'center',
    gap: 4,
  },
  creditsEarned: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.success,
  },
  creditsHint: {
    fontSize: 14,
    color: Colors.textTertiary,
  },
  infoSection: {
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },
  infoBullet: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '700',
  },
  infoText: {
    fontSize: 15,
    color: Colors.textSecondary,
    flex: 1,
    lineHeight: 20,
  },
  infoBold: {
    fontWeight: '700',
    color: Colors.text,
  },
  infoNote: {
    fontSize: 13,
    color: Colors.textTertiary,
    fontStyle: 'italic',
    marginTop: 4,
  },
  syncInfo: {
    alignItems: 'center',
    gap: 4,
  },
  syncText: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  syncHint: {
    fontSize: 12,
    color: Colors.textTertiary,
  },
  privacyCard: {
    backgroundColor: Colors.surfaceLight,
  },
  privacyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  privacyText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  privacyBold: {
    fontWeight: '700',
    color: Colors.text,
  },
});

export default ActivityScreen;

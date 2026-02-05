import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useStore } from '../store/useStore';
import { fetchTodayActivity } from '../services/health';
import { Colors } from '../constants/colors';
import { Card } from '../components/Card';
import { StatDisplay } from '../components/StatDisplay';
import { Button } from '../components/Button';

const HomeScreen = () => {
  const { profile, todayActivity, healthData, updateHealthData } = useStore();
  
  useEffect(() => {
    loadHealthData();
  }, []);
  
  const loadHealthData = async () => {
    const data = await fetchTodayActivity();
    updateHealthData(data);
  };
  
  const getMotivationalMessage = () => {
    if (!todayActivity) return "Let's get moving today";
    
    if (todayActivity.creditsEarned === 0) {
      return "Every step counts";
    }
    
    if (profile.streak >= 7) {
      return "🔥 You're on fire!";
    }
    
    if (profile.streak >= 3) {
      return "Keep the momentum going";
    }
    
    return "You're on track";
  };
  
  const hasMovedToday = todayActivity && todayActivity.creditsEarned > 0;
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Wellthy</Text>
          <Text style={styles.tagline}>Wellness that pays</Text>
        </View>
        
        {/* Main Status Card */}
        <LinearGradient
          colors={hasMovedToday ? Colors.gradientSuccess : Colors.gradientCTA}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroMessage}>{getMotivationalMessage()}</Text>
            
            <View style={styles.streakBadge}>
              <Text style={styles.streakEmoji}>🔥</Text>
              <Text style={styles.streakNumber}>{profile.streak}</Text>
              <Text style={styles.streakLabel}>day streak</Text>
            </View>
          </View>
        </LinearGradient>
        
        {/* Today's Stats */}
        <Card style={styles.statsCard}>
          <Text style={styles.sectionTitle}>Today</Text>
          
          <View style={styles.statsRow}>
            <StatDisplay
              label="Credits"
              value={todayActivity?.creditsEarned || 0}
              accent="success"
            />
            <StatDisplay
              label="Steps"
              value={healthData?.steps.toLocaleString() || 0}
              accent="common"
            />
            <StatDisplay
              label="Active Min"
              value={healthData?.activeMinutes || 0}
              accent="rare"
            />
          </View>
        </Card>
        
        {/* Total Credits */}
        <Card style={styles.creditsCard}>
          <View style={styles.creditsRow}>
            <View>
              <Text style={styles.creditsLabel}>Total Credits</Text>
              <Text style={styles.creditsValue}>{profile.totalCredits}</Text>
            </View>
            <TouchableOpacity onPress={loadHealthData}>
              <Text style={styles.refreshButton}>🔄 Sync</Text>
            </TouchableOpacity>
          </View>
          
          {healthData && (
            <Text style={styles.lastSynced}>
              Last synced: {healthData.lastSynced.toLocaleTimeString()}
            </Text>
          )}
        </Card>
        
        {/* CTA */}
        {!hasMovedToday && (
          <View style={styles.ctaContainer}>
            <Text style={styles.ctaText}>
              Get moving to earn credits and keep your streak alive
            </Text>
            <Button
              title="Sync Activity"
              onPress={loadHealthData}
              variant="primary"
            />
          </View>
        )}
        
        {hasMovedToday && (
          <View style={styles.ctaContainer}>
            <Text style={styles.successText}>
              ✅ Great work today! Come back tomorrow to keep your streak going.
            </Text>
          </View>
        )}
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
  header: {
    marginTop: 20,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
  },
  tagline: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  heroCard: {
    borderRadius: 24,
    padding: 32,
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    alignItems: 'center',
    gap: 24,
  },
  heroMessage: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
  },
  streakBadge: {
    alignItems: 'center',
  },
  streakEmoji: {
    fontSize: 48,
  },
  streakNumber: {
    fontSize: 48,
    fontWeight: '900',
    color: Colors.text,
  },
  streakLabel: {
    fontSize: 16,
    color: Colors.text,
    opacity: 0.8,
    fontWeight: '600',
  },
  statsCard: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  creditsCard: {
    gap: 12,
  },
  creditsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditsLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  creditsValue: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.ctaBright,
    marginTop: 4,
  },
  refreshButton: {
    fontSize: 16,
    color: Colors.ctaBright,
    fontWeight: '600',
  },
  lastSynced: {
    fontSize: 12,
    color: Colors.textTertiary,
  },
  ctaContainer: {
    gap: 12,
  },
  ctaText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  successText: {
    fontSize: 16,
    color: Colors.success,
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '600',
  },
});

export default HomeScreen;

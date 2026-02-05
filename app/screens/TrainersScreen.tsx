import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TRAINERS } from '../constants/trainers';
import { Colors } from '../constants/colors';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const TrainersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Train with Real People</Text>
          <Text style={styles.headerSubtitle}>
            Connect with curated trainers who make fitness personal
          </Text>
        </View>
        
        {/* Trainers List */}
        {TRAINERS.map(trainer => (
          <Card key={trainer.id} style={styles.trainerCard}>
            <View style={styles.trainerHeader}>
              <Text style={styles.trainerPhoto}>{trainer.photo}</Text>
              <View style={styles.trainerInfo}>
                <Text style={styles.trainerName}>{trainer.name}</Text>
                <View style={styles.specialtiesRow}>
                  {trainer.specialties.slice(0, 2).map(specialty => (
                    <View key={specialty} style={styles.specialtyBadge}>
                      <Text style={styles.specialtyText}>{specialty}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
            
            <Text style={styles.trainerBio}>{trainer.bio}</Text>
            
            <View style={styles.classTypesRow}>
              <Text style={styles.classTypesLabel}>Offers:</Text>
              {trainer.classTypes.map(classType => (
                <Text key={classType} style={styles.classType}>
                  • {classType}
                </Text>
              ))}
            </View>
            
            <Button
              title={`Connect with ${trainer.name.split(' ')[0]}`}
              onPress={() => {
                // V1: No booking functionality yet
                // Future: Open trainer detail page with booking
                console.log('Trainer interest:', trainer.id);
              }}
              variant="primary"
              size="medium"
            />
          </Card>
        ))}
        
        {/* Join as Trainer CTA */}
        <Card style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Are you a trainer?</Text>
          <Text style={styles.ctaText}>
            Join Wellthy to connect with people who value consistency over intensity.
          </Text>
          <Button
            title="Join as Trainer"
            onPress={() => {
              // V1: Link to website form or email
              console.log('Trainer signup interest');
            }}
            variant="outline"
          />
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
  header: {
    gap: 8,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  trainerCard: {
    gap: 16,
  },
  trainerHeader: {
    flexDirection: 'row',
    gap: 16,
  },
  trainerPhoto: {
    fontSize: 48,
    width: 64,
    height: 64,
    textAlign: 'center',
    backgroundColor: Colors.surfaceLight,
    borderRadius: 32,
    lineHeight: 64,
  },
  trainerInfo: {
    flex: 1,
    gap: 8,
  },
  trainerName: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
  },
  specialtiesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  specialtyBadge: {
    backgroundColor: Colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  specialtyText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text,
  },
  trainerBio: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 21,
  },
  classTypesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center',
  },
  classTypesLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textTertiary,
  },
  classType: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  ctaCard: {
    backgroundColor: Colors.surfaceLight,
    gap: 12,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
  },
  ctaText: {
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 21,
  },
});

export default TrainersScreen;

import { Trainer } from '../types';

// V1 trainers - static profiles only
// No booking/payment in v1

export const TRAINERS: Trainer[] = [
  {
    id: 'sarah-jones',
    name: 'Sarah Jones',
    photo: '👩‍🦰', // Placeholder - replace with actual photos
    bio: 'HIIT specialist helping busy professionals stay consistent. 10+ years experience.',
    specialties: ['HIIT', 'Strength', 'Mobility'],
    classTypes: ['1-on-1', 'Online'],
  },
  {
    id: 'marcus-lee',
    name: 'Marcus Lee',
    photo: '👨‍🦱',
    bio: 'Yoga & mindfulness coach. Movement is medicine, not punishment.',
    specialties: ['Yoga', 'Meditation', 'Breathwork'],
    classTypes: ['Group', 'Online', 'Workshops'],
  },
  {
    id: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    photo: '👩‍🦳',
    bio: 'Running coach & nutrition advisor. Let's build sustainable habits together.',
    specialties: ['Running', 'Nutrition', 'Endurance'],
    classTypes: ['1-on-1', 'Group'],
  },
  {
    id: 'james-okonkwo',
    name: 'James Okonkwo',
    photo: '👨‍🦲',
    bio: 'Strength & conditioning for all levels. Consistency beats intensity.',
    specialties: ['Strength', 'Powerlifting', 'Recovery'],
    classTypes: ['1-on-1', 'Online'],
  },
  {
    id: 'lily-chen',
    name: 'Lily Chen',
    photo: '👩',
    bio: 'Dance fitness & joyful movement. Make fitness feel like play, not work.',
    specialties: ['Dance', 'Cardio', 'Group Classes'],
    classTypes: ['Group', 'Online', 'Events'],
  },
];

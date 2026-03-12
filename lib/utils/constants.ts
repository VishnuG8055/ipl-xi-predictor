// lib/utils/constants.ts — App-wide constants including IPL team data and navigation links

import { Team } from '../types';

export const IPL_TEAMS: Team[] = [
  {
    id: 'csk',
    name: 'Chennai Super Kings',
    shortName: 'CSK',
    city: 'Chennai',
    primaryColor: '#FFCB05',
    secondaryColor: '#0081E9',
    glowColor: 'rgba(255, 203, 5, 0.4)',
  },
  {
    id: 'mi',
    name: 'Mumbai Indians',
    shortName: 'MI',
    city: 'Mumbai',
    primaryColor: '#004BA0',
    secondaryColor: '#D1AB3E',
    glowColor: 'rgba(0, 75, 160, 0.4)',
  },
  {
    id: 'rcb',
    name: 'Royal Challengers Bengaluru',
    shortName: 'RCB',
    city: 'Bengaluru',
    primaryColor: '#EC1C24',
    secondaryColor: '#000000',
    glowColor: 'rgba(236, 28, 36, 0.4)',
  },
  {
    id: 'kkr',
    name: 'Kolkata Knight Riders',
    shortName: 'KKR',
    city: 'Kolkata',
    primaryColor: '#3A225D',
    secondaryColor: '#F4C300',
    glowColor: 'rgba(58, 34, 93, 0.6)',
  },
  {
    id: 'dc',
    name: 'Delhi Capitals',
    shortName: 'DC',
    city: 'Delhi',
    primaryColor: '#004C93',
    secondaryColor: '#EF1C25',
    glowColor: 'rgba(0, 76, 147, 0.4)',
  },
  {
    id: 'pbks',
    name: 'Punjab Kings',
    shortName: 'PBKS',
    city: 'Mohali',
    primaryColor: '#ED1B24',
    secondaryColor: '#A7A9AC',
    glowColor: 'rgba(237, 27, 36, 0.4)',
  },
  {
    id: 'rr',
    name: 'Rajasthan Royals',
    shortName: 'RR',
    city: 'Jaipur',
    primaryColor: '#EA1A85',
    secondaryColor: '#254AA5',
    glowColor: 'rgba(234, 26, 133, 0.4)',
  },
  {
    id: 'srh',
    name: 'Sunrisers Hyderabad',
    shortName: 'SRH',
    city: 'Hyderabad',
    primaryColor: '#FF822A',
    secondaryColor: '#000000',
    glowColor: 'rgba(255, 130, 42, 0.4)',
  },
  {
    id: 'gt',
    name: 'Gujarat Titans',
    shortName: 'GT',
    city: 'Ahmedabad',
    primaryColor: '#1B2133',
    secondaryColor: '#A0E3F0',
    glowColor: 'rgba(160, 227, 240, 0.3)',
  },
  {
    id: 'lsg',
    name: 'Lucknow Super Giants',
    shortName: 'LSG',
    city: 'Lucknow',
    primaryColor: '#A72056',
    secondaryColor: '#FFFF00',
    glowColor: 'rgba(167, 32, 86, 0.4)',
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/community', label: 'Community' },
  { href: '/leaderboard', label: 'Leaderboard' },
];

export const MOBILE_NAV_LINKS = [
  { href: '/', label: 'Home', icon: 'Home' },
  { href: '/schedule', label: 'Schedule', icon: 'Calendar' },
  { href: '/predict', label: 'Predict', icon: 'Target' },
  { href: '/leaderboard', label: 'Leaderboard', icon: 'Trophy' },
  { href: '/profile', label: 'Profile', icon: 'User' },
];

export const APP_NAME = 'IPL XI Predictor';
export const APP_DESCRIPTION = 'Build your dream IPL XI, predict match winners, and compete with fans worldwide';

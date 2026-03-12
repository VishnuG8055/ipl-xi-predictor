// lib/utils/format.ts — Utility functions for formatting dates, numbers, and time

import { format, formatDistance, isValid } from 'date-fns';

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (!isValid(date)) return 'Invalid Date';
  return format(date, 'MMMM d, yyyy');
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  if (!isValid(date)) return 'Invalid Date';
  return format(date, "MMMM d, yyyy 'at' h:mm a");
}

export function formatNumber(num: number): string {
  return num.toLocaleString('en-IN');
}

export function timeUntil(dateString: string): string {
  const date = new Date(dateString);
  if (!isValid(date)) return '';
  return formatDistance(date, new Date(), { addSuffix: true });
}

export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  if (!isValid(date)) return '';
  return format(date, 'MMM d');
}

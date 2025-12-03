import { DayMetadata } from './types';

/**
 * Registry of all available solutions
 * Add new solutions here as they are completed
 */
export const solutions: DayMetadata[] = [
  // Example:
  // {
  //   day: 1,
  //   title: "Challenge Title",
  //   year: 2025,
  //   solution: await import('./day01').then(m => m.default),
  // },
];

/**
 * Get solution for a specific day
 */
export const getSolution = (day: number): DayMetadata | undefined => {
  return solutions.find(s => s.day === day);
};

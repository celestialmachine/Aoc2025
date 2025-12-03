/**
 * Interface for Advent of Code solution functions
 */
export interface Solution {
  /** Solution for part 1 of the challenge */
  part1: (input: string) => string | number;
  /** Solution for part 2 of the challenge */
  part2: (input: string) => string | number;
}

/**
 * Metadata for each day's challenge
 */
export interface DayMetadata {
  day: number;
  title: string;
  year: number;
  solution?: Solution;
}

# Solutions

This directory contains the solutions for each day of Advent of Code 2025.

## Structure

Each day's solution should be in a file named `day{XX}.ts` where XX is the zero-padded day number (01-25).

## Template

```typescript
import { Solution } from './types';

const solution: Solution = {
  part1: (input: string): string | number => {
    // Your solution for part 1
    return 0;
  },
  
  part2: (input: string): string | number => {
    // Your solution for part 2
    return 0;
  },
};

export default solution;
```

## Adding a New Solution

1. Create a new file `src/solutions/day{XX}.ts`
2. Implement both `part1` and `part2` functions
3. Export the solution as default
4. Add the day to the solutions registry in `index.ts`

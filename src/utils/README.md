# Utilities

This directory contains utility functions and helpers that can be reused across different solutions.

## Common Utilities

You might want to add utilities for:

- Parsing input (lines, numbers, grids, etc.)
- Graph algorithms (BFS, DFS, Dijkstra, etc.)
- Mathematical operations (GCD, LCM, modular arithmetic, etc.)
- Data structure helpers (priority queues, disjoint sets, etc.)
- String manipulation helpers

## Example

```typescript
/**
 * Parse input string into array of lines
 */
export const parseLines = (input: string): string[] => {
  return input.trim().split('\n');
};

/**
 * Parse input string into array of numbers
 */
export const parseNumbers = (input: string): number[] => {
  return input.trim().split('\n').map(Number);
};
```

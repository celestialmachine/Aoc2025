# Advent of Code 2025

My solutions to [Advent of Code 2025](https://adventofcode.com/2025) challenges, built with TypeScript and React.

## About

Advent of Code is an annual series of programming challenges that run from December 1st through December 25th. This repository contains my solutions implemented in TypeScript, with a React-based web interface to showcase and interact with the solutions.

## Technologies

- **TypeScript** - For writing type-safe solution code
- **React** - For building the interactive UI
- **Vite** - For fast development and building

## Project Structure

```
├── src/
│   ├── solutions/     # Daily challenge solutions
│   ├── components/    # React components
│   ├── utils/         # Shared utility functions
│   ├── App.tsx        # Main React application
│   └── main.tsx       # Application entry point
├── index.html         # HTML template
└── package.json       # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the application.

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Type Checking

```bash
# Run TypeScript type checking
npm run lint
```

## Adding Solutions

1. Create a new solution file in `src/solutions/` (e.g., `day01.ts`)
2. Implement the `Solution` interface with `part1` and `part2` functions
3. Register the solution in `src/solutions/index.ts`

See `src/solutions/README.md` for more details and a template.

## License

This project is open source and available under the ISC License.

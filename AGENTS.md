# Repository Guidelines

## Project Structure & Module Organization

Source lives in `src/`, with `src/main.ts` handling the Vite entry point and `src/main.test.ts` mirroring features with Vitest specs. Production bundles land in `dist/` after builds, and coverage artifacts collect in `coverage/`. Static scaffolding stays at the root (`index.html`, `tsconfig.json`, `package.json`), so keep shared assets there to simplify Vite’s default resolution.

## Build, Test, and Development Commands

- `npm start`: launches Vite’s dev server with live reload on `localhost:5173`.
- `npm run build`: runs the Wireit `build` target, invoking `vite build` and refreshing `dist/`.
- `npm run test`: meta target that chains `test:format`, `test:spec`, and `test:types`.
- `npm run fix`: Prettier write pass for Markdown, HTML, and TypeScript sources.
  Wireit caches inputs, so stick to these scripts instead of calling underlying tools directly.

## Coding Style & Naming Conventions

TypeScript uses ES modules and 2-space indentation (Prettier default). Prefer descriptive PascalCase for exported classes/components and camelCase for functions, variables, and file-local helpers; keep filenames lowercase with hyphens (`hex-grid.ts`). Imports are auto-sorted via `prettier-plugin-organize-imports`, so rely on `npm run fix` rather than manual grouping.

## Testing Guidelines

Vitest drives specs (`*.test.ts`) and coverage, with the config forcing 100% thresholds through `vitest run --coverage --coverage.thresholds.100`. Place scenario-focused helpers near the tests that use them. Type safety is enforced via `npm run test:types` (tsc) and formatting via `npm run test:format`. CI mirrors `npm run test`, so ensure it passes locally before opening a PR.

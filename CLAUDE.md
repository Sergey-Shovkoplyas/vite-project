# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Type-check and build for production (tsc -b && vite build)
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

No test runner is configured in this project.

## Architecture

This is a standard Vite + React + TypeScript scaffold. Entry point is `src/main.tsx`, which mounts `src/App.tsx` into `index.html`.

- `src/` — all application source (TypeScript strict mode, `noUnusedLocals`, `noUnusedParameters` enforced)
- ESLint is configured with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`
- `@vitejs/plugin-react` uses Babel for Fast Refresh

TypeScript uses two configs: `tsconfig.app.json` (src files, bundler mode) and `tsconfig.node.json` (vite config).

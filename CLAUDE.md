# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Vite, http://localhost:5173)
- `npm run build` — Type-check with `tsc -b` then Vite production build
- `npm run lint` — ESLint across all TS/TSX files
- `npm run preview` — Serve the production build locally

## Architecture

Single-page React 19 landing page for the N7 banking platform, built from a Figma design. No routing, no state management library, no external UI libraries — all components are hand-crafted.

**Stack:** React 19 + TypeScript + Vite 8 + Tailwind CSS 4 (via `@tailwindcss/vite` plugin)

### Page layout (top to bottom)

`App.tsx` composes all sections in order: Navbar → Hero → Solutions → CloudBanking → Stats → CtaBanner → Marquee → DigitalBanking → CtaBanner → CaseStudies → CtaBanner → Footer. `CtaBanner` is reused with `variant` and `brand` props.

### Styling approach

- Tailwind v4 with `@theme inline` design tokens defined in `src/index.css` (custom colors, fonts)
- Utility classes: `.gradient-primary`, `.gradient-text`, `.glass-card`, `.glass-card-light`, `.section-divider`, `.hero-glow` in `index.css`
- Custom keyframe animations: `marquee`, `fade-in-up`, `float`, `pulse-glow`, `scale-in` — applied via `.animate-*` classes
- Fonts loaded via Google Fonts in `index.html`: **Archivo** (headings/body), **Chivo Mono** (buttons/mono)

### Scroll animations

`src/hooks/useInView.ts` wraps Intersection Observer — fires once, returns `{ ref, isVisible }`. Components conditionally apply animation classes when `isVisible` is true.

### Design tokens

| Token | CSS variable | Value |
|-------|-------------|-------|
| Background | `--color-dark` | `#000d12` |
| Alt background | `--color-dark-alt` | `#001018` |
| Text | `--color-ice` | `#e9f4f9` |
| Primary blue | `--color-blue-primary` | `#00b4fd` |
| Dark blue | `--color-blue-dark` | `#003ace` |
| Navy | `--color-blue-navy` | `#081e69` |
| Purple | `--color-purple` | `#9280fd` |
| Muted | `--color-muted` | `#586e84` |

## Key conventions

- All components are in `src/components/` as single-file `.tsx` with default exports
- No test framework is configured
- Tailwind v4 config is inline in CSS (`@theme inline`), not in a separate config file
- ESLint uses flat config with typescript-eslint, react-hooks, and react-refresh plugins

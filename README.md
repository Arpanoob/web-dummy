# N7 — Modern Banking Platform

A pixel-perfect, responsive frontend implementation of the N7 banking platform landing page, built from a Figma design.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS 4** for styling
- Fully responsive (mobile, tablet, desktop)
- Scroll-triggered animations via Intersection Observer
- Zero external UI libraries — all components hand-crafted

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Responsive navigation with mobile menu
│   ├── Hero.tsx            # Hero section with floating card overlays
│   ├── Solutions.tsx       # Solutions grid (5 product cards)
│   ├── CloudBanking.tsx    # Cloud banking feature + dashboard mockup
│   ├── Stats.tsx           # Statistics + analytics preview cards
│   ├── CtaBanner.tsx       # Reusable gradient CTA banner
│   ├── Marquee.tsx         # Auto-scrolling marquee strip
│   ├── DigitalBanking.tsx  # Features grid + phone mockup
│   ├── CaseStudies.tsx     # Case studies + stats panel
│   └── Footer.tsx          # Footer with links and branding
├── hooks/
│   └── useInView.ts        # Intersection Observer hook for scroll animations
├── App.tsx                 # Main app layout
├── main.tsx                # Entry point
└── index.css               # Global styles, animations, design tokens
```

## Design Tokens

| Token | Value |
|-------|-------|
| Background | `#000d12` |
| Text (ice) | `#e9f4f9` |
| Primary gradient | `linear-gradient(142deg, #00b4fd, #003ace)` |
| Heading font | Archivo |
| Button font | Chivo Mono |

## Features

- Pixel-perfect Figma-to-code implementation
- Fully responsive across all breakpoints (375px–1440px+)
- Smooth scroll-triggered fade-in animations
- Glassmorphism card effects with backdrop blur
- CSS gradient buttons with hover/active states
- Auto-scrolling marquee banner
- Mobile hamburger menu with animated transitions
- Reusable component architecture
- Performance-optimized (< 70KB gzipped JS)

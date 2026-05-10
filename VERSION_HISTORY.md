# Version History

## v2.0.0 — Liquid Glass Redesign (2026-05-10)

Complete visual overhaul from Bootstrap-heavy v1 to a custom glassmorphism design system.

### Key highlights
- Unified `styles.css` design system with CSS custom properties for theming
- Light / dark mode toggle with `data-theme` attribute strategy
- Scroll-triggered `FadeIn` animations via IntersectionObserver
- Animated counters, company marquee strip, floating code cards in hero
- DSA Sheet: progress bar, topic chips, live search, Firebase sync + localStorage fallback
- Mentor form: streamlined glass card design, Firebase `setDoc`/`updateDoc`
- Proper file structure: v2 content merged into existing files instead of creating duplicates

## v1.x — Bootstrap Era

Original site built with React + Bootstrap 5, per-page CSS files, and basic Firebase integration.

### Components
- `DSASheet.js` — full leaderboard modal, YouTube links, sort/filter, React-Icons
- `OnboardMentorForm.js` — validated form with `mobile`, `topmate`, `expertise` fields
- `Header.js` / `Footer.js` — Bootstrap-based layout
- Per-page CSS files (`ContactPage.css`, `OnboardMentorForm.css`, `DSASheet.css`)

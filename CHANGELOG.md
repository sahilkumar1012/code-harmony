# Changelog

All notable changes to Code Harmony are documented here.

## [2.0.0] — 2026-05-10

### Added
- `src/styles.css` — unified design system replacing the old scattered per-page CSS; covers CSS variables, glassmorphism utilities, button classes, animations, responsive breakpoints, and dark/light mode
- `src/components/Animations.js` — `FadeIn` (IntersectionObserver scroll-reveal) and `AnimCounter` (eased counter animation)
- `src/components/Companies.js` — `CompanyStrip` (marquee), `CompanyBadge`, SVG logos for Google, Amazon, Microsoft, Meta, Adobe, Goldman Sachs, PayPal
- `src/components/CodeAnimation.js` — `TypingAnimation`, `CodeBackground`, `FloatingCodeCard`
- Dark / light theme toggle (sun/moon button in Header); persisted to `localStorage`

### Changed
- `src/App.js` — removed TweaksPanel prototype tool; added `theme` state + `data-theme` attribute on `<html>`; corrected route imports to point at existing files
- `src/components/Header.js` — accepts `theme`/`toggleTheme` props; nav uses CSS variable backgrounds for dark-mode compatibility; theme toggle button added
- `src/components/Footer.js` — redesigned 4-column layout using `ch-footer-grid`
- `src/pages/Home.js` — full v2 redesign: Hero, Services, Stats, Resources, Testimonials, FAQ, CTA sections
- `src/pages/MentorshipPage.js` — redesigned mentor card grid with company badges, gradient headers, booking buttons
- `src/pages/services/DSASheet.js` — replaced with v2 glassmorphism design: progress bar, topic filters, search, Firebase sync + localStorage fallback
- `src/mentorship/OnboardMentorForm.js` — replaced with v2 glass-card form design
- `src/pages/About.js` — fixed SecurityError (cross-origin `cssRules` access); moved keyframe injection to `document.createElement('style')`
- `src/pages/ContactPage.js` — same SecurityError fix applied; removed duplicate `maxWidth` key in style object
- All JSX files — CSS class prefix renamed from `v2-*` to `ch-*` to match `styles.css`

### Removed
- `src/v2.css` — superseded by `src/styles.css`
- `src/pages/DSASheetV2.js` — content merged into existing `src/pages/services/DSASheet.js`
- `src/pages/MentorFormPage.js` — content merged into existing `src/mentorship/OnboardMentorForm.js`
- `src/components/TweaksPanel.js` — design-only prototype tool, not suitable for production

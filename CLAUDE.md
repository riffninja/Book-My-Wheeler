# Book-My-Wheeler — Claude Instructions

## Skills

The following skills are available for this project. Claude will automatically activate the relevant skill based on context.

---

### apple-design

**Trigger:** Use when the user asks about Apple UI/UX design, iOS/macOS/watchOS/tvOS/visionOS interface design, implementing Apple HIG, building apps that feel native on Apple platforms, Apple design principles (Clarity, Deference, Depth), SF Symbols, SF Pro typography, semantic colors, Dark Mode, Dynamic Type, accessibility on Apple platforms, Liquid Glass design system (iOS 26 / macOS Tahoe), navigation patterns (tab bars, navigation bars, modals), layout/spacing guidelines, or "how Apple designs" anything. Also trigger when the user wants to create UI that matches Apple's aesthetic — even in web or cross-platform contexts — or asks how to make something "feel like an Apple app."

Deep expertise in Apple's design language, Human Interface Guidelines (HIG), and Liquid Glass (iOS 26/macOS Tahoe). Covers:
- Three core principles: Clarity, Deference, Depth
- Liquid Glass material system (iOS 26 / macOS Tahoe 26)
- SF Pro typography and Dynamic Type scales
- Semantic color system (Light/Dark Mode)
- Layout, spacing, and corner radius guidelines
- Touch targets (44×44pt minimum)
- Navigation patterns: tab bars, navigation bars, modals, sidebars
- Motion/animation with spring physics
- SF Symbols usage rules
- Accessibility: VoiceOver, contrast ratios, Reduce Motion
- Platform-specific notes: iOS, macOS, watchOS, visionOS

---

### frontend-design

**Trigger:** Use when the user asks to build web components, pages, artifacts, posters, or applications (websites, landing pages, dashboards, React components, HTML/CSS layouts), or when styling/beautifying any web UI.

Creates distinctive, production-grade frontend interfaces with high design quality that avoids generic AI aesthetics. Covers:
- Bold aesthetic direction (brutalist, maximalist, minimalist, retro-futuristic, luxury, editorial, etc.)
- Typography: distinctive, characterful font choices — never generic Arial/Inter/Roboto
- Color & theme: cohesive palettes with CSS variables, dominant colors + sharp accents
- Motion: CSS animations, scroll-triggering, micro-interactions, staggered reveals
- Spatial composition: asymmetry, overlap, diagonal flow, grid-breaking elements
- Backgrounds: gradient meshes, noise textures, geometric patterns, layered transparencies
- Production-grade, functional, visually striking, and memorable output

---

### material-ui

**Trigger:** Use whenever the user mentions MUI, Material UI, `@mui/material`, wants to build a React UI with Material Design, asks about MUI theming/customization, or is working on any component that uses MUI's design system. Trigger even for partial mentions like "I'm using MUI" or "can you use Material components." Covers MUI v5 and v6.

Expert guidance for building React applications with Material UI (MUI). Covers:
- Installation and basic app setup with `ThemeProvider` + `CssBaseline`
- Custom theming: palette, typography, shape, spacing, component overrides
- Styling: `sx` prop, `styled()` API, `theme.components` global overrides
- Layout: `Box`, `Stack`, `Grid` (v5 and v6), `Container`
- Components: Buttons, Typography, Cards, Forms, Dialogs, Alerts, Snackbars, Navigation (AppBar, Tabs, Drawer), Data Display (Table, Chip, Avatar)
- Responsive design: breakpoints (`xs`–`xl`), `useMediaQuery`
- Performance: tree shaking, `React.memo`, `@mui/x-data-grid`, theme memoization
- Dark mode toggling with `useMemo`
- v5 → v6 migration notes

---

### pagespeed-optimizer

**Trigger:** Use whenever the user shares a website URL and asks about speed/performance/loading times, asks how to optimize for ads or Google Ads Quality Score, mentions Core Web Vitals (LCP, INP, CLS), PageSpeed scores, or Lighthouse, says their site is "slow," asks about CDN/caching/hosting for performance, wants to reduce bounce rate or improve conversions from paid traffic, or asks about image optimization, JavaScript deferral, or render-blocking.

Expert page speed and performance optimization for websites, especially those running paid ad campaigns. Covers:
- 2025 Core Web Vitals thresholds: LCP < 2.5s, INP < 200ms, CLS < 0.1
- Images: WebP/AVIF, lazy loading, responsive `srcset`, explicit dimensions
- JavaScript: defer/async, unused JS removal, code splitting, GTM consolidation
- CSS: minification, critical CSS inline, `content-visibility: auto`
- Server & hosting: HTTP/2-3, Brotli compression, TTFB < 600ms
- CDN strategy: Cloudflare, BunnyCDN, CloudFront — geography matching
- Caching headers: static assets (1yr immutable), SSG pages, ISR, SSR + Redis
- Mobile-first optimization for ad traffic
- Font optimization: `font-display: swap`, preload, subsetting, self-hosting
- Rendering architecture: SSG vs ISR vs SSR for landing pages
- Ad campaign-specific: Quality Score impact, third-party pixels, traffic spike readiness
- Recommended tools: PageSpeed Insights, GTmetrix, WebPageTest, NitroPack, WP Rocket

---

### ui-ux-design-expert

**Trigger:** Use whenever the user asks about UI/UX design, interface design, user experience, Apple HIG, iOS/macOS design, design systems, layout, typography, color, accessibility, interaction design, wireframing, prototyping, design critique, design trends, glassmorphism, Material Design comparisons, or building beautiful apps. Also trigger when users ask to create a UI, review a design, improve a design, or apply Apple design principles to any interface.

World-class UI/UX design expertise covering principles, trends, and Apple's latest design language. Covers:
- Hierarchy of user needs: Functional → Reliable → Usable → Pleasurable
- Nielsen's 10 Usability Heuristics
- Gestalt principles: Proximity, Similarity, Continuity, Closure, Figure/Ground, Common Fate
- Fitts' Law and thumb-zone design for mobile
- 2025–2026 trends: AI-driven personalization, Liquid Glass aesthetic, spatial/immersive interfaces, voice/multimodal UX, ultra-minimalism, bento grid layouts, micro-interactions
- Apple design language: Liquid Glass, Clarity/Deference/Depth, SF symbols, semantic colors
- Color theory: 60-30-10 rule, WCAG contrast ratios, semantic color usage
- Typography hierarchy and font pairing
- Interaction design: feedback, affordance, progressive disclosure
- Accessibility: WCAG 2.2, inclusive design, screen reader patterns
- Design system architecture: tokens, components, patterns, documentation

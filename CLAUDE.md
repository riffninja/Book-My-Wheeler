# Book-My-Wheeler — Claude Instructions

## Skills

The following skills are available for this project. Claude will automatically activate the relevant skill based on context.

---

### apple-design

**Trigger:** Use when the user asks about Apple UI/UX design, iOS/macOS/watchOS/tvOS/visionOS interface design, implementing Apple HIG, building apps that feel native on Apple platforms, Apple design principles (Clarity, Deference, Depth), SF Symbols, SF Pro typography, semantic colors, Dark Mode, Dynamic Type, accessibility on Apple platforms, Liquid Glass design system (iOS 26 / macOS Tahoe), navigation patterns (tab bars, navigation bars, modals), layout/spacing guidelines, or "how Apple designs" anything. Also trigger when the user wants to create UI that matches Apple's aesthetic — even in web or cross-platform contexts — or asks how to make something "feel like an Apple app."

Deep expertise in Apple's design language, Human Interface Guidelines (HIG), and Liquid Glass (iOS 26/macOS Tahoe). Covers:
- **Original 3 principles**: Clarity, Deference, Depth (foundational, still valid)
- **iOS 26 / Liquid Glass era 3 principles**: Hierarchy (content first), Harmony (concentric geometry + hardware), Consistency (adaptive across contexts)
- Liquid Glass material system (iOS 26 / macOS Tahoe 26) — real-time lensing, not just blur
- SF Pro typography and Dynamic Type scales
- Semantic color system (Light/Dark Mode)
- Layout, spacing, and corner radius guidelines
- Touch targets (44×44pt minimum)
- Navigation patterns: tab bars, navigation bars, modals, sidebars
- Motion/animation with spring physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`)
- SF Symbols usage rules
- Accessibility: VoiceOver, contrast ratios, Reduce Motion
- Platform-specific notes: iOS, macOS, watchOS, visionOS, tvOS

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
- Layout: `Box`, `Stack`, `Grid` (v5 and v6 — v6 uses `size` prop, not `item`), `Container`
- Components: Buttons, Typography, Cards, Forms, Dialogs, Alerts, Snackbars, Navigation (AppBar, Tabs, Drawer), Data Display (Table, Chip, Avatar)
- Responsive design: breakpoints (`xs`–`xl`), `useMediaQuery`
- Performance: tree shaking, `React.memo`, `@mui/x-data-grid`, theme memoization
- Dark mode toggling with `useMemo` + `ColorModeContext` provider pattern
- Reusable hooks: `useConfirmDialog`, `useSnackbar`
- Form integration: react-hook-form + MUI `Controller` pattern
- Dashboard layout pattern: permanent drawer (desktop) + temporary drawer (mobile)
- v5 → v6 migration notes

---

### pagespeed-optimizer

**Trigger:** Use whenever the user shares a website URL and asks about speed/performance/loading times, asks how to optimize for ads or Google Ads Quality Score, mentions Core Web Vitals (LCP, INP, CLS), PageSpeed scores, or Lighthouse, says their site is "slow," asks about CDN/caching/hosting for performance, wants to reduce bounce rate or improve conversions from paid traffic, or asks about image optimization, JavaScript deferral, or render-blocking.

Expert page speed and performance optimization for websites, especially those running paid ad campaigns. Covers:
- 2025 Core Web Vitals thresholds: LCP < 2.5s, INP < 200ms, CLS < 0.1; also TTFB < 600ms, FCP < 900ms, TBT < 150ms
- Images: AVIF+WebP `<picture>` pattern, `fetchpriority="high"` on hero/LCP image, NO lazy-load above fold, `loading="lazy"` below fold, explicit `width`+`height` for CLS, `srcset` for responsive sizes, `image-set()` for CSS backgrounds
- JavaScript: `defer` for own scripts, `async` for independent scripts, dynamic `import()` for code splitting, GTM consolidation; JS budget < 300KB; delay 3rd-party scripts until first scroll/click
- CSS: minification, critical CSS inline, `content-visibility: auto`
- Server & hosting: HTTP/2-3, Brotli (20% better than Gzip), TTFB < 600ms; shared hosting = never for ad campaigns
- CDN strategy: Cloudflare (free tier), BunnyCDN, CloudFront — match CDN geography to audience
- Caching headers: static assets `max-age=31536000, immutable`; SSG pages 1-day browser / 30-day CDN; ISR `s-maxage=300, stale-while-revalidate=60`; SSR + Redis
- Mobile-first optimization for ad traffic (>60% of ad clicks are mobile)
- Font optimization: `font-display: swap`, preload, subsetting, self-hosting (saves DNS lookup)
- Rendering architecture: SSG (fastest) → ISR (semi-dynamic) → SSR+Redis (personalised); SSG/ISR for all ad landing pages
- Ad campaign-specific: Quality Score impact (speed = lower CPC), pixel load order (fire after page load event), load testing before campaign launch (k6, JMeter)
- Recommended tools: PageSpeed Insights, GTmetrix, WebPageTest, Chrome Coverage tab, NitroPack, WP Rocket

---

### ui-ux-design-expert

**Trigger:** Use whenever the user asks about UI/UX design, interface design, user experience, Apple HIG, iOS/macOS design, design systems, layout, typography, color, accessibility, interaction design, wireframing, prototyping, design critique, design trends, glassmorphism, Material Design comparisons, or building beautiful apps. Also trigger when users ask to create a UI, review a design, improve a design, or apply Apple design principles to any interface.

World-class UI/UX design expertise covering principles, trends, and Apple's latest design language. Covers:
- Hierarchy of user needs: Functional → Reliable → Usable → Pleasurable
- Nielsen's 10 Usability Heuristics
- Gestalt principles: Proximity, Similarity, Continuity, Closure, Figure/Ground, Common Fate
- Fitts' Law and thumb-zone design for mobile
- **12 full 2025–2026 trends**: AI-driven hyper-personalization, Liquid Glass aesthetic, Bento Grid layouts, Zero UI/invisible interfaces, Material Expressive (Google), Inclusive design as default, AI-augmented design workflow, Trust & privacy-first UX, Spatial computing & XR design, Adaptive typography, Proactive UX (PX), Sustainable design
- Apple design language: Liquid Glass, original Clarity/Deference/Depth + iOS 26 Hierarchy/Harmony/Consistency, SF symbols, semantic colors
- Color theory: 60-30-10 rule, WCAG contrast ratios, semantic color usage
- Typography hierarchy and font pairing
- Interaction design: feedback, affordance, progressive disclosure
- Accessibility: WCAG 2.2, inclusive design, screen reader patterns
- Design system architecture: tokens, components, patterns, documentation
- Key UX metrics: SUS score >68, task success >85%, error rate <5%

---

---

## Project Context

### What this project is
**Book My Wheeler** is a Goa-based self-drive vehicle rental business. The site is a single-page HTML/CSS/JS lead-generation landing page. Primary goal: capture leads (name, phone, vehicle type) and convert them to WhatsApp/call bookings.

### Tech Stack
- Pure HTML5 + CSS3 + vanilla JS (no framework)
- Google Fonts (Poppins + Inter — being replaced, see Design Decisions)
- Font Awesome 6 (CDN) for icons
- Google Apps Script backend for form submissions (google-apps-script.js)
- Hosted as static files; images are local PNGs

### Business Context
- Target market: Tourists visiting Goa, India
- Primary conversion path: Hero booking form → WhatsApp callback
- Key differentiators: Doorstep delivery, video documentation at pickup, no hidden charges, 24/7 support
- Fleet: Scooters (Honda Activa, Yamaha Fascino), Cars (Hyundai, Maruti, Mahindra, Toyota), SUVs (Thar, Scorpio, Fortuner, Innova)
- Contact: WhatsApp +91 95798 68810

### Constraints
- No build pipeline — changes go directly into index.html
- Images are local PNGs in /images/ folder
- Form uses Google Apps Script for submissions
- Must keep WhatsApp CTA prominent (critical for Indian market)
- Must keep the lead capture form in the hero section

---

## Design Decisions

### Typography
**Decision (2026-03-06):** Replace Poppins (headings) + Inter (body) with a distinctive pairing.
- **Rationale:** Poppins + Inter is the most overused combo on AI-generated landing pages. Per the `frontend-design` skill: "NEVER use generic font families like Inter, Roboto, Arial." The goal is an unforgettable, editorial feel that matches Goa's coastal premium-travel personality.
- **Chosen pairing:** Fraunces (expressive display serif for headings) + DM Sans (clean, modern body)
- **Rule going forward:** Never revert to Poppins/Inter/Roboto/Space Grotesk. The `frontend-design` skill specifically warns against converging on "Space Grotesk" — avoid it.

### Colour Palette
**Decision (2026-03-06):** Simplify from 4 competing colours to strict 60-30-10.
- **60% — Off-white/light** (`#F9FAFB`) for section backgrounds
- **30% — Deep Navy** (`#0077B6`) as structural backbone (navbars, footers, stats bar)
- **10% — Sunset Orange** (`#FF7A21`) for ALL CTAs, price highlights, active states
- **Teal** (`#00BFA6`) demoted to micro-accent only: icon highlights, one hover state in footer. Not a section colour.
- **Palm Green** (`#2E7D32`) removed entirely — not a meaningful differentiator.
- **Rationale:** 60-30-10 rule from `ui-ux-design-expert` skill. "Dominant colours with sharp accents outperform timid, evenly-distributed palettes."

### Logo
**Decision (2026-03-06):** Replace 🛵 emoji with inline SVG scooter/wheel icon.
- **Rationale:** Emoji logos are unprofessional and render inconsistently across OSes.

### Section Spacing
**Decision (2026-03-06):** Vary padding across sections rather than uniform 80px everywhere.
- Hero: full-bleed, 100vh
- Stats: tight — 48px
- Fleet: generous — 100px top
- Features: 80px
- How It Works: dramatic — 120px (makes bold step numbers breathe)
- Testimonials: 80px
- CTA: 100px
- Footer: 64px (keep as-is)

### How It Works
**Decision (2026-03-06):** Replace emoji step icons with large bold step numbers (01 / 02 / 03) in the display font at ~5rem, left-aligned within cards. Per `frontend-design` skill: "What's the one thing someone will remember?"

### Testimonials
**Decision (2026-03-06):** Remove `#F4E1C1` (sand-beige) section background. Use white (`#FFFFFF`). Per `ui-ux-design-expert` skill: the carousel is sub-optimal (only 1% of users click carousel slides), but keeping it functional while removing the clashing background colour.

### CTA Banner
**Decision (2026-03-06):** Replace flat orange gradient (`linear-gradient(135deg, #FF7A21 → #c24d08)`) with the hero banner photo + orange-tinted overlay. Same image reuse = no extra HTTP request.

### Form Card
**Decision (2026-03-06):** Remove the `.form-card::before` 4px gradient stripe (navy → teal). It's a 2019 SaaS cliché. The card's shadow and white background are enough elevation signal.

### Vehicle Cards
**Decision (2026-03-06):** Increase vehicle image height from 190px to 240px. Photography is the strongest asset — let it breathe.

---

## Learnings from Skill Files (riffninja-designskills branch)

### From `frontend-design.skill`
- Before coding any UI, commit to a BOLD aesthetic direction and execute with precision
- "What makes this UNFORGETTABLE?" is the primary design question
- Match implementation complexity to the aesthetic vision — maximalist needs elaborate animations; minimalist needs precision in spacing and type
- Spatial composition: prioritise asymmetry, overlap, diagonal flow over perfect symmetry
- One well-orchestrated page-load stagger creates more delight than scattered micro-interactions
- Backgrounds: prefer gradient meshes, noise textures, layered transparencies over solid colours
- Never converge on common font choices — every generation should be distinct

### From `ui-ux-design-expert.skill`
- The Hierarchy of User Needs: Functional → Reliable → Usable → Pleasurable. Never sacrifice a lower level for a higher one.
- 2025–2026 trend: **Bento Grid Layouts** replacing carousels (only 1% of users click carousel slides; 89% of clicks go to first slide only). Applicable to testimonials in future iteration.
- 2025–2026 trend: **Liquid Glass Aesthetic** — glassmorphism evolved. Controls float above content as a distinct layer.
- 2025–2026 trend: **Proactive UX** — surfaces relevant actions before the user asks; design challenge is knowing when to interrupt vs. stay quiet.
- 2025–2026 trend: **Sustainable Design** — fewer animations, lighter payloads, dark mode; reduces cognitive load and energy use.
- Generous whitespace signals quality and premium feel. Group related content with proximity; separate unrelated content with space.
- 60-30-10 colour rule: dominant (60%) + structural (30%) + sharp accent (10%)
- iOS 26 introduced new HIG framing: **Hierarchy** (content first), **Harmony** (concentric geometry), **Consistency** (adaptive without losing familiarity) — alongside the original Clarity/Deference/Depth

### From `apple-design.skill`
- **Liquid Glass** is correctly reserved for the *navigation layer* (nav bars, tab bars, floating controls) — NOT content areas. The site's hero badge/bullets use glassmorphism correctly.
- **Concentricity rule**: `inner_radius = outer_radius - padding`. A button inside a 16px-radius card with ~6px padding should have a ~10px radius. Apply when creating nested rounded elements.
- **Opacity system**: 100% for critical content, 70% for supporting, 40% for decorative, 20% for atmospheric depth
- Touch targets: 44×44px minimum — all interactive elements comply (checked)
- Always add `prefers-reduced-motion` media query for accessibility
- Spring easing for Apple-feel animations: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Liquid Glass CSS: `backdrop-filter: blur(24px) saturate(200%) brightness(1.1)` + `inset 0 1px 0 rgba(255,255,255,0.8)` highlight

### From `pagespeed-optimizer.skill`
- Convert all vehicle images from PNG to WebP/AVIF (40–70% smaller); use `<picture>` with AVIF → WebP → JPG fallback
- Add explicit `width` and `height` to all `<img>` tags to prevent CLS
- Do NOT lazy-load hero images (increases LCP) — add `<link rel="preload">` + `fetchpriority="high"` for hero banner
- Self-host fonts instead of Google Fonts when possible (saves DNS lookup)
- Each third-party CDN script (Font Awesome) adds ~34ms average load time
- Target TTFB < 600ms; mobile PageSpeed ≥ 70 for Google Ads Quality Score
- Delay non-critical 3rd-party scripts: fire on first `scroll` or `click` event, with `setTimeout(fn, 5000)` as fallback

---

## Conventions & Rules

### Code
- All styles live in `<style>` inside `index.html` — no external CSS file
- All scripts live in `<script>` at bottom of `index.html` — no external JS file
- CSS custom properties (`--var`) are the single source of truth for all colours, radii, and transitions
- Never hardcode a colour hex outside the `:root` block
- Use `clamp()` for responsive font sizes (already in use — keep this pattern)
- Maintain existing section `id` attributes — they're used for anchor navigation

### Design
- **Never use Poppins, Inter, Roboto, Arial, or Space Grotesk** as primary typefaces on this project
- **Never add a 4th brand colour** — palette is locked at Orange / Navy / Teal (micro only)
- **Glassmorphism** (`backdrop-filter: blur`) is only acceptable on navigation-layer elements (navbar, modal overlay, hero floating badges) — not on content cards
- Always check concentricity when adding a rounded element inside another rounded container
- The WhatsApp CTA is non-negotiable — must remain visible on all breakpoints
- Form in hero is non-negotiable — core conversion mechanism

### Git
- Working branch: `main`
- All changes commit and push directly to `main`

---

## Backend — Google Apps Script Integration

### Overview
Form submissions from `index.html` POST to a Google Apps Script web app, which:
1. Writes a row to the Google Sheet
2. Emails `bookmywheeler@gmail.com` with lead details
3. Sends a confirmation email to the customer (if email provided)

### Key files
- `google-apps-script.js` — reference copy of the deployed script. **Must be pasted into Apps Script editor and redeployed every time it changes.**
- `index.html` — contains `SCRIPT_URL` constant (line ~1480) pointing to the deployed web app URL

### Deployed web app URL
```
https://script.google.com/macros/s/AKfycbwpJZzOqYaApHS-5txw98P6C9zCgGPY7tgIGtUj31I93FvpZsbFrrDy-wOFtYdXWKCN8g/exec
```
This URL is permanent — it does NOT change on redeployment. Only update `index.html` if the script is deleted and redeployed from scratch.

### Google Sheet
- URL: `https://docs.google.com/spreadsheets/d/1JUpAFW1KM4V0Fcf5TCHhQgY7rklZvROoRFYotEaKtuE/edit`
- Sheet tab name: `Leads`
- 18 columns: Timestamp, Name, Phone, Email, Vehicle Type, Vehicle Model, Pickup Location, Pickup Date, Return Date, Duration (Days), Estimated Value (₹), Source, Status, UTM Source, UTM Medium, UTM Campaign, UTM Content, UTM Term

### Form fields sent to script
`name`, `phone`, `email`, `vehicleType`, `vehicleModel`, `pickupLocation`, `pickupDate`, `returnDate`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`

### UTM capture
UTM params are read from `window.location.search` at page load via the `_utmParams` IIFE (line ~1482 in index.html). Organic/direct leads will have empty UTM columns. The admin email shows an **Ad Attribution** block only when UTM data is present.

### Vehicle dropdowns
- `#vehicleType` — Scooter / Car (required)
- `#vehicleSelect` — specific model, populated dynamically based on vehicleType selection (required — form blocks submission if empty)
- Both are sent separately as `vehicleType` and `vehicleModel`

### Redeployment checklist (whenever google-apps-script.js changes)
1. Open Apps Script editor (Extensions → Apps Script from the sheet)
2. Select all → delete → paste updated `google-apps-script.js` contents → Save
3. Deploy → Manage deployments → Edit (pencil) → New version → Deploy
4. URL stays the same — no change needed in `index.html`

### Admin email
- Recipient: `bookmywheeler@gmail.com`
- Also shown in footer of website: `bookmywheeler@gmail.com`

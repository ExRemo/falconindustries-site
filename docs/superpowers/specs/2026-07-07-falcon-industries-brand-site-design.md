# Falcon Industries Brand Site Design

Date: 2026-07-07
Status: Approved for implementation planning

## Objective

Rebuild the existing Falcon Industries static website into a premium multilingual industrial technology brand site for exhibition and international partner use. The first screen must position Falcon Industries as an Industrial Innovation Partner, not as a China sourcing, logistics, import/export, trading-house, or generic supplier business.

The primary message is:

- Falcon Industries
- Industrial Innovation Partner
- We discover technologies that transform industries.
- Discover. Validate. Deploy. Scale.

## Existing Project Context

The current project is a static site with no build pipeline or package manager detected.

- Root Russian page: `index.html`
- English page: `en/index.html`
- Chinese folder: `zh/`
- Shared CSS: `assets/styles.css`
- Shared JS: `assets/app.js`
- Existing media: `assets/hero.mp4`, `assets/hero-poster.jpg`, several WebP images, and `assets/og-falcon.jpg`

Implementation will preserve the static deployment model. No React, Vite, Next.js, or additional build step will be introduced.

## Architecture

Use three SEO-friendly static pages:

- `/` for Russian
- `/en/` for English
- `/zh/` for Simplified Chinese

Use shared assets and behavior:

- `assets/styles.css` for all visual styling and responsive rules
- `assets/app.js` for header scroll state, mobile menu, reveal animations, reduced-motion handling, and mailto contact fallback
- `public/brand/` for the provided Falcon Industries logo assets from `falcon-public-brand-assets-fixed.zip`

The site remains a one-page homepage per language with anchor navigation.

## Brand Identity

The provided Falcon Industries SVG logo is the visual foundation. The site must use prepared logo assets without redrawing, stretching, distorting, or recoloring them incorrectly.

Expected assets:

- `public/brand/falcon-logo-horizontal-dark.svg`
- `public/brand/falcon-logo-horizontal-light.svg`
- `public/brand/falcon-logo-icon.svg`
- `public/brand/falcon-logo-icon-dark.svg`
- `public/brand/falcon-logo-icon-light.svg`
- `public/brand/falcon-favicon.svg`
- `public/brand/falcon-favicon-32.png`
- `public/brand/falcon-favicon-192.png`
- `public/brand/falcon-favicon-512.png`
- `public/brand/falcon-og-logo.png`

Logo-inspired motifs:

- Sharp diagonal red blade lines
- Thin signal lines
- Small circuit-like nodes
- Angular industrial panels
- Precise red progress lines in the method section
- Subtle node pulse and signal sweep hover states

## Visual System

The site should feel premium, cinematic, industrial, technological, global, precise, calm, and future-facing.

It must not feel cheap, template-based, logistics-first, China-only, military, crypto, gaming, cyberpunk, overloaded, or cartoonish.

Color tokens:

- `--falcon-black: #050505`
- `--falcon-graphite: #0B0D10`
- `--falcon-deep-metal: #111418`
- `--falcon-panel: #15191F`
- `--falcon-panel-soft: #1B2027`
- `--falcon-white: #F5F5F0`
- `--falcon-white-soft: #E7E3DA`
- `--falcon-muted: #A7A7A7`
- `--falcon-muted-dark: #6F747C`
- `--falcon-red: #C4322A`
- `--falcon-red-bright: #E01E2D`
- `--falcon-red-dark: #7A0B12`
- `--falcon-tech-blue: #4DA3FF`
- `--falcon-tech-blue-soft: #8CC7FF`
- `--falcon-border: rgba(255, 255, 255, 0.10)`
- `--falcon-border-strong: rgba(255, 255, 255, 0.18)`

Use black and graphite as the main background. Use white and soft white for primary text. Use muted greys for body text. Use Falcon red sparingly for accents, active states, CTA hover, progress lines, and signal motifs. Use tech blue only for rare AI/data/radar highlights.

## Typography

Use:

```css
font-family: Inter, "Noto Sans SC", "Helvetica Neue", Arial, sans-serif;
```

Typography should be large, editorial, and controlled:

- Hero headline: `clamp(52px, 8vw, 124px)`, tight line-height, slight negative letter spacing
- Hero tagline: `clamp(24px, 3vw, 52px)`
- Section titles: `clamp(38px, 5vw, 88px)`
- Body text: `16px` to `19px`, line-height around `1.65`
- Chinese body copy uses slightly taller line-height and no excessive letter spacing

## Layout

Use a premium editorial layout:

- Container max width: `1440px`
- Desktop horizontal padding: `64px`
- Tablet padding: `36px`
- Mobile padding: `20px`
- Desktop section spacing: around `140px 0`
- Tablet section spacing: around `100px 0`
- Mobile section spacing: around `72px 0`

Hero:

- Minimum height: `100svh`
- Full-screen video or fallback poster/gradient
- Dark overlay for readability
- Text aligned left and slightly below vertical center
- Enough negative space for a premium cinematic feel

Cards and panels:

- Dark translucent panels
- `1px` border using the tokenized border colors
- Radius between `20px` and `28px`
- Hover states use subtle red signal-line expansion, not heavy glow

## Page Structure

Navigation anchors:

- `#about`
- `#approach`
- `#technologies`
- `#industries`
- `#capabilities`
- `#contact`

Header:

- Fixed top
- Transparent over hero
- Blurred graphite background after scroll
- Logo left
- Navigation center/right
- Compact language switcher: `RU / EN / 中文`
- Primary CTA: `Discuss a Project / Обсудить проект / 洽谈项目`
- Mobile burger menu with full-width touch targets

Sections:

1. Hero
   - Brand, positioning, tagline, short description, CTA pair, and `Discover. Validate. Deploy. Scale.`
   - Uses hero video if available, otherwise poster/gradient fallback.

2. About / Philosophy
   - Manifesto-style editorial block.
   - Headline: future already exists, most businesses discover it too late.
   - Includes the statement that Falcon is not a sourcing agency but a technology adoption partner.

3. Approach
   - Four-step operating model:
     - Discover
     - Validate
     - Deploy
     - Scale
   - Use red progress line and node motif inspired by the logo.

4. Technologies
   - Six premium technology cards:
     - AI & Robotics
     - Industrial Automation
     - Industrial Equipment
     - Components & Supply
     - Factory Sourcing & Audit
     - Global Supply & Logistics
   - Logistics and sourcing are included as capabilities, not the lead identity.

5. Industries
   - Eight concise outcome-focused tiles:
     - Manufacturing
     - Construction
     - Logistics & Warehousing
     - Energy
     - Agriculture
     - Mining
     - Municipal Infrastructure
     - Retail & Distribution

6. Capabilities
   - Four grouped columns:
     - Technology: technology scouting, technical evaluation, pilot projects, market potential analysis
     - Manufacturing: factory search, supplier validation, OEM/ODM, quality control
     - Deployment: documentation, logistics, customs, local adaptation
     - Scale: market entry, dealer network, service infrastructure, local partnerships

7. Global Network
   - Position Falcon as built for borderless industrial innovation.
   - Mention China as current operational strength, not the whole identity.
   - Avoid flags and political visual language.

8. Technology Radar
   - Three levels:
     - Ready for Business
     - Emerging
     - Frontier
   - Minimal radar/grid visual with restrained tech-blue highlights.

9. Contact
   - Large closing statement.
   - Form fields: name, company, country, contact, project description.
   - Visible contacts: `info@falconindustries.io`, `WeChat: a000500`.
   - Mailto fallback if no backend exists.

## Multilingual Content

Content must be fully present in Russian, English, and Simplified Chinese. Russian remains the default root page. English and Chinese pages should be equally polished, not abbreviated mirrors.

Language switching links:

- RU: `/`
- EN: `/en/`
- 中文: `/zh/`

Each language gets:

- Correct `html lang`
- Localized nav labels
- Localized CTA text
- Localized contact form labels and status messages
- Localized metadata

## SEO

Each page must include:

- Localized title
- Localized meta description
- Canonical URL
- `hreflang` links for `ru`, `en`, `zh-Hans`, and `x-default`
- Open Graph metadata
- Twitter card metadata
- Organization schema
- Favicon and app icon references from `public/brand/`

Titles:

- RU: `Falcon Industries — партнёр по промышленным инновациям`
- EN: `Falcon Industries — Industrial Innovation Partner`
- ZH: `Falcon Industries — 工业创新合作伙伴`

## Motion And Interaction

Motion should be precise and subtle:

- Text reveal
- Fade-up on scroll
- Header opacity/blur after scroll
- Red signal line drawing
- Small circuit node pulse
- Card hover signal sweep
- Optional hero video parallax scale where lightweight

Respect `prefers-reduced-motion` by disabling or minimizing animation and hiding nonessential video motion where appropriate.

## Media Strategy

Use available project media first:

- `assets/hero.mp4`
- `assets/hero-poster.jpg`
- `assets/og-falcon.jpg`
- Existing WebP imagery where it supports the new industrial technology positioning

Use dark gradient fallback and signal-line motifs when the requested media files are missing. The implementation must not show broken images or create layout shift.

The provided brand archive supplies the required logo and icon assets. No additional media download is required.

## Accessibility

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper button/link roles
- Sufficient contrast
- Muted, looping, playsinline background video
- No reliance on color or animation alone
- Reduced-motion support
- Form validation on required fields
- Descriptive alt text for meaningful images

## Testing And Verification

Because the project is static and has no package scripts, verification should include:

- Check all three HTML pages exist.
- Check internal anchors and language links.
- Check no broken local references for required CSS, JS, brand assets, media, and favicon files.
- Run a local static server if needed for browser verification.
- Use browser or screenshot verification if available to inspect desktop and mobile layouts.
- Verify contact form produces a mailto fallback.
- Verify responsive behavior and mobile menu.

## Acceptance Criteria

The work is complete when:

1. The first screen clearly communicates Falcon Industries as an Industrial Innovation Partner.
2. The provided Falcon logo identity appears in the header, favicon, footer, and visual motifs.
3. The site no longer feels like a logistics or China sourcing company.
4. Russian, English, and Simplified Chinese versions are present and linked.
5. The design feels dark, cinematic, premium, industrial, and technological.
6. The site is responsive on desktop and mobile.
7. Language switching works.
8. The contact form works with a clean fallback.
9. SEO metadata and hreflang are implemented.
10. Static deployment remains intact with no new build requirements.


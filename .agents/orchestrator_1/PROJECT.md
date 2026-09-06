# Project: Google Ads Subpage Redesign

## Architecture
- Astro 7.3.0 + Tailwind CSS v4.3.3 + Three.js 0.185.1
- Target file: `src/pages/google-ads.astro`
- Layout: `src/layouts/Layout.astro`
- Design Tokens: `#fcfbfa` (Warm Alabaster), `#0c0d12` / `#09090b` (Deep Ink Dark Panels), `#ccff00` (Tactile Lime Accent), `border-zinc-200/800`.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Hero Preservation (R1) | Lines 82–130 in `src/pages/google-ads.astro` (`Subpage Hero` with `ServiceHeroArch`, H1, breadcrumb, buttons) and imports remain 100% untouched | M1 | ORIGINAL_REQUEST §R1 |
| 2 | Bento Grid Redesign (R2) | Replace uniform 6 cards with 12-col asymmetric bento grid: 100% budget to Google, real phone call tracking, negative keywords filter, local search ads preview, plus supporting benefits | M1 | ORIGINAL_REQUEST §R2 |
| 3 | Process Modernization (R3) | Connected 3-step timeline cards (`01`, `02`, `03`) with duration indicators and architectural layout | M1 | ORIGINAL_REQUEST §R3 |
| 4 | Semantic FAQ Section (R3) | 6 high-value questions in accessible `<details>/<summary>` accordion with high-contrast typography | M1 | ORIGINAL_REQUEST §R3 |
| 5 | Aesthetic Compliance (R4) | Zero emojis, no fake pill-badges, no rainbow neon gradients; alabaster & dark panels palette; `<CallToAction />` preserved | M1 | ORIGINAL_REQUEST §R4 |
| 6 | Technical Build Verification (R5) | `npm run build` exits with code 0; `dist/google-ads/index.html` generated | M1 | ORIGINAL_REQUEST §R5 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Google Ads Redesign & Verification | Redesign `src/pages/google-ads.astro` lines 131–220, preserve Hero and CTA, verify build | None | DONE |

## Code Layout
- `src/pages/google-ads.astro` (strictly lines 131–220 modified)
- Frontmatter lines 1–73 preserved, hero lines 82–130 preserved, CTA lines 221–227 preserved.
- Output artifact: `dist/google-ads/index.html` (57,973 bytes) compiled successfully with exit code 0.

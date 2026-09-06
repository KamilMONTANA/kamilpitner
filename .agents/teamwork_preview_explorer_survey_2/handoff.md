# Handoff Report — Design System, Styling Tokens & Architectural Patterns

**Role**: Explorer 2 (Survey: Design System, Styling Tokens & Architectural Patterns)  
**Recipient**: Orchestrator / Lead Architect  
**Handoff Type**: Hard (Investigation complete)  
**Date**: 2026-09-06  

---

## 1. Observation

1. **User Requirements** (`ORIGINAL_REQUEST.md:13-39`):
   - R1: "Sekcja Hero (`Subpage Hero` z komponentem `ServiceHeroArch`, nagłówkiem H1, breadcrumb i przyciskami) na `src/pages/google-ads.astro` nie może zostać zmodyfikowana. Cały redesign ma dotyczyć wyłącznie sekcji znajdujących się poniżej Hero."
   - R2: Modern redesign of value and benefits section into an asymmetric Bento Grid (key pillars: 100% budget to Google without commissions, negative keyword cutting, real phone call tracking).
   - R3: Professional cooperation process (3 steps) and FAQ section redesign (clean light cards, architectural typography, high contrast).
   - R4: Aesthetic rules: STRICTLY NO emojis, NO cheap pill-badges, NO neon rainbow gradients. Cohesive palette (`#fcfbfa`, dark panels `#0c0d12`, subtle accent `#ccff00`, borders `border-zinc-200/800`).
   - Bottom `CallToAction` component must remain integrated and intact.

2. **Tailwind & Theme Setup** (`astro.config.mjs:1-18`, `package.json:15-21`, `src/styles/global.css:1-26`):
   - Uses Tailwind CSS v4 via `@tailwindcss/vite` (`"tailwindcss": "^4.3.3"`, `"@tailwindcss/vite": "^4.3.3"`).
   - Defined `@theme` tokens in `src/styles/global.css`:
     - `--color-neon: #ccff00`
     - `--color-neon-hover: #bbf000`
     - `--color-neon-glow: rgba(204, 255, 0, 0.35)`
     - `--color-neon-subtle: rgba(204, 255, 0, 0.12)`
     - `--color-alabaster: #fcfbfa`
     - `--color-alabaster-muted: #f4f3f0`
     - `--color-ink: #18181b`
     - `--color-ink-secondary: #52525b`
     - `--color-ink-muted: #71717a`
     - `--color-dark-900: #09090b`
     - `--color-dark-800: #121215`
     - `--color-dark-700: #1c1c21`
     - `--color-border-warm: #e7e5e4`
     - `--color-border-subtle: #f0eeeb`
   - Key CSS motion tokens in `src/styles/global.css`:
     - `--ease-spring: cubic-bezier(0.16, 1, 0.3, 1)`
     - `--ease-snappy: cubic-bezier(0.2, 0, 0, 1)`
     - Utilities: `.card-hover-depth`, `.card-hover-depth-dark`, `.btn-tactile`, `.reveal-on-scroll`, `.process-step-card`, `.process-step-badge`.

3. **Current State of `src/pages/google-ads.astro`** (`src/pages/google-ads.astro:1-227`):
   - Lines 82–130: The Subpage Hero section containing `ServiceHeroArch serviceId="google-ads"`, breadcrumb, H1, and CTA buttons.
   - Lines 132–162: `<!-- Value Grid -->` contains 6 uniform tiles (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`) with identical green checkmark icons.
   - Lines 164–192: `<!-- 3 Simple Steps -->` contains basic white cards without timeline linkage or duration indicators.
   - Lines 194–219: `<!-- Service Specific FAQ -->` contains flat, static div boxes without accordion functionality or numbers.
   - Lines 221–226: `<CallToAction />`, `<MobileCallButton />`, `<Footer />`.

4. **Reference Implementation** (`src/pages/strony-www.astro:235-623`):
   - Features a Split Contrast comparison card section (`✕ Przestarzała Strona` vs `✓ Nowy Standard 2026`) with lime corner treatment (`bg-[#ccff00] rounded-bl-[120px] opacity-20`).
   - Features an asymmetric Bento Grid (`grid-cols-1 md:grid-cols-12 gap-6`) mixing white 7-span cards, muted 5-span cards, and a dark 5-span contrast card (`bg-zinc-950 text-white`) with high-contrast lime metrics (`text-4xl font-extrabold text-[#ccff00] tabular-nums`).
   - Features a connected 3-step timeline (`src/pages/strony-www.astro:549-595`) on `bg-[#f4f3f0]` with `.process-step-card`, circular badges (`w-9 h-9 rounded-full bg-zinc-950 text-white`, final step `bg-[#ccff00] text-zinc-950`), and step durations.
   - Features semantic `<details>/<summary>` interactive accordions (`src/components/Faq.astro:22-39`).

5. **Iconography and Assets** (`package.json`, `src/components/`, `src/pages/`):
   - Standard inline SVGs with `viewBox="0 0 24 24"` or `viewBox="0 0 20 20"`, `fill="none"` or `fill="currentColor"`.
   - `simple-icons` is only used for 3D Three.js canvas extrusion in `HeroArchCards.astro` and `HeroScene3D.astro`.
   - Zero emojis are used across all reference subpages.

---

## 2. Logic Chain

1. **Step 1 (Scope & Boundaries)**:
   From Observation 1 & 3, Hero section lines 82–130 in `src/pages/google-ads.astro` must not be touched under any circumstances. All redesign efforts must begin immediately at line 132 (`<!-- Value Grid -->`) and conclude right before line 221 (`<CallToAction />`).

2. **Step 2 (Bento & Value Grid Evolution)**:
   Observation 3 shows the existing value grid is a repetitive 6-tile grid. Observation 1 requires an asymmetric Bento grid with distinct cards (100% budget, negative keywords, call tracking). Observation 4 shows `strony-www.astro` successfully achieved this with a Split Comparison (`Old vs New`) plus an asymmetric 12-column Bento layout (`col-span-7` and `col-span-5`). Applying this exact pattern directly fulfills R2 and R4.

3. **Step 3 (Process Timeline Alignment)**:
   Observation 3 shows the current steps lack visual weight and temporal clarity. Observation 4 demonstrates that using `.process-step-card` with `bg-[#f4f3f0]`, distinct step badges (1, 2, and lime 3 for final launch), and duration tags (`15 minut`, `2-3 dni`, `Natychmiast`) achieves alignment with R3.

4. **Step 4 (FAQ Accordion Standard)**:
   Observation 3 shows static text boxes for FAQ. Observation 4 (`Faq.astro`) shows that using semantic `<details>/<summary>` with rotating chevrons, numeric labels (`01.`), and subtle border transitions delivers an editorial experience that is fully accessible without client-side JavaScript libraries.

5. **Step 5 (Aesthetic Constraint Enforcement)**:
   Observation 1, 2, and 5 confirm that emojis and cheap rainbow pill-badges are prohibited. All indicators must use geometric SVGs, clean uppercase tags (`text-xs font-extrabold uppercase tracking-wider text-zinc-400`), and the established color palette (`#fcfbfa`, `bg-white`, `#0c0d12` / `bg-zinc-950`, `#ccff00`, `border-zinc-200/800`).

---

## 3. Caveats

1. **Hero Section Sensitivity**: `src/components/ServiceHeroArch.astro` relies on the parent section having specific styling and layout classes. Changing any part of the Hero wrapper would risk destabilizing the Three.js canvas coordinates.
2. **Build Execution Permission**: Command execution via `run_command` was not accessible during survey, but no code changes were made (read-only investigation). Verification by the implementation agent must run `npm run build` after editing.
3. **Copy Consistency**: The copy proposed in `report.md` preserves and enriches the existing Polish copy from `google-ads.astro` rather than inventing unrelated claims.

---

## 4. Conclusion

The design system and architectural patterns for `src/pages/google-ads.astro` are fully mapped and ready for implementation.

The redesign should replace lines 132–219 of `src/pages/google-ads.astro` with:
1. **Section 1: Split Contrast Matrix** ("Typowa Agencja Ads vs Kampanie ze mną") — max-w-5xl, 2 cards, red negative vs lime winner.
2. **Section 2: Asymmetric Bento Grid** ("Architektura Dochodowej Kampanii") — 12-column grid, spans 7+5, 5+7, including a dark contrast card (`bg-zinc-950`) with lime metric (`#ccff00`).
3. **Section 3: Connected Process Timeline** ("3-etapowy proces uruchomienia") — `bg-[#f4f3f0]`, 3 `.process-step-card` cards with duration labels and lime step 3 highlight.
4. **Section 4: Interactive FAQ Accordion** — `<details>/<summary>` pattern from `src/components/Faq.astro`.

---

## 5. Verification Method

To verify the survey findings and eventual implementation:
1. **Code Review**: Inspect `src/pages/google-ads.astro`:
   - Verify lines 82–130 (`Subpage Hero`) are byte-for-byte identical to the original.
   - Verify zero emojis exist in the file (`grep -P "[^\x00-\x7F]" | grep -E "[\x{1F600}-\x{1F64F}]"`).
   - Verify `<CallToAction />`, `<MobileCallButton />`, and `<Footer />` remain at the bottom.
2. **Build Command**:
   Execute `npm run build`.
   - Confirm exit code 0.
   - Confirm `dist/google-ads/index.html` is generated.
3. **Visual Inspection**:
   Open `dist/google-ads/index.html` in a browser or preview server and verify the responsive layout at 375px, 768px, and 1280px.

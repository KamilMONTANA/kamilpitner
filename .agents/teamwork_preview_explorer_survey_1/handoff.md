# Handoff Report — Explorer 1 (Survey: Google Ads Page Structure & Hero Preservation Boundary)

## 1. Observation
- **Target File**: `src/pages/google-ads.astro` (227 lines total).
- **Frontmatter & Dependencies** (Lines 1–73):
  - Imports: `Layout`, `Header`, `Footer`, `MobileCallButton`, `CallToAction`, `ServiceHeroArch`, `siteConfig`.
  - Data collections: `deliverables` (6 items, lines 10–35), `steps` (3 items, lines 37–53), `faqs` (4 items, lines 55–72).
- **Subpage Hero Exact Boundary** (Lines 82–130):
  - Starts at Line 82 (`<!-- Subpage Hero -->`) and Line 83 (`<section class="py-16 md:py-24 bg-[#e0f2fe]/50 border-b border-[#cbe4f9] relative overflow-hidden">`).
  - Contains breadcrumbs (`nav` on lines 87–93), H1 title ("Dochodowe kampanie Google Ads dla lokalnych firm.", line 98), subtitle (lines 102–104), CTA buttons (lines 107–119), and `<ServiceHeroArch serviceId="google-ads" />` (lines 123–125).
  - Ends at Line 130 (`</section>`).
  - Verbatim inspection confirmed `ServiceHeroArch` loads Three.js WebGL canvas arch card with ID `google-ads`.
- **Target Redesign Region** (Lines 132–220):
  - **Section A — Value Grid** (Lines 132–162): Heading on lines 136–141, `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` mapping `deliverables` on lines 144–160 with 6 identical `bg-[#fcfbfa]` cards containing lime checkmark `✓`.
  - **Section B — 3 Steps Process** (Lines 164–192): Heading on lines 168–174, `grid grid-cols-1 md:grid-cols-3 gap-8` mapping `steps` on lines 176–190 with 3 basic white cards.
  - **Section C — FAQ** (Lines 194–219): Heading on lines 198–203, `space-y-4` mapping `faqs` on lines 206–217 with 4 non-interactive static cards.
- **Bottom Integration Boundary** (Lines 221–227):
  - Line 221: `<CallToAction />`
  - Line 222: `</main>`
  - Line 224: `<MobileCallButton />`
  - Line 225: `<Footer />`
  - Line 226: `</Layout>`
  - Must remain intact and integrated.
- **Global Aesthetics & Codebase Styling**:
  - Investigated `src/styles/global.css`, `src/components/ServicesBento.astro`, `src/components/Faq.astro`, `src/components/Process.astro`, and `src/pages/strony-www.astro`.
  - Found reusable utility classes: `card-hover-depth`, `card-hover-depth-dark`, `btn-tactile`, `reveal-on-scroll`, `bg-grid-pattern`.
  - Strict absence of emojis, no fake pill-badges, high-contrast typography, `#ccff00` accent.

## 2. Logic Chain
1. **Observation**: R1 states "Sekcja Hero (`Subpage Hero` z komponentem `ServiceHeroArch`, nagłówkiem H1, breadcrumb i przyciskami) na `src/pages/google-ads.astro` nie może zostać zmodyfikowana."
   **Deduction**: Lines 82 to 130 define the complete, self-contained Hero section. Modifying any character within lines 82–130 or altering the imports `ServiceHeroArch` (line 7) and `siteConfig` (line 8) would violate R1 and the acceptance criteria.
2. **Observation**: Lines 132 to 162 implement a repetitive 3x2 grid of 6 cards with identical design and generic check icons. R2 demands a Bento Grid layout highlighting key differentiators: 100% budget to Google (zero commission), negative keywords exclusion, and phone call tracking.
   **Deduction**: The Value Grid (lines 132–162) must be replaced with a differentiated Bento Grid structure (e.g. asymmetrical grid with 1 dark feature card, visual negative keyword mockup, call tracking telemetry, and 3 supporting benefit cards).
3. **Observation**: Lines 164 to 192 implement 3 simple steps in plain white cards without flow indicators. R3 requires a professional process section.
   **Deduction**: Process section can adopt architectural cards with step markers (`01`, `02`, `03`), timeline cues, duration indicators, and tactile hover elevation.
4. **Observation**: Lines 194 to 219 display static text cards for FAQs, whereas `src/components/Faq.astro` uses `<details><summary>` semantic accordions.
   **Deduction**: Modernizing the FAQ section into an accessible semantic accordion `<details><summary>` with clear numbering and clean layout satisfies R3 and aligns with the design system.
5. **Observation**: The bottom of the page contains `<CallToAction />` (line 221) and layout wrapping (lines 222–227). Acceptance criteria explicitly requires: `<CallToAction>` remains integrated and untouched.
   **Deduction**: The modernization edits must begin on line 131 and terminate on line 220, leaving line 221 and subsequent lines unaltered.

## 3. Caveats
- `npm run build` execution via `run_command` timed out waiting for user interaction permission on the shell; however, inspection of all AST/Astro components and dependencies confirms purely standard Astro syntax and Tailwind classes with zero foreign package requirements.
- Frontmatter data structures (`deliverables`, `steps`, `faqs`) can either be updated in place or enhanced directly in `src/pages/google-ads.astro` without affecting other pages, as they are local constants scoped to this page only.

## 4. Conclusion
- The boundary for preservation is strictly defined:
  - **Preserve 100%**: Lines 1–9 (essential imports), Lines 75–81 (`<Layout>`, `<Header>`, `<main>`), Lines 82–130 (`<!-- Subpage Hero -->` through `</section>`), and Lines 221–227 (`<CallToAction />`, `</main>`, `<MobileCallButton />`, `<Footer />`, `</Layout>`).
  - **Redesign Target Area**: Lines 131–220 (replacement of Value Grid, 3-Step Process, and FAQ with Bento Grid, Architectural Process, and Semantic Accordion FAQ).
- All findings are documented in detail in `report.md`.

## 5. Verification Method
1. Inspect `src/pages/google-ads.astro` lines 82–130 to confirm exact match with section 2.2 of `report.md`.
2. Inspect line 221 to confirm `<CallToAction />` remains in place.
3. Compare proposed redesign diff against `report.md` boundary definitions.
4. Run `npm run build` (or Astro build check) during implementation phase to ensure exit code 0 and proper generation of `dist/google-ads/index.html`.

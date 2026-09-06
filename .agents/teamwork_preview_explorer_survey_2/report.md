# Design System, Styling Tokens & Architectural Patterns Survey

**Survey Agent**: Explorer 2 (Survey: Design System, Styling Tokens & Architectural Patterns)  
**Target Path**: `src/pages/google-ads.astro`  
**Reference Exemplars**: `MASTER.md`, `src/styles/global.css`, `src/pages/strony-www.astro`, `src/components/ServicesBento.astro`, `src/components/Faq.astro`, `src/components/CallToAction.astro`  
**Date**: 2026-09-06  

---

## 1. Executive Summary

This survey provides the foundational design tokens, styling rules, typography scales, layout architectures, and UI component patterns required to redesign `src/pages/google-ads.astro` (below the Hero section).

The website's design philosophy is **Minimalist Swiss Editorial in Warm Alabaster with Fluid Motion**. It rejects generic corporate noise, gratuitous neon gradients, and emoji-heavy marketing clichés, substituting them with high-contrast surfaces, architectural typography (Plus Jakarta Sans with tight tracking on headings), crisp 1px borders, subtle lime (`#ccff00`) accents, and responsive Bento Grid cards.

---

## 2. Design System Tokens & Configuration

The project operates on **Tailwind CSS v4** (`@tailwindcss/vite` + `tailwindcss: ^4.3.3`) without a legacy `tailwind.config.js`. All design tokens are declared in `src/styles/global.css` via the `@theme` directive and CSS custom properties.

### 2.1 Color Palette & Tokens

| Semantic Token | Hex / Value | Tailwind / CSS Reference | Role & Application |
|---|---|---|---|
| **Alabaster Base** | `#fcfbfa` | `--color-alabaster` / `bg-[#fcfbfa]` | Main canvas background, primary page surface |
| **Alabaster Muted** | `#f4f3f0` | `--color-alabaster-muted` / `bg-[#f4f3f0]` | Secondary section background (Process, muted cards) |
| **Card White** | `#ffffff` | `bg-white` | Primary Bento cards, active panels, contrast blocks |
| **Deep Ink** | `#18181b` | `--color-ink` / `text-zinc-900` / `text-zinc-950` | Primary headings, high-contrast text |
| **Secondary Ink** | `#52525b` | `--color-ink-secondary` / `text-zinc-600` | Explanatory text, descriptions, subheadings |
| **Muted Ink** | `#71717a` | `--color-ink-muted` / `text-zinc-500` / `text-zinc-400` | Micro-labels, step counters, metadata |
| **Dark Ink (Surface)** | `#09090b` | `--color-dark-900` / `bg-zinc-950` | Contrast Bento cards, dark section cards |
| **Dark Ink 800** | `#121215` / `#0c0d12` | `--color-dark-800` / `bg-[#0c0d12]` | High-impact CTA banner background |
| **Dark Ink 700** | `#1c1c21` / `#14151b` | `--color-dark-700` / `bg-[#14151b]` | Form container within dark CTA |
| **Fresh Lime (Accent)** | `#ccff00` | `--color-neon` / `bg-[#ccff00]` / `text-[#ccff00]` | Status indicators, active step badges, phone CTA accent, metric highlights |
| **Lime Hover** | `#bbf000` | `--color-neon-hover` / `hover:bg-[#bbf000]` | Hover state for lime buttons |
| **Lime Glow** | `rgba(204, 255, 0, 0.35)` | `--color-neon-glow` | Glow shadows on active elements and button hovers |
| **Lime Subtle Wash**| `rgba(204, 255, 0, 0.12)` | `--color-neon-subtle` / `bg-[#ccff00]/10` | Ambient glow circles, background sheen |
| **Warm Border** | `#e7e5e4` | `--color-border-warm` / `border-[#e7e5e4]` | Section dividing lines, card outlines |
| **Subtle Border** | `#f0eeeb` / `zinc-200` | `border-zinc-200` / `border-zinc-200/90` | Light Bento card borders |
| **Dark Border** | `#27272a` / `zinc-800` | `border-zinc-800` / `border-zinc-700/80` | Borders for dark Bento cards & inputs |
| **Google Ads Pastel**| `#e0f2fe` / `#cbe4f9` | `bg-[#e0f2fe]/50`, `border-[#cbe4f9]` | Dedicated Google Ads pastel wash (Hero section) |

### 2.2 Typography Scale & Hierarchy

- **Font Family**: `'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;` (Loaded in `src/layouts/Layout.astro` via Google Fonts).
- **Monospace Family**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` (Used for metrics and step numbers with `tabular-nums`).

| Hierarchy Level | Classes | Tracking & Leading | Usage |
|---|---|---|---|
| **Section Eyebrow** | `text-xs font-extrabold uppercase tracking-wider text-zinc-400` | `tracking-wider` (+0.05em) | Pre-headings above H2s (e.g. "DLACZEGO GOOGLE ADS", "PROSTY PROCES") |
| **Section Title (H2)** | `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight mt-1 mb-4` | `tracking-tight` (-0.025em), `leading-[1.15]` | Major section title |
| **Section Lead** | `text-base sm:text-lg md:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl` | `normal`, `leading-relaxed` (1.65) | Lead text introducing section |
| **Card Title (H3)** | `text-2xl font-extrabold text-zinc-950 tracking-tight` | `tracking-tight` (-0.02em) | Bento card headings |
| **Card Body** | `text-sm sm:text-base text-zinc-600 leading-relaxed` | `normal`, `leading-relaxed` | Bento card explanations |
| **Hero Metric / Stat**| `text-4xl font-extrabold text-[#ccff00] tabular-nums` | `tracking-tight`, `tabular-nums` | Large numbers on dark Bento cards |
| **Step Counter** | `text-xs font-bold text-zinc-400 tracking-wider tabular-nums` | `tracking-wider`, uppercase | "KROK 01", "KROK 02" |

### 2.3 Radii & Shadows

- **Container Radius**: `rounded-[2.5rem]` (40px) for high-impact containers like `CallToAction.astro`.
- **Card Radius**: `rounded-3xl` (24px) for all Bento tiles, comparison cards, and timeline steps.
- **Nested Component Radius**: `rounded-2xl` (16px) for interior mockups, form controls, FAQ accordion rows.
- **Micro Badge Radius**: `rounded-xl` (12px) for icon containers (`w-10 h-10 rounded-xl`).
- **Circular Badges**: `rounded-full` for step numbers (`w-9 h-9 rounded-full`) and checkmark badges (`w-5 h-5 rounded-full`).
- **Shadows**:
  - Crisp light card: `shadow-xs` / `shadow-sm`
  - Floating high-priority card: `shadow-xl` / `shadow-2xl`
  - Hover state: deeper shadow with slight vertical lift (`card-hover-depth`)

### 2.4 Motion & Kinematics (`src/styles/global.css`)

- **Spring Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (applied via `--ease-spring`).
- **Snappy Easing**: `cubic-bezier(0.2, 0, 0, 1)` (applied via `--ease-snappy`).
- **Standard Card Hover**:
  ```css
  .card-hover-depth {
    transition: transform 350ms var(--ease-spring), box-shadow 350ms var(--ease-spring), border-color 250ms ease;
    will-change: transform;
  }
  .card-hover-depth:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 35px -10px rgba(24, 24, 27, 0.07), 0 8px 16px -4px rgba(24, 24, 27, 0.03);
  }
  ```
- **Dark Card Hover**:
  ```css
  .card-hover-depth-dark {
    transition: transform 350ms var(--ease-spring), box-shadow 350ms var(--ease-spring), border-color 250ms ease;
    will-change: transform;
  }
  .card-hover-depth-dark:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.6), 0 0 25px rgba(204, 255, 0, 0.14);
    border-color: rgba(204, 255, 0, 0.3);
  }
  ```
- **Tactile Button**:
  ```css
  .btn-tactile {
    transition: transform 200ms var(--ease-snappy), box-shadow 300ms var(--ease-spring), background-color 200ms ease;
  }
  .btn-tactile:hover {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 0 20px rgba(204, 255, 0, 0.35);
  }
  .btn-tactile:active {
    transform: scale(0.97);
  }
  ```
- **Scroll Reveal**: `.reveal-on-scroll` with `IntersectionObserver` in `Layout.astro`.
- **Accessibility Rule**: Full `@media (prefers-reduced-motion: reduce)` support built-in; animations collapse to `0.01ms` and transforms become `none`.

---

## 3. Strict Aesthetic Prohibitions

1. **NO EMOJIS**: Under no circumstances should emojis (🚀, 💡, 🔥, 📈, ❌, etc.) appear in the code or UI.
2. **NO CHEAP PILL-BADGES**: Do not use colorful rainbow gradients or cheap neon badge pills with cartoonish styling.
3. **NO GRADIENT TEXT**: Display text must be solid high-contrast ink (`text-zinc-950` or `text-white` on dark cards).
4. **NO CORPORATE FLUFF**: All copy must remain direct, technical, scannable, and focused on business reality (telefony, zlecenia, zero prowizji).

---

## 4. Iconography & SVG Architecture

The codebase uses **clean inline SVG vector icons** (in the style of Heroicons / Lucide):
- **ViewBox**: Typically `viewBox="0 0 24 24"` with `fill="none"` and `stroke="currentColor" stroke-width="2"` or `stroke-width="2.5"`.
- **Checkmark Icon Pattern**:
  ```html
  <div class="w-5 h-5 rounded-full bg-[#ccff00] text-zinc-950 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>
  </div>
  ```
- **Phone Icon**:
  ```html
  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#ccff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
  ```
- **Search / Target / Shield Icons**: Standard crisp SVG paths in `w-5 h-5` with `stroke="currentColor"` inside `w-10 h-10 rounded-xl` containers.

---

## 5. Architectural Patterns from Reference Pages

### 5.1 Pattern A: Split Contrast Comparison (Exemplar: `strony-www.astro:235-307` & `WhyMe.astro`)

Used to dramatically contrast bad industry practices (wasteful agency ad spend) vs. Kamil's direct model:
- Outer: `grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto`
- **Left Card (Negative / Wasteful Agency Model)**:
  - `p-8 sm:p-10 rounded-3xl bg-[#f8f7f5] border border-zinc-200/90 flex flex-col justify-between space-y-6`
  - Eyebrow: `<span class="text-xs font-extrabold uppercase tracking-wider text-rose-600 block">✕ Typowa Agencja Ads</span>`
  - List items with `<span class="text-rose-600 font-bold">✕</span>`
- **Right Card (Winner / Kamil's 1-on-1 Performance Standard)**:
  - `p-8 sm:p-10 rounded-3xl bg-white border-2 border-zinc-950 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden card-hover-depth`
  - Corner accent: `<div class="absolute top-0 right-0 w-36 h-36 bg-[#ccff00] rounded-bl-[120px] opacity-20 pointer-events-none"></div>`
  - Eyebrow: `<span class="text-xs font-extrabold uppercase tracking-wider text-zinc-950 block">✓ Model 1-na-1 (Bez Prowizji)</span>`
  - List items with `<span class="w-5 h-5 rounded-full bg-[#ccff00] text-zinc-950 flex items-center justify-center text-xs font-bold shrink-0">✓</span>`

### 5.2 Pattern B: Asymmetric Bento Grid (Exemplar: `strony-www.astro:310-454`)

A 12-column grid offering visual rhythm with staggered card sizes and contrasting dark/light themes:
- Layout: `<div class="grid grid-cols-1 md:grid-cols-12 gap-6">`
- Row 1:
  - **Tile 1 (Span 7, White Card)**: `md:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-xs flex flex-col justify-between space-y-6 hover:border-zinc-300 transition-all card-hover-depth`
  - **Tile 2 (Span 5, Warm Muted Card)**: `md:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#f4f3f0] border border-zinc-200 shadow-xs flex flex-col justify-between space-y-6 hover:border-zinc-300 transition-all card-hover-depth`
- Row 2:
  - **Tile 3 (Span 5, Dark Contrast Card)**: `md:col-span-5 p-8 sm:p-10 rounded-3xl bg-zinc-950 text-white shadow-xl flex flex-col justify-between space-y-6 card-hover-depth-dark` featuring a large stat (`text-4xl font-extrabold text-[#ccff00] tabular-nums`)
  - **Tile 4 (Span 7, White Card)**: `md:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-xs flex flex-col justify-between space-y-6 hover:border-zinc-300 transition-all card-hover-depth`

### 5.3 Pattern C: Connected Process Timeline (Exemplar: `strony-www.astro:536-596` & `Process.astro`)

A 3-step sequence on `#f4f3f0` background with connected styling:
- Outer: `<section class="py-20 md:py-28 bg-[#f4f3f0] border-b border-[#e7e5e4]">`
- Grid: `<div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative">`
- Each Card: `p-8 sm:p-9 rounded-3xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between space-y-5 process-step-card reveal-on-scroll`
- Top Step Header:
  - Steps 1 & 2: `<span class="w-9 h-9 rounded-full bg-zinc-950 text-white flex items-center justify-center text-sm font-extrabold">1</span>` + `<span class="text-xs font-bold text-zinc-400">15 minut</span>`
  - Step 3 (Final): `<span class="w-9 h-9 rounded-full bg-[#ccff00] text-zinc-950 flex items-center justify-center text-sm font-extrabold">3</span>` + `<span class="text-xs font-bold text-emerald-700">Finał / Start reklam</span>`
- Bottom Tag: `<div class="text-xs font-bold text-zinc-400">KROK 01</div>` (and `text-zinc-950` on step 3).

### 5.4 Pattern D: Interactive FAQ Accordion (Exemplar: `Faq.astro`)

Modern, accessible `<details>/<summary>` accordion with rotating arrow and hover styling:
- Outer: `<section class="py-20 md:py-28 bg-white border-b border-[#e7e5e4]">` inside `max-w-4xl mx-auto`
- Accordion Item:
  ```astro
  <details class="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:border-zinc-400 [&_summary::-webkit-details-marker]:hidden" open={index === 0}>
    <summary class="flex cursor-pointer items-center justify-between gap-4 font-bold text-lg sm:text-xl text-zinc-950 select-none">
      <span class="flex items-center gap-3">
        <span class="text-xs text-zinc-400 font-semibold tabular-nums">0{index + 1}.</span>
        <span>{faq.q}</span>
      </span>
      <span class="w-8 h-8 rounded-full bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform group-hover:bg-[#ccff00] group-hover:text-zinc-950">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </summary>
    <div class="mt-4 pt-4 border-t border-zinc-100 text-zinc-600 text-base leading-relaxed pl-7">
      {faq.a}
    </div>
  </details>
  ```
- Optional Bottom Callout:
  A clean banner prompting the user to call if they have questions not listed in the FAQ.

---

## 6. Detailed Blueprint for `src/pages/google-ads.astro`

### 6.1 HERO INTEGRITY (MANDATORY REQUIREMENT R1)
The following section (lines 82–130) MUST BE PRESERVED 100% BYTE-FOR-BYTE:
```astro
    <!-- Subpage Hero -->
    <section class="py-16 md:py-24 bg-[#e0f2fe]/50 border-b border-[#cbe4f9] relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs font-semibold text-zinc-500 mb-6" aria-label="Breadcrumb">
          <a href="/" class="hover:text-zinc-950 transition-colors">Strona główna</a>
          <span>/</span>
          <a href="/#uslugi" class="hover:text-zinc-950 transition-colors">Usługi</a>
          <span>/</span>
          <span class="text-zinc-900">Google Ads</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div class="lg:col-span-7 space-y-6">
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
              Dochodowe kampanie Google Ads dla lokalnych firm.
            </h1>

            <p class="text-lg sm:text-xl text-zinc-700 font-normal leading-relaxed">
              Trafiaj prosto do osób, które w tej chwili szukają Twoich usług w wyszukiwarce. Płacisz za realne zlecenia i telefony, a nie za puste wyświetlenia.
            </p>

            <div class="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-zinc-950 text-white text-base font-extrabold shadow-xl hover:bg-zinc-800 transition-all border border-zinc-900 btn-tactile"
              >
                <span>Porozmawiajmy o kampanii</span>
              </a>
              <a
                href="/"
                class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-white text-zinc-800 text-base font-bold hover:bg-zinc-100 border border-zinc-300 transition-all"
              >
                <span>← Wróć do strony głównej</span>
              </a>
            </div>
          </div>

          <!-- Hero Graphic Right (Span 5): 3D Service Arch Card (Google Ads) -->
          <div class="lg:col-span-5 reveal-on-scroll delay-100 flex items-center justify-center">
            <ServiceHeroArch serviceId="google-ads" />
          </div>

        </div>

      </div>
    </section>
```

### 6.2 Recommended Structure Below Hero

#### Section 1: Comparison Matrix (Split Contrast)
- **Title**: "Przepalanie budżetu vs Dochodowa kampania lokalna"
- **Left (Old Standard / Agency)**:
  - 15-25% prowizji od budżetu na marketing
  - Płacenie za puste wyświetlenia i przypadkowe kliknięcia
  - Brak śledzenia telefonów – raporty pełne "wyświetleń"
- **Right (New Standard / Kamil Pitner)**:
  - 100% Twojego budżetu zasila reklamy w Google (0% prowizji od wydatków)
  - Odcinanie słów wykluczających ("za darmo", "jak zrobić samemu")
  - Zliczanie każdego telefonu – płacisz za realne zapytania

#### Section 2: Asymmetric Bento Grid (Architectural Pillars of Google Ads)
- **Tile 1 (Span 7, White Card)**:
  - **Title**: "100% budżetu trafia do Google – zero ukrytej prowizji"
  - **Subcontent**: Porównanie transparentnego rozliczenia. W agencjach od 2000 zł budżetu tracisz 400-500 zł na narzuty. U mnie całość pracuje na Twoje pozycje w wyszukiwarce.
  - **Visual bar**: Transparentny pasek budżetu (100% dla Ciebie vs 75% w agencji).
- **Tile 2 (Span 5, Warm Muted Card `#f4f3f0`)**:
  - **Title**: "Odcinanie pustych fraz i słów wykluczających"
  - **Subcontent**: Natychmiastowe blokowanie zapytań edukacyjnych ("poradnik", "jak naprawić", "za darmo"). Reklama pojawia się tylko wtedy, gdy klient ma pilną awarię lub gotowość do zamówienia.
  - **Visual badge row**: Przekreślone czerwone tagi wykluczeń (`✕ za darmo`, `✕ opinie`, `✕ forum`).
- **Tile 3 (Span 5, Dark Contrast Card `bg-zinc-950 text-white`)**:
  - **Title**: "Liczą się telefony, a nie puste wyświetlenia"
  - **Metric**: `100%` / `Zliczone połączenia`
  - **Subcontent**: Monitorowanie kliknięć w numer telefonu i rozszerzeń połączeń. Co miesiąc wiesz co do złotówki, ile telefonów wygenerowały reklamy.
- **Tile 4 (Span 7, White Card)**:
  - **Title**: "Precyzyjny dobór fraz lokalnych i rozszerzenia połączeń"
  - **Subcontent**: Targetowanie w promieniu Twojego dojazdu (np. 15–30 km od bazy). Klient widzi numer telefonu bezpośrednio w wyszukiwarce i może połączyć się z Tobą 1 kliknięciem bez wchodzenia na stronę.
  - **Visual Trust Bar**: "Pływający przycisk połączenia", "Geotargeting na miasto i powiat", "Bieżąca optymalizacja stawek".

#### Section 3: Connected Process Timeline
- **Title**: "Jak uruchamiamy dochodową kampanię?"
- **Step 1**: "Wybór usług i budżetu" (`15 minut`, `KROK 01`)
- **Step 2**: "Konfiguracja kampanii i słów wykluczających" (`2-3 dni`, `KROK 02`)
- **Step 3**: "Start reklam i pierwsze telefony" (`Finał / Natychmiast`, `KROK 03` with lime badge `#ccff00`)

#### Section 4: Interactive FAQ Accordion
- 4 clear items using `<details>/<summary>` accordion from `Faq.astro`:
  1. Kiedy pojawi się pierwszy telefon z reklamy?
  2. Jaki budżet reklamowy jest potrzebny na początek?
  3. Jak sprawdzę, czy reklama rzeczywiście przynosi klientów?
  4. Czy jestem związany umową na rok?
- Bottom phone support callout.

#### Section 5: Retained Bottom Blocks
- `<CallToAction />`
- `<MobileCallButton />`
- `<Footer />`

---

## 7. Quality & Verification Gates

The implementer must ensure:
1. `npm run build` completes with exit code 0.
2. `dist/google-ads/index.html` is generated properly.
3. Hero section lines (82–130) match `src/pages/google-ads.astro` line-for-line.
4. No emojis in code or output text.
5. No cheap pill-badges or neon rainbow gradients.
6. All Tailwind v4 classes comply with `src/styles/global.css`.

# Survey Report: Google Ads Page Structure & Hero Preservation Boundary

**File analyzed**: `src/pages/google-ads.astro` (Total lines: 227)  
**Surveyed by**: Explorer 1  
**Date**: 2026-09-06  
**Authoritative Specification**: `.agents/ORIGINAL_REQUEST.md`

---

## 1. Executive Summary

`src/pages/google-ads.astro` is a standalone service subpage dedicated to Google Ads campaigns for local businesses. It currently consists of:
1. **Frontmatter & Imports** (lines 1–73)
2. **Page Wrapper & Header** (lines 75–81)
3. **Subpage Hero Section** (lines 82–130) featuring `ServiceHeroArch` (Three.js WebGL card)
4. **Value Grid** (lines 132–162) with 6 uniform cards
5. **3 Simple Steps Process** (lines 164–192)
6. **Service-Specific FAQ** (lines 194–219) with 4 static cards
7. **Bottom CallToAction & Page Closures** (lines 221–227)

Per requirements **R1** and Acceptance Criteria:
> **The Hero section (lines 82–130) and its dependencies (`ServiceHeroArch`, `siteConfig`) MUST remain 100% UNTOUCHED.**  
> The entire redesign scope is strictly bounded between **line 131 and line 220**.  
> The bottom `<CallToAction />` (line 221) and layout wrapping (lines 222–227) must also remain preserved and intact.

---

## 2. Hero Section: Exact Boundary & Preservation Contract

### 2.1 Boundary Coordinates
- **Start Line**: Line 82 (`    <!-- Subpage Hero -->`)
- **Opening `<section>`**: Line 83
- **Closing `</section>`**: Line 130
- **Total Hero Lines**: 49 lines (Lines 82 to 130 inclusive)

### 2.2 Verbatim Hero Code (Preservation Contract)
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

### 2.3 Required Frontmatter Dependencies for Hero
- Line 7: `import ServiceHeroArch from "../components/ServiceHeroArch.astro";` — powers the 3D WebGL rotating arch graphic for `serviceId="google-ads"`.
- Line 8: `import { siteConfig } from "../data/siteConfig";` — supplies `siteConfig.phoneRaw` for the primary phone CTA button.

---

## 3. Analysis of Existing Sections Below the Hero

### 3.1 Value Grid (Current 6-Card Benefits) — Lines 132–162
```astro
    <!-- Value Grid -->
    <section class="py-20 bg-white border-b border-[#e7e5e4]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-14">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Dlaczego kampanie Google Ads są tak skuteczne?
          </h2>
          <p class="text-lg text-zinc-600">
            W odróżnieniu od mediów społecznościowych, w Google nie narzucasz się przypadkowym ludziom – odpowiadasz na zapytania klientów, którzy mają pilny problem do rozwiązania.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item) => (
            <div class="p-8 rounded-3xl bg-[#fcfbfa] border border-zinc-200 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div>
                <div class="w-8 h-8 rounded-xl bg-[#ccff00] text-zinc-950 flex items-center justify-center font-bold text-sm mb-5">
                  ✓
                </div>
                <h3 class="text-xl font-extrabold text-zinc-950 tracking-tight mb-3">
                  {item.title}
                </h3>
                <p class="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
```

#### Content Inventory (`deliverables` array):
1. **Precyzyjny dobór fraz lokalnych**: Reklamy wyświetlają się wyłącznie osobom wpisującym konkretne usługi w okolicy.
2. **100% budżetu trafia do Google**: Zero prowizji procentowej od wydatków na media.
3. **Wykluczenie niepotrzebnych kliknięć**: Odcinanie słów „za darmo”, „instrukcja”, „jak zrobić”.
4. **Chwytliwe teksty i rozszerzenia połączeń**: Numer telefonu bezpośrednio w reklamie w wyszukiwarce.
5. **Czarno na białym wiesz, ile zarobiłeś**: Konkretne liczby telefonów i zapytań bez żargonu.
6. **Bieżąca optymalizacja i testy**: Monitorowanie stawek i ciągłe obniżanie kosztu pozyskania klienta.

#### Weaknesses & Shortcomings:
- **Monotony**: Flat 3x2 grid where every card has identical size, styling, background (`bg-[#fcfbfa]`), and border.
- **Generic iconography**: Repeated lime square (`bg-[#ccff00] text-zinc-950`) with a basic unicode checkmark `✓`.
- **Missed Opportunity**: High-impact value propositions (e.g. 100% budget, negative keyword filtering, call tracking) lack visual representation.
- **Requirement R2 Target**: Needs conversion into a varied Bento Grid with architectural cards, visual interactive previews, dark/light contrast cards, and high-contrast typography.

---

### 3.2 3 Simple Steps Process — Lines 164–192
```astro
    <!-- 3 Simple Steps -->
    <section class="py-20 bg-[#f4f3f0] border-b border-[#e7e5e4]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-14">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Jak uruchamiamy dochodową kampanię?
          </h2>
          <p class="text-lg text-zinc-600">
            Od pierwszej rozmowy do pojawienia się Twojej reklamy na szczycie wyników Google mija zaledwie kilkadziesiąt godzin.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div class="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm relative">
              <div class="text-xs font-bold text-zinc-400 tracking-wider mb-4 tabular-nums">
                KROK {s.step}
              </div>
              <h3 class="text-xl font-extrabold text-zinc-950 tracking-tight mb-3">
                {s.title}
              </h3>
              <p class="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
```

#### Content Inventory (`steps` array):
- **01. Wybór usług i budżetu**: Usługi priorytetowe, promień kilometrów, budżet testowy na start.
- **02. Konfiguracja kampanii (2-3 dni)**: Teksty, słowa kluczowe, geolokalizacja, zliczanie połączeń.
- **03. Start reklam i pierwsze telefony**: Emisja na samej górze Google, pierwsi dzwoniący klienci w 24h.

#### Weaknesses & Shortcomings:
- Static plain white boxes on warm alabaster background (`bg-[#f4f3f0]`).
- Lacks directional flow, connectors, or tactile card interaction (`process-step-card`, `process-step-badge`).
- No duration badges (e.g. "15 minut", "2-3 dni", "W 24h") or actionable footers.
- Requirement R3 Target: Modernize with architectural timeline structure, clear step progression, and tactile hover feedback.

---

### 3.3 Service-Specific FAQ — Lines 194–219
```astro
    <!-- Service Specific FAQ -->
    <section class="py-20 bg-white border-b border-[#e7e5e4]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Pytania i odpowiedzi o Google Ads
          </h2>
          <p class="text-base sm:text-lg text-zinc-600">
            Jasne zasady rozliczeń i pełna transparentność.
          </p>
        </div>

        <div class="space-y-4">
          {faqs.map((faq) => (
            <div class="p-6 sm:p-7 rounded-2xl bg-[#fcfbfa] border border-zinc-200">
              <h3 class="text-lg font-extrabold text-zinc-950 mb-2">
                {faq.q}
              </h3>
              <p class="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
```

#### Content Inventory (`faqs` array):
1. **Kiedy pojawi się pierwszy telefon z reklamy?** (Natychmiast po uruchomieniu, zazwyczaj w 24-48h).
2. **Jaki budżet reklamowy jest potrzebny na początek?** (800-1500 zł miesięcznie wpłacane bezpośrednio do Google).
3. **Jak sprawdzę, czy reklama rzeczywiście przynosi klientów?** (Zliczanie kliknięć w telefon i rozszerzeń połączeń w panelu).
4. **Czy jestem związany umową na rok?** (Brak długoterminowych umów, pełna elastyczność i kontrola).

#### Weaknesses & Shortcomings:
- Cards are permanently open (no accordion interaction `<details><summary>`).
- No structured JSON-LD FAQPage schema.
- No direct contact prompt for custom questions.
- Requirement R3 Target: Upgrade to accessible, semantic details/summary accordion, architectural numbering (`01.`, `02.`), and a clean callout box.

---

### 3.4 Bottom CallToAction & Page Closures — Lines 221–227
```astro
    <CallToAction />
  </main>

  <MobileCallButton />
  <Footer />
</Layout>
```
- **Line 221**: `<CallToAction />` — embeds the comprehensive dark `#0c0d12` contact module with direct phone, guarantee badges, and the quote inquiry form.
- **Line 222**: `</main>` — closes main content landmark.
- **Line 224**: `<MobileCallButton />` — fixed bottom mobile CTA button.
- **Line 225**: `<Footer />` — global footer.
- **Line 226**: `</Layout>` — global document wrapper.
- **Preservation Contract**: All must remain untouched and properly integrated.

---

## 4. Aesthetic & Technical Design Tokens (Informed by Codebase)

1. **Color Palette**:
   - Backgrounds: `#fcfbfa` (warm alabaster), `bg-white`, `#f4f3f0` (muted alabaster), `#0c0d12` / `#09090b` (deep ink dark panels).
   - Accents: `#ccff00` (tactile lime), `#18181b` (pure ink), `#2563eb` / `#1d4ed8` (subtle Google Ads blue accent for search ads).
   - Borders: `border-zinc-200/80` (light), `border-zinc-800` (dark).
2. **Typography**:
   - Heading: `font-extrabold tracking-tight text-zinc-950`
   - Numeric markers: `tabular-nums font-bold`
   - Body: `text-zinc-600 leading-relaxed`
3. **Iron Constraints (R4)**:
   - NO emojis anywhere (use clean SVGs or typographic glyphs).
   - NO fake pill-badges or neon gradient blobs.
   - Clean architectural borders and subtle shadows (`shadow-xs`, `shadow-sm`).

---

## 5. Architectural Recommendations for Implementation Phase

| Component | Current State | Proposed Modernization |
|---|---|---|
| **Hero Section** | Lines 82–130 | **DO NOT TOUCH** (100% preservation). |
| **Deliverables / Values** | 6 uniform cards | **Bento Grid Layout**: 1 hero feature card (100% budget transparency & 0% commission), 1 interactive visual card (negative keyword exclusion), 1 conversion telemetry card (call tracking vs empty impressions), plus 3 supporting compact benefit cards. |
| **Process** | 3 plain white cards | **Interactive Process Flow**: Architectural cards with step numbers (`01`, `02`, `03`), timeline connecting cues, duration metrics, and hover elevation (`card-hover-depth`). |
| **FAQ** | 4 static stacked cards | **Semantic Accordion**: `<details><summary>` with animated toggle, clear numbering, plus FAQ JSON-LD schema support and direct inquiry callout. |
| **CallToAction & Layout** | Lines 221–227 | **PRESERVE UNTOUCHED**. |

---
*Report produced by Explorer 1. Ready for handoff.*

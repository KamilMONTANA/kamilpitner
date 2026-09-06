## 2026-09-06T09:59:18Z

You are Worker 1 for the Google Ads Subpage Redesign.
Your working directory is: c:\Users\kamil\Desktop\kamilpitner\.agents\teamwork_preview_worker_1
Authoritative user request: c:\Users\kamil\Desktop\kamilpitner\.agents\ORIGINAL_REQUEST.md

READ THIS FIRST:
You MUST read c:\Users\kamil\Desktop\kamilpitner\.agents\ORIGINAL_REQUEST.md before starting work.
Also read:
- c:\Users\kamil\Desktop\kamilpitner\.agents\orchestrator_1\PROJECT.md
- c:\Users\kamil\Desktop\kamilpitner\.agents\teamwork_preview_explorer_survey_1\report.md (Hero boundary coordinates & line structure)
- c:\Users\kamil\Desktop\kamilpitner\.agents\teamwork_preview_explorer_survey_2\report.md (Design tokens, Tailwind styles & bento patterns)
- c:\Users\kamil\Desktop\kamilpitner\.agents\teamwork_preview_explorer_survey_3\report.md (Content matrix & build pipeline)

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

EXCLUSIVE WRITE OWNERSHIP:
You exclusively own `src/pages/google-ads.astro` (specifically lines 131 to 220). Do not edit files outside your ownership scope.

CORE IMPLEMENTATION REQUIREMENTS:
1. R1. HERO PRESERVATION (CRITICAL):
   - Lines 82–130 in `src/pages/google-ads.astro` (`Subpage Hero` with `ServiceHeroArch`, H1, breadcrumb, buttons) and imports (`ServiceHeroArch`, `siteConfig`) MUST REMAIN 100% UNTOUCHED.
   - Do NOT modify line 82 through 130!
2. R2. MODERN BENTO GRID FOR VALUES & BENEFITS:
   - Replace the uniform 6 identical cards (lines 132–162) with a modern asymmetric 12-column Bento Grid:
     * Card 1 (Span 7, Light `#fcfbfa`): 100% budżetu do Google bez prowizji od wydatków + przejrzysty breakdown budżetu (np. 100% na kliknięcia, stała opłata za prowadzenie bez ukrytych prowizji).
     * Card 2 (Span 5, Dark Contrast `#09090b` / `#0c0d12`): Śledzenie realnych telefonów i zapytań zamiast pustych wyświetleń + wyeksponowany wskaźnik konwersji i telemetrii.
     * Card 3 (Span 5, Warm Alabaster): Odcinanie pustych fraz i słów wykluczających (`✕ za darmo`, `✕ jak zrobić samemu`, `✕ pdf`, `✕ cennik konkurencji`) z wskaźnikiem zaoszczędzonego budżetu.
     * Card 4 (Span 7, Light): Reklamy lokalne z bezpośrednim rozszerzeniem połączeń (Call Extension) i precyzyjnym promieniem kilometrów w Google Search.
     * Supporting highlights: optymalizacja CPC, pełna własność konta Google Ads (jesteś 100% właścicielem), transparentne cotygodniowe/miesięczne raporty.
3. R3. PROFESSIONAL 3-STEP PROCESS & ACCORDION FAQ:
   - 3 Kroki: Nowoczesny connected timeline (`01`, `02`, `03`) z oznaczeniami czasu trwania (np. 15 min, 2–3 dni, w 24h) i architektonicznym układem.
   - FAQ: 6 konkretnych pytań i odpowiedzi dla przedsiębiorców w semantycznym akordeonie `<details open={index === 0}>` / `<summary>` z czystą typografią i wysokim kontrastem.
4. R4. AESTHETIC COMPLIANCE:
   - Całkowity brak emotikonów (użyj czystych inline SVG lub znaków typograficznych).
   - Brak tanich pill-badges i neonowych gradientów.
   - Spójna paleta: `#fcfbfa`, `#f4f3f0`, ciemne panele `#0c0d12` / `#09090b`, akcent `#ccff00`, precyzyjne ramki `border-zinc-200/800`.
   - Komponent `<CallToAction />` (linia 221) i zamknięcie strony (linie 222–227) pozostają w 100% zachowane i nienaruszone.
5. R5. BUILD & TECHNICAL VERIFICATION:
   - Run `npm run build` using the terminal and ensure it exits with code 0.
   - Verify `dist/google-ads/index.html` is properly built.
   - Check with `git diff` that lines 82–130 and lines 221–227 are preserved.

# Original User Request

## 2026-09-06T09:53:56Z

This is a single self-contained fix; keep it small and focused.
Redesign i modernizacja podstrony Google Ads (src/pages/google-ads.astro) z wyłączeniem sekcji Hero, która ma pozostać nienaruszona.

Working directory: c:/Users/kamil/Desktop/kamilpitner
Integrity mode: development

## Requirements

### R1. Zachowanie sekcji Hero w stanie nienaruszonym
Sekcja Hero (`Subpage Hero` z komponentem `ServiceHeroArch`, nagłówkiem H1, breadcrumb i przyciskami) na `src/pages/google-ads.astro` nie może zostać zmodyfikowana. Cały redesign ma dotyczyć wyłącznie sekcji znajdujących się poniżej Hero.

### R2. Nowoczesny redesign sekcji wartości i korzyści (Bento Grid)
Zastąpienie obecnej siatki 6 identycznych kafelków zoptymalizowanym, zróżnicowanym układem (np. bento grid z wizualnymi kartami kluczowych atutów: 100% budżetu do Google bez prowizji od wydatków, odcinanie pustych fraz i słów wykluczających, śledzenie realnych telefonów zamiast pustych wyświetleń).

### R3. Profesjonalny proces współpracy i sekcja FAQ
Przeprojektowanie 3 kroków uruchomienia kampanii oraz sekcji pytań i odpowiedzi (FAQ) na czytelny, uporządkowany układ zgodny z odświeżoną stylistyką całego serwisu (jasne karty, architektoniczna typografia, wysoki kontrast).

### R4. Zgodność z wytycznymi estetycznymi
Całkowity brak emotikonów oraz brak sztucznych pill-badges / tanich neonowych gradientów. Spójna paleta barw z resztą serwisu (`#fcfbfa`, ciemne panele `#0c0d12`, subtelny akcent `#ccff00`, precyzyjne ramki `border-zinc-200/800`).

## Acceptance Criteria

### Integralność Hero
- [ ] Kod sekcji Hero w `src/pages/google-ads.astro` (wraz z komponentem `ServiceHeroArch`) jest w 100% zachowany i nienaruszony.

### Jakość wizualna i styl
- [ ] Sekcje pod Hero prezentują zróżnicowaną hierarchię i układ (Bento/editorial) zamiast powtarzalnych, jednakowych boxów.
- [ ] W kodzie nie ma żadnych emotikonów.
- [ ] Brak sztucznych, kolorowych badges / etykiet-pigułek.
- [ ] Komponent `CallToAction` na dole strony pozostaje zintegrowany i nienaruszony.

### Weryfikacja techniczna
- [ ] Komenda `npm run build` wykonuje się bezbłędnie z kodem wyjścia 0.
- [ ] Wszystkie podstrony, w tym `/google-ads/index.html`, generują się poprawnie w katalogu `dist`.

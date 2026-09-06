# Raport Badawczy: Weryfikacja Techniczna, Matryca Treści i Pipeline Budowania (Explorer 3)

**Data sporządzenia:** 2026-09-06  
**Autor:** Explorer 3 (Survey: Technical Verification, Content Matrix & Build Pipeline)  
**Środowisko:** Astro 7.3.0, Tailwind CSS v4.3.3 (@tailwindcss/vite), Three.js 0.185.1, Node.js >= 22.12.0  
**Lokalizacja zadania:** `src/pages/google-ads.astro`  
**Referencyjny dokument wymagań:** `.agents/ORIGINAL_REQUEST.md`

---

## 1. Weryfikacja Techniczna i Pipeline Budowania

### 1.1. Konfiguracja projektu i zależności (`package.json`)
Projekt oparty jest na najnowszych wersjach kluczowych narzędzi:
- **Silnik strony:** `astro: ^7.3.0`
- **Stylowanie:** `tailwindcss: ^4.3.3` wraz z wtyczką `@tailwindcss/vite: ^4.3.3`
- **Wizualizacje 3D:** `three: ^0.185.1` wraz z definicjami `@types/three: ^0.185.4`
- **Ikony:** `simple-icons: ^16.29.0`
- **Wymagania środowiskowe:** Node.js `>=22.12.0`

Dostępne skrypty w `package.json`:
```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "astro": "astro"
}
```

### 1.2. Architektura Vite i Tailwind CSS (`astro.config.mjs`, `tsconfig.json`)
- Plik konfiguracyjny `astro.config.mjs` rejestruje plugin `@tailwindcss/vite`, włącza wstępne wiązanie zależności dla biblioteki `three` (`optimizeDeps: { include: ['three'] }`) oraz ustawia limit ostrzeżeń o rozmiarze paczki na `1200 KB`.
- `tsconfig.json` rozszerza `astro/tsconfigs/strict`, wymuszając ścisłą kontrolę typów TypeScript w całym kodzie źródłowym (`**/*`) oraz wykluczając katalog `dist`.

### 1.3. Ścieżki wyjściowe i artefakty budowania (`dist/`)
- Tryb wyjściowy to w pełni statyczny pre-rendering HTML.
- Główny plik wyjściowy dla podstrony Google Ads generuje się pod ścieżką:
  `dist/google-ads/index.html`
- Wszystkie zasoby współdzielone, skrypty i arkusze CSS trafiają do katalogu:
  `dist/_astro/`
- Potwierdzono obecność wygenerowanego pliku `dist/google-ads/index.html` w katalogu roboczym (rozmiar ~37.6 KB). Kod źródłowy w `dist/` potwierdza poprawną integrację skryptu `ServiceHeroArch.astro` z kanwą WebGL (`Three.js`), skryptu kopiowania telefonu do schowka (`data-copy-phone`), oraz komponentu `CallToAction`.

---

## 2. Granice Integralności: Nienaruszalność Sekcji Hero (R1)

Zgodnie z wymaganiem **R1**, sekcja Hero na podstronie `src/pages/google-ads.astro` (linie od 82 do 130) **nie może ulec żadnym modyfikacjom**.

### Zakres chroniony:
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
*Uwaga implementacyjna:* Wszelkie zmiany w `src/pages/google-ads.astro` rozpoczynają się **poniżej linii 130**. Komponent `CallToAction`, `MobileCallButton` i `Footer` na dole strony również pozostają zintegrowane.

---

## 3. Szczegółowa Matryca Treści: Bento Grid Wartości i Korzyści (R2)

Wymaganie **R2** zakłada zastąpienie obecnej siatki 6 identycznych kafelków zoptymalizowanym, zróżnicowanym układem Bento Grid (asymetryczny podział kolumn `md:col-span-7` / `md:col-span-5`).

### 3.1. Nagłówek sekcji Bento Grid
- **Eyebrow:** `Kluczowe Przewagi` (`text-xs font-extrabold uppercase tracking-wider text-zinc-400`)
- **Nagłówek H2:** `Dlaczego kampanie Google Ads są bezkonkurencyjne?` (`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight mt-1 mb-4`)
- **Lead pod H2:** `W odróżnieniu od mediów społecznościowych, w wyszukiwarce nie narzucasz się przypadkowym osobom – trafiasz do klientów, którzy mają pilną potrzebę i w tej chwili chcą zlecić usługę.` (`text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl`)

### 3.2. Kafelki Bento Grid (Zestawienie Komponentów)

| Identyfikator | Rozmiar w siatce | Typ powierzchni & Styl | Tytuł H3 | Kluczowy przekaz merytoryczny | Element wizualny / Widget |
|---|---|---|---|---|---|
| **Bento 1: Model Budżetu** | `md:col-span-7` | Jasna karta `bg-white border border-zinc-200 card-hover-depth` | 100% budżetu trafia do Google – zero prowizji od wydatków | Tradycyjne agencje pobierają 15–25% prowizji od wydanego budżetu, co motywuje je do sztucznego pompowania kosztów. U mnie rozliczasz się na stałych, przejrzystych warunkach. Każda złotówka idzie bezpośrednio na pozyskanie zapytań. | Trójkolumnowy pasek podziału: `Budżet reklamowy: 100% do Google` • `Prowizja od wydatków: 0 zł` • `Efekt: Maksymalna liczba telefonów`. |
| **Bento 2: Konwersje i Telefony** | `md:col-span-5` | Ciemny panel kontrastowy `bg-zinc-950 text-white shadow-xl card-hover-depth-dark` | Mierzysz realne telefony, a nie puste wyświetlenia | Koniec z wielostronicowymi raportami pełnymi „zasięgów” i „wyświetleń”, z których nic nie wynika. Konfiguruję zliczanie faktycznych połączeń i formularzy – wiesz dokładnie, ile osób zadzwoniło i jaki był realny koszt zlecenia. | Duża metryka `#ccff00` w kroju tabular-nums: `100%` mierzalnych połączeń + miniatura rejestratora połączeń (`+48... Kliknięcie w telefon: Zarejestrowano`). |
| **Bento 3: Odcinanie Pustych Fraz** | `md:col-span-5` | Karta ciepłego alabastru `bg-[#f4f3f0] border border-zinc-200 card-hover-depth` | Odcinanie pustych fraz i słów wykluczających | Nie płacisz za kliknięcia osób szukających darmowych porad. Odcinam słowa typu „za darmo”, „jak zrobić samemu”, „instrukcja”, „opinie”, „forum” czy „praca”. Zostają tylko klienci z portfelem w ręku. | Lista wizualnych tagów zablokowanych fraz: `✕ za darmo`, `✕ jak zrobić samemu`, `✕ forum`, `✕ cennik 2018` + wskaźnik `Oszczędność do 40% budżetu`. |
| **Bento 4: Precyzja Lokalna i Rozszerzenia** | `md:col-span-7` | Jasna karta `bg-white border border-zinc-200 card-hover-depth` | Precyzyjny dobór fraz i bezpośredni numer w reklamie | Reklamy wyświetlają się wyłącznie w wybranym promieniu kilometrów od Twojej firmy lub wybranych dzielnicach. Dodaję klikalny numer telefonu bezpośrednio w wynikach wyszukiwania – klient dzwoni bez wchodzenia na stronę. | Wizualna atrapa reklamy Google Ads z aktywnym rozszerzeniem połączenia (`Połącz: +48 600...`) oraz etykietą `Aktywne w promieniu Twojego miasta`. |

### 3.3. Pasek uzupełniający korzyści (Supporting Value Strip)
Poniżej siatki 4 głównych kafelków Bento umieszczony zostanie spójny pasek z 3 technicznymi atutami:
1. **Bieżąca optymalizacja stawek CPC:** Cotygodniowa weryfikacja stawek i testy nagłówków w celu obniżania kosztu za pojedynczego klienta.
2. **Pełna własność konta:** Kampania konfigurowana jest na Twoim własnym koncie Google Ads – zachowujesz pełną kontrolę i historię.
3. **Brak ukrytych kosztów:** Z góry ustalony, stały koszt opieki bez niespodzianek na fakturze.

---

## 4. Szczegółowa Matryca Treści: 3 Kroki Uruchomienia Kampanii (R3)

Sekcja procesu współpracy zostanie przebudowana na połączoną oś czasu zgodną ze standardem `process-step-card` serwisu.

### 4.1. Nagłówek sekcji procesu
- **Styl sekcji:** `py-20 md:py-28 bg-[#f4f3f0] border-b border-[#e7e5e4]`
- **Eyebrow:** `Prosty i Przejrzysty Proces` (`text-xs font-extrabold uppercase tracking-wider text-zinc-400`)
- **Nagłówek H2:** `Jak uruchamiamy dochodową kampanię?` (`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight mt-1 mb-4`)
- **Lead:** `Od pierwszej rozmowy do pojawienia się Twojej reklamy na szczycie wyników Google mija zaledwie 48–72 godziny.`

### 4.2. Krok po kroku: Architektura kart

```markdown
KROK 1: Wybór usług i budżetu
- Etykieta czasu: 15 minut rozmowy
- Wskaźnik liczbowy: [ 1 ] (bg-zinc-950 text-white)
- Tytuł: Wybór usług i określenie rejonu działania
- Treść: Ustalamy, które zlecenia są dla Twojej firmy najbardziej opłacalne, na jakim obszarze lub w jakim promieniu kilometrów działasz oraz jaki miesięczny budżet testowy przeznaczamy na kliknięcia.
- Podpis: KROK 01 (tabular-nums text-zinc-400)

KROK 2: Konfiguracja kampanii
- Etykieta czasu: 2–3 dni robocze
- Wskaźnik liczbowy: [ 2 ] (bg-zinc-950 text-white)
- Tytuł: Precyzyjna konfiguracja i wykluczenia
- Treść: Przygotowuję chwytliwe nagłówki i teksty reklamowe, dobieram słowa kluczowe o wysokiej intencji zakupu, wdrażam obszerną listę słów wykluczających oraz konfiguruję śledzenie połączeń telefonicznych.
- Podpis: KROK 02 (tabular-nums text-zinc-400)

KROK 3: Start emisji i telefony
- Etykieta czasu: Natychmiastowy efekt
- Wskaźnik liczbowy: [ 3 ] (bg-[#ccff00] text-zinc-950 font-extrabold)
- Tytuł: Start reklam i napływ nowych zleceń
- Treść: Twoja reklama pojawia się na samej górze wyszukiwarki Google. Nowi klienci dzwonią bezpośrednio z poziomu wyszukiwarki, a Ty na bieżąco obserwujesz liczbę zapytań i decydujesz o skali działań.
- Podpis: KROK 03 (tabular-nums text-zinc-950 font-bold)
```

### 4.3. Baner konsultacyjny pod procesem
Estetyczny panel kontaktowy podsumowujący proces:
- Komunikat: *„Chcesz sprawdzić, ile kosztują kliknięcia w Twojej branży i mieście?”*
- Podtytuł: *„Podczas krótkiej rozmowy telefonicznej przygotuję wstępne szacunki stawek i potencjału rynku.”*
- Bezpośredni przycisk telefoniczny `btn-tactile` z numerem telefonu.

---

## 5. Szczegółowa Matryca Treści: Sekcja FAQ (R3)

Sekcja FAQ zostanie wdrożona w oparciu o semantyczne komponenty HTML `<details open={index === 0}>` i `<summary>` (wzorem `components/Faq.astro`), zapewniając pełną dostępność klawiaturową, brak narzutu JavaScript oraz eleganckie animacje obrotu strzałki.

### 5.1. Nagłówek sekcji FAQ
- **Styl sekcji:** `py-20 md:py-28 bg-white border-b border-[#e7e5e4]`
- **Eyebrow:** `Transparentne Zasady` (`text-xs font-extrabold uppercase tracking-wider text-zinc-400`)
- **Nagłówek H2:** `Pytania i odpowiedzi o Google Ads` (`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight mt-1 mb-4`)
- **Lead:** `Wszystko, co musisz wiedzieć o budżetach, rozliczeniach i efektach – bez marketingowego owijania w bawełnę.`

### 5.2. Zestaw pytań i merytorycznych odpowiedzi

#### Pytanie 1: Kiedy pojawi się pierwszy telefon od klienta z reklamy?
> **Odpowiedź:**  
> Google Ads działa natychmiast po uruchomieniu emisji. W przeciwieństwie do pozycjonowania (SEO), gdzie na rezultaty czeka się miesiącami, Twoja reklama trafia na sam szczyt wyników wyszukiwania w ciągu kilkunastu minut od zatwierdzenia przez algorytm. Pierwsi klienci z Twojej okolicy dzwonią zazwyczaj już w ciągu pierwszych 24–48 godzin od startu.

#### Pytanie 2: Jaki budżet miesięczny jest potrzebny na początek dla lokalnej firmy?
> **Odpowiedź:**  
> Dla większości usługodawców działających lokalnie (np. hydraulicy, instalatorzy HVAC, warsztaty samochodowe, gabinety stomatologiczne czy firmy budowlane) rekomendowany budżet testowy na kliknięcia wpłacany bezpośrednio do Google wynosi od 800 do 1500 zł miesięcznie. Pozwala to na pozyskanie od kilkunastu do kilkudziesięciu wartościowych kontaktów i dokładne zbadanie stawek w Twoim mieście.

#### Pytanie 3: Czy pobierasz prowizję procentową od mojego budżetu reklamowego?
> **Odpowiedź:**  
> Nie. W przeciwieństwie do większości agencji marketingowych, nie pobieram żadnej prowizji od wielkości Twojego budżetu. Rozliczamy się wyłącznie w oparciu o stałą, z góry ustaloną opłatę za konfigurację i bieżącą optymalizację. 100% Twojego budżetu reklamowego trafia bezpośrednio do Google, co całkowicie wyklucza konflikt interesów – nie mam powodu, aby namawiać Cię na niepotrzebne wydatki.

#### Pytanie 4: Jak sprawdzę, czy kampania rzeczywiście przynosi zlecenia i zarabia na siebie?
> **Odpowiedź:**  
> Konfiguruję precyzyjne śledzenie konwersji: system zlicza każde kliknięcie w numer telefonu na stronie, bezpośrednie połączenia z rozszerzeń reklamowych oraz wysłane formularze wyceny. Na koniec każdego miesiąca otrzymujesz czytelne, jednostronicowe podsumowanie pokazujące: ile dokładnie wydano w Google, ile osób zadzwoniło i jaki był średni koszt pozyskania klienta. Zero wielostronicowego żargonu.

#### Pytanie 5: Czy muszę podpisywać długoterminową umowę na 6 lub 12 miesięcy?
> **Odpowiedź:**  
> Absolutnie nie. Współpracujemy na jasnych, elastycznych zasadach z miesięcznym okresem rozliczeniowym. Jeśli w szczycie sezonu Twój kalendarz zapełni się zleceniami i zabraknie Ci mocy przerobowych, możesz w dowolnym momencie zmniejszyć budżet lub wstrzymać wyświetlanie reklam bez żadnych kar umownych.

#### Pytanie 6: Co jeśli moja obecna strona internetowa nie jest pierwszej młodości?
> **Odpowiedź:**  
> Kampania Google Ads może kierować ruch na Twoją obecną stronę lub bezpośrednio wywoływać połączenia telefoniczne w smartfonie. Przed uruchomieniem reklam bezpłatnie przeanalizuję Twoją stronę pod kątem wygody użytkownika – jeśli zauważę błędy utrudniające kontakt (np. brak widocznego telefonu pod kciukiem), wskażę drobne poprawki, aby budżet na kliknięcia nie poszedł na marne.

---

## 6. Zgodność z Wytycznymi Estetycznymi i Design Systemem (R4)

### 6.1. Bezwzględny zakaz emotikonów
- Kod strony nie może zawierać żadnych znaków emoji (np. 🚀, 💡, 📞, 💰).
- Wszystkie ikony muszą być realizowane jako precyzyjne wektory SVG, zoptymalizowane znaki systemowe (np. `✓` lub `✕`) lub numery w układzie tabularnym (`tabular-nums`).

### 6.2. Eliminacja sztucznych etykiet-pigułek i tanich gradientów
- Brak neonowych gradientów tęczowych czy wielobarwnych cieni.
- Subtelny akcent limonkowy (`#ccff00` / `var(--color-neon)`) stosowany chirurgicznie: jako tło małych ikon, akcenty liczb kluczowych metryk lub efekt hover na przyciskach.
- Zrównoważone kolory powierzchni:
  * Alabaster tła: `#fcfbfa` (`--color-surface-alabaster`)
  * Powierzchnia kart: `#ffffff`
  * Sekcje drugorzędne / ciepły odcień: `#f4f3f0` (`--color-surface-warm-muted`)
  * Panele kontrastowe: `#0c0d12` / `#09090b` (`--color-surface-dark-ink`)
  * Obramowania: `#e7e5e4` (`border-zinc-200`) oraz ciemne `#27272a` (`border-zinc-800`)

### 6.3. Kinematyka i dostępność
- Zastosowanie klas kinetycznych zdefiniowanych w `MASTER.md`:
  * `.card-hover-depth` dla kart jasnych
  * `.card-hover-depth-dark` dla paneli ciemnych
  * `.process-step-card` dla kart procesu
  * `.btn-tactile` dla przycisków CTA
  * `.reveal-on-scroll` z opóźnieniami `delay-100`, `delay-200`, `delay-300`
- Pełna zgodność z regułą `@media (prefers-reduced-motion: reduce)` zawartą w `global.css`.

---

## 7. Kryteria Weryfikacji Końcowej i Checklista Implementacyjna

Podczas weryfikacji wdrożenia należy zweryfikować następujące punkty kontrolne:

1. **Integralność sekcji Hero:**
   - Sekcja `Subpage Hero` z komponentem `ServiceHeroArch`, nagłówkiem H1 i breadcrumbem pozostała nietknięta pod względem kodu i stylów.
2. **Układ Bento:**
   - Sekcja wartości i korzyści posiada asymetryczną siatkę (np. 7/5), ciemną kartę kontrastową ze wskaźnikami konwersji, wizualne tagi wykluczeń oraz widget podziału budżetu.
3. **Układ Procesu (3 Kroki):**
   - 3 karty z wyraźnymi numerami, czasami trwania, opisami i dolnym banerem kontaktowym.
4. **Układ FAQ:**
   - 6 merytorycznych pytań i odpowiedzi w semantycznym akordeonie `<details>/<summary>`.
5. **Czystość kodu i stylistyka:**
   - 0 emotikonów w całym pliku `src/pages/google-ads.astro`.
   - Brak sztucznych etykiet-pigułek i zbędnych gradientów.
   - Komponent `CallToAction` na dole strony pozostaje zintegrowany.
6. **Poprawność kompilacji:**
   - Polecenie `npm run build` wykonuje się bezbłędnie z kodem wyjścia 0.
   - Plik `dist/google-ads/index.html` generuje się poprawnie i zawiera wszystkie odświeżone sekcje.

# Landing Page – Kamil Pitner (Astro + Cloudflare Pages)

Nowoczesny, szybki i konwertujący landing page dla **Kamila Pitnera** prezentujący ofertę:
1. **Nowoczesne Strony Internetowe** (Astro, Mobile-First, PageSpeed 98-100)
2. **Kampanie Google & Facebook Ads** (generowanie leadów i sprzedaży, transparentne rozliczenia)
3. **Wizytówki Google & Mapy** (lokalne SEO, pozycjonowanie w 3-packu)
4. **Analityka Internetowa & Śledzenie Konwersji** (GA4, Google Tag Manager, Piksel Meta CAPI, śledzenie telefonów)

Styl: **High-Contrast Black & White** z akcentami **Neon Lime / Electric Acid** (`#ccff00`).

---

## ⚡ Gdzie zmienić dane kontaktowe i ofertę?

Wszystkie kluczowe dane (numer telefonu, e-mail, teksty, punkty oferty, FAQ) znajdują się w jednym pliku:

📁 **[`src/data/siteConfig.ts`](src/data/siteConfig.ts)**

Wystarczy podmienić:
- `phone`: `"Twój numer telefonu np. +48 600 000 000"`
- `phoneRaw`: `"Numer bez spacji pod link tel: np. +48600000000"`
- `email`: `"kontakt@twojadomena.pl"`

---

## 🚀 Uruchomienie lokalne

```bash
# Instalacja zależności (jeśli jeszcze nie zainstalowano)
npm install

# Uruchomienie deweloperskie
npm run dev

# Zbudowanie wersji produkcyjnej do katalogu ./dist/
npm run build

# Podgląd zbudowanej strony
npm run preview
```

---

## ☁️ Wdrożenie na Cloudflare Pages

Strona jest w 100% statyczna (SSG), co oznacza:
- Błyskawiczne czasy ładowania na globalnym CDN Cloudflare (TTFB < 50ms)
- Pełną darmowość na koncie Cloudflare Pages
- Brak podatności serwerowych

### Opcja 1: Przez Git (GitHub / GitLab) – Rekomendowana
1. Wypchnij projekt do repozytorium na GitHubie.
2. Wejdź w panel [Cloudflare Dashboard](https://dash.cloudflare.com/) -> **Compute (Workers & Pages)** -> **Create Application** -> **Pages** -> **Connect to Git**.
3. Wybierz swoje repozytorium.
4. Ustawienia kompilacji (Framework preset: **Astro**):
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variables (Zmienne środowiskowe):**
     - `NODE_VERSION` = `22`
5. Kliknij **Save and Deploy**. Gotowe! Twoja strona jest online z darmowym certyfikatem SSL i automatycznymi wdrożeniami po każdym `git push`.

### Opcja 2: Za pomocą Wrangler CLI
```bash
npx wrangler pages deploy dist --project-name=kamilpitner
```

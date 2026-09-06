# Kamil Pitner — Design System (MASTER.md)

> **Philosophy**: Minimalist Swiss Editorial in Warm Alabaster with Fluid Motion.
> **Archetype**: Direct Technical Partner (1-on-1, high efficiency, zero corporate noise).
> **Rule**: Every design token and motion parameter in the project must derive from this document.

---

## 1. Validated Theses

### Visual Thesis
Interfejs opiera się na estetyce **Swiss Editorial** w palecie **Warm Alabaster**: ciepłe, szlachetne tło alabastru (`#fcfbfa`) i głęboki grafitowy atrament (`#18181b`) tworzą przestronny, czytelny układ o wyrazistej hierarchii typograficznej (Modern Swiss Grotesk z ciasnym kerningiem). Czyste 1px linie podziału i miękkie cienie nadają głębię kartom Bento, podczas gdy świeży limonkowy akcent (`#ccff00` / `#d4f238`) chirurgicznie kieruje uwagę na status dostępności oraz bezpośrednie CTA telefoniczne.

### Interaction Thesis
Kinetyka serwisu ma charakter **Fluid & Editorial**: wejścia sekcji i kafelków oferty odbywają się w maślanym tempie 350–450ms z płynną krzywą deceleracji `cubic-bezier(0.16, 1, 0.3, 1)`, naśladując płynne przewracanie stron ekskluzywnego periodyku. Przyciski i elementy interaktywne reagują sprężyście z wyczuwalnym oporem, a stan dostępności subtelnie pulsuje organicznym światłem, przy bezwzględnym poszanowaniu reguły `prefers-reduced-motion`.

---

## 2. Color Palette & Tokens (Warm Alabaster)

### Backgrounds & Surfaces
| Token | Hex | RGB | HSL | Contrast vs Text | Usage |
|---|---|---|---|---|---|
| `--color-surface-alabaster` | `#fcfbfa` | 252, 251, 250 | 30°, 20%, 98% | 15.2:1 (AAA) | Main page background |
| `--color-surface-card` | `#ffffff` | 255, 255, 255 | 0°, 0%, 100% | 15.8:1 (AAA) | Bento cards, header |
| `--color-surface-warm-muted` | `#f4f3f0` | 244, 243, 240 | 45°, 12%, 95% | 13.8:1 (AAA) | Secondary blocks, badges |
| `--color-surface-dark-ink` | `#09090b` | 9, 9, 11 | 240°, 10%, 4% | 18.5:1 (AAA) | Contrast CTA & Footer |
| `--color-surface-dark-card` | `#121215` | 18, 18, 21 | 240°, 8%, 8% | 16.0:1 (AAA) | Dark Bento cards (Analytics/Process) |

### Typography Colors
| Token | Hex | RGB | Usage |
|---|---|---|---|
| `--color-text-primary` | `#18181b` | 24, 24, 27 | Headlines, primary text, high-contrast B&W |
| `--color-text-secondary` | `#52525b` | 82, 82, 91 | Subtitles, descriptive paragraphs |
| `--color-text-muted` | `#71717a` | 113, 113, 122 | Captions, small indicators, timestamps |
| `--color-text-on-dark` | `#fafafa` | 250, 250, 250 | Headlines on dark surfaces |
| `--color-text-dark-muted` | `#a1a1aa` | 161, 161, 170 | Secondary text on dark surfaces |

### Accent: Fresh Lime
| Token | Hex | Usage |
|---|---|---|
| `--color-accent-lime` | `#ccff00` | Active pulses, badges, CTA highlights |
| `--color-accent-lime-hover` | `#bbf000` | Button hover state |
| `--color-accent-lime-glow` | `rgba(204, 255, 0, 0.35)` | Glow shadows on focus and active states |
| `--color-accent-lime-subtle` | `rgba(204, 255, 0, 0.12)` | Badge backgrounds |

### Borders
| Token | Hex | Usage |
|---|---|---|
| `--color-border-warm` | `#e7e5e4` | Light surfaces, card edges |
| `--color-border-subtle` | `#f0eeeb` | Internal dividers, subtle lines |
| `--color-border-dark` | `#27272a` | Dark surface outlines |

---

## 3. Typography Scale & Hierarchy

- **Primary Font Family**: `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
- **Monospace Font Family**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **Kerning / Tracking Rule**: Large display headlines have tight tracking (`tracking-tight`, `-0.025em`). Monospace items have wide tracking (`tracking-wider`, `0.05em`).

| Role | Size (rem / px) | Weight | Line Height | Tracking |
|---|---|---|---|---|
| **Display Hero** | `4.25rem` / 68px | 800 (ExtraBold) | 1.08 | `-0.03em` |
| **Section Heading (H2)** | `2.75rem` / 44px | 800 (ExtraBold) | 1.15 | `-0.025em` |
| **Card Heading (H3)** | `1.75rem` / 28px | 700 (Bold) | 1.25 | `-0.02em` |
| **Subheading / Lead** | `1.25rem` / 20px | 400 (Regular) | 1.65 | `normal` |
| **Body Text** | `1.00rem` / 16px | 400–500 | 1.65 | `normal` |
| **Caption / Badge** | `0.75rem` / 12px | 700 (Bold) | 1.4 | `+0.05em` |
| **Metric Value** | `2.25rem` / 36px | 800 (ExtraBold) | 1.0 | `-0.03em` |

---

## 4. Spacing & Layout Rhythms

- **Grid Basis**: 8px baseline (`0.5rem = 8px`, `1rem = 16px`, `1.5rem = 24px`, `2rem = 32px`, `3rem = 48px`, `5rem = 80px`).
- **Container Max Width**: `max-w-7xl` (80rem / 1280px).
- **Section Padding**: `py-20 md:py-32` (80px to 128px of generous editorial negative space).
- **Bento Gap**: `gap-8` (32px).

---

## 5. Shadows & Radii

| Element | Radius | Shadow |
|---|---|---|
| **Bento Cards** | `1.5rem` / 24px (`rounded-3xl`) | `0 4px 20px -2px rgba(0, 0, 0, 0.03)` |
| **Bento Hover** | `1.5rem` / 24px | `0 20px 35px -10px rgba(0, 0, 0, 0.08)` |
| **CTA Container** | `2.5rem` / 40px (`rounded-[2.5rem]`) | `0 25px 50px -12px rgba(0, 0, 0, 0.25)` |
| **Buttons** | `1.0rem` / 16px (`rounded-2xl`) | `0 10px 25px -5px rgba(0, 0, 0, 0.15)` |
| **Pills & Badges**| `9999px` (`rounded-full`) | Subtle 1px border ring |

---

## 6. Motion & Kinematic Tokens (Fluid & Editorial)

- **Primary Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (Spring-deceleration curve).
- **Secondary Snappy Easing**: `cubic-bezier(0.2, 0, 0, 1)` (Button tap, micro-toggles).
- **Durations**:
  - Micro-interactions (hover, active scale): `180ms – 250ms`
  - Card lift: `350ms`
  - Scroll reveals: `450ms`
  - Stagger offset: `100ms` per sequential item
- **Reduced Motion Doctrine**:
  - Under `prefers-reduced-motion: reduce`, all durations collapse to `0.01ms`, transforms are set to `none`, and all content is immediately displayed.

---

## 7. Component States Matrix

| Component | Default | Hover | Focus-Visible | Active / Click |
|---|---|---|---|---|
| **CTA Primary Button** | `#09090b` bg, white text | `#18181b` bg, lime glow shadow | 3px `#ccff00` outline offset 2px | `scale(0.97)` |
| **CTA Lime Button** | `#ccff00` bg, `#09090b` text | `#bbf000` bg, elevated shadow | 3px black outline offset 2px | `scale(0.97)` |
| **Bento Card** | White bg, `#e7e5e4` border | `translateY(-8px)`, deeper shadow | N/A | N/A |
| **Dark Bento Card** | `#09090b` bg, `#27272a` border | `translateY(-8px)`, subtle lime border | N/A | N/A |
| **Copy Phone Button** | `#f4f3f0` bg, `#18181b` text | `#e7e5e4` bg | 2px `#18181b` ring | `scale(0.97)` + Toast |

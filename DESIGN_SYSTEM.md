# Design system

Tokens live in `site/src/styles.css` (`:root`).

## Colour
Taken from the source photography: autumn ridges, beige-and-brass interiors, candlelight.

| Token | Hex | Role |
|---|---|---|
| `--paper` | #F2EDE4 | Page ground (warm parchment, slightly grey rather than cream) |
| `--stone` | #E2DACC | Alternate section ground, image placeholders |
| `--ink` | #26241F | Text (warm charcoal) |
| `--muted` | #6B665C | Secondary text (AA on paper) |
| `--forest` | #1E2B24 | Dark sections, footer |
| `--olive` | #5E6247 | Quiet accent: rules, labels on dark |
| `--brass` | #9B7A4A | Sparse accent: links underline, focus ring, active state. Never large fills. |
| `--line` | rgba(38,36,31,.16) | Hairlines |

## Typography
- **Display:** Cormorant Garamond 400/500 plus italic 400. This is the typeface the current Parma site already uses, which gives continuity of identity, and it is the only serif in the system.
- **Text / UI:** Instrument Sans (variable). A narrow, humane grotesk that keeps the small type crisp beside the high-contrast serif.
- Both are self-hosted via Fontsource. There are no third-party font requests.
- **Scale** (fluid, `clamp`): display 3.2→8.5rem · h2 2.2→4rem · h3 1.5→2rem · body 1.0625rem/1.65 · small 0.875rem.
- **Line length:** body copy is capped at 62ch.
- **Labels:** sentence case in small sans with a muted colour. No tracked-out caps.

## Spacing
- 4px base.
- Section rhythm: `--space-section` = clamp(5rem, 12vw, 10rem).
- Gutter: clamp(1.25rem, 5vw, 4rem).

## Layout and breakpoints
- Mobile-first, with breakpoints at 640, 900 and 1200.
- Max content width 1360px. Text columns are asymmetrically offset on a 12-column grid.

## Image ratios
- Hero: `100svh` (min 560px) on mobile, with `object-position` set per image.
- Landscape: 16/10.
- Room: 16/9 (matches the 780×436 sources).
- Portrait: 3/4 for team (sources are 290×451).
- Every image reserves its box via width/height and aspect-ratio, with a `--stone` placeholder behind it.

## Buttons and links
- **Primary:** solid `--ink` (or `--paper` on dark), square corners, 48px min height, sans 0.9375rem.
- **Secondary:** text link with a 1px brass underline that thickens on hover.
- No pills, no icons in buttons, and no arrows appended to text.

## Cards
- There are no boxed cards. Content sits directly on the ground and is grouped by whitespace and hairlines.
- The four worlds are a large typographic index with an image, not a card grid.

## Navigation
- Height 64px (72px on desktop). Transparent over the hero, turning into solid `--paper` with a hairline after 40px of scroll.
- Mobile: a full-screen sheet with large serif links. It closes on Esc and on route change, and focus returns to the toggle.

## Motion
- Only a few things move:
  - one hero load reveal (image settles from scale 1.04, 1200ms; title fades in, 700ms);
  - the image crossfade in the worlds index;
  - accordion height;
  - nav background.
- No scroll-triggered reveals on every section.
- `prefers-reduced-motion` disables all of it.

# Reference: Arturo Spatino Homepage Analysis

## Source

URL: https://www.arturospatino.com/

## High-level design language

- Minimal editorial portfolio
- Monochrome palette
- Strong whitespace and clear grid
- Premium, modern sans-serif typography
- Compact navigation with generous content spacing
- Hero typography is intentionally tight and sculptural

---

## Spacing and layout reference

### 1) Main page container

Observed utility classes:
- `max-w-5xl`
- `mx-auto`
- `px-4`

Interpretation:
- Container max width: about `1024px`
- Centered horizontally
- Side padding: `16px`

### 2) Header

Observed:
- `px-4 py-4`
- `border-b border-gray-100`

Interpretation:
- Header vertical padding: `16px`
- Horizontal padding: `16px`
- Border thickness: `1px`
- Very light gray divider

### 3) Hero layout

Observed:
- `px-4 pt-4 pb-2`
- `grid grid-cols-1 md:grid-cols-2`
- `gap-x-1 gap-y-6`
- `items-stretch`

Interpretation:
- Outer hero padding: 16px top / 8px bottom / 16px horizontal
- Column gap: `4px` horizontal, `24px` vertical
- Keeps the hero balanced without visual crowding

### 4) Hero text column

Observed:
- `py-4 md:py-16`
- `gap-6 md:gap-10`

Interpretation:
- Mobile text block padding: `16px` top/bottom
- Desktop text block padding: `64px` top/bottom
- Gap between headline and subtext: `24px` mobile / `40px` desktop

### 5) General section rhythm

Observed patterns:
- `gap-6`
- `gap-10`
- `gap-y-6`

Interpretation:
- Standard rhythm is around `24px` to `40px`
- Light but deliberate spatial separation

---

## Typography reference

### 1) Primary font

Observed in the page root:
- `geist_dbbf8c4b-module__5qCx7q__variable`

This points to a font family named:
- Geist Variable / Geist

Likely fallback stack:
- `Geist, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

### 2) Headline style

Observed:
- `text-2xl`
- `leading-none`
- `tracking-[-2.5px]`

Interpretation:
- Headline size: `24px`
- Line-height: very tight (`1`) to create condensed editorial feel
- Letter spacing: `-2.5px`
- Maximum width around `540px` on large screens

### 3) Navigation text

Observed:
- `text-sm md:text-md`
- `font-medium`

Interpretation:
- Base nav size: `14px`
- Desktop nav size: about `16px`
- Weight: `500` (medium)

### 4) Body text

Observed patterns:
- Default site text appears as neutral sans-serif body copy
- `text-md` is used in several contexts

Interpretation:
- Approx body size: `16px`
- Weight: regular to medium depending on area
- Readability-focused, modern editorial style

### 5) Size summary

| Type | Approx size | Weight | Spacing |
| --- | ---: | ---: | ---: |
| Navigation | 14px–16px | 500 | normal |
| Brand text | 16px | 500 | normal |
| Hero heading | 24px | medium/regular | -2.5px |
| Body text | 16px | regular | normal |
| Small labels | 12px–14px | medium | normal |

---

## CSS-inspired design tokens

These are the most relevant design values inferred from the actual implementation:

- `--space-1`: 4px
- `--space-2`: 8px
- `--space-3`: 12px
- `--space-4`: 16px
- `--space-6`: 24px
- `--space-10`: 40px
- `--space-16`: 64px
- `--container-max`: 1024px
- `--headline-size`: 24px
- `--headline-tracking`: -2.5px
- `--body-size`: 16px
- `--nav-size`: 14px–16px

---

## Visual reasoning

The site is designed to feel:

- premium
- minimal
- confident
- highly controlled
- editorial and exacting

There is almost no decorative excess. The spacing system is intentionally strict, and the typography is crisp and modern. This gives the brand a polished, agency-like design language rather than a startup-y or playful one.

---

## Practical recommendations for your own portfolio

1. Use a centered max-width around `1024px`.
2. Keep outer padding at `16px` on mobile.
3. Use `24px` as the default rhythm for standard gaps.
4. Use `40px` to `64px` for section-level spacing.
5. Use a modern geometric sans-serif, ideally Geist, Manrope, Sora, or Inter.
6. Keep hero titles at `24px` with tight negative tracking.
7. Stick to a monochrome palette with subtle gray borders and minimal accent colors.

---

## Final takeaways

This is a clean premium portfolio system built around:

- compact top bar
- large editorial text blocks
- strong vertical rhythm
- modern sans typography
- minimal borders and calm spacing

If the goal is to emulate this reference, the best starting point is a system using:

- Geist or a close geometric sans
- 16px body text
- 24px hero headline
- 1024px content width
- 16px, 24px, 40px, 64px spacing rhythm

This is a highly usable pattern for a designer portfolio or personal brand site.

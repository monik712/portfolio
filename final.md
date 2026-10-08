# Arturo Spatino Reference Analysis

## 1. Site summary

Reference URL: https://www.arturospatino.com/

This homepage uses a very minimal editorial-product design system: generous whitespace, tight headline lettering, monochrome palette, and a strong grid. The layout is built around a centered container, with a clean header, hero area, feature/service blocks, and work cards.

The implementation strongly suggests a Tailwind-like spacing and typography system, with custom utility classes such as `max-w-5xl`, `px-4`, `py-4`, `gap-6`, `text-2xl`, `tracking-[-2.5px]`, and `leading-none`.

---

## 2. Core spacing system

### 2.1 Page container

- Max content width: `max-w-5xl`
- Value interpreted as: `64rem` = `1024px`
- Horizontal centering: `mx-auto`
- Side padding: `px-4`
- Value: `1rem` = `16px` on mobile

This gives the page a comfortable left/right margin and a readable content band.

### 2.2 Header spacing

- Top/bottom padding: `py-4`
- Value: `1rem` = `16px`
- Left/right padding: `px-4`
- Value: `1rem` = `16px`
- Border: `border-b border-gray-100`
- Border thickness: ~1px

Header behavior:
- A very light dividing line separates the navigation from the rest of the page.
- The header feels compact and premium rather than heavy.

### 2.3 Hero section spacing

Hero block:
- `px-4 pt-4 pb-2`
- Horizontal padding: `16px`
- Top padding: `16px`
- Bottom padding: `8px`

Hero inner layout:
- `grid grid-cols-1 md:grid-cols-2`
- `gap-x-1` -> `4px`
- `gap-y-6` -> `24px`
- `items-stretch`

Desktop hero text column:
- `py-4 md:py-16`
- Mobile vertical padding: `16px`
- Desktop vertical padding: `64px`
- `gap-6 md:gap-10`
- Mobile gap: `24px`
- Desktop gap: `40px`

These numbers are consistent with a very airy editorial layout.

### 2.4 Content blocks and paragraphs

Typical inner spacing:
- Paragraph blocks use generous vertical rhythm with `gap-6` or similar.
- Section to section spacing appears to lean on `24px` to `40px` increments.
- Card lists and service rows have clear separation without being noisy.

Practical takeaway for your design:
- Use `16px` for compact padding
- Use `24px` for standard block spacing
- Use `40px` to `64px` for hero and section rhythm

---

## 3. Typography system

### 3.1 Font family

The homepage loads a Geist variable font, visible from the root HTML class:

- `geist_dbbf8c4b-module__5qCx7q__variable`

This strongly indicates the site is using a variable sans-serif family named Geist.

Likely fallback stack:

- `Geist`, `ui-sans-serif`, `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `sans-serif`

### 3.2 Font weights

From the markup and utility classes:
- `font-medium` is used for header text and brand labels
- `leading-none` is used for the large hero title
- `tracking-[-2.5px]` is used for tightly spaced headline letters

This suggests a strong editorial headline look with a modern geometric sans.

### 3.3 Font sizes and scale

Observed sizes from the live classes:

| Element | Observed class / rule | Approx size | Notes |
| --- | --- | ---: | --- |
| Header label | `text-md` / `text-sm` | 14px–16px | Minimal, compact brand/nav text |
| Navigation links | `text-sm md:text-md` | 14px base / 16px md | Clean menu style |
| Hero headline | `text-2xl` | 24px | Large but not oversized |
| Hero heading max width | `md:max-w-[540px]` | 540px | Creates strong line length |
| Headline tracking | `tracking-[-2.5px]` | -2.5px | Very tight letter spacing |
| Heading leading | `leading-none` | 1 | Crisp headline rhythm |
| Paragraph text | default body / `text-md` | 16px | Clean, neutral reading size |

### 3.4 Line-height and readability

- Headline: `leading-none` = very tight, almost text-block-like
- Body: default proportioned reading rhythm, likely 1.5 or 1.6 line-height
- This creates the premium editorial feel that balances minimalism with readability

### 3.5 Character spacing

- Hero title: `-2.5px` letter spacing
- This is unusually tight, giving the headline a more sculptural and intentional appearance.
- It works because the letters are treated as individually animated words/characters, reinforcing the designer-brand feel.

---

## 4. Layout patterns to reuse

### 4.1 Centered editorial shell

- `max-w-5xl mx-auto`
- Central alignment with ~1024px maximum width
- Keeps a wide but controlled reading lane

### 4.2 Compact top bar

- `px-4 py-4`
- Lightweight borders and minimal nav typography
- Premium and unobtrusive

### 4.3 Strong hero hierarchy

- Big leading text in 24px size with negative letter tracking
- About 540px text column on desktop
- No heavy large-over-scale hero; more controlled and brand-led

### 4.4 Minimal section rhythm

- `gap-6`, `gap-y-6`, `gap-10`
- Spacing is large enough to create air but not excessive
- This keeps the design calm and high-end

---

## 5. Recommended interpretation for your own portfolio

If you want to recreate a similar feel:

- Use a modern geometric sans like Geist, Sora, Manrope, or Inter
- Set body text to 16px with a clean sans-serif stack
- Use a 24px headline for the primary hero line
- Keep hero letter spacing slightly negative, about -2px to -3px
- Use outer padding around 16px and section spacing around 24px–64px
- Limit the main content width to about 1024px
- Keep the interface mostly monochrome with very small accent touches

---

## 6. Final design summary

This reference site is built on a disciplined, luxury-minimal system:

- Strong, centered editorial layout
- Compact premium header
- Clean sans-serif typography with a modern variable font
- Tight hero headline tracking
- Spacious but not excessive margins
- Consistent 16px/24px/40px/64px rhythm

The visual identity reads as premium, sober, and intentional rather than playful or loud.

---

## 7. Direct measured breakdown (practical values)

- Page width: ~1024px max
- Outer padding: 16px
- Header padding: 16px vertical
- Hero grid gap: 4px horizontal / 24px vertical
- Hero content gap: 24px to 40px
- Desktop hero vertical padding: 64px
- Headline size: ~24px
- Headline tracking: -2.5px
- Text weight: medium / normal sans
- Body text: ~16px
- Borders: 1px, very light gray

This is a strong reference for a polished, minimal designer portfolio.

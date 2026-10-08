# Arturo Spatino Portfolio Replica

A pixel-perfect, high-performance portfolio website recreated based on [arturospatino.com](https://www.arturospatino.com/), built using **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Key Features

1. **Letter-by-Letter Hero Animation**:
   - Staggered entrance animation for *"Designer crafting digital experiences from UX to UI systems."*
   - Two-tone color contrast matching the original (`#111111` for emphasis and `#b2b2b2` for muted text).

2. **Dual-State Dynamic Header**:
   - Initial static top header with brand name, location (`Catania, IT`), and navigation.
   - Auto-revealing floating glassmorphism header that smoothly slides in upon scrolling down.

3. **All 4 Detailed Case Studies**:
   - **4fett** (`/work/4fett`): Freelance financial dashboard web app with design goals, 2x2 grid, and screens.
   - **Togevent** (`/work/togevent`): 400+ screen event platform across mobile and web with design system view.
   - **Bounty Hunters** (`/work/bounty-hunters`): Editorial platform redesign with custom typography and WordPress theme build.
   - **Kiwi** (`/work/kiwi`): Behavior-change vaping reduction mobile app case study.

4. **Interactive Explorations Lightbox**:
   - Fullscreen modal image viewer with prev/next buttons, keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`), counter indicator (`1 / 8`), and backdrop blur.

5. **Infinite Client Marquee**:
   - 20 verified client logos (Talent Garden, Sketchin, Tangity, The Wave, Kiwi, Poste Italiane, Barilla, Giro d'Italia, E.ON, Enel, Prada, Costa, BPER, Sanofi, DHL, Brembo, Mottura, Monogrid, Tangible, Togevent).
   - Seamless loop with gradient edge masking and hover-pause capability.

6. **Full About Page**:
   - Hero portrait, detailed bio narrative, 5-stage career experience history with company logos, and client grid.

7. **Interactive Footer & Contact**:
   - Large email CTA with automatic copy-to-clipboard toast notification and `mailto:` fallback.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in the `dist` directory ready for deployment on Vercel, Netlify, or GitHub Pages.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🎨 How to Personalize for Your Own Portfolio

- **Personal Info & Title**: Edit `src/components/AnimatedHeroTitle.jsx` and `src/components/Header.jsx`.
- **Bio & Work History**: Edit `src/pages/About.jsx`.
- **Case Studies & Projects**: Add or customize your projects in `src/data/caseStudiesData.js`.
- **Images**: Place your own images in `public/images/`.
- **Contact Details**: Update the email and LinkedIn link in `src/components/Footer.jsx`.

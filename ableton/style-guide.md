# Ableton Design System & Style Guide 🎨

This document contains all the styling specifications, color tokens, typography scales, layout architectures, and component references needed to build the **Ableton About Page**.

---

## 🖼️ Visual Reference & Assets

- **Full Design Mockup:** [`./images/fullsize-reference.jpg`](./images/fullsize-reference.jpg)
- **Thumbnail Card:** [`./images/preview.jpg`](./images/preview.jpg)
- **Live Reference:** [https://www.ableton.com/en/about/](https://www.ableton.com/en/about/)
- **Frontend Practice Project:** [https://www.frontendpractice.com/projects/ableton](https://www.frontendpractice.com/projects/ableton)
- **All Image Assets:** Located in [`./images/`](./images/)

---

## 🎨 Color Palette

Ableton's design pairs a clean, minimalist black-and-white foundation with distinct pastel and vibrant accent blocks for image showcases.

### Color Tokens

| Token Name | Hex Code | Swatch | Intended Usage |
|------------|----------|--------|----------------|
| `--color-yellow` | `#fbffa7` | ![#fbffa7](https://via.placeholder.com/15/fbffa7/000000?text=+) | Background block for Grid 1 (Studio & Hardware) |
| `--color-orange` | `#ff764d` | ![#ff764d](https://via.placeholder.com/15/ff764d/000000?text=+) | Primary brand accent, active states, CTA button background |
| `--color-soft-blue` | `#b1c5ff` | ![#b1c5ff](https://via.placeholder.com/15/b1c5ff/000000?text=+) | Accent block & secondary highlights |
| `--color-lavender` | `#d5b3ff` | ![#d5b3ff](https://via.placeholder.com/15/d5b3ff/000000?text=+) | Background block for Grid 3 (Community & Workspace) |
| `--color-mint-green` | `#b6ffc0` | ![#b6ffc0](https://via.placeholder.com/15/b6ffc0/000000?text=+) | Background block for Grid 2 (Team & Office) |
| `--color-brand-blue` | `#0000ff` | ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) | Inline hyperlink color (`a` tag default/hover) |
| `--color-bg-light` | `#f3f3f3` | ![#f3f3f3](https://via.placeholder.com/15/f3f3f3/000000?text=+) | Subtle section backgrounds & input backdrops |
| `--color-white` | `#ffffff` | ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) | Primary canvas background & inverted text |
| `--color-text-dark` | `#000000` | ![#000000](https://via.placeholder.com/15/000000?text=+) | Headings and primary body copy |
| `--color-text-muted` | `#666666` | ![#666666](https://via.placeholder.com/15/666666/000000?text=+) | Captions, secondary labels, and copyright text |

### CSS Variables Snippet

You can copy this directly into your CSS `:root`:

```css
:root {
  /* Brand Accent Colors */
  --clr-yellow: #fbffa7;
  --clr-orange: #ff764d;
  --clr-soft-blue: #b1c5ff;
  --clr-lavender: #d5b3ff;
  --clr-mint-green: #b6ffc0;
  --clr-blue: #0000ff;

  /* Neutral Colors */
  --clr-white: #ffffff;
  --clr-bg-light: #f3f3f3;
  --clr-text-main: #000000;
  --clr-text-secondary: #222222;
  --clr-text-muted: #666666;
  --clr-border: #e0e0e0;

  /* Fonts */
  --font-primary: "Jost", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Layout Containers */
  --max-width-site: 1600px;
  --max-width-content: 1333px;
  --max-width-text: 740px;
}
```

---

## 🆎 Typography

Ableton uses a geometric sans-serif typeface with high legibility, clean geometric shapes, and distinct weights.

### Recommended Web Fonts
1. **[Jost (Google Fonts)](https://fonts.google.com/specimen/Jost)** – Excellent open-source geometric alternative with Futura proportions.
2. **[Inter (Google Fonts)](https://fonts.google.com/specimen/Inter)** – Highly readable modern grotesque sans-serif.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Type Scale & Hierarchy

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing |
|---------|----------------|---------------|--------|-------------|----------------|
| **Hero Title Overlay** | `6rem` - `8rem` (96px - 128px) | `3.5rem` (56px) | 700 (Bold) | `1.0` | `-0.02em` |
| **Intro Callout Statement** | `1.85rem` (30px) | `1.35rem` (22px) | 500 (Medium) | `1.5` | `normal` |
| **Section Heading (H2)** | `2.25rem` (36px) | `1.65rem` (26px) | 600 (Semi-bold) | `1.3` | `-0.01em` |
| **Body Paragraphs** | `1.125rem` (18px) | `1rem` (16px) | 400 (Regular) | `1.7` | `normal` |
| **Navigation Links** | `1rem` (16px) | `1.1rem` (18px) | 500 (Medium) | `1.2` | `normal` |
| **Sticky Sub-nav Links** | `0.95rem` (15px) | `0.9rem` (14px) | 500 (Medium) | `1.2` | `normal` |
| **Captions / Footnotes** | `0.85rem` (13.5px) | `0.8rem` (13px) | 400 (Regular) | `1.4` | `normal` |

---

## 📐 Layout Architecture & Measurements

### 1. Overall Container System
- **Maximum Site Width:** `1600px` (centered with `margin: 0 auto;`).
- **Standard Text Section:**
  - Content width: `max-width: 740px; margin: 0 auto;`
  - Padding: `8vw 2rem` or `100px 24px` on desktop; `60px 16px` on mobile.
- **Section Transitions:** Generous vertical rhythm (`gap: 100px` to `140px` between sections).

---

### 2. Header & Navigation Structure
- **Top Main Navigation:**
  - Left: Ableton logo icon (vertical & horizontal bars).
  - Main links: `Live`, `Push`, `Note`, `Link`, `Shop`, `Packs`, `Help`, `More +`.
  - Right: `Try Live 12 for free`, `Log in or register`.
  - Padding: `20px 40px`.
- **Secondary Sub-Navigation (Sticky):**
  - Links: `About` (active state with orange text `#ff764d`), `Jobs`, `Apprenticeships`.
  - Behavior: `position: sticky; top: 0; z-index: 100; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(5px);`.
  - Padding: `15px 40px; border-bottom: 2px solid #f3f3f3;`.

---

### 3. Hero Section
- **Image:** [`./images/photo-1.jpg`](./images/photo-1.jpg).
- **Layout:**
  - Container width: approx `80vw` (e.g. `margin: 0 auto; max-width: 1333px;`).
  - Centered text overlay: "Ableton" rendered in big bold letters (color `#ff764d` or `#000000`).
  - Container uses `position: relative; overflow: hidden;` with image height around `650px` to `750px` (`object-fit: cover;`).

---

### 4. Asymmetrical Colored Grids (The Core Challenge!)

Ableton's signature layout feature is images placed inside or overlapping asymmetrical colored rectangular backdrop blocks.

#### Grid 1: The Yellow Block (`--clr-yellow` / `#fbffa7`)
- **Images:** [`photo-2.jpg`](./images/photo-2.jpg) (large left photo) & [`photo-3.jpg`](./images/photo-3.jpg) (smaller right photo).
- **Structure:**
  - A container `display: flex;` or `display: grid;` positioned with relative placement.
  - The yellow rectangle sits on the right side taking up ~`60%` width, `100%` height.
  - Left image (`photo-2.jpg`) extends outside the yellow background to the left.
  - Right image (`photo-3.jpg`) sits vertically centered inside the yellow box.

#### Grid 2: The Mint Green Block (`--clr-mint-green` / `#b6ffc0`)
- **Images:** [`photo-6.jpg`](./images/photo-6.jpg), [`photo-7.jpg`](./images/photo-7.jpg), [`photo-8.jpg`](./images/photo-8.jpg).
- **Structure:**
  - A container with the mint green box positioned on the left side (~`60%` width).
  - Left side has two smaller photos stacked vertically or offset.
  - Right side has a large vertical photo (`photo-8.jpg`) extending out of the colored box.

#### Grid 3: The Lavender Block (`--clr-lavender` / `#d5b3ff`)
- **Images:** [`photo-10.jpg`](./images/photo-10.jpg) & [`photo-11.jpg`](./images/photo-11.jpg).
- **Structure:**
  - Lavender box centered or positioned across ~`65%` width.
  - Two equal or offset images sitting inside with balanced whitespace.

---

### 5. Media / Video Section
- **Poster Image:** [`./images/photo-5.jpg`](./images/photo-5.jpg).
- **Layout:**
  - Centered video card with a prominent circular play button overlay (blue `#0000ff` background with white triangle).
  - Caption underneath: `Why Ableton - Juanpe` in small muted font.

---

### 6. Full-Width Panorama Image
- **Image:** [`./images/photo-9.jpg`](./images/photo-9.jpg).
- **Layout:** Full container width (`100%` or max content width), generous height (`600px+`), `object-fit: cover;`.

---

### 7. Multi-Column Footer
- **Layout:** CSS Grid with 4 main columns on desktop, collapsing to 1 column on mobile.
- **Background:** White (`#ffffff`) or light off-white (`#f3f3f3`).
- **Footer Columns:**
  - **Column 1:** Brand headline, newsletter subscription form (input + submit button), disclaimer.
  - **Column 2:** Education, community, certified training links.
  - **Column 3:** Distributors, jobs, company info.
  - **Column 4:** Social icons (Facebook, Twitter, YouTube, Instagram) using the provided SVGs in `./images/`.
  - **Bottom Row:** Language / Country selector, Ableton logo watermark, and "Made in Berlin" copyright.

---

## 📱 Responsive Breakpoints

| Breakpoint | Target Screen | Layout Changes |
|------------|---------------|----------------|
| `@media (min-width: 1200px)` | Desktop / Large Monitor | Full multi-column grid, full-width asymmetric colored backgrounds, sticky sub-nav. |
| `@media (max-width: 1199px)` | Laptops & Tablets (Landscape) | Proportional scaling (`vw` units), slightly reduced font sizes and margins. |
| `@media (max-width: 768px)` | Tablets & Mobile | Main navigation collapses into a mobile hamburger menu ("Menu ▾"). Asymmetrical grids stack vertically into single-column cards with proportional colored borders/backgrounds. Footer collapses into single-column stacked sections. |

---

## 📂 Asset Catalog & Mapping

| Asset File | Type | Recommended Section |
|------------|------|---------------------|
| [`./images/logo.svg`](./images/logo.svg) | SVG | Top Header (Black logo mark) |
| [`./images/logo-orange.svg`](./images/logo-orange.svg) | SVG | Active state / Hover variant |
| [`./images/logo.png`](./images/logo.png) | PNG | Fallback logo & footer mark |
| [`./images/photo-1.jpg`](./images/photo-1.jpg) | JPG | Hero Banner Image |
| [`./images/photo-2.jpg`](./images/photo-2.jpg) | JPG | Grid 1 - Large Left Photo |
| [`./images/photo-3.jpg`](./images/photo-3.jpg) | JPG | Grid 1 - Right Photo |
| [`./images/photo-4.jpg`](./images/photo-4.jpg) | JPG | Additional Grid 1 / Workspace Photo |
| [`./images/photo-5.jpg`](./images/photo-5.jpg) | JPG | Video Section Thumbnail (Juanpe) |
| [`./images/photo-6.jpg`](./images/photo-6.jpg) | JPG | Grid 2 - Top-Left Photo |
| [`./images/photo-7.jpg`](./images/photo-7.jpg) | JPG | Grid 2 - Bottom-Left Photo |
| [`./images/photo-8.jpg`](./images/photo-8.jpg) | JPG | Grid 2 - Large Right Photo |
| [`./images/photo-9.jpg`](./images/photo-9.jpg) | JPG | Full-Width Panoramic Workspace Photo |
| [`./images/photo-10.jpg`](./images/photo-10.jpg) | JPG | Grid 3 - Left Photo |
| [`./images/photo-11.jpg`](./images/photo-11.jpg) | JPG | Grid 3 - Right Photo |
| [`./images/facebook.svg`](./images/facebook.svg) | SVG | Footer Social Media Link |
| [`./images/twitter.svg`](./images/twitter.svg) | SVG | Footer Social Media Link |
| [`./images/youtube.svg`](./images/youtube.svg) | SVG | Footer Social Media Link |
| [`./images/instagram.svg`](./images/instagram.svg) | SVG | Footer Social Media Link |
| [`./images/fullsize-reference.jpg`](./images/fullsize-reference.jpg) | JPG | Complete full-length reference screenshot |


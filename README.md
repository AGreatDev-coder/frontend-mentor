# Frontend Web Projects & UI Applications 🚀

Welcome to my frontend development portfolio repository! This collection showcases responsive, accessible, and high-performance web applications and UI components built from scratch using **Semantic HTML5**, **Modern CSS3 (Flexbox & CSS Grid)**, and **Vanilla JavaScript**.

Each project emphasizes clean code architecture, mobile-first responsive design, interactive states, and modern web standards.

---

## 📚 Projects Overview

| # | Project | Category | Tech Stack | Source Code | Live Demo |
|---|---------|----------|------------|-------------|-----------|
| 01 | **[Blog Preview Card](#1-blog-preview-card)** | UI Component | HTML5, CSS3, Flexbox | [View Code](./blog-preview-card-main/blog-preview-card-main/) | [Live Demo](https://agreatdev-blog-preview-card.netlify.app) |
| 02 | **[Fylo Dark Theme Landing Page](#2-fylo-dark-theme-landing-page)** | Landing Page | HTML5, CSS3, Flexbox, CSS Grid | [View Code](./fylo-dark-theme-landing-page-master/fylo-dark-theme-landing-page-master/) | [Live Demo](https://agreatdev-fylo-dark-theme.netlify.app) |
| 03 | **[Splitter - Tip Calculator App](#3-splitter---tip-calculator-app)** | Web Application | HTML5, CSS3, JavaScript (ES6+) | [View Code](./tip-calculator-app-main/tip-calculator-app-main/) | [Live Demo](https://agreatdev-tip-calculator.netlify.app) |

---

## 🛠️ Project Showcase

### 1. Blog Preview Card

A neo-brutalist blog preview card component featuring strong contrast, crisp solid borders, and bold offset drop shadows.

- **Live Demo:** [https://agreatdev-blog-preview-card.netlify.app](https://agreatdev-blog-preview-card.netlify.app)
- **Directory:** [`./blog-preview-card-main/blog-preview-card-main/`](./blog-preview-card-main/blog-preview-card-main/)
- **Tech Stack:** HTML5, CSS3, Flexbox
- **Key Concepts:**
  - Semantic HTML structure (`<main>`, `<article>`, `<h1>`, `<p>`, `<span>`, `<img>`)
  - CSS Custom Variables (`:root`) for color palette management
  - Flexbox for viewport centering (`min-height: 100vh`) and component alignment
  - Neo-brutalist offset `box-shadow` (`8px 8px 0px 0px #000000`) and border styling
  - Interactive hover state on card headline with smooth color transition
  - Custom Google Font integration (**Figtree**)

---

### 2. Fylo Dark Theme Landing Page

A complete, responsive marketing landing page for a cloud storage and file collaboration service, featuring dark mode styling, feature grids, testimonials, and subscription form.

- **Live Demo:** [https://agreatdev-fylo-dark-theme.netlify.app](https://agreatdev-fylo-dark-theme.netlify.app)
- **Directory:** [`./fylo-dark-theme-landing-page-master/fylo-dark-theme-landing-page-master/`](./fylo-dark-theme-landing-page-master/fylo-dark-theme-landing-page-master/)
- **Tech Stack:** HTML5, CSS3, Flexbox, CSS Grid
- **Key Concepts:**
  - Semantic HTML5 document landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
  - CSS Custom Variables (`:root`) tailored to high-contrast dark theme UI
  - Multi-column CSS Grid (`grid-template-columns`) and Flexbox layouts
  - Seamless SVG background curves for mobile and desktop screens
  - Floating CTA subscription box overlapping page boundaries (`position: relative; margin-bottom: -120px;`)
  - Font Awesome vector icon integration with circular borders and hover transitions
  - Mobile responsiveness using `@media (max-width: 768px)`

---

### 3. Splitter - Tip Calculator App

An interactive calculator application that computes tip amounts and bill split totals per person in real time. Features preset buttons, custom tip input, and input validation.

- **Live Demo:** [https://agreatdev-tip-calculator.netlify.app](https://agreatdev-tip-calculator.netlify.app)
- **Directory:** [`./tip-calculator-app-main/tip-calculator-app-main/`](./tip-calculator-app-main/tip-calculator-app-main/)
- **Tech Stack:** HTML5, CSS3, Flexbox, CSS Grid, Vanilla JavaScript (ES6+)
- **Key Concepts:**
  - Semantic HTML5 structure (`<header>`, `<main>`, `<output>`, form controls with matching labels and unique IDs)
  - CSS Custom Variables (`:root`) for streamlined color scheme management
  - Two-dimensional CSS Grid for preset tip percentage buttons & custom input
  - Real-time DOM manipulation & state tracking in Vanilla JavaScript
  - Mathematical formulas for tip per person and total bill per person formatted with `.toFixed(2)`
  - Edge-case validation (zero people handling with dynamic error message & red outline)
  - Full calculator reset flow restoring all initial states
  - Responsive design adapting the grid layout across screen sizes

---

## 💻 How to View Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AGreatDev-coder/frontend-mentor.git
   ```

2. **Navigate to any project directory:**
   ```bash
   # Example: Blog Preview Card
   cd frontend-mentor/blog-preview-card-main/blog-preview-card-main

   # Example: Fylo Landing Page
   cd frontend-mentor/fylo-dark-theme-landing-page-master/fylo-dark-theme-landing-page-master

   # Example: Tip Calculator App
   cd frontend-mentor/tip-calculator-app-main/tip-calculator-app-main
   ```

3. **Open in your browser:**
   Double-click `index.html` or open it with Live Server in VS Code.

---

## 👤 Author

- **GitHub:** [@AGreatDev-coder](https://github.com/AGreatDev-coder)

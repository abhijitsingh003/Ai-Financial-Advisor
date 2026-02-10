# Portfolio Design System & Style Guide

## 🎨 Color Palette

| Variable | Value | Description |
| :--- | :--- | :--- |
| **Background** | `#0F1110` | Deep, almost black matte background. |
| **Text (Body)** | `#ECECEC` | Off-white for high contrast but soft readability. |
| **Accent** | `#FF8C00` | **Dark Orange**. Used for key highlights, hover states, and borders. |
| **Glass BG** | `rgba(255, 255, 255, 0.05)` | Base opacity for glass cards. |
| **Glass Border** | `rgba(255, 255, 255, 0.1)` | Subtle border for glass elements. |

### Gradients
*   **Headings:** `linear-gradient(to bottom, #fff, #888)`
    *   *Usage:* Logo, H1, Section Titles, Project Titles.
    *   *Effect:* Metallic, premium look. Matches the "Thin" font weight.

---

## ✒️ Typography

### Fonts
1.  **Main (Body):** `'Inter', sans-serif`
    *   Used for: Paragraphs, descriptions, general text.
2.  **Navigation & UI:** `'Poppins', sans-serif`
    *   Used for: Nav links, Tech pills, Buttons.

### Hierarchy
*   **H1 (Hero):** 4rem, Weight 200 (Thin), Tracking -2px.
*   **Section Titles:** 3rem, Weight 200 (Thin), Tracking -1px.
*   **Project Titles:** 1.5rem, Weight 300 (Light), Tracking -0.5px.
*   **Body Text:** 1rem to 1.5rem, Weight 300 (Light), Line-height 1.6.
*   **Logo:** 1.4rem, Weight 200, Uppercase, Tracking 3px.

---

## 🔮 Glassmorphism (The "Glass" Effect)
To replicate the glass effect, use this combination:
```css
background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
border-radius: 20px;
```

---

## ✨ Component Styles

### 1. Navigation
*   **Bar:** Fixed, transparent at top, becomes Glass (`rgba(15, 17, 16, 0.8)`) on scroll.
*   **Links:** Uppercase, Poppins, tracked out (1.5px).
*   **Hover:** White underline expands from 0% to 100%.

### 2. Project Cards
*   **Style:** Glassmorphic container.
*   **Hover:** Lifts up (-8px), brighter border (`rgba(255, 255, 255, 0.2)`).
*   **Tech Pills:**
    *   Default: Transparent orange tint background.
    *   Hover: Solid Accent Orange (`#FF8C00`), Black text.

### 3. Skills (Tags)
*   **Style:** Pill shape, glass background (`rgba(255, 255, 255, 0.03)`).
*   **Hover:** Glows with Accent Orange (`rgba(255, 140, 0, 0.05)`), border highlights.

### 4. Interactive Elements
*   **Scrollbar:** Width 10px, Track `#0F1110`, Thumb Grey (turning Orange on hover).
*   **Social Icons:** Turn Orange on hover.

---

## 🎬 Animations
*   **Fade In Up:** Elements translate 30px up and fade in (transition 0.8s).
*   **Scroll Indicator:** Bounces infinitely (2s duration).
*   **Typewriter:** Characters appear one by one (30ms speed).

# Design System: Tactical Minimalism

## 1. Overview & Creative North Star
**Creative North Star: "The Urban Monolith"**

This design system is built for the intersection of high-fashion editorial and gritty urban tacticality. We move away from the "template" look by embracing **The Urban Monolith**—a philosophy that treats every screen as a solid, architectural structure. We break the standard digital grid through intentional asymmetry, extreme typographic scales, and raw, high-contrast layouts. The goal is to feel "over-engineered" yet minimalist, prioritizing sharp edges and generous whitespace to frame products like artifacts in a gallery.

---

## 2. Colors: Tonal Architecture
The palette is rooted in a deep, nocturnal foundation with a single, aggressive "Signal" accent to denote action and urgency.

### Core Palette
- **Surface (Background):** `#131313` (Deep, matte black foundation).
- **Primary (Signal):** `#ffb4a2` (A muted, industrial signal orange).
- **Secondary (Steel):** `#c0c7d1` (Cool, industrial gray).
- **Surface Tiers:** From `surface_container_lowest` (`#0e0e0e`) to `surface_bright` (`#3a3939`).

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through background color shifts. For example, a `surface_container_low` section should sit directly against a `surface` background to create a hard, geometric transition.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked industrial plates. 
- **The Base:** Always `surface`.
- **The Inset:** Use `surface_container_lowest` for recessed areas like search bars or code blocks.
- **The Lift:** Use `surface_container_high` for modals or product cards.
Nesting creates depth through tonal variance rather than artificial shadows.

### Signature Textures & Glass
To provide "soul," utilize semi-transparent layers for navigation. Use `surface` at 80% opacity with a `20px` backdrop-blur to create a "Smoked Glass" effect. Main CTAs should utilize a subtle linear gradient from `primary` to `primary_container` to give a metallic, industrial sheen.

---

## 3. Typography: Industrial Scale
We pair the geometric rigidity of **Space Grotesk** with the utilitarian clarity of **Inter**.

- **Display (Space Grotesk):** 3.5rem / 2.75rem. These are your "billboard" headers. Use `display-lg` with tight letter-spacing (-0.02em) for a heavy, architectural feel.
- **Headlines (Space Grotesk):** 2rem / 1.75rem. High-contrast, bold headers that break the flow.
- **Body (Inter):** 1rem / 0.875rem. Designed for maximum legibility amidst high-contrast backgrounds.
- **Labels (Space Grotesk):** 0.75rem. Use for technical specs, SKU numbers, and tactical metadata. Always uppercase with increased letter-spacing (+0.1em).

---

## 4. Elevation & Depth: Tonal Layering
In this system, shadows are rare; depth is a product of material stacking.

- **The Layering Principle:** Place a `surface_container_highest` card on a `surface` background to create a sharp "pop" without a shadow.
- **Ambient Shadows:** Only use shadows for floating "tactical" elements (e.g., floating cart notifications). Use the `on_surface` color at 6% opacity with a 40px blur—simulating a soft, natural ambient light.
- **The "Ghost Border" Fallback:** If a container requires a border for clarity (e.g., a text input), use the `outline_variant` at 20% opacity. **Never** use 100% opaque borders; they disrupt the monolithic aesthetic.
- **Hard Edges:** All corner radii are set to `0px`. Sharpness is non-negotiable.

---

## 5. Components

### Buttons
- **Primary:** Background: `primary`; Text: `on_primary`. Sharp 0px corners. High-impact, industrial signal.
- **Secondary:** Background: `transparent`; Border: 1px `outline_variant` (at 40%); Text: `on_surface`.
- **States:** On hover, the Primary button should invert or shift to `primary_fixed_dim` for a "lit-from-within" effect.

### Input Fields
- **Styling:** `surface_container_low` background with a `ghost border` bottom-only. 
- **States:** On focus, the bottom border animates to 100% opacity `primary`. Label text shifts to `label-sm` in `primary` color.

### Cards & Lists
- **Rule:** No divider lines. Separate items using `8px` of vertical whitespace or a subtle background toggle between `surface_container_low` and `surface_container_lowest`.
- **Interaction:** On hover, a card should shift from `surface_container_low` to `surface_container_high`.

### Tactical Chips
- Small, rectangular blocks using `surface_variant`. Used for sizes, categories, or technical specs. Typography must be `label-sm` uppercase.

---

## 6. Do's and Don'ts

### Do:
- **Embrace Asymmetry:** Offset text blocks and images to create a raw, editorial feel.
- **Use Large Margins:** Generous whitespace (minimum 64px on desktops) is required to let the typography breathe.
- **Monochromatic Imagery:** Use desaturated or high-contrast photography. The only "color" on the screen should be the `primary` accent or the product itself.

### Don't:
- **Don't Round Corners:** Any radius > 0px breaks the tactical, industrial aesthetic.
- **Don't Use Standard Grids:** Avoid simple 3-column layouts. Try overlapping elements or using a 12-column grid where items span unusual widths (e.g., 5 columns or 7 columns).
- **Don't Use Drop Shadows:** Use tonal shifts first. Only use ambient shadows for floating UI elements that exist "above" the monolith.
- **Don't Overuse the Accent:** The `primary` color (Signal Orange) is for action. If everything is orange, nothing is important.
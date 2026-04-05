# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Minimalist clothing shop. Small catalog (1–10 models), size variants (S/M/L/XL), real payments via Stripe. UI language: Polish.

Full spec in `INFO.md` — read it before making changes.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14+ (App Router) + React + TypeScript |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| Storage | Supabase Storage (public bucket, CDN) |
| Payments | Stripe Checkout |
| Hosting | Vercel |

## Commands

```bash
npm run dev       # development server
npm run build     # production build
npm run lint      # lint
```

## Database Schema

**`products`:** `id` (UUID PK), `name`, `description`, `price` (integer, in grosze/cents), `category`, `images` (URL array), `created_at`

**`variants`:** `id` (UUID PK), `product_id` (FK → products), `size` (enum: S/M/L/XL), `stock`

**`orders`:** `id` (UUID PK), `items` (JSONB: array of `{product_id, variant_id, quantity, price}`), `total`, `stripe_session_id`, `status` (enum: pending/paid/shipped/cancelled), `email`, `created_at`

**Always store prices as integers (grosze)** — never floats.

## Routes

- `/` — homepage with hero CTA + featured products grid
- `/sklep` — product catalog with category filtering
- `/sklep/[slug]` — product detail: gallery, size selector, add to cart
- `/koszyk` — cart: item list, quantity controls, checkout button
- `/zamowienie/potwierdzone` — order confirmation

## Architecture Decisions

- **Cart:** React Context + localStorage, no login required. Item shape: `{ productId, variantId, name, size, price, quantity, image }`. Validate size availability before checkout.
- **Stripe flow:** API route creates Checkout Session → redirect to hosted Stripe → redirect to `/zamowienie/potwierdzone` → webhook `checkout.session.completed` updates order status in Supabase.
- **No user accounts** — anonymous cart, email collected at checkout.
- **No admin panel** — products managed directly in Supabase dashboard.
- **SSR for SEO** — product pages server-rendered.

## Roadmap

- [ ] Stage 1 — Supabase schema + seed data
- [ ] Stage 2 — Catalog + product pages
- [ ] Stage 3 — Cart (Context + localStorage)
- [ ] Stage 4 — Stripe checkout + webhook
- [ ] Stage 5 — Homepage + UI polish
- [ ] Stage 6 — Vercel deploy + env setup

## Design System: "Tactical Minimalism" — The Urban Monolith

Full design spec in `UI PROTOTYPE/DESIGN.md`. Key non-negotiables:

### Colors
- **Background:** `#131313`
- **Primary accent:** `#ffb4a2` (signal orange — only for CTAs/actions, use sparingly)
- **Secondary:** `#c0c7d1`
- Surface tiers for depth: `#0e0e0e` (lowest) → `#3a3939` (bright)
- **No-Line Rule:** no 1px borders for sectioning — use background color shifts instead

### Typography
- **Display:** Space Grotesk, 3.5rem/2.75rem, letter-spacing `-0.02em`
- **Headlines:** Space Grotesk, 2rem/1.75rem
- **Body:** Inter, 1rem/0.875rem
- **Labels/SKUs:** Space Grotesk, 0.75rem, uppercase, letter-spacing `+0.1em`

### Hard Rules
- **0px corner radius** — always
- No drop shadows for layout (floating elements only: `on_surface` at 6% opacity, 40px blur)
- No divider lines — use 8px whitespace or background toggle (`surface_container_low` / `surface_container_lowest`)
- No standard 3-column grids — asymmetric layouts, unusual column spans (5 or 7 on 12-col)
- Minimum 64px desktop margins
- Ghost borders (when necessary): `outline_variant` at max 20% opacity

### Key Components
- **Primary Button:** `primary` bg, `on_primary` text, 0px corners; hover → `primary_fixed_dim`
- **Secondary Button:** transparent bg, 1px `outline_variant` at 40%
- **Input:** `surface_container_low` bg, bottom-only ghost border; focus animates to `primary` at 100%
- **Cards:** hover shifts `surface_container_low` → `surface_container_high`
- **Chips:** rectangular `surface_variant`, `label-sm` uppercase
- **Nav:** `surface` at 80% opacity + `backdrop-blur: 20px` (Smoked Glass)
- **Main CTAs:** linear gradient `primary` → `primary_container`

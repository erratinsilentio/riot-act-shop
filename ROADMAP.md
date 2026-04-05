# ROADMAP

## Phase 1 — Ship it (deploy-ready)

**1. Fix env vars**
- Rename `NEXT_PUBLIC_BASE_URL` → `NEXT_PUBLIC_SITE_URL` everywhere
- Add `NEXT_PUBLIC_SITE_URL=https://riotact.pl` to `.env.example`

**2. Vercel deploy**
- Connect repo to Vercel, set all env vars from `.env.example`
- Configure Stripe webhook endpoint → `https://riotact.pl/api/webhooks/stripe` with `checkout.session.completed` event
- Set `STRIPE_WEBHOOK_SECRET` from the Vercel-deployed webhook

**3. Real product content in Supabase**
- Upload actual product photos to Supabase Storage
- Update product rows with real names, descriptions, prices, and image URLs

---

## Phase 2 — Legal & completeness

**4. Legal pages** — `/regulamin`, `/polityka-prywatnosci`
Static text pages with T&C and privacy policy. Link from footer.

**5. Contact page** — `/kontakt`
Simple page with email address or contact form. Link from footer.

**6. Fix YouTube link in Footer**
Currently points to Instagram URL. Add real YouTube URL or remove the icon.

---

## Phase 3 — Growth features

**7. Newsletter backend**
Wire `Newsletter.tsx` to Resend or Mailchimp. Resend has a free tier and a minimal integration.

**8. Custom 404 page** — `app/not-found.tsx`
Branded page matching the design system, with a link back to `/sklep`.

**9. Mobile responsiveness audit**
Walk every page at 390px viewport. Known risks: `px-16` margins on `/koszyk` and `/sklep`, hero text size, product detail 7/5 grid stacking.

---

## Phase 4 — Nice-to-have

- `generateStaticParams` on product pages (switch from `force-dynamic` to ISR)
- Order confirmation email via Resend (triggered from Stripe webhook)
- OG image for social sharing (`app/opengraph-image.tsx`)

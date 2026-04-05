
> Minimalistyczny sklep z ubraniami. Mały asortyment (1–10 modeli), warianty rozmiarowe (S/M/L/XL), prawdziwe płatności przez Stripe.

---

## Stos technologiczny

|Warstwa|Technologia|Rola|
|---|---|---|
|Frontend|Next.js + React|SSR, routing, strony sklepu|
|Styling|Tailwind CSS|Minimalistyczny, clean design|
|Baza danych|Supabase (PostgreSQL)|Produkty, zamówienia, warianty|
|Storage|Supabase Storage|Zdjęcia produktów|
|Płatności|Stripe|Checkout, obsługa transakcji|
|Hosting|Vercel|Deploy Next.js|

---

## Struktura bazy danych

### `products`

- `id` — UUID, klucz główny
- `name` — nazwa produktu
- `description` — opis
- `price` — cena (w groszach)
- `category` — kategoria (np. t-shirty, bluzy, spodnie)
- `images` — tablica URLi zdjęć (Supabase Storage)
- `created_at` — timestamp

### `variants`

- `id` — UUID, klucz główny
- `product_id` — FK → products
- `size` — enum: S, M, L, XL
- `stock` — stan magazynowy

### `orders`

- `id` — UUID, klucz główny
- `items` — JSONB (tablica: product_id, variant_id, quantity, price)
- `total` — suma zamówienia
- `stripe_session_id` — ID sesji Stripe
- `status` — enum: pending, paid, shipped, cancelled
- `email` — email klienta
- `created_at` — timestamp

---

## Strony i komponenty

### Strona główna (`/`)

- Hero section z głównym CTA
- Wyróżnione produkty (siatka 2–3 kolumny)
- Minimalistyczny footer

### Katalog (`/sklep`)

- Siatka produktów ze zdjęciami i cenami
- Filtrowanie po kategoriach
- Responsywny layout

### Strona produktu (`/sklep/[slug]`)

- Galeria zdjęć
- Nazwa, opis, cena
- Wybór rozmiaru (S/M/L/XL) z informacją o dostępności
- Przycisk "Dodaj do koszyka"

### Koszyk (`/koszyk`)

- Lista produktów w koszyku (nazwa, rozmiar, ilość, cena)
- Zmiana ilości / usuwanie pozycji
- Podsumowanie kwoty
- Przycisk "Przejdź do płatności" → Stripe Checkout

### Potwierdzenie (`/zamowienie/potwierdzone`)

- Komunikat o udanej płatności
- Numer zamówienia

---

## Koszyk — logika

- Stan koszyka trzymany w React Context + localStorage
- Struktura itemu: `{ productId, variantId, name, size, price, quantity, image }`
- Walidacja dostępności rozmiaru przed checkout
- Koszyk nie wymaga logowania

---

## Płatności — Stripe flow

1. Użytkownik klika "Przejdź do płatności"
2. Next.js API route tworzy Stripe Checkout Session (line items z koszyka)
3. Redirect na hosted Stripe Checkout
4. Po płatności → redirect na `/zamowienie/potwierdzone`
5. Stripe webhook (`checkout.session.completed`) aktualizuje status zamówienia w Supabase

---

## Roadmapa

- [ ] **Etap 1** — Baza danych: tabele w Supabase + seed data (przykładowe produkty)
- [ ] **Etap 2** — Katalog + strona produktu (pobieranie danych z Supabase, wyświetlanie)
- [ ] **Etap 3** — Koszyk (React Context, dodawanie/usuwanie, localStorage)
- [ ] **Etap 4** — Stripe checkout (API route, sesja, webhook, potwierdzenie)
- [ ] **Etap 5** — Strona główna + dopieszczenie UI
- [ ] **Etap 6** — Deploy na Vercel + podpięcie domeny

---

## Decyzje projektowe

- **Bez kont użytkowników** na start — koszyk anonimowy, email podawany przy checkout
- **Bez panelu admina** na start — produkty dodawane bezpośrednio w Supabase
- **Ceny w groszach** (integer) — unikamy problemów z floatami
- **Zdjęcia w Supabase Storage** — publiczny bucket, CDN
- **SSR dla SEO** — strony produktów renderowane server-side

---

## Design — wytyczne

- **Vibe:** minimalistyczny, clean, dużo białej przestrzeni
- **Typografia:** jeden font sans-serif, max 2 wagi (regular + medium)
- **Kolory:** monochromatyczna paleta + jeden akcent
- **Zdjęcia:** duże, pełnoekranowe, bez obramowań
- **Animacje:** subtelne, tylko hover i przejścia stron

---

## Jak zacząć — Claude Code

### Setup

```bash
mkdir sklep && cd sklep
```

Skopiuj ten plik jako `BRIEF.md` do katalogu projektu. Stwórz plik `CLAUDE.md` (Claude Code czyta go automatycznie):

```markdown
# CLAUDE.md
- Projekt: sklep internetowy z ubraniami
- Stack: Next.js 14+ (App Router), TypeScript, Tailwind, Supabase, Stripe
- Pełna specyfikacja w BRIEF.md — przeczytaj przed każdą zmianą
- Ceny zawsze w groszach (integer)
- Minimalistyczny design, dużo białej przestrzeni
- Język UI: polski
```

Następnie odpal `claude` w terminalu.

### Prompty na poszczególne etapy

**Etap 1 — Projekt + baza:**

> Przeczytaj BRIEF.md — to specyfikacja sklepu internetowego. Zacznij od Etapu 1: zainicjuj projekt Next.js z TypeScript i Tailwind CSS, skonfiguruj Supabase client, i stwórz schemat bazy danych (migracja SQL dla tabel products, variants, orders z seed data). Nie rób nic więcej niż Etap 1.

**Etap 2 — Katalog + produkt:**

> Zrób stronę katalogową /sklep i stronę produktu /sklep/[slug]. Pobieraj dane z Supabase. Dodaj filtrowanie po kategoriach. Trzymaj się wytycznych designu z BRIEF.md.

**Etap 3 — Koszyk:**

> Dodaj koszyk — React Context + localStorage. Strona /koszyk z listą produktów, zmianą ilości i podsumowaniem. Przycisk "Dodaj do koszyka" na stronie produktu z wyborem rozmiaru.

**Etap 4 — Stripe:**

> Dodaj Stripe Checkout — API route tworzący sesję płatności, redirect na Stripe, strona potwierdzenia /zamowienie/potwierdzone, webhook checkout.session.completed aktualizujący status w Supabase.

**Etap 5 — Strona główna + polish:**

> Zrób stronę główną z hero section i wyróżnionymi produktami. Dopieść UI całego sklepu — spójne marginesy, responsywność, hover states, footer.

**Etap 6 — Deploy:**

> Przygotuj projekt do deploy na Vercel — sprawdź env variables, dodaj .env.example, zrób build check.

### Zasady pracy z Claude Code

- **Jeden etap na raz** — nie dawaj całości, bo dostaniesz bałagan
- **Sprawdzaj po każdym etapie** — odpal `npm run dev`, przetestuj, dopiero idź dalej
- **Aktualizuj BRIEF.md** — jak zmienisz decyzję, zapisz to tutaj
- **Baza danych** — na start możesz postawić tabele ręcznie w dashboardzie Supabase (szybciej), albo przez Supabase CLI z migracjami (lepsze długoterminowo, bo masz historię zmian w Git i możesz odtworzyć bazę jedną komendą)
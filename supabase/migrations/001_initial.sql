-- Products
create table products (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  description text not null default '',
  price       integer not null check (price > 0), -- in grosze
  category    text not null,
  images      text[] not null default '{}',
  slug        text not null unique,
  created_at  timestamptz not null default now()
);

-- Size variants
create type size_enum as enum ('S', 'M', 'L', 'XL');

create table variants (
  id         uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  size       size_enum not null,
  stock      integer not null default 0 check (stock >= 0),
  unique (product_id, size)
);

-- Orders
create type order_status as enum ('pending', 'paid', 'shipped', 'cancelled');

create table orders (
  id                uuid primary key default gen_random_uuid(),
  items             jsonb not null default '[]',
  total             integer not null check (total > 0), -- in grosze
  stripe_session_id text,
  status            order_status not null default 'pending',
  email             text not null,
  created_at        timestamptz not null default now()
);

-- Indexes
create index on variants (product_id);
create index on orders (stripe_session_id);
create index on orders (status);

-- Seed data
insert into products (name, description, price, category, slug, images) values
  (
    'Tactical Tee',
    'Koszulka z grubej bawełny. Oversize fit, minimalna grafika na plecach.',
    14900,
    't-shirty',
    'tactical-tee',
    '{}'
  ),
  (
    'Urban Hoodie',
    'Bluza z kapturem. Ciężka dzianina, kangurek, logo wyhaftowane na piersi.',
    29900,
    'bluzy',
    'urban-hoodie',
    '{}'
  ),
  (
    'Monolith Cargo',
    'Spodnie cargo z sześcioma kieszeniami. Luźne nogawki, elastyczna talia.',
    34900,
    'spodnie',
    'monolith-cargo',
    '{}'
  );

-- Seed variants for each product
insert into variants (product_id, size, stock)
select p.id, s.size, 10
from products p
cross join (values ('S'::size_enum), ('M'::size_enum), ('L'::size_enum), ('XL'::size_enum)) as s(size);

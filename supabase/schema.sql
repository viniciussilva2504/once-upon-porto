-- ============================================
-- Once Upon a Time in Porto — Supabase Schema
-- ============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ========================
-- TOURS
-- ========================
create table public.tours (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  description text not null,
  short_description text not null,
  duration_minutes integer not null,
  price_eur numeric(6,2) not null,
  max_participants integer not null default 12,
  category text not null check (category in (
    'historical', 'wine', 'archaeological', 'gastronomic',
    'azulejo', 'nocturnal', 'literary', 'photographic'
  )),
  zone text not null default 'porto' check (zone in ('porto', 'gaia', 'both')),
  image_url text not null,
  gallery_urls text[] default '{}',
  highlights text[] default '{}',
  meeting_point text not null,
  meeting_point_lat numeric(9,6),
  meeting_point_lng numeric(9,6),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create index idx_tours_slug on public.tours (slug);
create index idx_tours_category on public.tours (category);
create index idx_tours_is_active on public.tours (is_active);

-- ========================
-- TOUR SCHEDULES
-- ========================
create table public.tour_schedules (
  id uuid primary key default uuid_generate_v4(),
  tour_id uuid not null references public.tours(id) on delete cascade,
  date date not null,
  start_time time not null,
  end_time time not null,
  available_spots integer not null,
  status text not null default 'open' check (status in ('open', 'full', 'cancelled')),
  created_at timestamptz not null default now()
);

create index idx_schedules_tour on public.tour_schedules (tour_id);
create index idx_schedules_date on public.tour_schedules (date);
create index idx_schedules_status on public.tour_schedules (status);

-- ========================
-- USER PROFILES (extends Supabase Auth)
-- ========================
create table public.user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null,
  phone text,
  country text,
  avatar_url text,
  role text not null default 'client' check (role in ('client', 'admin')),
  created_at timestamptz not null default now()
);

-- ========================
-- BOOKINGS
-- ========================
create table public.bookings (
  id uuid primary key default uuid_generate_v4(),
  schedule_id uuid not null references public.tour_schedules(id),
  user_id uuid references public.user_profiles(id),
  guest_name text not null,
  guest_email text not null,
  num_participants integer not null default 1,
  total_price numeric(8,2) not null,
  stripe_session_id text,
  payment_status text not null default 'pending' check (
    payment_status in ('pending', 'paid', 'refunded', 'failed')
  ),
  confirmation_code text not null unique,
  created_at timestamptz not null default now()
);

create index idx_bookings_schedule on public.bookings (schedule_id);
create index idx_bookings_user on public.bookings (user_id);
create index idx_bookings_confirmation on public.bookings (confirmation_code);
create index idx_bookings_payment on public.bookings (payment_status);

-- ========================
-- REVIEWS
-- ========================
create table public.reviews (
  id uuid primary key default uuid_generate_v4(),
  tour_id uuid not null references public.tours(id) on delete cascade,
  user_id uuid references public.user_profiles(id),
  booking_id uuid references public.bookings(id),
  guest_name text not null,
  guest_country text,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text not null,
  is_approved boolean not null default false,
  created_at timestamptz not null default now()
);

create index idx_reviews_tour on public.reviews (tour_id);
create index idx_reviews_approved on public.reviews (is_approved);

-- ========================
-- ROW LEVEL SECURITY (RLS)
-- ========================

-- Tours: public read
alter table public.tours enable row level security;
create policy "Tours are publicly readable"
  on public.tours for select using (true);

-- Schedules: public read
alter table public.tour_schedules enable row level security;
create policy "Schedules are publicly readable"
  on public.tour_schedules for select using (true);

-- Reviews: public read approved only
alter table public.reviews enable row level security;
create policy "Approved reviews are publicly readable"
  on public.reviews for select using (is_approved = true);
create policy "Users can insert their own reviews"
  on public.reviews for insert
  with check (auth.uid() = user_id);

-- Bookings: users see own bookings
alter table public.bookings enable row level security;
create policy "Users can view their own bookings"
  on public.bookings for select
  using (auth.uid() = user_id);
create policy "Anyone can create a booking"
  on public.bookings for insert
  with check (true);

-- Profiles: users see own profile
alter table public.user_profiles enable row level security;
create policy "Users can insert their own profile"
  on public.user_profiles for insert
  with check (auth.uid() = id);
create policy "Users can view their own profile"
  on public.user_profiles for select
  using (auth.uid() = id);
create policy "Users can update their own profile"
  on public.user_profiles for update
  using (auth.uid() = id);

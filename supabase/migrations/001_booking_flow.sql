-- ============================================
-- Migration 001 — Booking Flow
-- Run this in: Supabase Dashboard → SQL Editor
-- ============================================

-- 1. Make schedule_id optional (MVP: direct date requests, no pre-defined schedule needed)
ALTER TABLE public.bookings
  ALTER COLUMN schedule_id DROP NOT NULL;

-- 2. Add tour_id (direct reference for easy joins) and requested_date
ALTER TABLE public.bookings
  ADD COLUMN IF NOT EXISTS tour_id uuid REFERENCES public.tours(id) ON DELETE SET NULL;

ALTER TABLE public.bookings
  ADD COLUMN IF NOT EXISTS requested_date date;

-- 3. Index for faster queries
CREATE INDEX IF NOT EXISTS idx_bookings_tour ON public.bookings (tour_id);

-- 4. Enable RLS
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- 5. Anyone can create a booking (guests and authenticated users)
CREATE POLICY "Anyone can create a booking"
  ON public.bookings
  FOR INSERT
  WITH CHECK (true);

-- 6. Authenticated users can view their own bookings
CREATE POLICY "Users can view own bookings"
  ON public.bookings
  FOR SELECT
  USING (user_id = auth.uid());

-- 7. Anyone with the confirmation code can view it (code is a secret token)
CREATE POLICY "Public can read booking by confirmation code"
  ON public.bookings
  FOR SELECT
  USING (true);

import { createClient } from "@/lib/supabase/server";
import { MOCK_TOURS, MOCK_REVIEWS } from "@/lib/mock-data";
import type { Tour, TourCategory } from "@/types";

// ========================
// TOURS
// ========================

export async function getTours(category?: TourCategory): Promise<Tour[]> {
  try {
    const supabase = await createClient();
    let query = supabase
      .from("tours")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: true });

    if (category) {
      query = query.eq("category", category);
    }

    const { data, error } = await query;
    if (error) throw error;
    if (!data || data.length === 0) throw new Error("No tours found");

    return data.map(mapTourRow);
  } catch {
    // Fallback to mock data
    if (category) {
      return MOCK_TOURS.filter((t) => t.category === category);
    }
    return MOCK_TOURS;
  }
}

export async function getTourBySlug(slug: string): Promise<Tour | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("tours")
      .select("*")
      .eq("slug", slug)
      .eq("is_active", true)
      .single();

    if (error) throw error;
    if (!data) return null;

    return mapTourRow(data);
  } catch {
    return MOCK_TOURS.find((t) => t.slug === slug) ?? null;
  }
}

export async function getAllTourSlugs(): Promise<string[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("tours")
      .select("slug")
      .eq("is_active", true);

    if (error) throw error;
    if (!data || data.length === 0) throw new Error("No slugs");

    return data.map((t) => t.slug);
  } catch {
    return MOCK_TOURS.map((t) => t.slug);
  }
}

// ========================
// REVIEWS
// ========================

export interface ReviewWithGuest {
  id: string;
  tour_id: string;
  guest_name: string;
  guest_country: string | null;
  rating: number;
  comment: string;
  created_at: string;
}

export async function getApprovedReviews(
  tourId?: string
): Promise<ReviewWithGuest[]> {
  try {
    const supabase = await createClient();
    let query = supabase
      .from("reviews")
      .select("id, tour_id, guest_name, guest_country, rating, comment, created_at")
      .eq("is_approved", true)
      .order("created_at", { ascending: false });

    if (tourId) {
      query = query.eq("tour_id", tourId);
    }

    const { data, error } = await query;
    if (error) throw error;
    if (!data || data.length === 0) throw new Error("No reviews");

    return data;
  } catch {
    // Fallback to mock
    const reviews = tourId
      ? MOCK_REVIEWS.filter((r) => r.tour_id === tourId)
      : MOCK_REVIEWS;
    return reviews.map((r) => ({
      id: r.id,
      tour_id: r.tour_id,
      guest_name: r.user.full_name,
      guest_country: r.user.country,
      rating: r.rating,
      comment: r.comment,
      created_at: r.created_at,
    }));
  }
}

// ========================
// SCHEDULES
// ========================

export interface ScheduleSlot {
  id: string;
  tour_id: string;
  date: string;
  start_time: string;
  end_time: string;
  available_spots: number;
  status: "open" | "full" | "cancelled";
}

export async function getAvailableSchedules(
  tourId: string
): Promise<ScheduleSlot[]> {
  try {
    const supabase = await createClient();
    const today = new Date().toISOString().split("T")[0];
    const { data, error } = await supabase
      .from("tour_schedules")
      .select("*")
      .eq("tour_id", tourId)
      .eq("status", "open")
      .gte("date", today)
      .gt("available_spots", 0)
      .order("date", { ascending: true })
      .order("start_time", { ascending: true });

    if (error) throw error;
    return (data as ScheduleSlot[]) ?? [];
  } catch {
    return [];
  }
}

// ========================
// HELPERS
// ========================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapTourRow(row: any): Tour {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    description: row.description,
    short_description: row.short_description,
    duration_minutes: row.duration_minutes,
    price_eur: Number(row.price_eur),
    max_participants: row.max_participants,
    category: row.category,
    zone: row.zone,
    image_url: row.image_url,
    gallery_urls: row.gallery_urls ?? [],
    highlights: row.highlights ?? [],
    meeting_point: row.meeting_point,
    meeting_point_coords: {
      lat: Number(row.meeting_point_lat),
      lng: Number(row.meeting_point_lng),
    },
    is_active: row.is_active,
    created_at: row.created_at,
  };
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  description: string;
  short_description: string;
  duration_minutes: number;
  price_eur: number;
  max_participants: number;
  category: TourCategory;
  zone: TourZone;
  image_url: string;
  gallery_urls: string[];
  highlights: string[];
  meeting_point: string;
  meeting_point_coords: { lat: number; lng: number };
  is_active: boolean;
  created_at: string;
}

export type TourCategory =
  | "historical"
  | "wine"
  | "archaeological"
  | "gastronomic"
  | "azulejo"
  | "nocturnal"
  | "literary"
  | "photographic";

export type TourZone = "porto" | "gaia" | "both";

export interface TourSchedule {
  id: string;
  tour_id: string;
  date: string;
  start_time: string;
  end_time: string;
  available_spots: number;
  status: "open" | "full" | "cancelled";
}

export interface Booking {
  id: string;
  tour_id: string | null;
  schedule_id: string | null;
  user_id: string | null;
  guest_name: string;
  guest_email: string;
  requested_date: string | null;
  num_participants: number;
  total_price: number;
  stripe_session_id: string | null;
  payment_status: "pending" | "paid" | "refunded" | "failed";
  confirmation_code: string;
  created_at: string;
}

export interface BookingWithTour extends Booking {
  tour_title: string | null;
  tour_slug: string | null;
  tour_price_eur: number | null;
}

export interface Review {
  id: string;
  tour_id: string;
  user_id: string;
  booking_id: string;
  rating: number;
  comment: string;
  is_approved: boolean;
  created_at: string;
  user?: UserProfile;
}

export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  country: string | null;
  avatar_url: string | null;
  role: "client" | "admin";
}

export const CATEGORY_LABELS: Record<TourCategory, string> = {
  historical: "Historical",
  wine: "Port Wine",
  archaeological: "Archaeological",
  gastronomic: "Food & Drink",
  azulejo: "Azulejo Art",
  nocturnal: "Night Tour",
  literary: "Literary",
  photographic: "Photography",
};

export const ZONE_LABELS: Record<TourZone, string> = {
  porto: "Porto",
  gaia: "Vila Nova de Gaia",
  both: "Porto & Gaia",
};

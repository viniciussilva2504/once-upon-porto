import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Users,
  MapPin,
  Star,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { StarRating } from "@/components/reviews/StarRating";
import { getTourBySlug, getAllTourSlugs, getApprovedReviews } from "@/lib/data";
import { CATEGORY_LABELS, ZONE_LABELS } from "@/types";

interface TourPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);
  if (!tour) return { title: "Tour Not Found" };

  return {
    title: tour.title,
    description: tour.short_description,
    openGraph: {
      title: tour.title,
      description: tour.short_description,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllTourSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) notFound();

  const tourReviews = await getApprovedReviews(tour.id);
  const avgRating =
    tourReviews.length > 0
      ? tourReviews.reduce((sum, r) => sum + r.rating, 0) / tourReviews.length
      : 0;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href="/tours"
              className="hover:text-foreground transition-colors"
            >
              Tours
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium truncate">
              {tour.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-foreground via-accent to-foreground py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/tours"
            className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all tours
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-primary-light backdrop-blur-sm">
              {CATEGORY_LABELS[tour.category]}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm">
              {ZONE_LABELS[tour.zone]}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            {tour.title}
          </h1>

          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            {tour.short_description}
          </p>

          {/* Quick stats */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {Math.floor(tour.duration_minutes / 60)}h
              {tour.duration_minutes % 60 > 0 &&
                ` ${tour.duration_minutes % 60}m`}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              Max {tour.max_participants} people
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {tour.meeting_point}
            </span>
            {avgRating > 0 && (
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-primary-light text-primary-light" />
                {avgRating.toFixed(1)} ({tourReviews.length} reviews)
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  About This Tour
                </h2>
                <p className="text-muted leading-relaxed">{tour.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Tour Highlights
                </h2>
                <ul className="space-y-3">
                  {tour.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meeting Point */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Meeting Point
                </h2>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">
                      {tour.meeting_point}
                    </p>
                    <p className="text-sm text-muted mt-1">
                      Your guide Fábio will be waiting with a sign. Please
                      arrive 5 minutes before the start time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              {tourReviews.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Guest Reviews
                  </h2>
                  <div className="space-y-4">
                    {tourReviews.map((review) => (
                      <div
                        key={review.id}
                        className="p-4 rounded-xl bg-surface border border-border"
                      >
                        <StarRating rating={review.rating} size={14} />
                        <p className="mt-2 text-sm text-muted leading-relaxed">
                          &ldquo;{review.comment}&rdquo;
                        </p>
                        <p className="mt-2 text-xs font-semibold text-foreground">
                          {review.guest_name}{" "}
                          <span className="font-normal text-muted">
                            — {review.guest_country}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar — Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl bg-surface border border-border p-6 shadow-sm">
                <div className="mb-4">
                  <span className="text-sm text-muted">From</span>
                  <p className="text-3xl font-bold text-primary">
                    €{tour.price_eur}
                    <span className="text-sm font-normal text-muted">
                      /person
                    </span>
                  </p>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted">Duration</span>
                    <span className="font-medium text-foreground">
                      {Math.floor(tour.duration_minutes / 60)}h
                      {tour.duration_minutes % 60 > 0 &&
                        ` ${tour.duration_minutes % 60}m`}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted">Group Size</span>
                    <span className="font-medium text-foreground">
                      Up to {tour.max_participants}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted">Language</span>
                    <span className="font-medium text-foreground">English</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted">Zone</span>
                    <span className="font-medium text-foreground">
                      {ZONE_LABELS[tour.zone]}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Check Availability
                </button>

                <p className="mt-3 text-center text-xs text-muted">
                  Free cancellation up to 24 hours before
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

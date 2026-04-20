import type { Metadata } from "next";
import Link from "next/link";
import { Star, ChevronRight, Quote } from "lucide-react";
import { StarRating } from "@/components/reviews/StarRating";
import { getTours, getApprovedReviews } from "@/lib/data";

export const metadata: Metadata = {
  title: "Guest Reviews",
  description:
    "Read what travelers say about Once Upon a Time in Porto walking tours. Real reviews from real guests who explored Porto with archaeologist Fábio Soares.",
};

export default async function ReviewsPage() {
  const [tours, reviews] = await Promise.all([
    getTours(),
    getApprovedReviews(),
  ]);

  const tourMap = Object.fromEntries(
    tours.map((t) => [t.id, { title: t.title, slug: t.slug }])
  );

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);
  const fiveStarCount = reviews.filter((r) => r.rating === 5).length;

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-foreground via-accent to-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-light">
              Testimonials
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
              Guest Reviews
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Real stories from travelers who explored Porto with us.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-center">
            <div>
              <div className="flex items-center justify-center gap-2">
                <Star className="h-6 w-6 fill-primary-light text-primary-light" />
                <span className="text-3xl font-bold text-foreground">
                  {avgRating.toFixed(1)}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">Average Rating</p>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div>
              <span className="text-3xl font-bold text-foreground">
                {reviews.length}
              </span>
              <p className="mt-1 text-sm text-muted">Total Reviews</p>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div>
              <span className="text-3xl font-bold text-foreground">
                {reviews.length > 0
                  ? Math.round((fiveStarCount / reviews.length) * 100)
                  : 0}
                %
              </span>
              <p className="mt-1 text-sm text-muted">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS GRID ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col rounded-2xl bg-surface border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <Quote className="h-8 w-8 text-primary/20 mb-3 shrink-0" />
                <p className="text-sm text-muted leading-relaxed flex-1">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <StarRating rating={review.rating} size={14} />
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {review.guest_name}
                  </p>
                  <p className="text-xs text-muted">
                    {review.guest_country}
                    {tourMap[review.tour_id] && (
                      <>
                        {" · "}
                        <Link
                          href={`/tours/${tourMap[review.tour_id].slug}`}
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          {tourMap[review.tour_id].title}
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder for more reviews */}
          <div className="mt-16 text-center rounded-2xl bg-surface border border-border p-12">
            <Star className="h-10 w-10 text-primary/20 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground">
              More Reviews Coming Soon
            </h3>
            <p className="mt-2 text-sm text-muted max-w-md mx-auto">
              We&apos;re growing! As more guests join our tours, this page will
              fill with their stories. Want to be featured here?
            </p>
            <Link
              href="/tours"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Book a Tour
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

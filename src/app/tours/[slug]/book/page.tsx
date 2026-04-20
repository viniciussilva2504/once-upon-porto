import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, Clock, Users, MapPin } from "lucide-react";
import { getTourBySlug } from "@/lib/data";
import { getCurrentUser } from "@/lib/auth";
import { CATEGORY_LABELS } from "@/types";
import { BookingForm } from "./BookingForm";

interface BookPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ error?: string }>;
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);
  if (!tour) return { title: "Tour Not Found" };

  return {
    title: `Book — ${tour.title}`,
    description: `Reserve your spot on ${tour.title} with archaeologist Fábio Soares.`,
  };
}

export default async function BookPage({
  params,
  searchParams,
}: BookPageProps) {
  const { slug } = await params;
  const { error } = await searchParams;

  const [tour, currentUser] = await Promise.all([
    getTourBySlug(slug),
    getCurrentUser(),
  ]);

  if (!tour) notFound();

  const durationLabel = `${Math.floor(tour.duration_minutes / 60)}h${
    tour.duration_minutes % 60 > 0 ? ` ${tour.duration_minutes % 60}m` : ""
  }`;

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
            <Link
              href={`/tours/${slug}`}
              className="hover:text-foreground transition-colors truncate max-w-[160px]"
            >
              {tour.title}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Book</span>
          </nav>
        </div>
      </div>

      {/* Page content */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/tours/${slug}`}
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to tour details
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Booking Form — main column */}
            <div className="lg:col-span-3">
              <BookingForm
                tourId={tour.id}
                tourSlug={slug}
                tourTitle={tour.title}
                pricePerPerson={tour.price_eur}
                maxParticipants={tour.max_participants}
                prefillName={currentUser?.fullName ?? ""}
                prefillEmail={currentUser?.email ?? ""}
                errorParam={error}
              />
            </div>

            {/* Tour Summary sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 rounded-2xl border border-border bg-white p-6 shadow-sm space-y-5">
                <div>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {CATEGORY_LABELS[tour.category]}
                  </span>
                  <h2 className="mt-2 text-lg font-bold text-foreground leading-snug">
                    {tour.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted line-clamp-3">
                    {tour.short_description}
                  </p>
                </div>

                <div className="space-y-3 text-sm border-t border-border pt-4">
                  <div className="flex items-center gap-2 text-muted">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    <span>{durationLabel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <Users className="h-4 w-4 text-primary shrink-0" />
                    <span>Max {tour.max_participants} people</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <span>{tour.meeting_point}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted leading-relaxed">
                    <strong className="text-foreground">How it works:</strong>{" "}
                    Submit your request and Fábio will reply within 24 hours to
                    confirm availability and share payment details. No charge
                    until confirmed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

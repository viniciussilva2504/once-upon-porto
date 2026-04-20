import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Calendar,
  Users,
  Mail,
  Hash,
  ArrowRight,
} from "lucide-react";
import { getBookingByCode } from "@/lib/data";

export const metadata: Metadata = {
  title: "Booking Confirmed",
  description: "Your tour booking request has been received.",
};

// Dynamic — never cache, each code is unique
export const dynamic = "force-dynamic";

interface ConfirmationPageProps {
  searchParams: Promise<{ code?: string }>;
}

export default async function ConfirmationPage({
  searchParams,
}: ConfirmationPageProps) {
  const { code } = await searchParams;

  if (!code) notFound();

  const booking = await getBookingByCode(code);
  if (!booking) notFound();

  const formattedDate = booking.requested_date
    ? new Date(booking.requested_date + "T12:00:00").toLocaleDateString(
        "en-GB",
        { weekday: "long", year: "numeric", month: "long", day: "numeric" }
      )
    : "TBC";

  return (
    <section className="bg-gradient-to-br from-foreground via-accent to-foreground py-16 sm:py-24 min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-lg w-full px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-white p-8 shadow-2xl sm:p-10">
          {/* Success icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="h-7 w-7 text-green-600" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Request Received!
          </p>
          <h1 className="mt-3 text-3xl font-bold text-foreground">
            You&apos;re almost there
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Fábio will confirm your spot and send payment details to{" "}
            <strong className="text-foreground">{booking.guest_email}</strong>{" "}
            within 24 hours.
          </p>

          {/* Booking summary */}
          <div className="mt-8 rounded-2xl border border-border bg-surface divide-y divide-border overflow-hidden">
            {booking.tour_title && (
              <div className="flex items-start gap-3 px-5 py-4">
                <Hash className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Tour
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">
                    {booking.tour_title}
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3 px-5 py-4">
              <Calendar className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Requested Date
                </p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">
                  {formattedDate}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 px-5 py-4">
              <Users className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Participants · Total
                </p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">
                  {booking.num_participants}{" "}
                  {booking.num_participants === 1 ? "person" : "people"} ·{" "}
                  <span className="text-primary">
                    €{Number(booking.total_price).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 px-5 py-4">
              <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Confirmation Code
                </p>
                <p className="mt-0.5 font-mono text-base font-bold tracking-[0.2em] text-foreground">
                  {booking.confirmation_code}
                </p>
                <p className="mt-0.5 text-xs text-muted">
                  Save this code — you may need it to manage your booking.
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Explore More Tours
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/account"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              View My Bookings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

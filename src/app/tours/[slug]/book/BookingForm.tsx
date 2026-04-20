"use client";

import { useFormStatus } from "react-dom";
import { Calendar, Users, User, Mail, ChevronRight } from "lucide-react";
import { createBookingAction } from "@/app/actions/booking";

interface BookingFormProps {
  tourId: string;
  tourSlug: string;
  tourTitle: string;
  pricePerPerson: number;
  maxParticipants: number;
  prefillName?: string;
  prefillEmail?: string;
  errorParam?: string;
}

// Minimum date = tomorrow
function getTomorrowISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? (
        "Processing…"
      ) : (
        <>
          Request Booking
          <ChevronRight className="h-4 w-4" />
        </>
      )}
    </button>
  );
}

export function BookingForm({
  tourId,
  tourSlug,
  tourTitle,
  pricePerPerson,
  maxParticipants,
  prefillName = "",
  prefillEmail = "",
  errorParam,
}: BookingFormProps) {
  const boundAction = createBookingAction.bind(null, tourId, pricePerPerson);
  const tomorrow = getTomorrowISO();

  return (
    <div className="rounded-3xl border border-border bg-white p-8 shadow-xl sm:p-10">
      {/* Header */}
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
        Book Your Tour
      </p>
      <h1 className="mt-3 text-3xl font-bold text-foreground">{tourTitle}</h1>
      <p className="mt-2 text-sm text-muted">
        From{" "}
        <span className="font-semibold text-primary text-base">
          €{pricePerPerson}
        </span>{" "}
        per person · Free cancellation up to 24h before
      </p>

      {/* Error banner */}
      {errorParam && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorParam}
        </div>
      )}

      <form action={boundAction} className="mt-8 space-y-6">
        {/* Hidden fields */}
        <input type="hidden" name="slug" value={tourSlug} />

        {/* Date */}
        <div>
          <label
            htmlFor="requestedDate"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" />
              Preferred Date
            </span>
          </label>
          <input
            id="requestedDate"
            name="requestedDate"
            type="date"
            min={tomorrow}
            required
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
          />
          <p className="mt-1 text-xs text-muted">
            Fábio will confirm the exact start time within 24h.
          </p>
        </div>

        {/* Participants */}
        <div>
          <label
            htmlFor="numParticipants"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              Number of Participants
            </span>
          </label>
          <select
            id="numParticipants"
            name="numParticipants"
            defaultValue="2"
            required
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
          >
            {Array.from({ length: maxParticipants }, (_, i) => i + 1).map(
              (n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "person" : "people"} — €
                  {(n * pricePerPerson).toFixed(0)} total
                </option>
              )
            )}
          </select>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">
            Your Details
          </p>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="guestName"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4 text-primary" />
                Full Name
              </span>
            </label>
            <input
              id="guestName"
              name="guestName"
              type="text"
              required
              defaultValue={prefillName}
              autoComplete="name"
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
              placeholder="Jane Smith"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="guestEmail"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              <span className="inline-flex items-center gap-1.5">
                <Mail className="h-4 w-4 text-primary" />
                Email Address
              </span>
            </label>
            <input
              id="guestEmail"
              name="guestEmail"
              type="email"
              required
              defaultValue={prefillEmail}
              autoComplete="email"
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
              placeholder="jane@example.com"
            />
            <p className="mt-1 text-xs text-muted">
              Your confirmation will be sent here.
            </p>
          </div>
        </div>

        {/* Submit */}
        <SubmitButton />

        <p className="text-center text-xs text-muted">
          No payment required now. Fábio will confirm availability and send
          payment details within 24 hours.
        </p>
      </form>
    </div>
  );
}

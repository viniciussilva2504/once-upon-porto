import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Users, Hash, ArrowRight } from "lucide-react";
import { logoutAction } from "@/app/actions/auth";
import { requireUser } from "@/lib/auth";
import { getUserBookings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Account",
  description:
    "Manage your Once Upon a Time in Porto guest account and bookings.",
};

export default async function AccountPage() {
  const user = await requireUser();
  const bookings = await getUserBookings(user.id);

  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Profile card */}
        <div className="rounded-3xl border border-border bg-white p-8 shadow-xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Your Account
          </p>
          <h1 className="mt-3 text-3xl font-bold text-foreground">
            Welcome back{user.fullName ? `, ${user.fullName}` : ""}
          </h1>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Email
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">
                {user.email}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Full Name
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">
                {user.fullName ?? "Not set yet"}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Book a Tour
              <ArrowRight className="h-4 w-4" />
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>

        {/* Bookings list */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">
            My Bookings
          </h2>

          {bookings.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-white p-10 text-center">
              <p className="text-muted text-sm">You have no bookings yet.</p>
              <Link
                href="/tours"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition"
              >
                Browse tours <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => {
                const formattedDate = booking.requested_date
                  ? new Date(
                      booking.requested_date + "T12:00:00"
                    ).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "TBC";

                const statusColour =
                  booking.payment_status === "paid"
                    ? "text-green-700 bg-green-50 border-green-200"
                    : booking.payment_status === "failed"
                      ? "text-red-700 bg-red-50 border-red-200"
                      : "text-amber-700 bg-amber-50 border-amber-200";

                return (
                  <div
                    key={booking.id}
                    className="rounded-2xl border border-border bg-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">
                        {booking.tour_title ?? "Tour"}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-primary" />
                          {formattedDate}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-primary" />
                          {booking.num_participants}{" "}
                          {booking.num_participants === 1 ? "person" : "people"}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Hash className="h-3.5 w-3.5 text-primary" />
                          <span className="font-mono tracking-wider">
                            {booking.confirmation_code}
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize ${statusColour}`}
                      >
                        {booking.payment_status}
                      </span>
                      <p className="text-base font-bold text-primary">
                        €{Number(booking.total_price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
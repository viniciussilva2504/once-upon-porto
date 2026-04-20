import Link from "next/link";
import type { Metadata } from "next";
import { logoutAction } from "@/app/actions/auth";
import { requireUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Account",
  description:
    "Manage your Once Upon a Time in Porto guest account and future bookings.",
};

export default async function AccountPage() {
  const user = await requireUser();

  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Your Account
          </p>
          <h1 className="mt-3 text-3xl font-bold text-foreground">
            Welcome back{user.fullName ? `, ${user.fullName}` : ""}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            This account foundation is now connected to Supabase Auth. The next step will be attaching bookings, review history, and profile editing to this space.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Email
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">{user.email}</p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Full name
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">
                {user.fullName ?? "Not set yet"}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Explore Tours
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
      </div>
    </section>
  );
}
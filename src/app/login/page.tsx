import Link from "next/link";
import type { Metadata } from "next";
import { loginAction } from "@/app/actions/auth";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to manage your bookings and reviews for Once Upon a Time in Porto.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{
    error?: string;
    message?: string;
    redirectTo?: string;
  }>;
}) {
  const { error, message, redirectTo } = await searchParams;

  return (
    <section className="bg-gradient-to-br from-foreground via-accent to-foreground py-16 sm:py-20">
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white p-8 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Guest Account
          </p>
          <h1 className="mt-3 text-3xl font-bold text-foreground">Sign in</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Access your future bookings, account details, and review history.
          </p>

          {message ? (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              {message}
            </div>
          ) : null}

          {error ? (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          <form action={loginAction} className="mt-8 space-y-4">
            <input type="hidden" name="redirectTo" value={redirectTo ?? "/account"} />

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-border px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-semibold text-foreground">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full rounded-2xl border border-border px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-sm text-muted">
            New here?{" "}
            <Link href="/signup" className="font-semibold text-primary hover:text-primary-dark">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
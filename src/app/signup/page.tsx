import Link from "next/link";
import type { Metadata } from "next";
import { signupAction } from "@/app/actions/auth";

export const metadata: Metadata = {
  title: "Create Account",
  description:
    "Create an account to manage your Porto tour bookings and write reviews after your experience.",
};

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{
    error?: string;
    redirectTo?: string;
  }>;
}) {
  const { error, redirectTo } = await searchParams;

  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Guest Account
          </p>
          <h1 className="mt-3 text-3xl font-bold text-foreground">
            Create your account
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Save your details now so booking and reviewing your Porto experience is straightforward later.
          </p>

          {error ? (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          <form action={signupAction} className="mt-8 space-y-4">
            <input type="hidden" name="redirectTo" value={redirectTo ?? "/account"} />

            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-foreground">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full rounded-2xl border border-border px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                placeholder="Fábio Soares"
              />
            </div>

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
                minLength={6}
                className="w-full rounded-2xl border border-border px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                placeholder="Choose a secure password"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-sm text-muted">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary hover:text-primary-dark">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { logoutAction } from "@/app/actions/auth";
import type { AuthUserSummary } from "@/lib/auth";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

interface HeaderClientProps {
  currentUser: AuthUserSummary | null;
}

export function HeaderClient({ currentUser }: HeaderClientProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <MapPin className="h-6 w-6 text-primary" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                Once Upon a Time
              </span>
              <span className="text-xs font-medium text-muted -mt-0.5">
                in Porto
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {currentUser ? (
              <>
                <Link
                  href="/account"
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  Account
                </Link>
                <form action={logoutAction}>
                  <button
                    type="submit"
                    className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    Sign Out
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Create Account
                </Link>
              </>
            )}

            <Link
              href="/tours"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Book a Tour
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-muted hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-2 text-base font-medium text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {currentUser ? (
              <>
                <Link
                  href="/account"
                  className="block px-2 py-2 text-base font-medium text-muted hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Account
                </Link>
                <form action={logoutAction}>
                  <button
                    type="submit"
                    className="block w-full px-2 py-2 text-left text-base font-medium text-primary hover:text-primary-dark transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign Out
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-2 py-2 text-base font-medium text-muted hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="block px-2 py-2 text-base font-medium text-muted hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Create Account
                </Link>
              </>
            )}

            <Link
              href="/tours"
              className="block mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Book a Tour
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
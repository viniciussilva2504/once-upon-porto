import Link from "next/link";
import { MapPin, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <MapPin className="h-16 w-16 text-primary/30 mb-6" />
      <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>
      <p className="mt-4 text-muted max-w-md">
        Looks like you&apos;ve wandered off the trail. This page doesn&apos;t
        exist — but our tours are waiting for you.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
        >
          Browse Tours
        </Link>
      </div>
    </section>
  );
}

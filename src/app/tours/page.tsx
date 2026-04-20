import type { Metadata } from "next";
import Link from "next/link";
import { TourCard } from "@/components/tours/TourCard";
import { getTours } from "@/lib/data";
import { CATEGORY_LABELS, type TourCategory } from "@/types";

export const metadata: Metadata = {
  title: "Walking Tours",
  description:
    "Explore Porto and Vila Nova de Gaia with expert-led walking tours. Historical, wine, food, azulejo art, and more — guided by archaeologist Fábio Soares.",
};

export default function ToursPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  return <ToursContent searchParamsPromise={searchParams} />;
}

async function ToursContent({
  searchParamsPromise,
}: {
  searchParamsPromise: Promise<{ category?: string }>;
}) {
  const { category } = await searchParamsPromise;
  const allTours = await getTours();

  const filteredTours = category
    ? allTours.filter((t) => t.category === category)
    : allTours;

  const categories = [
    ...new Set(allTours.map((t) => t.category)),
  ] as TourCategory[];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-foreground via-accent to-foreground py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Walking Tours
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Choose your journey through Porto&apos;s rich history. Each tour is
            a unique narrative experience led by archaeologist Fábio Soares.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            <Link
              href="/tours"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                !category
                  ? "bg-primary text-white"
                  : "bg-surface border border-border text-muted hover:text-foreground"
              }`}
            >
              All Tours
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/tours?category=${cat}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-primary text-white"
                    : "bg-surface border border-border text-muted hover:text-foreground"
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </Link>
            ))}
          </div>

          {/* Tour Grid */}
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-muted">
                No tours found in this category.
              </p>
              <Link
                href="/tours"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:text-primary-dark"
              >
                View all tours
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Star,
  Clock,
  Users,
  Shield,
  ChevronRight,
  GraduationCap,
  Quote,
} from "lucide-react";
import { TourCard } from "@/components/tours/TourCard";
import { StarRating } from "@/components/reviews/StarRating";
import { MOCK_TOURS, MOCK_REVIEWS } from "@/lib/mock-data";

export default function Home() {
  const featuredTours = MOCK_TOURS.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Once Upon a Time in Porto",
    description:
      "Expert-led walking tours through Porto and Vila Nova de Gaia with archaeologist Fábio Soares.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Porto",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.1496,
      longitude: -8.6109,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
    },
    priceRange: "€30 - €50",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/hero-porto.jpg"
          alt="Panoramic view of Porto's historic center and Douro River"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-light backdrop-blur-sm mb-6">
              <MapPin className="h-4 w-4" />
              Porto & Vila Nova de Gaia, Portugal
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Once Upon a Time{" "}
              <span className="text-primary-light">in Porto</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/70 max-w-xl">
              Step into centuries of history with expert-led walking tours
              through Porto&apos;s medieval streets, Port wine cellars, and
              hidden stories — guided by archaeologist{" "}
              <strong className="text-white">Fábio Soares</strong>.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Explore Our Tours
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Meet Your Guide
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-primary-light text-primary-light" />
                <span>
                  <strong className="text-white">4.9</strong> average rating
                </span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <span>
                <strong className="text-white">500+</strong> happy guests
              </span>
              <div className="h-4 w-px bg-white/20" />
              <span>
                <strong className="text-white">6</strong> unique tours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUE PROPS ===== */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Expert Archaeologist",
                desc: "Led by Fábio Soares — professional archaeologist and historian.",
              },
              {
                icon: Users,
                title: "Small Groups",
                desc: "Intimate groups of 10-15 for a personal, immersive experience.",
              },
              {
                icon: Clock,
                title: "2-3 Hour Tours",
                desc: "Deep dives, not surface overviews. Walk at a leisurely pace.",
              },
              {
                icon: Shield,
                title: "Book with Confidence",
                desc: "Free cancellation up to 24h. Secure online payments.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED TOURS ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Most Popular Tours
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Each tour is a journey through time — crafted and narrated by an
              archaeologist who brings Porto&apos;s history to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
            >
              View All Tours
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT FÁBIO PREVIEW ===== */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
              <div className="text-center text-muted">
                <GraduationCap className="h-20 w-20 mx-auto mb-4 text-primary/30" />
                <p className="text-sm">Photo of Fábio Soares</p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Your Guide
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
                Fábio Soares
              </h2>
              <p className="mt-2 text-lg font-medium text-accent">
                Archaeologist & Historian
              </p>
              <p className="mt-6 text-muted leading-relaxed">
                With a degree in Archaeology and a deep passion for Porto&apos;s
                layered past, Fábio doesn&apos;t just show you the city — he
                helps you understand it. Every street, every building, every tile
                has a story, and Fábio knows how to tell it.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                His tours go beyond guidebook facts. Expect original research,
                archaeological insights, and the kind of storytelling that makes
                history feel alive — from Roman ruins beneath your feet to
                medieval trade wars and the birth of the Port wine industry.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Read full bio
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What Our Guests Say
            </h2>
            <p className="mt-4 text-lg text-muted">
              Real stories from real travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="flex flex-col rounded-2xl bg-surface border border-border p-6"
              >
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <p className="text-sm text-muted leading-relaxed flex-1">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <StarRating rating={review.rating} size={14} />
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {review.user.full_name}
                  </p>
                  <p className="text-xs text-muted">{review.user.country}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              Read all reviews
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-br from-foreground via-accent to-foreground">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Discover Porto&apos;s Hidden Stories?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Book your tour today and experience Porto through the eyes of an
            archaeologist. Small groups, big stories.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Browse Tours & Book
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

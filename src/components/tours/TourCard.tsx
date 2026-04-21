import Link from "next/link";
import Image from "next/image";
import { Clock, Users, MapPin, Star } from "lucide-react";
import { Tour, CATEGORY_LABELS } from "@/types";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-surface border border-border hover:shadow-lg transition-all duration-300"
    >
      {/* Tour image */}
      <div className="relative h-52 bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden">
        {tour.image_url ? (
          <Image
            src={tour.image_url}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-primary/40">
            <MapPin className="h-16 w-16" />
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
            {CATEGORY_LABELS[tour.category]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {tour.title}
        </h3>
        <p className="mt-2 text-sm text-muted line-clamp-2">
          {tour.short_description}
        </p>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {Math.floor(tour.duration_minutes / 60)}h
            {tour.duration_minutes % 60 > 0 &&
              `${tour.duration_minutes % 60}m`}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            Max {tour.max_participants}
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-primary-light text-primary-light" />
            5.0
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border mt-5">
          <span className="text-xs text-muted italic">Pricing on request</span>
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

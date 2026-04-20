import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  BookOpen,
  Award,
  Users,
  ChevronRight,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Fábio Soares",
  description:
    "Meet Fábio Soares — archaeologist, historian, and the passionate guide behind Once Upon a Time in Porto. Learn about his background and approach to storytelling tours.",
};

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-foreground via-accent to-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-light">
              Your Guide
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
              About Fábio Soares
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Archaeologist, historian, and storyteller — the person behind every
              tour.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BIO ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center sticky top-24">
              <div className="text-center text-muted">
                <GraduationCap className="h-24 w-24 mx-auto mb-4 text-primary/30" />
                <p className="text-sm">Photo of Fábio Soares</p>
              </div>
            </div>

            {/* Bio content */}
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                The Archaeologist Who Tells Porto&apos;s Stories
              </h2>
              <p className="mt-6 text-muted leading-relaxed">
                Fábio Soares holds a degree in Archaeology from the University
                of Porto, where he developed a deep fascination with the
                city&apos;s layered past — from its pre-Roman settlements to
                medieval trade routes and the golden age of Port wine.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                After years of fieldwork, academic research, and museum
                collaborations, Fábio realized that the best way to share
                Porto&apos;s history wasn&apos;t through glass displays —
                it was through the streets themselves. Every cobblestone, every
                building façade, every azulejo panel holds a story waiting to be
                told.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                That realization became{" "}
                <strong className="text-foreground">
                  Once Upon a Time in Porto
                </strong>
                — a project born from the belief that history is best experienced
                on foot, at a human pace, told by someone who has spent years
                uncovering the details that guidebooks miss.
              </p>

              {/* Credentials */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: GraduationCap,
                    title: "Archaeology Degree",
                    desc: "University of Porto",
                  },
                  {
                    icon: BookOpen,
                    title: "Published Research",
                    desc: "Medieval Porto & Roman settlements",
                  },
                  {
                    icon: Award,
                    title: "Licensed Guide",
                    desc: "Certified by Turismo de Portugal",
                  },
                  {
                    icon: Users,
                    title: "500+ Guests",
                    desc: "4.9 average rating from happy visitors",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-xl bg-surface border border-border p-4"
                  >
                    <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-10 w-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground">
              My Approach to Tours
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              I don&apos;t do &ldquo;walk fast, see 20 monuments, take selfies&rdquo; tours.
              My tours are slow, deep, and personal. I want you to leave
              understanding why Porto is the way it is — not just what it looks
              like.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Stories, Not Monuments",
                desc: "Every building has a human story. I focus on the people who shaped this city — the merchants, monks, rebels, and dreamers.",
              },
              {
                icon: BookOpen,
                title: "Original Research",
                desc: "I share insights from my own archaeological work — details you won't find in any guidebook or Wikipedia article.",
              },
              {
                icon: Users,
                title: "Small & Personal",
                desc: "Maximum 10-15 guests per tour. Enough to feel like a conversation, not a lecture. Questions are always welcome.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to Explore Porto Together?
          </h2>
          <p className="mt-4 text-muted">
            Choose a tour that speaks to you — I&apos;ll take care of the rest.
          </p>
          <Link
            href="/tours"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Explore Our Tours
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

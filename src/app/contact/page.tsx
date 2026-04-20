import type { Metadata } from "next";
import { MapPin, Mail, Clock, MessageCircle, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Once Upon a Time in Porto. Ask about our walking tours, request a private tour, or plan your group visit to Porto and Vila Nova de Gaia.",
};

export default function ContactPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-foreground via-accent to-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-light">
              Get in Touch
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Have a question about our tours? Planning a group visit? We&apos;d
              love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Let&apos;s Talk
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Whether you want to book a private tour, ask about accessibility,
                or simply know more about our routes — reach out anytime.
                Fábio personally responds to every message.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@onceuponatimeinporto.com",
                    href: "mailto:hello@onceuponatimeinporto.com",
                    desc: "We reply within 24 hours",
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "+351 9XX XXX XXX",
                    href: "#",
                    desc: "Quick questions & last-minute bookings",
                  },
                  {
                    icon: MapPin,
                    label: "Based in",
                    value: "Porto, Portugal",
                    href: null,
                    desc: "Tours operate in Porto & Vila Nova de Gaia",
                  },
                  {
                    icon: Clock,
                    label: "Response Time",
                    value: "Within 24 hours",
                    href: null,
                    desc: "Usually much faster during business hours",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {item.value}
                        </p>
                      )}
                      <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ teaser */}
              <div className="mt-12 rounded-2xl bg-surface border border-border p-6">
                <h3 className="font-semibold text-foreground">
                  Frequently Asked
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li>
                    <strong className="text-foreground">
                      Are tours available in languages other than English?
                    </strong>
                    <br />
                    Currently, all tours are conducted in English. Portuguese
                    tours available upon request for groups.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Can I book a private tour?
                    </strong>
                    <br />
                    Yes! Send us an email with your preferred date, group size,
                    and any special interests.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      What&apos;s your cancellation policy?
                    </strong>
                    <br />
                    Free cancellation up to 24 hours before the tour. Full
                    refund, no questions asked.
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="rounded-2xl bg-surface border border-border p-8">
                <h2 className="text-xl font-bold text-foreground">
                  Send a Message
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Fill out the form below and we&apos;ll get back to you
                  shortly.
                </p>

                <form className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Question</option>
                      <option value="private">Private Tour Request</option>
                      <option value="group">Group Booking (6+)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      placeholder="Tell us about your plans, questions, or special requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                  <p className="text-xs text-center text-muted">
                    We respect your privacy. Your information will never be
                    shared with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

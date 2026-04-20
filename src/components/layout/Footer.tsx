import Link from "next/link";
import { MapPin, Mail, Globe, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary-light" />
              <span className="text-lg font-bold text-white">
                Once Upon a Time in Porto
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Guided historical tours through Porto and Vila Nova de Gaia, led
              by archaeologist and historian Fábio Soares.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/tours", label: "All Tours" },
                { href: "/about", label: "About Fábio" },
                { href: "/reviews", label: "Guest Reviews" },
                { href: "/contact", label: "Get in Touch" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/60">
                <MapPin className="h-4 w-4 shrink-0" />
                Porto, Portugal
              </li>
              <li>
                <a
                  href="mailto:hello@onceuponatimeinporto.com"
                  className="flex items-center gap-2 text-white/60 hover:text-primary-light transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  hello@onceuponatimeinporto.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="Website"
                className="text-white/40 hover:text-primary-light transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="text-white/40 hover:text-primary-light transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Once Upon a Time in Porto. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

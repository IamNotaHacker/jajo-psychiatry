import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { PRACTICE, SERVICES, CONDITIONS } from "@/lib/constants";
import {
  BotanicalSprig,
  GlyphWatermark,
  DotGridPattern,
} from "@/components/ui/Ornaments";

export function Footer() {
  return (
    <footer className="relative bg-[#1F1A14] text-[#F8F4EC]/80 overflow-hidden">
      {/* Subtle decorative background layers */}
      <DotGridPattern color="#E8C9A0" opacity={0.04} />
      <BotanicalSprig className="absolute -right-32 top-8 w-[600px] h-[600px] text-[#E8C9A0] opacity-[0.04] hidden lg:block" />
      <BotanicalSprig className="absolute -left-40 bottom-0 w-[500px] h-[500px] text-[#E8C9A0] opacity-[0.035] hidden lg:block rotate-180" />
      <GlyphWatermark
        className="right-[8%] top-[10%] hidden lg:block"
        glyph="J"
        color="#E8C9A0"
        size="28rem"
        opacity={0.03}
      />
      {/* Fine top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8C9A0]/30 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* Big editorial lockup */}
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-[#F8F4EC]/10">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-[#F8F4EC]/40 mb-5">
              — Jajo Psychiatry
            </p>
            <h2 className="font-editorial text-4xl lg:text-6xl leading-[1.05] text-[#F8F4EC] mb-8">
              Thoughtful care,<br />
              <em className="italic text-[#E8C9A0]">closer than you think.</em>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={PRACTICE.bookingUrl}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F8F4EC] text-[#1F1A14] text-sm font-medium hover:bg-white transition-colors"
              >
                Book a visit
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${PRACTICE.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#F8F4EC]/20 text-[#F8F4EC] text-sm hover:bg-[#F8F4EC]/5 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {PRACTICE.phone}
              </a>
            </div>
          </div>

          {/* Contact block */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs tracking-[0.3em] uppercase text-[#F8F4EC]/40 mb-5">
              — Visit Us
            </p>
            <div className="flex items-start gap-3 text-sm text-[#F8F4EC]/70">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#E8C9A0]" />
              <div>
                <p>{PRACTICE.address.street}</p>
                <p>{PRACTICE.address.suite}</p>
                <p>
                  {PRACTICE.address.city}, {PRACTICE.address.state}{" "}
                  {PRACTICE.address.zip}
                </p>
              </div>
            </div>
            <a
              href={`mailto:${PRACTICE.email}`}
              className="flex items-start gap-3 text-sm text-[#F8F4EC]/70 hover:text-[#F8F4EC] transition-colors"
            >
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-[#E8C9A0]" />
              {PRACTICE.email}
            </a>
            <div className="pt-2 text-sm text-[#F8F4EC]/50">
              <p>{PRACTICE.hours.weekdays}</p>
              <p>{PRACTICE.hours.weekends}</p>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14">
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#F8F4EC]/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-[#F8F4EC]/70 hover:text-[#F8F4EC] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#F8F4EC]/40 mb-5">
              Conditions
            </h4>
            <ul className="space-y-3">
              {CONDITIONS.map((condition) => (
                <li key={condition.slug}>
                  <Link
                    href={`/conditions/${condition.slug}`}
                    className="text-sm text-[#F8F4EC]/70 hover:text-[#F8F4EC] transition-colors"
                  >
                    {condition.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#F8F4EC]/40 mb-5">
              Practice
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[#F8F4EC]/70 hover:text-[#F8F4EC] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/about/providers"
                  className="text-sm text-[#F8F4EC]/70 hover:text-[#F8F4EC] transition-colors"
                >
                  Providers
                </Link>
              </li>
              <li>
                <Link
                  href="/about/why-jajo"
                  className="text-sm text-[#F8F4EC]/70 hover:text-[#F8F4EC] transition-colors"
                >
                  Why Jajo
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-[#F8F4EC]/70 hover:text-[#F8F4EC] transition-colors"
                >
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#F8F4EC]/40 mb-5">
              Patients
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/new-patients"
                  className="text-sm text-[#F8F4EC]/70 hover:text-[#F8F4EC] transition-colors"
                >
                  New Patients
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance"
                  className="text-sm text-[#F8F4EC]/70 hover:text-[#F8F4EC] transition-colors"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <a
                  href={PRACTICE.patientFormsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#F8F4EC]/70 hover:text-[#F8F4EC] transition-colors"
                >
                  Patient Forms
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#F8F4EC]/70 hover:text-[#F8F4EC] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#F8F4EC]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F8F4EC]/40">
          <p className="font-editorial text-sm text-[#F8F4EC]/60">
            Jajo Psychiatry &mdash; Farmington Hills, MI
          </p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

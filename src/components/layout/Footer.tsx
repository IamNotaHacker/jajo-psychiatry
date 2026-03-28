import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PRACTICE, SERVICES, CONDITIONS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80 noise-bg">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Practice info */}
          <div className="space-y-5">
            <Image
              src="/images/logo.gif"
              alt="Jajo Psychiatry"
              width={150}
              height={83}
              className="h-16 w-auto brightness-0 invert opacity-90"
            />
            <p className="text-sm text-white/50 leading-relaxed">
              Personalized psychiatric care in Michigan. Expert treatment for
              ADHD, anxiety, depression, and bipolar disorder.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${PRACTICE.phoneRaw}`}
                className="flex items-start gap-2.5 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                {PRACTICE.phone}
              </a>
              <a
                href={`mailto:${PRACTICE.email}`}
                className="flex items-start gap-2.5 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                {PRACTICE.email}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>{PRACTICE.address.full}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p>{PRACTICE.hours.weekdays}</p>
                  <p>{PRACTICE.hours.weekends}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
              Conditions We Treat
            </h4>
            <ul className="space-y-2.5">
              {CONDITIONS.map((condition) => (
                <li key={condition.slug}>
                  <Link
                    href={`/conditions/${condition.slug}`}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {condition.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/new-patients" className="text-sm text-white/60 hover:text-primary transition-colors">
                  New Patient Information
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-sm text-white/60 hover:text-primary transition-colors">
                  Insurance &amp; Payment
                </Link>
              </li>
              <li>
                <a href={PRACTICE.patientFormsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-primary transition-colors">
                  Patient Forms
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/60 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/60 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4 mt-8">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              <a href={PRACTICE.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={PRACTICE.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={PRACTICE.social.psychologyToday} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors" aria-label="Psychology Today">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15H9V9h2v8zm4 0h-2V9h2v8z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Jajo Psychiatry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

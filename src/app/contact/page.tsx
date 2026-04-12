import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/ui/ContactForm";
import { PRACTICE } from "@/lib/constants";
import {
  FlourishOrnament,
  BotanicalSprig,
} from "@/components/ui/Ornaments";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Jajo Psychiatry in Farmington Hills, MI. Call (734) 331-6037 or send us a message. Located at 31393 West 13 Mile Road, Suite 105.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#1F1A14]">
      {/* Form + Contact info — no hero, clean entry */}
      <section className="relative px-6 lg:px-10 pt-8 pb-20 overflow-hidden">
        <BotanicalSprig className="absolute -left-20 top-32 w-[420px] h-[420px] text-[#1F1A14] opacity-[0.05] hidden lg:block" />
        <div className="relative max-w-[1400px] mx-auto">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

          <div className="grid lg:grid-cols-12 gap-10 items-start mt-4">
            {/* Left: Form */}
            <div className="lg:col-span-7">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-5">
                — Get in Touch
              </p>
              <FlourishOrnament className="hidden lg:flex mb-6" />
              <h1 className="font-editorial text-[2.75rem] sm:text-[3.5rem] lg:text-[5rem] leading-[0.98] text-[#1F1A14] mb-6">
                Tell us how
                <br />
                <em className="italic text-[#8B6F4E]">we can help.</em>
              </h1>
              <p className="text-lg text-[#1F1A14]/60 leading-relaxed max-w-xl mb-12">
                Reach out to schedule an appointment, ask a question, or learn
                more about our services. Our team responds within one business
                day.
              </p>
              <ContactForm />
            </div>

            {/* Right: Contact info sidebar */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-[#1F1A14] text-[#F8F4EC] rounded-[2rem] p-8 lg:p-10">
                <p className="text-xs tracking-[0.3em] uppercase text-[#E8C9A0] mb-3">
                  — Contact
                </p>
                <h3 className="font-editorial text-2xl lg:text-3xl mb-8 leading-[1.15]">
                  Multiple ways
                  <br />
                  <em className="italic text-[#E8C9A0]">to reach us.</em>
                </h3>

                <div className="space-y-6">
                  <a
                    href={`tel:${PRACTICE.phoneRaw}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#E8C9A0] transition-colors">
                      <Phone className="h-4 w-4 text-[#E8C9A0]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs tracking-wider uppercase text-white/40 mb-1">
                        Phone
                      </p>
                      <p className="text-white font-medium">
                        {PRACTICE.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${PRACTICE.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#E8C9A0] transition-colors">
                      <Mail className="h-4 w-4 text-[#E8C9A0]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs tracking-wider uppercase text-white/40 mb-1">
                        Email
                      </p>
                      <p className="text-white font-medium text-sm">
                        {PRACTICE.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PRACTICE.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#E8C9A0] transition-colors">
                      <MapPin className="h-4 w-4 text-[#E8C9A0]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs tracking-wider uppercase text-white/40 mb-1">
                        Address
                      </p>
                      <p className="text-white font-medium text-sm leading-tight">
                        {PRACTICE.address.street}
                        <br />
                        {PRACTICE.address.suite}
                        <br />
                        {PRACTICE.address.city}, {PRACTICE.address.state}{" "}
                        {PRACTICE.address.zip}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4 text-[#E8C9A0]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs tracking-wider uppercase text-white/40 mb-1">
                        Hours
                      </p>
                      <p className="text-white font-medium text-sm">
                        {PRACTICE.hours.weekdays}
                      </p>
                      <p className="text-xs text-white/50 mt-0.5">
                        Saturday &ndash; Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                  <Link
                    href={PRACTICE.bookingUrl}
                    className="flex items-center justify-between px-5 py-3 rounded-full bg-[#F8F4EC] text-[#1F1A14] text-sm font-semibold"
                  >
                    Book Online
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={PRACTICE.patientFormsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-3 rounded-full border border-white/20 text-white text-sm"
                  >
                    Patient Intake Forms
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location with themed map overlay */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
                — Visit Us
              </p>
              <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05] mb-6">
                Our office in
                <br />
                <em className="italic text-[#8B6F4E]">Farmington Hills.</em>
              </h2>
              <p className="text-[#1F1A14]/60 mb-8 leading-relaxed">
                Conveniently located off West 13 Mile Road with ample parking.
                Minutes from I-696 and I-275.
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PRACTICE.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1F1A14] text-[#F8F4EC] text-sm font-medium hover:bg-[#3D2E1F] transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                {/* Map iframe */}
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(PRACTICE.address.full)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "grayscale(100%) sepia(25%) saturate(60%) brightness(108%) contrast(88%)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jajo Psychiatry location"
                  className="absolute inset-0 w-full h-full"
                />
                {/* Warm edge fades to blend into page */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F8F4EC]/50 via-transparent to-[#F8F4EC]/30" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F8F4EC]/25 via-transparent to-[#F8F4EC]/25" />
                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#1F1A14]/90 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
                  <div className="text-[#F8F4EC]">
                    <p className="font-editorial text-base">
                      Jajo Psychiatry
                    </p>
                    <p className="text-xs text-white/60">
                      {PRACTICE.address.street}, {PRACTICE.address.suite}
                    </p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PRACTICE.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E8C9A0] text-[#1F1A14] text-xs font-semibold hover:bg-white transition-colors"
                  >
                    <MapPin className="h-3 w-3" />
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { PRACTICE } from "@/lib/constants";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  variant?: "primary" | "light";
}

export function CTASection({
  headline = "Take the first step today.",
  subheadline = "Schedule your appointment and begin your journey toward better mental health.",
  variant = "primary",
}: CTASectionProps) {
  if (variant === "light") {
    return (
      <section className="px-6 lg:px-10 py-20 bg-[#F8F4EC]">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-4">
            — Ready to begin?
          </p>
          <h2 className="font-editorial text-3xl lg:text-5xl leading-[1.1] text-[#1F1A14] mb-8">
            {headline}
          </h2>
          <p className="text-[#1F1A14]/60 max-w-xl mx-auto mb-10">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={PRACTICE.bookingUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1F1A14] text-[#F8F4EC] text-sm font-medium hover:bg-[#3D2E1F] transition-colors"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>
            <a
              href={`tel:${PRACTICE.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#1F1A14]/20 text-[#1F1A14] text-sm hover:bg-[#1F1A14]/5 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {PRACTICE.phone}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-6 lg:px-10 pb-20 pt-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden">
          <div className="relative aspect-[16/9] min-h-[400px] md:aspect-[16/7]">
            <Image
              src="/images/ai/cta-warm.jpg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F1A14]/90 via-[#3D2E1F]/70 to-[#1F1A14]/90" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center max-w-3xl">
              <p className="text-xs tracking-[0.4em] uppercase text-[#E8C9A0] mb-5">
                — Ready to begin?
              </p>
              <h2 className="font-editorial text-white text-4xl lg:text-6xl leading-[1.05] mb-6">
                {headline.includes("today") ? (
                  <>
                    {headline.split("today")[0]}
                    <em className="italic text-[#E8C9A0]">today.</em>
                  </>
                ) : (
                  headline
                )}
              </h2>
              <p className="text-white/60 max-w-xl mx-auto mb-10 text-base">
                {subheadline}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={PRACTICE.bookingUrl}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F8F4EC] text-[#1F1A14] text-sm font-semibold hover:bg-white transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  Book an Appointment
                </Link>
                <a
                  href={`tel:${PRACTICE.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/5 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {PRACTICE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

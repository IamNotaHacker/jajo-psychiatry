import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import {
  FlourishOrnament,
  BotanicalSprig,
  GlyphWatermark,
} from "@/components/ui/Ornaments";

export const metadata: Metadata = {
  title: "Why Choose Jajo Psychiatry",
  description:
    "Fast scheduling, telehealth, insurance-friendly, GeneSight testing, ADHD evaluations, and personalized care. Discover why patients choose Jajo Psychiatry.",
};

const differentiators = [
  {
    num: "01",
    title: "Fast Scheduling",
    subtitle: "Within 1 week",
    description:
      "Most new patients are seen within one week of reaching out, so you can start getting help right away.",
  },
  {
    num: "02",
    title: "Same-Day Availability",
    subtitle: "When needed",
    description:
      "Depending on scheduling, same-day or next-day appointments may be available. Call to check openings.",
  },
  {
    num: "03",
    title: "Telehealth Across MI",
    subtitle: "From anywhere",
    description:
      "Secure video visits with the same thorough evaluations and ongoing care as in-person appointments.",
  },
  {
    num: "04",
    title: "Insurance-Friendly",
    subtitle: "Most plans",
    description:
      "BCBS, Aetna, Cigna, United, Humana, Medicare, Medicaid, Priority, HAP, Molina, and more accepted.",
  },
  {
    num: "05",
    title: "GeneSight Testing",
    subtitle: "Precision prescribing",
    description:
      "Pharmacogenomic testing helps your provider choose the most effective medication from the start.",
  },
  {
    num: "06",
    title: "ADHD Evaluations",
    subtitle: "Comprehensive",
    description:
      "Thorough evaluations using evidence-based clinical screening tools for an accurate diagnosis.",
  },
  {
    num: "07",
    title: "Personalized Plans",
    subtitle: "Never templated",
    description:
      "We take the time to understand your symptoms, concerns, and goals to create individualized care.",
  },
  {
    num: "08",
    title: "Board-Certified",
    subtitle: "Experienced team",
    description:
      "Psychiatrists with extensive training and experience you can trust for qualified, knowledgeable care.",
  },
];

export default function WhyJajoPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#1B1F4B]">
      <PageHero
        breadcrumbs={[
          { name: "About", href: "/about" },
          { name: "Why Jajo", href: "/about/why-jajo" },
        ]}
        eyebrow="What Sets Us Apart"
        title="Care that shows up,"
        titleEm="quickly."
        description="We built our practice around what patients actually need: fast access, flexible options, and truly individualized care."
        image="/images/ai/nature-new.jpg"
      />

      {/* Differentiators grid */}
      <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
        <BotanicalSprig className="absolute -left-20 top-32 w-[420px] h-[420px] text-[#1B1F4B] opacity-[0.05] hidden lg:block" />
        <GlyphWatermark
          className="-right-16 bottom-12 hidden lg:block"
          glyph="J"
          size="26rem"
          opacity={0.04}
        />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="mb-14">
            <FlourishOrnament className="mb-5 hidden lg:flex" />
            <p className="text-xs tracking-[0.3em] uppercase text-[#1B1F4B]/50 mb-3">
              — The Difference
            </p>
            <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05] max-w-2xl">
              Eight reasons<br />
              <em className="italic text-[#2D5DA1]">people choose us.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1B1F4B]/10 rounded-2xl overflow-hidden">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-[#F8F4EC] p-7 lg:p-8">
                <div className="flex items-start justify-end mb-6">
                  <span className="text-[10px] tracking-wider uppercase text-[#2D5DA1]">
                    {item.subtitle}
                  </span>
                </div>
                <h3 className="font-editorial text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-[#1B1F4B]/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column statement */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#1B1F4B] text-[#F8F4EC] rounded-[2rem] p-10 lg:p-20">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <p className="text-xs tracking-[0.3em] uppercase text-[#4DC9F6] mb-5">
                  — Your Mental Health Matters
                </p>
                <h2 className="font-editorial text-3xl lg:text-5xl leading-[1.1] mb-6">
                  Whether you&apos;re seeking help for the first time<br />
                  <em className="italic text-[#4DC9F6]">
                    or looking for a new provider.
                  </em>
                </h2>
                <p className="text-white/60 leading-relaxed max-w-xl">
                  Jajo Psychiatry combines advanced tools like GeneSight testing
                  and comprehensive ADHD evaluations with genuine compassion and
                  personalized attention.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  href="/new-patients"
                  className="inline-flex items-center justify-between gap-2 px-6 py-4 rounded-full bg-[#F8F4EC] text-[#1B1F4B] text-sm font-semibold hover:bg-white transition-colors"
                >
                  New Patient Info
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about/providers"
                  className="inline-flex items-center justify-between gap-2 px-6 py-4 rounded-full border border-white/25 text-white text-sm hover:bg-white/5 transition-colors"
                >
                  Meet Providers
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Start your journey today."
        subheadline="Experience personalized, evidence-based psychiatric care. New patients are often seen within one week."
      />
    </div>
  );
}

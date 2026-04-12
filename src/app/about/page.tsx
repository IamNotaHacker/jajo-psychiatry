import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { PRACTICE } from "@/lib/constants";
import {
  FlourishOrnament,
  BotanicalSprig,
  GlyphWatermark,
} from "@/components/ui/Ornaments";

export const metadata: Metadata = {
  title: "About Our Practice",
  description:
    "Learn about Jajo Psychiatry in Farmington Hills, MI. We provide personalized, evidence-based psychiatric care through in-person and telehealth appointments.",
};

const values = [
  {
    num: "01",
    title: "Patient-centered",
    description:
      "Every treatment plan is tailored to your unique needs, goals, and lifestyle. We take the time to listen and understand what matters most to you.",
  },
  {
    num: "02",
    title: "Evidence-based",
    description:
      "Our approach is grounded in the latest psychiatric research and clinical guidelines, ensuring you receive the most effective care available.",
  },
  {
    num: "03",
    title: "Compassionate",
    description:
      "We create a welcoming, judgment-free environment where you can feel comfortable discussing your mental health concerns openly.",
  },
  {
    num: "04",
    title: "Collaborative",
    description:
      "We work together with our patients to develop treatment plans that align with your values and preferences.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#1F1A14]">
      <PageHero
        breadcrumbs={[{ name: "About", href: "/about" }]}
        eyebrow="Our Practice"
        title="Psychiatric care, offered with"
        titleEm="patience."
        description="Personalized, evidence-based psychiatric care for adults throughout Michigan. Clinical expertise, genuine compassion."
        image="/images/ai/window-light.jpg"
      />

      {/* Mission */}
      <section className="relative px-6 lg:px-10 py-20 lg:py-28 overflow-hidden">
        <BotanicalSprig className="absolute -left-20 top-12 w-[440px] h-[440px] text-[#1F1A14] opacity-[0.05] hidden lg:block" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-5">
                — Our Mission
              </p>
              <FlourishOrnament className="hidden lg:flex mb-8" />
              <p className="hidden lg:block font-editorial italic text-[#8B6F4E]/80 text-2xl leading-snug max-w-[18rem] mb-6">
                &ldquo;We listen to your story.&rdquo;
              </p>
              <p className="hidden lg:block text-[10px] tracking-[0.2em] uppercase text-[#1F1A14]/40 mb-10">
                — The Jajo Psychiatry team
              </p>
              <div className="hidden lg:block space-y-5 max-w-[16rem]">
                <div>
                  <p className="font-editorial text-3xl text-[#1F1A14]">20+</p>
                  <p className="text-xs text-[#1F1A14]/55 mt-1">
                    Years caring for Michigan
                  </p>
                </div>
                <div className="h-px bg-[#1F1A14]/10" />
                <div>
                  <p className="font-editorial text-3xl text-[#1F1A14]">8</p>
                  <p className="text-xs text-[#1F1A14]/55 mt-1">
                    Providers on our team
                  </p>
                </div>
                <div className="h-px bg-[#1F1A14]/10" />
                <div>
                  <p className="font-editorial text-3xl text-[#1F1A14]">1 wk</p>
                  <p className="text-xs text-[#1F1A14]/55 mt-1">
                    Average new-patient wait
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="font-editorial text-3xl lg:text-[2.5rem] leading-[1.2] mb-6">
                Founded by Dr. Raad Jajo, bringing{" "}
                <em className="italic text-[#8B6F4E]">
                  20+ years of psychiatric experience
                </em>{" "}
                to every patient.
              </p>
              <p className="text-[#1F1A14]/60 leading-relaxed mb-6 max-w-2xl">
                At Jajo Psychiatry, we are committed to helping you achieve
                optimal wellness, balanced mental health, and an improved state
                of mind. We understand that every individual is unique &mdash;
                we listen to your story and develop comprehensive short and
                long-term plans with your goals in mind.
              </p>
              <p className="text-[#1F1A14]/60 leading-relaxed mb-8 max-w-2xl">
                We stay updated on the latest studies and pharmaceutical
                advancements, and we value the benefits of holistic approaches,
                behavioral therapy, diet, exercise, and sleep quality alongside
                traditional medicine.
              </p>
              <Link
                href="/about/providers"
                className="inline-flex items-center gap-2 text-[#1F1A14] font-semibold border-b border-[#1F1A14] pb-0.5"
              >
                Meet our providers
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
        <GlyphWatermark
          className="-right-12 -bottom-20 hidden lg:block"
          glyph="J"
          size="28rem"
          opacity={0.04}
        />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
              — What Guides Our Care
            </p>
            <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05] max-w-2xl">
              Four principles behind<br />
              <em className="italic text-[#8B6F4E]">every visit.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1F1A14]/10 rounded-2xl overflow-hidden">
            {values.map((value) => (
              <div
                key={value.num}
                className="bg-[#F8F4EC] p-8 lg:p-10 flex items-start gap-6"
              >
                <span className="font-editorial text-3xl text-[#1F1A14]/25 shrink-0">
                  {value.num}
                </span>
                <div>
                  <h3 className="font-editorial text-2xl mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#1F1A14]/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care formats with image */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto">
              <Image
                src="/images/ai/office-detail.jpg"
                alt="Our Farmington Hills office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A14]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs tracking-wider uppercase text-white/70 mb-1">
                  Visit Us
                </p>
                <p className="font-editorial text-xl leading-tight">
                  {PRACTICE.address.street}
                  <br />
                  {PRACTICE.address.city}, {PRACTICE.address.state}
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 bg-[#1F1A14] text-[#F8F4EC] rounded-2xl p-8 lg:p-14">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E8C9A0] mb-4">
                — Care on Your Terms
              </p>
              <h2 className="font-editorial text-3xl lg:text-4xl leading-[1.1] mb-6">
                In-person or virtual.<br />
                <em className="italic text-[#E8C9A0]">Always personal.</em>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Choose the appointment format that works best for your schedule
                and comfort level. Our Farmington Hills office offers a warm,
                private setting, while telepsychiatry brings the same quality
                care to patients anywhere in Michigan.
              </p>
              <div className="space-y-4 text-sm text-white/60">
                <p>
                  <span className="text-white/80">Hours:</span>{" "}
                  {PRACTICE.hours.weekdays}
                </p>
                <p>
                  <span className="text-white/80">Weekends:</span> Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                href: "/about/providers",
                eyebrow: "01",
                title: "Our Providers",
                desc: "Meet our board-certified psychiatric team.",
              },
              {
                href: "/about/why-jajo",
                eyebrow: "02",
                title: "Why Jajo Psychiatry",
                desc: "What sets our practice apart.",
              },
              {
                href: "/new-patients",
                eyebrow: "03",
                title: "New Patients",
                desc: "What to expect at your first visit.",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-[#EADCC2]/50 hover:bg-[#EADCC2] rounded-2xl p-8 transition-colors"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="text-xs tracking-wider uppercase text-[#8B6F4E]">
                    {link.eyebrow}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-[#8B6F4E] group-hover:rotate-45 transition-transform" />
                </div>
                <h3 className="font-editorial text-2xl mb-2">{link.title}</h3>
                <p className="text-sm text-[#1F1A14]/60">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

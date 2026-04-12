"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Phone,
  ArrowUpRight,
  ArrowRight,
  Video,
  Clock,
  Star,
  Shield,
  Plus,
} from "lucide-react";
import { PRACTICE } from "@/lib/constants";
import {
  FlourishOrnament,
  BotanicalSprig,
  GlyphWatermark,
  DotGridPattern,
} from "@/components/ui/Ornaments";

export default function HomePage() {
  return (
    <div className="bg-[#F8F4EC] text-[#1F1A14]">
      {/* ═══════ HERO ═══════ */}
      <section className="relative px-6 lg:px-10 pt-8 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="relative aspect-[16/11] md:aspect-[16/9] lg:aspect-[21/9]">
              <Image
                src="/images/ai/hero-main.jpg"
                alt="Jajo Psychiatry office interior"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A14]/70 via-[#1F1A14]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F1A14]/40 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-14"
            >
              <h1 className="font-editorial text-white text-[2.5rem] sm:text-[4rem] lg:text-[6rem] leading-[0.95] max-w-5xl">
                A quieter way
                <br />
                <em className="italic text-[#E8C9A0]">to feel like yourself</em>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="absolute bottom-8 right-8 lg:bottom-14 lg:right-14 hidden md:block"
            >
              <div className="bg-[#F8F4EC]/95 backdrop-blur-md rounded-2xl p-5 max-w-[280px]">
                <p className="text-xs tracking-wider uppercase text-[#1F1A14]/50 mb-2">
                  Now accepting patients
                </p>
                <p className="text-sm text-[#1F1A14]/80 leading-relaxed mb-4">
                  New patients typically seen within one week. In-person &amp;
                  telehealth.
                </p>
                <Link
                  href={PRACTICE.bookingUrl}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F1A14] group"
                >
                  Schedule a visit
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Meta bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1F1A14]/10 rounded-2xl overflow-hidden mt-6"
          >
            {[
              { icon: Clock, label: "Appointments", value: "Within 1 week" },
              { icon: Video, label: "Telehealth", value: "Across Michigan" },
              { icon: Shield, label: "Insurance", value: "Most plans accepted" },
              { icon: Star, label: "Patient rating", value: "5.0 stars" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F8F4EC] p-5 lg:p-6 flex items-center gap-4"
              >
                <div className="h-11 w-11 rounded-full border border-[#1F1A14]/15 flex items-center justify-center shrink-0">
                  <item.icon className="h-4 w-4 text-[#1F1A14]/70" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#1F1A14]/40 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ MANIFESTO ═══════ */}
      <section className="relative px-6 lg:px-10 py-20 lg:py-28 overflow-hidden">
        <BotanicalSprig className="absolute -left-16 top-1/2 -translate-y-1/2 w-[520px] h-[520px] text-[#1F1A14] opacity-[0.06] hidden lg:block" />
        <GlyphWatermark className="left-[6%] -bottom-16 hidden lg:block" glyph="J" size="32rem" opacity={0.05} />

        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 relative">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-6">
                — Our Practice
              </p>

              <FlourishOrnament className="hidden lg:flex" />
              <p className="hidden lg:block mt-6 font-editorial italic text-[#8B6F4E]/70 text-lg leading-snug max-w-[16rem]">
                &ldquo;Every individual is unique.&rdquo;
              </p>
              <p className="hidden lg:block mt-2 text-[10px] tracking-[0.2em] uppercase text-[#1F1A14]/40">
                — Dr. Raad Jajo, M.D.
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="font-editorial text-3xl lg:text-[2.75rem] leading-[1.2] text-[#1F1A14] mb-8">
                Mental health care, offered with{" "}
                <em className="italic text-[#8B6F4E]">patience</em>. We treat
                ADHD, anxiety, depression, and bipolar disorder with
                personalized attention &mdash; no rushed visits, no
                one-size-fits-all plans.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#1F1A14]/60">
                <Link
                  href="/about/providers"
                  className="inline-flex items-center gap-2 text-[#1F1A14] font-semibold border-b border-[#1F1A14] pb-0.5"
                >
                  Meet our providers
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/about/founder"
                  className="inline-flex items-center gap-2 hover:text-[#1F1A14] transition-colors"
                >
                  Our founder&apos;s story
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CONDITIONS MOSAIC ═══════ */}
      <section className="relative px-6 lg:px-10 py-16">
        <div className="relative max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <FlourishOrnament className="mb-4" />
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
                — Conditions We Treat
              </p>
              <h2 className="font-editorial text-4xl lg:text-6xl leading-[1.05] max-w-2xl">
                Specialized care for<br />
                <em className="italic text-[#8B6F4E]">complex minds.</em>
              </h2>
            </div>
            <Link
              href="/conditions"
              className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-[#1F1A14]/70 hover:text-[#1F1A14] transition-colors"
            >
              View all conditions
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-[220px] md:auto-rows-[200px] lg:auto-rows-[260px]">
            <Link
              href="/conditions/anxiety"
              className="md:col-span-2 lg:col-span-7 lg:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer min-h-[280px] md:min-h-0"
            >
              <Image
                src="/images/ai/nature-calm.jpg"
                alt="Tranquil nature scene"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A14]/80 via-[#1F1A14]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs tracking-wider uppercase text-[#E8C9A0] mb-2">
                  Mood
                </p>
                <h3 className="font-editorial text-3xl lg:text-4xl mb-2">
                  Anxiety &amp; Depression
                </h3>
                <p className="text-sm text-white/60 max-w-sm">
                  Evidence-based treatment tailored to where you are in your
                  journey.
                </p>
              </div>
            </Link>

            <Link
              href="/conditions/adhd"
              className="lg:col-span-5 bg-[#1F1A14] text-[#F8F4EC] rounded-2xl p-6 lg:p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <p className="text-xs tracking-wider uppercase text-[#E8C9A0]">
                  Focus
                </p>
                <ArrowUpRight className="h-5 w-5 text-[#E8C9A0] group-hover:rotate-45 transition-transform" />
              </div>
              <div>
                <h3 className="font-editorial text-3xl lg:text-4xl mb-1">
                  ADHD
                </h3>
                <p className="text-sm text-white/50">
                  Comprehensive testing &amp; ongoing medication management.
                </p>
              </div>
            </Link>

            <Link
              href="/conditions/bipolar-disorder"
              className="lg:col-span-3 bg-[#EADCC2] rounded-2xl p-6 flex flex-col justify-between cursor-pointer group"
            >
              <p className="text-xs tracking-wider uppercase text-[#8B6F4E]">
                Mood
              </p>
              <div>
                <h3 className="font-editorial text-2xl mb-1">Bipolar</h3>
                <p className="text-xs text-[#1F1A14]/60">
                  Mood stabilization &amp; care
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#8B6F4E] self-end group-hover:rotate-45 transition-transform" />
            </Link>

            <Link
              href="/conditions/ptsd"
              className="lg:col-span-2 bg-[#D4C4A8] rounded-2xl p-5 flex flex-col justify-between cursor-pointer group"
            >
              <p className="text-xs tracking-wider uppercase text-[#1F1A14]/60">
                Trauma
              </p>
              <div>
                <h3 className="font-editorial text-xl">PTSD</h3>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#1F1A14]/60 self-end group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ QUOTE BREAK ═══════ */}
      <section className="relative my-20">
        <div className="relative h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[500px] overflow-hidden">
          <Image
            src="/images/ai/abstract-calm.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1F1A14]/10" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center max-w-4xl">
              <p className="text-xs tracking-[0.4em] uppercase text-[#1F1A14]/50 mb-6">
                — Our Approach
              </p>
              <p className="font-editorial text-2xl sm:text-3xl lg:text-5xl leading-[1.2] text-[#1F1A14]">
                &ldquo;Every individual is unique. We listen to your story and
                build short and long-term plans with your goals in mind.&rdquo;
              </p>
              <p className="mt-8 text-sm tracking-wider uppercase text-[#1F1A14]/60">
                &mdash; Dr. Raad Jajo, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES LIST ═══════ */}
      <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
        <BotanicalSprig className="absolute right-[-120px] top-20 w-[400px] h-[400px] text-[#1F1A14] opacity-[0.05] hidden lg:block rotate-180" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 lg:order-1">
              <div className="lg:sticky lg:top-28">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/images/ai/office-detail.jpg"
                    alt="Jajo Psychiatry office detail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A14]/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs tracking-wider uppercase text-white/70 mb-1">
                      Our Office
                    </p>
                    <p className="font-editorial text-white text-xl leading-tight">
                      31393 West 13 Mile Road,
                      <br />
                      Farmington Hills, MI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-2">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
                — What We Offer
              </p>
              <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.1] mb-12">
                Services designed around<br />
                <em className="italic text-[#8B6F4E]">your care.</em>
              </h2>

              <div className="space-y-px bg-[#1F1A14]/10 rounded-2xl overflow-hidden">
                {[
                  {
                    name: "Psychiatric Evaluations",
                    slug: "psychiatric-evaluations",
                    desc: "In-depth assessment of your mental health history, current symptoms, and goals.",
                  },
                  {
                    name: "Medication Management",
                    slug: "medication-management",
                    desc: "Careful prescribing, monitoring, and adjustment to find what works for you.",
                  },
                  {
                    name: "Telepsychiatry",
                    slug: "telepsychiatry",
                    desc: "Convenient virtual visits for patients anywhere in Michigan.",
                  },
                  {
                    name: "ADHD Testing & Evaluations",
                    slug: "adhd-testing",
                    desc: "Evidence-based screening using validated clinical tools.",
                  },
                  {
                    name: "GeneSight Testing",
                    slug: "genesight-testing",
                    desc: "Pharmacogenomic testing to guide medication decisions.",
                  },
                ].map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="bg-[#F8F4EC] py-6 px-4 flex items-start gap-4 group cursor-pointer hover:pl-6 transition-all"
                  >
                    <div className="flex-1">
                      <h3 className="font-editorial text-xl sm:text-2xl mb-1">{svc.name}</h3>
                      <p className="text-sm text-[#1F1A14]/55 max-w-lg">
                        {svc.desc}
                      </p>
                    </div>
                    <Plus className="h-5 w-5 text-[#1F1A14]/40 mt-2 shrink-0 group-hover:rotate-90 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIAL ═══════ */}
      <section className="relative px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/images/ai/window-light.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 bg-[#1F1A14] text-[#F8F4EC] rounded-2xl p-8 lg:p-14 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#E8C9A0] text-[#E8C9A0]"
                    />
                  ))}
                </div>
                <p className="font-editorial text-2xl lg:text-[2rem] leading-[1.3] mb-8">
                  &ldquo;The team at Jajo Psychiatry made me feel heard from day
                  one. My treatment plan has been life-changing &mdash; I
                  finally feel like myself again.&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between pt-8 border-t border-white/10">
                <div>
                  <p className="font-medium">Verified Patient</p>
                </div>
                <Link
                  href={PRACTICE.social.psychologyToday}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#E8C9A0] hover:text-white transition-colors"
                >
                  Read more reviews
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ INSURANCE STRIP ═══════ */}
      <section className="relative px-6 lg:px-10 py-16 border-t border-[#1F1A14]/10 overflow-hidden">
        <DotGridPattern color="#8B6F4E" opacity={0.22} dotSize={1.4} spacing={26} />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-2">
                — Insurance
              </p>
              <p className="font-editorial text-xl">
                We accept most major plans.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-2 text-sm text-[#1F1A14]/60">
              {[
                "BCBS",
                "Aetna",
                "Cigna",
                "United",
                "Humana",
                "Medicare",
                "Medicaid",
                "Priority",
              ].map((p) => (
                <span
                  key={p}
                  className="hover:text-[#1F1A14] transition-colors"
                >
                  {p}
                </span>
              ))}
            </div>
            <Link
              href="/insurance"
              className="inline-flex items-center gap-2 text-sm text-[#1F1A14]/70 hover:text-[#1F1A14] transition-colors"
            >
              View all
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
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
                <h2 className="font-editorial text-white text-4xl lg:text-6xl leading-[1.05] mb-8">
                  Take the first step<br />
                  <em className="italic text-[#E8C9A0]">today.</em>
                </h2>
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
    </div>
  );
}

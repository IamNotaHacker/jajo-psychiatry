"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  Phone,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Video,
  Clock,
  Star,
  Shield,
  Plus,
} from "lucide-react";

/* ────────────────────────────────────────────
   VISUAL HOMEPAGE REDESIGN — Image-Driven
   Nano Banana 2 generated imagery
   ──────────────────────────────────────────── */

export default function DesignPreviewV2() {
  return (
    <div className="bg-[#F8F4EC] text-[#1F1A14] min-h-screen">
      <style jsx global>{`
        body > header,
        body > footer,
        body > [class*="MobileStickyCTA"] {
          display: none !important;
        }
        main {
          padding-top: 0 !important;
          margin-top: 0 !important;
        }
        .serif {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          letter-spacing: -0.01em;
        }
      `}</style>

      {/* ═══════ TOP BAR ═══════ */}
      <div className="relative z-30 px-6 lg:px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-full bg-[#1F1A14] flex items-center justify-center">
            <span className="text-[#F8F4EC] serif text-lg leading-none">J</span>
          </div>
          <span className="serif text-xl tracking-tight">Jajo Psychiatry</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {["About", "Services", "Conditions", "Journal", "Contact"].map((item) => (
            <a key={item} className="text-[#1F1A14]/60 hover:text-[#1F1A14] transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a className="hidden md:flex items-center gap-1.5 text-sm text-[#1F1A14]/70">
            <Phone className="h-3.5 w-3.5" />
            (734) 331-6037
          </a>
          <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1A14] text-[#F8F4EC] text-sm font-medium hover:bg-[#3D2E1F] transition-colors">
            Book Visit
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* ═══════ HERO ═══════ */}
      <section className="relative px-6 lg:px-10 pt-6 pb-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Large hero image with overlay text */}
          <div className="relative rounded-[2rem] overflow-hidden group">
            <div className="relative aspect-[16/9] lg:aspect-[21/9]">
              <Image
                src="/images/ai/hero-main.jpg"
                alt="Jajo Psychiatry office interior"
                fill
                priority
                className="object-cover"
              />
              {/* Warm gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A14]/70 via-[#1F1A14]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F1A14]/40 via-transparent to-transparent" />
            </div>

            {/* Top-left eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-8 left-8 lg:top-12 lg:left-12 flex items-center gap-3 text-[#F8F4EC]/80 text-xs tracking-[0.25em] uppercase"
            >
              <div className="h-px w-8 bg-[#F8F4EC]/50" />
              Est. Farmington Hills, Michigan
            </motion.div>

            {/* Bottom headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-8 lg:p-14"
            >
              <h1 className="serif text-white text-[2.75rem] sm:text-[4rem] lg:text-[6rem] leading-[0.95] max-w-5xl">
                A quieter way<br />
                <em className="italic text-[#E8C9A0]">to feel like yourself</em>
              </h1>
            </motion.div>

            {/* Bottom right action card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute bottom-8 right-8 lg:bottom-14 lg:right-14 hidden md:block"
            >
              <div className="bg-[#F8F4EC]/95 backdrop-blur-md rounded-2xl p-5 max-w-[280px]">
                <p className="text-xs tracking-wider uppercase text-[#1F1A14]/50 mb-2">
                  Now accepting patients
                </p>
                <p className="text-sm text-[#1F1A14]/80 leading-relaxed mb-4">
                  New patients typically seen within one week. In-person & telehealth.
                </p>
                <a className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F1A14] group/btn">
                  Schedule a visit
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Sub-hero meta bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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

      {/* ═══════ INTRO / MANIFESTO ═══════ */}
      <section className="relative px-6 lg:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-4">
                — Our Practice
              </p>
              <div className="flex items-center gap-2 text-sm text-[#1F1A14]/60">
                <MapPin className="h-3.5 w-3.5" />
                Farmington Hills, MI
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="serif text-3xl lg:text-[2.75rem] leading-[1.2] text-[#1F1A14] mb-8">
                Mental health care, offered with <em className="italic text-[#8B6F4E]">
                patience</em>. We treat ADHD, anxiety, depression, and bipolar
                disorder with personalized attention — no rushed visits, no
                one-size-fits-all plans.
              </p>
              <div className="flex items-center gap-6 text-sm text-[#1F1A14]/60">
                <a className="inline-flex items-center gap-2 text-[#1F1A14] font-semibold border-b border-[#1F1A14] pb-0.5">
                  Meet our providers
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a className="inline-flex items-center gap-2">
                  Why Jajo Psychiatry
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ IMAGE + TEXT MOSAIC — CONDITIONS ═══════ */}
      <section className="relative px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
                — Conditions We Treat
              </p>
              <h2 className="serif text-4xl lg:text-6xl leading-[1.05] max-w-2xl">
                Specialized care for<br />
                <em className="italic text-[#8B6F4E]">complex minds.</em>
              </h2>
            </div>
            <a className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-[#1F1A14]/70">
              View all conditions
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-[200px] lg:auto-rows-[260px]">
            {/* Large image cell */}
            <div className="lg:col-span-7 lg:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/images/ai/nature-calm.jpg"
                alt="Tranquil nature scene"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A14]/80 via-[#1F1A14]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs tracking-wider uppercase text-[#E8C9A0] mb-2">01 / Mood</p>
                <h3 className="serif text-3xl lg:text-4xl mb-2">
                  Anxiety & Depression
                </h3>
                <p className="text-sm text-white/60 max-w-sm">
                  Evidence-based treatment tailored to where you are in your journey.
                </p>
              </div>
            </div>

            {/* ADHD cell */}
            <div className="lg:col-span-5 bg-[#1F1A14] text-[#F8F4EC] rounded-2xl p-6 lg:p-8 flex flex-col justify-between group cursor-pointer">
              <div className="flex items-start justify-between">
                <p className="text-xs tracking-wider uppercase text-[#E8C9A0]">
                  02 / Focus
                </p>
                <ArrowUpRight className="h-5 w-5 text-[#E8C9A0] group-hover:rotate-45 transition-transform" />
              </div>
              <div>
                <h3 className="serif text-3xl lg:text-4xl mb-1">ADHD</h3>
                <p className="text-sm text-white/50">
                  Comprehensive testing & ongoing medication management.
                </p>
              </div>
            </div>

            {/* Bipolar cell — warm cream */}
            <div className="lg:col-span-3 bg-[#EADCC2] rounded-2xl p-6 flex flex-col justify-between cursor-pointer group">
              <p className="text-xs tracking-wider uppercase text-[#8B6F4E]">03</p>
              <div>
                <h3 className="serif text-2xl mb-1">Bipolar</h3>
                <p className="text-xs text-[#1F1A14]/60">Mood stabilization & care</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#8B6F4E] self-end group-hover:rotate-45 transition-transform" />
            </div>

            {/* PTSD cell — cream */}
            <div className="lg:col-span-2 bg-[#D4C4A8] rounded-2xl p-5 flex flex-col justify-between cursor-pointer group">
              <p className="text-xs tracking-wider uppercase text-[#1F1A14]/60">04</p>
              <div>
                <h3 className="serif text-xl">PTSD</h3>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#1F1A14]/60 self-end group-hover:rotate-45 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FULL BLEED IMAGE BREAK ═══════ */}
      <section className="relative my-20">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
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
              <p className="serif text-3xl lg:text-5xl leading-[1.2] text-[#1F1A14]">
                &ldquo;Treatment should feel like a partnership — we listen
                first, then build a plan with you, not for you.&rdquo;
              </p>
              <p className="mt-8 text-sm tracking-wider uppercase text-[#1F1A14]/60">
                — Dr. J. Ajo, Founding Psychiatrist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES — TWO COLUMN WITH IMAGE ═══════ */}
      <section className="relative px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: service list */}
            <div className="lg:col-span-7 lg:order-2">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
                — What We Offer
              </p>
              <h2 className="serif text-4xl lg:text-5xl leading-[1.1] mb-12">
                Services designed around<br />
                <em className="italic text-[#8B6F4E]">your care.</em>
              </h2>

              <div className="space-y-px bg-[#1F1A14]/10">
                {[
                  {
                    num: "01",
                    name: "Psychiatric Evaluations",
                    desc: "In-depth assessment of your mental health history, current symptoms, and goals.",
                  },
                  {
                    num: "02",
                    name: "Medication Management",
                    desc: "Careful prescribing, monitoring, and adjustment to find what works for you.",
                  },
                  {
                    num: "03",
                    name: "Telepsychiatry",
                    desc: "Convenient virtual visits for patients anywhere in Michigan.",
                  },
                  {
                    num: "04",
                    name: "ADHD Testing & Evaluations",
                    desc: "Evidence-based screening using validated clinical tools.",
                  },
                  {
                    num: "05",
                    name: "GeneSight Testing",
                    desc: "Pharmacogenomic testing to guide medication decisions.",
                  },
                ].map((svc) => (
                  <div
                    key={svc.num}
                    className="bg-[#F8F4EC] py-6 flex items-start gap-6 group cursor-pointer hover:pl-4 transition-all"
                  >
                    <span className="serif text-lg text-[#1F1A14]/30 shrink-0 w-8">
                      {svc.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="serif text-2xl mb-1">{svc.name}</h3>
                      <p className="text-sm text-[#1F1A14]/55 max-w-lg">
                        {svc.desc}
                      </p>
                    </div>
                    <Plus className="h-5 w-5 text-[#1F1A14]/40 mt-2 group-hover:rotate-90 transition-transform" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: sticky image */}
            <div className="lg:col-span-5 lg:sticky lg:top-10 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/ai/office-detail.jpg"
                  alt="Jajo Psychiatry detail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A14]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs tracking-wider uppercase text-white/70 mb-1">
                    Our Office
                  </p>
                  <p className="serif text-white text-xl leading-tight">
                    31393 West 13 Mile Road,<br />
                    Farmington Hills, MI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIAL WITH IMAGE ═══════ */}
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
                    <Star key={i} className="h-4 w-4 fill-[#E8C9A0] text-[#E8C9A0]" />
                  ))}
                </div>
                <p className="serif text-2xl lg:text-[2rem] leading-[1.3] mb-8">
                  &ldquo;The team at Jajo Psychiatry made me feel heard from day
                  one. My treatment plan has been life-changing — I finally feel
                  like myself again.&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between pt-8 border-t border-white/10">
                <div>
                  <p className="font-medium">S.M.</p>
                  <p className="text-sm text-white/50">ADHD Patient</p>
                </div>
                <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-white/40">
                  <span>01 / 03</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ INSURANCE STRIP ═══════ */}
      <section className="px-6 lg:px-10 py-16 border-t border-[#1F1A14]/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-2">
                — Insurance
              </p>
              <p className="serif text-xl">We accept most major plans.</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-[#1F1A14]/60">
              {["BCBS", "Aetna", "Cigna", "United", "Humana", "Medicare", "Medicaid", "Priority"].map(
                (p) => (
                  <span key={p} className="hover:text-[#1F1A14] transition-colors">
                    {p}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative px-6 lg:px-10 pb-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="relative aspect-[16/7] min-h-[400px]">
              <Image
                src="/images/ai/texture-warm.jpg"
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
                <h2 className="serif text-white text-4xl lg:text-6xl leading-[1.05] mb-8">
                  Take the first step<br />
                  <em className="italic text-[#E8C9A0]">today.</em>
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F8F4EC] text-[#1F1A14] text-sm font-semibold hover:bg-white transition-colors">
                    <Calendar className="h-4 w-4" />
                    Book an Appointment
                  </a>
                  <a className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                    <Phone className="h-4 w-4" />
                    (734) 331-6037
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="px-6 lg:px-10 py-12 border-t border-[#1F1A14]/10 mt-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#1F1A14]/50">
          <p className="serif">Jajo Psychiatry &mdash; Farmington Hills, MI</p>
          <p>&copy; 2026 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

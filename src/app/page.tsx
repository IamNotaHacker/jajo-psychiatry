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
  BotanicalSprig,
  GlyphWatermark,
  DotGridPattern,
} from "@/components/ui/Ornaments";

const navy = "#1B1F4B";
const blue = "#2D5DA1";
const cyan = "#4DC9F6";
const cream = "#F8F4EC";

function BrainWaves({ color = cyan, opacity = 0.1 }: { color?: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 200" preserveAspectRatio="none" style={{ opacity }}>
      <path d="M0,100 Q30,50 60,100 Q90,150 120,100 Q150,50 180,100 Q210,150 240,100 Q270,50 300,100 Q330,150 360,100 Q390,50 420,100 Q450,150 480,100 Q510,50 540,100 Q570,150 600,100 Q630,50 660,100 Q690,150 720,100 Q750,50 780,100 Q800,120 800,100"
        fill="none" stroke={color} strokeWidth="1.2" />
      <path d="M0,130 Q35,90 70,130 Q105,170 140,130 Q175,90 210,130 Q245,170 280,130 Q315,90 350,130 Q385,170 420,130 Q455,90 490,130 Q525,170 560,130 Q595,90 630,130 Q665,170 700,130 Q735,90 770,130 Q800,155 800,130"
        fill="none" stroke={color} strokeWidth="0.7" />
    </svg>
  );
}

function NeuronAccent({ color = navy, opacity = 0.06, side = "right" }: { color?: string; opacity?: number; side?: "left" | "right" }) {
  const x = side === "right" ? 85 : 15;
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ opacity }}>
      <circle cx={x} cy="50" r="8" fill="none" stroke={color} strokeWidth="0.4" />
      <circle cx={x} cy="50" r="3.5" fill="none" stroke={color} strokeWidth="0.2" />
      <line x1={x - 8} y1="50" x2={x - 20} y2="35" stroke={color} strokeWidth="0.3" />
      <line x1={x - 20} y1="35" x2={x - 28} y2="28" stroke={color} strokeWidth="0.2" />
      <line x1={x - 20} y1="35" x2={x - 26} y2="40" stroke={color} strokeWidth="0.2" />
      <line x1={x - 8} y1="55" x2={x - 22} y2="68" stroke={color} strokeWidth="0.25" />
      <line x1={x - 22} y1="68" x2={x - 30} y2="75" stroke={color} strokeWidth="0.15" />
      <line x1={x + 8} y1="50" x2={x + 18} y2="45" stroke={color} strokeWidth="0.3" />
      <circle cx={x - 28} cy="28" r="1" fill={color} opacity="0.4" />
      <circle cx={x - 26} cy="40" r="0.8" fill={color} opacity="0.3" />
      <circle cx={x - 30} cy="75" r="1" fill={color} opacity="0.4" />
      <circle cx={x + 18} cy="45" r="0.8" fill={color} opacity="0.3" />
    </svg>
  );
}

export default function Home() {
  return (
    <div style={{ background: cream, color: navy }}>
      {/* ═══════ HERO ═══════ */}
      <section className="relative px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 pb-12 sm:pb-20">
        <div className="max-w-[1400px] mx-auto">
          {/* ─── Mobile / tablet hero (editorial stacked) ─── */}
          <div className="lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: cyan }} />
                <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase" style={{ color: blue }}>
                  Metro Detroit Psychiatrist
                </span>
              </div>
              <h1 className="font-editorial text-[2.5rem] sm:text-[3.75rem] leading-[1] tracking-tight" style={{ color: navy }}>
                A quieter way
                <br />
                <em className="italic" style={{ color: blue }}>
                  to feel like yourself
                </em>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden aspect-[3/2] sm:aspect-[16/9]"
            >
              <Image
                src="/images/ai/hero-new.jpg"
                alt="Jajo Psychiatry office interior"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${navy}40, transparent 55%, ${navy}20)` }}
              />
              <div
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm"
                style={{ background: `${navy}B3` }}
              >
                <span className="text-[10px] tracking-[0.2em] uppercase text-white">
                  Now accepting patients
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6"
            >
              <p className="text-base sm:text-lg leading-relaxed mb-6 max-w-xl" style={{ color: `${navy}B3` }}>
                New patients typically seen within one week. In-person visits
                in Farmington Hills and telehealth across Michigan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={PRACTICE.bookingUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold transition-transform active:scale-[0.98]"
                  style={{ background: navy, color: cream }}
                >
                  Schedule a Visit
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${PRACTICE.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium border"
                  style={{ color: navy, borderColor: `${navy}25` }}
                >
                  <Phone className="h-4 w-4" />
                  {PRACTICE.phone}
                </a>
              </div>
            </motion.div>
          </div>

          {/* ─── Desktop hero (overlay) ─── */}
          <div className="hidden lg:block relative rounded-[2rem] overflow-hidden">
            <div className="relative aspect-[21/9]">
              <Image
                src="/images/ai/hero-new.jpg"
                alt="Jajo Psychiatry office interior"
                fill
                priority
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to top, ${navy}CC, ${navy}30, transparent)` }}
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to right, ${navy}50, transparent, transparent)` }}
              />
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{ background: `linear-gradient(135deg, ${navy}25, ${blue}15, transparent)` }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="absolute bottom-0 left-0 right-0 p-14"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px]" style={{ background: cyan }} />
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: cyan }}>
                  Metro Detroit Psychiatrist
                </span>
              </div>
              <h1 className="font-editorial text-white text-[6rem] leading-[0.95] max-w-5xl">
                A quieter way
                <br />
                <em className="italic" style={{ color: cyan }}>
                  to feel like yourself
                </em>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="absolute bottom-14 right-14"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 max-w-[280px] shadow-lg shadow-black/5">
                <p className="text-xs tracking-wider uppercase opacity-40 mb-2">
                  Now accepting patients
                </p>
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  New patients typically seen within one week. In-person &amp;
                  telehealth.
                </p>
                <Link
                  href={PRACTICE.bookingUrl}
                  className="inline-flex items-center gap-2 text-sm font-semibold group"
                  style={{ color: navy }}
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
            className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden mt-6"
            style={{ background: `${navy}12` }}
          >
            {[
              { icon: Clock, label: "Appointments", value: "Within 1 week" },
              { icon: Video, label: "Telehealth", value: "Across Michigan" },
              { icon: Shield, label: "Insurance", value: "Most plans accepted" },
              { icon: Star, label: "Patient rating", value: "5.0 stars" },
            ].map((item, i) => (
              <div key={i} className="p-5 lg:p-6 flex items-center gap-4" style={{ background: cream }}>
                <div
                  className="h-11 w-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ border: `1px solid ${navy}15` }}
                >
                  <item.icon className="h-4 w-4" style={{ color: blue }} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider opacity-35 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: navy }}>{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ MANIFESTO ═══════ */}
      <section className="relative px-6 lg:px-10 py-14 lg:py-28 overflow-hidden">
        <BrainWaves color={navy} opacity={0.04} />
        <NeuronAccent color={navy} opacity={0.05} side="right" />
        <BotanicalSprig className="absolute -left-16 top-1/2 -translate-y-1/2 w-[520px] h-[520px] text-[#1B1F4B] opacity-[0.04] hidden lg:block" />
        <GlyphWatermark className="left-[6%] -bottom-16 hidden lg:block" glyph="J" size="32rem" opacity={0.03} />

        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 relative">
              <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: `${navy}80` }}>
                — Our Practice
              </p>

              <div className="w-12 h-[2px] mb-6" style={{ background: `${cyan}60` }} />
              <p className="hidden lg:block mt-6 font-editorial italic text-lg leading-snug max-w-[16rem]" style={{ color: `${blue}88` }}>
                &ldquo;Every individual is unique.&rdquo;
              </p>
              <p className="hidden lg:block mt-2 text-[10px] tracking-[0.2em] uppercase" style={{ color: `${navy}50` }}>
                — Dr. Raad Jajo, M.D.
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="font-editorial text-3xl lg:text-[2.75rem] leading-[1.2] mb-8" style={{ color: navy }}>
                Mental health care, offered with{" "}
                <em className="italic" style={{ color: blue }}>patience</em>. We treat
                ADHD, anxiety, depression, and bipolar disorder with
                personalized attention &mdash; no rushed visits, no
                one-size-fits-all plans.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <Link
                  href="/about/providers"
                  className="inline-flex items-center gap-2 font-semibold pb-0.5"
                  style={{ color: navy, borderBottom: `1.5px solid ${cyan}` }}
                >
                  Meet our providers
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/about/founder"
                  className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                  style={{ color: `${navy}70` }}
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
      <section className="relative px-6 lg:px-10 py-16 overflow-hidden">
        <NeuronAccent color={navy} opacity={0.04} side="left" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <div className="w-10 h-[2px] mb-4" style={{ background: cyan }} />
              <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-3">
                — Conditions We Treat
              </p>
              <h2 className="font-editorial text-4xl lg:text-6xl leading-[1.05] max-w-2xl" style={{ color: navy }}>
                Specialized care for<br />
                <em className="italic" style={{ color: blue }}>complex minds.</em>
              </h2>
            </div>
            <Link
              href="/conditions"
              className="hidden lg:inline-flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
              style={{ color: navy }}
            >
              View all conditions
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4 lg:gap-5 md:auto-rows-[200px] lg:auto-rows-[260px]">
            <Link
              href="/conditions/anxiety"
              className="col-span-2 md:col-span-2 lg:col-span-7 lg:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer min-h-[240px] md:min-h-0 aspect-[4/3] md:aspect-auto"
            >
              <Image src="/images/ai/nature-new.jpg" alt="Tranquil nature scene" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${navy}CC, ${navy}20, transparent)` }} />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs tracking-wider uppercase mb-2" style={{ color: cyan }}>Mood</p>
                <h3 className="font-editorial text-3xl lg:text-4xl mb-2">Anxiety &amp; Depression</h3>
                <p className="text-sm text-white/60 max-w-sm">Evidence-based treatment tailored to where you are in your journey.</p>
              </div>
            </Link>

            <Link
              href="/conditions/adhd"
              className="col-span-2 md:col-span-2 lg:col-span-5 rounded-2xl p-6 lg:p-8 flex flex-col justify-between gap-8 md:gap-0 min-h-[180px] md:min-h-0 group cursor-pointer text-white"
              style={{ background: navy }}
            >
              <div className="flex items-start justify-between">
                <p className="text-xs tracking-wider uppercase" style={{ color: cyan }}>Focus</p>
                <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition-transform" style={{ color: cyan }} />
              </div>
              <div>
                <h3 className="font-editorial text-3xl lg:text-4xl mb-1">ADHD</h3>
                <p className="text-sm text-white/50">Comprehensive testing &amp; ongoing medication management.</p>
              </div>
            </Link>

            <Link
              href="/conditions/bipolar-disorder"
              className="lg:col-span-3 rounded-2xl p-5 md:p-6 flex flex-col justify-between gap-6 md:gap-0 min-h-[160px] md:min-h-0 cursor-pointer group"
              style={{ background: `${blue}12`, border: `1px solid ${blue}15` }}
            >
              <p className="text-xs tracking-wider uppercase" style={{ color: blue }}>Mood</p>
              <div>
                <h3 className="font-editorial text-2xl mb-1" style={{ color: navy }}>Bipolar</h3>
                <p className="text-xs opacity-50">Mood stabilization &amp; care</p>
              </div>
              <ArrowUpRight className="h-4 w-4 self-end group-hover:rotate-45 transition-transform" style={{ color: blue }} />
            </Link>

            <Link
              href="/conditions/ptsd"
              className="lg:col-span-2 rounded-2xl p-5 flex flex-col justify-between gap-6 md:gap-0 min-h-[160px] md:min-h-0 cursor-pointer group"
              style={{ background: `${cyan}10`, border: `1px solid ${cyan}15` }}
            >
              <p className="text-xs tracking-wider uppercase" style={{ color: blue }}>Trauma</p>
              <h3 className="font-editorial text-xl" style={{ color: navy }}>PTSD</h3>
              <ArrowUpRight className="h-4 w-4 self-end group-hover:rotate-45 transition-transform" style={{ color: blue }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ QUOTE BREAK ═══════ */}
      <section className="relative my-20">
        <div className="relative h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[500px] overflow-hidden">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${cream}, #EEE8DC, ${cream})` }} />
          <NeuronAccent color={navy} opacity={0.04} side="right" />
          <NeuronAccent color={blue} opacity={0.03} side="left" />
          <BrainWaves color={navy} opacity={0.03} />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center max-w-4xl">
              <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: `${blue}88` }}>
                — Our Approach
              </p>
              <p className="font-editorial text-2xl sm:text-3xl lg:text-5xl leading-[1.2]" style={{ color: navy }}>
                &ldquo;Every individual is unique. We listen to your story and
                build short and long-term plans with your goals in mind.&rdquo;
              </p>
              <p className="mt-8 text-sm tracking-wider uppercase" style={{ color: `${navy}60` }}>
                &mdash; Dr. Raad Jajo, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES LIST ═══════ */}
      <section className="relative px-6 lg:px-10 py-14 lg:py-20 overflow-hidden">
        <NeuronAccent color={navy} opacity={0.04} side="right" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="hidden lg:block lg:col-span-5 lg:order-1">
              <div className="lg:sticky lg:top-28">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image src="/images/ai/office-new.jpg" alt="Jajo Psychiatry office detail" fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${navy}55, transparent)` }} />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs tracking-wider uppercase text-white/70 mb-1">Our Office</p>
                    <p className="font-editorial text-white text-xl leading-tight">
                      31393 West 13 Mile Road,<br />Farmington Hills, MI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-2">
              <div className="w-10 h-[2px] mb-4" style={{ background: cyan }} />
              <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-3">— What We Offer</p>
              <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.1] mb-12" style={{ color: navy }}>
                Services designed around<br />
                <em className="italic" style={{ color: blue }}>your care.</em>
              </h2>

              <div className="space-y-px rounded-2xl overflow-hidden" style={{ background: `${navy}10` }}>
                {[
                  { name: "Psychiatric Evaluations", slug: "psychiatric-evaluations", desc: "In-depth assessment of your mental health history, current symptoms, and goals." },
                  { name: "Medication Management", slug: "medication-management", desc: "Careful prescribing, monitoring, and adjustment to find what works for you." },
                  { name: "Telepsychiatry", slug: "telepsychiatry", desc: "Convenient virtual visits for patients anywhere in Michigan." },
                  { name: "ADHD Testing & Evaluations", slug: "adhd-testing", desc: "Evidence-based screening using validated clinical tools." },
                  { name: "GeneSight Testing", slug: "genesight-testing", desc: "Pharmacogenomic testing to guide medication decisions." },
                ].map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="py-6 px-4 flex items-start gap-4 group cursor-pointer hover:pl-6 transition-all"
                    style={{ background: cream }}
                  >
                    <div className="flex-1">
                      <h3 className="font-editorial text-xl sm:text-2xl mb-1" style={{ color: navy }}>{svc.name}</h3>
                      <p className="text-sm opacity-50 max-w-lg">{svc.desc}</p>
                    </div>
                    <Plus className="h-5 w-5 opacity-30 mt-2 shrink-0 group-hover:rotate-90 transition-transform" style={{ color: navy }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIAL ═══════ */}
      <section className="relative px-6 lg:px-10 py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="hidden md:block lg:col-span-5 relative rounded-2xl overflow-hidden md:aspect-[16/9] lg:aspect-square">
              <Image src="/images/ai/window-new.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="lg:col-span-7 rounded-2xl p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden"
              style={{ background: navy }}>
              <BrainWaves color={cyan} opacity={0.06} />
              <div className="relative">
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4" style={{ fill: cyan, color: cyan }} />
                  ))}
                </div>
                <p className="font-editorial text-2xl lg:text-[2rem] leading-[1.3] text-white mb-8">
                  &ldquo;The team at Jajo Psychiatry made me feel heard from day
                  one. My treatment plan has been life-changing &mdash; I
                  finally feel like myself again.&rdquo;
                </p>
              </div>
              <div className="relative flex items-center justify-between pt-8 border-t border-white/10">
                <p className="font-medium text-white">Verified Patient</p>
                <Link
                  href={PRACTICE.social.psychologyToday}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-wider uppercase hover:text-white transition-colors"
                  style={{ color: cyan }}
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
      <section className="relative px-6 lg:px-10 py-16 overflow-hidden" style={{ borderTop: `1px solid ${navy}10` }}>
        <DotGridPattern color={blue} opacity={0.15} dotSize={1.4} spacing={26} />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-2">— Insurance</p>
              <p className="font-editorial text-xl" style={{ color: navy }}>We accept most major plans.</p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-2 text-sm opacity-50">
              {["BCBS", "Aetna", "Cigna", "United", "Humana", "Medicare", "Medicaid", "Priority"].map((p) => (
                <span key={p} className="hover:opacity-100 transition-opacity">{p}</span>
              ))}
            </div>
            <Link href="/insurance" className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity">
              View all <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative px-6 lg:px-10 pb-20 pt-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="relative aspect-[16/9] min-h-[400px] md:aspect-[16/7]">
              <Image src="/images/ai/cta-new.jpg" alt="" fill className="object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${navy}EE, ${blue}AA, ${navy}EE)` }} />
            </div>
            <BrainWaves color={cyan} opacity={0.1} />
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="text-center max-w-3xl">
                <p className="text-xs tracking-[0.4em] uppercase mb-5" style={{ color: cyan }}>
                  — Ready to begin?
                </p>
                <h2 className="font-editorial text-white text-4xl lg:text-6xl leading-[1.05] mb-8">
                  Take the first step<br />
                  <em className="italic" style={{ color: cyan }}>today.</em>
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href={PRACTICE.bookingUrl}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                    style={{ background: cream, color: navy }}
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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Clock,
  Video,
  Shield,
  Star,
  Plus,
  Calendar,
  Phone,
} from "lucide-react";

const navy = "#1B1F4B";
const blue = "#2D5DA1";
const cyan = "#4DC9F6";
const cream = "#F8F4EC";
const creamDeep = "#EADCC2";

function NeuralDots({ color = "rgba(77,201,246,0.3)", count = 20 }: { color?: string; count?: number }) {
  const dots = Array.from({ length: count }, (_, i) => ({
    cx: Math.random() * 100,
    cy: Math.random() * 100,
    r: Math.random() * 2 + 1,
    delay: Math.random() * 3,
  }));
  const lines = dots.slice(0, 6).map((d, i) => {
    const target = dots[(i + 3) % dots.length];
    return { x1: d.cx, y1: d.cy, x2: target.cx, y2: target.cy };
  });
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
      {lines.map((l, i) => (
        <line key={i} {...l} stroke={color} strokeWidth="0.15" opacity="0.35" />
      ))}
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r * 0.35} fill={color}>
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur={`${2.5 + d.delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function SectionLabel({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="bg-white px-6 py-5 border-t border-gray-100">
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
        Version {number}
      </span>
      <h3 className="text-lg font-semibold text-gray-900 mt-1">{title}</h3>
      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{subtitle}</p>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   VERSION 1 — Classic Swap
   Navy replaces ink, cyan replaces gold. Same editorial layout.
   ════════════════════════════════════════════════════════════════ */
function Version1() {
  return (
    <div style={{ background: cream }}>
      {/* Hero */}
      <div className="relative px-4 pt-4 pb-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/7]">
            <Image src="/images/ai/hero-main.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${navy}CC, ${navy}33, transparent)` }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${navy}66, transparent, transparent)` }} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="font-editorial text-white text-3xl leading-[0.95] max-w-md">
              A quieter way
              <br />
              <em className="italic" style={{ color: cyan }}>to feel like yourself</em>
            </h2>
          </div>
          <div className="absolute bottom-4 right-4 hidden md:block">
            <div className="bg-white/95 backdrop-blur rounded-xl p-3.5 max-w-[200px]">
              <p className="text-[10px] tracking-wider uppercase opacity-50 mb-1">Now accepting patients</p>
              <p className="text-xs opacity-70 leading-relaxed mb-2">New patients typically seen within one week.</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: navy }}>
                Schedule a visit <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Meta bar */}
        <div className="grid grid-cols-4 gap-px rounded-xl overflow-hidden mt-3" style={{ background: `${navy}15` }}>
          {[
            { icon: Clock, label: "Appointments", value: "Within 1 week" },
            { icon: Video, label: "Telehealth", value: "Across Michigan" },
            { icon: Shield, label: "Insurance", value: "Most plans" },
            { icon: Star, label: "Rating", value: "5.0 stars" },
          ].map((item, i) => (
            <div key={i} className="p-3 flex items-center gap-2" style={{ background: cream }}>
              <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0"
                style={{ border: `1px solid ${navy}20` }}>
                <item.icon className="h-3 w-3" style={{ color: `${navy}99` }} />
              </div>
              <div className="hidden lg:block">
                <p className="text-[9px] uppercase tracking-wider opacity-40">{item.label}</p>
                <p className="text-xs font-medium" style={{ color: navy }}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conditions preview */}
      <div className="px-4 py-6">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-1">— Conditions We Treat</p>
            <h3 className="font-editorial text-2xl leading-tight" style={{ color: navy }}>
              Specialized care for<br />
              <em className="italic" style={{ color: blue }}>complex minds.</em>
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 auto-rows-[100px]">
          <div className="col-span-7 row-span-2 relative rounded-xl overflow-hidden">
            <Image src="/images/ai/nature-calm.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${navy}CC, transparent)` }} />
            <div className="absolute bottom-3 left-3 text-white">
              <p className="text-[9px] tracking-wider uppercase mb-0.5" style={{ color: cyan }}>Mood</p>
              <p className="font-editorial text-lg">Anxiety & Depression</p>
            </div>
          </div>
          <div className="col-span-5 rounded-xl p-3 flex flex-col justify-between" style={{ background: navy, color: cream }}>
            <p className="text-[9px] tracking-wider uppercase" style={{ color: cyan }}>Focus</p>
            <div>
              <p className="font-editorial text-lg">ADHD</p>
              <p className="text-[10px] opacity-50">Testing & management</p>
            </div>
          </div>
          <div className="col-span-3 rounded-xl p-2.5 flex flex-col justify-between" style={{ background: creamDeep }}>
            <p className="text-[9px] tracking-wider uppercase" style={{ color: blue }}>Mood</p>
            <p className="font-editorial text-sm">Bipolar</p>
          </div>
          <div className="col-span-2 rounded-xl p-2 flex flex-col justify-between" style={{ background: `${blue}18` }}>
            <p className="text-[9px] tracking-wider uppercase opacity-50">Trauma</p>
            <p className="font-editorial text-sm" style={{ color: navy }}>PTSD</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/6]">
            <Image src="/images/ai/cta-warm.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${navy}EE, ${blue}BB, ${navy}EE)` }} />
          </div>
          <NeuralDots color="rgba(77,201,246,0.2)" count={18} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: cyan }}>— Ready to begin?</p>
              <h3 className="font-editorial text-white text-2xl mb-4">
                Take the first step <em className="italic" style={{ color: cyan }}>today.</em>
              </h3>
              <div className="flex items-center justify-center gap-2">
                <span className="px-5 py-2 rounded-full text-xs font-semibold" style={{ background: cream, color: navy }}>
                  Book an Appointment
                </span>
                <span className="px-5 py-2 rounded-full text-xs font-medium border border-white/30 text-white">
                  (734) 331-6037
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   VERSION 2 — Gradient Hero
   Navy-to-blue gradient hero, bolder cyan accents, floating cards.
   ════════════════════════════════════════════════════════════════ */
function Version2() {
  return (
    <div style={{ background: cream }}>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: `linear-gradient(165deg, ${navy} 0%, ${blue} 60%, #3A78C2 100%)` }}>
        <NeuralDots color="rgba(77,201,246,0.25)" count={30} />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px]"
          style={{ background: `radial-gradient(circle, ${cyan}30, transparent)` }} />

        <div className="relative px-6 py-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded-full" style={{ background: `linear-gradient(135deg, ${cyan}, ${blue})` }} />
            <span className="text-sm font-semibold text-white/90 tracking-wide">
              JAJO <span style={{ color: cyan }}>PSYCHIATRY</span>
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px]" style={{ background: cyan }} />
            <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: cyan }}>Farmington Hills, MI</span>
          </div>

          <h2 className="font-editorial text-white text-4xl leading-[0.95] mb-3 max-w-lg">
            A quieter way
            <br />
            <em className="italic" style={{ color: cyan }}>to feel like yourself</em>
          </h2>
          <p className="text-sm text-white/50 max-w-sm mb-5">
            Personalized psychiatric care for ADHD, anxiety, depression, and bipolar disorder.
          </p>
          <div className="flex gap-2">
            <span className="px-5 py-2.5 rounded-full text-xs font-semibold" style={{ background: cyan, color: navy }}>
              Book a Consultation
            </span>
            <span className="px-5 py-2.5 rounded-full text-xs font-medium border border-white/25 text-white/80">
              Learn More
            </span>
          </div>
        </div>

        {/* Stats floating */}
        <div className="relative px-6 pb-6">
          <div className="grid grid-cols-4 gap-2">
            {[
              { value: "1 week", label: "Availability" },
              { value: "5.0 ★", label: "Rating" },
              { value: "50+", label: "Insurances" },
              { value: "100%", label: "Telehealth" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}>
                <p className="text-sm font-bold text-white">{s.value}</p>
                <p className="text-[9px] uppercase tracking-wider text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conditions */}
      <div className="px-4 py-6">
        <div className="mb-4">
          <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-1">— Conditions We Treat</p>
          <h3 className="font-editorial text-2xl leading-tight" style={{ color: navy }}>
            Expert focus on <em className="italic" style={{ color: blue }}>what matters.</em>
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: "Anxiety & Depression", tag: "Mood", accent: blue },
            { name: "ADHD", tag: "Focus", accent: cyan },
            { name: "Bipolar Disorder", tag: "Mood", accent: navy },
            { name: "PTSD", tag: "Trauma", accent: blue },
          ].map((c) => (
            <div key={c.name} className="rounded-xl p-4 flex flex-col justify-between min-h-[90px] group cursor-pointer transition-all hover:shadow-md"
              style={{ background: `${c.accent}0D`, border: `1px solid ${c.accent}15` }}>
              <p className="text-[9px] tracking-wider uppercase font-medium" style={{ color: c.accent }}>{c.tag}</p>
              <div className="flex items-end justify-between">
                <p className="font-editorial text-sm" style={{ color: navy }}>{c.name}</p>
                <ArrowUpRight className="h-3 w-3 opacity-30 group-hover:opacity-70 group-hover:rotate-45 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="px-4 py-4">
        <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-1">— Services</p>
        <h3 className="font-editorial text-xl mb-3" style={{ color: navy }}>
          What we <em className="italic" style={{ color: blue }}>offer.</em>
        </h3>
        <div className="space-y-px rounded-xl overflow-hidden" style={{ background: `${navy}10` }}>
          {["Psychiatric Evaluations", "Medication Management", "Telepsychiatry", "ADHD Testing"].map((s) => (
            <div key={s} className="py-3 px-3 flex items-center justify-between group" style={{ background: cream }}>
              <p className="font-editorial text-sm" style={{ color: navy }}>{s}</p>
              <Plus className="h-3.5 w-3.5 opacity-30 group-hover:rotate-90 transition-transform" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-4">
        <div className="rounded-2xl p-8 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${navy}, ${blue})` }}>
          <NeuralDots color="rgba(77,201,246,0.15)" count={14} />
          <div className="relative">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: cyan }}>— Begin your journey</p>
            <h3 className="font-editorial text-white text-2xl mb-4">
              Take the first step <em className="italic" style={{ color: cyan }}>today.</em>
            </h3>
            <span className="inline-block px-6 py-2.5 rounded-full text-xs font-semibold" style={{ background: cyan, color: navy }}>
              Schedule Your Visit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   VERSION 3 — Soft Accent
   Mostly preserves warm cream, navy only for text, cyan pops on
   buttons, badges, and accent lines. Gentlest integration.
   ════════════════════════════════════════════════════════════════ */
function Version3() {
  return (
    <div style={{ background: cream }}>
      {/* Hero */}
      <div className="relative px-4 pt-4 pb-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/7]">
            <Image src="/images/ai/hero-main.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px]" style={{ background: cyan }} />
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-medium tracking-wider uppercase"
                style={{ background: `${cyan}25`, color: cyan, border: `1px solid ${cyan}40` }}>
                Now Accepting Patients
              </span>
            </div>
            <h2 className="font-editorial text-white text-3xl leading-[0.95] max-w-md">
              A quieter way
              <br />
              <em className="italic text-[#E8C9A0]">to feel like yourself</em>
            </h2>
          </div>
        </div>

        {/* Meta bar with cyan accents */}
        <div className="grid grid-cols-4 gap-px rounded-xl overflow-hidden mt-3" style={{ background: `${navy}10` }}>
          {[
            { icon: Clock, label: "Appointments", value: "Within 1 week" },
            { icon: Video, label: "Telehealth", value: "Across Michigan" },
            { icon: Shield, label: "Insurance", value: "Most plans" },
            { icon: Star, label: "Rating", value: "5.0 stars" },
          ].map((item, i) => (
            <div key={i} className="p-3 flex items-center gap-2" style={{ background: cream }}>
              <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: `${cyan}12`, border: `1px solid ${cyan}25` }}>
                <item.icon className="h-3 w-3" style={{ color: blue }} />
              </div>
              <div className="hidden lg:block">
                <p className="text-[9px] uppercase tracking-wider opacity-40">{item.label}</p>
                <p className="text-xs font-medium" style={{ color: navy }}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manifesto */}
      <div className="px-4 py-6">
        <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-2">— Our Practice</p>
        <p className="font-editorial text-xl leading-[1.25]" style={{ color: navy }}>
          Mental health care, offered with{" "}
          <em className="italic" style={{ color: blue }}>patience</em>. We treat
          ADHD, anxiety, depression, and bipolar disorder with personalized attention.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <span className="inline-flex items-center gap-1 text-xs font-semibold pb-0.5" style={{ color: navy, borderBottom: `1.5px solid ${cyan}` }}>
            Meet our providers <ArrowRight className="h-3 w-3" />
          </span>
          <span className="text-xs opacity-50">Our founder&apos;s story →</span>
        </div>
      </div>

      {/* Conditions */}
      <div className="px-4 py-4">
        <div className="mb-3">
          <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-1">— Conditions</p>
          <h3 className="font-editorial text-2xl leading-tight" style={{ color: navy }}>
            Specialized care for <em className="italic text-[#8B6F4E]">complex minds.</em>
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-2 auto-rows-[90px]">
          <div className="col-span-7 row-span-2 relative rounded-xl overflow-hidden">
            <Image src="/images/ai/nature-calm.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <p className="text-[9px] tracking-wider uppercase mb-0.5 text-[#E8C9A0]">Mood</p>
              <p className="font-editorial text-lg">Anxiety & Depression</p>
            </div>
          </div>
          <div className="col-span-5 rounded-xl p-3 flex flex-col justify-between" style={{ background: navy, color: cream }}>
            <div className="flex justify-between">
              <p className="text-[9px] tracking-wider uppercase" style={{ color: cyan }}>Focus</p>
              <ArrowUpRight className="h-3 w-3" style={{ color: cyan }} />
            </div>
            <div>
              <p className="font-editorial text-lg">ADHD</p>
              <p className="text-[10px] opacity-40">Testing & management</p>
            </div>
          </div>
          <div className="col-span-5 rounded-xl p-2.5 flex flex-col justify-between" style={{ background: creamDeep }}>
            <p className="text-[9px] tracking-wider uppercase text-[#8B6F4E]">Mood</p>
            <p className="font-editorial text-sm" style={{ color: navy }}>Bipolar · PTSD</p>
          </div>
        </div>
      </div>

      {/* CTA — warm with cyan button */}
      <div className="px-4 pb-4 pt-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/6]">
            <Image src="/images/ai/cta-warm.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${navy}DD, rgba(61,46,31,0.7), ${navy}DD)` }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-2 text-[#E8C9A0]">— Ready to begin?</p>
              <h3 className="font-editorial text-white text-2xl mb-4">
                Take the first step <em className="italic text-[#E8C9A0]">today.</em>
              </h3>
              <div className="flex items-center justify-center gap-2">
                <span className="px-5 py-2 rounded-full text-xs font-semibold" style={{ background: cyan, color: navy }}>
                  <Calendar className="h-3 w-3 inline mr-1.5" />Book Appointment
                </span>
                <span className="px-5 py-2 rounded-full text-xs font-medium border border-white/30 text-white">
                  <Phone className="h-3 w-3 inline mr-1.5" />(734) 331-6037
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   VERSION 4 — Navy Sections
   Alternates cream and navy sections. Creates strong visual rhythm.
   Conditions and testimonial in navy, rest in cream.
   ════════════════════════════════════════════════════════════════ */
function Version4() {
  return (
    <div style={{ background: cream }}>
      {/* Hero — cream-based with navy text */}
      <div className="px-4 pt-6 pb-4">
        <div className="max-w-lg">
          <div className="flex items-center gap-2 mb-4">
            {[navy, blue, cyan].map((c) => (
              <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
            ))}
            <span className="text-[9px] tracking-[0.2em] uppercase ml-1" style={{ color: blue }}>
              Farmington Hills, MI
            </span>
          </div>
          <h2 className="font-editorial text-4xl leading-[0.95] mb-3" style={{ color: navy }}>
            A quieter way
            <br />
            <em className="italic" style={{ color: blue }}>to feel like yourself</em>
          </h2>
          <p className="text-sm opacity-55 mb-5 leading-relaxed">
            Personalized psychiatric care designed around you. New patients typically seen within one week.
          </p>
          <div className="flex gap-2">
            <span className="px-5 py-2.5 rounded-full text-xs font-semibold text-white" style={{ background: navy }}>
              Book a Consultation
            </span>
            <span className="px-5 py-2.5 rounded-full text-xs font-medium" style={{ color: navy, border: `1px solid ${navy}25` }}>
              (734) 331-6037
            </span>
          </div>
        </div>

        <div className="mt-6 relative rounded-2xl overflow-hidden aspect-[16/6]">
          <Image src="/images/ai/hero-main.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${navy}20, transparent)` }} />
          <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, ${navy}, ${blue}, ${cyan})` }} />
        </div>
      </div>

      {/* Conditions — navy band */}
      <div className="mt-4 px-4 py-6 relative overflow-hidden" style={{ background: navy }}>
        <NeuralDots color="rgba(77,201,246,0.15)" count={16} />
        <div className="relative">
          <p className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: `${cyan}88` }}>— Conditions We Treat</p>
          <h3 className="font-editorial text-2xl leading-tight text-white mb-4">
            Specialized care for <em className="italic" style={{ color: cyan }}>complex minds.</em>
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {[
              { name: "Anxiety & Depression", tag: "Mood" },
              { name: "ADHD", tag: "Focus" },
              { name: "Bipolar Disorder", tag: "Mood" },
              { name: "PTSD", tag: "Trauma" },
            ].map((c) => (
              <div key={c.name} className="rounded-xl p-3 flex flex-col justify-between min-h-[80px]"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-[8px] tracking-wider uppercase" style={{ color: cyan }}>{c.tag}</p>
                <p className="font-editorial text-sm text-white">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services — cream */}
      <div className="px-4 py-6">
        <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-1">— Services</p>
        <h3 className="font-editorial text-xl mb-3" style={{ color: navy }}>
          Designed around <em className="italic" style={{ color: blue }}>your care.</em>
        </h3>
        <div className="space-y-px rounded-xl overflow-hidden" style={{ background: `${navy}10` }}>
          {["Psychiatric Evaluations", "Medication Management", "Telepsychiatry", "ADHD Testing", "GeneSight Testing"].map((s) => (
            <div key={s} className="py-3 px-3 flex items-center justify-between group" style={{ background: cream }}>
              <p className="font-editorial text-sm" style={{ color: navy }}>{s}</p>
              <Plus className="h-3.5 w-3.5 opacity-25 group-hover:rotate-90 transition-transform" style={{ color: navy }} />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial — navy */}
      <div className="px-4">
        <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: navy }}>
          <div className="flex gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3" style={{ fill: cyan, color: cyan }} />
            ))}
          </div>
          <p className="font-editorial text-white text-lg leading-[1.3] mb-4">
            &ldquo;The team at Jajo Psychiatry made me feel heard from day one. My treatment plan has been life-changing.&rdquo;
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <p className="text-xs text-white/60">Verified Patient</p>
            <span className="text-[10px] uppercase tracking-wider" style={{ color: cyan }}>
              Read more reviews →
            </span>
          </div>
        </div>
      </div>

      {/* CTA — gradient */}
      <div className="p-4 mt-2">
        <div className="rounded-2xl text-center py-8 px-6 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${navy}, ${blue})` }}>
          <NeuralDots color="rgba(77,201,246,0.12)" count={12} />
          <div className="relative">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: cyan }}>— Ready to begin?</p>
            <h3 className="font-editorial text-white text-2xl mb-4">
              Take the first step <em className="italic" style={{ color: cyan }}>today.</em>
            </h3>
            <span className="inline-block px-6 py-2.5 rounded-full text-xs font-semibold" style={{ background: cream, color: navy }}>
              Book an Appointment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageDirectionsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#F2EDE5" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: blue }}>
            Homepage Exploration
          </span>
          <h1 className="font-editorial text-4xl md:text-5xl mt-4 mb-4" style={{ color: navy }}>
            Homepage Layout Options
          </h1>
          <p className="text-sm max-w-xl mx-auto leading-relaxed text-gray-500">
            Four homepage approaches using the &ldquo;Warm Editorial + Logo Colors&rdquo; palette.
            Each shows hero, conditions, services, and CTA with different treatments.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Version1 />
            <SectionLabel
              number="1"
              title="Classic Swap"
              subtitle="Direct color replacement — navy for ink, cyan for gold. Keeps the current layout structure. Safest, most familiar change."
            />
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Version2 />
            <SectionLabel
              number="2"
              title="Gradient Hero"
              subtitle="Full navy-to-blue gradient hero with floating stats. Strongest brand presence up front. Body stays warm and accessible."
            />
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Version3 />
            <SectionLabel
              number="3"
              title="Soft Accent"
              subtitle="Preserves the warm editorial feel almost entirely. Cyan appears only in buttons, badges, and accent lines. Gentlest integration."
            />
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Version4 />
            <SectionLabel
              number="4"
              title="Navy Sections"
              subtitle="Alternating cream and navy bands create visual rhythm. Conditions and testimonial in navy, everything else in cream. Bold but structured."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

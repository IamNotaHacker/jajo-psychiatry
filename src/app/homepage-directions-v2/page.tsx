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

function NeuralBg({ color = "rgba(77,201,246,0.25)", count = 22, seed = 1 }: { color?: string; count?: number; seed?: number }) {
  const dots = Array.from({ length: count }, (_, i) => ({
    cx: ((i * 37 * seed) % 100),
    cy: ((i * 53 * seed + 17) % 100),
    r: ((i * 13) % 3) + 1,
    delay: ((i * 7) % 4),
  }));
  const lines = dots.slice(0, Math.floor(count / 3)).map((d, i) => {
    const target = dots[(i + 3) % dots.length];
    return { x1: d.cx, y1: d.cy, x2: target.cx, y2: target.cy };
  });
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
      {lines.map((l, i) => (
        <line key={i} {...l} stroke={color} strokeWidth="0.12" opacity="0.3" />
      ))}
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r * 0.3} fill={color}>
          <animate attributeName="opacity" values="0.15;0.6;0.15" dur={`${2.5 + d.delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function GradientOrb({ color, size, top, left, right, bottom, blur = 120 }: {
  color: string; size: string; blur?: number;
  top?: string; left?: string; right?: string; bottom?: string;
}) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        width: size, height: size, top, left, right, bottom,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}

function SectionLabel({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="bg-white px-6 py-5 border-t border-gray-100">
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">Version {number}</span>
      <h3 className="text-lg font-semibold text-gray-900 mt-1">{title}</h3>
      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{subtitle}</p>
    </div>
  );
}

function MetaBar() {
  return (
    <div className="grid grid-cols-4 gap-px rounded-xl overflow-hidden mt-3" style={{ background: `${navy}12` }}>
      {[
        { icon: Clock, label: "Appointments", value: "Within 1 week" },
        { icon: Video, label: "Telehealth", value: "Across Michigan" },
        { icon: Shield, label: "Insurance", value: "Most plans" },
        { icon: Star, label: "Rating", value: "5.0 stars" },
      ].map((item, i) => (
        <div key={i} className="p-3 flex items-center gap-2" style={{ background: cream }}>
          <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0"
            style={{ border: `1px solid ${navy}18` }}>
            <item.icon className="h-3 w-3" style={{ color: `${navy}99` }} />
          </div>
          <div className="hidden lg:block">
            <p className="text-[9px] uppercase tracking-wider opacity-40">{item.label}</p>
            <p className="text-xs font-medium" style={{ color: navy }}>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ConditionsMosaic() {
  return (
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
        <div className="flex justify-between">
          <p className="text-[9px] tracking-wider uppercase" style={{ color: cyan }}>Focus</p>
          <ArrowUpRight className="h-3 w-3" style={{ color: cyan }} />
        </div>
        <div>
          <p className="font-editorial text-lg">ADHD</p>
          <p className="text-[10px] opacity-40">Testing & management</p>
        </div>
      </div>
      <div className="col-span-3 rounded-xl p-2.5 flex flex-col justify-between" style={{ background: creamDeep }}>
        <p className="text-[9px] tracking-wider uppercase" style={{ color: blue }}>Mood</p>
        <p className="font-editorial text-sm" style={{ color: navy }}>Bipolar</p>
      </div>
      <div className="col-span-2 rounded-xl p-2 flex flex-col justify-between" style={{ background: `${blue}12` }}>
        <p className="text-[9px] tracking-wider uppercase opacity-50">Trauma</p>
        <p className="font-editorial text-sm" style={{ color: navy }}>PTSD</p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   V1 — Neural Network Backgrounds
   Subtle animated neural dots behind hero, manifesto, and CTA.
   Echoes the logo's connected-mind motif.
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
            <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${navy}55, transparent, transparent)` }} />
            <NeuralBg color="rgba(77,201,246,0.35)" count={18} seed={1} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="w-10 h-[2px] mb-3" style={{ background: cyan }} />
            <h2 className="font-editorial text-white text-3xl leading-[0.95] max-w-md">
              A quieter way<br />
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
        <MetaBar />
      </div>

      {/* Manifesto with neural bg */}
      <div className="relative px-4 py-6 overflow-hidden">
        <NeuralBg color={`${navy}12`} count={16} seed={2} />
        <div className="relative">
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
          </div>
        </div>
      </div>

      {/* Conditions */}
      <div className="px-4 py-4">
        <div className="mb-3">
          <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-1">— Conditions We Treat</p>
          <h3 className="font-editorial text-2xl leading-tight" style={{ color: navy }}>
            Specialized care for <em className="italic" style={{ color: blue }}>complex minds.</em>
          </h3>
        </div>
        <ConditionsMosaic />
      </div>

      {/* CTA with neural */}
      <div className="px-4 pb-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/6]">
            <Image src="/images/ai/cta-warm.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${navy}EE, ${blue}BB, ${navy}EE)` }} />
          </div>
          <NeuralBg color="rgba(77,201,246,0.25)" count={24} seed={3} />
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
   V2 — Gradient Orbs
   Soft glowing orbs of navy/cyan/blue behind sections.
   Creates atmospheric depth without being heavy.
   ════════════════════════════════════════════════════════════════ */
function Version2() {
  return (
    <div className="relative" style={{ background: cream }}>
      {/* Ambient orbs */}
      <GradientOrb color={`${cyan}12`} size="400px" top="-100px" right="-100px" />
      <GradientOrb color={`${blue}10`} size="350px" top="600px" left="-150px" />
      <GradientOrb color={`${cyan}08`} size="300px" bottom="200px" right="-80px" />

      {/* Hero */}
      <div className="relative px-4 pt-4 pb-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/7]">
            <Image src="/images/ai/hero-main.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${navy}CC, ${navy}33, transparent)` }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${navy}55, transparent, transparent)` }} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="font-editorial text-white text-3xl leading-[0.95] max-w-md">
              A quieter way<br />
              <em className="italic" style={{ color: cyan }}>to feel like yourself</em>
            </h2>
          </div>
          <div className="absolute bottom-4 right-4 hidden md:block">
            <div className="bg-white/95 backdrop-blur rounded-xl p-3.5 max-w-[200px] shadow-lg shadow-black/5">
              <p className="text-[10px] tracking-wider uppercase opacity-50 mb-1">Now accepting patients</p>
              <p className="text-xs opacity-70 leading-relaxed mb-2">New patients typically seen within one week.</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: navy }}>
                Schedule a visit <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
        <MetaBar />
      </div>

      {/* Manifesto with left accent bar */}
      <div className="relative px-4 py-6">
        <div className="relative pl-5 border-l-2" style={{ borderColor: `${cyan}40` }}>
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
          </div>
        </div>
      </div>

      {/* Conditions with soft bg panel */}
      <div className="px-4 py-4">
        <div className="rounded-2xl p-4 relative overflow-hidden" style={{ background: `${navy}05` }}>
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full" style={{ background: `radial-gradient(circle, ${cyan}08, transparent 70%)` }} />
          <div className="relative">
            <div className="mb-3">
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-1">— Conditions We Treat</p>
              <h3 className="font-editorial text-2xl leading-tight" style={{ color: navy }}>
                Specialized care for <em className="italic" style={{ color: blue }}>complex minds.</em>
              </h3>
            </div>
            <ConditionsMosaic />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative px-4 pb-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/6]">
            <Image src="/images/ai/cta-warm.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${navy}EE, ${blue}BB, ${navy}EE)` }} />
          </div>
          <GradientOrb color={`${cyan}30`} size="200px" top="-60px" right="-40px" blur={80} />
          <GradientOrb color={`${blue}25`} size="180px" bottom="-60px" left="-40px" blur={80} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: cyan }}>— Ready to begin?</p>
              <h3 className="font-editorial text-white text-2xl mb-4">
                Take the first step <em className="italic" style={{ color: cyan }}>today.</em>
              </h3>
              <div className="flex items-center justify-center gap-2">
                <span className="px-5 py-2 rounded-full text-xs font-semibold" style={{ background: cyan, color: navy }}>
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
   V3 — Geometric Panels
   Subtle geometric shapes and panels echoing the logo's faceted
   design. Section dividers with gradient lines.
   ════════════════════════════════════════════════════════════════ */
function Version3() {
  return (
    <div style={{ background: cream }}>
      {/* Hero with geometric overlay */}
      <div className="relative px-4 pt-4 pb-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/7]">
            <Image src="/images/ai/hero-main.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${navy}CC, ${navy}33, transparent)` }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${navy}55, transparent, transparent)` }} />
            {/* Geometric shapes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="none">
              <circle cx="340" cy="40" r="60" fill="none" stroke={`${cyan}25`} strokeWidth="0.5" />
              <circle cx="340" cy="40" r="35" fill="none" stroke={`${cyan}15`} strokeWidth="0.5" />
              <polygon points="350,150 380,180 320,180" fill="none" stroke={`${cyan}15`} strokeWidth="0.5" />
              <line x1="0" y1="160" x2="120" y2="160" stroke={`${cyan}20`} strokeWidth="0.5" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-[2px]" style={{ background: cyan }} />
              <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: `${cyan}CC` }}>Farmington Hills, MI</span>
            </div>
            <h2 className="font-editorial text-white text-3xl leading-[0.95] max-w-md">
              A quieter way<br />
              <em className="italic" style={{ color: cyan }}>to feel like yourself</em>
            </h2>
          </div>
          <div className="absolute bottom-4 right-4 hidden md:block">
            <div className="bg-white/95 backdrop-blur rounded-xl p-3.5 max-w-[200px]">
              <p className="text-[10px] tracking-wider uppercase opacity-50 mb-1">Now accepting patients</p>
              <p className="text-xs opacity-70 leading-relaxed mb-2">Seen within one week. In-person & telehealth.</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: navy }}>
                Schedule a visit <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
        <MetaBar />
      </div>

      {/* Gradient divider */}
      <div className="px-4">
        <div className="h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${cyan}30, ${blue}20, transparent)` }} />
      </div>

      {/* Manifesto */}
      <div className="relative px-4 py-6 overflow-hidden">
        <svg className="absolute right-0 top-0 w-40 h-40 pointer-events-none opacity-[0.04]" viewBox="0 0 100 100">
          <polygon points="50,5 95,75 5,75" fill="none" stroke={navy} strokeWidth="2" />
          <circle cx="50" cy="50" r="40" fill="none" stroke={navy} strokeWidth="1" />
        </svg>
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
        </div>
      </div>

      {/* Gradient divider */}
      <div className="px-4">
        <div className="h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${cyan}30, ${blue}20, transparent)` }} />
      </div>

      {/* Conditions */}
      <div className="px-4 py-4">
        <div className="mb-3">
          <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-1">— Conditions We Treat</p>
          <h3 className="font-editorial text-2xl leading-tight" style={{ color: navy }}>
            Specialized care for <em className="italic" style={{ color: blue }}>complex minds.</em>
          </h3>
        </div>
        <ConditionsMosaic />
      </div>

      {/* CTA with geometric elements */}
      <div className="px-4 pb-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/6]">
            <Image src="/images/ai/cta-warm.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${navy}EE, ${blue}BB, ${navy}EE)` }} />
          </div>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 150" preserveAspectRatio="none">
            <circle cx="50" cy="75" r="80" fill="none" stroke={`${cyan}15`} strokeWidth="0.5" />
            <circle cx="350" cy="75" r="60" fill="none" stroke={`${cyan}10`} strokeWidth="0.5" />
            <polygon points="200,10 230,50 170,50" fill="none" stroke={`${cyan}10`} strokeWidth="0.5" />
          </svg>
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
   V4 — Layered Everything
   Combines neural dots, gradient orbs, gradient dividers,
   noise texture, and subtle geometric accents. Richest feel.
   ════════════════════════════════════════════════════════════════ */
function Version4() {
  return (
    <div className="relative" style={{ background: cream }}>
      {/* Global ambient orbs */}
      <GradientOrb color={`${cyan}0A`} size="500px" top="-200px" right="-200px" />
      <GradientOrb color={`${blue}08`} size="400px" top="500px" left="-200px" />

      {/* Top accent bar */}
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${navy}, ${blue}, ${cyan}, ${blue}, ${navy})` }} />

      {/* Hero */}
      <div className="relative px-4 pt-4 pb-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/7]">
            <Image src="/images/ai/hero-main.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${navy}DD, ${navy}44, transparent)` }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${navy}55, transparent, transparent)` }} />
            <NeuralBg color="rgba(77,201,246,0.3)" count={16} seed={5} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-[2px]" style={{ background: cyan }} />
              <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: `${cyan}CC` }}>Farmington Hills, MI</span>
            </div>
            <h2 className="font-editorial text-white text-3xl leading-[0.95] max-w-md">
              A quieter way<br />
              <em className="italic" style={{ color: cyan }}>to feel like yourself</em>
            </h2>
          </div>
          <div className="absolute bottom-4 right-4 hidden md:block">
            <div className="bg-white/95 backdrop-blur rounded-xl p-3.5 max-w-[200px] shadow-lg shadow-black/5">
              <p className="text-[10px] tracking-wider uppercase opacity-50 mb-1">Now accepting patients</p>
              <p className="text-xs opacity-70 leading-relaxed mb-2">Seen within one week. In-person & telehealth.</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: navy }}>
                Schedule a visit <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
        <MetaBar />
      </div>

      {/* Gradient divider */}
      <div className="px-4"><div className="h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${cyan}35, ${blue}25, transparent)` }} /></div>

      {/* Manifesto with panel + neural */}
      <div className="relative px-4 py-6 overflow-hidden">
        <NeuralBg color={`${navy}08`} count={12} seed={4} />
        <div className="relative pl-5 border-l-2" style={{ borderColor: `${cyan}35` }}>
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
          </div>
        </div>
      </div>

      {/* Gradient divider */}
      <div className="px-4"><div className="h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${cyan}35, ${blue}25, transparent)` }} /></div>

      {/* Conditions in subtle panel */}
      <div className="px-4 py-4">
        <div className="rounded-2xl p-4 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${navy}04, ${cyan}06, ${navy}04)` }}>
          <div className="relative">
            <div className="mb-3">
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-1">— Conditions We Treat</p>
              <h3 className="font-editorial text-2xl leading-tight" style={{ color: navy }}>
                Specialized care for <em className="italic" style={{ color: blue }}>complex minds.</em>
              </h3>
            </div>
            <ConditionsMosaic />
          </div>
        </div>
      </div>

      {/* CTA — full layered */}
      <div className="relative px-4 pb-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/6]">
            <Image src="/images/ai/cta-warm.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${navy}EE, ${blue}CC, ${navy}EE)` }} />
          </div>
          <NeuralBg color="rgba(77,201,246,0.2)" count={20} seed={6} />
          <GradientOrb color={`${cyan}25`} size="200px" top="-80px" right="-50px" blur={70} />
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 150" preserveAspectRatio="none">
            <circle cx="60" cy="80" r="70" fill="none" stroke={`${cyan}10`} strokeWidth="0.5" />
            <circle cx="340" cy="60" r="45" fill="none" stroke={`${cyan}08`} strokeWidth="0.5" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: cyan }}>— Ready to begin?</p>
              <h3 className="font-editorial text-white text-2xl mb-4">
                Take the first step <em className="italic" style={{ color: cyan }}>today.</em>
              </h3>
              <div className="flex items-center justify-center gap-2">
                <span className="px-5 py-2 rounded-full text-xs font-semibold" style={{ background: cyan, color: navy }}>
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

export default function HomepageDirectionsV2Page() {
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
            Homepage Exploration — Round 2
          </span>
          <h1 className="font-editorial text-4xl md:text-5xl mt-4 mb-4" style={{ color: navy }}>
            Classic Swap + Visual Depth
          </h1>
          <p className="text-sm max-w-xl mx-auto leading-relaxed text-gray-500">
            Same navy/cyan/cream palette — now with subtle background elements for added richness.
            Neural dots, gradient orbs, geometric accents, and layered textures.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          <motion.div className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Version1 />
            <SectionLabel number="1" title="Neural Network"
              subtitle="Animated neural dots in hero and CTA backgrounds. Subtle connected-mind pattern in manifesto section. Echoes the logo's network motif." />
          </motion.div>

          <motion.div className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <Version2 />
            <SectionLabel number="2" title="Gradient Orbs"
              subtitle="Soft glowing cyan/blue orbs behind sections create atmospheric depth. Left accent bar on manifesto. Conditions in a tinted panel." />
          </motion.div>

          <motion.div className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <Version3 />
            <SectionLabel number="3" title="Geometric Accents"
              subtitle="Subtle circles, triangles, and polygons echoing the logo's faceted design. Gradient line dividers between sections. Clean and structured." />
          </motion.div>

          <motion.div className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            <Version4 />
            <SectionLabel number="4" title="Layered Everything"
              subtitle="Combines neural dots, gradient orbs, geometric shapes, gradient dividers, and a top accent bar. The richest, most premium feel." />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

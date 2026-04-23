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
} from "lucide-react";

const navy = "#1B1F4B";
const blue = "#2D5DA1";
const cyan = "#4DC9F6";
const cream = "#F8F4EC";
const creamDeep = "#EADCC2";

function SectionLabel({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="bg-white px-6 py-5 border-t border-gray-100">
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">Version {number}</span>
      <h3 className="text-lg font-semibold text-gray-900 mt-1">{title}</h3>
      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{subtitle}</p>
    </div>
  );
}

function BrainWaveBg({ color = navy, opacity = 0.06 }: { color?: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="none" style={{ opacity }}>
      <path d="M0,100 Q20,60 40,100 Q60,140 80,100 Q100,60 120,100 Q140,140 160,100 Q180,60 200,100 Q220,140 240,100 Q260,60 280,100 Q300,140 320,100 Q340,60 360,100 Q380,140 400,100"
        fill="none" stroke={color} strokeWidth="1.5" />
      <path d="M0,120 Q25,90 50,120 Q75,150 100,120 Q125,90 150,120 Q175,150 200,120 Q225,90 250,120 Q275,150 300,120 Q325,90 350,120 Q375,150 400,120"
        fill="none" stroke={color} strokeWidth="0.8" />
    </svg>
  );
}

function NeuronBg({ color = navy, opacity = 0.07, side = "right" }: { color?: string; opacity?: number; side?: "left" | "right" }) {
  const x = side === "right" ? 300 : 100;
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="none" style={{ opacity }}>
      {/* Neuron cell body */}
      <circle cx={x} cy="150" r="25" fill="none" stroke={color} strokeWidth="1.2" />
      <circle cx={x} cy="150" r="12" fill="none" stroke={color} strokeWidth="0.6" />
      {/* Dendrites branching out */}
      <path d={`M${x-25},150 Q${x-60},120 ${x-90},90`} fill="none" stroke={color} strokeWidth="0.8" />
      <path d={`M${x-90},90 Q${x-100},70 ${x-120},60`} fill="none" stroke={color} strokeWidth="0.5" />
      <path d={`M${x-90},90 Q${x-95},85 ${x-110},95`} fill="none" stroke={color} strokeWidth="0.5" />
      <path d={`M${x-25},140 Q${x-50},110 ${x-80},105`} fill="none" stroke={color} strokeWidth="0.6" />
      <path d={`M${x-25},160 Q${x-55},180 ${x-85},200`} fill="none" stroke={color} strokeWidth="0.7" />
      <path d={`M${x-85},200 Q${x-95},215 ${x-115},220`} fill="none" stroke={color} strokeWidth="0.4" />
      <path d={`M${x-85},200 Q${x-90},210 ${x-100},205`} fill="none" stroke={color} strokeWidth="0.4" />
      {/* Axon going other direction */}
      <path d={`M${x+25},150 Q${x+60},150 ${x+80},140`} fill="none" stroke={color} strokeWidth="1" />
      <path d={`M${x+80},140 Q${x+90},135 ${x+95},130`} fill="none" stroke={color} strokeWidth="0.6" />
      <path d={`M${x+80},140 Q${x+90},145 ${x+100},148`} fill="none" stroke={color} strokeWidth="0.6" />
      {/* Synaptic dots */}
      <circle cx={x-120} cy="60" r="3" fill={color} opacity="0.4" />
      <circle cx={x-110} cy="95" r="2" fill={color} opacity="0.3" />
      <circle cx={x-115} cy="220" r="3" fill={color} opacity="0.4" />
      <circle cx={x-100} cy="205" r="2" fill={color} opacity="0.3" />
      <circle cx={x+95} cy="130" r="3" fill={color} opacity="0.4" />
      <circle cx={x+100} cy="148" r="2" fill={color} opacity="0.3" />
    </svg>
  );
}

function HeadSilhouetteBg({ color = navy, opacity = 0.05, side = "right" }: { color?: string; opacity?: number; side?: "left" | "right" }) {
  const flip = side === "left" ? "scale(-1,1) translate(-400,0)" : "";
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="none" style={{ opacity }}>
      <g transform={flip}>
        {/* Head profile outline */}
        <path d="M310,250 Q310,200 300,180 Q290,160 295,140 Q300,120 310,110 Q330,90 335,70 Q340,50 330,35 Q315,20 295,25 Q275,30 265,50 Q258,65 255,80 Q250,95 240,105 Q230,110 225,120 Q220,135 225,150 Q230,165 240,170 Q245,175 248,185 Q250,195 250,210 Q250,230 260,250"
          fill="none" stroke={color} strokeWidth="1.5" />
        {/* Neural connections inside head */}
        <circle cx="290" cy="80" r="8" fill="none" stroke={color} strokeWidth="0.6" />
        <circle cx="275" cy="95" r="5" fill="none" stroke={color} strokeWidth="0.5" />
        <circle cx="300" cy="105" r="6" fill="none" stroke={color} strokeWidth="0.5" />
        <line x1="290" y1="88" x2="275" y2="95" stroke={color} strokeWidth="0.4" />
        <line x1="290" y1="88" x2="300" y2="105" stroke={color} strokeWidth="0.4" />
        <line x1="275" y1="95" x2="300" y2="105" stroke={color} strokeWidth="0.4" />
        {/* Thought emanation dots */}
        <circle cx="320" cy="45" r="2" fill={color} opacity="0.5" />
        <circle cx="335" cy="30" r="3" fill={color} opacity="0.4" />
        <circle cx="345" cy="15" r="4" fill={color} opacity="0.3" />
      </g>
    </svg>
  );
}

function SynapseNetworkBg({ color = navy, opacity = 0.06 }: { color?: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="none" style={{ opacity }}>
      {/* Network of connected nodes */}
      {[
        { x: 60, y: 40, r: 6 }, { x: 120, y: 80, r: 8 }, { x: 200, y: 30, r: 5 },
        { x: 280, y: 70, r: 7 }, { x: 340, y: 40, r: 6 }, { x: 100, y: 150, r: 5 },
        { x: 180, y: 120, r: 9 }, { x: 260, y: 160, r: 6 }, { x: 350, y: 130, r: 5 },
        { x: 40, y: 110, r: 4 }, { x: 320, y: 110, r: 4 },
      ].map((n, i, arr) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r} fill="none" stroke={color} strokeWidth="0.8" />
          <circle cx={n.x} cy={n.y} r={n.r * 0.35} fill={color} opacity="0.3" />
          {i < arr.length - 1 && (
            <line x1={n.x} y1={n.y} x2={arr[(i + 2) % arr.length].x} y2={arr[(i + 2) % arr.length].y}
              stroke={color} strokeWidth="0.4" strokeDasharray="3 4" />
          )}
        </g>
      ))}
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════
   V1 — Brain Wave + Navy Band
   EEG brain wave patterns behind manifesto. Navy band break.
   ════════════════════════════════════════════════════════════════ */
function Version1() {
  return (
    <div style={{ background: cream }}>
      {/* Hero */}
      <div className="px-4 pt-4 pb-3">
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
        </div>
        <div className="grid grid-cols-4 gap-px rounded-xl overflow-hidden mt-3" style={{ background: `${navy}12` }}>
          {[
            { icon: Clock, value: "Within 1 week" },
            { icon: Video, value: "Across Michigan" },
            { icon: Shield, value: "Most plans" },
            { icon: Star, value: "5.0 stars" },
          ].map((item, i) => (
            <div key={i} className="p-3 flex items-center gap-2" style={{ background: cream }}>
              <item.icon className="h-3.5 w-3.5 shrink-0" style={{ color: blue }} />
              <p className="text-xs font-medium" style={{ color: navy }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ★ NAVY MANIFESTO + Brain Waves */}
      <div className="relative px-4 py-8 my-2 overflow-hidden" style={{ background: navy }}>
        <BrainWaveBg color={cyan} opacity={0.12} />
        <div className="relative max-w-lg">
          <div className="w-10 h-[2px] mb-4" style={{ background: cyan }} />
          <p className="font-editorial text-xl leading-[1.25] text-white">
            Mental health care, offered with{" "}
            <em className="italic" style={{ color: cyan }}>patience</em>. We treat
            ADHD, anxiety, depression, and bipolar disorder with personalized attention.
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/80 mt-4">
            Meet our providers <ArrowRight className="h-3 w-3" />
          </span>
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
            <div><p className="font-editorial text-lg">ADHD</p><p className="text-[10px] opacity-40">Testing & management</p></div>
          </div>
          <div className="col-span-3 rounded-xl p-2.5 flex flex-col justify-between" style={{ background: creamDeep }}>
            <p className="text-[9px] tracking-wider uppercase" style={{ color: blue }}>Mood</p>
            <p className="font-editorial text-sm" style={{ color: navy }}>Bipolar</p>
          </div>
          <div className="col-span-2 rounded-xl p-2 flex flex-col justify-between" style={{ background: `${blue}15` }}>
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
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-editorial text-white text-2xl mb-4">
                Take the first step <em className="italic" style={{ color: cyan }}>today.</em>
              </h3>
              <span className="px-5 py-2 rounded-full text-xs font-semibold" style={{ background: cyan, color: navy }}>Book an Appointment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   V2 — Neuron Branching
   Neuron/dendrite illustrations behind manifesto and conditions.
   Visible branching patterns that feel clinical/scientific.
   ════════════════════════════════════════════════════════════════ */
function Version2() {
  return (
    <div style={{ background: cream }}>
      {/* Hero */}
      <div className="px-4 pt-4 pb-3">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/7]">
            <Image src="/images/ai/hero-main.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${navy}CC, ${navy}33, transparent)` }} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="font-editorial text-white text-3xl leading-[0.95] max-w-md">
              A quieter way<br />
              <em className="italic" style={{ color: cyan }}>to feel like yourself</em>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-3">
          {[
            { icon: Clock, value: "Within 1 week" },
            { icon: Video, value: "Across Michigan" },
            { icon: Shield, value: "Most plans" },
            { icon: Star, value: "5.0 stars" },
          ].map((item, i) => (
            <div key={i} className="rounded-lg p-3 flex items-center gap-2"
              style={{ background: `${blue}08`, border: `1px solid ${blue}10` }}>
              <item.icon className="h-3.5 w-3.5 shrink-0" style={{ color: cyan }} />
              <p className="text-xs font-medium" style={{ color: navy }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ★ Manifesto with neuron bg */}
      <div className="relative mx-4 my-4 rounded-2xl px-5 py-6 overflow-hidden"
        style={{ background: `${blue}06`, border: `1px solid ${blue}10` }}>
        <NeuronBg color={blue} opacity={0.09} side="right" />
        <div className="relative">
          <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-2">— Our Practice</p>
          <p className="font-editorial text-xl leading-[1.25] max-w-[70%]" style={{ color: navy }}>
            Mental health care, offered with{" "}
            <em className="italic" style={{ color: blue }}>patience</em>. We treat
            ADHD, anxiety, depression, and bipolar disorder with personalized attention.
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-semibold mt-4" style={{ color: blue }}>
            Meet our providers <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>

      {/* ★ Conditions with neuron on other side */}
      <div className="relative px-4 py-4 overflow-hidden">
        <NeuronBg color={navy} opacity={0.05} side="left" />
        <div className="relative">
          <div className="mb-3">
            <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-1">— Conditions We Treat</p>
            <h3 className="font-editorial text-2xl leading-tight" style={{ color: navy }}>
              Specialized care for <em className="italic" style={{ color: blue }}>complex minds.</em>
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "Anxiety & Depression", tag: "Mood", bg: `${blue}0C` },
              { name: "ADHD", tag: "Focus", bg: navy },
              { name: "Bipolar Disorder", tag: "Mood", bg: `${cyan}0C` },
              { name: "PTSD", tag: "Trauma", bg: `${blue}08` },
            ].map((c) => (
              <div key={c.name} className="rounded-xl p-4 min-h-[80px] flex flex-col justify-between"
                style={{ background: c.bg, color: c.bg === navy ? cream : navy }}>
                <p className="text-[9px] tracking-wider uppercase font-medium"
                  style={{ color: c.bg === navy ? cyan : blue }}>{c.tag}</p>
                <p className="font-editorial text-sm">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 py-4 pb-4">
        <div className="rounded-2xl py-8 px-6 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${navy}, ${blue})` }}>
          <BrainWaveBg color={cyan} opacity={0.08} />
          <div className="relative">
            <h3 className="font-editorial text-white text-2xl mb-4">
              Take the first step <em className="italic" style={{ color: cyan }}>today.</em>
            </h3>
            <span className="inline-block px-6 py-2.5 rounded-full text-xs font-semibold" style={{ background: cyan, color: navy }}>
              Book an Appointment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   V3 — Head Silhouette + Cards
   Head profile with neural connections inside, used as a
   watermark behind card sections. Premium structured look.
   ════════════════════════════════════════════════════════════════ */
function Version3() {
  return (
    <div style={{ background: `${blue}05` }}>
      {/* Hero card */}
      <div className="px-4 pt-4 pb-3">
        <div className="rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: `${navy}10`, background: cream }}>
          <div className="relative aspect-[16/7]">
            <Image src="/images/ai/hero-main.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${navy}CC, ${navy}33, transparent)` }} />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="font-editorial text-white text-3xl leading-[0.95] max-w-md">
                A quieter way<br />
                <em className="italic" style={{ color: cyan }}>to feel like yourself</em>
              </h2>
            </div>
          </div>
          <div className="p-4 grid grid-cols-4 gap-3">
            {[
              { icon: Clock, value: "Within 1 week" },
              { icon: Video, value: "Across Michigan" },
              { icon: Shield, value: "Most plans" },
              { icon: Star, value: "5.0 stars" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="h-3.5 w-3.5 shrink-0" style={{ color: cyan }} />
                <p className="text-xs font-medium" style={{ color: navy }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ★ Manifesto card with head silhouette */}
      <div className="px-4 py-2">
        <div className="relative rounded-2xl border p-5 shadow-sm overflow-hidden" style={{ borderColor: `${navy}10`, background: cream }}>
          <HeadSilhouetteBg color={navy} opacity={0.06} side="right" />
          <div className="relative flex gap-4">
            <div className="w-1 rounded-full shrink-0" style={{ background: `linear-gradient(${cyan}, ${blue})` }} />
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-2">— Our Practice</p>
              <p className="font-editorial text-xl leading-[1.25] max-w-[75%]" style={{ color: navy }}>
                Mental health care, offered with{" "}
                <em className="italic" style={{ color: blue }}>patience</em>. We treat
                ADHD, anxiety, depression, and bipolar disorder with personalized attention.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold mt-3" style={{ color: navy }}>
                Meet our providers <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ★ Conditions card with head silhouette other side */}
      <div className="px-4 py-2">
        <div className="relative rounded-2xl border p-5 shadow-sm overflow-hidden" style={{ borderColor: `${navy}10`, background: cream }}>
          <HeadSilhouetteBg color={blue} opacity={0.04} side="left" />
          <div className="relative">
            <div className="mb-3">
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-1">— Conditions We Treat</p>
              <h3 className="font-editorial text-2xl leading-tight" style={{ color: navy }}>
                Specialized care for <em className="italic" style={{ color: blue }}>complex minds.</em>
              </h3>
            </div>
            <div className="grid grid-cols-12 gap-2 auto-rows-[90px]">
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
                <p className="font-editorial text-lg">ADHD</p>
              </div>
              <div className="col-span-3 rounded-xl p-2.5 flex flex-col justify-between" style={{ background: `${blue}10`, border: `1px solid ${blue}15` }}>
                <p className="text-[9px] tracking-wider uppercase" style={{ color: blue }}>Mood</p>
                <p className="font-editorial text-sm" style={{ color: navy }}>Bipolar</p>
              </div>
              <div className="col-span-2 rounded-xl p-2 flex flex-col justify-between" style={{ background: `${cyan}10`, border: `1px solid ${cyan}15` }}>
                <p className="text-[9px] tracking-wider uppercase" style={{ color: blue }}>Trauma</p>
                <p className="font-editorial text-sm" style={{ color: navy }}>PTSD</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 py-3 pb-4">
        <div className="relative rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: `${navy}10` }}>
          <div className="relative aspect-[16/6]">
            <Image src="/images/ai/cta-warm.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${navy}EE, ${blue}BB, ${navy}EE)` }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-editorial text-white text-2xl mb-4">
                Take the first step <em className="italic" style={{ color: cyan }}>today.</em>
              </h3>
              <span className="px-5 py-2 rounded-full text-xs font-semibold" style={{ background: cream, color: navy }}>Book an Appointment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   V4 — Synapse Network + Split Layout
   Full synapse network behind sections. Text-first hero.
   Navy testimonial band with brain waves. Everything combined.
   ════════════════════════════════════════════════════════════════ */
function Version4() {
  return (
    <div style={{ background: cream }}>
      <div className="h-1" style={{ background: `linear-gradient(90deg, ${navy}, ${blue}, ${cyan})` }} />

      {/* ★ Text-first hero */}
      <div className="relative px-4 pt-6 pb-4 overflow-hidden">
        <SynapseNetworkBg color={navy} opacity={0.05} />
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            {[navy, blue, cyan].map((c) => (
              <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
            ))}
            <span className="text-[9px] tracking-[0.2em] uppercase ml-1" style={{ color: blue }}>Farmington Hills, MI</span>
          </div>
          <h2 className="font-editorial text-4xl leading-[0.95] mb-3" style={{ color: navy }}>
            A quieter way<br />
            <em className="italic" style={{ color: blue }}>to feel like yourself</em>
          </h2>
          <p className="text-sm opacity-50 mb-5 max-w-sm">
            Personalized psychiatric care for ADHD, anxiety, depression, and bipolar disorder.
          </p>
          <div className="flex gap-2 mb-5">
            <span className="px-5 py-2.5 rounded-full text-xs font-semibold text-white" style={{ background: navy }}>Book a Consultation</span>
            <span className="px-5 py-2.5 rounded-full text-xs font-medium" style={{ color: navy, border: `1px solid ${navy}25` }}>(734) 331-6037</span>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[16/6]">
            <Image src="/images/ai/hero-main.jpg" alt="" fill className="object-cover" />
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, ${navy}, ${blue}, ${cyan})` }} />
          </div>
        </div>
      </div>

      {/* Conditions with synapse bg */}
      <div className="relative px-4 py-4 overflow-hidden">
        <NeuronBg color={blue} opacity={0.04} side="right" />
        <div className="relative">
          <div className="mb-3">
            <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-1">— Conditions</p>
            <h3 className="font-editorial text-2xl leading-tight" style={{ color: navy }}>
              Specialized care for <em className="italic" style={{ color: blue }}>complex minds.</em>
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { name: "Anxiety &\nDepression", tag: "Mood", i: 0 },
              { name: "ADHD", tag: "Focus", i: 1 },
              { name: "Bipolar\nDisorder", tag: "Mood", i: 2 },
              { name: "PTSD", tag: "Trauma", i: 3 },
            ].map((c) => (
              <div key={c.tag + c.i} className="rounded-xl p-3 min-h-[80px] flex flex-col justify-between"
                style={{ background: c.i === 1 ? navy : `${blue}08`, color: c.i === 1 ? cream : navy, border: c.i !== 1 ? `1px solid ${blue}12` : undefined }}>
                <p className="text-[8px] tracking-wider uppercase" style={{ color: c.i === 1 ? cyan : blue }}>{c.tag}</p>
                <p className="font-editorial text-sm whitespace-pre-line">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ★ NAVY TESTIMONIAL with brain waves */}
      <div className="relative py-6 px-4 my-2 overflow-hidden" style={{ background: navy }}>
        <BrainWaveBg color={cyan} opacity={0.1} />
        <div className="relative">
          <div className="flex gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5" style={{ fill: cyan, color: cyan }} />
            ))}
          </div>
          <p className="font-editorial text-white text-lg leading-[1.3] mb-4">
            &ldquo;The team at Jajo Psychiatry made me feel heard from day one. My treatment plan has been life-changing.&rdquo;
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <p className="text-xs text-white/50">Verified Patient</p>
            <span className="text-[10px] uppercase tracking-wider" style={{ color: cyan }}>Read reviews →</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-4 pt-2">
        <div className="relative rounded-2xl py-8 px-6 text-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${navy}, ${blue})` }}>
          <SynapseNetworkBg color={cyan} opacity={0.08} />
          <div className="relative">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: cyan }}>— Ready to begin?</p>
            <h3 className="font-editorial text-white text-2xl mb-4">
              Take the first step <em className="italic" style={{ color: cyan }}>today.</em>
            </h3>
            <span className="inline-block px-6 py-2.5 rounded-full text-xs font-semibold" style={{ background: cream, color: navy }}>Book an Appointment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageDirectionsV3Page() {
  return (
    <div className="min-h-screen" style={{ background: "#F2EDE5" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: blue }}>
            Homepage Exploration — Round 3
          </span>
          <h1 className="font-editorial text-4xl md:text-5xl mt-4 mb-4" style={{ color: navy }}>
            Classic Swap + Mental Health Motifs
          </h1>
          <p className="text-sm max-w-xl mx-auto leading-relaxed text-gray-500">
            Same navy/cyan/cream palette with psychiatry-themed background elements — brain waves,
            neuron dendrites, head silhouettes, and synapse networks.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          <motion.div className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Version1 />
            <SectionLabel number="1" title="Brain Wave + Navy Band"
              subtitle="EEG brain wave patterns behind the navy manifesto band. Clinical feel with clear visual break between sections." />
          </motion.div>

          <motion.div className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <Version2 />
            <SectionLabel number="2" title="Neuron Branching"
              subtitle="Neuron cell body with branching dendrites and synaptic dots behind manifesto and conditions. Blue-tinted panels. Scientific feel." />
          </motion.div>

          <motion.div className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <Version3 />
            <SectionLabel number="3" title="Head Silhouette + Cards"
              subtitle="Side-profile head outline with neural connections inside, used as watermarks behind bordered card sections. Premium structured look." />
          </motion.div>

          <motion.div className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            <Version4 />
            <SectionLabel number="4" title="Full Combo — Synapse + Waves + Split"
              subtitle="Text-first hero with synapse network bg, neuron branches on conditions, brain waves in navy testimonial band. Richest combination." />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

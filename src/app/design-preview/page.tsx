"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Phone,
  MapPin,
  Video,
  Clock,
  Shield,
  Brain,
  Heart,
  Star,
  ArrowRight,
  Sparkles,
  Check,
  Leaf,
  X,
} from "lucide-react";

/* ────────────────────────────────────────────
   DESIGN PREVIEW PAGE
   4 distinct homepage concepts in a 2×2 grid
   ──────────────────────────────────────────── */

type ConceptId = "sanctuary" | "clarity" | "warmth" | "prestige";

interface Concept {
  id: ConceptId;
  name: string;
  tagline: string;
  description: string;
}

const concepts: Concept[] = [
  {
    id: "sanctuary",
    name: "Sanctuary",
    tagline: "Editorial Calm",
    description:
      "Soft sage & cream palette, elegant serif typography, generous whitespace, organic flowing shapes. Spa-like luxury meets clinical trust.",
  },
  {
    id: "clarity",
    name: "Clarity",
    tagline: "Modern Precision",
    description:
      "Crisp teal & slate, geometric layouts, bold contemporary type, sharp lines and confident spacing. Premium medical modernism.",
  },
  {
    id: "warmth",
    name: "Warmth",
    tagline: "Inviting & Organic",
    description:
      "Terracotta, sand & forest green, rounded forms, approachable serif headings, natural textures. Boutique private practice feel.",
  },
  {
    id: "prestige",
    name: "Prestige",
    tagline: "Luxury & Authority",
    description:
      "Deep navy & champagne gold, classic editorial composition, rich contrast, timeless elegance. Concierge psychiatry aesthetic.",
  },
];

export default function DesignPreviewPage() {
  const [expanded, setExpanded] = useState<ConceptId | null>(null);

  return (
    <div className="min-h-screen bg-[#111] text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <p className="text-sm tracking-[0.3em] text-white/40 uppercase mb-3">
          Jajo Psychiatry
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Homepage Design Concepts
        </h1>
        <p className="text-white/50 max-w-xl mx-auto text-lg">
          Four distinct directions. Click any concept to see it expanded at full
          width, or scroll to compare them side by side.
        </p>
      </div>

      {/* 2×2 Grid */}
      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {concepts.map((concept) => (
            <motion.div
              key={concept.id}
              layoutId={concept.id}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setExpanded(concept.id)}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Concept label */}
              <div className="absolute top-5 left-5 z-20 flex items-center gap-3">
                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-white/10">
                  {concept.name}
                </span>
                <span className="text-white/50 text-xs hidden sm:inline">
                  {concept.tagline}
                </span>
              </div>

              {/* Click hint */}
              <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
                  Click to expand
                </span>
              </div>

              {/* Render the concept */}
              <div className="pointer-events-none">
                {concept.id === "sanctuary" && <SanctuaryConcept />}
                {concept.id === "clarity" && <ClarityConcept />}
                {concept.id === "warmth" && <WarmthConcept />}
                {concept.id === "prestige" && <PrestigeConcept />}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description cards below grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {concepts.map((c) => (
            <div
              key={c.id}
              className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-6 py-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold text-lg">{c.name}</h3>
                <span className="text-xs text-white/30 tracking-wider uppercase">
                  {c.tagline}
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded overlay */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
            onClick={() => setExpanded(null)}
          >
            <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-white font-bold text-lg">
                  {concepts.find((c) => c.id === expanded)?.name}
                </span>
                <span className="text-white/40 text-sm">
                  {concepts.find((c) => c.id === expanded)?.tagline}
                </span>
              </div>
              <button
                onClick={() => setExpanded(null)}
                className="text-white/60 hover:text-white transition-colors p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div
              className="max-w-[1400px] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {expanded === "sanctuary" && <SanctuaryFull />}
              {expanded === "clarity" && <ClarityFull />}
              {expanded === "warmth" && <WarmthFull />}
              {expanded === "prestige" && <PrestigeFull />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CONCEPT 1 — SANCTUARY
   Soft sage & cream, elegant serifs, organic shapes
   ═══════════════════════════════════════════════ */

function SanctuaryConcept() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #F6F4EF 0%, #EDE9E0 35%, #E8ECE5 100%)",
        minHeight: "520px",
      }}
    >
      {/* Organic blob shapes */}
      <div
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, #C5D4C0 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-[-60px] w-[300px] h-[300px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, #D4C9B8 0%, transparent 70%)",
        }}
      />
      {/* Fine grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      <div className="relative px-10 py-14">
        {/* Nav preview */}
        <div className="flex items-center justify-between mb-16">
          <span
            className="text-xl tracking-wide"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "#4A5548",
            }}
          >
            JAJO <span style={{ fontWeight: 300 }}>PSYCHIATRY</span>
          </span>
          <div className="flex items-center gap-6">
            {["About", "Services", "Conditions", "Contact"].map((item) => (
              <span
                key={item}
                className="text-xs tracking-wider"
                style={{ color: "#7A8177" }}
              >
                {item}
              </span>
            ))}
            <span
              className="text-xs px-5 py-2.5 rounded-full"
              style={{
                background: "#4A5548",
                color: "#F6F4EF",
                letterSpacing: "0.1em",
              }}
            >
              Book Visit
            </span>
          </div>
        </div>

        {/* Hero content */}
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase mb-6"
              style={{ color: "#8B9A86" }}
            >
              Psychiatric Care in Michigan
            </p>
            <h1
              className="text-[3.2rem] leading-[1.1] mb-6"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                color: "#2C3329",
                fontWeight: 400,
              }}
            >
              A gentle path
              <br />
              to{" "}
              <em style={{ color: "#5E7359", fontStyle: "italic" }}>
                mental wellness
              </em>
            </h1>
            <p
              className="text-base leading-relaxed mb-8 max-w-sm"
              style={{ color: "#7A8177" }}
            >
              Compassionate, personalized psychiatric care. We treat ADHD,
              anxiety, depression, and bipolar disorder with patience and
              precision.
            </p>

            <div className="flex items-center gap-4">
              <span
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm"
                style={{
                  background: "#4A5548",
                  color: "#F6F4EF",
                  letterSpacing: "0.05em",
                }}
              >
                <Calendar className="h-4 w-4" />
                Schedule a Visit
              </span>
              <span
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm border"
                style={{
                  borderColor: "#B5BDB1",
                  color: "#4A5548",
                }}
              >
                <Phone className="h-4 w-4" />
                (734) 331-6037
              </span>
            </div>
          </div>

          {/* Right side: stacked cards */}
          <div className="relative">
            <div
              className="rounded-[2rem] p-8 mb-4"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(197,212,192,0.4)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center"
                  style={{ background: "#E8ECE5" }}
                >
                  <Clock className="h-5 w-5" style={{ color: "#5E7359" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#2C3329" }}
                  >
                    Appointments within 1 week
                  </p>
                  <p className="text-xs" style={{ color: "#8B9A86" }}>
                    Same-day sometimes available
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center"
                  style={{ background: "#E8ECE5" }}
                >
                  <Video className="h-5 w-5" style={{ color: "#5E7359" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#2C3329" }}
                  >
                    Telehealth across Michigan
                  </p>
                  <p className="text-xs" style={{ color: "#8B9A86" }}>
                    Secure video visits from home
                  </p>
                </div>
              </div>
            </div>
            {/* Floating leaf accent */}
            <div
              className="absolute -top-3 -right-3 h-12 w-12 rounded-full flex items-center justify-center"
              style={{ background: "#C5D4C0" }}
            >
              <Leaf className="h-5 w-5" style={{ color: "#4A5548" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CONCEPT 2 — CLARITY
   Teal & slate, geometric, bold sans-serif
   ═══════════════════════════════════════════════ */

function ClarityConcept() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "#FAFBFC",
        minHeight: "520px",
      }}
    >
      {/* Geometric accent */}
      <div
        className="absolute top-0 right-0 w-[350px] h-[350px]"
        style={{
          background:
            "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)",
          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          opacity: 0.07,
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative px-10 py-14">
        {/* Nav preview */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2.5">
            <div
              className="h-8 w-8 rounded-lg flex items-center justify-center"
              style={{ background: "#0D9488" }}
            >
              <Brain className="h-4 w-4 text-white" />
            </div>
            <span
              className="text-lg font-bold tracking-tight"
              style={{ color: "#1E293B" }}
            >
              Jajo Psychiatry
            </span>
          </div>
          <div className="flex items-center gap-6">
            {["About", "Services", "Conditions", "Contact"].map((item) => (
              <span
                key={item}
                className="text-sm font-medium"
                style={{ color: "#64748B" }}
              >
                {item}
              </span>
            ))}
            <span
              className="text-sm font-semibold px-5 py-2.5 rounded-lg"
              style={{ background: "#0D9488", color: "#fff" }}
            >
              Get Started
            </span>
          </div>
        </div>

        {/* Hero content */}
        <div className="max-w-xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold mb-6"
            style={{ background: "#F0FDFA", color: "#0D9488" }}
          >
            <Sparkles className="h-3 w-3" />
            NOW ACCEPTING NEW PATIENTS
          </div>

          <h1
            className="text-[3.5rem] leading-[1.05] font-extrabold mb-5"
            style={{ color: "#0F172A", letterSpacing: "-0.03em" }}
          >
            Expert psychiatric
            <br />
            care, built around{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              you
            </span>
            .
          </h1>

          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "#64748B" }}
          >
            ADHD, anxiety, depression & bipolar disorder treated by board-certified
            psychiatrists. In-person or telehealth.
          </p>

          <div className="flex items-center gap-3 mb-10">
            <span
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold shadow-lg"
              style={{
                background: "#0D9488",
                color: "#fff",
                boxShadow: "0 8px 24px -4px rgba(13,148,136,0.35)",
              }}
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </span>
            <span
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold border-2"
              style={{ borderColor: "#E2E8F0", color: "#334155" }}
            >
              <Phone className="h-4 w-4" />
              (734) 331-6037
            </span>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8">
            {[
              { value: "< 1 wk", label: "Wait time" },
              { value: "5.0", label: "Patient rating" },
              { value: "10+", label: "Insurances" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-extrabold"
                  style={{ color: "#0F172A" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: "#94A3B8" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right floating card */}
        <div
          className="absolute right-10 top-[200px] w-[260px] rounded-xl p-5 shadow-xl"
          style={{
            background: "#fff",
            border: "1px solid #E2E8F0",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Star
              className="h-4 w-4"
              style={{ color: "#F59E0B", fill: "#F59E0B" }}
            />
            <Star
              className="h-4 w-4"
              style={{ color: "#F59E0B", fill: "#F59E0B" }}
            />
            <Star
              className="h-4 w-4"
              style={{ color: "#F59E0B", fill: "#F59E0B" }}
            />
            <Star
              className="h-4 w-4"
              style={{ color: "#F59E0B", fill: "#F59E0B" }}
            />
            <Star
              className="h-4 w-4"
              style={{ color: "#F59E0B", fill: "#F59E0B" }}
            />
          </div>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#475569" }}>
            &ldquo;My treatment plan has been life-changing. The team truly
            listens.&rdquo;
          </p>
          <div className="flex items-center gap-2">
            <div
              className="h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: "#F0FDFA", color: "#0D9488" }}
            >
              S
            </div>
            <span className="text-xs font-medium" style={{ color: "#94A3B8" }}>
              ADHD Patient
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CONCEPT 3 — WARMTH
   Terracotta, sand, forest green, organic rounded
   ═══════════════════════════════════════════════ */

function WarmthConcept() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(170deg, #FBF8F4 0%, #F5EDE3 50%, #FBF8F4 100%)",
        minHeight: "520px",
      }}
    >
      {/* Warm blob */}
      <div
        className="absolute top-[-80px] right-[-60px] w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, #E8C9B0 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-40px] left-[-40px] w-[250px] h-[250px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #C1D4B6 0%, transparent 70%)",
        }}
      />
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #8B6F4E 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative px-10 py-14">
        {/* Nav */}
        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6" style={{ color: "#C07D53" }} />
            <span
              className="text-lg"
              style={{
                fontFamily: "Georgia, serif",
                color: "#5C4332",
                fontWeight: 600,
              }}
            >
              Jajo Psychiatry
            </span>
          </div>
          <div className="flex items-center gap-6">
            {["About", "Services", "Conditions", "Contact"].map((item) => (
              <span
                key={item}
                className="text-sm"
                style={{ color: "#8B7B6B" }}
              >
                {item}
              </span>
            ))}
            <span
              className="text-sm font-semibold px-5 py-2.5 rounded-full"
              style={{ background: "#C07D53", color: "#FBF8F4" }}
            >
              Book Now
            </span>
          </div>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-5 gap-10 items-center">
          <div className="col-span-3">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{
                background: "#F0E8DC",
                color: "#8B6F4E",
                border: "1px solid #E0D3C1",
              }}
            >
              <MapPin className="h-3 w-3" />
              Farmington Hills, Michigan
            </div>

            <h1
              className="text-[3rem] leading-[1.12] mb-5"
              style={{
                fontFamily: "Georgia, serif",
                color: "#3D2E1F",
                fontWeight: 400,
              }}
            >
              Mental health care that
              <br />
              feels like{" "}
              <span
                style={{
                  color: "#C07D53",
                  fontStyle: "italic",
                  textDecorationLine: "underline",
                  textDecorationColor: "#E8C9B0",
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "2px",
                }}
              >
                coming home
              </span>
            </h1>

            <p
              className="text-base leading-relaxed mb-8 max-w-md"
              style={{ color: "#8B7B6B" }}
            >
              We create a safe, welcoming space for healing. Personalized
              treatment for ADHD, anxiety, depression, and bipolar disorder
              with care that meets you where you are.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <span
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold shadow-md"
                style={{
                  background: "#C07D53",
                  color: "#FBF8F4",
                  boxShadow: "0 6px 20px -4px rgba(192,125,83,0.3)",
                }}
              >
                <Calendar className="h-4 w-4" />
                Schedule a Visit
              </span>
              <span
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border"
                style={{ borderColor: "#D4C4B0", color: "#5C4332" }}
              >
                <Phone className="h-4 w-4" />
                Call Us
              </span>
            </div>

            {/* Trust chips */}
            <div className="flex items-center gap-3 flex-wrap">
              {[
                "Appointments in ~1 week",
                "Telehealth available",
                "Most insurance accepted",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: "#EDE5D8",
                    color: "#6B5D4E",
                  }}
                >
                  <Check className="h-3 w-3" style={{ color: "#7B9A6D" }} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: stacked rounded cards */}
          <div className="col-span-2 space-y-4">
            <div
              className="rounded-3xl p-6"
              style={{
                background: "#fff",
                border: "1px solid #E8DFD2",
                boxShadow: "0 4px 16px rgba(93,67,50,0.06)",
              }}
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5"
                    style={{ color: "#E8A845", fill: "#E8A845" }}
                  />
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "#6B5D4E" }}
              >
                &ldquo;I was able to get an appointment within a week. The
                telehealth option made it so convenient.&rdquo;
              </p>
              <p className="text-xs" style={{ color: "#B5A899" }}>
                R.K. &mdash; Anxiety Patient
              </p>
            </div>
            <div
              className="rounded-3xl p-5 flex items-center gap-4"
              style={{
                background: "#4A6741",
                boxShadow: "0 4px 16px rgba(74,103,65,0.15)",
              }}
            >
              <Shield className="h-8 w-8 text-white/80 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Insurance-Friendly
                </p>
                <p className="text-xs text-white/60">
                  BCBS, Aetna, Cigna, UHC, Medicare & more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CONCEPT 4 — PRESTIGE
   Deep navy & gold, classic editorial
   ═══════════════════════════════════════════════ */

function PrestigeConcept() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(175deg, #0B0F28 0%, #111838 50%, #0E1230 100%)",
        minHeight: "520px",
      }}
    >
      {/* Gold radial accent */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,112,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,112,0.25), transparent)",
        }}
      />
      {/* Fine diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D4AF70 0, #D4AF70 1px, transparent 1px, transparent 20px)",
        }}
      />

      <div className="relative px-10 py-14">
        {/* Nav */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <div
              className="h-[3px] w-8 rounded-full"
              style={{ background: "#D4AF70" }}
            />
            <span
              className="text-sm tracking-[0.35em] uppercase"
              style={{ color: "#D4AF70" }}
            >
              Jajo Psychiatry
            </span>
          </div>
          <div className="flex items-center gap-6">
            {["About", "Services", "Conditions", "Contact"].map((item) => (
              <span
                key={item}
                className="text-xs tracking-wider uppercase"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {item}
              </span>
            ))}
            <span
              className="text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm border"
              style={{ borderColor: "#D4AF70", color: "#D4AF70" }}
            >
              Appointments
            </span>
          </div>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="h-px w-16 mb-8"
              style={{ background: "#D4AF70" }}
            />
            <h1
              className="text-[3.4rem] leading-[1.08] mb-6"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                color: "#FFFFFF",
                fontWeight: 400,
              }}
            >
              Psychiatric care
              <br />
              of{" "}
              <em
                style={{
                  color: "#D4AF70",
                  fontStyle: "italic",
                }}
              >
                exceptional
              </em>
              <br />
              distinction
            </h1>
            <p
              className="text-base leading-relaxed mb-8 max-w-sm"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Board-certified psychiatrists delivering personalized treatment
              for ADHD, anxiety, depression, and bipolar disorder. Farmington
              Hills and telehealth statewide.
            </p>

            <div className="flex items-center gap-4">
              <span
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wider uppercase"
                style={{
                  background: "#D4AF70",
                  color: "#0B0F28",
                }}
              >
                <Calendar className="h-4 w-4" />
                Schedule
              </span>
              <span
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wider border"
                style={{
                  borderColor: "rgba(212,175,112,0.3)",
                  color: "#D4AF70",
                }}
              >
                <Phone className="h-4 w-4" />
                (734) 331-6037
              </span>
            </div>
          </div>

          {/* Right: editorial stat blocks */}
          <div className="space-y-6">
            {[
              {
                num: "< 7",
                unit: "days",
                label: "Average wait for new patients",
              },
              {
                num: "10+",
                unit: "plans",
                label: "Major insurance networks accepted",
              },
              {
                num: "5.0",
                unit: "stars",
                label: "Patient satisfaction rating",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 pb-5"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-4xl font-light"
                    style={{ color: "#D4AF70" }}
                  >
                    {stat.num}
                  </span>
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "rgba(212,175,112,0.5)" }}
                  >
                    {stat.unit}
                  </span>
                </div>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   FULL EXPANDED VERSIONS
   (shown when user clicks a concept)
   ═══════════════════════════════════════════════ */

function SanctuaryFull() {
  return (
    <div>
      <SanctuaryConcept />
      {/* Services Section */}
      <div style={{ background: "#F6F4EF" }} className="px-10 py-20">
        <p
          className="text-xs tracking-[0.35em] uppercase mb-4"
          style={{ color: "#8B9A86" }}
        >
          How We Help
        </p>
        <h2
          className="text-3xl mb-12"
          style={{
            fontFamily: "Georgia, serif",
            color: "#2C3329",
            fontWeight: 400,
          }}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: Brain, name: "Psychiatric Evaluations", desc: "Comprehensive assessment to understand your unique needs" },
            { icon: Heart, name: "Medication Management", desc: "Ongoing monitoring for effective, well-tolerated treatment" },
            { icon: Video, name: "Telepsychiatry", desc: "Convenient virtual care from anywhere in Michigan" },
            { icon: MapPin, name: "In-Person Visits", desc: "Face-to-face care at our Farmington Hills office" },
            { icon: Sparkles, name: "ADHD Testing", desc: "Evidence-based evaluations for accurate diagnosis" },
            { icon: Shield, name: "GeneSight Testing", desc: "Genetic insights for smarter prescribing decisions" },
          ].map((svc) => (
            <div
              key={svc.name}
              className="group rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(197,212,192,0.3)",
              }}
            >
              <div
                className="h-11 w-11 rounded-full flex items-center justify-center mb-4"
                style={{ background: "#E8ECE5" }}
              >
                <svc.icon className="h-5 w-5" style={{ color: "#5E7359" }} />
              </div>
              <h3
                className="text-base font-medium mb-1"
                style={{ color: "#2C3329" }}
              >
                {svc.name}
              </h3>
              <p className="text-sm" style={{ color: "#8B9A86" }}>
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div
        className="px-10 py-16 text-center"
        style={{ background: "#4A5548" }}
      >
        <h2
          className="text-3xl mb-3"
          style={{ fontFamily: "Georgia, serif", color: "#F6F4EF", fontWeight: 400 }}
        >
          Begin your journey to wellness
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(246,244,239,0.5)" }}>
          Schedule your first visit today. We typically see new patients within one week.
        </p>
        <span
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium"
          style={{ background: "#F6F4EF", color: "#4A5548" }}
        >
          <Calendar className="h-4 w-4" />
          Book an Appointment
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}

function ClarityFull() {
  return (
    <div>
      <ClarityConcept />
      {/* Services grid */}
      <div style={{ background: "#FAFBFC" }} className="px-10 py-20">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-6 rounded-full" style={{ background: "#0D9488" }} />
          <p className="text-xs font-bold tracking-wider uppercase" style={{ color: "#0D9488" }}>
            Services
          </p>
        </div>
        <h2 className="text-3xl font-extrabold mb-12" style={{ color: "#0F172A", letterSpacing: "-0.02em" }}>
          What we offer
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Brain, name: "Psychiatric Evaluations" },
            { icon: Heart, name: "Medication Management" },
            { icon: Video, name: "Telepsychiatry" },
            { icon: MapPin, name: "In-Person Psychiatry" },
            { icon: Sparkles, name: "ADHD Testing" },
            { icon: Shield, name: "GeneSight Testing" },
          ].map((svc) => (
            <div
              key={svc.name}
              className="flex items-center gap-4 p-5 rounded-xl border transition-all hover:shadow-md cursor-pointer"
              style={{ background: "#fff", borderColor: "#E2E8F0" }}
            >
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "#F0FDFA" }}
              >
                <svc.icon className="h-5 w-5" style={{ color: "#0D9488" }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: "#1E293B" }}>
                {svc.name}
              </span>
              <ArrowRight className="h-4 w-4 ml-auto" style={{ color: "#CBD5E1" }} />
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div className="px-10 py-16 text-center" style={{ background: "#0D9488" }}>
        <h2 className="text-3xl font-extrabold mb-3 text-white" style={{ letterSpacing: "-0.02em" }}>
          Ready to get started?
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
          New patients are typically seen within one week.
        </p>
        <span
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-bold shadow-lg"
          style={{ background: "#fff", color: "#0D9488" }}
        >
          <Calendar className="h-4 w-4" />
          Book Your Appointment
        </span>
      </div>
    </div>
  );
}

function WarmthFull() {
  return (
    <div>
      <WarmthConcept />
      {/* Services */}
      <div style={{ background: "#FBF8F4" }} className="px-10 py-20">
        <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#8B6F4E" }}>
          Our Services
        </p>
        <h2
          className="text-3xl mb-12"
          style={{ fontFamily: "Georgia, serif", color: "#3D2E1F", fontWeight: 400 }}
        >
          How we can help
        </h2>
        <div className="grid grid-cols-2 gap-5">
          {[
            { icon: Brain, name: "Psychiatric Evaluations", desc: "Comprehensive assessment of your mental health needs" },
            { icon: Heart, name: "Medication Management", desc: "Careful monitoring and adjustment of your treatment" },
            { icon: Video, name: "Telepsychiatry", desc: "Secure video visits from the comfort of home" },
            { icon: Sparkles, name: "ADHD Testing", desc: "Evidence-based screening and evaluation tools" },
          ].map((svc) => (
            <div
              key={svc.name}
              className="rounded-2xl p-6 flex items-start gap-4 transition-all hover:shadow-md cursor-pointer"
              style={{ background: "#fff", border: "1px solid #E8DFD2" }}
            >
              <div
                className="h-11 w-11 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "#F0E8DC" }}
              >
                <svc.icon className="h-5 w-5" style={{ color: "#C07D53" }} />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1" style={{ color: "#3D2E1F" }}>
                  {svc.name}
                </h3>
                <p className="text-sm" style={{ color: "#8B7B6B" }}>{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div className="px-10 py-16 text-center" style={{ background: "#C07D53" }}>
        <h2
          className="text-3xl mb-3"
          style={{ fontFamily: "Georgia, serif", color: "#FBF8F4", fontWeight: 400 }}
        >
          Your healing journey starts here
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(251,248,244,0.55)" }}>
          Call us or book online. New patients welcome.
        </p>
        <span
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold"
          style={{ background: "#FBF8F4", color: "#C07D53" }}
        >
          <Calendar className="h-4 w-4" />
          Book Your Visit
        </span>
      </div>
    </div>
  );
}

function PrestigeFull() {
  return (
    <div>
      <PrestigeConcept />
      {/* Services */}
      <div style={{ background: "#0E1230" }} className="px-10 py-20">
        <div className="h-px w-12 mb-6" style={{ background: "#D4AF70" }} />
        <h2
          className="text-3xl mb-12"
          style={{ fontFamily: "Georgia, serif", color: "#fff", fontWeight: 400 }}
        >
          Our Expertise
        </h2>
        <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {[
            { icon: Brain, name: "Psychiatric Evaluations" },
            { icon: Heart, name: "Medication Management" },
            { icon: Video, name: "Telepsychiatry" },
            { icon: MapPin, name: "In-Person Care" },
            { icon: Sparkles, name: "ADHD Testing" },
            { icon: Shield, name: "GeneSight Testing" },
          ].map((svc) => (
            <div
              key={svc.name}
              className="p-8 flex items-center gap-4 transition-all hover:bg-white/[0.03] cursor-pointer"
              style={{ background: "#0B0F28" }}
            >
              <svc.icon className="h-5 w-5 shrink-0" style={{ color: "#D4AF70" }} />
              <span className="text-sm tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>
                {svc.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div
        className="px-10 py-16 text-center"
        style={{
          background: "linear-gradient(135deg, #D4AF70 0%, #B8963F 100%)",
        }}
      >
        <h2
          className="text-3xl mb-3"
          style={{ fontFamily: "Georgia, serif", color: "#0B0F28", fontWeight: 400 }}
        >
          Experience Exceptional Care
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(11,15,40,0.5)" }}>
          Schedule your private consultation today.
        </p>
        <span
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wider uppercase"
          style={{ background: "#0B0F28", color: "#D4AF70" }}
        >
          <Calendar className="h-4 w-4" />
          Request Appointment
        </span>
      </div>
    </div>
  );
}

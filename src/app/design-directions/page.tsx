"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

function NeuralDots({ color = "rgba(77,201,246,0.3)", count = 24 }: { color?: string; count?: number }) {
  const dots = Array.from({ length: count }, (_, i) => ({
    cx: Math.random() * 100,
    cy: Math.random() * 100,
    r: Math.random() * 2 + 1,
    delay: Math.random() * 3,
  }));
  const lines = dots.slice(0, 8).map((d, i) => {
    const target = dots[(i + 3) % dots.length];
    return { x1: d.cx, y1: d.cy, x2: target.cx, y2: target.cy };
  });

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {lines.map((l, i) => (
        <line key={i} {...l} stroke={color} strokeWidth="0.15" opacity="0.4" />
      ))}
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r * 0.4} fill={color}>
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${2 + d.delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function DirectionCard({
  number,
  title,
  subtitle,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: parseInt(number) * 0.15 }}
    >
      <div className="relative">{children}</div>
      <div className="bg-white px-6 py-5 border-t border-gray-100">
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
          Direction {number}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 mt-1">{title}</h3>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{subtitle}</p>
      </div>
    </motion.div>
  );
}

function Direction1() {
  return (
    <div
      className="relative min-h-[420px] flex flex-col justify-end p-8 overflow-hidden"
      style={{ background: "#F8F4EC" }}
    >
      <NeuralDots color="rgba(45,93,161,0.2)" count={30} />

      <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[100px] opacity-20"
        style={{ background: "linear-gradient(135deg, #2D5DA1, #4DC9F6)" }} />

      <div className="absolute top-6 left-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full" style={{ background: "linear-gradient(135deg, #1B1F4B, #2D5DA1)" }} />
        <span className="text-sm font-semibold tracking-wide" style={{ color: "#1B1F4B" }}>
          JAJO <span style={{ color: "#4DC9F6" }}>PSYCHIATRY</span>
        </span>
      </div>

      <div className="relative z-10">
        <div className="w-12 h-[2px] mb-5" style={{ background: "#4DC9F6" }} />
        <h2
          className="font-editorial text-3xl leading-tight mb-3"
          style={{ color: "#1B1F4B" }}
        >
          Your mind deserves
          <br />
          <span style={{ color: "#2D5DA1" }}>expert attention.</span>
        </h2>
        <p className="text-sm max-w-xs leading-relaxed" style={{ color: "#4A5568" }}>
          Personalized psychiatric care designed around you — not a checklist.
        </p>
        <div className="flex gap-3 mt-6">
          <button
            className="px-6 py-2.5 rounded-full text-sm font-medium text-white transition-transform hover:scale-105"
            style={{ background: "#1B1F4B" }}
          >
            Book a Consultation
          </button>
          <button
            className="px-6 py-2.5 rounded-full text-sm font-medium border transition-colors hover:bg-[#1B1F4B]/5"
            style={{ color: "#1B1F4B", borderColor: "#1B1F4B33" }}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-[0.04]"
        style={{ fontFamily: "Playfair Display", fontSize: "180px", color: "#2D5DA1", lineHeight: 1 }}>
        J
      </div>
    </div>
  );
}

function Direction2() {
  return (
    <div
      className="relative min-h-[420px] flex flex-col justify-end p-8 overflow-hidden"
      style={{ background: "linear-gradient(165deg, #0F1535 0%, #1B1F4B 50%, #162848 100%)" }}
    >
      <NeuralDots color="rgba(77,201,246,0.35)" count={35} />

      <div className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(77,201,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(45,93,161,0.15) 0%, transparent 50%)",
        }}
      />

      <div className="absolute top-6 left-8 flex items-center gap-3 z-10">
        <div className="w-8 h-8 rounded-full border border-[#4DC9F6]/30 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full" style={{ background: "linear-gradient(135deg, #4DC9F6, #2D5DA1)" }} />
        </div>
        <span className="text-sm font-semibold tracking-wide text-white/90">
          JAJO <span style={{ color: "#4DC9F6" }}>PSYCHIATRY</span>
        </span>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-[2px]" style={{ background: "#4DC9F6" }} />
          <span className="text-xs tracking-[0.25em] uppercase" style={{ color: "#4DC9F6" }}>
            Farmington Hills, MI
          </span>
        </div>
        <h2 className="font-editorial text-3xl leading-tight mb-3 text-white">
          Where science meets
          <br />
          <span className="italic" style={{ color: "#4DC9F6" }}>compassion.</span>
        </h2>
        <p className="text-sm max-w-xs leading-relaxed text-white/60">
          Evidence-based treatment. Genuine understanding. Results you can feel.
        </p>
        <div className="flex gap-3 mt-6">
          <button
            className="px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-cyan-500/20"
            style={{ background: "#4DC9F6", color: "#0F1535" }}
          >
            Schedule Today
          </button>
          <button
            className="px-6 py-2.5 rounded-full text-sm font-medium border border-white/20 text-white/80 transition-colors hover:border-white/40 hover:text-white"
          >
            Our Approach
          </button>
        </div>
      </div>

      <div className="absolute top-12 right-8 w-32 h-32 rounded-full border border-[#4DC9F6]/10" />
      <div className="absolute top-20 right-16 w-16 h-16 rounded-full border border-[#4DC9F6]/15" />
    </div>
  );
}

function Direction3() {
  return (
    <div
      className="relative min-h-[420px] flex flex-col justify-end p-8 overflow-hidden"
      style={{ background: "#F5F0E8" }}
    >
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 400 420" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B1F4B" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#4DC9F6" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <polygon
              key={i}
              points={`${80 + i * 55},${20 + i * 30} ${120 + i * 50},${80 + i * 25} ${60 + i * 60},${100 + i * 35}`}
              fill="none"
              stroke="url(#g3)"
              strokeWidth="1"
            />
          ))}
          <circle cx="320" cy="80" r="80" fill="none" stroke="#2D5DA1" strokeWidth="0.5" opacity="0.1" />
          <circle cx="320" cy="80" r="50" fill="none" stroke="#4DC9F6" strokeWidth="0.5" opacity="0.15" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full"
        style={{ background: "linear-gradient(180deg, #1B1F4B 0%, #2D5DA1 100%)" }}>
        <NeuralDots color="rgba(77,201,246,0.4)" count={15} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl border border-[#4DC9F6]/30 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4DC9F6" strokeWidth="1.5">
                <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <p className="text-white/80 text-xs leading-relaxed">
              Farmington Hills
              <br />Michigan
            </p>
            <div className="w-8 h-[1px] mx-auto mt-3 bg-[#4DC9F6]/40" />
            <p className="text-[#4DC9F6] text-xs mt-3 font-medium">In-person & Telehealth</p>
          </div>
        </div>
      </div>

      <div className="absolute top-6 left-8 flex items-center gap-3 z-10">
        <span className="text-lg font-bold tracking-tight" style={{ color: "#1B1F4B" }}>
          jajo
        </span>
        <div className="w-[1px] h-4 bg-[#1B1F4B]/20" />
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#2D5DA1" }}>
          psychiatry
        </span>
      </div>

      <div className="relative z-10 max-w-[60%]">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
          style={{ background: "#2D5DA1", color: "#fff" }}>
          Now Accepting Patients
        </span>
        <h2 className="font-editorial text-3xl leading-tight mb-3" style={{ color: "#1B1F4B" }}>
          A clearer path
          <br />to mental
          <br />
          <span style={{ color: "#2D5DA1" }}>wellness.</span>
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
          ADHD · Anxiety · Depression · Bipolar
        </p>
        <button
          className="mt-6 px-6 py-2.5 rounded-full text-sm font-medium text-white transition-transform hover:scale-105"
          style={{ background: "linear-gradient(135deg, #1B1F4B, #2D5DA1)" }}
        >
          Get Started →
        </button>
      </div>
    </div>
  );
}

function Direction4() {
  return (
    <div
      className="relative min-h-[420px] flex flex-col justify-center p-8 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F8F4EC 0%, #EBF0F7 100%)" }}
    >
      <div className="absolute top-0 left-0 w-full h-1"
        style={{ background: "linear-gradient(90deg, #1B1F4B, #2D5DA1, #4DC9F6, #C09668)" }} />

      <NeuralDots color="rgba(27,31,75,0.08)" count={20} />

      <div className="absolute top-6 left-8 flex items-center gap-3 z-10">
        <div className="w-8 h-8 rounded-lg overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1B1F4B, #4DC9F6)" }} />
        <div>
          <span className="text-sm font-bold block leading-none" style={{ color: "#1B1F4B" }}>JAJO</span>
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "#2D5DA1" }}>psychiatry</span>
        </div>
      </div>

      <div className="absolute top-6 right-8 flex gap-4 text-xs z-10" style={{ color: "#1B1F4B" }}>
        <span className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity">Services</span>
        <span className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity">About</span>
        <span className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity">Contact</span>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto">
        <div className="flex justify-center gap-2 mb-6">
          {["#1B1F4B", "#2D5DA1", "#4DC9F6", "#C09668"].map((c) => (
            <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <h2 className="font-editorial text-4xl leading-tight mb-4" style={{ color: "#1B1F4B" }}>
          Care that connects
          <br />
          <span className="italic" style={{ color: "#2D5DA1" }}>mind</span>
          {" & "}
          <span className="italic" style={{ color: "#C09668" }}>life.</span>
        </h2>
        <p className="text-sm leading-relaxed mx-auto max-w-xs" style={{ color: "#4A5568" }}>
          Expert psychiatric care combining clinical precision with genuine warmth. Serving Farmington Hills and beyond.
        </p>
        <div className="flex justify-center gap-3 mt-6">
          <button
            className="px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all hover:shadow-lg"
            style={{ background: "#1B1F4B" }}
          >
            Book Appointment
          </button>
          <button
            className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
            style={{ color: "#2D5DA1", background: "#2D5DA1/10", border: "1px solid #2D5DA120" }}
          >
            (248) 507-5670
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 text-[10px] tracking-wide uppercase z-10"
        style={{ color: "#2D5DA1" }}>
        <span className="opacity-50">ADHD</span>
        <span className="opacity-30">·</span>
        <span className="opacity-50">Anxiety</span>
        <span className="opacity-30">·</span>
        <span className="opacity-50">Depression</span>
        <span className="opacity-30">·</span>
        <span className="opacity-50">Bipolar</span>
      </div>
    </div>
  );
}

export default function DesignDirectionsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#F2EDE5" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: "#2D5DA1" }}>
            Design Exploration
          </span>
          <h1 className="font-editorial text-4xl md:text-5xl mt-4 mb-4" style={{ color: "#1B1F4B" }}>
            Color Direction Options
          </h1>
          <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: "#6B7280" }}>
            Four approaches to integrating the Jajo Psychiatry brand colors — deep navy, blue, and cyan —
            while preserving the editorial quality of the current site.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <DirectionCard
            number="1"
            title="Warm Editorial + Logo Colors"
            subtitle="Keeps the warm cream base but swaps ink for deep navy. Cyan accent replaces gold. Subtle neural network overlay adds brand DNA. Most conservative — preserves current feel."
          >
            <Direction1 />
          </DirectionCard>

          <DirectionCard
            number="2"
            title="Midnight Clinical"
            subtitle="Deep navy hero with cyan accents. Premium and dramatic. Great for hero sections — pairs with cream for body content. Strongest brand statement."
          >
            <Direction2 />
          </DirectionCard>

          <DirectionCard
            number="3"
            title="Split Composition"
            subtitle="Warm cream main content with a navy side panel. Geometric shapes echo the logo. Modern asymmetric layout. Clean hierarchy that separates content from navigation."
          >
            <Direction3 />
          </DirectionCard>

          <DirectionCard
            number="4"
            title="Balanced Fusion"
            subtitle="Blends warm cream and cool blue-grey. Keeps gold alongside cyan. Centered editorial layout with gradient color bar. Most balanced blend of old and new."
          >
            <Direction4 />
          </DirectionCard>
        </div>

        <motion.div
          className="text-center mt-14 p-8 rounded-xl bg-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="font-editorial text-xl mb-2" style={{ color: "#1B1F4B" }}>
            Color Palette Reference
          </h3>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            {[
              { color: "#1B1F4B", label: "Deep Navy" },
              { color: "#2D5DA1", label: "Mid Blue" },
              { color: "#4DC9F6", label: "Cyan" },
              { color: "#F8F4EC", label: "Cream (current)" },
              { color: "#C09668", label: "Gold (current)" },
            ].map((swatch) => (
              <div key={swatch.color} className="text-center">
                <div
                  className="w-14 h-14 rounded-lg shadow-md border border-black/5 mx-auto"
                  style={{ background: swatch.color }}
                />
                <span className="text-[10px] mt-1.5 block text-gray-500">{swatch.label}</span>
                <span className="text-[10px] block text-gray-400 font-mono">{swatch.color}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

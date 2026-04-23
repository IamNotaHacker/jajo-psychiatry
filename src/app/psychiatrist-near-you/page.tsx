import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Video,
  Shield,
  Star,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { PRACTICE } from "@/lib/constants";

const navy = "#1B1F4B";
const blue = "#2D5DA1";
const cyan = "#4DC9F6";
const cream = "#F8F4EC";

export const metadata: Metadata = {
  title:
    "Psychiatrist Near You | In-Person & Telehealth Across Michigan",
  description:
    "Looking for a psychiatrist near you? Jajo Psychiatry offers in-person care in Farmington Hills, MI and telepsychiatry anywhere in Michigan. ADHD, anxiety, depression, and bipolar treatment. New patients typically seen within one week.",
  keywords: [
    "psychiatrist near me",
    "psychiatrist near you",
    "Michigan psychiatrist",
    "Farmington Hills psychiatrist",
    "telepsychiatry Michigan",
    "ADHD psychiatrist near me",
    "anxiety psychiatrist near me",
    "depression psychiatrist Michigan",
    "medication management",
    "psychiatric evaluation",
  ],
  alternates: {
    canonical: "https://jajopsychiatry.com/psychiatrist-near-you",
  },
  openGraph: {
    title: "Psychiatrist Near You | Jajo Psychiatry",
    description:
      "Compassionate outpatient psychiatric care in Farmington Hills, MI and across Michigan via telehealth. Fast access, personalized plans.",
    url: "https://jajopsychiatry.com/psychiatrist-near-you",
    type: "website",
  },
};

/* ───────── Decorative SVG ornaments ───────── */
function BrainWaves({ color = cyan, opacity = 0.1 }: { color?: string; opacity?: number }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 200"
      preserveAspectRatio="none"
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d="M0,100 Q30,50 60,100 Q90,150 120,100 Q150,50 180,100 Q210,150 240,100 Q270,50 300,100 Q330,150 360,100 Q390,50 420,100 Q450,150 480,100 Q510,50 540,100 Q570,150 600,100 Q630,50 660,100 Q690,150 720,100 Q750,50 780,100 Q800,120 800,100"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
      />
      <path
        d="M0,130 Q35,90 70,130 Q105,170 140,130 Q175,90 210,130 Q245,170 280,130 Q315,90 350,130 Q385,170 420,130 Q455,90 490,130 Q525,170 560,130 Q595,90 630,130 Q665,170 700,130 Q735,90 770,130 Q800,155 800,130"
        fill="none"
        stroke={color}
        strokeWidth="0.7"
      />
    </svg>
  );
}

function CompassRose({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.3" />
      <path d="M100 20 L104 100 L100 180 L96 100 Z" fill="currentColor" opacity="0.5" />
      <path d="M20 100 L100 96 L180 100 L100 104 Z" fill="currentColor" opacity="0.35" />
      <path d="M45 45 L102 98 L155 155 L98 102 Z" fill="currentColor" opacity="0.2" />
      <path d="M155 45 L102 98 L45 155 L98 102 Z" fill="currentColor" opacity="0.2" />
      <circle cx="100" cy="100" r="3" fill="currentColor" />
    </svg>
  );
}

/* ───────── Data ───────── */
const serviceAreas = [
  { name: "Farmington Hills", distance: "In-office", primary: true },
  { name: "Farmington", distance: "5 min" },
  { name: "West Bloomfield", distance: "10 min" },
  { name: "Novi", distance: "12 min" },
  { name: "Southfield", distance: "12 min" },
  { name: "Livonia", distance: "15 min" },
  { name: "Bloomfield Hills", distance: "15 min" },
  { name: "Birmingham", distance: "18 min" },
  { name: "Northville", distance: "18 min" },
  { name: "Plymouth", distance: "20 min" },
  { name: "Troy", distance: "22 min" },
  { name: "Royal Oak", distance: "22 min" },
  { name: "Rochester Hills", distance: "25 min" },
  { name: "Canton", distance: "25 min" },
];

const differentiators = [
  {
    label: "Fast Access",
    title: "Minimal wait times",
    body: "New patients are often seen within a week. Same-day and next-day openings surface regularly — call to check the schedule.",
  },
  {
    label: "Personalized Care",
    title: "Built around your story",
    body: "No rushed visits, no templated plans. Your provider listens closely and tailors treatment to your symptoms, lifestyle, and goals.",
  },
  {
    label: "Experienced Team",
    title: "Two decades of practice",
    body: "Led by Dr. Raad Jajo, our team brings over twenty years of psychiatric experience — steady hands, careful prescribing, continuity of care.",
  },
];

const services = [
  {
    slug: "psychiatric-evaluations",
    name: "Psychiatric Evaluations",
    summary:
      "A thorough first visit to understand your history, current symptoms, and the outcomes you want from treatment.",
  },
  {
    slug: "medication-management",
    name: "Medication Management",
    summary:
      "Personalized prescribing with careful monitoring and adjustments — the goal is what works, with fewer side effects.",
  },
  {
    slug: "telepsychiatry",
    name: "Telepsychiatry",
    summary:
      "Secure virtual visits from home, work, or anywhere in Michigan. Same quality of care, zero commute.",
  },
  {
    slug: "adhd-testing",
    name: "ADHD Testing & Evaluations",
    summary:
      "Evidence-based screening with validated clinical tools — for clarity on diagnosis and direction on treatment.",
  },
  {
    slug: "genesight-testing",
    name: "GeneSight Testing",
    summary:
      "Pharmacogenomic testing that informs medication decisions based on how your body actually metabolizes them.",
  },
  {
    slug: "in-person-psychiatry",
    name: "In-Person Psychiatry",
    summary:
      "Unhurried, face-to-face visits at our Farmington Hills office — for patients who prefer the room to the screen.",
  },
];

const conditionsCared = [
  { slug: "anxiety", label: "Anxiety" },
  { slug: "depression", label: "Depression" },
  { slug: "adhd", label: "ADHD" },
  { slug: "bipolar-disorder", label: "Bipolar Disorder" },
  { slug: "ptsd", label: "PTSD" },
  { slug: "schizophrenia", label: "Schizophrenia" },
];

const insurers = [
  "Blue Cross Blue Shield",
  "Aetna",
  "Cigna",
  "United Healthcare",
  "Humana",
  "HAP",
  "Meridian",
  "Medicare",
  "Medicaid",
  "Priority Health",
];

const faqs = [
  {
    question: "How do I find a good psychiatrist near me?",
    answer:
      "Start with credentials, availability, and fit. Look for a board-certified psychiatrist who treats your specific concerns, verify they accept your insurance, and check review sources like Psychology Today or Google. Jajo Psychiatry serves patients across Michigan from our Farmington Hills office, with most new patients seen within one week.",
  },
  {
    question: "Do you accept new patients in my area?",
    answer:
      "Yes. We provide in-person psychiatric care at our office at 31393 West 13 Mile Road, Suite 105, Farmington Hills, MI 48334, and telepsychiatry for anyone located in Michigan — including Farmington, West Bloomfield, Novi, Livonia, Southfield, Birmingham, Bloomfield Hills, Troy, Plymouth, Northville, Rochester Hills, Royal Oak, Canton, and surrounding communities.",
  },
  {
    question: "How quickly can I be seen?",
    answer:
      "Most new patients are scheduled within one week of their first call. Same-day and next-day appointments are sometimes available depending on provider openings. Call (734) 331-6037 to check the current schedule.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major insurance plans — including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Humana, HAP, Meridian, Medicare, Medicaid, and Priority Health. When you schedule, we'll verify your benefits before your first visit.",
  },
  {
    question: "Can I see a psychiatrist online instead of driving to the office?",
    answer:
      "Yes. Telepsychiatry is available for any patient located in Michigan. Visits happen through a secure video platform and follow the same clinical process as in-person care — initial evaluation, diagnosis, prescribing, and ongoing management.",
  },
  {
    question: "Do I need a referral from my primary care doctor?",
    answer:
      "Most insurance plans do not require a referral to see a psychiatrist. Some HMO plans may. We'll confirm any referral requirements when you schedule your first visit.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      "Our focus is adult psychiatric care for ADHD, anxiety, depression, bipolar disorder, PTSD, and schizophrenia. We provide psychiatric evaluations, medication management, ADHD testing, GeneSight pharmacogenomic testing, and ongoing follow-up care.",
  },
];

/* ───────── Page ───────── */
export default function PsychiatristNearYouPage() {
  return (
    <div style={{ background: cream, color: navy }}>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 pb-12 sm:pb-16">
        <div className="max-w-[1400px] mx-auto">
          <Breadcrumbs
            items={[{ name: "Psychiatrist Near You", href: "/psychiatrist-near-you" }]}
          />

          {/* ───── Mobile / tablet hero (editorial stacked) ───── */}
          <div className="lg:hidden">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: cyan }} />
                <span
                  className="text-[10px] sm:text-xs tracking-[0.3em] uppercase"
                  style={{ color: blue }}
                >
                  Psychiatrist Near You · Michigan
                </span>
              </div>
              <h1
                className="font-editorial text-[2.5rem] sm:text-[3.75rem] leading-[1] tracking-tight"
                style={{ color: navy }}
              >
                The clarity
                <br />
                <em className="italic" style={{ color: blue }}>
                  you&apos;ve been looking for.
                </em>
              </h1>
            </div>

            {/* Compact image banner */}
            <div className="relative rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden aspect-[3/2] sm:aspect-[16/9]">
              <Image
                src="/images/ai/hero-new.jpg"
                alt="Jajo Psychiatry office interior in Farmington Hills, MI"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${navy}40, transparent 55%, ${navy}20)`,
                }}
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm"
                style={{ background: `${navy}B3` }}
              >
                <MapPin className="h-3 w-3" style={{ color: cyan }} />
                <span className="text-[10px] tracking-[0.2em] uppercase text-white">
                  Farmington Hills, MI
                </span>
              </div>
            </div>

            <div className="mt-6">
              <p
                className="text-base sm:text-lg leading-relaxed mb-6 max-w-xl"
                style={{ color: `${navy}B3` }}
              >
                Thoughtful outpatient psychiatric care in Farmington Hills —
                and across Michigan by telehealth. New patients are typically
                seen within one week.
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
            </div>
          </div>

          {/* ───── Desktop hero (overlay) ───── */}
          <div className="hidden lg:block relative rounded-[2rem] overflow-hidden">
            <div className="relative aspect-[21/9]">
              <Image
                src="/images/ai/hero-new.jpg"
                alt="Jajo Psychiatry office interior in Farmington Hills, MI"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1400px) 100vw, 1400px"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${navy}E6, ${navy}60, ${navy}20)`,
                }}
              />
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{
                  background: `linear-gradient(135deg, ${navy}40, ${blue}20, transparent)`,
                }}
              />
            </div>

            <div
              className="absolute top-10 right-10 w-56 h-56"
              style={{ color: cyan, opacity: 0.35 }}
            >
              <CompassRose className="w-full h-full" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-14">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-[2px]" style={{ background: cyan }} />
                <span
                  className="text-xs tracking-[0.3em] uppercase"
                  style={{ color: cyan }}
                >
                  A Psychiatrist Near You — Michigan
                </span>
              </div>
              <h1 className="font-editorial text-white text-[6rem] leading-[0.95] max-w-5xl">
                The clarity
                <br />
                <em className="italic" style={{ color: cyan }}>
                  you&apos;ve been looking for.
                </em>
              </h1>
              <p className="mt-6 text-white/70 text-lg max-w-2xl leading-relaxed">
                Thoughtful outpatient psychiatric care in Farmington Hills —
                and across Michigan by telehealth. New patients are typically
                seen within one week.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href={PRACTICE.bookingUrl}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:scale-[1.02] transition-transform"
                  style={{ background: cream, color: navy }}
                >
                  Schedule a Visit
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${PRACTICE.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {PRACTICE.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Meta bar */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden mt-6"
            style={{ background: `${navy}12` }}
          >
            {[
              { icon: Clock, label: "First Visit", value: "Within 1 week" },
              { icon: Video, label: "Telehealth", value: "Statewide in MI" },
              { icon: MapPin, label: "In-Person", value: "Farmington Hills" },
              { icon: Shield, label: "Insurance", value: "Most plans welcome" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 lg:p-6 flex items-center gap-4"
                style={{ background: cream }}
              >
                <div
                  className="h-11 w-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ border: `1px solid ${navy}15` }}
                >
                  <item.icon className="h-4 w-4" style={{ color: blue }} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider opacity-40 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: navy }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ INTRO / MANIFESTO ═══════════════════ */}
      <section className="relative px-6 lg:px-10 py-14 lg:py-28 overflow-hidden">
        <BrainWaves color={navy} opacity={0.04} />

        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: `${navy}80` }}
              >
                — Compassionate Outpatient Care
              </p>
              <div className="w-12 h-[2px] mb-6" style={{ background: `${cyan}90` }} />
              <p
                className="font-editorial italic text-lg leading-snug max-w-[16rem]"
                style={{ color: `${blue}88` }}
              >
                &ldquo;Stop guessing. Start improving.&rdquo;
              </p>
            </div>
            <div className="lg:col-span-8">
              <p
                className="font-editorial text-3xl lg:text-[2.75rem] leading-[1.2] mb-8"
                style={{ color: navy }}
              >
                Psychiatric care that looks at the{" "}
                <em className="italic" style={{ color: blue }}>
                  whole picture
                </em>
                . We build individualized plans around your symptoms, your
                lifestyle, and the outcomes you actually want — so you can
                manage your condition and move forward with confidence.
              </p>
              <p
                className="text-base lg:text-lg leading-relaxed max-w-3xl"
                style={{ color: `${navy}90` }}
              >
                If you&apos;ve been searching for a psychiatrist near you in
                the Detroit metro area, Jajo Psychiatry offers experienced
                outpatient care for anxiety, depression, bipolar disorder,
                ADHD, PTSD, and schizophrenia — delivered in-person in
                Farmington Hills or via secure telepsychiatry anywhere in
                Michigan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICE AREA MAP ═══════════════════ */}
      <section className="relative px-6 lg:px-10 py-14 lg:py-20 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left — header + address card */}
            <div className="lg:col-span-5">
              <div className="w-10 h-[2px] mb-4" style={{ background: cyan }} />
              <p
                className="text-xs tracking-[0.3em] uppercase mb-3"
                style={{ color: `${navy}60` }}
              >
                — Where We Serve
              </p>
              <h2
                className="font-editorial text-4xl lg:text-5xl leading-[1.05] mb-6"
                style={{ color: navy }}
              >
                Farmington Hills —<br />
                <em className="italic" style={{ color: blue }}>
                  and across Michigan.
                </em>
              </h2>
              <p
                className="text-base leading-relaxed mb-8 max-w-md"
                style={{ color: `${navy}70` }}
              >
                Our office is easy to reach from anywhere in Oakland, Wayne,
                and Macomb counties. For patients outside the Detroit metro,
                telepsychiatry brings the same care to wherever you are in
                the state.
              </p>

              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${navy}15` }}
              >
                <div
                  className="relative aspect-[5/3]"
                  style={{ background: navy }}
                >
                  <Image
                    src="/images/ai/office-new.jpg"
                    alt="Jajo Psychiatry office in Farmington Hills, Michigan"
                    fill
                    className="object-cover opacity-85"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${navy}DD, transparent 60%)`,
                    }}
                  />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-4 w-4" style={{ color: cyan }} />
                      <p
                        className="text-[11px] tracking-[0.2em] uppercase"
                        style={{ color: cyan }}
                      >
                        The Office
                      </p>
                    </div>
                    <p className="font-editorial text-lg leading-snug">
                      31393 West 13 Mile Road, Suite 105
                      <br />
                      Farmington Hills, MI 48334
                    </p>
                  </div>
                </div>
                <div
                  className="p-5 flex items-center justify-between gap-4"
                  style={{ background: cream }}
                >
                  <div>
                    <p
                      className="text-[11px] tracking-[0.2em] uppercase mb-0.5"
                      style={{ color: `${navy}50` }}
                    >
                      Office Hours
                    </p>
                    <p className="text-sm" style={{ color: navy }}>
                      Mon–Fri · 9:00 AM – 5:00 PM
                    </p>
                  </div>
                  <a
                    href={`tel:${PRACTICE.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
                    style={{ color: blue }}
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                </div>
              </div>
            </div>

            {/* Right — city grid */}
            <div className="lg:col-span-7">
              <p
                className="text-[11px] tracking-[0.25em] uppercase mb-5"
                style={{ color: `${navy}50` }}
              >
                Proudly serving patients from
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: `${navy}12` }}>
                {serviceAreas.map((area) => (
                  <div
                    key={area.name}
                    className="p-5 flex items-start gap-3 group"
                    style={{
                      background: area.primary ? navy : cream,
                      color: area.primary ? cream : navy,
                    }}
                  >
                    <MapPin
                      className="h-4 w-4 mt-0.5 shrink-0"
                      style={{ color: area.primary ? cyan : blue }}
                    />
                    <div className="min-w-0">
                      <p
                        className="font-editorial text-lg leading-tight"
                        style={{ color: area.primary ? "white" : navy }}
                      >
                        {area.name}
                      </p>
                      <p
                        className="text-[11px] tracking-wider uppercase mt-0.5"
                        style={{
                          color: area.primary ? `${cyan}CC` : `${navy}50`,
                        }}
                      >
                        {area.distance}
                      </p>
                    </div>
                  </div>
                ))}
                <div
                  className="p-5 flex items-center gap-3"
                  style={{ background: `${cyan}10` }}
                >
                  <Video className="h-4 w-4 shrink-0" style={{ color: blue }} />
                  <div>
                    <p
                      className="font-editorial text-lg leading-tight"
                      style={{ color: navy }}
                    >
                      Anywhere in MI
                    </p>
                    <p
                      className="text-[11px] tracking-wider uppercase mt-0.5"
                      style={{ color: `${blue}AA` }}
                    >
                      Via telepsychiatry
                    </p>
                  </div>
                </div>
              </div>

              <p
                className="mt-5 text-sm leading-relaxed"
                style={{ color: `${navy}65` }}
              >
                Don&apos;t see your city? We see patients from more than a
                dozen nearby communities — and telepsychiatry is available
                statewide. Call us to confirm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY JAJO (3 PILLARS) ═══════════════════ */}
      <section className="relative px-6 lg:px-10 py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 max-w-3xl">
            <div className="w-10 h-[2px] mb-4" style={{ background: cyan }} />
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: `${navy}60` }}
            >
              — Experienced Care You Can Trust
            </p>
            <h2
              className="font-editorial text-4xl lg:text-5xl leading-[1.05]"
              style={{ color: navy }}
            >
              Treatment built around{" "}
              <em className="italic" style={{ color: blue }}>
                your symptoms, lifestyle, and goals.
              </em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {differentiators.map((d, i) => (
              <div
                key={d.title}
                className="relative rounded-2xl p-8 flex flex-col gap-4 group"
                style={{
                  background: i === 1 ? navy : cream,
                  color: i === 1 ? cream : navy,
                  border: i === 1 ? "none" : `1px solid ${navy}18`,
                }}
              >
                <div className="flex items-center justify-between">
                  <p
                    className="text-[11px] tracking-[0.25em] uppercase"
                    style={{ color: i === 1 ? cyan : blue }}
                  >
                    {String(i + 1).padStart(2, "0")} · {d.label}
                  </p>
                  <Sparkles
                    className="h-4 w-4"
                    style={{ color: i === 1 ? cyan : `${blue}70` }}
                  />
                </div>
                <h3
                  className="font-editorial text-2xl lg:text-[1.75rem] leading-tight"
                  style={{ color: i === 1 ? "white" : navy }}
                >
                  {d.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: i === 1 ? "rgba(255,255,255,0.65)" : `${navy}70`,
                  }}
                >
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES LIST ═══════════════════ */}
      <section className="relative px-6 lg:px-10 py-16 lg:py-20 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="hidden lg:block lg:col-span-5 lg:order-2">
              <div className="lg:sticky lg:top-28">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/images/ai/window-new.jpg"
                    alt="Calm psychiatric care environment"
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${navy}88, transparent 55%)`,
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p
                      className="text-[11px] tracking-wider uppercase mb-1"
                      style={{ color: cyan }}
                    >
                      Comprehensive Psychiatric Services
                    </p>
                    <p className="font-editorial text-white text-xl leading-tight">
                      A full continuum of care — from evaluation through
                      ongoing management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-1">
              <div className="w-10 h-[2px] mb-4" style={{ background: cyan }} />
              <p
                className="text-xs tracking-[0.3em] uppercase mb-3"
                style={{ color: `${navy}60` }}
              >
                — What We Offer
              </p>
              <h2
                className="font-editorial text-4xl lg:text-5xl leading-[1.05] mb-10"
                style={{ color: navy }}
              >
                Mental health services,<br />
                <em className="italic" style={{ color: blue }}>
                  tailored to you.
                </em>
              </h2>

              <div
                className="space-y-px rounded-2xl overflow-hidden"
                style={{ background: `${navy}12` }}
              >
                {services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="py-6 px-5 flex items-start gap-5 group hover:pl-7 transition-all"
                    style={{ background: cream }}
                  >
                    <div className="flex-1">
                      <h3
                        className="font-editorial text-xl sm:text-2xl mb-1"
                        style={{ color: navy }}
                      >
                        {svc.name}
                      </h3>
                      <p
                        className="text-sm leading-relaxed max-w-2xl"
                        style={{ color: `${navy}65` }}
                      >
                        {svc.summary}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 opacity-40 mt-1 shrink-0 group-hover:opacity-100 group-hover:rotate-45 transition-all"
                      style={{ color: navy }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONDITIONS STRIP ═══════════════════ */}
      <section className="relative px-6 lg:px-10 py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <div className="w-10 h-[2px] mb-4" style={{ background: cyan }} />
              <p
                className="text-xs tracking-[0.3em] uppercase mb-3"
                style={{ color: `${navy}60` }}
              >
                — What We Treat
              </p>
              <h2
                className="font-editorial text-4xl lg:text-5xl leading-[1.05] max-w-2xl"
                style={{ color: navy }}
              >
                You don&apos;t have to<br />
                <em className="italic" style={{ color: blue }}>
                  do this alone.
                </em>
              </h2>
            </div>
            <Link
              href="/conditions"
              className="hidden lg:inline-flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
              style={{ color: navy }}
            >
              All conditions
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {conditionsCared.map((c, i) => (
              <Link
                key={c.slug}
                href={`/conditions/${c.slug}`}
                className="rounded-2xl p-5 lg:p-6 aspect-square lg:aspect-[4/5] flex flex-col justify-between gap-10 group transition-colors"
                style={{
                  background: i % 2 === 0 ? `${blue}10` : cream,
                  border: `1px solid ${navy}12`,
                }}
              >
                <p
                  className="text-[11px] tracking-[0.2em] uppercase"
                  style={{ color: `${blue}AA` }}
                >
                  0{i + 1}
                </p>
                <div>
                  <h3
                    className="font-editorial text-xl lg:text-2xl leading-tight mb-2"
                    style={{ color: navy }}
                  >
                    {c.label}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] tracking-wider uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIAL ═══════════════════ */}
      <section className="relative px-6 lg:px-10 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="hidden md:block lg:col-span-5 relative rounded-2xl overflow-hidden md:aspect-[16/9] lg:aspect-square">
              <Image
                src="/images/ai/nature-new.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${navy}30, transparent)`,
                }}
              />
            </div>
            <div
              className="lg:col-span-7 rounded-2xl p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden"
              style={{ background: navy }}
            >
              <BrainWaves color={cyan} opacity={0.06} />
              <div className="relative">
                <p
                  className="text-[11px] tracking-[0.3em] uppercase mb-6"
                  style={{ color: cyan }}
                >
                  — Real Stories · Real Progress
                </p>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      style={{ fill: cyan, color: cyan }}
                    />
                  ))}
                </div>
                <p className="font-editorial text-2xl lg:text-[2rem] leading-[1.3] text-white mb-8">
                  &ldquo;I&apos;ve been with the Jajo family for over ten
                  years and have never had an issue that wasn&apos;t
                  immediately taken care of. They treat you like family.&rdquo;
                </p>
              </div>
              <div className="relative flex items-center justify-between pt-8 border-t border-white/10">
                <p className="font-medium text-white">Long-time Patient</p>
                <Link
                  href={PRACTICE.social.psychologyToday}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-wider uppercase hover:text-white transition-colors"
                  style={{ color: cyan }}
                >
                  More reviews
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ INSURANCE ═══════════════════ */}
      <section
        className="relative px-6 lg:px-10 py-16 overflow-hidden"
        style={{ borderTop: `1px solid ${navy}10` }}
      >
        <div className="relative max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-md">
              <p
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: `${navy}50` }}
              >
                — Insurance-Friendly
              </p>
              <p
                className="font-editorial text-2xl leading-snug"
                style={{ color: navy }}
              >
                We accept most major plans, and we&apos;ll verify your
                benefits before your first visit.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm max-w-xl">
              {insurers.map((p) => (
                <span
                  key={p}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  style={{ color: navy }}
                >
                  {p}
                </span>
              ))}
            </div>
            <Link
              href="/insurance"
              className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity shrink-0"
              style={{ color: blue }}
            >
              View details
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <FAQSection faqs={faqs} />

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <CTASection
        headline="Take the first step toward feeling better today."
        subheadline="Most new patients are seen within one week. Same-day and next-day appointments sometimes available."
      />
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  FlourishOrnament,
  BotanicalSprig,
  GlyphWatermark,
  DotGridPattern,
} from "@/components/ui/Ornaments";

export const metadata: Metadata = {
  title: "Dr. Raad Jajo — Founder | Jajo Psychiatry",
  description:
    "Remembering Dr. Raad Jajo, founder of Jajo Psychiatry. A renowned psychiatrist who dedicated over two decades to compassionate, individualized mental health care in metro Detroit.",
};

export default function FounderPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#1F1A14]">
      {/* Breadcrumbs */}
      <div className="px-6 lg:px-10 pt-8">
        <div className="max-w-[1400px] mx-auto">
          <Breadcrumbs
            items={[
              { name: "About", href: "/about" },
              { name: "Our Founder", href: "/about/founder" },
            ]}
          />
        </div>
      </div>

      {/* Hero — large portrait with editorial tribute */}
      <section className="relative px-6 lg:px-10 pt-6 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-[#EADCC2]">
                <Image
                  src="/images/team/dr-raad-jajo.jpg"
                  alt="Dr. Raad Jajo, Founder of Jajo Psychiatry"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1F1A14]/40 to-transparent" />
              </div>
              <p className="mt-5 text-xs tracking-[0.3em] uppercase text-[#8B6F4E] text-center">
                — In loving memory —
              </p>
            </div>

            {/* Copy */}
            <div className="lg:col-span-7 lg:pt-6">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-5">
                — Our Founder
              </p>
              <h1 className="font-editorial text-[2.75rem] sm:text-[3.5rem] lg:text-[5.5rem] leading-[0.95] text-[#1F1A14] mb-8">
                Dr. Raad Jajo,
                <br />
                <em className="italic text-[#8B6F4E]">M.D.</em>
              </h1>
              <p className="font-editorial text-2xl lg:text-[1.75rem] leading-[1.3] text-[#1F1A14] mb-8">
                Founder of Jajo Psychiatry. A renowned psychiatrist who devoted
                more than two decades to the care of patients across metro
                Detroit.
              </p>
              <p className="text-[#1F1A14]/60 leading-relaxed text-lg mb-8 max-w-xl">
                Dr. Jajo built this practice around a simple principle: every
                patient is unique, and care should be shaped around them. He
                was known by patients and colleagues alike for his warmth, his
                meticulous attention to detail, and his unwavering commitment
                to the people he treated.
              </p>
              <p className="text-[#1F1A14]/60 leading-relaxed text-lg max-w-xl">
                His legacy lives on in the practice he built, in the family who
                carries it forward, and in the countless patients whose lives
                he touched.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A life in psychiatry */}
      <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
        <BotanicalSprig className="absolute -right-24 top-0 w-[480px] h-[480px] text-[#1F1A14] opacity-[0.05] hidden lg:block rotate-180" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-5">
                — A Life in Psychiatry
              </p>
              <FlourishOrnament className="hidden lg:flex mb-8" />

              <p className="hidden lg:block font-editorial text-[#1F1A14] text-2xl leading-snug max-w-[18rem] mb-2">
                Dr. Raad Jajo,
                <br />
                <em className="italic text-[#8B6F4E]">M.D.</em>
              </p>
              <p className="hidden lg:block text-[10px] tracking-[0.2em] uppercase text-[#1F1A14]/40 mb-10">
                Founder · Psychiatrist
              </p>

              <div className="hidden lg:block max-w-[16rem]">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-editorial text-5xl text-[#8B6F4E]">
                    20+
                  </span>
                  <span className="text-xs text-[#1F1A14]/55 leading-tight">
                    Years
                    <br />
                    in psychiatry
                  </span>
                </div>
                <div className="h-px bg-[#1F1A14]/10 my-6" />
                <p className="font-editorial italic text-[#8B6F4E]/80 text-lg leading-snug">
                  &ldquo;Every individual is unique.&rdquo;
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[#1F1A14]/70 leading-relaxed text-lg">
              <p className="font-editorial text-2xl lg:text-[2rem] leading-[1.3] text-[#1F1A14]">
                Twenty years of experience. A lifetime of care.
              </p>
              <p>
                Dr. Raad Jajo brought more than two decades of experience in
                psychiatry to every patient who walked through his door. He
                treated the full spectrum of mental health conditions &mdash;
                depression, anxiety, ADHD, bipolar disorder, PTSD, and
                schizophrenia &mdash; with a patient-first philosophy rooted in
                listening carefully, treating thoughtfully, and standing
                alongside his patients over the long arc of their care.
              </p>
              <p>
                Colleagues described him as a renowned psychiatrist. Patients
                described him differently: as the doctor who listened, who
                explained things clearly, who took the time. He built the kind
                of therapeutic relationships that lasted years, often decades.
              </p>
              <p>
                He trained his daughter, Shahad, in psychiatry &mdash; passing
                on not just clinical knowledge, but a philosophy of care that
                continues to guide our practice today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tribute card — dark */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#1F1A14] text-[#F8F4EC] rounded-[2rem] p-10 lg:p-20">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E8C9A0] mb-6">
                — A Legacy of Care
              </p>
              <p className="font-editorial text-3xl lg:text-[3rem] leading-[1.15] mb-8">
                &ldquo;He really cares about the patient &mdash;{" "}
                <em className="italic text-[#E8C9A0]">
                  which to me is a key component when choosing a doctor.
                </em>
                &rdquo;
              </p>
              <p className="text-sm tracking-wider uppercase text-white/50">
                &mdash; A patient of Dr. Jajo
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10 grid md:grid-cols-3 gap-10">
              <div>
                <p className="font-editorial text-5xl text-[#E8C9A0] mb-3">
                  20+
                </p>
                <p className="text-sm text-white/60">
                  Years practicing psychiatry in metro Detroit
                </p>
              </div>
              <div>
                <p className="font-editorial text-5xl text-[#E8C9A0] mb-3">
                  Thousands
                </p>
                <p className="text-sm text-white/60">
                  Of patients cared for across his career
                </p>
              </div>
              <div>
                <p className="font-editorial text-5xl text-[#E8C9A0] mb-3">
                  One
                </p>
                <p className="text-sm text-white/60">
                  Practice, built to carry his philosophy forward
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrying the work forward */}
      <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
        <GlyphWatermark
          className="left-[5%] -bottom-24 hidden lg:block"
          glyph="J"
          size="30rem"
          opacity={0.045}
        />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
                — Carrying the Work Forward
              </p>
              <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05]">
                His practice,<br />
                <em className="italic text-[#8B6F4E]">
                  in the hands of family.
                </em>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[#1F1A14]/70 leading-relaxed text-lg">
              <p>
                Today, Jajo Psychiatry is owned and led by Dr. Jajo&apos;s
                daughter, <strong className="text-[#1F1A14]">Shahad Jajo
                Jonna, PA-C</strong>, a board-certified Physician Assistant
                specializing in Psychiatry. Shahad trained directly under her
                father and spent nearly a decade working alongside him before
                taking the practice forward.
              </p>
              <p>
                She leads a team of experienced providers who share her
                father&apos;s commitment to personalized, unhurried,
                evidence-based care &mdash; the way he always practiced it.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/about/providers"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1F1A14] text-[#F8F4EC] text-sm font-medium hover:bg-[#3D2E1F] transition-colors"
                >
                  Meet our providers
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#1F1A14]/20 text-[#1F1A14] text-sm hover:bg-[#1F1A14]/5 transition-colors"
                >
                  About the practice
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

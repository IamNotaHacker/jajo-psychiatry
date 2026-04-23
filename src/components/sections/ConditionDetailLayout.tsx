import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import {
  FlourishOrnament,
  BotanicalSprig,
  GlyphWatermark,
} from "@/components/ui/Ornaments";

interface FAQ {
  question: string;
  answer: string;
}

interface ConditionDetailLayoutProps {
  conditionSlug: string;
  conditionName: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleEm: string;
  heroDescription: string;
  heroImage?: string;
  intro: string[];
  sidebarStat?: string;
  sidebarStatLabel?: string;
  sidebarNote?: string;
  symptoms: string[];
  treatmentParagraphs: string[];
  whenToSeekHelp: string[];
  faqs: FAQ[];
  ctaHeadline: string;
  ctaSubheadline: string;
  relatedServices?: { name: string; href: string }[];
}

export function ConditionDetailLayout({
  conditionName,
  heroEyebrow,
  heroTitle,
  heroTitleEm,
  heroDescription,
  heroImage,
  intro,
  sidebarStat,
  sidebarStatLabel,
  sidebarNote,
  symptoms,
  treatmentParagraphs,
  whenToSeekHelp,
  faqs,
  ctaHeadline,
  ctaSubheadline,
  relatedServices,
}: ConditionDetailLayoutProps) {
  return (
    <div className="bg-[#F8F4EC] text-[#1B1F4B]">
      <PageHero
        breadcrumbs={[
          { name: "Conditions", href: "/conditions" },
          { name: conditionName, href: "#" },
        ]}
        eyebrow={heroEyebrow}
        title={heroTitle}
        titleEm={heroTitleEm}
        description={heroDescription}
        image={heroImage}
      />

      {/* Intro */}
      <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
        <BotanicalSprig className="absolute -left-20 top-10 w-[420px] h-[420px] text-[#1B1F4B] opacity-[0.05] hidden lg:block" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1B1F4B]/50 mb-5">
                — {conditionName}
              </p>
              <FlourishOrnament className="hidden lg:flex mb-8" />

              {sidebarStat && (
                <div className="hidden lg:block mb-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-editorial text-5xl text-[#2D5DA1]">
                      {sidebarStat}
                    </span>
                  </div>
                  {sidebarStatLabel && (
                    <p className="text-xs text-[#1B1F4B]/55 mt-2 max-w-[16rem] leading-relaxed">
                      {sidebarStatLabel}
                    </p>
                  )}
                </div>
              )}

              {sidebarNote && (
                <div className="hidden lg:block">
                  <div className="h-px bg-[#1B1F4B]/10 mb-6" />
                  <p className="font-editorial italic text-[#2D5DA1]/80 text-lg leading-snug max-w-[16rem]">
                    {sidebarNote}
                  </p>
                </div>
              )}
            </div>
            <div className="lg:col-span-8 space-y-6 text-[#1B1F4B]/70 leading-relaxed text-lg">
              {intro.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "font-editorial text-2xl lg:text-[1.75rem] leading-[1.3] text-[#1B1F4B]"
                      : ""
                  }
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms — no numbers, larger text */}
      <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
        <GlyphWatermark
          className="-right-16 top-0 hidden lg:block"
          glyph="J"
          size="26rem"
          opacity={0.04}
        />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-[#1B1F4B]/50 mb-3">
              — Signs &amp; Symptoms
            </p>
            <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05] max-w-2xl">
              What it can<br />
              <em className="italic text-[#2D5DA1]">look like.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1B1F4B]/10 rounded-2xl overflow-hidden">
            {symptoms.map((symptom) => (
              <div
                key={symptom}
                className="bg-[#F8F4EC] p-6 lg:p-7 flex items-center gap-4"
              >
                <span className="text-[#2D5DA1] shrink-0">—</span>
                <span className="text-[#1B1F4B]/80 text-base leading-relaxed">
                  {symptom}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#1B1F4B] text-[#F8F4EC] rounded-[2rem] p-10 lg:p-16">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <p className="text-xs tracking-[0.3em] uppercase text-[#4DC9F6] mb-4">
                  — Our Approach
                </p>
                <h2 className="font-editorial text-3xl lg:text-4xl leading-[1.05]">
                  How we<br />
                  <em className="italic text-[#4DC9F6]">treat it.</em>
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-5 text-white/70 leading-relaxed">
                {treatmentParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                {relatedServices && relatedServices.length > 0 && (
                  <div className="pt-6 flex flex-wrap gap-3">
                    {relatedServices.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-[#4DC9F6] text-sm hover:bg-white/5 transition-colors"
                      >
                        {svc.name}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to seek help */}
      <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
        <BotanicalSprig className="absolute -right-24 bottom-0 w-[380px] h-[380px] text-[#1B1F4B] opacity-[0.04] hidden lg:block rotate-180" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1B1F4B]/50 mb-3">
                — When to Seek Help
              </p>
              <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05]">
                You don&apos;t have<br />
                <em className="italic text-[#2D5DA1]">to wait.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[#1B1F4B]/70 leading-relaxed text-lg">
              {whenToSeekHelp.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection headline={ctaHeadline} subheadline={ctaSubheadline} />
    </div>
  );
}

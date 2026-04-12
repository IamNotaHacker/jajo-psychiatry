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

interface Step {
  num: string;
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  text: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceDetailLayoutProps {
  serviceSlug: string;
  serviceName: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleEm: string;
  heroDescription: string;
  heroImage?: string;
  intro: string[];
  sidebarLabel?: string;
  sidebarStat?: string;
  sidebarStatLabel?: string;
  sidebarNote?: string;
  stepsHeading?: string;
  steps?: Step[];
  benefitsHeading?: string;
  benefits?: Benefit[];
  relatedConditions?: { name: string; href: string }[];
  faqs: FAQ[];
  ctaHeadline: string;
  ctaSubheadline: string;
}

export function ServiceDetailLayout({
  serviceName,
  heroEyebrow,
  heroTitle,
  heroTitleEm,
  heroDescription,
  heroImage,
  intro,
  sidebarLabel,
  sidebarStat,
  sidebarStatLabel,
  sidebarNote,
  stepsHeading = "What to expect",
  steps,
  benefitsHeading = "Why Jajo Psychiatry",
  benefits,
  relatedConditions,
  faqs,
  ctaHeadline,
  ctaSubheadline,
}: ServiceDetailLayoutProps) {
  return (
    <div className="bg-[#F8F4EC] text-[#1F1A14]">
      <PageHero
        breadcrumbs={[
          { name: "Services", href: "/services" },
          { name: serviceName, href: "#" },
        ]}
        eyebrow={heroEyebrow}
        title={heroTitle}
        titleEm={heroTitleEm}
        description={heroDescription}
        image={heroImage}
      />

      {/* Intro prose */}
      <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
        <BotanicalSprig className="absolute -left-20 top-8 w-[420px] h-[420px] text-[#1F1A14] opacity-[0.05] hidden lg:block" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-5">
                — {sidebarLabel || serviceName}
              </p>
              <FlourishOrnament className="hidden lg:flex mb-8" />

              {sidebarStat && (
                <div className="hidden lg:block mb-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-editorial text-5xl text-[#8B6F4E]">
                      {sidebarStat}
                    </span>
                  </div>
                  {sidebarStatLabel && (
                    <p className="text-xs text-[#1F1A14]/55 mt-2 max-w-[16rem] leading-relaxed">
                      {sidebarStatLabel}
                    </p>
                  )}
                </div>
              )}

              {sidebarNote && (
                <div className="hidden lg:block">
                  <div className="h-px bg-[#1F1A14]/10 mb-6" />
                  <p className="font-editorial italic text-[#8B6F4E]/80 text-lg leading-snug max-w-[16rem]">
                    {sidebarNote}
                  </p>
                </div>
              )}
            </div>
            <div className="lg:col-span-8 space-y-6 text-[#1F1A14]/70 leading-relaxed text-lg">
              {intro.map((para, i) => (
                <p key={i} className={i === 0 ? "font-editorial text-2xl lg:text-[1.75rem] leading-[1.3] text-[#1F1A14]" : ""}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      {steps && steps.length > 0 && (
        <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
          <GlyphWatermark
            className="-right-16 -bottom-20 hidden lg:block"
            glyph="J"
            size="26rem"
            opacity={0.04}
          />
          <div className="relative max-w-[1400px] mx-auto">
            <div className="mb-14">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
                — Process
              </p>
              <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05]">
                {stepsHeading}
              </h2>
            </div>
            <div className="space-y-px bg-[#1F1A14]/10 rounded-2xl overflow-hidden">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="bg-[#F8F4EC] p-8 lg:p-10 grid lg:grid-cols-12 gap-6"
                >
                  <div className="lg:col-span-2">
                    <span className="font-editorial text-3xl text-[#1F1A14]/25">
                      {step.num}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="font-editorial text-2xl">{step.title}</h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-[#1F1A14]/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits && benefits.length > 0 && (
        <section className="px-6 lg:px-10 py-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="bg-[#1F1A14] text-[#F8F4EC] rounded-[2rem] p-10 lg:p-16">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E8C9A0] mb-3">
                — {benefitsHeading}
              </p>
              <h2 className="font-editorial text-3xl lg:text-5xl leading-[1.05] mb-12">
                What makes<br />
                <em className="italic text-[#E8C9A0]">the difference.</em>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {benefits.map((benefit) => (
                  <div key={benefit.title}>
                    <h3 className="font-editorial text-xl mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related conditions */}
      {relatedConditions && relatedConditions.length > 0 && (
        <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
          <BotanicalSprig className="absolute -right-24 top-4 w-[400px] h-[400px] text-[#1F1A14] opacity-[0.04] hidden lg:block rotate-180" />
          <div className="relative max-w-[1400px] mx-auto">
            <div className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
                — Related
              </p>
              <h2 className="font-editorial text-3xl lg:text-4xl leading-[1.1]">
                Conditions we treat
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedConditions.map((condition) => (
                <Link
                  key={condition.href}
                  href={condition.href}
                  className="group flex items-center justify-between bg-[#EADCC2]/50 hover:bg-[#EADCC2] rounded-2xl px-6 py-5 transition-colors"
                >
                  <span className="font-editorial text-xl">{condition.name}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#8B6F4E] group-hover:rotate-45 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={faqs} />
      <CTASection headline={ctaHeadline} subheadline={ctaSubheadline} />
    </div>
  );
}

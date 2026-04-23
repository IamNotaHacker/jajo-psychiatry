import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { CONDITIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mental Health Conditions We Treat | Farmington Hills, MI",
  description:
    "Jajo Psychiatry treats ADHD, anxiety, depression, bipolar disorder, PTSD, and schizophrenia in Farmington Hills, MI. Compassionate psychiatric care for adults.",
};

const conditionImages: Record<string, string> = {
  adhd: "/images/ai/office-detail.jpg",
  anxiety: "/images/ai/nature-calm.jpg",
  depression: "/images/ai/window-light.jpg",
  "bipolar-disorder": "/images/ai/abstract-calm.jpg",
  ptsd: "/images/ai/texture-warm.jpg",
  schizophrenia: "/images/ai/hero-main.jpg",
};

export default function ConditionsPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#1B1F4B]">
      <PageHero
        breadcrumbs={[{ name: "Conditions", href: "/conditions" }]}
        eyebrow="What We Treat"
        title="Specialized care for"
        titleEm="complex minds."
        description="Every person's experience is different. We take the time to understand your unique symptoms, history, and goals before recommending a treatment plan."
        image="/images/ai/nature-calm.jpg"
      />

      {/* Conditions bento */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONDITIONS.map((condition, i) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5]"
              >
                <Image
                  src={conditionImages[condition.slug] || "/images/ai/nature-calm.jpg"}
                  alt={condition.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F4B]/85 via-[#1B1F4B]/20 to-transparent" />
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="text-xs tracking-wider uppercase text-[#4DC9F6]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-[#4DC9F6] group-hover:rotate-45 transition-transform" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="font-editorial text-3xl mb-2 leading-[1.1]">
                    {condition.title}
                  </h2>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {condition.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1B1F4B]/50 mb-4">
                — Our Approach
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="font-editorial text-3xl lg:text-[2.5rem] leading-[1.2] mb-6">
                Treatment always begins with a{" "}
                <em className="italic text-[#2D5DA1]">
                  thorough psychiatric evaluation
                </em>
                .
              </p>
              <p className="text-[#1B1F4B]/60 leading-relaxed mb-4">
                From there, we develop a personalized plan that may include{" "}
                <Link
                  href="/services/medication-management"
                  className="underline underline-offset-4 decoration-[#2D5DA1] hover:text-[#1B1F4B]"
                >
                  medication management
                </Link>
                ,{" "}
                <Link
                  href="/services/genesight-testing"
                  className="underline underline-offset-4 decoration-[#2D5DA1] hover:text-[#1B1F4B]"
                >
                  GeneSight genetic testing
                </Link>{" "}
                to guide medication choices, and ongoing follow-up care through{" "}
                <Link
                  href="/services/in-person-psychiatry"
                  className="underline underline-offset-4 decoration-[#2D5DA1] hover:text-[#1B1F4B]"
                >
                  in-person
                </Link>{" "}
                or{" "}
                <Link
                  href="/services/telepsychiatry"
                  className="underline underline-offset-4 decoration-[#2D5DA1] hover:text-[#1B1F4B]"
                >
                  telepsychiatry
                </Link>{" "}
                visits.
              </p>
              <p className="text-[#1B1F4B]/60 leading-relaxed">
                We serve patients across Michigan. New patients are typically
                seen within one week.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to start treatment?"
        subheadline="Schedule a psychiatric evaluation and take the first step toward feeling better."
      />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { CONDITIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mental Health Conditions We Treat | Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Jajo Psychiatry treats ADHD, anxiety, depression, bipolar disorder, PTSD, and schizophrenia in Farmington Hills, MI. Compassionate psychiatric care and medication management for adults.",
};

export default function ConditionsPage() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Conditions", href: "/conditions" }]} />

          <div className="max-w-3xl mb-12">
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Mental Health Conditions We Treat
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Jajo Psychiatry, we provide expert psychiatric care for a range of mental
              health conditions. Every person&apos;s experience is different, which is why we
              take the time to understand your unique symptoms, history, and goals before
              recommending a treatment plan. Whether you are seeking answers for the first
              time or looking for better management of a known condition, we are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONDITIONS.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="group block bg-white rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <h2 className="font-[var(--font-heading)] text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {condition.fullTitle}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {condition.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn About Treatment{" "}
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Approach to Treatment
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Treatment at Jajo Psychiatry always begins with a thorough{" "}
            <Link href="/services/psychiatric-evaluations" className="text-primary hover:underline">
              psychiatric evaluation
            </Link>{" "}
            so we can understand the full picture. From there, we develop a personalized plan
            that may include{" "}
            <Link href="/services/medication-management" className="text-primary hover:underline">
              medication management
            </Link>
            ,{" "}
            <Link href="/services/genesight-testing" className="text-primary hover:underline">
              GeneSight genetic testing
            </Link>{" "}
            to guide medication choices, and ongoing follow-up care through{" "}
            <Link href="/services/in-person-psychiatry" className="text-primary hover:underline">
              in-person
            </Link>{" "}
            or{" "}
            <Link href="/services/telepsychiatry" className="text-primary hover:underline">
              telepsychiatry
            </Link>{" "}
            visits.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We serve patients across Michigan from our Farmington Hills office and through
            virtual appointments. New patients are typically seen within one week.
          </p>
        </div>
      </section>

      <CTASection
        headline="Ready to Start Treatment?"
        subheadline="Schedule a psychiatric evaluation and take the first step toward feeling better."
      />
    </>
  );
}
